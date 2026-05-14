import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import UlxButton from "../ulx-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxTieredmenu from "../ulx-tieredmenu/index.gjs";

let actionMenuInstanceCounter = 0;

/**
 * Action menu trigger button with popup tiered menu options.
 *
 * Use this component when a single action control should open a contextual menu.
 * Trigger content supports text, icon-only, or icon+text.
 *
 * @class UlxActionMenu
 * @param {object[]} [items=[]] - Menu items for UlxTieredmenu.
 * @param {string} [label] - Trigger button label.
 * @param {string} [icon] - Trigger icon class name.
 * @param {string} [iconComponentClass='bs-icons1'] - Icon component class.
 * @param {string} [iconSize='s18'] - Icon size class.
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'|'white'} [variant='primary'] - Trigger variant.
 * @param {string} [size='m-size'] - Trigger size class.
 * @param {boolean} [disabled=false] - Disables trigger and menu interaction.
 * @param {'start'|'end'} [align='end'] - Popup alignment relative to trigger.
 * @param {function} [onItemSelect] - Called when a menu item is selected.
 * @param {function} [onShow] - Called when menu opens.
 * @param {function} [onHide] - Called when menu closes.
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-action-menu".
 * @param {string} [id] - Optional base id used to derive overlay id.
 * @param {string} [triggerAriaLabel] - Accessible name override for icon-only usage.
 * @param {string} [triggerCustomClass] - Extra classes on the trigger `UlxButton` when an icon is shown (merged after layout utilities).
 */
export default class UlxActionMenu extends Component {
	@tracked isMenuVisible = false;
	@tracked triggerElement = null;

	instanceId = ++actionMenuInstanceCounter;

	get rootClass() {
		return getComponentClass("action-menu");
	}

	get rootClasses() {
		const { customClass } = this.args;
		const parts = [this.rootClass];
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get items() {
		const { items = [] } = this.args;
		return items;
	}

	get variantValue() {
		const { variant = "primary", severity } = this.args;
		const rawVariant = variant ?? severity;
		return rawVariant === "help" ? "help-button" : rawVariant;
	}

	get triggerSize() {
		const { size = "m-size" } = this.args;
		return size;
	}

	get menuAlign() {
		const { align = "end" } = this.args;
		return align;
	}

	get rootDataQa() {
		const { dataQa } = this.args;
		return dataQa ?? "ulx-action-menu";
	}

	get triggerDataQa() {
		return `${this.rootDataQa}-trigger`;
	}

	get menuDataQa() {
		return `${this.rootDataQa}-menu`;
	}

	get hasIcon() {
		return Boolean(this.args.icon);
	}

	/** utill.less flex utilities so prefix icon + label stay on one row in narrow cells */
	get triggerButtonCustomClass() {
		const layout = "flex flex-nowrap items-center gap-2";
		const extra = this.args.triggerCustomClass;
		if (!this.hasIcon) {
			return extra;
		}
		return extra ? `${layout} ${extra}` : layout;
	}

	get iconClassName() {
		return this.args.icon;
	}

	get iconComponentClassName() {
		const { iconComponentClass = "bs-icons1" } = this.args;
		return iconComponentClass;
	}

	get iconSizeValue() {
		const { iconSize = "s18" } = this.args;
		return iconSize;
	}

	get menuId() {
		const { id } = this.args;
		return id ? `${id}_overlay` : `ulx-action-menu-overlay-${this.instanceId}`;
	}

	get triggerAriaLabel() {
		const { triggerAriaLabel, label } = this.args;
		return triggerAriaLabel ?? label ?? t("lbl.more.options");
	}

	triggerRef = modifier((element) => {
		this.triggerElement = element;
		return () => {
			if (this.triggerElement === element) {
				this.triggerElement = null;
			}
		};
	});

	@action
	callCallback(callback, ...args) {
		if (typeof callback === "function") {
			callback(...args);
		}
	}

	@action
	showMenu() {
		if (this.args.disabled || this.isMenuVisible) {
			return;
		}
		this.isMenuVisible = true;
		this.callCallback(this.args.onShow);
	}

	@action
	hideMenu(detail) {
		if (!this.isMenuVisible) {
			return;
		}
		this.isMenuVisible = false;
		this.callCallback(this.args.onHide, detail);
	}

	@action
	toggleMenu(event) {
		event?.preventDefault?.();
		event?.stopPropagation?.();
		if (this.isMenuVisible) {
			this.hideMenu();
			return;
		}
		this.showMenu();
	}

	@action
	handleTriggerKeydown(event) {
		if (this.args.disabled) {
			return;
		}
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			this.showMenu();
		}
	}

