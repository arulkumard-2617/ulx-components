import Component from '@glimmer/component';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxTimeline;
class UlxTimeline extends Component {
  get baseClass() {
    return getComponentClass("timeline");
  }
  get model() {
    const {
      model,
      value
    } = this.args;
    return model ?? value ?? [];
  }
  get layout() {
    const {
      layout = "vertical"
    } = this.args;
    return layout === "horizontal" ? "horizontal" : "vertical";
  }
  get align() {
    const {
      align
    } = this.args;
    if (align) return align;
    return this.layout === "horizontal" ? "top" : "left";
  }
  get rootClasses() {
    const {
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(this.layout === "horizontal" ? "layout-horizontal" : "layout-vertical");
    if (this.layout === "vertical") {
      this.align === "right" && parts.push("align-right");
      this.align === "alternate" && parts.push("align-alternate");
    } else {
      this.align === "top" && parts.push("align-top");
      this.align === "bottom" && parts.push("align-bottom");
      this.align === "alternate" && parts.push("align-alternate");
    }
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  resolveFieldData(item, path) {
    if (!item || !path) return undefined;
    if (!path.includes(".")) return item?.[path];
    return path.split(".").reduce((acc, key) => acc == null ? acc : acc[key], item);
  }
  get keyedModel() {
    const {
      dataKey
    } = this.args;
    const model = Array.isArray(this.model) ? this.model : [];
    const lastIndex = model.length - 1;
    return model.map((item, index) => {
      const key = dataKey ? this.resolveFieldData(item, dataKey) : undefined;
      const isHorizontal = this.layout === "horizontal";
      const meta = {
        first: index === 0,
        last: index === lastIndex,
        isHorizontal,
        isVertical: !isHorizontal,
        layout: this.layout,
        align: this.align
      };
      return {
        key: key ?? index,
        item,
        index,
        meta
      };
    });
  }
  get hasAnyOpposite() {
    const model = Array.isArray(this.model) ? this.model : [];
    return model.some(item => Boolean(item?.opposite));
  }
  get shouldRenderOppositeColumn() {
    return this.align === "alternate" || this.hasAnyOpposite;
  }
}
_UlxTimeline = UlxTimeline;
setComponentTemplate(precompileTemplate("\n\t\t<ol class={{this.rootClasses}} ...attributes>\n\t\t\t{{#each this.keyedModel key=\"key\" as |row|}}\n\t\t\t\t<li class=\"timeline-event\" data-index={{row.index}} data-state={{row.item.state}}>\n\t\t\t\t\t{{#if (has-block \"opposite\")}}\n\t\t\t\t\t\t<div class=\"timeline-opposite\">\n\t\t\t\t\t\t\t{{yield row.item row.index row.meta to=\"opposite\"}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t{{#if this.shouldRenderOppositeColumn}}\n\t\t\t\t\t\t\t<div class=\"timeline-opposite\">\n\t\t\t\t\t\t\t\t{{row.item.opposite}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t<div class=\"timeline-separator\">\n\t\t\t\t\t\t{{#if row.meta.isHorizontal}}\n\t\t\t\t\t\t\t<div class=\"timeline-connector\" data-part=\"start\" data-placeholder={{if row.meta.first \"true\" \"false\"}} aria-hidden=\"true\"></div>\n\n\t\t\t\t\t\t\t<div class=\"timeline-marker\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t{{#if (has-block \"marker\")}}\n\t\t\t\t\t\t\t\t\t{{yield row.item row.index row.meta to=\"marker\"}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"timeline-connector\" data-part=\"end\" data-placeholder={{if row.meta.last \"true\" \"false\"}} aria-hidden=\"true\"></div>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<div class=\"timeline-marker\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t{{#if (has-block \"marker\")}}\n\t\t\t\t\t\t\t\t\t{{yield row.item row.index row.meta to=\"marker\"}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t{{#unless row.meta.last}}\n\t\t\t\t\t\t\t\t<div class=\"timeline-connector\" aria-hidden=\"true\"></div>\n\t\t\t\t\t\t\t{{/unless}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"timeline-content\">\n\t\t\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t\t\t{{yield row.item row.index row.meta to=\"content\"}}\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t{{row.item.content}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t{{/each}}\n\t\t</ol>\n\t", {
  strictMode: true
}), _UlxTimeline);

export { UlxTimeline as default };
//# sourceMappingURL=index.js.map
