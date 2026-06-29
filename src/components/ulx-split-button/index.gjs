import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { schedule } from "@ember/runloop";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { and, not } from "ember-truth-helpers";
import { getComponentClass } from "../../utils/component-config";
import { getAdjacentFocusableInDocument } from "../../utils/focus-util";
import { setPendingOverlayReturnFocusElement } from "../../utils/overlay-helpers";
import overlayDismiss from "../../modifiers/overlay-dismiss";
import { t } from "../../utils/i18n";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import UlxTieredmenu from "../ulx-tieredmenu/index.gjs";

/**
 * Split button: default action button plus dropdown for additional options.
 * Uses menu model for dropdown items; supports severity, size, variants (text, outlined, pilled), loading, disabled.
 *
 * ## Dropdown modes
 * - **Menu (default):** pass `@items` for a tiered menu on the chevron.
 * - **Popup:** pass `@popup={{true}}` and nest {@link UlxPopup} in the default block (`as |popup|`). Pass `popup.visible`, `popup.target`, and `popup.onHide` into {@link UlxPopup}.
 *
 * ## Variants (use "Variant" in demos, not "severity" for severity case)
 * - primary (default), secondary, success, info, warning, help-button, danger
 * - text, outlined, pilled (inner buttons)
 *
 * ## Sizes
 * xs-size, s-size, m-size (default), l-size, xl-size
 *
 * ## WCAG
 * Main button uses label for accessible name; dropdown button has aria-haspopup, aria-expanded, aria-controls.
 * Menu mode: aria-haspopup="menu"; items use role="menuitem". Popup mode: aria-haspopup="dialog".
 * Escape closes the overlay and returns focus to the dropdown button.
 *
 * @class UlxSplitButton
 * @param {string} [label] - Main button label
 * @param {string} [icon] - Main button icon name (font icon)
 * @param {object[]} [items] - Menu items for dropdown (MenuModel API: label, icon, command, disabled, separator, items, etc.)
 * @param {boolean} [popup=false] - When true, the chevron opens a {@link UlxPopup} instead of a {@link UlxTieredmenu}. Omit or false to keep the default `@items` menu behavior.
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
 * @param {string} [defaultButtonDataQa] - Optional data-qa override for the default (main) button.
 * @param {string} [dropdownButtonDataQa] - Optional data-qa override for the dropdown trigger button.
 * @param {string} [dividerDataQa] - Optional data-qa override for the divider element.
 * @param {string} [tieredMenuDataQa] - Optional root `data-qa` for the embedded {@link UlxTieredmenu}. The list element uses `buildDataQa(root, "list")` (e.g. `speaker-menu` → `speaker-menu-list`). Omit for default `ulx-tieredmenu` / `ulx-tieredmenu-list`.
 * @param {string} [popupDataQa] - Optional `data-qa` for the nested {@link UlxPopup} root. Defaults to `{dataQa}-popup`.
 * @param {function} [registerRef] - Popup mode only. Receives `{ close }` to dismiss the chevron popup from custom footer actions.
 *
 * ## Named blocks
 * - **Default yield** – With `@popup={{true}}`, nest {@link UlxPopup} as the default block (`as |popup|`). Pass `popup.visible`, `popup.target`, and `popup.onHide` into {@link UlxPopup}.
 * - **<:icon>**, **<:default>** – Main button customization in menu mode, or with `@label` when `@popup={{true}}`.
 * @param {Modifier} [defaultButtonRef] - Optional modifier applied to the default (primary) button element for parent ref capture (e.g. anchoring a popup).
 */
export default class UlxSplitButton extends Component {
	@tracked menuVisible = false;
	@tracked dropdownTarget = null;

	/** When Tab closes the menu from the trigger, focus target after tieredmenu `onHide`. */
	_tabOutFocus = null;

	/** When an item action opens another overlay, ignore the follow-up tieredmenu hide focus restore. */
	_skipFocusRestoreOnNextHide = false;

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

	get overlayId() {
		return this.args.id ? `${this.args.id}_overlay` : undefined;
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-splitbutton";
	}

	get defaultButtonDataQa() {
		return this.args.defaultButtonDataQa ?? `${this.rootDataQa}-default`;
	}

	get dividerDataQa() {
		return this.args.dividerDataQa ?? `${this.rootDataQa}-divider`;
	}

	get dropdownButtonDataQa() {
		return this.args.dropdownButtonDataQa ?? `${this.rootDataQa}-dropdown`;
	}

	get menuDataQa() {
		return `${this.rootDataQa}-menu`;
	}

	get popupDataQa() {
		return this.args.popupDataQa ?? `${this.rootDataQa}-popup`;
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

	get isPopupMode() {
		return Boolean(this.args.popup);
	}

	get popupYieldContext() {
		return {
			visible: this.menuVisible,
			target: this.dropdownTarget,
			onHide: this.hideMenu,
			overlayId: this.overlayId,
			dataQa: this.popupDataQa,
			close: this.closePopupDropdown
		};
	}

	get rootClasses() {
		const {
			pilled = false,
			text = false,
			outlined = false,
			loading = false,
			disabled = false
		} = this.args,
			parts = [this.splitButtonRootClass];
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
			this.menuVisible ? this.hideMenu() : this.showMenu();
			return;
		}

		this.handleDropdownTabOut(event);
	}

