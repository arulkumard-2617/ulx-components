import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _TableFooter;
let TableFooter = (_class = (_TableFooter = class TableFooter extends Component {
  hasAnyFooter(columns) {
    return columns?.some(c => c.footer || c.footerTemplate) ?? false;
  }
  footerCellClass(col) {
    const parts = ["datatable-flex-col-footer-cell"];
    col.frozen && parts.push("frozen");
    col.className && parts.push(col.className);
    return parts.filter(Boolean).join(" ");
  }
  footerCellStyle(col) {
    const parts = [];
    col.style && parts.push(col.style);
    if (col.frozen) {
      const side = col.alignFrozen ?? "left";
      parts.push(`${side}: ${col.frozenOffset ?? "0px"}`);
    }
    if (col.align) parts.push(`text-align: ${col.align}`);
    return parts.join("; ") || undefined;
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#if (this.hasAnyFooter @columns)}}\n\t\t\t<tfoot class=\"datatable-tfoot\">\n\t\t\t\t<tr class=\"datatable-footer-row\">\n\t\t\t\t\t{{#each @columns as |col|}}\n\t\t\t\t\t\t{{#if col.selectionMode}}\n\t\t\t\t\t\t\t<td class=\"datatable-flex-col-footer-cell\" style=\"width: 3rem\"></td>\n\t\t\t\t\t\t{{else if col.expander}}\n\t\t\t\t\t\t\t<td class=\"datatable-flex-col-footer-cell\" style=\"width: 3rem\"></td>\n\t\t\t\t\t\t{{else if col.rowReorder}}\n\t\t\t\t\t\t\t<td class=\"datatable-flex-col-footer-cell\" style=\"width: 3rem\"></td>\n\t\t\t\t\t\t{{else if col.rowEditor}}\n\t\t\t\t\t\t\t<td class=\"datatable-flex-col-footer-cell\" style=\"width: 6rem\"></td>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<td class={{this.footerCellClass col}} style={{this.footerCellStyle col}}>\n\t\t\t\t\t\t\t\t{{#if col.footerTemplate}}\n\t\t\t\t\t\t\t\t\t<col.footerTemplate @col={{col}} />\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t{{col.footer}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/each}}\n\n\t\t\t\t{{#if @hasOptionCell}}\n\t\t\t\t\t<td class=\"datatable-flex-col-footer-cell\" style=\"width: 6rem\"></td>\n\t\t\t\t{{/if}}\n\t\t\t\t</tr>\n\t\t\t</tfoot>\n\t\t{{/if}}\n\t", {
  strictMode: true
}), _TableFooter), _TableFooter), _applyDecoratedDescriptor(_class.prototype, "hasAnyFooter", [action], Object.getOwnPropertyDescriptor(_class.prototype, "hasAnyFooter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "footerCellClass", [action], Object.getOwnPropertyDescriptor(_class.prototype, "footerCellClass"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "footerCellStyle", [action], Object.getOwnPropertyDescriptor(_class.prototype, "footerCellStyle"), _class.prototype), _class);

export { TableFooter as default };
//# sourceMappingURL=table-footer.js.map
