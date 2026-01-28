'use strict';

define("ulx-ember/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberQunit.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
});
define("ulx-ember/tests/integration/components/ulx-docs-header-test", ["qunit", "ulx-ember/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ulx-ember/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | ulx-docs-header', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <UlxDocsHeader />
      */
      {
        "id": "zJ0VyxUm",
        "block": "[[[8,[39,0],null,null,null]],[],[\"ulx-docs-header\"]]",
        "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/uls-components/ulx/src/demo/ulx-ember/ulx-ember/tests/integration/components/ulx-docs-header-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <UlxDocsHeader>
              template block text
            </UlxDocsHeader>
          
      */
      {
        "id": "2AGU+ADp",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"ulx-docs-header\"]]",
        "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/uls-components/ulx/src/demo/ulx-ember/ulx-ember/tests/integration/components/ulx-docs-header-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("ulx-ember/tests/test-helper", ["ulx-ember/app", "ulx-ember/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ulx-ember/app",0,"ulx-ember/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.setupEmberOnerrorValidation)();

  // Only load tests if test-loader is available
  try {
    const {
      loadTests
    } = require("ember-qunit/test-loader");
    loadTests();
  } catch (e) {
    // Test loader not available, skip loading tests
    console.warn('Test loader not available, skipping test loading');
  }
  (0, _emberQunit.start)();
});
define('ulx-ember/config/environment', [], function() {
  var prefix = 'ulx-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ulx-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
