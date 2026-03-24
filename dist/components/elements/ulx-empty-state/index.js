import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { getComponentClass } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxEmptyState;
const DEFAULT_ICON_SIZE = "s48";
const DEFAULT_MARGIN_CLASS = "mt-6";
/**
 * Empty state element component. Displays an icon, title, optional subtitle,
 * and an optional actions area (default block content).
 *
 * @class UlxEmptyState
 * @param {string} [headerText] - Title (i18n key or display text); rendered via t().
 * @param {string} [subHeaderText] - Subtitle (i18n key or display text); rendered via t().
 * @param {string} [iconName] - Icon for UlxIcon (font or symbol name).
 * @param {string} [iconSize] - Size class for icon (default s48).
 * @param {string} [containerClass] - Extra classes on inner container.
 * @param {string} [marginClass] - Margin class for the actions area (default mt-6).
 * @param {string} [dataQa] - Optional root data-qa override. Defaults to "ulx-empty-state".
 * @yield default - Any content rendered inside the EmptyState actions area.
 */
class UlxEmptyState extends Component {
  get rootClasses() {
    const {
      containerClass
    } = this.args;
    const base = getComponentClass("empty-state");
    const parts = [base];
    containerClass && parts.push(containerClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get actionClass() {
    const {
      marginClass = DEFAULT_MARGIN_CLASS
    } = this.args;
    const base = getComponentClass("empty-state-nav");
    return `${base} ${marginClass}`.trim();
  }
  get iconSize() {
    return this.args.iconSize ?? DEFAULT_ICON_SIZE;
  }
  get ariaLabel() {
    return t("lbl.a11y.empty.state.content");
  }
  get headerDisplay() {
    return this.args.headerText ? t(this.args.headerText) : "";
  }
  get subHeaderDisplay() {
    return this.args.subHeaderText ? t(this.args.subHeaderText) : "";
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-empty-state";
  }
  get subtitleId() {
    return `ulx-empty-state-subtitle-${guidFor(this)}`;
  }
  get titleDescribedBy() {
    return this.args.subHeaderText ? this.subtitleId : null;
  }
}
_UlxEmptyState = UlxEmptyState;
setComponentTemplate(precompileTemplate("\n\t\t<div aria-label={{this.ariaLabel}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t<div class={{this.rootClasses}}>\n\t\t\t\t{{#if @iconName}}\n\t\t\t\t\t<div class=\"empty-state-icon\" data-qa=\"ulx-empty-state-icon\">\n\t\t\t\t\t\t<UlxIcon @type=\"svg\" @componentClass=\"empty-svg-size\" @iconName={{@iconName}} @size={{this.iconSize}} aria-hidden=\"true\" />\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if @headerText}}\n\t\t\t\t\t<h4 class=\"empty-state-title\" aria-describedby={{this.titleDescribedBy}} data-qa=\"ulx-empty-state-title\">\n\t\t\t\t\t\t{{this.headerDisplay}}\n\t\t\t\t\t</h4>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if @subHeaderText}}\n\t\t\t\t\t<h6 class=\"empty-state-subtitle\" id={{this.subtitleId}} data-qa=\"ulx-empty-state-subtitle\">\n\t\t\t\t\t\t{{this.subHeaderDisplay}}\n\t\t\t\t\t</h6>\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if (has-block)}}\n\t\t\t\t\t<div class={{this.actionClass}} data-qa=\"ulx-empty-state-nav\">\n\t\t\t\t\t\t{{yield}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIcon
  })
}), _UlxEmptyState);

export { UlxEmptyState as default };
//# sourceMappingURL=index.js.map
