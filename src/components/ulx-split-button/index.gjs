import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { schedule } from "@ember/runloop";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { getAdjacentFocusableInDocument } from "../../utils/focus-util";
import overlayDismiss from "../../modifiers/overlay-dismiss";
import { t } from "../../utils/i18n";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxTieredmenu from "../ulx-tieredmenu/index.gjs";

/**
 * Split button: default action button plus dropdown for additional options.
 * Uses menu model for dropdown items; supports severity, size, variants (text, outlined, pilled), loading, disabled.
 *
 * ## Variants (use "Variant" in demos, not "severity" for severity case)
 * - primary (default), secondary, success, info, warning, help-button, danger
 * - text, outlined, pilled (inner buttons)
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
 * @param {object[]} [items] - Menu items for dropdown (MenuModel API: label, icon, command, disabled, separator, items, etc.)
 * @param {function} [onClick] - Main button click handler
 * @param {function} [onShow] - Called when dropdown opens
 * @param {function} [onHide] - Called when dropdown closes
 * @param {string} [dropdownIcon] - Dropdown trigger icon (default down-arrow-icon)
 * @param {string} [dropdownIconSize] - Dropdown trigger icon size (default s18)
 * @param {boolean} [disabled=false] - Disables both buttons
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'} [variant='primary'] - Variant/type (`help` is accepted as an alias for `help-button`)
 * @param {boolean} [pilled=false] - Pill shape on inner buttons and root wrapper class
 * @param {boolean} [text=false] - Text variant
 * @param {boolean} [outlined=false] - Outlined variant
 * @param {string} [size] - Size class (e.g. s-size, m-size, l-size). Omit for m-size.
 * @param {string} [id] - Root element id (for aria-controls)
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-splitbutton".
 */
export default class UlxSplitButton extends Component {
	@tracked menuVisible = false;
	@tracked dropdownTarget = null;

	/** When Tab closes the menu from the trigger, focus target after tieredmenu `onHide`. */
	_tabOutFocus = null;

	get splitButtonRootClass() {
		return getComponentClass("splitbutton");
	}

	get buttonSize() {
		return this.args.size || "m-size";
	}

	get variantValue() {
		const raw = this.args.variant || this.args.severity || "primary";
		return raw === "help" ? "help-button" : raw;
	}

	get menuId() {
		return this.args.id ? `${this.args.id}_overlay` : undefined;
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-splitbutton";
	}

	get defaultButtonDataQa() {
		return `${this.rootDataQa}-default`;
	}

	get dividerDataQa() {
		return `${this.rootDataQa}-divider`;
	}

	get dropdownButtonDataQa() {
		return `${this.rootDataQa}-dropdown`;
	}

	get menuDataQa() {
		return `${this.rootDataQa}-menu`;
	}

	get isDisabled() {
		return this.args.disabled;
	}

	get menuItems() {
		return this.args.items ?? [];
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

	get menuCustomClassName() {
		return this.args.menuCustomClass;
	}

	get rootClasses() {
		const {
			pilled = false,
			text = false,
			outlined = false,
			loading = false,
			disabled = false
		} = this.args;
		const parts = [this.splitButtonRootClass];
		parts.push(this.variantValue);
		parts.push(this.buttonSize);
		pilled && parts.push("pilled");
		text && parts.push("text-button");
		outlined && parts.push("outlined");
		disabled && parts.push("disabled");
		loading && parts.push("loading");
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
			return;
		}

		if (event.key === "Tab" && this.menuVisible) {
			event.preventDefault();
			const menuRoot = this.menuId ? document.getElementById(this.menuId) : null;
			const nextFocusable = getAdjacentFocusableInDocument(this.dropdownTarget, {
				backward: event.shiftKey,
				excludeContaining: menuRoot ?? undefined
			});
			this._tabOutFocus = nextFocusable ?? null;
			this.menuVisible = false;
		}
	}

	@action
	showMenu(event) {
		this.menuVisible = true;
		if (typeof this.args.onShow === "function") this.args.onShow();
	}

	@action
	hideMenu(detail) {
		const tieredmenuTabOutTarget = detail?.nextFocusable;
		const dropdownTabOutTarget = this._tabOutFocus;
		this._tabOutFocus = null;
		this.menuVisible = false;
		if (typeof this.args.onHide === "function") this.args.onHide();
		if (tieredmenuTabOutTarget) {
			return;
		}
		if (dropdownTabOutTarget) {
			schedule("afterRender", () => {
				requestAnimationFrame(() => {
					dropdownTabOutTarget.focus?.({ preventScroll: true });
				});
			});
			return;
		}
		this.dropdownTarget?.focus({ preventScroll: true });
	}

	@action
	handleItemSelect() {
		this.hideMenu();
	}

	<template>
		<div
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			{{overlayDismiss
				this.menuVisible
				onClose=this.hideMenu
				dismissVariant="rootOnly"
				deferClick=true
				deferEscape=false
				escapeEventMode="minimal"
				escapeUseCapture=false
				strictEscapeKey=true
			}}
			...attributes
		>
			{{#if (has-block "icon")}}
				{{#if (has-block "default")}}
					<UlxIconButton
						@dataQa={{this.defaultButtonDataQa}}
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@loading={{@loading}}
						@variant={{this.variantValue}}
						@pilled={{@pilled}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					>
						<:icon>{{yield to="icon"}}</:icon>
						<:default>{{yield}}</:default>
					</UlxIconButton>
				{{else}}
					<UlxIconButton
						@dataQa={{this.defaultButtonDataQa}}
						@label={{@label}}
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@loading={{@loading}}
						@variant={{this.variantValue}}
						@pilled={{@pilled}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					>
						<:icon>{{yield to="icon"}}</:icon>
					</UlxIconButton>
				{{/if}}
			{{else}}
				{{#if (has-block "default")}}
					<UlxIconButton
						@dataQa={{this.defaultButtonDataQa}}
						@iconLeft={{@icon}}
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@loading={{@loading}}
						@variant={{this.variantValue}}
						@pilled={{@pilled}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					>
						{{yield}}
					</UlxIconButton>
				{{else}}
					<UlxIconButton
						@dataQa={{this.defaultButtonDataQa}}
						@label={{@label}}
						@iconLeft={{@icon}}
						@iconComponentClass={{@iconComponentClass}}
						@iconSize={{@iconSize}}
						@disabled={{this.isDisabled}}
						@loading={{@loading}}
						@variant={{this.variantValue}}
						@pilled={{@pilled}}
						@text={{@text}}
						@outlined={{@outlined}}
						@size={{this.buttonSize}}
						@customClass="split-button"
						@onClick={{this.handleDefaultClick}}
					/>
				{{/if}}
			{{/if}}

			<span class="splitbutton-divider" aria-hidden="true" data-qa={{this.dividerDataQa}}></span>

			<UlxIconButton
				@dataQa={{this.dropdownButtonDataQa}}
				@iconLeft={{this.dropdownIconName}}
				@iconComponentClass={{this.dropdownIconComponentClass}}
				@iconSize={{this.dropdownIconSize}}
				@disabled={{this.isDisabled}}
				@variant={{this.variantValue}}
				@pilled={{@pilled}}
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
				data-qa={{this.menuDataQa}}
			>
				<UlxTieredmenu
					id={{this.menuId}}
					@items={{this.menuItems}}
					@popup={{true}}
					@visible={{this.menuVisible}}
					@align="end"
					@target={{this.dropdownTarget}}
					@customClass={{this.menuCustomClassName}}
					@onHide={{this.hideMenu}}
					@onItemSelect={{this.handleItemSelect}}
				/>
			</div>
		</div>
	</template>
}
