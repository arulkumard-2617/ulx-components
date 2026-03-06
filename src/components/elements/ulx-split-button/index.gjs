import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxButton from "../ulx-button/index.gjs";
import UlxTieredmenu from "../../modules/ulx-tieredmenu/index.gjs";

/**
 * Split button: default action button plus dropdown for additional options.
 * Uses menu model for dropdown items; supports severity, size, variants (text, outlined, raised, rounded), loading, disabled.
 *
 * ## Variants (use "Variant" in demos, not "severity" for severity case)
 * - primary (default), secondary, success, info, warning, help, danger
 * - text, outlined, raised, rounded
 *
 * ## Sizes
 * xs-size, s-size, m-size (default), l-size, xl-size
 *
 * ## WCAG
 * Main button uses label for accessible name; dropdown button has aria-haspopup="menu", aria-expanded, aria-controls.
 * Menu has role="menu"; items role="menuitem". Escape closes menu and returns focus to dropdown button.
 *
 * @class UlxSplitButton
 * @param {string} [label] - Main button label
 * @param {string} [icon] - Main button icon name (font icon)
 * @param {object[]} [model] - Menu items for dropdown (MenuModel API: label, icon, command, disabled, separator, items, etc.)
 * @param {function} [onClick] - Main button click handler
 * @param {function} [onShow] - Called when dropdown opens
 * @param {function} [onHide] - Called when dropdown closes
 * @param {string} [dropdownIcon] - Dropdown trigger icon (default session-settings-icon)
 * @param {string} [dropdownIconSize] - Dropdown trigger icon size (default s16)
 * @param {boolean} [disabled=false] - Disables both buttons
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'} [variant='primary'] - Variant/type
 * @param {boolean} [raised=false] - Raised style
 * @param {boolean} [rounded=false] - Rounded corners
 * @param {boolean} [text=false] - Text variant
 * @param {boolean} [outlined=false] - Outlined variant
 * @param {string} [size] - Size class (e.g. s-size, m-size, l-size). Omit for m-size.
 * @param {string} [id] - Root element id (for aria-controls)
 */
export default class UlxSplitButton extends Component {
	@tracked menuVisible = false;
	@tracked dropdownTarget = null;

	get splitButtonRootClass() {
		return getComponentClass("splitbutton");
	}

	get buttonSize() {
		return this.args.size || "m-size";
	}

	get variantValue() {
		return this.args.variant || this.args.severity || "primary";
	}

	get menuId() {
		return this.args.id ? `${this.args.id}_overlay` : undefined;
	}

	get isDisabled() {
		return this.args.disabled;
	}

	get menuItems() {
		return this.args.model ?? [];
	}

	get dropdownIconName() {
		return this.args.dropdownIcon ?? "down-arrow-icon";
	}

	get dropdownIconComponentClass() {
		return this.args.iconComponentClass ?? "bs-icons1";
	}

	get dropdownIconSize() {
		return this.args.dropdownIconSize ?? "s18";
	}

	get rootClasses() {
		const parts = [this.splitButtonRootClass];
		parts.push(this.variantValue);
		parts.push(this.buttonSize);

		this.args.raised && parts.push("raised");
		this.args.rounded && parts.push("rounded");
		this.args.text && parts.push("text-button");
		this.args.outlined && parts.push("outlined");
		this.isDisabled && parts.push("disabled");
		this.args.loading && parts.push("loading");

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	dropdownTargetRef = modifier((element) => {
		this.dropdownTarget = element;

		return () => {
			if (this.dropdownTarget === element) {
				this.dropdownTarget = null;
			}
		};
	});

	closeOnClickOutside = modifier((element, [when], { onClose }) => {
		let listener = null;
		if (when && typeof onClose === "function") {
			const handler = (e) => {
				if (!element.contains(e.target)) onClose();
			};
			setTimeout(() => {
				listener = handler;
				document.addEventListener("click", listener, true);
			}, 0);
		}
		return () => {
			if (listener) document.removeEventListener("click", listener, true);
		};
	});

	closeOnEscape = modifier((_element, [when], { onClose }) => {
		let listener = null;
		if (when && typeof onClose === "function") {
			listener = (e) => {
				if (e.key === "Escape") {
					e.preventDefault();
					onClose();
				}
			};
			document.addEventListener("keydown", listener);
		}
		return () => {
			if (listener) document.removeEventListener("keydown", listener);
		};
	});

	@action
	handleDefaultClick(event) {
		if (this.isDisabled) {
			event.preventDefault();
			return;
		}
		const { onClick } = this.args;
		if (typeof onClick === "function") return onClick(event);
	}

	@action
	handleDropdownClick(event) {
		event.preventDefault();
		event.stopPropagation();
		if (this.isDisabled) return;
		this.menuVisible = !this.menuVisible;
		if (this.menuVisible && typeof this.args.onShow === "function") this.args.onShow();
		if (!this.menuVisible && typeof this.args.onHide === "function") this.args.onHide();
	}

	@action
	handleMenuKeydown(event) {
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			this.menuVisible ? this.hideMenu() : this.showMenu(event);
		}
	}

