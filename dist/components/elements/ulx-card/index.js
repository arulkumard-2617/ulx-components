import Component from '@glimmer/component';
import or from 'ember-truth-helpers/helpers/or';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxCard;
class UlxCard extends Component {
  get baseClass() {
    return this.args.componentClass ?? getComponentClass("card");
  }
  get sizeClass() {
    return this.args.size ?? "m-size";
  }
  get appearanceClass() {
    const appearance = this.args.appearance ?? "outlined";
    return appearance;
  }
  get toneClass() {
    return this.args.variant;
  }
  get densityClass() {
    return this.args.density;
  }
  get shapeClass() {
    const {
      square = false,
      rounded = false
    } = this.args;
    if (square) {
      return "square";
    }
    if (rounded) {
      return "rounded";
    }
    return undefined;
  }
  get interactionClasses() {
    const {
      interactive = false,
      clickable = false,
      hoverable = false
    } = this.args;
    const classes = [];
    (interactive || clickable) && classes.push("interactive");
    hoverable && classes.push("hoverable");
    return classes;
  }
  get rootClasses() {
    const {
      customClass
    } = this.args;
    const parts = [this.baseClass];
    this.appearanceClass && parts.push(this.appearanceClass);
    this.sizeClass && parts.push(this.sizeClass);
    this.densityClass && parts.push(this.densityClass);
    this.shapeClass && parts.push(this.shapeClass);
    this.toneClass && parts.push(this.toneClass);
    parts.push(...this.interactionClasses);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-card";
  }
  get headerClass() {
    return `${this.baseClass}-header`;
  }
  get bodyClass() {
    const baseBodyClassName = `${this.baseClass}-body`;
    const customBodyClassName = this.args.bodyClass;
    return customBodyClassName ? `${baseBodyClassName} ${customBodyClassName}` : baseBodyClassName;
  }
  get titleClass() {
    return `${this.baseClass}-title`;
  }
  get subTitleClass() {
    return `${this.baseClass}-subtitle`;
  }
  get contentClass() {
    return `${this.baseClass}-content`;
  }
  get footerClass() {
    return `${this.baseClass}-footer`;
  }
}
_UlxCard = UlxCard;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t{{#if (or (has-block \"header\") @header)}}\n\t\t\t\t<div class={{this.headerClass}}>\n\t\t\t\t\t{{#if (has-block \"header\")}}\n\t\t\t\t\t\t{{yield to=\"header\"}}\n\t\t\t\t\t{{else if @header}}\n\t\t\t\t\t\t{{@header}}\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t<div class={{this.bodyClass}}>\n\t\t\t\t{{#if (or @title @subTitle)}}\n\t\t\t\t\t<div class={{this.titleClass}}>\n\t\t\t\t\t\t{{#if @title}}\n\t\t\t\t\t\t\t{{@title}}\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t</div>\n\t\t\t\t\t{{#if @subTitle}}\n\t\t\t\t\t\t<p class={{this.subTitleClass}}>{{@subTitle}}</p>\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if (or (has-block) (has-block \"content\"))}}\n\t\t\t\t\t<div class={{this.contentClass}}>\n\t\t\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t\t\t{{yield to=\"content\"}}\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t{{yield}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if (or (has-block \"footer\") @footer)}}\n\t\t\t\t\t<div class={{this.footerClass}}>\n\t\t\t\t\t\t{{#if (has-block \"footer\")}}\n\t\t\t\t\t\t\t{{yield to=\"footer\"}}\n\t\t\t\t\t\t{{else if @footer}}\n\t\t\t\t\t\t\t{{@footer}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    or
  })
}), _UlxCard);

export { UlxCard as default };
//# sourceMappingURL=index.js.map
