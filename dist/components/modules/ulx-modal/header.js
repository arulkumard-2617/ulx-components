import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import UlxIconButton from '../../elements/ulx-icon-button/index.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxModalHeader;
let UlxModalHeader = (_class = (_UlxModalHeader = class UlxModalHeader extends Component {
  get headerRootClasses() {
    return joinClassNames("dialog-header", this.args.headerClassName);
  }
  get showCloseButton() {
    return this.args.showCloseButton ?? true;
  }
  get showMaximizeButton() {
    return this.args.showMaximizeButton ?? false;
  }
  get closeIconName() {
    return this.args.closeIconName || "close-icon-01";
  }
  get iconComponentClass() {
    return this.args.iconComponentClass ?? "bs-icons1";
  }
  get iconVariant() {
    return this.args.iconVariant ?? "secondary";
  }
  get iconSize() {
    return this.args.iconSize ?? "s18";
  }
  get maximizeIconName() {
    return this.args.maximizeIconName || "expand-icon";
  }
  get minimizeIconName() {
    return this.args.minimizeIconName || "collapse-icon-01";
  }
  get currentMaximizeIconName() {
    return this.args.isMaximized ? this.minimizeIconName : this.maximizeIconName;
  }
  get maximizeButtonAriaLabel() {
    return this.args.isMaximized ? t("lbl.restore") : t("lbl.maximize");
  }
  handleClose(event) {
    event.preventDefault();
    event.stopPropagation();
    this.args.onClose?.();
  }
  handleMaximize(event) {
    event.preventDefault();
    event.stopPropagation();
    this.args.onMaximize?.();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.headerRootClasses}} data-qa=\"ulx-modal-header\" ...attributes>\n\t\t\t{{#if (has-block)}}\n\t\t\t\t{{yield}}\n\t\t\t{{else}}\n\t\t\t\t<h4 class=\"dialog-title\" id=\"modal-title\">\n\t\t\t\t\t{{@title}}\n\t\t\t\t</h4>\n\t\t\t{{/if}}\n\n\t\t\t<div class=\"dialog-header-icons\">\n\t\t\t\t{{#if this.showMaximizeButton}}\n\t\t\t\t\t<UlxIconButton @iconLeft={{this.currentMaximizeIconName}} @iconComponentClass={{this.iconComponentClass}} @variant={{this.iconVariant}} @text={{true}} @iconSize={{this.iconSize}} @customClass=\"dialog-maximizable-button\" aria-label={{this.maximizeButtonAriaLabel}} data-qa=\"ulx-modal-maximize\" {{on \"click\" this.handleMaximize}} />\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if this.showCloseButton}}\n\t\t\t\t\t<UlxIconButton @iconLeft={{this.closeIconName}} @iconComponentClass={{this.iconComponentClass}} @variant={{this.iconVariant}} @iconSize={{this.iconSize}} @text={{true}} @customClass=\"dialog-close-button\" aria-label={{t \"lbl.close\"}} data-qa=\"ulx-modal-close\" {{on \"click\" this.handleClose}} />\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIconButton,
    on,
    t
  })
}), _UlxModalHeader), _UlxModalHeader), _applyDecoratedDescriptor(_class.prototype, "handleClose", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClose"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMaximize", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMaximize"), _class.prototype), _class);

export { UlxModalHeader as default };
//# sourceMappingURL=header.js.map
