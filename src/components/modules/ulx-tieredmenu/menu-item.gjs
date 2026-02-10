import Component from "@glimmer/component";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

/**
 * Internal menu item component for TieredMenu.
 * Renders a single menu item with icon, label, and optional submenu.
 *
 * @class UlxTieredmenuMenuItem
 * @private
 */
export default class UlxTieredmenuMenuItem extends Component {
	get iconName() {
		if (!this.args.item?.icon) return null;
		// Extract icon name from class string (e.g., "bs-icons1 pdf-stroke-icon" -> "pdf-stroke-icon")
		const parts = this.args.item.icon.trim().split(/\s+/);
		return parts[parts.length - 1];
	}

	get iconCustomClass() {
		if (!this.args.item?.icon) return null;
		// Extract base class from icon string (e.g., "bs-icons1 pdf-stroke-icon" -> "bs-icons1")
		const parts = this.args.item.icon.trim().split(/\s+/);
		return parts.length > 1 ? parts[0] : null;
	}

	get iconSize() {
		return this.args.size ?? "s20";
	}

	<template>
		<li
			class={{@itemClasses}}
			{{on "mouseenter" (fn @onMouseEnter @item @itemId @parentId)}}
			{{on "mouseleave" (fn @onMouseLeave @itemId)}}
		>
			<button
				id={{@itemId}}
				type="button"
				class="tieredmenu-item-link"
				role="menuitem"
				aria-label={{@item.label}}
				aria-disabled={{if @isDisabled "true" "false"}}
				aria-haspopup={{if @hasSubmenu "menu" "false"}}
				aria-expanded={{if @hasSubmenu (if @isSubmenuOpen "true" "false") "false"}}
				aria-controls={{if @hasSubmenu @submenuId "false"}}
				tabindex={{@tabindex}}
				data-item-id={{@itemId}}
				disabled={{@isDisabled}}
				{{on "click" (fn @onClick @item @itemId @parentId)}}
				{{on "keydown" (fn @onKeyDown @item @itemId @parentId)}}
			>
				<div class="tieredmenu-action">
					{{#if @item.icon}}
						<span class="tieredmenu-item-icon" aria-hidden="true">
							<UlxIcon
								@iconName={{this.iconName}}
								@type="font"
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
							<UlxIcon
								@iconName="right-arrow-icon"
								@type="font"
								@customClass="bs-icons1"
								@size="s16"
							/>
						</span>
					{{/if}}
				</div>
			</button>
			{{#if @hasSubmenu}}
				<div class={{@submenuClasses}} id={{@submenuId}} role="menu" aria-labelledby={{@itemId}}>
					<ul class="tieredmenu-list">
						{{yield}}
					</ul>
				</div>
			{{/if}}
		</li>
	</template>
}
