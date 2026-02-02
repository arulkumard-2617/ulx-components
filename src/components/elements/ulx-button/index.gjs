import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";

/**
 * Button element component based on PrimeReact Button API.
 * Supports multiple severities, sizes, variants (text, outlined, raised, rounded),
 * icons, loading state, badges, and link rendering.
 *
 * ## Severities
 * - primary (default)
 * - secondary
 * - success
 * - info
 * - warning
 * - help
 * - danger
 *
 * ## Variants
 * - Standard (default)
 * - Text - use @text={{true}}
 * - Outlined - use @outlined={{true}}
 * - Raised - use @raised={{true}} for shadow
 * - Rounded - use @rounded={{true}} for circular corners
 *
 * ## Sizes
 * - small
 * - normal (default)
 * - large
 *
 * ## Icon Support
 * - @icon - Icon name (font icon class) passed to UlxIcon as @iconName; UlxIcon is used with type "font"
 * - @iconComponentClass - Base class for UlxIcon (e.g. "bs-icons1" for font icons); passed as componentClass to UlxIcon
 * - @iconSize - uls-v2 icon size class (e.g. s13, s16, s18) passed to UlxIcon as @size
 * - @iconPos - "left" (default) or "right"
 * - <:icon> block for custom icon markup
 *
 * ## Badge Support
 * - @badge - Badge value/text
 * - @badgeClass - Custom badge classes
 * - @badgeSeverity - Badge severity (primary, secondary, success, info, warning, help, danger)
 *
 * ## WCAG
 * - Use semantic <button> element with proper type attribute
 * - Support disabled state with aria-disabled
 * - Loading state shows aria-busy and aria-live for screen readers
 * - Icon-only buttons should have aria-label passed via ...attributes
 * - Link buttons render as <a> with proper role when @link={{true}}
 *
 * @class UlxButton
 * @param {string} [label] - Button label text
 * @param {string} [icon] - Icon name (font icon class), passed to UlxIcon
 * @param {string} [iconComponentClass] - UlxIcon base class (e.g. "bs-icons1" for font icons)
 * @param {string} [iconSize] - uls-v2 icon size class (e.g. s13, s16, s18) passed to UlxIcon as @size
 * @param {'left'|'right'} [iconPos='left'] - Icon position relative to label
 * @param {boolean} [loading=false] - Shows loading state with spinner
 * @param {boolean} [disabled=false] - Disables the button
 * @param {boolean} [link=false] - Renders as anchor <a> tag instead of <button>
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'} [severity='primary'] - Button severity/type
 * @param {boolean} [raised=false] - Adds shadow for elevation
 * @param {boolean} [rounded=false] - Circular border radius
 * @param {boolean} [text=false] - Text variant (transparent background)
 * @param {boolean} [outlined=false] - Outlined variant (transparent background with border)
 * @param {'small'|'large'} [size] - Button size (omit for normal)
 * @param {boolean} [fluid=false] - Full width button
 * @param {string} [badge] - Badge value to display
 * @param {string} [badgeClass] - Custom badge CSS classes
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'} [badgeSeverity='primary'] - Badge severity
 * @param {string} [customClass] - Additional CSS classes
 * @param {'button'|'submit'|'reset'} [type='button'] - Button type attribute
 * @param {function} [onClick] - Click handler
 */
export default class UlxButton extends Component {
	get baseClass() {
		return getComponentClass("button");
	}

	get buttonClasses() {
		const parts = [this.baseClass];

		// Severity (as separate class, not hyphenated)
		const severity = this.args.severity || "primary";
		parts.push(severity);

		// Variants (as separate classes)
		if (this.args.text) parts.push("text");
		// ULS .button.link = literal link look (link color, no bg/border); .underline = underlined by default
		if (this.args.link && this.args.text) {
			parts.push("link", "underline");
		}
		if (this.args.outlined) parts.push("outlined");
		if (this.args.raised) parts.push("raised");
		if (this.args.rounded) parts.push("rounded");

		// Size (ULS uses s-size, m-size, l-size, xl-size, xxl-size, xs-size)
		if (this.args.size === "small") parts.push("s-size");
		else if (this.args.size === "large") parts.push("l-size");
		else if (this.args.size === "xlarge") parts.push("xl-size");
		else parts.push("m-size"); // Default medium size

		// Icon only (no label): use uls-v2 ifxb center-all to center icon in button
		if (this.hasIcon && !this.args.label) {
			parts.push("icon-only", "ifxb", "center-all");
		}

		// Fluid (full width)
		if (this.args.fluid) parts.push("fluid");

		// Loading state
		if (this.args.loading) parts.push("loading");

		// Disabled state
		if (this.isDisabled) parts.push("disabled");

		// Custom classes
		if (this.args.customClass) parts.push(this.args.customClass);

		return parts.filter(Boolean).join(" ");
	}

