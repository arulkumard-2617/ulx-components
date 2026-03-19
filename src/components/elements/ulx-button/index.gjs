import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { on } from "@ember/modifier";
import { registerDestructor } from "@ember/destroyable";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import UlxBadge from "../ulx-badge/index.gjs";

const RIPPLE_SIZE = 80;
const RIPPLE_DURATION_MS = 200;

/**
 * Button element component. Supports multiple variants, sizes, styles (text, outlined, raised, rounded),
 * icons, loading state, badges, and link rendering.
 *
 * ## Variants
 * - primary (default)
 * - secondary
 * - success
 * - info
 * - warning
 * - help
 * - danger
 *
 * ## Styles
 * - Standard (default)
 * - Text - use @text={{true}}
 * - Outlined - use @outlined={{true}}
 * - Raised - use @raised={{true}} for shadow
 * - Rounded - use @rounded={{true}} for circular corners
 *
 * ## Sizes
 * Pass size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.
 *
 * ## Icon Support
 * - @icon - Icon name (font icon class) passed to UlxIcon as @iconName; UlxIcon is used with type "font"
 * - @iconComponentClass - Base class for UlxIcon (e.g. "bs-icons1" for font icons); passed as componentClass to UlxIcon
 * - @iconSize - uls-v2 icon size class (e.g. s13, s16, s18) passed to UlxIcon as @size
 * - @iconPos - "left" (default) or "right"
 * - <:icon> block for custom icon markup
 * - <:default> block for custom main content (when used with <:icon>, avoids mixing named blocks with default content)
 *
 * ## Badge Support
 * - @badge - Badge value/text (passed to UlxBadge as @value)
 * - @badgeVariant - Badge variant (primary, secondary, success, info, warning, danger). Defaults to "primary"
 * - @badgeSize - Badge size (xs-size, s-size, m-size, l-size, xl-size). Defaults to "s-size"
 * - @badgeType - Badge type (circle, dot, square). Defaults to "square"
 * - @badgeCustomClass - Custom badge CSS classes (passed to UlxBadge as @customClass)
 *
 * ## WCAG
 * - Use semantic <button> element with proper type attribute
 * - Support disabled state with aria-disabled
 * - Loading state sets aria-busy for assistive technologies
 * - Icon-only buttons should have aria-label passed via ...attributes
 * - When @href is provided, renders as <a>; otherwise renders as <button> (WCAG).
 *
 * @class UlxButton
 * @param {string} [label] - Button label text
 * @param {string} [icon] - Icon name (font icon class), passed to UlxIcon
 * @param {string} [iconComponentClass] - UlxIcon base class (e.g. "bs-icons1" for font icons)
 * @param {string} [iconSize] - uls-v2 icon size class (e.g. s13, s16, s18) passed to UlxIcon as @size
 * @param {'left'|'right'} [iconPos='left'] - Icon position relative to label
 * @param {boolean} [disabled=false] - Disables the button
 * @param {string} [href] - When set, renders as <a href="{{href}}">; otherwise <button>
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'} [variant='primary'] - Button variant/type
 * @param {boolean} [raised=false] - Adds shadow for elevation
 * @param {boolean} [rounded=false] - Circular border radius
 * @param {boolean} [text=false] - Text variant (transparent background)
 * @param {boolean} [outlined=false] - Outlined variant (transparent background with border)
 * @param {string} [size] - Button size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Omit for m-size.
 * @param {boolean} [fluid=false] - Full width button
 * @param {string|number} [badge] - Badge value to display (passed to UlxBadge)
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'danger'} [badgeVariant='primary'] - Badge variant
 * @param {string} [badgeSize] - Badge size (xs-size, s-size, m-size, l-size, xl-size)
 * @param {'circle'|'dot'|'square'} [badgeType='circle'] - Badge type (defaults to "circle")
 * @param {string} [badgeCustomClass] - Custom badge CSS classes
 * @param {string} [customClass] - Additional CSS classes
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-button".
 * @param {'button'|'submit'|'reset'} [type='button'] - Button type attribute
 * @param {boolean} [loading=false] - When true, button shows loading spinner and is disabled. Use for always-on loading state.
 * @param {function} [onClick] - Click handler; may return a Promise to show loading until it settles
 * @param {Modifier} [elementRef] - Optional modifier (or element-ref callback) applied to the root element for parent ref capture (e.g. dropdown target)
 */
