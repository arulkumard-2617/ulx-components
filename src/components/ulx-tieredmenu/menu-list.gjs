import Component from "@glimmer/component";
import UlxTieredmenuMenuItem from "./menu-item.gjs";

/**
 * Recursive internal list renderer for TieredMenu.
 * Handles unlimited nested submenu depths.
 *
 * @class UlxTieredmenuMenuList
 * @private
 * @param {function} getDataQa - `buildDataQa` wrapper from root (`"list"`, `"separator"`, …).
 */
export default class UlxTieredmenuMenuList extends Component {
	<template>
		{{#each (@renderItems @items @parentId @level) as |itemData|}}
			{{#if (@isSeparator itemData.item)}}
				<li
					class="tieredmenu-separator"
					role="separator"
					data-qa={{@getDataQa "separator"}}
				></li>
			{{else}}
				<UlxTieredmenuMenuItem
					@item={{itemData.item}}
					@itemId={{itemData.itemId}}
					@parentId={{itemData.parentId}}
					@dataQa={{itemData.item.dataQa}}
					@getDataQa={{@getDataQa}}
					@itemClasses={{(@getItemClasses itemData.item itemData.itemId)}}
					@hasSubmenu={{(@hasSubmenu itemData.item)}}
					@isDisabled={{(@isDisabled itemData.item)}}
					@isSubmenuOpen={{(@isSubmenuOpen itemData.itemId)}}
					@submenuClasses={{(@getSubmenuClasses itemData.itemId)}}
					@submenuId={{(@getSubmenuId itemData.itemId)}}
					@tabindex="0"
					@onMouseEnter={{@onMouseEnter}}
					@onMouseLeave={{@onMouseLeave}}
					@onClick={{@onClick}}
					@onKeyDown={{@onKeyDown}}
				>
					{{#if (@hasSubmenu itemData.item)}}
						<UlxTieredmenuMenuList
							@items={{itemData.item.items}}
							@parentId={{itemData.itemId}}
							@level={{itemData.level}}
							@getDataQa={{@getDataQa}}
							@renderItems={{@renderItems}}
							@isSeparator={{@isSeparator}}
							@getItemClasses={{@getItemClasses}}
							@hasSubmenu={{@hasSubmenu}}
							@isDisabled={{@isDisabled}}
							@isSubmenuOpen={{@isSubmenuOpen}}
							@getSubmenuClasses={{@getSubmenuClasses}}
							@getSubmenuId={{@getSubmenuId}}
							@onMouseEnter={{@onMouseEnter}}
							@onMouseLeave={{@onMouseLeave}}
							@onClick={{@onClick}}
							@onKeyDown={{@onKeyDown}}
						/>
					{{/if}}
				</UlxTieredmenuMenuItem>
			{{/if}}
		{{/each}}
	</template>
}