	get hasIcon() {
		return this.args.icon || this.args.loading;
	}

	get hasCustomIconBlock() {
		return false; // Will be checked in template with has-block
	}

	get iconPosition() {
		return this.args.iconPos || "left";
	}

	get showIconLeft() {
		return this.hasIcon && this.iconPosition === "left";
	}

	get showIconRight() {
		return this.hasIcon && this.iconPosition === "right";
	}

	get loadingIconName() {
		// Use loading/spinner icon
		return "pi-spinner";
	}

	get iconToDisplay() {
		if (this.args.loading) {
			return this.loadingIconName;
		}
		return this.args.icon;
	}

	get buttonType() {
		return this.args.type || "button";
	}

	get isDisabled() {
		return this.args.disabled || this.args.loading;
	}

	get badgeClass() {
		const parts = [`${this.baseClass}-badge`];

		if (this.args.badgeClass) {
			parts.push(this.args.badgeClass);
		}

		return parts.join(" ");
	}

	get showBadge() {
		return this.args.badge !== undefined && this.args.badge !== null;
	}

	@action
	handleClick(event) {
		if (this.isDisabled) {
			event.preventDefault();
			return;
		}
		if (typeof this.args.onClick === "function") {
			this.args.onClick(event);
			// When rendered as link with custom onClick, prevent navigation
			if (this.args.link) {
				event.preventDefault();
			}
		}
	}

	get iconClass() {
		const parts = ["icon"];
		// Icon-only: omit left/right so no margin is applied (icon stays centered via ifxb center-all on button)
		// Do not add baseClass-icon: uls-v2 uses that for the standalone circular button (box-shadow, border) which would draw a ring
		if (!(this.hasIcon && !this.args.label)) {
			parts.push(this.iconPosition);
		}
		// Use uls-v2 fx-item self-center: with label = center icon vs text; icon-only = center icon in button
		if (this.hasIcon && !this.args.loading) {
			parts.push("fx-item", "self-center");
		}
		return parts.filter(Boolean).join(" ");
	}

	get labelClass() {
		return "button-label";
	}

	<template>
		{{#if @link}}
			<a
				class={{this.buttonClasses}}
				role="button"
				aria-disabled={{if this.isDisabled "true"}}
				tabindex={{if this.isDisabled "-1" "0"}}
				aria-busy={{if @loading "true"}}
				{{on "click" this.handleClick}}
				...attributes
			>
				{{#if this.showIconLeft}}
					{{#if @loading}}
						<span class="{{this.baseClass}}-loading-icon left" aria-hidden="true">
							<UlxProgressSpinner @size="xs" @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{this.args.iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if @label}}
					<span class={{this.labelClass}}>{{@label}}</span>
				{{/if}}

				{{#if this.showIconRight}}
					{{#if @loading}}
						<span class="{{this.baseClass}}-loading-icon right" aria-hidden="true">
							<UlxProgressSpinner @size="xs" @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{this.args.iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if this.showBadge}}
					<span class={{this.badgeClass}}>{{@badge}}</span>
				{{/if}}

				{{yield}}
			</a>
		{{else}}
			<button
				class={{this.buttonClasses}}
				type={{this.buttonType}}
				disabled={{this.isDisabled}}
				aria-busy={{if @loading "true"}}
				{{on "click" this.handleClick}}
				...attributes
			>
				{{#if this.showIconLeft}}
					{{#if @loading}}
						<span class="{{this.baseClass}}-loading-icon left" aria-hidden="true">
							<UlxProgressSpinner @size="xs" @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{this.args.iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if @label}}
					<span class={{this.labelClass}}>{{@label}}</span>
				{{/if}}

				{{#if this.showIconRight}}
					{{#if @loading}}
						<span class="{{this.baseClass}}-loading-icon right" aria-hidden="true">
							<UlxProgressSpinner @size="xs" @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{this.args.iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if this.showBadge}}
					<span class={{this.badgeClass}}>{{@badge}}</span>
				{{/if}}

				{{yield}}
			</button>
		{{/if}}
	</template>
}