export default class UlxButton extends Component {
	@tracked promiseLoading = false;
	@tracked inkStyle = "";
	@tracked inkActive = false;

	_rippleTimeout = null;
	_destructor = registerDestructor(this, () => {
		clearTimeout(this._rippleTimeout);
	});

	noOpElementRef = modifier(() => () => {});

	get elementRefModifier() {
		return this.args.elementRef ?? this.args.dropdownTargetRef ?? this.noOpElementRef;
	}

	get baseClass() {
		return getComponentClass("button");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-button";
	}

	get isLink() {
		return !!this.args.href;
	}

	get effectiveLoading() {
		return !!this.args.loading || this.promiseLoading;
	}

	get buttonClasses() {
		const {
			variant = "primary",
			text,
			href,
			outlined,
			raised,
			rounded,
			size,
			fluid,
			customClass,
			label
		} = this.args;

		const parts = [this.baseClass];

		parts.push(variant);
		text && parts.push("text-button");
		href && text && parts.push("link");
		outlined && parts.push("outlined");
		raised && parts.push("raised");
		rounded && parts.push("rounded");

		parts.push(size || "m-size");

		this.hasIcon && !label && parts.push("icon-only");
		fluid && parts.push("fluid");
		this.effectiveLoading && parts.push("loading");
		this.isDisabled && parts.push("disabled");

		customClass && parts.push(customClass);

		return parts.filter(Boolean).join(" ");
	}

	get buttonSize() {
		return this.args.size || "m-size";
	}

	get hasIcon() {
		const { icon } = this.args;
		return !!icon || this.effectiveLoading;
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

	get iconToDisplay() {
		if (this.effectiveLoading) return "pi-spinner";
		return this.args.icon;
	}

	get buttonType() {
		return this.args.type || "button";
	}

	get isDisabled() {
		const { disabled } = this.args;
		return disabled || this.effectiveLoading;
	}

	get showBadge() {
		return this.args.badge !== undefined && this.args.badge !== null;
	}

	get badgeType() {
		return this.args.badgeType ?? "circle";
	}

	/**
	 * Handles click interactions for the button/link component.
	 */
	@action
	handleClick(event) {
		const { onClick, href } = this.args;

		if (this.isDisabled || this.effectiveLoading) {
			event.preventDefault();
			return;
		}

		if (href && typeof onClick === "function") {
			event.preventDefault();
		}

		if (typeof onClick === "function") {
			const result = onClick(event);

			const promise = result && typeof result.then === "function" ? result : null;

			if (promise) {
				this.promiseLoading = true;

				promise.finally(() => {
					this.promiseLoading = false;
				});
			}
		}
	}

	@action
	handleKeyDown(event) {
		if (!this.isLink || this.isDisabled) return;

		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.handleClickWithRipple(event);
		}
	}

	get iconClass() {
		const { label } = this.args;
		const parts = ["icon"];
		if (!(this.hasIcon && !label)) parts.push(this.iconPosition);
		return parts.join(" ");
	}

	get labelClass() {
		return "button-label";
	}

	get inkClass() {
		return `${this.baseClass}-ink`;
	}

	get inkActiveClass() {
		return `${this.baseClass}-ink-active`;
	}

	get inkSpanClasses() {
		return this.inkActive ? `${this.inkClass} ${this.inkActiveClass}` : this.inkClass;
	}

	@action
	handleRipple(event) {
		if (this.isDisabled) return;

		const el = event?.currentTarget;
		if (!el || typeof el.getBoundingClientRect !== "function") return;

		const rect = el.getBoundingClientRect();

		const x = typeof event.clientX === "number" ? event.clientX : rect.left + rect.width / 2;

		const y = typeof event.clientY === "number" ? event.clientY : rect.top + rect.height / 2;

		const half = RIPPLE_SIZE / 2;
		const top = y - rect.top - half;
		const left = x - rect.left - half;

		this.inkStyle = `height:${RIPPLE_SIZE}px;width:${RIPPLE_SIZE}px;top:${top}px;left:${left}px;`;

		this.inkActive = true;

		clearTimeout(this._rippleTimeout);

		this._rippleTimeout = setTimeout(() => {
			this.inkActive = false;
		}, RIPPLE_DURATION_MS);
	}

