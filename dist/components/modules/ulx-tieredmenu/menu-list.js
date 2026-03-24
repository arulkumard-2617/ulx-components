import Component from '@glimmer/component';
import UlxTieredmenuMenuItem from './menu-item.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxTieredmenuMenuList;
class UlxTieredmenuMenuList extends Component {}
_UlxTieredmenuMenuList = UlxTieredmenuMenuList;
setComponentTemplate(precompileTemplate("\n\t\t{{#each (@renderItems @items @parentId @level) as |itemData|}}\n\t\t\t{{#if (@isSeparator itemData.item)}}\n\t\t\t\t<li class=\"tieredmenu-separator\" role=\"separator\" data-qa=\"ulx-tieredmenu-separator\"></li>\n\t\t\t{{else}}\n\t\t\t\t<UlxTieredmenuMenuItem @item={{itemData.item}} @itemId={{itemData.itemId}} @parentId={{itemData.parentId}} @dataQa={{itemData.item.dataQa}} @itemClasses={{(@getItemClasses itemData.item itemData.itemId)}} @hasSubmenu={{(@hasSubmenu itemData.item)}} @isDisabled={{(@isDisabled itemData.item)}} @isSubmenuOpen={{(@isSubmenuOpen itemData.itemId)}} @submenuClasses={{(@getSubmenuClasses itemData.itemId)}} @submenuId={{(@getSubmenuId itemData.itemId)}} @tabindex=\"0\" @onMouseEnter={{@onMouseEnter}} @onMouseLeave={{@onMouseLeave}} @onClick={{@onClick}} @onKeyDown={{@onKeyDown}}>\n\t\t\t\t\t{{#if (@hasSubmenu itemData.item)}}\n\t\t\t\t\t\t<UlxTieredmenuMenuList @items={{itemData.item.items}} @parentId={{itemData.itemId}} @level={{itemData.level}} @renderItems={{@renderItems}} @isSeparator={{@isSeparator}} @getItemClasses={{@getItemClasses}} @hasSubmenu={{@hasSubmenu}} @isDisabled={{@isDisabled}} @isSubmenuOpen={{@isSubmenuOpen}} @getSubmenuClasses={{@getSubmenuClasses}} @getSubmenuId={{@getSubmenuId}} @onMouseEnter={{@onMouseEnter}} @onMouseLeave={{@onMouseLeave}} @onClick={{@onClick}} @onKeyDown={{@onKeyDown}} />\n\t\t\t\t\t{{/if}}\n\t\t\t\t</UlxTieredmenuMenuItem>\n\t\t\t{{/if}}\n\t\t{{/each}}\n\t", {
  strictMode: true,
  scope: () => ({
    UlxTieredmenuMenuItem,
    UlxTieredmenuMenuList: _UlxTieredmenuMenuList
  })
}), _UlxTieredmenuMenuList);

export { UlxTieredmenuMenuList as default };
//# sourceMappingURL=menu-list.js.map
