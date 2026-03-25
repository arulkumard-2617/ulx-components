import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxTieredmenuMenuItem;
class UlxTieredmenuMenuItem extends Component {
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
}
_UlxTieredmenuMenuItem = UlxTieredmenuMenuItem;
setComponentTemplate(precompileTemplate("\n\t\t<li class={{@itemClasses}} data-qa={{this.itemDataQa}} {{on \"mouseenter\" (fn @onMouseEnter @item @itemId @parentId)}} {{on \"mouseleave\" (fn @onMouseLeave @itemId)}}>\n\t\t\t<button id={{@itemId}} type=\"button\" class={{this.linkClass}} role=\"menuitem\" aria-label={{@item.label}} aria-disabled={{if @isDisabled \"true\" \"false\"}} aria-haspopup={{if @hasSubmenu \"menu\" \"false\"}} aria-expanded={{if @hasSubmenu (if @isSubmenuOpen \"true\" \"false\") \"false\"}} aria-controls={{if @hasSubmenu @submenuId}} tabindex={{@tabindex}} data-item-id={{@itemId}} data-qa={{@getDataQa \"trigger\"}} disabled={{@isDisabled}} {{on \"click\" (fn @onClick @item @itemId @parentId)}} {{on \"keydown\" (fn @onKeyDown @item @itemId @parentId)}}>\n\t\t\t\t<div class=\"tieredmenu-action\">\n\t\t\t\t\t{{#if @item.icon}}\n\t\t\t\t\t\t<span class=\"tieredmenu-item-icon\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{this.iconName}} @customClass={{this.iconCustomClass}} @size={{this.iconSize}} />\n\t\t\t\t\t\t</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t{{yield @item to=\"item\"}}\n\t\t\t\t\t{{else if @item.template}}\n\t\t\t\t\t\t{{component @item.template item=@item}}\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<span class=\"tieredmenu-item-label\">{{@item.label}}</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{#if @hasSubmenu}}\n\t\t\t\t\t\t<span class=\"tieredmenu-item-icon\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName=\"right-arrow-icon\" @size=\"s16\" />\n\t\t\t\t\t\t</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t</button>\n\t\t\t{{#if @hasSubmenu}}\n\t\t\t\t<div class={{@submenuClasses}} id={{@submenuId}} role=\"menu\" aria-labelledby={{@itemId}} data-qa={{@getDataQa \"submenu\"}}>\n\t\t\t\t\t<ul class=\"tieredmenu-list\" data-qa={{@getDataQa \"list\"}}>\n\t\t\t\t\t\t{{yield}}\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\t\t</li>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    fn,
    UlxIcon
  })
}), _UlxTieredmenuMenuItem);

export { UlxTieredmenuMenuItem as default };
//# sourceMappingURL=menu-item.js.map
