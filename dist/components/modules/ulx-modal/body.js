import Component from '@glimmer/component';
import { joinClassNames } from '../../../utils/class-names.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _UlxModalBody;
const CONTENT_OVERFLOW_STYLE = {
  true: "overflow-y: auto",
  false: "overflow-y: hidden"
};
/**
 * Modal body subcomponent.
 * Contains the main content area with optional scrolling.
 * Can be customized using the :body named block on UlxModal.
 *
 * ## Usage
 * ```gjs
 * <UlxModalBody @scrollable={{true}}>
 *   <p>Modal content goes here</p>
 * </UlxModalBody>
 * ```
 *
 * @class UlxModalBody
 * @param {boolean} [scrollable=true] - Enable vertical scrolling when content overflows
 * @param {string} [contentClassName] - Extra class for the content root (applied next to dialog-content)
 */
class UlxModalBody extends Component {
  get scrollable() {
    return this.args.scrollable ?? true;
  }
  get contentClasses() {
    return joinClassNames("dialog-content", this.args.contentClassName);
  }
  get contentStyle() {
    return CONTENT_OVERFLOW_STYLE[this.scrollable];
  }
}
_UlxModalBody = UlxModalBody;
setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.contentClasses}} data-qa=\"ulx-modal-body\" style={{this.contentStyle}} ...attributes>\n\t\t\t{{yield}}\n\t\t</div>\n\t", {
  strictMode: true
}), _UlxModalBody);

export { UlxModalBody as default };
//# sourceMappingURL=body.js.map
