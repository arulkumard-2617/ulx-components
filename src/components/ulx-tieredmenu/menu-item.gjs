import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Internal menu item component for TieredMenu.
 * Renders a single menu item with icon, label, and optional submenu.
 *
 * @class UlxTieredmenuMenuItem
 * @private
 * @param {string} [dataQa] - Optional per-item override from `item.dataQa` (full `data-qa` value).
 * @param {function} getDataQa - Root `buildDataQa` wrapper (`"item"`, `"trigger"`, `"list"`, …).
 */
export default class UlxTieredmenuMenuItem extends Component {
	get itemDataQa() {
		return this.args.dataQa ?? this.args.getDataQa("item");
	}

	/** Model passes a single class string, e.g. `"bs-icons1 pdf-stroke-icon"` (font kit + glyph). */
	get iconClassParts() {
		const raw = this.args.item?.icon?.trim();
		if (!raw) return null;
		const parts = raw.split(/\s+/).filter(Boolean);
		return parts.length ? parts : null;
	}

	get iconName() {
		const parts = this.iconClassParts;
		return parts ? parts[parts.length - 1] : null;
	}

	get iconCustomClass() {
		const parts = this.iconClassParts;
		return parts && parts.length > 1 ? parts[0] : null;
	}

	get iconSize() {
		return this.args.size ?? "s20";
	}

	get linkClass() {
		const baseClassName = "tieredmenu-item-link";
		const itemLinkClassName = this.args.item?.linkClass;
		return itemLinkClassName ? `${baseClassName} ${itemLinkClassName}` : baseClassName;
	}

	<template>
		<li
			class={{@itemClasses}}
			data-qa={{this.itemDataQa}}
			{{on "mouseenter" (fn @onMouseEnter @item @itemId @parentId)}}
			{{on "mouseleave" (fn @onMouseLeave @itemId)}}
		>
			<button
				id={{@itemId}}
				type="button"
				class={{this.linkClass}}
				role="menuitem"
				aria-label={{@item.label}}
				aria-disabled={{if @isDisabled "true" "false"}}
				aria-haspopup={{if @hasSubmenu "menu" "false"}}
				aria-expanded={{if @hasSubmenu (if @isSubmenuOpen "true" "false") "false"}}
				aria-controls={{if @hasSubmenu @submenuId}}
				tabindex={{@tabindex}}
				data-item-id={{@itemId}}
				data-qa={{@getDataQa "trigger"}}
				disabled={{@isDisabled}}
				{{on "click" (fn @onClick @item @itemId @parentId)}}
				{{on "keydown" (fn @onKeyDown @item @itemId @parentId)}}
			>
				<div class="tieredmenu-action">
					{{#if @item.icon}}
						<span class="tieredmenu-item-icon" aria-hidden="true">
							<UlxIcon
								@type="font"
								@iconName={{this.iconName}}
								@customClass={{this.iconCustomClass}}
								@size={{this.iconSize}}
							/>
						</span>
					{{/if}}
					{{#if (has-block "item")}}
						{{yield @item to="item"}}
					{{else if @item.template}}
						{{component @item.template item=@item}}
					{{else}}
						<span class="tieredmenu-item-label">{{@item.label}}</span>
					{{/if}}
					{{#if @hasSubmenu}}
						<span class="tieredmenu-item-icon" aria-hidden="true">
							<UlxIcon @type="font" @iconName="right-arrow-icon" @size="s16" />
						</span>
					{{/if}}
				</div>
			</button>
			{{#if @hasSubmenu}}
				<div
					class={{@submenuClasses}}
					id={{@submenuId}}
					role="menu"
					aria-labelledby={{@itemId}}
					data-qa={{@getDataQa "submenu"}}
				>
					<ul class="tieredmenu-list" data-qa={{@getDataQa "list"}}>
						{{yield}}
					</ul>
				</div>
			{{/if}}
		</li>
	</template>
}
