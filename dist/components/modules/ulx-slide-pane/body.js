import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxSlidePaneBody;
class UlxSlidePaneBody extends Component {
  get scrollable() {
    return this.args.scrollable ?? true;
  }
  get noPadding() {
    return this.args.noPadding ?? false;
  }
  get contentClasses() {
    const {
      contentClassName
    } = this.args;
    const parts = ["slidepane-content"];
    this.noPadding && parts.push("no-padding");
    contentClassName && parts.push(contentClassName);
    return parts.filter(Boolean).join(" ");
  }
  get contentStyle() {
    const styles = [];
    if (this.scrollable) {
      styles.push("overflow-y: auto");
    } else {
      styles.push("overflow-y: hidden");
    }
    return styles.join("; ");
  }
}
_UlxSlidePaneBody = UlxSlidePaneBody;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.contentClasses}} style={{this.contentStyle}} ...attributes>\n\t\t\t{{yield}}\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxSlidePaneBody);

export { UlxSlidePaneBody as default };
//# sourceMappingURL=body.js.map
