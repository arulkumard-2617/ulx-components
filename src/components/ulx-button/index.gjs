import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { on } from "@ember/modifier";
import { registerDestructor } from "@ember/destroyable";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";

const RIPPLE_SIZE = 80;
const RIPPLE_DURATION_MS = 200;

/**
 * Button element component. Supports multiple variants, sizes, styles (text, outlined, pilled),
 * loading state, link rendering, and external content slots via named blocks.
 *
 * ## Variants
 * - primary (default)
 * - secondary
 * - success
 * - info
 * - warning
 * - help-button
 * - danger
 * - white (outlined on primary / dark backgrounds)
 *
 * ## Styles
 * - Standard (default)
 * - Text - use @text={{true}}
 * - Outlined - use @outlined={{true}}
 * - Pilled - use @pilled={{true}} for pill-shaped corners (ULX `pilled` style)
 *
 * ## Sizes
 * Pass size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.
 *
 * ## Content Blocks
 * - <:prefix> Render content before the main label/default content
 * - <:default> Render main button content
 * - <:suffix> Render content after the main label/default content
 *
 * This component no longer renders icon/loading/badge internals directly.
 * Those should be passed from the outside through named blocks.
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
 * @param {boolean} [disabled=false] - Disables the button
 * @param {string} [href] - When set, renders as <a href="{{href}}">; otherwise <button>
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'|'white'} [variant='primary'] - Button variant/type (`help` is accepted as an alias for `help-button`)
 * @param {boolean} [pilled=false] - Pill-shaped border radius (adds `pilled` class)
 * @param {boolean} [text=false] - Text variant (transparent background)
 * @param {boolean} [outlined=false] - Outlined variant (transparent background with border)
 * @param {string} [size] - Button size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Omit for m-size.
 * @param {boolean} [fluid=false] - Full width button
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
			pilled,
			size,
			fluid,
			customClass
		} = this.args;

		const resolvedVariant = variant === "help" ? "help-button" : variant;

		const parts = [this.baseClass];

		parts.push(resolvedVariant);
		text && parts.push("text-button");
		href && text && parts.push("link");
		outlined && parts.push("outlined");
		pilled && parts.push("pilled");

		parts.push(size || "m-size");

		fluid && parts.push("fluid");
		this.effectiveLoading && parts.push("loading");
		this.isDisabled && parts.push("disabled");

		customClass && parts.push(customClass);

		return parts.filter(Boolean).join(" ");
	}

	get buttonType() {
		return this.args.type || "button";
	}

	get isDisabled() {
		const { disabled } = this.args;
		return disabled || this.effectiveLoading;
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
				{{#if (has-block "prefix")}}
					{{yield to="prefix"}}
				{{/if}}

				{{#if (has-block "default")}}
					{{yield to="default"}}
				{{else}}
					{{#if @label}}
						<span class={{this.labelClass}}>{{@label}}</span>
					{{/if}}
					{{yield}}
				{{/if}}

				{{#if (has-block "suffix")}}
					{{yield to="suffix"}}
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
				{{#if (has-block "prefix")}}
					{{yield to="prefix"}}
				{{/if}}

				{{#if (has-block "default")}}
					{{yield to="default"}}
				{{else}}
					{{#if @label}}
						<span class={{this.labelClass}}>{{@label}}</span>
					{{/if}}
					{{yield}}
				{{/if}}

				{{#if (has-block "suffix")}}
					{{yield to="suffix"}}
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
