import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import UlxButton from "../ulx-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import { getComponentClass } from "../../utils/component-config";

class IconButtonAffixGraphic extends Component {
	get loadingWrapperClass() {
		const { side = "left" } = this.args;
		return `${getComponentClass("button")}-loading-icon ${side}`;
	}

	<template>
		{{#if @affix.isLoading}}
			<span class={{this.loadingWrapperClass}} aria-hidden="true">
				<UlxProgressSpinner @size={{@affix.buttonSize}} @color="white" aria-hidden="true" />
			</span>
		{{else if @hasCustomIcon}}
			{{yield}}
		{{else}}
			<UlxIcon
				@iconName={{@affix.icon}}
				@type="font"
				@componentClass={{@affix.iconComponentClass}}
				@size={{@affix.iconSize}}
				@customClass={{@affix.iconClass}}
				aria-hidden="true"
			/>
		{{/if}}
	</template>
}

/**
 * Icon button wrapper built on top of UlxButton.
 * Icon/spinner content is passed into UlxButton via its prefix/suffix slots only.
 * Callers use `@iconLeft` or `@iconRight` (icon name) and optional `<:icon>`; prefix/suffix blocks are not supported.
 *
 * ## Content blocks
 * - <:icon> Optional custom icon markup; replaces the default UlxIcon when not loading
 *
 * ## Loading
 * - Pass `@loading={{true}}` for an explicit loading state
 * - Return a Promise from `@onClick` to show loading until it settles (icon spinner and button disabled state)
 *
 * ## WCAG
 * - Icon-only buttons (no `@label`) should pass `aria-label` via `...attributes`
 * - Loading state is reflected on the root button via UlxButton (`aria-busy`, disabled)
 *
 * @class UlxIconButton
 * @param {string} [label] - Button label text; omit for icon-only buttons
 * @param {string} [submittingLabel] - Label shown while loading; falls back to `@label` when omitted
 * @param {string} [iconLeft] - Icon name; renders in the prefix (left of label)
 * @param {string} [iconRight] - Icon name; renders in the suffix (right of label). If both are set, `iconRight` wins.
 * @param {string} [iconComponentClass] - UlxIcon base class (e.g. "bs-icons1")
 * @param {string} [iconSize] - Icon size class (e.g. s13, s16, s18)
 * @param {boolean} [disabled=false] - Disables the button
 * @param {string} [href] - When set, renders as `<a href="{{href}}">`; otherwise `<button>`
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'|'white'} [variant='primary'] - Button variant (`help` is accepted as an alias for `help-button`)
 * @param {boolean} [pilled=false] - Pill-shaped border radius
 * @param {boolean} [text=false] - Text variant (transparent background)
 * @param {boolean} [outlined=false] - Outlined variant (transparent background with border)
 * @param {string} [size] - Button size class (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.
 * @param {boolean} [fluid=false] - Full width button
 * @param {string} [customClass] - Additional CSS classes for the root button (adds `icon-only` when `@label` is omitted)
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to UlxButton's "ulx-button".
 * @param {'button'|'submit'|'reset'} [type='button'] - Button type attribute when rendered as `<button>`
 * @param {boolean} [loading=false] - Explicit loading state; combined with Promise-based loading from `@onClick`
 * @param {function} [onClick] - Click handler; may return a Promise to show loading until it settles
 * @param {Modifier} [elementRef] - Optional modifier applied to the root element for parent ref capture
 * @param {Modifier} [dropdownTargetRef] - Alias for `@elementRef` on UlxButton
 * @param {string} [class] - Additional CSS classes merged onto the root element
 */
export default class UlxIconButton extends Component {
	@tracked promiseLoading = false;
	get iconPosition() {
		const { iconRight } = this.args;
		return iconRight ? "right" : "left";
	}

	get resolvedIconName() {
		const { iconLeft, iconRight } = this.args;
		return iconRight ?? iconLeft;
	}

	get isLoading() {
		const { loading = false } = this.args;
		return loading || this.promiseLoading;
	}

	get hasIconContent() {
		const { iconLeft, iconRight } = this.args;
		return this.isLoading || !!(iconLeft || iconRight);
	}

	get showIconLeft() {
		return this.hasIconContent && this.iconPosition === "left";
	}

	get showIconRight() {
		return this.hasIconContent && this.iconPosition === "right";
	}

	get buttonSize() {
		return this.args.size || "m-size";
	}

	get isIconOnly() {
		return !this.args.label;
	}

	get iconClass() {
		const parts = ["icon"];
		!this.isIconOnly && parts.push(this.iconPosition);
		return parts.join(" ");
	}

	get buttonCustomClass() {
		const { customClass } = this.args;
		const parts = [];
		this.isIconOnly && parts.push("icon-only");
		customClass && parts.push(customClass);
		return parts.filter(Boolean).join(" ") || undefined;
	}

	get affixGraphicProps() {
		const { iconComponentClass, iconSize } = this.args;
		return {
			isLoading: this.isLoading,
			buttonSize: this.buttonSize,
			icon: this.resolvedIconName,
			iconComponentClass,
			iconSize,
			iconClass: this.iconClass
		};
	}

	@action
	shouldShowPrefixAffix(hasIconBlock) {
		return this.showIconLeft || (!!hasIconBlock && this.iconPosition === "left");
	}

	@action
	shouldShowSuffixAffix(hasIconBlock) {
		return this.showIconRight || (!!hasIconBlock && this.iconPosition === "right");
	}

	@action
	handleClick(event) {
		const { onClick } = this.args;

		if (typeof onClick !== "function") {
			return;
		}

		const result = onClick(event);
		const promise = result && typeof result.then === "function" ? result : null;

		if (promise) {
			this.promiseLoading = true;

			promise.finally(() => {
				this.promiseLoading = false;
			});
		}

		return result;
	}

	<template>
		{{#let (has-block "icon") as |hasIconBlock|}}
			<UlxButton
				@label={{@label}}
				@submittingLabel={{@submittingLabel}}
				@href={{@href}}
				@variant={{@variant}}
				@pilled={{@pilled}}
				@text={{@text}}
				@outlined={{@outlined}}
				@size={{@size}}
				@fluid={{@fluid}}
				@disabled={{@disabled}}
				@dataQa={{@dataQa}}
				@type={{@type}}
				@loading={{@loading}}
				@onClick={{this.handleClick}}
				@elementRef={{@elementRef}}
				@dropdownTargetRef={{@dropdownTargetRef}}
				@class={{@class}}
				@customClass={{this.buttonCustomClass}}
				...attributes
			>
				<:prefix>
					{{#if (this.shouldShowPrefixAffix hasIconBlock)}}
						<IconButtonAffixGraphic
							@affix={{this.affixGraphicProps}}
							@hasCustomIcon={{hasIconBlock}}
							@side="left"
						>
							{{yield to="icon"}}
						</IconButtonAffixGraphic>
					{{/if}}
				</:prefix>

				<:suffix>
					{{#if (this.shouldShowSuffixAffix hasIconBlock)}}
						<IconButtonAffixGraphic
							@affix={{this.affixGraphicProps}}
							@hasCustomIcon={{hasIconBlock}}
							@side="right"
						>
							{{yield to="icon"}}
						</IconButtonAffixGraphic>
					{{/if}}
				</:suffix>
			</UlxButton>
		{{/let}}
	</template>
}
