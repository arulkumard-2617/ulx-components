import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import TieredmenuSubmenu from "./submenu.gjs";

/**
 * Tiered menu element component with unlimited nesting levels.
 *
 * @class UlxTieredmenu
 * @param {object[]} args.model
 * @param {boolean} [args.popup]
 * @param {boolean} [args.visible]
 * @param {() => void} [args.onHide]
 * @param {(item: object, event: Event) => void} [args.onItemSelect]
 * @param {Component} [args.itemTemplate]
 */
export default class UlxTieredmenu extends Component {
	get rootClass() {
		const { popup, visible } = this.args;
		const classes = [getComponentClass("tieredmenu")];
		if (popup) {
			classes.push("popup");
			classes.push(visible ? "enter-done" : "exit-done");
		}
		return classes.join(" ");
	}

	get items() {
		return this.args.model ?? [];
	}

	get isVisible() {
		const { popup, visible } = this.args;
		if (!popup) return true;
		return visible ?? false;
	}

	get popupStyle() {
		if (this.args.popup && !this.isVisible) return "display: none;";
		return "";
	}

	@action handleItemClick(item, event) {
		const { onItemSelect, onHide, popup } = this.args;
		if (typeof onItemSelect === "function") onItemSelect(item, event);
		if (popup && !item?.items?.length && typeof onHide === "function") onHide();
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
