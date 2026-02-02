import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import TieredmenuSubmenu from "./submenu.gjs";

/**
 * Tiered menu element component with unlimited nesting levels.
 *
 * PrimeReact-inspired API:
 * - `@model`: array of items with `{ label, icon, url, disabled, separator, items, command, badge, shortcut }`
 * - `@popup`: when true, applies popup styling
 * - `@visible`: controls popup visibility (for popup mode)
 * - `@onHide`: callback when popup should close
 * - `@onItemSelect`: optional callback invoked when an enabled item is activated
 * - `@itemTemplate`: custom component for rendering menu items
 *
 * @class UlsTieredmenu
 * @param {object[]} args.model
 * @param {boolean} [args.popup]
 * @param {boolean} [args.visible]
 * @param {() => void} [args.onHide]
 * @param {(item: object, event: Event) => void} [args.onItemSelect]
 * @param {Component} [args.itemTemplate]
 */
export default class UlsTieredmenu extends Component {
	get rootClass() {
		let classes = [getComponentClass("tieredmenu")]; // e.g. "uls-tieredmenu"

		if (this.args.popup) {
			classes.push("popup");

			if (this.args.visible) {
				classes.push("enter-done");
			} else {
				classes.push("exit-done");
			}
		}

		return classes.join(" ");
	}

	get items() {
		return this.args.model ?? [];
	}

	get isVisible() {
		// For non-popup mode, always visible
		// For popup mode, controlled by @visible arg
		if (!this.args.popup) {
			return true;
		}
		return this.args.visible ?? false;
	}

	get popupStyle() {
		// Only apply display:none in popup mode when not visible
		if (this.args.popup && !this.isVisible) {
			return "display: none;";
		}
		return "";
	}

	@action handleItemClick(item, event) {
		if (typeof this.args.onItemSelect === "function") {
			this.args.onItemSelect(item, event);
		}

		// In popup mode, hide after item click (if item has no submenu)
		if (this.args.popup && !item?.items?.length) {
			if (typeof this.args.onHide === "function") {
				this.args.onHide();
			}
		}
	}

	<template>
		{{#if this.isVisible}}
			<nav class={{this.rootClass}} style={{this.popupStyle}} ...attributes>
				<TieredmenuSubmenu
					@items={{this.items}}
					@level={{0}}
					@itemTemplate={{@itemTemplate}}
					@onItemClick={{this.handleItemClick}}
				/>
			</nav>
		{{/if}}
	</template>
}
