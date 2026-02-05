import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Recursive submenu component for TieredMenu.
 * Handles rendering of menu items at any nesting level.
 *
 * @class TieredmenuSubmenu
 * @param {object[]} args.items - Array of menu items
 * @param {number} args.level - Current nesting level (0 = root)
 * @param {Component} [args.itemTemplate] - Custom component for item rendering
 * @param {(item: object, event: Event) => void} [args.onItemClick] - Click handler
 */
export default class TieredmenuSubmenu extends Component {
	@tracked openIndex = null;

	get items() {
		return this.args.items ?? [];
	}

	get level() {
		return this.args.level ?? 0;
	}

	get itemTemplate() {
		return this.args.itemTemplate ?? null;
	}

	hasSubmenu = (item) => {
		return Array.isArray(item?.items) && item.items.length > 0;
	};

	itemClass = (item, index) => {
		let classes = ["tieredmenu-item"];

		if (item?.disabled) {
			classes.push("disabled");
		}

		// Don't add has-submenu for items with custom template (arrow handled by template)
		if (this.hasSubmenu(item) && !item?.template) {
			classes.push("has-submenu");
		}

		if (this.isOpen(index)) {
			classes.push("highlight");
		}

		return classes.join(" ");
	};

	submenuClass = (index) => {
		let classes = ["tieredmenu-submenu"];

		if (this.isOpen(index)) {
			classes.push("open");
		}

		return classes.join(" ");
	};

	isOpen = (index) => {
		return this.openIndex === index;
	};

	getAriaHaspopup = (item) => {
		return this.hasSubmenu(item) ? "menu" : undefined;
	};

	getAriaExpanded = (item, index) => {
		if (!this.hasSubmenu(item)) {
			return undefined;
		}
		return this.isOpen(index) ? "true" : "false";
	};

	@action handleItemEnter(index) {
		let item = this.items[index];

		if (this.hasSubmenu(item)) {
			this.openIndex = index;
		}
	}

	@action handleItemLeave(index) {
		if (this.openIndex === index) {
			this.openIndex = null;
		}
	}

	@action handleItemClick(item, event) {
		if (item?.disabled || item?.separator) {
			event?.preventDefault();
			return;
		}
		if (typeof item?.command === "function") item.command(item, event);
		if (typeof this.args.onItemClick === "function") this.args.onItemClick(item, event);
	}

	nextLevel = () => {
		return this.level + 1;
	};

	<template>
		<ul class="tieredmenu-list" role="menu">
			{{#each this.items as |item index|}}
				{{#if item.separator}}
					<li class="tieredmenu-separator" role="separator"></li>
				{{else}}
					<li
						class={{this.itemClass item index}}
						role="none"
						{{on "mouseenter" (fn this.handleItemEnter index)}}
						{{on "mouseleave" (fn this.handleItemLeave index)}}
					>
						{{#if this.itemTemplate}}
							{{! Custom template rendering }}
							<this.itemTemplate
								@item={{item}}
								@hasSubmenu={{this.hasSubmenu item}}
								@onClick={{fn this.handleItemClick item}}
							/>
						{{else if item.template}}
							{{! Per-item template }}
							<item.template
								@item={{item}}
								@hasSubmenu={{this.hasSubmenu item}}
								@onClick={{fn this.handleItemClick item}}
							/>
						{{else}}
							{{! Default rendering }}
							{{#if item.url}}
								<a
									href={{item.url}}
									class="tieredmenu-item-link"
									role="menuitem"
									aria-disabled={{if item.disabled "true" "false"}}
									aria-haspopup={{this.getAriaHaspopup item}}
									aria-expanded={{this.getAriaExpanded item index}}
									{{on "click" (fn this.handleItemClick item)}}
								>
									{{#if item.icon}}
										<UlxIcon
											@iconName={{item.icon}}
											@type="font"
											@customClass="tieredmenu-item-icon"
											aria-hidden="true"
										/>
									{{/if}}
									{{#if item.label}}
										<span class="tieredmenu-item-label">
											{{item.label}}
										</span>
									{{/if}}
									{{#if item.badge}}
										<span class="uls-badge primary mgl-auto">
											{{item.badge}}
										</span>
									{{/if}}
									{{#if item.shortcut}}
										<span class="tieredmenu-shortcut mgl-auto fg-text-secondary font-size12">
											{{item.shortcut}}
										</span>
									{{/if}}
								</a>
							{{else}}
								<button
									type="button"
									class="tieredmenu-item-link"
									role="menuitem"
									aria-disabled={{if item.disabled "true" "false"}}
									aria-haspopup={{this.getAriaHaspopup item}}
									aria-expanded={{this.getAriaExpanded item index}}
									disabled={{item.disabled}}
									{{on "click" (fn this.handleItemClick item)}}
								>
									{{#if item.icon}}
										<UlxIcon
											@iconName={{item.icon}}
											@type="font"
											@customClass="tieredmenu-item-icon"
											aria-hidden="true"
										/>
									{{/if}}
									{{#if item.label}}
										<span class="tieredmenu-item-label">
											{{item.label}}
										</span>
									{{/if}}
									{{#if item.badge}}
										<span class="uls-badge primary mgl-auto">
											{{item.badge}}
										</span>
									{{/if}}
									{{#if item.shortcut}}
										<span class="tieredmenu-shortcut mgl-auto fg-text-secondary font-size12">
											{{item.shortcut}}
										</span>
									{{/if}}
								</button>
							{{/if}}
						{{/if}}

						{{#if (this.hasSubmenu item)}}
							<div class={{this.submenuClass index}}>
								{{#if item.subHeader}}
									<div class="tieredmenu-submenu-header">
										{{item.subHeader}}
									</div>
								{{/if}}
								<TieredmenuSubmenu
									@items={{item.items}}
									@level={{this.nextLevel}}
									@itemTemplate={{@itemTemplate}}
									@onItemClick={{@onItemClick}}
								/>
							</div>
						{{/if}}
					</li>
				{{/if}}
			{{/each}}
		</ul>
	</template>
}