	@action
	handleItemSelect(item) {
		this.callCallback(this.args.onItemSelect, item);
		this.hideMenu();
	}

	<template>
		<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} ...attributes>
			{{#if this.hasIcon}}
				{{#if (has-block "default")}}
					<UlxButton
						@variant={{this.variantValue}}
						@size={{this.triggerSize}}
						@disabled={{@disabled}}
						@text={{@text}}
						@outlined={{@outlined}}
						@pilled={{@pilled}}
						@loading={{@loading}}
						@customClass={{this.triggerButtonCustomClass}}
						@elementRef={{this.triggerRef}}
						@onClick={{this.toggleMenu}}
						@dataQa={{this.triggerDataQa}}
						aria-label={{this.triggerAriaLabel}}
						aria-haspopup="menu"
						aria-expanded={{this.isMenuVisible}}
						aria-controls={{this.menuId}}
						{{on "keydown" this.handleTriggerKeydown}}
					>
						<:prefix>
							<UlxIcon
								@iconName={{this.iconClassName}}
								@type="font"
								@componentClass={{this.iconComponentClassName}}
								@size={{this.iconSizeValue}}
								aria-hidden="true"
							/>
						</:prefix>
						<:default>{{yield}}</:default>
					</UlxButton>
				{{else}}
					<UlxButton
						@label={{@label}}
						@variant={{this.variantValue}}
						@size={{this.triggerSize}}
						@disabled={{@disabled}}
						@text={{@text}}
						@outlined={{@outlined}}
						@pilled={{@pilled}}
						@loading={{@loading}}
						@customClass={{this.triggerButtonCustomClass}}
						@elementRef={{this.triggerRef}}
						@onClick={{this.toggleMenu}}
						@dataQa={{this.triggerDataQa}}
						aria-label={{this.triggerAriaLabel}}
						aria-haspopup="menu"
						aria-expanded={{this.isMenuVisible}}
						aria-controls={{this.menuId}}
						{{on "keydown" this.handleTriggerKeydown}}
					>
						<:prefix>
							<UlxIcon
								@iconName={{this.iconClassName}}
								@type="font"
								@componentClass={{this.iconComponentClassName}}
								@size={{this.iconSizeValue}}
								aria-hidden="true"
							/>
						</:prefix>
					</UlxButton>
				{{/if}}
			{{else if (has-block "default")}}
				<UlxButton
					@variant={{this.variantValue}}
					@size={{this.triggerSize}}
					@disabled={{@disabled}}
					@text={{@text}}
					@outlined={{@outlined}}
					@pilled={{@pilled}}
					@loading={{@loading}}
					@elementRef={{this.triggerRef}}
					@onClick={{this.toggleMenu}}
					@dataQa={{this.triggerDataQa}}
					aria-label={{this.triggerAriaLabel}}
					aria-haspopup="menu"
					aria-expanded={{this.isMenuVisible}}
					aria-controls={{this.menuId}}
					{{on "keydown" this.handleTriggerKeydown}}
				>
					<:default>{{yield}}</:default>
				</UlxButton>
			{{else}}
				<UlxButton
					@label={{@label}}
					@variant={{this.variantValue}}
					@size={{this.triggerSize}}
					@disabled={{@disabled}}
					@text={{@text}}
					@outlined={{@outlined}}
					@pilled={{@pilled}}
					@loading={{@loading}}
					@elementRef={{this.triggerRef}}
					@onClick={{this.toggleMenu}}
					@dataQa={{this.triggerDataQa}}
					aria-label={{this.triggerAriaLabel}}
					aria-haspopup="menu"
					aria-expanded={{this.isMenuVisible}}
					aria-controls={{this.menuId}}
					{{on "keydown" this.handleTriggerKeydown}}
				/>
			{{/if}}

			<UlxTieredmenu
				id={{this.menuId}}
				@items={{this.items}}
				@popup={{true}}
				@visible={{this.isMenuVisible}}
				@align={{this.menuAlign}}
				@target={{this.triggerElement}}
				@customClass={{@menuCustomClass}}
				@onHide={{this.hideMenu}}
				@onItemSelect={{this.handleItemSelect}}
				@dataQa={{this.menuDataQa}}
			/>
		</div>
	</template>
}
