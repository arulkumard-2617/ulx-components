import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxDataView;
const LAYOUT_TO_CLASS = {
  list: "layout-list",
  grid: "layout-grid"
};
const DEFAULT_LAYOUT = "list";
/**
 * DataView is a layout wrapper with left, content, and right sections inside a dataview grid.
 * Uses existing dataview.less classes (ulx-dataview, dataview-content, layout-list/layout-grid) and base grid utilities.
 *
 * @class UlxDataView
 * @param {string} [layout="list"] - Layout variant: "list" or "grid". Adds layout-list or layout-grid class to root.
 * @param {string} [gridRole] - Optional ARIA role for the main content container (e.g. "list" for list semantics).
 * @param {string} [customClass] - Extra CSS class for root.
 * @param {string} [dataQa] - Optional root `data-qa` override (defaults to `ulx-dataview`).
 *
 * Named blocks (lowercase):
 * - <:header> - Optional content above the grid (e.g. toolbar, filters).
 * - <:left> - Optional left section; caller controls layout/width using helper classes.
 * - <:content> - Main content section; default block is treated as content when no <:content> is provided.
 * - <:right> - Optional right section; caller controls layout/width using helper classes.
 * - <:footer> - Optional footer section below the grid (e.g. pagination).
 */
class UlxDataView extends Component {
  get baseClass() {
    return getComponentClass("dataview");
  }
  get layoutClass() {
    const {
      layout = DEFAULT_LAYOUT
    } = this.args;
    return LAYOUT_TO_CLASS[layout] ?? LAYOUT_TO_CLASS[DEFAULT_LAYOUT];
  }
  get rootClasses() {
    return joinClassNames(this.baseClass, this.layoutClass, this.args.customClass);
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-dataview";
  }
}
_UlxDataView = UlxDataView;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} role=\"region\" aria-label={{t \"aria.dataview.region\"}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t{{#if (has-block \"header\")}}\n\t\t\t\t<div class=\"dataview-header\" data-qa=\"ulx-dataview-header\">\n\t\t\t\t\t{{yield to=\"header\"}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\t\t\t<div class=\"dataview-content\" data-qa=\"ulx-dataview-content\" role={{this.args.gridRole}}>\n\t\t\t\t{{yield to=\"left\"}}\n\n\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t{{yield to=\"content\"}}\n\t\t\t\t{{else}}\n\t\t\t\t\t{{yield}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{yield to=\"right\"}}\n\n\t\t\t\t{{#if (has-block \"footer\")}}\n\t\t\t\t\t<div data-qa=\"ulx-dataview-footer\">\n\t\t\t\t\t\t{{yield to=\"footer\"}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    t
  })
}), _UlxDataView);

export { UlxDataView as default };
//# sourceMappingURL=index.js.map
