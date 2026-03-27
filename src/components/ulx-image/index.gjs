import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";

/**
 * Content image wrapper using ULS `image.less` classes (`ulx-image` and modifiers).
 *
 * ## WCAG
 * - Pass a non-empty `@alt` when the image conveys information; use `@alt=""` for decorative images (default `alt` is empty).
 * - If loading fails and `@alt` is meaningful, a fallback exposes `role="img"` and an accessible name that includes the alt text and a failure message.
 * - Decorative images that fail to load are removed from accessibility order via `aria-hidden="true"` on the root.
 * - You may pass `role`, `aria-label`, `aria-labelledby`, or other overrides through `...attributes` on the root.
 *
 * @class UlxImage
 * @param {string} src - Image URL.
 * @param {string} [alt=""] - `alt` for the inner `<img>`; empty string for decorative images.
 * @param {'square'|'rounded'|'circle'} [shape] - `rounded` / `circle` map to ULS modifiers. `square` adds the `square` crop modifier; pair with `@size` so ULS applies fixed square dimensions.
 * @param {'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'|'xxl-size'|'xxxl-size'} [size] - ULS image scale class (see `image.less`).
 * @param {'cover'|'contain'|'fill'} [objectFit] - `object-*` modifier on the root.
 * @param {'square'|'video'|'portrait'|'four-three'} [aspectRatio] - `img-aspect-*` preset on the root.
 * @param {100|75|50|25} [widthFill] - Fluid width utility `img-size-*`.
 * @param {string|number} [width] - `width` attribute on `<img>` (layout hint / CLS).
 * @param {string|number} [height] - `height` attribute on `<img>` (layout hint / CLS).
 * @param {'lazy'|'eager'} [loading] - Native `loading` hint.
 * @param {'auto'|'sync'|'async'} [decoding] - Native `decoding`.
 * @param {'anonymous'|'use-credentials'} [crossorigin] - Native `crossorigin`.
 * @param {string} [customClass] - Extra classes on the root.
 * @param {string} [componentClass] - Override base class (defaults to `getComponentClass('image')`).
 * @param {string} [dataQa] - `data-qa` on the root (defaults to `ulx-image`).
 */
export default class UlxImage extends Component {
	@tracked loadFailed = false;

	get baseClass() {
		const { componentClass } = this.args;
		return componentClass ?? getComponentClass("image");
	}

	get rootDataQa() {
		const { dataQa } = this.args;
		return dataQa ?? "ulx-image";
	}

	get resolvedAlt() {
		const { alt = "" } = this.args;
		return alt;
	}

	get isMeaningful() {
		return this.resolvedAlt.length > 0;
	}

	get failureAriaLabel() {
		return `${this.resolvedAlt} — ${t("msg.image.load.failed")}`;
	}

	get rootClasses() {
		const { shape, size, objectFit, aspectRatio, widthFill, customClass } = this.args;

		const parts = [this.baseClass];

		size && parts.push(size);

		shape === "square" && parts.push("square");
		shape === "rounded" && parts.push("rounded");
		shape === "circle" && parts.push("circle");

		objectFit === "cover" && parts.push("object-cover");
		objectFit === "contain" && parts.push("object-contain");
		objectFit === "fill" && parts.push("object-fill");

		aspectRatio === "square" && parts.push("img-aspect-square");
		aspectRatio === "video" && parts.push("img-aspect-video");
		aspectRatio === "portrait" && parts.push("img-aspect-portrait");
		aspectRatio === "four-three" && parts.push("img-aspect-four-three");

		widthFill === 100 && parts.push("img-size-100");
		widthFill === 75 && parts.push("img-size-75");
		widthFill === 50 && parts.push("img-size-50");
		widthFill === 25 && parts.push("img-size-25");

		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get imgWidth() {
		const { width } = this.args;
		return width === undefined || width === null ? undefined : width;
	}

	get imgHeight() {
		const { height } = this.args;
		return height === undefined || height === null ? undefined : height;
	}

	get rootAriaHidden() {
		return this.loadFailed && !this.isMeaningful ? "true" : undefined;
	}

	@action
	handleLoad() {
		this.loadFailed = false;
	}

	@action
	handleError() {
		this.loadFailed = true;
	}

	<template>
		{{#if @src}}
			<span
				class={{this.rootClasses}}
				data-qa={{this.rootDataQa}}
				aria-hidden={{this.rootAriaHidden}}
				...attributes
			>
				{{#if this.loadFailed}}
					{{#if this.isMeaningful}}
						<span class="flex items-center justify-center w-full min-h-40 text-12 fg-secondary" role="img" aria-label={{this.failureAriaLabel}}></span>
					{{/if}}
				{{else}}
					<img
						src={{@src}}
						alt={{this.resolvedAlt}}
						width={{this.imgWidth}}
						height={{this.imgHeight}}
						loading={{@loading}}
						decoding={{@decoding}}
						crossorigin={{@crossorigin}}
						{{on "load" this.handleLoad}}
						{{on "error" this.handleError}}
					/>
				{{/if}}
			</span>
		{{/if}}
	</template>
}
