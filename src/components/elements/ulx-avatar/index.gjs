import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Avatar component for displaying user representations using images, icons, or text labels.
 *
 * ## WCAG
 * - **Decorative avatars**: By default, avatars are decorative (`aria-hidden="true"`). For meaningful avatars (e.g., user profile pictures), provide `@ariaLabel` to make them accessible.
 * - **Image avatars**: When using `@type="image"`, ensure the image has an `alt` attribute or provide `@ariaLabel` for accessible name.
 * - **Icon avatars**: Icons within avatars inherit accessibility from UlxIcon component. Provide `@ariaLabel` when the icon conveys meaning.
 * - **Text avatars**: Text labels are decorative by default. Provide `@ariaLabel` when the avatar represents a specific person or entity.
 * - **Interactive avatars**: When `@clickable` is true, automatically makes avatar focusable (`tabindex="0"`). Requires `@ariaLabel` for accessible name.
 * - **Override via attributes**: You can override accessibility attributes via `...attributes` (e.g., `aria-hidden="false"`, `role="img"`, `aria-label="..."`).
 *
 * @class UlxAvatar
 * @param {string} [type="text"] - Avatar type: "image" | "icon" | "text". Determines how content is rendered.
 * @param {string} [label] - Text label to display when `@type="text"`. Typically initials or short text.
 * @param {string} [image] - Image URL to display when `@type="image"`.
 * @param {string} [imageAlt] - Alt text for the image when `@type="image"`. Falls back to `@ariaLabel` or `@label` if not provided. Use empty string for decorative images.
 * @param {string} [iconName] - Icon name/class to display when `@type="icon"`. Passed to UlxIcon component.
 * @param {string} [variant] - Color variant for avatar background. Options: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "red" | "green" | "blue" | "purple" | "orange" | "gold" | "black" | "grey" | "yellow" | "violet" | "pink" | "brown" | "teal" | "darkturquoise" | "olive" | "nightblue" | "magenta". Defaults to no variant (uses default background).
 * @param {string} [size="m-size"] - Size variant: "xs-size" | "s-size" | "m-size" | "l-size" | "xl-size". Defaults to "m-size".
 * @param {string} [shape="square"] - Shape variant: "circle" | "square". Defaults to "square".
 * @param {string} [ariaLabel] - Accessible name for meaningful avatars. When provided, automatically sets `aria-hidden="false"` and `role="img"`.
 * @param {boolean} [disabled=false] - When true, applies disabled styling and prevents interaction.
 * @param {boolean} [clickable=false] - When true, applies clickable styling with hover/active states. Requires `@ariaLabel` for accessibility.
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [componentClass] - Override base component class (defaults to "ulx-avatar").
 */
export default class UlxAvatar extends Component {
	get baseClass() {
		const { componentClass } = this.args;
		return componentClass ?? getComponentClass("avatar");
	}

	get rootClasses() {
		const {
			variant,
			size = "m-size",
			shape = "square",
			disabled = false,
			clickable = false,
			image,
			customClass
		} = this.args;

		const parts = [this.baseClass];

		// Variant (color)
		variant && parts.push(variant);

		// Size
		parts.push(size);

		// Shape
		shape === "circle" && parts.push("circle");
		shape === "square" && parts.push("square");

		// Image class
		image && parts.push("image");

		// States
		disabled && parts.push("disabled");
		clickable && parts.push("clickable");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get avatarType() {
		return this.args.type ?? "text";
	}

	get isImageType() {
		return this.avatarType === "image";
	}

	get isIconType() {
		return this.avatarType === "icon";
	}

	get isTextType() {
		return this.avatarType === "text";
	}

	get hasAriaLabel() {
		return typeof this.args.ariaLabel === "string" && this.args.ariaLabel.length > 0;
	}

	get ariaHidden() {
		return this.hasAriaLabel ? "false" : "true";
	}

	get role() {
		return this.hasAriaLabel ? "img" : undefined;
	}

	get tabindex() {
		if (this.args.clickable) {
			return this.args.disabled ? "-1" : "0";
		}
		return undefined;
	}

	get imageAlt() {
		return this.args.imageAlt ?? this.args.ariaLabel ?? this.args.label ?? t("lbl.image");
	}

	<template>
		<span
			class={{this.rootClasses}}
			aria-hidden={{this.ariaHidden}}
			role={{this.role}}
			aria-label={{@ariaLabel}}
			aria-disabled={{if @disabled "true"}}
			tabindex={{this.tabindex}}
			...attributes
		>
			{{#if this.isImageType}}
				<img src={{@image}} alt={{this.imageAlt}} class="avatar-image" />
			{{else if this.isIconType}}
				<span class="avatar-icon">
					<UlxIcon
						@iconName={{@iconName}}
						@type={{@iconType}}
						@componentClass={{@iconComponentClass}}
						@ariaLabel={{@iconAriaLabel}}
					/>
				</span>
			{{else if this.isTextType}}
				<span class="avatar-label">
					{{@label}}
				</span>
			{{/if}}
		</span>
	</template>
}
