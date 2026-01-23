import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class UlsTest extends Component {
  static {
    setComponentTemplate(precompileTemplate("\n    <div class=\"uls-test\">\n      Hello World\n    </div>\n  ", {
      strictMode: true
    }), this);
  }
}

export { UlsTest as default };
//# sourceMappingURL=index.js.map