	@action
	handleClickWithRipple(event) {
		this.handleRipple(event);
		this.handleClick(event);
	}

	<template>
		{{#if this.isLink}}
			<a
				data-qa={{this.rootDataQa}}
				href={{@href}}
				class="{{this.buttonClasses}} {{@class}}"
				aria-disabled={{if this.isDisabled "true"}}
				tabindex={{if this.isDisabled "-1"}}
				aria-busy={{if this.effectiveLoading "true"}}
				{{this.elementRefModifier}}
				{{on "click" this.handleClickWithRipple}}
				{{on "keydown" this.handleKeyDown}}
				...attributes
			>
				{{#if this.showIconLeft}}
					{{#if this.effectiveLoading}}
						<span class="{{this.baseClass}}-loading-icon left" aria-hidden="true">
							<UlxProgressSpinner @size={{this.buttonSize}} @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{@iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if (has-block "default")}}
					{{yield to="default"}}
				{{else}}
					{{#if @label}}
						<span class={{this.labelClass}}>{{@label}}</span>
					{{/if}}
					{{yield}}
				{{/if}}

				{{#if this.showIconRight}}
					{{#if this.effectiveLoading}}
						<span class="{{this.baseClass}}-loading-icon right" aria-hidden="true">
							<UlxProgressSpinner @size={{this.buttonSize}} @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{@iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if this.showBadge}}
					<UlxBadge
						@value={{@badge}}
						@variant={{@badgeVariant}}
						@size={{@badgeSize}}
						@type={{this.badgeType}}
						@customClass={{@badgeCustomClass}}
					/>
				{{/if}}

				<span
					role="presentation"
					aria-hidden="true"
					class={{this.inkSpanClasses}}
					style={{this.inkStyle}}
				></span>
			</a>
		{{else}}
			<button
				data-qa={{this.rootDataQa}}
				class="{{this.buttonClasses}} {{@class}}"
				type={{this.buttonType}}
				disabled={{this.isDisabled}}
				aria-busy={{if this.effectiveLoading "true"}}
				{{this.elementRefModifier}}
				{{on "click" this.handleClickWithRipple}}
				{{on "keydown" this.handleKeyDown}}
				...attributes
			>
				{{#if this.showIconLeft}}
					{{#if this.effectiveLoading}}
						<span class="{{this.baseClass}}-loading-icon left" aria-hidden="true">
							<UlxProgressSpinner @size={{this.buttonSize}} @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{@iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if (has-block "default")}}
					{{yield to="default"}}
				{{else}}
					{{#if @label}}
						<span class={{this.labelClass}}>{{@label}}</span>
					{{/if}}
					{{yield}}
				{{/if}}

				{{#if this.showIconRight}}
					{{#if this.effectiveLoading}}
						<span class="{{this.baseClass}}-loading-icon right" aria-hidden="true">
							<UlxProgressSpinner @size={{this.buttonSize}} @color="white" aria-hidden="true" />
						</span>
					{{else if (has-block "icon")}}
						{{yield to="icon"}}
					{{else}}
						<UlxIcon
							@iconName={{this.iconToDisplay}}
							@type="font"
							@componentClass={{@iconComponentClass}}
							@size={{@iconSize}}
							@customClass={{this.iconClass}}
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}

				{{#if this.showBadge}}
					<UlxBadge
						@value={{@badge}}
						@variant={{@badgeVariant}}
						@size={{@badgeSize}}
						@type={{this.badgeType}}
						@customClass={{@badgeCustomClass}}
					/>
				{{/if}}

				<span
					role="presentation"
					aria-hidden="true"
					class={{this.inkSpanClasses}}
					style={{this.inkStyle}}
				></span>
			</button>
		{{/if}}
	</template>
}