	@action
	handlePopupKeydown(event) {
		this.handleDropdownTabOut(event);
	}

	@action
	handleDropdownTabOut(event) {
		if (event.key !== "Tab" || !this.menuVisible) {
			return;
		}

		event.preventDefault();
		const overlayRoot = this.overlayId ? document.getElementById(this.overlayId) : null,
			nextFocusable = getAdjacentFocusableInDocument(this.dropdownTarget, {
				backward: event.shiftKey,
				excludeContaining: overlayRoot ?? undefined
			});
		this._tabOutFocus = nextFocusable ?? null;
		this.menuVisible = false;
	}

	@action
	showMenu() {
		this.menuVisible = true;
		if (typeof this.args.onShow === "function") this.args.onShow();
	}

	restoreTabOutFocus(target) {
		if (!target) {
			return;
		}

		schedule("afterRender", () => {
			requestAnimationFrame(() => {
				target.focus?.({ preventScroll: true });
			});
		});
	}

	@action
	hideMenu(detail) {
		const wasVisible = this.menuVisible,
			shouldSkipFocusRestore = detail?.skipFocusRestore || this._skipFocusRestoreOnNextHide,
			tieredmenuTabOutTarget = detail?.nextFocusable,
			dropdownTabOutTarget = this._tabOutFocus;
		if (!detail?.skipFocusRestore) {
			this._skipFocusRestoreOnNextHide = false;
		}
		this._tabOutFocus = null;
		this.menuVisible = false;
		wasVisible && typeof this.args.onHide === "function" && this.args.onHide();
		if (shouldSkipFocusRestore) {
			return;
		}
		if (this.isPopupMode) {
			this.restoreTabOutFocus(dropdownTabOutTarget);
			return;
		}
		if (tieredmenuTabOutTarget) {
			return;
		}
		if (dropdownTabOutTarget) {
			this.restoreTabOutFocus(dropdownTabOutTarget);
			return;
		}
		this.dropdownTarget?.focus({ preventScroll: true });
	}

	@action
	handleItemSelect() {
		setPendingOverlayReturnFocusElement(this.dropdownTarget);
		this._skipFocusRestoreOnNextHide = true;
		this.hideMenu({ skipFocusRestore: true });
	}

	@action
	closePopupDropdown() {
		this.hideMenu();
	}

	popupRegisterRef = modifier((_, [isPopupMode]) => {
		if (!isPopupMode || typeof this.args.registerRef !== "function") {
			return () => {};
		}

		this.args.registerRef({ close: this.closePopupDropdown });

		return () => {
			this.args.registerRef(null);
		};
	});

	<template>
		{{#let (and (has-block "default") (not this.isPopupMode)) as |useMainButtonDefault|}}
			<div
				class={{this.rootClasses}}
				data-qa={{this.rootDataQa}}
				{{overlayDismiss
					(and this.menuVisible (not this.isPopupMode))
					onClose=this.hideMenu
					dismissVariant="rootOnly"
					deferClick=true
					deferEscape=false
					escapeEventMode="minimal"
					escapeUseCapture=false
					strictEscapeKey=true
				}}
				{{this.popupRegisterRef this.isPopupMode}}
				...attributes
			>
				{{#if (has-block "icon")}}
					{{#if useMainButtonDefault}}
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
					@elementRef={{@defaultButtonRef}}
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
					@elementRef={{@defaultButtonRef}}
				>
					<:icon>{{yield to="icon"}}</:icon>
				</UlxIconButton>
			{{/if}}
		{{else}}
			{{#if useMainButtonDefault}}
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
					@elementRef={{@defaultButtonRef}}
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
					@elementRef={{@defaultButtonRef}}
				/>
				{{/if}}
			{{/if}}

			<span class="splitbutton-divider" aria-hidden="true" data-qa={{this.dividerDataQa}}></span>

			{{#if this.isPopupMode}}
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
					aria-haspopup="dialog"
					aria-expanded={{this.menuVisible}}
					aria-controls={{this.overlayId}}
					{{on "keydown" this.handlePopupKeydown}}
				/>
			{{else}}
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
					aria-controls={{this.overlayId}}
					{{on "keydown" this.handleMenuKeydown}}
				/>
			{{/if}}

			{{#if this.isPopupMode}}
				{{yield this.popupYieldContext}}
			{{else}}
				<div
					class="absolute left-0 top-full z-1000 mt-2
						{{if this.menuVisible 'visible transition fade in' 'hidden'}}"
					data-qa={{this.menuDataQa}}
				>
					<UlxTieredmenu
						id={{this.overlayId}}
						@dataQa={{@tieredMenuDataQa}}
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
			{{/if}}
		</div>
		{{/let}}
	</template>
}
