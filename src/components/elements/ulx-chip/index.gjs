import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Chip element component for displaying a compact label with optional icon, image, and remove action.
 *
 * ## WCAG
 * - Root uses `aria-label` from `@label` when present for meaningful chips.
 * - Remove button receives an accessible name (e.g. aria-label) so screen readers announce it.
 * - Keyboard: Enter, NumpadEnter, Backspace on the remove control trigger removal.
 * - Decorative icons use `aria-hidden="true"`; pass `@removeIconAriaLabel` or rely on default remove label for the remove button.
 *
 * @class UlxChip
 * @param {string} [label] - Main text shown in the chip.
 * @param {string} [icon] - Icon name/class for UlxIcon (e.g. font class); renders before label.
 * @param {string} [image] - Image URL; when set, renders before label (avatar-style).
 * @param {string} [imageAlt='chip'] - Alt text for the image.
 * @param {boolean} [removable=false] - When true, shows remove control and wires click/keyboard.
 * @param {string} [removeIcon] - Icon name for remove button; defaults to close icon from bs-icons1.
 * @param {Function} [onRemove] - Callback (event, value) when remove is triggered; value is label, image, or icon context.
 * @param {Function} [onImageError] - Callback when image fails to load.
 * @param {string} [size] - Size class (e.g. "s-size", "m-size"); applied to root.
 * @param {string} [customClass] - Extra CSS classes appended to the root.
 * @param {string} [componentClass] - Override base component class.
 */
export default class UlxChip extends Component {
	get baseClass() {
		return this.args.componentClass ?? getComponentClass("chip");
	}

	get rootClasses() {
		const { image, size, customClass } = this.args;

		const parts = [this.baseClass];
		image && parts.push("with-image");
		size && parts.push(size);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get removeIconName() {
		return this.args.removeIcon ?? "bs-icons1 close-icon-01";
	}

	get imageAltText() {
		return this.args.imageAlt ?? "chip";
	}

	get removeValue() {
		const { label, image, icon } = this.args;
		return label ?? image ?? icon ?? "";
	}

	get removeButtonAriaLabel() {
		return t("lbl.remove");
	}

	@action
	handleRemove(event) {
		event.stopPropagation();
		const value = this.removeValue;
		this.args.onRemove?.(event, value);
	}

	@action
	handleRemoveKeydown(event) {
		if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Backspace") {
			this.handleRemove(event);
		}
	}

	@action
	handleImageError(event) {
		this.args.onImageError?.(event);
	}

	<template>
		<div class={{this.rootClasses}} aria-label={{@label}} ...attributes>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				{{#if @image}}
					<img
						class="ulx-chip-image"
						src={{@image}}
						alt={{this.imageAltText}}
						{{on "error" this.handleImageError}}
					/>
				{{/if}}
				{{#if (has-block "icon")}}
					<span class="chip-icon">
						{{yield to="icon"}}
					</span>
				{{else if @icon}}
					<span class="chip-icon">
						<UlxIcon @iconName={{@icon}} @size="s22" @type="font" aria-hidden="true" />
					</span>
				{{/if}}
				{{#if @label}}
					<span class="chip-label">{{@label}}</span>
				{{/if}}
				{{#if @removable}}
					<button
						type="button"
						class="chip-remove-icon"
						aria-label={{this.removeButtonAriaLabel}}
						{{on "click" this.handleRemove}}
						{{on "keydown" this.handleRemoveKeydown}}
					>
						<UlxIcon
							@iconName={{this.removeIconName}}
							@type="font"
							@size="s22"
							aria-hidden="true"
						/>
					</button>
				{{/if}}
			{{/if}}
		</div>
	</template>
}
