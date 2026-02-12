import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Progress spinner element component. Renders an infinite circular spinner using uls-v2 progress-spinner.less classes.
 * Use standalone for loading states (e.g. page or section) or inside UlxButton when @loading.
 *
 * ## Sizes (uls-v2 progress-spinner.less)
 * - xs-size, s-size, m-size, l-size, xl-size
 *
 * ## WCAG
 * - When used as the only loading indicator in a region, pass aria-label (e.g. "Loading") via ...attributes.
 * - When decorative (e.g. inside a button that already has aria-busy), use aria-hidden="true".
 *
 * @class UlxProgressSpinner
 * @param {string} [size] - Size class from parent (e.g. xs-size, s-size, m-size). Omit for default.
 * @param {string} [color] - Stroke color (any valid CSS color). Sets uls-v2 progressspinner CSS variables so the spinner uses this color; omit for theme default.
 * @param {string} [customClass] - Additional CSS classes (applied only to parent element)
 * @param {string} [componentClass] - Override base component class (default: ulx-progressspinner)
 * @param {string} [ariaLabel] - Accessible name when spinner is the main loading indicator (e.g. "Loading")
 * @param {string} [iconName] - Icon name for UlxIcon component. Used when <:icon> block is not provided.
 * @param {string} [iconSize] - Size class for the icon (e.g. "s18", "m-size"). Defaults to spinner size if not provided.
 * @param {'svg'|'font'} [iconType='svg'] - Icon type for UlxIcon component. "svg" = symbol reference; "font" = font icon.
 */
export default class UlxProgressSpinner extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("progressspinner");
	}

	get sizeClass() {
		return this.args.size ?? "s-size";
	}

	get iconSize() {
		return this.args.iconSize ?? this.sizeClass;
	}

	get spinnerClasses() {
		const { customClass } = this.args;
		const parts = [this.baseClass];
		parts.push(this.sizeClass);
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get spinnerStyle() {
		const color = this.args.color;
		if (!color) return undefined;
		const v = "ulx-progressspinner";
		return `--${v}-color: ${color}; --${v}-color1: ${color}; --${v}-color2: ${color}; --${v}-color3: ${color}; --${v}-color4: ${color}`;
	}

	<template>
		<span
			class={{this.spinnerClasses}}
			role="progressbar"
			aria-label={{t "lbl.loading"}}
			style={{this.spinnerStyle}}
			...attributes
		>
			{{#if (has-block "icon")}}
				<UlxIcon @componentClass="bs-icons1" @size={{this.iconSize}} aria-hidden="true">
					<:icon>
						{{yield to="icon"}}
					</:icon>
				</UlxIcon>
			{{else if @iconName}}
				<UlxIcon
					@componentClass="bs-icons1"
					@iconName={{@iconName}}
					@type={{@iconType}}
					@size={{this.iconSize}}
					aria-hidden="true"
				/>
			{{else}}
				<UlxIcon @componentClass="bs-icons1" @size={{this.iconSize}} aria-hidden="true">
					<:icon>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							class="progressspinner-svg"
							focusable="false"
						>
							<circle cx="12" cy="12" r="10" opacity="0.25" />
							<circle cx="12" cy="12" r="10" stroke-dasharray="38 25">
								<animateTransform
									attributeName="transform"
									type="rotate"
									dur="1s"
									repeatCount="indefinite"
									from="0 12 12"
									to="360 12 12"
								/>
							</circle>
						</svg>
					</:icon>
				</UlxIcon>
			{{/if}}
		</span>
	</template>
}