	@action
	showMenu(event) {
		this.menuVisible = true;
		if (typeof this.args.onShow === "function") this.args.onShow();
	}

	@action
	hideMenu() {
		this.menuVisible = false;
		if (typeof this.args.onHide === "function") this.args.onHide();
	}

	@action
	handleItemSelect() {
		this.hideMenu();
	}

	<template>
		<div
			class={{this.rootClasses}}
			{{this.closeOnClickOutside this.menuVisible onClose=this.hideMenu}}
			{{this.closeOnEscape this.menuVisible onClose=this.hideMenu}}
			...attributes
		>
			{{#if (has-block "icon")}}
				{{#if (has-block "default")}}
					<UlxButton
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@variant={{this.variantValue}}
						@raised={{@raised}}
						@rounded={{@rounded}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					>
						<:icon>{{yield to="icon"}}</:icon>
						<:default>{{yield}}</:default>
					</UlxButton>
				{{else}}
					<UlxButton
						@label={{@label}}
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@variant={{this.variantValue}}
						@raised={{@raised}}
						@rounded={{@rounded}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					>
						<:icon>{{yield to="icon"}}</:icon>
					</UlxButton>
				{{/if}}
			{{else}}
				{{#if (has-block "default")}}
					<UlxButton
						@icon={{@icon}}
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@variant={{this.variantValue}}
						@raised={{@raised}}
						@rounded={{@rounded}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					>
						{{yield}}
					</UlxButton>
				{{else}}
					<UlxButton
						@label={{@label}}
						@icon={{@icon}}
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@variant={{this.variantValue}}
						@raised={{@raised}}
						@rounded={{@rounded}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					/>
				{{/if}}
			{{/if}}

			<span class="splitbutton-divider" aria-hidden="true"></span>

			<UlxButton
				@icon={{this.dropdownIconName}}
				@iconComponentClass={{this.dropdownIconComponentClass}}
				@iconSize={{this.dropdownIconSize}}
				@disabled={{this.isDisabled}}
				@variant={{this.variantValue}}
				@raised={{@raised}}
				@rounded={{@rounded}}
				@text={{@text}}
				@outlined={{@outlined}}
				@size={{this.buttonSize}}
				@dropdownTargetRef={{this.dropdownTargetRef}}
				@onClick={{this.handleDropdownClick}}
				aria-label={{t "lbl.more.options"}}
				aria-haspopup="menu"
				aria-expanded={{this.menuVisible}}
				aria-controls={{this.menuId}}
				{{on "keydown" this.handleMenuKeydown}}
			/>

			<div
				class="absolute tpfull lt0 z-1000 mt-2
					{{if this.menuVisible 'visible transition fade in' 'hidden'}}"
			>
				<UlxTieredmenu
					id={{this.menuId}}
					@model={{this.menuItems}}
					@popup={{true}}
					@visible={{this.menuVisible}}
					@target={{this.dropdownTarget}}
					@onHide={{this.hideMenu}}
					@onItemSelect={{this.handleItemSelect}}
				/>
			</div>
		</div>
	</template>
}
