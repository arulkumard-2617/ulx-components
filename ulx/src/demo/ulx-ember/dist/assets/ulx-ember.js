'use strict';



;define("ulx-ember/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ulx-ember/config/environment", "@embroider/macros/es-compat2"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment, _esCompat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"ulx-ember/config/environment",0,"@embroider/macros",0,"./deprecation-workflow"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  {
    (0, _esCompat.default)(require("ulx-ember/deprecation-workflow"));
  }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ulx-ember/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/Demo/Button/Badge", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonBadge;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonBadge extends _component.default {}
  _exports.default = DemoButtonBadge;
  _DemoButtonBadge = DemoButtonBadge;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton @label="Messages" @badge="2" />
    <UlxButton @label="Updates" @badge="5" @severity="success" />
  </div>
  */
  {
    "id": "PwIY94sU",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@badge\"],[\"Messages\",\"2\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@badge\",\"@severity\"],[\"Updates\",\"5\",\"success\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Badge.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonBadge);
});
;define("ulx-ember/components/Demo/Button/Basic", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonBasic;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonBasic extends _component.default {}
  _exports.default = DemoButtonBasic;
  _DemoButtonBasic = DemoButtonBasic;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center">
    <UlxButton @label="Click Me" />
    <UlxButton @label="Submit" @severity="success" />
    <UlxButton @label="Delete" @severity="danger" />
  </div>
  */
  {
    "id": "xn3E1l5c",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\"],[\"Click Me\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Submit\",\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Delete\",\"danger\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Basic.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonBasic);
});
;define("ulx-ember/components/Demo/Button/Disabled", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonDisabled;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonDisabled extends _component.default {}
  _exports.default = DemoButtonDisabled;
  _DemoButtonDisabled = DemoButtonDisabled;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc wrap gap-md">
    <UlxButton @label="Submit" @disabled={{true}} />
  </div>
  */
  {
    "id": "OB8PYgCP",
    "block": "[[[10,0],[14,0,\"fxb fvc wrap gap-md\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@disabled\"],[\"Submit\",true]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Disabled.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonDisabled);
});
;define("ulx-ember/components/Demo/Button/Group", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonGroup;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonGroup extends _component.default {}
  _exports.default = DemoButtonGroup;
  _DemoButtonGroup = DemoButtonGroup;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc wrap gap-md">
    <UlxButtonGroup @orientation="horizontal" @size="normal">
      <UlxButton
        @label="Save"
        @icon="ls-tick-icon"
        @iconSize="s18"
        @iconComponentClass="bs-icons1"
      />
      <UlxButton
        @label="Delete"
        @icon="delete-icon"
        @iconSize="s18"
        @iconComponentClass="bs-icons1"
      />
      <UlxButton
        @label="Cancel"
        @icon="close-icon-01"
        @iconSize="s18"
        @iconComponentClass="bs-icons1"
      />
    </UlxButtonGroup>
  </div>
  */
  {
    "id": "fdJlG6Fr",
    "block": "[[[10,0],[14,0,\"fxb fvc wrap gap-md\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@orientation\",\"@size\"],[\"horizontal\",\"normal\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[32,1],null,[[\"@label\",\"@icon\",\"@iconSize\",\"@iconComponentClass\"],[\"Save\",\"ls-tick-icon\",\"s18\",\"bs-icons1\"]],null],[1,\"\\n    \"],[8,[32,1],null,[[\"@label\",\"@icon\",\"@iconSize\",\"@iconComponentClass\"],[\"Delete\",\"delete-icon\",\"s18\",\"bs-icons1\"]],null],[1,\"\\n    \"],[8,[32,1],null,[[\"@label\",\"@icon\",\"@iconSize\",\"@iconComponentClass\"],[\"Cancel\",\"close-icon-01\",\"s18\",\"bs-icons1\"]],null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Group.js",
    "scope": () => [_ulxComponents.UlxButtonGroup, _ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonGroup);
});
;define("ulx-ember/components/Demo/Button/IconOnly", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonIconOnly;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  const ICON_ONLY_ROW = [{
    icon: 'ls-tick-icon',
    severity: 'primary',
    ariaLabel: 'Filter'
  }, {
    icon: 'comment-icon',
    severity: 'secondary',
    ariaLabel: 'Bookmark'
  }, {
    icon: 'search-icon',
    severity: 'success',
    ariaLabel: 'Search'
  }, {
    icon: 'close-icon-01',
    severity: 'info',
    ariaLabel: 'User'
  }, {
    icon: 'delete-icon',
    severity: 'warning',
    ariaLabel: 'Notification'
  }, {
    icon: 'ls-tick-icon',
    severity: 'help',
    ariaLabel: 'Favorite'
  }, {
    icon: 'close-icon-01',
    severity: 'danger',
    ariaLabel: 'Cancel'
  }];
  class DemoButtonIconOnly extends _component.default {
    get iconOnlyRow() {
      return ICON_ONLY_ROW;
    }
  }
  _exports.default = DemoButtonIconOnly;
  _DemoButtonIconOnly = DemoButtonIconOnly;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb column gp6">
    {{! Row 1: Square filled icon-only }}
    <div class="fxb fvc gp6">
      {{#each this.iconOnlyRow as |item|}}
        <UlxButton
          @icon={{item.icon}}
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
          @severity={{item.severity}}
          aria-label={{item.ariaLabel}}
        />
      {{/each}}
    </div>
  
    {{! Row 2: Rounded filled icon-only }}
    <div class="fxb fvc gp6">
      {{#each this.iconOnlyRow as |item|}}
        <UlxButton
          @icon={{item.icon}}
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
          @rounded={{true}}
          @severity={{item.severity}}
          aria-label={{item.ariaLabel}}
        />
      {{/each}}
    </div>
  
    {{! Row 3: Rounded outlined icon-only }}
    <div class="fxb fvc gp6">
      {{#each this.iconOnlyRow as |item|}}
        <UlxButton
          @icon={{item.icon}}
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
          @rounded={{true}}
          @outlined={{true}}
          @severity={{item.severity}}
          aria-label={{item.ariaLabel}}
        />
      {{/each}}
    </div>
  
    {{! Row 4: Rounded text raised icon-only }}
    <div class="fxb fvc gp6">
      {{#each this.iconOnlyRow as |item|}}
        <UlxButton
          @icon={{item.icon}}
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
          @rounded={{true}}
          @text={{true}}
          @raised={{true}}
          @severity={{item.severity}}
          aria-label={{item.ariaLabel}}
        />
      {{/each}}
    </div>
  
    {{! Row 5: Rounded text icon-only }}
    <div class="fxb fvc gp6">
      {{#each this.iconOnlyRow as |item|}}
        <UlxButton
          @icon={{item.icon}}
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
          @rounded={{true}}
          @text={{true}}
          @severity={{item.severity}}
          aria-label={{item.ariaLabel}}
        />
      {{/each}}
    </div>
  </div>
  */
  {
    "id": "7lJRsM0P",
    "block": "[[[10,0],[14,0,\"fxb column gp6\"],[12],[1,\"\\n\"],[1,\"  \"],[10,0],[14,0,\"fxb fvc gp6\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"iconOnlyRow\"]]],null]],null],null,[[[1,\"      \"],[8,[32,0],[[16,\"aria-label\",[30,1,[\"ariaLabel\"]]]],[[\"@icon\",\"@iconSize\",\"@iconComponentClass\",\"@severity\"],[[30,1,[\"icon\"]],\"s18\",\"bs-icons1\",[30,1,[\"severity\"]]]],null],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[1,\"  \"],[10,0],[14,0,\"fxb fvc gp6\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"iconOnlyRow\"]]],null]],null],null,[[[1,\"      \"],[8,[32,0],[[16,\"aria-label\",[30,2,[\"ariaLabel\"]]]],[[\"@icon\",\"@iconSize\",\"@iconComponentClass\",\"@rounded\",\"@severity\"],[[30,2,[\"icon\"]],\"s18\",\"bs-icons1\",true,[30,2,[\"severity\"]]]],null],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[1,\"  \"],[10,0],[14,0,\"fxb fvc gp6\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"iconOnlyRow\"]]],null]],null],null,[[[1,\"      \"],[8,[32,0],[[16,\"aria-label\",[30,3,[\"ariaLabel\"]]]],[[\"@icon\",\"@iconSize\",\"@iconComponentClass\",\"@rounded\",\"@outlined\",\"@severity\"],[[30,3,[\"icon\"]],\"s18\",\"bs-icons1\",true,true,[30,3,[\"severity\"]]]],null],[1,\"\\n\"]],[3]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[1,\"  \"],[10,0],[14,0,\"fxb fvc gp6\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"iconOnlyRow\"]]],null]],null],null,[[[1,\"      \"],[8,[32,0],[[16,\"aria-label\",[30,4,[\"ariaLabel\"]]]],[[\"@icon\",\"@iconSize\",\"@iconComponentClass\",\"@rounded\",\"@text\",\"@raised\",\"@severity\"],[[30,4,[\"icon\"]],\"s18\",\"bs-icons1\",true,true,true,[30,4,[\"severity\"]]]],null],[1,\"\\n\"]],[4]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[1,\"  \"],[10,0],[14,0,\"fxb fvc gp6\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"iconOnlyRow\"]]],null]],null],null,[[[1,\"      \"],[8,[32,0],[[16,\"aria-label\",[30,5,[\"ariaLabel\"]]]],[[\"@icon\",\"@iconSize\",\"@iconComponentClass\",\"@rounded\",\"@text\",\"@severity\"],[[30,5,[\"icon\"]],\"s18\",\"bs-icons1\",true,true,[30,5,[\"severity\"]]]],null],[1,\"\\n\"]],[5]],null],[1,\"  \"],[13],[1,\"\\n\"],[13]],[\"item\",\"item\",\"item\",\"item\",\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/IconOnly.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonIconOnly);
});
;define("ulx-ember/components/Demo/Button/Icons", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonIcons;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonIcons extends _component.default {}
  _exports.default = DemoButtonIcons;
  _DemoButtonIcons = DemoButtonIcons;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      @icon="ls-tick-icon"
      @iconSize="s22"
      @iconComponentClass="bs-icons1"
      aria-label="Submit"
    />
    <UlxButton
      @label="Submit"
      @icon="ls-tick-icon"
      @iconSize="s22"
      @iconComponentClass="bs-icons1"
    />
    <UlxButton
      @label="Submit"
      @icon="ls-tick-icon"
      @iconPos="right"
      @iconSize="s22"
      @iconComponentClass="bs-icons1"
    />
  </div>
  */
  {
    "id": "r7rZznIn",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"Submit\"]],[[\"@icon\",\"@iconSize\",\"@iconComponentClass\"],[\"ls-tick-icon\",\"s22\",\"bs-icons1\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@icon\",\"@iconSize\",\"@iconComponentClass\"],[\"Submit\",\"ls-tick-icon\",\"s22\",\"bs-icons1\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@icon\",\"@iconPos\",\"@iconSize\",\"@iconComponentClass\"],[\"Submit\",\"ls-tick-icon\",\"right\",\"s22\",\"bs-icons1\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Icons.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonIcons);
});
;define("ulx-ember/components/Demo/Button/Link", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonLink;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonLink extends _component.default {}
  _exports.default = DemoButtonLink;
  _DemoButtonLink = DemoButtonLink;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton @label="Link" @link={{true}} @text={{true}} href="#" />
    <UlxButton @label="Navigate" @link={{true}} @severity="info" href="#" />
  </div>
  */
  {
    "id": "bTZnKctP",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,6,\"#\"]],[[\"@label\",\"@link\",\"@text\"],[\"Link\",true,true]],null],[1,\"\\n  \"],[8,[32,0],[[24,6,\"#\"]],[[\"@label\",\"@link\",\"@severity\"],[\"Navigate\",true,\"info\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Link.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonLink);
});
;define("ulx-ember/components/Demo/Button/Outlined", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonOutlined;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonOutlined extends _component.default {}
  _exports.default = DemoButtonOutlined;
  _DemoButtonOutlined = DemoButtonOutlined;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton @label="Primary" @outlined={{true}} />
    <UlxButton @label="Secondary" @outlined={{true}} @severity="secondary" />
    <UlxButton @label="Success" @outlined={{true}} @severity="success" />
    <UlxButton @label="Info" @outlined={{true}} @severity="info" />
    <UlxButton @label="Warning" @outlined={{true}} @severity="warning" />
    <UlxButton @label="Danger" @outlined={{true}} @severity="danger" />
  </div>
  */
  {
    "id": "LT7dhijw",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@outlined\"],[\"Primary\",true]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@outlined\",\"@severity\"],[\"Secondary\",true,\"secondary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@outlined\",\"@severity\"],[\"Success\",true,\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@outlined\",\"@severity\"],[\"Info\",true,\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@outlined\",\"@severity\"],[\"Warning\",true,\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@outlined\",\"@severity\"],[\"Danger\",true,\"danger\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Outlined.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonOutlined);
});
;define("ulx-ember/components/Demo/Button/Raised", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonRaised;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonRaised extends _component.default {}
  _exports.default = DemoButtonRaised;
  _DemoButtonRaised = DemoButtonRaised;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton @label="Primary" @raised={{true}} />
    <UlxButton @label="Secondary" @raised={{true}} @severity="secondary" />
    <UlxButton @label="Success" @raised={{true}} @severity="success" />
    <UlxButton @label="Info" @raised={{true}} @severity="info" />
    <UlxButton @label="Warning" @raised={{true}} @severity="warning" />
    <UlxButton @label="Help" @raised={{true}} @severity="help" />
    <UlxButton @label="Danger" @raised={{true}} @severity="danger" />
  </div>
  */
  {
    "id": "qNfzGd25",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@raised\"],[\"Primary\",true]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@raised\",\"@severity\"],[\"Secondary\",true,\"secondary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@raised\",\"@severity\"],[\"Success\",true,\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@raised\",\"@severity\"],[\"Info\",true,\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@raised\",\"@severity\"],[\"Warning\",true,\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@raised\",\"@severity\"],[\"Help\",true,\"help\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@raised\",\"@severity\"],[\"Danger\",true,\"danger\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Raised.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonRaised);
});
;define("ulx-ember/components/Demo/Button/RaisedText", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonRaisedText;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonRaisedText extends _component.default {}
  _exports.default = DemoButtonRaisedText;
  _DemoButtonRaisedText = DemoButtonRaisedText;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc wrap gap-md">
    <UlxButton @label="Primary" @text={{true}} @raised={{true}} />
    <UlxButton
      @label="Secondary"
      @text={{true}}
      @raised={{true}}
      @severity="secondary"
    />
    <UlxButton
      @label="Success"
      @text={{true}}
      @raised={{true}}
      @severity="success"
    />
    <UlxButton
      @label="Info"
      @text={{true}}
      @raised={{true}}
      @severity="info"
    />
    <UlxButton
      @label="Warning"
      @text={{true}}
      @raised={{true}}
      @severity="warning"
    />
    <UlxButton
      @label="Help"
      @text={{true}}
      @raised={{true}}
      @severity="help"
    />
    <UlxButton
      @label="Danger"
      @text={{true}}
      @raised={{true}}
      @severity="danger"
    />
  </div>
  */
  {
    "id": "lHzA5Zli",
    "block": "[[[10,0],[14,0,\"fxb fvc wrap gap-md\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@raised\"],[\"Primary\",true,true]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@raised\",\"@severity\"],[\"Secondary\",true,true,\"secondary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@raised\",\"@severity\"],[\"Success\",true,true,\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@raised\",\"@severity\"],[\"Info\",true,true,\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@raised\",\"@severity\"],[\"Warning\",true,true,\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@raised\",\"@severity\"],[\"Help\",true,true,\"help\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@raised\",\"@severity\"],[\"Danger\",true,true,\"danger\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/RaisedText.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonRaisedText);
});
;define("ulx-ember/components/Demo/Button/Rounded", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonRounded;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonRounded extends _component.default {}
  _exports.default = DemoButtonRounded;
  _DemoButtonRounded = DemoButtonRounded;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton @label="Primary" @rounded={{true}} />
    <UlxButton @label="Secondary" @rounded={{true}} @severity="secondary" />
    <UlxButton @label="Success" @rounded={{true}} @severity="success" />
    <UlxButton @label="Info" @rounded={{true}} @severity="info" />
    <UlxButton @label="Warning" @rounded={{true}} @severity="warning" />
    <UlxButton @label="Danger" @rounded={{true}} @severity="danger" />
  </div>
  */
  {
    "id": "Jrn+U1Sa",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rounded\"],[\"Primary\",true]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rounded\",\"@severity\"],[\"Secondary\",true,\"secondary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rounded\",\"@severity\"],[\"Success\",true,\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rounded\",\"@severity\"],[\"Info\",true,\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rounded\",\"@severity\"],[\"Warning\",true,\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rounded\",\"@severity\"],[\"Danger\",true,\"danger\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Rounded.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonRounded);
});
;define("ulx-ember/components/Demo/Button/Severities", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonSeverities;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonSeverities extends _component.default {}
  _exports.default = DemoButtonSeverities;
  _DemoButtonSeverities = DemoButtonSeverities;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-5 align-items-center flex-wrap">
    <UlxButton @label="Primary" @severity="primary" />
    <UlxButton @label="Secondary" @severity="secondary" />
    <UlxButton @label="Success" @severity="success" />
    <UlxButton @label="Info" @severity="info" />
    <UlxButton @label="Warning" @severity="warning" />
    <UlxButton @label="Help" @severity="help" />
    <UlxButton @label="Danger" @severity="danger" />
  </div>
  */
  {
    "id": "A3rlCEBC",
    "block": "[[[10,0],[14,0,\"flex gap-5 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Primary\",\"primary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Secondary\",\"secondary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Success\",\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Info\",\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Warning\",\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Help\",\"help\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@severity\"],[\"Danger\",\"danger\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Severities.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonSeverities);
});
;define("ulx-ember/components/Demo/Button/Sizes", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonSizes;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonSizes extends _component.default {}
  _exports.default = DemoButtonSizes;
  _DemoButtonSizes = DemoButtonSizes;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton @label="Small" @size="small" />
    <UlxButton @label="Normal" />
    <UlxButton @label="Large" @size="large" />
  </div>
  */
  {
    "id": "pK2MC3HV",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@size\"],[\"Small\",\"small\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\"],[\"Normal\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@size\"],[\"Large\",\"large\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Sizes.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonSizes);
});
;define("ulx-ember/components/Demo/Button/States", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _DemoButtonStates;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let DemoButtonStates = _exports.default = (_class = (_DemoButtonStates = class DemoButtonStates extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "loading", _descriptor, this);
    }
    startLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 20000);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc wrap gap-md">
    <UlxButton
      @label="Submit"
      @icon="ls-tick-icon"
      @iconComponentClass="bs-icons1"
      @iconSize="s22"
      @loading={{this.loading}}
      {{on "click" this.startLoading}}
    />
  </div>
  */
  {
    "id": "8ApALpn1",
    "block": "[[[10,0],[14,0,\"fxb fvc wrap gap-md\"],[12],[1,\"\\n  \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"startLoading\"]]],null]],[[\"@label\",\"@icon\",\"@iconComponentClass\",\"@iconSize\",\"@loading\"],[\"Submit\",\"ls-tick-icon\",\"bs-icons1\",\"s22\",[30,0,[\"loading\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/States.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on],
    "isStrictMode": true
  }), _DemoButtonStates), _DemoButtonStates), _descriptor = _applyDecoratedDescriptor(_class.prototype, "loading", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "startLoading", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "startLoading"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Button/Template", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonTemplate;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonTemplate extends _component.default {}
  _exports.default = DemoButtonTemplate;
  _DemoButtonTemplate = DemoButtonTemplate;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc wrap gap-md">
    <UlxButton
      aria-label="ULX"
      @customClass="bg-primary fg-primary bd-blue pd4"
    >
      <img
        alt=""
        src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg"
        class="h32"
        role="presentation"
      />
    </UlxButton>
  </div>
  */
  {
    "id": "8mY2b7nO",
    "block": "[[[10,0],[14,0,\"fxb fvc wrap gap-md\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"ULX\"]],[[\"@customClass\"],[\"bg-primary fg-primary bd-blue pd4\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"img\"],[14,\"alt\",\"\"],[14,\"src\",\"https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg\"],[14,0,\"h32\"],[14,\"role\",\"presentation\"],[12],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Template.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonTemplate);
});
;define("ulx-ember/components/Demo/Button/Text", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoButtonText;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoButtonText extends _component.default {}
  _exports.default = DemoButtonText;
  _DemoButtonText = DemoButtonText;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton @label="Primary" @text={{true}} />
    <UlxButton @label="Secondary" @text={{true}} @severity="secondary" />
    <UlxButton @label="Success" @text={{true}} @severity="success" />
    <UlxButton @label="Info" @text={{true}} @severity="info" />
    <UlxButton @label="Warning" @text={{true}} @severity="warning" />
    <UlxButton @label="Danger" @text={{true}} @severity="danger" />
  </div>
  */
  {
    "id": "IDoodOzX",
    "block": "[[[10,0],[14,0,\"flex gap-3 align-items-center flex-wrap\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\"],[\"Primary\",true]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@severity\"],[\"Secondary\",true,\"secondary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@severity\"],[\"Success\",true,\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@severity\"],[\"Info\",true,\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@severity\"],[\"Warning\",true,\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@text\",\"@severity\"],[\"Danger\",true,\"danger\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Button/Text.js",
    "scope": () => [_ulxComponents.UlxButton],
    "isStrictMode": true
  }), _DemoButtonText);
});
;define("ulx-ember/components/Demo/Icon/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="ls-tick-icon"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="close-icon-01"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon>
      <:icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            transform="scale(1, -1) translate(0, -1024)"
            d="M 831.488 602.112h -24.576c -12.288 0.000 -20.480 8.192 -28.672 20.480 -4.096 12.288 -4.096 24.576 4.096 32.768l 20.480 20.480c 36.864 36.864 36.864 94.208 0.000 126.976 -36.864 36.864 -94.208 36.864 -126.976 0.000l -20.480 -20.480c -8.192 -8.192 -20.480 -12.288 -32.768 -4.096 -12.288 4.096 -20.480 16.384 -20.480 28.672v 24.576c 0.000 49.152 -40.960 90.112 -90.112 90.112s -90.112 -40.960 -90.112 -90.112v -24.576c 0.000 -12.288 -8.192 -20.480 -20.480 -28.672 -12.288 -4.096 -24.576 -4.096 -32.768 4.096l -16.384 20.480c -36.864 36.864 -94.208 36.864 -126.976 0.000 -36.864 -36.864 -36.864 -94.208 0.000 -126.976l 16.384 -20.480c 8.192 -8.192 8.192 -20.480 4.096 -32.768s -16.384 -20.480 -28.672 -20.480h -24.576c -49.152 0.000 -90.112 -40.960 -90.112 -90.112s 40.960 -90.112 90.112 -90.112h 24.576c 12.288 0.000 20.480 -8.192 28.672 -20.480 4.096 -12.288 4.096 -24.576 -4.096 -32.768l -20.480 -20.480c -36.864 -36.864 -36.864 -94.208 0.000 -126.976 36.864 -36.864 94.208 -36.864 126.976 0.000l 20.480 20.480c 8.192 8.192 20.480 12.288 32.768 4.096 12.288 -4.096 20.480 -16.384 20.480 -28.672v -24.576c 0.000 -49.152 40.960 -90.112 90.112 -90.112s 90.112 40.960 90.112 90.112v 24.576c 0.000 12.288 8.192 20.480 20.480 28.672 12.288 4.096 24.576 4.096 32.768 -4.096l 20.480 -20.480c 36.864 -36.864 94.208 -36.864 126.976 0.000s 36.864 94.208 0.000 126.976l -20.480 20.480c -8.192 8.192 -12.288 20.480 -4.096 32.768 4.096 12.288 16.384 20.480 28.672 20.480h 24.576c 49.152 0.000 90.112 40.960 90.112 90.112s -40.960 90.112 -90.112 90.112zM 831.488 471.040h -24.576c -32.768 0.000 -61.440 -20.480 -73.728 -49.152s -8.192 -61.440 16.384 -86.016l 20.480 -20.480c 16.384 -16.384 16.384 -40.960 0.000 -57.344s -40.960 -16.384 -57.344 0.000l -20.480 20.480c -24.576 24.576 -57.344 28.672 -86.016 16.384s -49.152 -36.864 -49.152 -73.728v -24.576c 0.000 -24.576 -20.480 -40.960 -40.960 -40.960 -24.576 0.000 -40.960 20.480 -40.960 40.960v 24.576c 0.000 32.768 -20.480 61.440 -49.152 73.728s -61.440 8.192 -86.016 -16.384l -20.480 -20.480c -16.384 -16.384 -40.960 -16.384 -57.344 0.000s -16.384 40.960 0.000 57.344l 20.480 20.480c 24.576 24.576 28.672 57.344 16.384 86.016s -36.864 49.152 -73.728 49.152h -32.768c -24.576 0.000 -40.960 20.480 -40.960 40.960s 20.480 40.960 40.960 40.960h 24.576c 32.768 0.000 61.440 20.480 73.728 49.152s 8.192 61.440 -16.384 86.016l -16.384 20.480c -16.384 16.384 -16.384 40.960 0.000 57.344s 40.960 16.384 57.344 0.000l 20.480 -20.480c 24.576 -24.576 57.344 -28.672 86.016 -16.384s 49.152 36.864 49.152 73.728v 28.672c 0.000 24.576 20.480 40.960 40.960 40.960 24.576 0.000 40.960 -20.480 40.960 -40.960v -24.576c 0.000 -32.768 20.480 -61.440 49.152 -73.728s 61.440 -8.192 86.016 16.384l 20.480 20.480c 16.384 16.384 40.960 16.384 57.344 0.000s 16.384 -40.960 0.000 -57.344l -20.480 -20.480c -24.576 -24.576 -28.672 -57.344 -16.384 -86.016s 36.864 -49.152 73.728 -49.152h 24.576c 24.576 0.000 40.960 -20.480 40.960 -40.960s -16.384 -45.056 -36.864 -45.056zM 512.000 647.168c -73.728 0.000 -135.168 -61.440 -135.168 -135.168s 61.440 -135.168 135.168 -135.168c 73.728 0.000 135.168 61.440 135.168 135.168s -61.440 135.168 -135.168 135.168zM 512.000 425.984c -49.152 0.000 -86.016 40.960 -86.016 86.016s 40.960 86.016 86.016 86.016c 49.152 0.000 86.016 -40.960 86.016 -86.016s -36.864 -86.016 -86.016 -86.016z"
          />
        </svg>
      </:icon>
    </UlxIcon>
  </div>
  */
  {
    "id": "78lQCcN4",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"ls-tick-icon\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"close-icon-01\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,null,[[\"icon\"],[[[[1,\"\\n      \"],[10,\"svg\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,\"width\",\"24\"],[14,\"height\",\"24\"],[14,\"viewBox\",\"0 0 1024 1024\"],[12],[1,\"\\n        \"],[10,\"path\"],[14,\"fill\",\"currentColor\"],[14,\"transform\",\"scale(1, -1) translate(0, -1024)\"],[14,\"d\",\"M 831.488 602.112h -24.576c -12.288 0.000 -20.480 8.192 -28.672 20.480 -4.096 12.288 -4.096 24.576 4.096 32.768l 20.480 20.480c 36.864 36.864 36.864 94.208 0.000 126.976 -36.864 36.864 -94.208 36.864 -126.976 0.000l -20.480 -20.480c -8.192 -8.192 -20.480 -12.288 -32.768 -4.096 -12.288 4.096 -20.480 16.384 -20.480 28.672v 24.576c 0.000 49.152 -40.960 90.112 -90.112 90.112s -90.112 -40.960 -90.112 -90.112v -24.576c 0.000 -12.288 -8.192 -20.480 -20.480 -28.672 -12.288 -4.096 -24.576 -4.096 -32.768 4.096l -16.384 20.480c -36.864 36.864 -94.208 36.864 -126.976 0.000 -36.864 -36.864 -36.864 -94.208 0.000 -126.976l 16.384 -20.480c 8.192 -8.192 8.192 -20.480 4.096 -32.768s -16.384 -20.480 -28.672 -20.480h -24.576c -49.152 0.000 -90.112 -40.960 -90.112 -90.112s 40.960 -90.112 90.112 -90.112h 24.576c 12.288 0.000 20.480 -8.192 28.672 -20.480 4.096 -12.288 4.096 -24.576 -4.096 -32.768l -20.480 -20.480c -36.864 -36.864 -36.864 -94.208 0.000 -126.976 36.864 -36.864 94.208 -36.864 126.976 0.000l 20.480 20.480c 8.192 8.192 20.480 12.288 32.768 4.096 12.288 -4.096 20.480 -16.384 20.480 -28.672v -24.576c 0.000 -49.152 40.960 -90.112 90.112 -90.112s 90.112 40.960 90.112 90.112v 24.576c 0.000 12.288 8.192 20.480 20.480 28.672 12.288 4.096 24.576 4.096 32.768 -4.096l 20.480 -20.480c 36.864 -36.864 94.208 -36.864 126.976 0.000s 36.864 94.208 0.000 126.976l -20.480 20.480c -8.192 8.192 -12.288 20.480 -4.096 32.768 4.096 12.288 16.384 20.480 28.672 20.480h 24.576c 49.152 0.000 90.112 40.960 90.112 90.112s -40.960 90.112 -90.112 90.112zM 831.488 471.040h -24.576c -32.768 0.000 -61.440 -20.480 -73.728 -49.152s -8.192 -61.440 16.384 -86.016l 20.480 -20.480c 16.384 -16.384 16.384 -40.960 0.000 -57.344s -40.960 -16.384 -57.344 0.000l -20.480 20.480c -24.576 24.576 -57.344 28.672 -86.016 16.384s -49.152 -36.864 -49.152 -73.728v -24.576c 0.000 -24.576 -20.480 -40.960 -40.960 -40.960 -24.576 0.000 -40.960 20.480 -40.960 40.960v 24.576c 0.000 32.768 -20.480 61.440 -49.152 73.728s -61.440 8.192 -86.016 -16.384l -20.480 -20.480c -16.384 -16.384 -40.960 -16.384 -57.344 0.000s -16.384 40.960 0.000 57.344l 20.480 20.480c 24.576 24.576 28.672 57.344 16.384 86.016s -36.864 49.152 -73.728 49.152h -32.768c -24.576 0.000 -40.960 20.480 -40.960 40.960s 20.480 40.960 40.960 40.960h 24.576c 32.768 0.000 61.440 20.480 73.728 49.152s 8.192 61.440 -16.384 86.016l -16.384 20.480c -16.384 16.384 -16.384 40.960 0.000 57.344s 40.960 16.384 57.344 0.000l 20.480 -20.480c 24.576 -24.576 57.344 -28.672 86.016 -16.384s 49.152 36.864 49.152 73.728v 28.672c 0.000 24.576 20.480 40.960 40.960 40.960 24.576 0.000 40.960 -20.480 40.960 -40.960v -24.576c 0.000 -32.768 20.480 -61.440 49.152 -73.728s 61.440 -8.192 86.016 16.384l 20.480 20.480c 16.384 16.384 40.960 16.384 57.344 0.000s 16.384 -40.960 0.000 -57.344l -20.480 -20.480c -24.576 -24.576 -28.672 -57.344 -16.384 -86.016s 36.864 -49.152 73.728 -49.152h 24.576c 24.576 0.000 40.960 -20.480 40.960 -40.960s -16.384 -45.056 -36.864 -45.056zM 512.000 647.168c -73.728 0.000 -135.168 -61.440 -135.168 -135.168s 61.440 -135.168 135.168 -135.168c 73.728 0.000 135.168 61.440 135.168 135.168s -61.440 135.168 -135.168 135.168zM 512.000 425.984c -49.152 0.000 -86.016 40.960 -86.016 86.016s 40.960 86.016 86.016 86.016c 49.152 0.000 86.016 -40.960 86.016 -86.016s -36.864 -86.016 -86.016 -86.016z\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Basic.js",
    "scope": () => [_ulxComponents.UlxIcon],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/Icon/Color", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s12"
      @ariaLabel="tick icon"
      @customClass="primary"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s13"
      @ariaLabel="tick icon"
      @customClass="success"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s14"
      @ariaLabel="tick icon"
      @customClass="warning"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s16"
      @ariaLabel="tick icon"
      @customClass="danger"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s18"
      @ariaLabel="tick icon"
      @customClass="info"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s20"
      @ariaLabel="tick icon"
      @customClass="muted"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s22"
      @ariaLabel="tick icon"
      @customClass="inverted"
    />
  </div>
  */
  {
    "id": "Ow3uiyIc",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s12\",\"tick icon\",\"primary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s13\",\"tick icon\",\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s14\",\"tick icon\",\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s16\",\"tick icon\",\"danger\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s18\",\"tick icon\",\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s20\",\"tick icon\",\"muted\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s22\",\"tick icon\",\"inverted\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Color.js",
    "scope": () => [_ulxComponents.UlxIcon],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Color"));
});
;define("ulx-ember/components/Demo/Icon/Layer", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoIconLayer;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  const LAYER_VARIATIONS = ['primary', 'success', 'warning', 'danger', 'info'];
  const SAMPLE_ICONS = ['ls-tick-icon', 'close-icon-01', 'comment-icon'];
  class DemoIconLayer extends _component.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "layerVariations", LAYER_VARIATIONS);
      _defineProperty(this, "sampleIcons", SAMPLE_ICONS);
    }
    layerClass(color) {
      return `${color}-layer rounded`;
    }
  }
  _exports.default = DemoIconLayer;
  _DemoIconLayer = DemoIconLayer;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-column col-3 gp8 fhc">
    {{#each this.layerVariations as |color|}}
      <div class="fxb column fvc gp2 col-3">
        <div class="text-sm">bg-{{color}}</div>
        <div class="fxb gp4">
          {{#each this.sampleIcons as |iconName|}}
            <UlxIcon
              @componentClass="bs-icons1"
              @type="font"
              @iconName={{iconName}}
              @size="l"
              @ariaLabel=""
              @customClass={{this.layerClass color}}
            />
          {{/each}}
        </div>
      </div>
    {{/each}}
  </div>
  */
  {
    "id": "YPwHwL/n",
    "block": "[[[10,0],[14,0,\"ulx-column col-3 gp8 fhc\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"layerVariations\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"fxb column fvc gp2 col-3\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"text-sm\"],[12],[1,\"bg-\"],[1,[30,1]],[13],[1,\"\\n      \"],[10,0],[14,0,\"fxb gp4\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"sampleIcons\"]]],null]],null],null,[[[1,\"          \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",[30,2],\"l\",\"\",[28,[30,0,[\"layerClass\"]],[[30,1]],null]]],null],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[1]],null],[13]],[\"color\",\"iconName\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Layer.js",
    "scope": () => [_ulxComponents.UlxIcon],
    "isStrictMode": true
  }), _DemoIconLayer);
});
;define("ulx-ember/components/Demo/Icon/List", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ember-modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _emberModifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _DemoIconList;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ember-modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const BS_ICONS_CSS_URL = 'https://cdn.zicons.in/21598000000025464/v2/bs-icons1.css';
  const ICON_NAME_REGEX = /\.bs-icons1\.([a-zA-Z0-9_-]+):before/g;
  let DemoIconList = _exports.default = (_class = (_DemoIconList = class DemoIconList extends _component.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "on", _modifier.on);
      _defineProperty(this, "runOnInsert", (0, _emberModifier.modifier)(() => {
        this.loadIcons();
      }));
      _initializerDefineProperty(this, "query", _descriptor, this);
      _initializerDefineProperty(this, "icons", _descriptor2, this);
    }
    get filteredIcons() {
      const q = this.query.trim().toLowerCase();
      if (!q) return this.icons;
      return this.icons.filter(name => name.toLowerCase().includes(q));
    }
    loadIcons() {
      this.collectFromStyleSheets() || this.fetchAndParseCss();
    }
    collectFromStyleSheets() {
      const collected = new Set();
      try {
        Array.from(document.styleSheets).forEach(sheet => {
          // Only parse the bs-icons1 icon-font stylesheet; skip app/vendor CSS
          // so we don't pick up utility classes like .bs-icons1.primary, .bs-icons1.s12, etc.
          if (!sheet.href || !sheet.href.includes('bs-icons1.css')) return;
          let rules;
          try {
            rules = sheet.cssRules || sheet.rules;
          } catch {
            return;
          }
          if (!rules) return;
          Array.from(rules).forEach(rule => {
            if (!rule.selectorText) return;
            const selectors = rule.selectorText.split(',');
            selectors.forEach(sel => {
              const s = sel.trim();
              if (s.startsWith('.bs-icons1.')) {
                const withoutPseudo = s.split(':')[0];
                if (withoutPseudo === '.bs-icons1') return;
                const match = /\.bs-icons1\.([a-zA-Z0-9_-]+)$/.exec(withoutPseudo);
                if (match && !match[1].includes(' ')) {
                  collected.add(match[1]);
                }
              }
            });
          });
        });
        if (collected.size > 0) {
          this.icons = Array.from(collected).sort();
          return true;
        }
      } catch {
        // ignore
      }
      return false;
    }
    fetchAndParseCss() {
      fetch(BS_ICONS_CSS_URL).then(r => r.text()).then(css => {
        const collected = new Set();
        let m;
        ICON_NAME_REGEX.lastIndex = 0;
        while (m = ICON_NAME_REGEX.exec(css)) {
          collected.add(m[1]);
        }
        this.icons = Array.from(collected).sort();
      }).catch(() => {
        this.icons = [];
      });
    }
    updateQuery(e) {
      this.query = e.target.value ?? '';
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxc gp4" {{this.runOnInsert}}>
    <div class="fxb fvc gp3 mgb8">
      <input
        type="text"
        placeholder="Search icons..."
        class="ulx-input"
        aria-label="Search icons"
        value={{this.query}}
        {{this.on "input" this.updateQuery}}
      />
      <span class="text-sm ulx-badge">{{this.filteredIcons.length}}
        icons</span>
    </div>
  
    {{#if this.filteredIcons.length}}
      <div class="ulx-grid gp5 col-5 pdt5 text-center bd-t">
        {{#each this.filteredIcons as |iconName|}}
          <div class="pd3 fxb column fvc gp3">
            <UlxIcon
              @componentClass="bs-icons1"
              @type="font"
              @iconName={{iconName}}
              @size="s20"
              @ariaLabel=""
            />
            <span class="text-sm">{{iconName}}</span>
          </div>
        {{/each}}
      </div>
    {{else}}
      <div class="text-center fg-text-muted pdy6 bd-t">No icons found</div>
    {{/if}}
  </div>
  */
  {
    "id": "Ovp9d62t",
    "block": "[[[11,0],[24,0,\"fxc gp4\"],[4,[30,0,[\"runOnInsert\"]],null,null],[12],[1,\"\\n  \"],[10,0],[14,0,\"fxb fvc gp3 mgb8\"],[12],[1,\"\\n    \"],[11,\"input\"],[24,\"placeholder\",\"Search icons...\"],[24,0,\"ulx-input\"],[24,\"aria-label\",\"Search icons\"],[16,2,[30,0,[\"query\"]]],[24,4,\"text\"],[4,[30,0,[\"on\"]],[\"input\",[30,0,[\"updateQuery\"]]],null],[12],[13],[1,\"\\n    \"],[10,1],[14,0,\"text-sm ulx-badge\"],[12],[1,[30,0,[\"filteredIcons\",\"length\"]]],[1,\"\\n      icons\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"filteredIcons\",\"length\"]],[[[1,\"    \"],[10,0],[14,0,\"ulx-grid gp5 col-5 pdt5 text-center bd-t\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"filteredIcons\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"pd3 fxb column fvc gp3\"],[12],[1,\"\\n          \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",[30,1],\"s20\",\"\"]],null],[1,\"\\n          \"],[10,1],[14,0,\"text-sm\"],[12],[1,[30,1]],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,0],[14,0,\"text-center fg-text-muted pdy6 bd-t\"],[12],[1,\"No icons found\"],[13],[1,\"\\n\"]],[]]],[13]],[\"iconName\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/List.js",
    "scope": () => [_ulxComponents.UlxIcon],
    "isStrictMode": true
  }), _DemoIconList), _DemoIconList), _descriptor = _applyDecoratedDescriptor(_class.prototype, "query", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "icons", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "loadIcons", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "loadIcons"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateQuery", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateQuery"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Icon/Size", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s12"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s13"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s14"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s16"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s18"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s20"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s22"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s26"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s28"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s30"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s32"
      @ariaLabel="tick icon"
    />
  </div>
  */
  {
    "id": "CF/2/3Uu",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s12\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s13\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s14\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s16\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s18\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s20\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s22\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s26\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s28\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s30\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s32\",\"tick icon\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Size.js",
    "scope": () => [_ulxComponents.UlxIcon],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Size"));
});
;define("ulx-ember/components/Demo/Icon/Spin", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="session-settings-icon"
      @size="s28"
      @ariaLabel="tick icon"
      @customClass="primary spin-anim"
    />
  </div>
  */
  {
    "id": "XOlrii1z",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"session-settings-icon\",\"s28\",\"tick icon\",\"primary spin-anim\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Spin.js",
    "scope": () => [_ulxComponents.UlxIcon],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Spin"));
});
;define("ulx-ember/components/Demo/Input/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const rules = {
    required: true,
    minLength: {
      value: 10
    },
    maxLength: {
      value: 20
    }
  };
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxInput
      @label="Input"
      @rules={{rules}}
      @helpText="Use 3–20 characters. Letters and numbers only."
      @size="m-size"
      @error="Error message here"
      @fieldClass="col-12"
      placeholder="Enter username"
      aria-label="Username"
    />
  </div>
  */
  {
    "id": "nAn0LHrT",
    "block": "[[[10,0],[14,0,\"ulx-form m-size ulx-grid gp12 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Enter username\"],[24,\"aria-label\",\"Username\"]],[[\"@label\",\"@rules\",\"@helpText\",\"@size\",\"@error\",\"@fieldClass\"],[\"Input\",[32,1],\"Use 3–20 characters. Letters and numbers only.\",\"m-size\",\"Error message here\",\"col-12\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Basic.js",
    "scope": () => [_ulxComponents.UlxInput, rules],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/Input/Disabled", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @disabled={{true}}
    />
  </div>
  */
  {
    "id": "SPATPYgn",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"label\"]],[[\"@label\",\"@size\",\"@fieldClass\",\"@disabled\"],[\"label\",\"l-size\",\"col-12\",true]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Disabled.js",
    "scope": () => [_ulxComponents.UlxInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Disabled"));
});
;define("ulx-ember/components/Demo/Input/Filled", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @floatLabel="label"
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @filled={{true}}
    />
  </div>
  */
  {
    "id": "9dW8fZG4",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"label\"]],[[\"@floatLabel\",\"@label\",\"@size\",\"@fieldClass\",\"@filled\"],[\"label\",\"label\",\"l-size\",\"col-12\",true]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Filled.js",
    "scope": () => [_ulxComponents.UlxInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Filled"));
});
;define("ulx-ember/components/Demo/Input/Floatlabel", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @id="username"
      @label="Username"
      @floatLabel={{true}}
      @size="l-size"
      @fieldClass="col-12"
    />
  </div>
  */
  {
    "id": "w8cgCnPX",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@id\",\"@label\",\"@floatLabel\",\"@size\",\"@fieldClass\"],[\"username\",\"Username\",true,\"l-size\",\"col-12\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Floatlabel.js",
    "scope": () => [_ulxComponents.UlxInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Floatlabel"));
});
;define("ulx-ember/components/Demo/Input/Invalid", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @invalid={{true}}
    />
  </div>
  */
  {
    "id": "BIHLyqBt",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"label\"]],[[\"@label\",\"@size\",\"@fieldClass\",\"@invalid\"],[\"label\",\"l-size\",\"col-12\",true]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Invalid.js",
    "scope": () => [_ulxComponents.UlxInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Invalid"));
});
;define("ulx-ember/components/Demo/Input/Keyfilter", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const keyfilters = [{
    label: 'Integers',
    keyfilter: 'int',
    placeholder: 'e.g. -123'
  }, {
    label: 'Floats',
    keyfilter: 'float',
    placeholder: 'e.g. -12.34'
  }, {
    label: 'Email (loose)',
    keyfilter: 'email',
    placeholder: 'e.g. name@site.com'
  }, {
    label: 'URL (loose)',
    keyfilter: 'url',
    placeholder: 'e.g. https://example.com'
  }, {
    label: 'Phone',
    keyfilter: 'phone',
    placeholder: 'e.g. +1 (555) 123-4567'
  }, {
    label: 'CPF',
    keyfilter: 'cpf',
    placeholder: '11 digits'
  }, {
    label: 'CNPJ',
    keyfilter: 'cnpj',
    placeholder: '14 digits'
  }, {
    label: 'Hex',
    keyfilter: 'hex',
    placeholder: 'e.g. 1A2b3C'
  }, {
    label: 'Alpha',
    keyfilter: 'alpha',
    placeholder: 'letters only'
  }, {
    label: 'Alphanum',
    keyfilter: 'alphanum',
    placeholder: 'letters + numbers'
  }, {
    label: 'UUID (loose)',
    keyfilter: 'uuid',
    placeholder: 'hex + hyphen'
  }, {
    label: 'Date',
    keyfilter: 'date',
    placeholder: 'YYYY-MM-DD'
  }, {
    label: 'Time',
    keyfilter: 'time',
    placeholder: 'HH:MM'
  }, {
    label: 'Datetime',
    keyfilter: 'datetime',
    placeholder: 'YYYY-MM-DD HH:MM'
  }, {
    label: 'Datetime Local',
    keyfilter: 'datetime-local',
    placeholder: 'YYYY-MM-DDTHH:MM'
  }, {
    label: 'Month',
    keyfilter: 'month',
    placeholder: 'YYYY-MM'
  }, {
    label: 'Week',
    keyfilter: 'week',
    placeholder: 'YYYY-Www'
  }, {
    label: 'Custom RegExp',
    keyfilter: '/^[A-Z]*$/',
    placeholder: 'A–Z only'
  }];
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    {{#each keyfilters as |item|}}
      <UlxInput
        @label={{item.label}}
        @size="s-size"
        @fieldClass="col-4"
        @keyfilter={{item.keyfilter}}
        placeholder={{item.placeholder}}
        aria-label={{item.label}}
      />
    {{/each}}
  </div>
  */
  {
    "id": "JVBJjmbG",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[32,0]],null]],null],null,[[[1,\"    \"],[8,[32,1],[[16,\"placeholder\",[30,1,[\"placeholder\"]]],[16,\"aria-label\",[30,1,[\"label\"]]]],[[\"@label\",\"@size\",\"@fieldClass\",\"@keyfilter\"],[[30,1,[\"label\"]],\"s-size\",\"col-4\",[30,1,[\"keyfilter\"]]]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Keyfilter.js",
    "scope": () => [keyfilters, _ulxComponents.UlxInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Keyfilter"));
});
;define("ulx-ember/components/Demo/Input/Sizes", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const sizes = [{
    label: 's-size',
    size: 's-size'
  }, {
    label: 'm-size',
    size: 'm-size'
  }, {
    label: 'l-size',
    size: 'l-size'
  }, {
    label: 'xl-size',
    size: 'xl-size'
  }];
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    {{#each sizes as |item|}}
      <UlxInput
        @label={{item.label}}
        @size={{item.size}}
        @fieldClass="col-12"
        @keyfilter={{item.keyfilter}}
        placeholder={{item.placeholder}}
        aria-label={{item.label}}
      />
    {{/each}}
  </div>
  */
  {
    "id": "eP6F/CHN",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[32,0]],null]],null],null,[[[1,\"    \"],[8,[32,1],[[16,\"placeholder\",[30,1,[\"placeholder\"]]],[16,\"aria-label\",[30,1,[\"label\"]]]],[[\"@label\",\"@size\",\"@fieldClass\",\"@keyfilter\"],[[30,1,[\"label\"]],[30,1,[\"size\"]],\"col-12\",[30,1,[\"keyfilter\"]]]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Sizes.js",
    "scope": () => [sizes, _ulxComponents.UlxInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Sizes"));
});
;define("ulx-ember/components/Demo/InputGroup/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Website"
      aria-label="Website"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="ls-tick-icon"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
      </:start>
  
      <:end>
        <span class="ulx-inputgroup-addon">.com</span>
      </:end>
    </UlxInput>
  
  </div>
  */
  {
    "id": "bJc7J46w",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Website\"],[24,\"aria-label\",\"Website\"]],[[\"@inputGroup\",\"@size\",\"@fieldClass\"],[true,\"s-size\",\"col-12\"]],[[\"start\",\"end\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\"\\n        \"],[8,[32,1],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"ls-tick-icon\",\"s18\",\"tick icon\"]],null],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\".com\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/InputGroup/Basic.js",
    "scope": () => [_ulxComponents.UlxInput, _ulxComponents.UlxIcon],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/InputGroup/Multiple", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      @fieldClass="col-12"
      placeholder="Website"
      aria-label="Website"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="user-info-icon-01"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="user-info-icon"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
      </:start>
      <:end>
        <span class="ulx-inputgroup-addon">.com</span>
      </:end>
    </UlxInput>
  </div>
  */
  {
    "id": "0LkDHbig",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Website\"],[24,\"aria-label\",\"Website\"]],[[\"@inputGroup\",\"@size\",\"@fieldClass\"],[true,\"s-size\",\"col-12\"]],[[\"start\",\"end\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\"\\n        \"],[8,[32,1],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"user-info-icon-01\",\"s18\",\"tick icon\"]],null],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\"\\n        \"],[8,[32,1],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"user-info-icon\",\"s18\",\"tick icon\"]],null],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\".com\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/InputGroup/Multiple.js",
    "scope": () => [_ulxComponents.UlxInput, _ulxComponents.UlxIcon],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Multiple"));
});
;define("ulx-ember/components/Demo/ProgressBar/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxProgressBar @value={{50}} @size="m" />
  </div>
  */
  {
    "id": "GHnbxEqU",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@value\",\"@size\"],[50,\"m\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/ProgressBar/Basic.js",
    "scope": () => [_ulxComponents.UlxProgressBar],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/ProgressBar/Dynamic", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/render-modifiers/modifiers/did-insert", "@ember/render-modifiers/modifiers/will-destroy", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _didInsert, _willDestroy, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _DynamicProgressBarDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/render-modifiers/modifiers/did-insert",0,"@ember/render-modifiers/modifiers/will-destroy",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const INTERVAL_MS = 2000;
  let DynamicProgressBarDemo = _exports.default = (_class = (_DynamicProgressBarDemo = class DynamicProgressBarDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "didInsert", _didInsert.default);
      _defineProperty(this, "willDestroy", _willDestroy.default);
      _initializerDefineProperty(this, "value", _descriptor, this);
      _initializerDefineProperty(this, "messages", _descriptor2, this);
      _defineProperty(this, "_interval", null);
    }
    startInterval() {
      this._interval = setInterval(() => this.tick(), INTERVAL_MS);
    }
    clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    tick() {
      this.value += Math.floor(Math.random() * 20) + 1;
      if (this.value >= 100) {
        this.value = 100;
        this.messages = [...this.messages, {
          id: `msg-${Date.now()}`,
          severity: 'info',
          summary: 'Success',
          detail: 'Process Completed'
        }];
        this.clearInterval();
      }
    }
    removeMessage(message) {
      this.messages = this.messages.filter(m => m.id !== message.id);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div
    class="pda4 fxb column gp8"
    {{this.didInsert this.startInterval}}
    {{this.willDestroy this.clearInterval}}
  >
    <UlxProgressBar @value={{this.value}} @size="m" />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </div>
  */
  {
    "id": "IEtstGva",
    "block": "[[[11,0],[24,0,\"pda4 fxb column gp8\"],[4,[30,0,[\"didInsert\"]],[[30,0,[\"startInterval\"]]],null],[4,[30,0,[\"willDestroy\"]],[[30,0,[\"clearInterval\"]]],null],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@value\",\"@size\"],[[30,0,[\"value\"]],\"m\"]],null],[1,\"\\n  \"],[8,[32,1],null,[[\"@messages\",\"@onClose\"],[[30,0,[\"messages\"]],[30,0,[\"removeMessage\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/ProgressBar/Dynamic.js",
    "scope": () => [_ulxComponents.UlxProgressBar, _ulxComponents.UlxToast],
    "isStrictMode": true
  }), _DynamicProgressBarDemo), _DynamicProgressBarDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "messages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "startInterval", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "startInterval"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearInterval", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearInterval"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/ProgressBar/Indeterminate", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxProgressBar @mode="indeterminate" @size="m" aria-label="Loading" />
  </div>
  */
  {
    "id": "Bfp+IUP5",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"Loading\"]],[[\"@mode\",\"@size\"],[\"indeterminate\",\"m\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/ProgressBar/Indeterminate.js",
    "scope": () => [_ulxComponents.UlxProgressBar],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Indeterminate"));
});
;define("ulx-ember/components/Demo/ProgressBar/Template", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxProgressBar @value={{40}} @size="m">
      <:content as |value|>
        {{value}}/<b>100</b>
      </:content>
    </UlxProgressBar>
  </div>
  */
  {
    "id": "NUKg2Z31",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@value\",\"@size\"],[40,\"m\"]],[[\"content\"],[[[[1,\"\\n      \"],[1,[30,1]],[1,\"/\"],[10,\"b\"],[12],[1,\"100\"],[13],[1,\"\\n    \"]],[1]]]]],[1,\"\\n\"],[13]],[\"value\"],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/ProgressBar/Template.js",
    "scope": () => [_ulxComponents.UlxProgressBar],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Template"));
});
;define("ulx-ember/components/Demo/ProgressSpinner/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <UlxProgressSpinner @size="xl" @ariaLabel="Loading" />
  */
  {
    "id": "MSgOxBpu",
    "block": "[[[8,[32,0],null,[[\"@size\",\"@ariaLabel\"],[\"xl\",\"Loading\"]],null]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/ProgressSpinner/Basic.js",
    "scope": () => [_ulxComponents.UlxProgressSpinner],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/ProgressSpinner/Custom", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DemoProgressSpinnerCustom;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DemoProgressSpinnerCustom extends _component.default {
    get size() {
      return this.args.size ?? 'm';
    }
    get customClass() {
      return this.args.customClass;
    }
  }
  _exports.default = DemoProgressSpinnerCustom;
  _DemoProgressSpinnerCustom = DemoProgressSpinnerCustom;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <UlxProgressSpinner
    @size={{this.size}}
    @customClass={{this.customClass}}
    @ariaLabel="Loading"
  />
  */
  {
    "id": "9JvghU47",
    "block": "[[[8,[32,0],null,[[\"@size\",\"@customClass\",\"@ariaLabel\"],[[30,0,[\"size\"]],[30,0,[\"customClass\"]],\"Loading\"]],null]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/ProgressSpinner/Custom.js",
    "scope": () => [_ulxComponents.UlxProgressSpinner],
    "isStrictMode": true
  }), _DemoProgressSpinnerCustom);
});
;define("ulx-ember/components/Demo/ProgressSpinner/Sizes", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc gp4">
    <UlxProgressSpinner @size="xs" aria-hidden="true" />
    <UlxProgressSpinner @size="s" aria-hidden="true" />
    <UlxProgressSpinner @size="m" @ariaLabel="Loading" />
    <UlxProgressSpinner @size="l" aria-hidden="true" />
    <UlxProgressSpinner @size="xl" aria-hidden="true" />
  </div>
  */
  {
    "id": "bt39h+81",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-hidden\",\"true\"]],[[\"@size\"],[\"xs\"]],null],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-hidden\",\"true\"]],[[\"@size\"],[\"s\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@size\",\"@ariaLabel\"],[\"m\",\"Loading\"]],null],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-hidden\",\"true\"]],[[\"@size\"],[\"l\"]],null],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-hidden\",\"true\"]],[[\"@size\"],[\"xl\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/ProgressSpinner/Sizes.js",
    "scope": () => [_ulxComponents.UlxProgressSpinner],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Sizes"));
});
;define("ulx-ember/components/Demo/TestComp/Basic", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BasicTestCompDemo = _exports.default = (_class = class BasicTestCompDemo extends _component.default {
    constructor() {
      super(...arguments);
      // Initialize with first item active
      _initializerDefineProperty(this, "activeItem", _descriptor, this);
      if (this.items && this.items.length > 0) {
        this.activeItem = this.items[0];
      }
    }
    get items() {
      return [{
        label: 'Item 1',
        value: 'item1'
      }, {
        label: 'Item 2',
        value: 'item2'
      }, {
        label: 'Item 3',
        value: 'item3'
      }];
    }
    handleItemClick(item) {
      this.activeItem = item;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeItem", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemClick"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Tieredmenu/Basic", ["exports", "@glimmer/component", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _BasicTieredmenuDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  let BasicTieredmenuDemo = _exports.default = (_class = (_BasicTieredmenuDemo = class BasicTieredmenuDemo extends _component.default {
    get items() {
      return [{
        label: 'File',
        icon: 'pi pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-plus',
          items: [{
            label: 'Project',
            icon: 'pi pi-folder'
          }, {
            label: 'File',
            icon: 'pi pi-file'
          }, {
            separator: true
          }, {
            label: 'From Template',
            icon: 'pi pi-copy',
            items: [{
              label: 'React Template',
              icon: 'pi pi-code'
            }, {
              label: 'Ember Template',
              icon: 'pi pi-code'
            }, {
              label: 'Vue Template',
              icon: 'pi pi-code'
            }]
          }]
        }, {
          label: 'Open',
          icon: 'pi pi-folder-open'
        }, {
          separator: true
        }, {
          label: 'Export',
          icon: 'pi pi-upload',
          items: [{
            label: 'PDF',
            icon: 'pi pi-file-pdf'
          }, {
            label: 'Excel',
            icon: 'pi pi-file-excel'
          }, {
            label: 'CSV',
            icon: 'pi pi-file'
          }]
        }, {
          separator: true
        }, {
          label: 'Exit',
          icon: 'pi pi-times'
        }]
      }, {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [{
          label: 'Undo',
          icon: 'pi pi-undo'
        }, {
          label: 'Redo',
          icon: 'pi pi-refresh'
        }, {
          separator: true
        }, {
          label: 'Find',
          icon: 'pi pi-search',
          items: [{
            label: 'Find...',
            icon: 'pi pi-search'
          }, {
            label: 'Find and Replace',
            icon: 'pi pi-sync'
          }, {
            label: 'Find in Files',
            icon: 'pi pi-folder'
          }]
        }]
      }, {
        label: 'View',
        icon: 'pi pi-eye',
        items: [{
          label: 'Zoom In',
          icon: 'pi pi-search-plus'
        }, {
          label: 'Zoom Out',
          icon: 'pi pi-search-minus'
        }]
      }, {
        separator: true
      }, {
        label: 'Help',
        icon: 'pi pi-question-circle'
      }];
    }
    handleItemSelect(item) {
      console.log('Selected:', item.label);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxTieredmenu
      @model={{this.items}}
      @onItemSelect={{this.handleItemSelect}}
    />
  </div>
  */
  {
    "id": "j2LvCg8Y",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@model\",\"@onItemSelect\"],[[30,0,[\"items\"]],[30,0,[\"handleItemSelect\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tieredmenu/Basic.js",
    "scope": () => [_ulxComponents.UlxTieredmenu],
    "isStrictMode": true
  }), _BasicTieredmenuDemo), _BasicTieredmenuDemo), _applyDecoratedDescriptor(_class.prototype, "handleItemSelect", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemSelect"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Tieredmenu/Popup", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ember-modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _emberModifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _PopupTieredmenuDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ember-modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let PopupTieredmenuDemo = _exports.default = (_class = (_PopupTieredmenuDemo = class PopupTieredmenuDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "isMenuVisible", _descriptor, this);
      /** Close menu when click is outside the wrapper (PrimeReact-style). */
      _defineProperty(this, "closeOnClickOutside", (0, _emberModifier.modifier)((element, [when], {
        onClose
      }) => {
        let listener = null;
        if (when && typeof onClose === 'function') {
          const handler = e => {
            if (!element.contains(e.target)) {
              onClose();
            }
          };
          const add = () => {
            listener = handler;
            document.addEventListener('click', listener, true);
          };
          setTimeout(add, 0);
        }
        return () => {
          if (listener) {
            document.removeEventListener('click', listener, true);
          }
        };
      }));
    }
    get items() {
      return [{
        label: 'File',
        icon: 'pi pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-plus',
          items: [{
            label: 'Project',
            icon: 'pi pi-folder'
          }, {
            label: 'File',
            icon: 'pi pi-file'
          }, {
            label: 'From Template',
            icon: 'pi pi-copy'
          }]
        }, {
          label: 'Open',
          icon: 'pi pi-folder-open'
        }, {
          separator: true
        }, {
          label: 'Exit',
          icon: 'pi pi-times'
        }]
      }, {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [{
          label: 'Undo',
          icon: 'pi pi-undo'
        }, {
          label: 'Redo',
          icon: 'pi pi-refresh'
        }]
      }, {
        label: 'Help',
        icon: 'pi pi-question-circle',
        command: () => console.log('Help clicked')
      }];
    }
    toggleMenu(event) {
      event.stopPropagation();
      this.isMenuVisible = !this.isMenuVisible;
    }
    hideMenu() {
      this.isMenuVisible = false;
    }
    handleItemSelect(item) {
      console.log('Selected:', item.label);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div
    class="pda4 pos-rel"
    {{this.closeOnClickOutside this.isMenuVisible onClose=this.hideMenu}}
  >
    <UlxButton
      @label="Show"
      @severity="primary"
      {{on "click" this.toggleMenu}}
      aria-haspopup="menu"
      aria-expanded={{this.isMenuVisible}}
    />
  
    <div class="pos-abs t-100 l-0 z-1000 mgt4">
      <UlxTieredmenu
        @model={{this.items}}
        @popup={{true}}
        @visible={{this.isMenuVisible}}
        @onHide={{this.hideMenu}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </div>
  */
  {
    "id": "qxqRUdSv",
    "block": "[[[11,0],[24,0,\"pda4 pos-rel\"],[4,[30,0,[\"closeOnClickOutside\"]],[[30,0,[\"isMenuVisible\"]]],[[\"onClose\"],[[30,0,[\"hideMenu\"]]]]],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-haspopup\",\"menu\"],[16,\"aria-expanded\",[30,0,[\"isMenuVisible\"]]],[4,[32,1],[\"click\",[30,0,[\"toggleMenu\"]]],null]],[[\"@label\",\"@severity\"],[\"Show\",\"primary\"]],null],[1,\"\\n\\n  \"],[10,0],[14,0,\"pos-abs t-100 l-0 z-1000 mgt4\"],[12],[1,\"\\n    \"],[8,[32,2],null,[[\"@model\",\"@popup\",\"@visible\",\"@onHide\",\"@onItemSelect\"],[[30,0,[\"items\"]],true,[30,0,[\"isMenuVisible\"]],[30,0,[\"hideMenu\"]],[30,0,[\"handleItemSelect\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tieredmenu/Popup.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on, _ulxComponents.UlxTieredmenu],
    "isStrictMode": true
  }), _PopupTieredmenuDemo), _PopupTieredmenuDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "isMenuVisible", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleMenu", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleMenu"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideMenu", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "hideMenu"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleItemSelect", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemSelect"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Tieredmenu/Template", ["exports", "@glimmer/component", "@ember/object", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _object, _modifier, _ulxComponents, _component2, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _TemplateTieredmenuDemo; // Custom item renderer using tieredmenu-item-link for proper styling
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  const ItemRenderer = (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <button
    type="button"
    class="tieredmenu-item-link"
    role="menuitem"
    {{on "click" @onClick}}
  >
    {{#if @item.icon}}
      <span
        class="tieredmenu-item-icon {{@item.icon}}"
        aria-hidden="true"
      ></span>
    {{/if}}
    <span class="tieredmenu-item-label">{{@item.label}}</span>
    {{#if @item.badge}}
      <span class="uls-badge info mgl-auto">{{@item.badge}}</span>
    {{/if}}
    {{#if @item.shortcut}}
      <span
        class="mgl-auto bd pdh2 pdv1 font-size12 bg-layer1 rds2 fg-text-secondary"
      >{{@item.shortcut}}</span>
    {{/if}}
  </button>
  */
  {
    "id": "wGRZVx14",
    "block": "[[[11,\"button\"],[24,0,\"tieredmenu-item-link\"],[24,\"role\",\"menuitem\"],[24,4,\"button\"],[4,[32,0],[\"click\",[30,1]],null],[12],[1,\"\\n\"],[41,[30,2,[\"icon\"]],[[[1,\"    \"],[10,1],[15,0,[29,[\"tieredmenu-item-icon \",[30,2,[\"icon\"]]]]],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,1],[14,0,\"tieredmenu-item-label\"],[12],[1,[30,2,[\"label\"]]],[13],[1,\"\\n\"],[41,[30,2,[\"badge\"]],[[[1,\"    \"],[10,1],[14,0,\"uls-badge info mgl-auto\"],[12],[1,[30,2,[\"badge\"]]],[13],[1,\"\\n\"]],[]],null],[41,[30,2,[\"shortcut\"]],[[[1,\"    \"],[10,1],[14,0,\"mgl-auto bd pdh2 pdv1 font-size12 bg-layer1 rds2 fg-text-secondary\"],[12],[1,[30,2,[\"shortcut\"]]],[13],[1,\"\\n\"]],[]],null],[13]],[\"@onClick\",\"@item\"],[\"if\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tieredmenu/Template.js",
    "scope": () => [_modifier.on],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Template:ItemRenderer"));
  let TemplateTieredmenuDemo = _exports.default = (_class = (_TemplateTieredmenuDemo = class TemplateTieredmenuDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "itemRenderer", ItemRenderer);
    }
    get items() {
      return [{
        label: 'File',
        icon: 'pi pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-plus',
          items: [{
            label: 'Document',
            icon: 'pi pi-file',
            shortcut: '⌘+N',
            template: this.itemRenderer
          }, {
            label: 'Image',
            icon: 'pi pi-image',
            shortcut: '⌘+I',
            template: this.itemRenderer
          }, {
            label: 'Video',
            icon: 'pi pi-video',
            shortcut: '⌘+L',
            template: this.itemRenderer
          }]
        }, {
          label: 'Open',
          icon: 'pi pi-folder-open',
          shortcut: '⌘+O',
          template: this.itemRenderer
        }, {
          label: 'Print',
          icon: 'pi pi-print',
          shortcut: '⌘+P',
          template: this.itemRenderer
        }]
      }, {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [{
          label: 'Copy',
          icon: 'pi pi-copy',
          shortcut: '⌘+C',
          template: this.itemRenderer
        }, {
          label: 'Delete',
          icon: 'pi pi-times',
          shortcut: '⌘+D',
          template: this.itemRenderer
        }]
      }, {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S',
        template: this.itemRenderer
      }, {
        separator: true
      }, {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [{
          label: 'Slack',
          icon: 'pi pi-slack',
          badge: 2,
          template: this.itemRenderer
        }, {
          label: 'Whatsapp',
          icon: 'pi pi-whatsapp',
          badge: 3,
          template: this.itemRenderer
        }]
      }];
    }
    handleItemSelect(item) {
      console.log('Selected:', item.label);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxTieredmenu
      @model={{this.items}}
      @onItemSelect={{this.handleItemSelect}}
    />
  </div>
  */
  {
    "id": "ZygWWjIl",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@model\",\"@onItemSelect\"],[[30,0,[\"items\"]],[30,0,[\"handleItemSelect\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tieredmenu/Template.js",
    "scope": () => [_ulxComponents.UlxTieredmenu],
    "isStrictMode": true
  }), _TemplateTieredmenuDemo), _TemplateTieredmenuDemo), _applyDecoratedDescriptor(_class.prototype, "handleItemSelect", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemSelect"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Toast/Basic", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _BasicToastDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BasicToastDemo = _exports.default = (_class = (_BasicToastDemo = class BasicToastDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "messages", _descriptor, this);
    }
    showToast() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}`,
        severity: 'info',
        summary: 'Info',
        detail: 'This is a basic toast message.'
      }];
    }
    removeMessage(message) {
      this.messages = this.messages.filter(m => m.id !== message.id);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxButton @label="Show toast" @severity="primary" {{on "click" this.showToast}} />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </div>
  */
  {
    "id": "4OqNoMOn",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showToast\"]]],null]],[[\"@label\",\"@severity\"],[\"Show toast\",\"primary\"]],null],[1,\"\\n  \"],[8,[32,2],null,[[\"@messages\",\"@onClose\"],[[30,0,[\"messages\"]],[30,0,[\"removeMessage\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Toast/Basic.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on, _ulxComponents.UlxToast],
    "isStrictMode": true
  }), _BasicToastDemo), _BasicToastDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "messages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showToast", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showToast"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Toast/Multiple", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _MultipleToastDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let MultipleToastDemo = _exports.default = (_class = (_MultipleToastDemo = class MultipleToastDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "messages", _descriptor, this);
    }
    showMultiple() {
      const now = Date.now();
      const newMessages = [{
        id: `msg-${now}-1`,
        severity: 'info',
        summary: 'Info',
        detail: 'Info message.'
      }, {
        id: `msg-${now}-2`,
        severity: 'success',
        summary: 'Success',
        detail: 'Success message.'
      }, {
        id: `msg-${now}-3`,
        severity: 'warn',
        summary: 'Warn',
        detail: 'Warn message.'
      }, {
        id: `msg-${now}-4`,
        severity: 'error',
        summary: 'Error',
        detail: 'Error message.'
      }];
      this.messages = [...this.messages, ...newMessages];
    }
    removeMessage(message) {
      this.messages = this.messages.filter(m => m.id !== message.id);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxButton
      @label="Multiple"
      @severity="warning"
      {{on "click" this.showMultiple}}
    />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </div>
  */
  {
    "id": "Sq1rS4/f",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showMultiple\"]]],null]],[[\"@label\",\"@severity\"],[\"Multiple\",\"warning\"]],null],[1,\"\\n  \"],[8,[32,2],null,[[\"@messages\",\"@onClose\"],[[30,0,[\"messages\"]],[30,0,[\"removeMessage\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Toast/Multiple.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on, _ulxComponents.UlxToast],
    "isStrictMode": true
  }), _MultipleToastDemo), _MultipleToastDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "messages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showMultiple", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showMultiple"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Toast/Positions", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/helper", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _helper, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _PositionsToastDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/helper",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const POSITIONS = ['top-left', 'top-center', 'top-right', 'center', 'bottom-left', 'bottom-center', 'bottom-right'];
  let PositionsToastDemo = _exports.default = (_class = (_PositionsToastDemo = class PositionsToastDemo extends _component.default {
    constructor(...args) {
      super(...args);
      /** Messages per position: { 'top-left': [...], 'top-right': [...], ... } */
      _initializerDefineProperty(this, "messagesByPosition", _descriptor, this);
    }
    /** Array of { position, messages } for template; use getter so @messages is tracked. */get positionEntries() {
      const byPos = this.messagesByPosition;
      return POSITIONS.map(pos => ({
        position: pos,
        messages: byPos[pos] ?? []
      }));
    }
    showToast(pos) {
      const messages = this.messagesByPosition[pos] ?? [];
      const newMessage = {
        id: `msg-${Date.now()}-${pos}`,
        severity: 'info',
        summary: 'Position',
        detail: `Toast at ${pos}.`
      };
      this.messagesByPosition = {
        ...this.messagesByPosition,
        [pos]: [...messages, newMessage]
      };
    }
    removeMessage(position, message) {
      const messages = (this.messagesByPosition[position] ?? []).filter(m => m.id !== message.id);
      this.messagesByPosition = {
        ...this.messagesByPosition,
        [position]: messages
      };
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <div class="fx gap8 flxw">
      {{#each POSITIONS as |pos|}}
        <UlxButton
          @label={{pos}}
          @severity="secondary"
          {{on "click" (fn this.showToast pos)}}
        />
      {{/each}}
    </div>
    {{#each this.positionEntries key="position" as |entry|}}
      <UlxToast
        @messages={{entry.messages}}
        @position={{entry.position}}
        @onClose={{fn this.removeMessage entry.position}}
      />
    {{/each}}
  </div>
  */
  {
    "id": "OpVsVqKv",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"fx gap8 flxw\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[32,0]],null]],null],null,[[[1,\"      \"],[8,[32,1],[[4,[32,2],[\"click\",[28,[32,3],[[30,0,[\"showToast\"]],[30,1]],null]],null]],[[\"@label\",\"@severity\"],[[30,1],\"secondary\"]],null],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"positionEntries\"]]],null]],null],\"position\",[[[1,\"    \"],[8,[32,4],null,[[\"@messages\",\"@position\",\"@onClose\"],[[30,2,[\"messages\"]],[30,2,[\"position\"]],[28,[32,3],[[30,0,[\"removeMessage\"]],[30,2,[\"position\"]]],null]]],null],[1,\"\\n\"]],[2]],null],[13]],[\"pos\",\"entry\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Toast/Positions.js",
    "scope": () => [POSITIONS, _ulxComponents.UlxButton, _modifier.on, _helper.fn, _ulxComponents.UlxToast],
    "isStrictMode": true
  }), _PositionsToastDemo), _PositionsToastDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "messagesByPosition", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {};
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showToast", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showToast"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Toast/Severities", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/helper", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _helper, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _SeveritiesToastDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/helper",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let SeveritiesToastDemo = _exports.default = (_class = (_SeveritiesToastDemo = class SeveritiesToastDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "messages", _descriptor, this);
    }
    addMessage(severity) {
      const labels = {
        info: 'Info',
        success: 'Success',
        warn: 'Warning',
        error: 'Error',
        secondary: 'Secondary',
        contrast: 'Contrast'
      };
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-${severity}`,
        severity,
        summary: labels[severity] ?? severity,
        detail: `${labels[severity] ?? severity} message.`
      }];
    }
    removeMessage(message) {
      this.messages = this.messages.filter(m => m.id !== message.id);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <div class="fx gap8 flxw">
      <UlxButton @label="Info" @severity="info" {{on "click" (fn this.addMessage "info")}} />
      <UlxButton @label="Success" @severity="success" {{on "click" (fn this.addMessage "success")}} />
      <UlxButton @label="Warn" @severity="warning" {{on "click" (fn this.addMessage "warn")}} />
      <UlxButton @label="Error" @severity="danger" {{on "click" (fn this.addMessage "error")}} />
      <UlxButton @label="Secondary" @severity="secondary" {{on "click" (fn this.addMessage "secondary")}} />
      <UlxButton @label="Contrast" {{on "click" (fn this.addMessage "contrast")}} />
    </div>
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </div>
  */
  {
    "id": "ClCd+BET",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"fx gap8 flxw\"],[12],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[28,[32,2],[[30,0,[\"addMessage\"]],\"info\"],null]],null]],[[\"@label\",\"@severity\"],[\"Info\",\"info\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[28,[32,2],[[30,0,[\"addMessage\"]],\"success\"],null]],null]],[[\"@label\",\"@severity\"],[\"Success\",\"success\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[28,[32,2],[[30,0,[\"addMessage\"]],\"warn\"],null]],null]],[[\"@label\",\"@severity\"],[\"Warn\",\"warning\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[28,[32,2],[[30,0,[\"addMessage\"]],\"error\"],null]],null]],[[\"@label\",\"@severity\"],[\"Error\",\"danger\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[28,[32,2],[[30,0,[\"addMessage\"]],\"secondary\"],null]],null]],[[\"@label\",\"@severity\"],[\"Secondary\",\"secondary\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[28,[32,2],[[30,0,[\"addMessage\"]],\"contrast\"],null]],null]],[[\"@label\"],[\"Contrast\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[32,3],null,[[\"@messages\",\"@onClose\"],[[30,0,[\"messages\"]],[30,0,[\"removeMessage\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Toast/Severities.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on, _helper.fn, _ulxComponents.UlxToast],
    "isStrictMode": true
  }), _SeveritiesToastDemo), _SeveritiesToastDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "messages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addMessage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Toast/Sticky", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _StickyToastDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let StickyToastDemo = _exports.default = (_class = (_StickyToastDemo = class StickyToastDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "messages", _descriptor, this);
    }
    showSticky() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-sticky`,
        severity: 'info',
        summary: 'Sticky',
        detail: 'This message stays visible until you close it.',
        sticky: true
      }];
    }
    showWithLife() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-life`,
        severity: 'info',
        summary: 'Auto-close',
        detail: 'This message disappears after 3000ms.'
      }];
    }
    clearAll() {
      this.messages = [];
    }
    removeMessage(message) {
      this.messages = this.messages.filter(m => m.id !== message.id);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <div class="fx gap8 flxw">
      <UlxButton
        @label="Sticky"
        @severity="secondary"
        {{on "click" this.showSticky}}
      />
      <UlxButton
        @label="Auto-close (3s)"
        @severity="secondary"
        {{on "click" this.showWithLife}}
      />
      <UlxButton
        @label="Clear"
        @severity="secondary"
        {{on "click" this.clearAll}}
      />
    </div>
    <UlxToast
      @messages={{this.messages}}
      @life={{3000}}
      @onClose={{this.removeMessage}}
    />
  </div>
  */
  {
    "id": "RvzwEjke",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"fx gap8 flxw\"],[12],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showSticky\"]]],null]],[[\"@label\",\"@severity\"],[\"Sticky\",\"secondary\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showWithLife\"]]],null]],[[\"@label\",\"@severity\"],[\"Auto-close (3s)\",\"secondary\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"clearAll\"]]],null]],[[\"@label\",\"@severity\"],[\"Clear\",\"secondary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[32,2],null,[[\"@messages\",\"@life\",\"@onClose\"],[[30,0,[\"messages\"]],3000,[30,0,[\"removeMessage\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Toast/Sticky.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on, _ulxComponents.UlxToast],
    "isStrictMode": true
  }), _StickyToastDemo), _StickyToastDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "messages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showSticky", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showSticky"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showWithLife", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showWithLife"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearAll", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearAll"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Toast/Template", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/helper", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _helper, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _TemplateToastDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/helper",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let TemplateToastDemo = _exports.default = (_class = (_TemplateToastDemo = class TemplateToastDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "messages", _descriptor, this);
    }
    showTemplateToast() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-template`,
        severity: 'success',
        summary: 'Can you send me the report?',
        sticky: true
      }];
    }
    removeMessage(message) {
      this.messages = this.messages.filter(m => m.id !== message.id);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <UlxButton
      @label="Confirm"
      @severity="primary"
      {{on "click" this.showTemplateToast}}
    />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}}>
      <:content as |message|>
        <div class="fxb column gp4">
          <span class="fw-semibold">Amy Elsner</span>
          <div class="fw-medium">{{message.summary}}</div>
          <UlxButton
            @label="Reply"
            @severity="success"
            @size="small"
            {{on "click" (fn this.removeMessage message)}}
          />
        </div>
      </:content>
    </UlxToast>
  </div>
  */
  {
    "id": "Cc8NTzXp",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showTemplateToast\"]]],null]],[[\"@label\",\"@severity\"],[\"Confirm\",\"primary\"]],null],[1,\"\\n  \"],[8,[32,2],null,[[\"@messages\",\"@onClose\"],[[30,0,[\"messages\"]],[30,0,[\"removeMessage\"]]]],[[\"content\"],[[[[1,\"\\n      \"],[10,0],[14,0,\"fxb column gp4\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"fw-semibold\"],[12],[1,\"Amy Elsner\"],[13],[1,\"\\n        \"],[10,0],[14,0,\"fw-medium\"],[12],[1,[30,1,[\"summary\"]]],[13],[1,\"\\n        \"],[8,[32,0],[[4,[32,1],[\"click\",[28,[32,3],[[30,0,[\"removeMessage\"]],[30,1]],null]],null]],[[\"@label\",\"@severity\",\"@size\"],[\"Reply\",\"success\",\"small\"]],null],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[1]]]]],[1,\"\\n\"],[13]],[\"message\"],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Toast/Template.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on, _ulxComponents.UlxToast, _helper.fn],
    "isStrictMode": true
  }), _TemplateToastDemo), _TemplateToastDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "messages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showTemplateToast", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showTemplateToast"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Toast/Variants", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _VariantsToastDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let VariantsToastDemo = _exports.default = (_class = (_VariantsToastDemo = class VariantsToastDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "messages", _descriptor, this);
    }
    showElevated() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-elevated`,
        severity: 'info',
        summary: 'Elevated',
        detail: 'Variant: elevated',
        variant: 'elevated'
      }];
    }
    showFlat() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-flat`,
        severity: 'success',
        summary: 'Flat',
        detail: 'Variant: flat',
        variant: 'flat'
      }];
    }
    showOutlined() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-outlined`,
        severity: 'warn',
        summary: 'Outlined',
        detail: 'Variant: outlined',
        variant: 'outlined'
      }];
    }
    showNoIcon() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-noicon`,
        severity: 'info',
        summary: 'No icon',
        detail: 'showIcon: false',
        showIcon: false
      }];
    }
    showSticky() {
      this.messages = [...this.messages, {
        id: `msg-${Date.now()}-sticky`,
        severity: 'info',
        summary: 'Sticky',
        detail: 'Does not auto-close',
        sticky: true
      }];
    }
    removeMessage(message) {
      this.messages = this.messages.filter(m => m.id !== message.id);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="pda4">
    <div class="fx gap8 flxw">
      <UlxButton @label="Elevated" @severity="primary" {{on "click" this.showElevated}} />
      <UlxButton @label="Flat" @severity="success" {{on "click" this.showFlat}} />
      <UlxButton @label="Outlined" @severity="warning" {{on "click" this.showOutlined}} />
      <UlxButton @label="No icon" @severity="secondary" {{on "click" this.showNoIcon}} />
      <UlxButton @label="Sticky" {{on "click" this.showSticky}} />
    </div>
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </div>
  */
  {
    "id": "9vzQwQxY",
    "block": "[[[10,0],[14,0,\"pda4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"fx gap8 flxw\"],[12],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showElevated\"]]],null]],[[\"@label\",\"@severity\"],[\"Elevated\",\"primary\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showFlat\"]]],null]],[[\"@label\",\"@severity\"],[\"Flat\",\"success\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showOutlined\"]]],null]],[[\"@label\",\"@severity\"],[\"Outlined\",\"warning\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showNoIcon\"]]],null]],[[\"@label\",\"@severity\"],[\"No icon\",\"secondary\"]],null],[1,\"\\n    \"],[8,[32,0],[[4,[32,1],[\"click\",[30,0,[\"showSticky\"]]],null]],[[\"@label\"],[\"Sticky\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[32,2],null,[[\"@messages\",\"@onClose\"],[[30,0,[\"messages\"]],[30,0,[\"removeMessage\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Toast/Variants.js",
    "scope": () => [_ulxComponents.UlxButton, _modifier.on, _ulxComponents.UlxToast],
    "isStrictMode": true
  }), _VariantsToastDemo), _VariantsToastDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "messages", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "showElevated", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showElevated"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showFlat", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showFlat"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showOutlined", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showOutlined"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showNoIcon", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showNoIcon"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showSticky", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "showSticky"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeMessage"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/UlxIconInput/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxIconInput
      @iconName="search-icon"
      @iconType="font"
      @iconClass="bs-icons1"
      @iconPosition="left"
      @iconSize="s18"
      @fieldClass="col-4"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
  */
  {
    "id": "yo3wo03v",
    "block": "[[[10,0],[14,0,\"ulx-form m-size ulx-grid gp12 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Search\"],[24,\"aria-label\",\"Search\"]],[[\"@iconName\",\"@iconType\",\"@iconClass\",\"@iconPosition\",\"@iconSize\",\"@fieldClass\"],[\"search-icon\",\"font\",\"bs-icons1\",\"left\",\"s18\",\"col-4\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/UlxIconInput/Basic.js",
    "scope": () => [_ulxComponents.UlxIconInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/UlxIconInput/Namedblocks", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxIconInput
      @iconType="font"
      @iconPosition="left"
      @iconSize="s18"
      @fieldClass="col-4"
      placeholder="Search"
      aria-label="Search"
    >
      <:label><span class="bold-font">Calendar</span></:label>
      <:icon>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1621 9.63281C15.365 9.44555 15.6809 9.45824 15.8682 9.66113C16.0554 9.86404 16.0427 10.1799 15.8398 10.3672L9.33984 16.3672C9.24106 16.4583 9.10983 16.5058 8.97559 16.499C8.87512 16.4939 8.77935 16.459 8.7002 16.3994L8.62695 16.3311L7.45996 15.0127L7.40039 14.9297C7.28452 14.7282 7.32204 14.4667 7.50293 14.3066C7.68389 14.1466 7.94792 14.1415 8.13379 14.2812L8.20801 14.3496L9.03613 15.2861L15.1621 9.63281Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 2C17.2761 2 17.5 2.22386 17.5 2.5V4H18L18.2061 4.00488C20.3194 4.11211 22 5.85996 22 8V18L21.9951 18.2061C21.8913 20.2512 20.2512 21.8913 18.2061 21.9951L18 22H6L5.79395 21.9951C3.7488 21.8913 2.10865 20.2512 2.00488 18.2061L2 18V8C2 5.85996 3.68056 4.11211 5.79395 4.00488L6 4H6.5V2.5C6.5 2.22386 6.72386 2 7 2C7.27614 2 7.5 2.22386 7.5 2.5V4H16.5V2.5C16.5 2.22386 16.7239 2 17 2ZM6 5C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5H17.5V6.5C17.5 6.77614 17.2761 7 17 7C16.7239 7 16.5 6.77614 16.5 6.5V5H7.5V6.5C7.5 6.77614 7.27614 7 7 7C6.72386 7 6.5 6.77614 6.5 6.5V5H6Z"
            fill="black"
          />
        </svg>
  
      </:icon>
    </UlxIconInput>
  </div>
  */
  {
    "id": "w94MKayx",
    "block": "[[[10,0],[14,0,\"ulx-form m-size ulx-grid gp12 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Search\"],[24,\"aria-label\",\"Search\"]],[[\"@iconType\",\"@iconPosition\",\"@iconSize\",\"@fieldClass\"],[\"font\",\"left\",\"s18\",\"col-4\"]],[[\"label\",\"icon\"],[[[[10,1],[14,0,\"bold-font\"],[12],[1,\"Calendar\"],[13]],[]],[[[1,\"\\n      \"],[10,\"svg\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n        \"],[10,\"path\"],[14,\"d\",\"M15.1621 9.63281C15.365 9.44555 15.6809 9.45824 15.8682 9.66113C16.0554 9.86404 16.0427 10.1799 15.8398 10.3672L9.33984 16.3672C9.24106 16.4583 9.10983 16.5058 8.97559 16.499C8.87512 16.4939 8.77935 16.459 8.7002 16.3994L8.62695 16.3311L7.45996 15.0127L7.40039 14.9297C7.28452 14.7282 7.32204 14.4667 7.50293 14.3066C7.68389 14.1466 7.94792 14.1415 8.13379 14.2812L8.20801 14.3496L9.03613 15.2861L15.1621 9.63281Z\"],[14,\"fill\",\"black\"],[12],[13],[1,\"\\n        \"],[10,\"path\"],[14,\"fill-rule\",\"evenodd\"],[14,\"clip-rule\",\"evenodd\"],[14,\"d\",\"M17 2C17.2761 2 17.5 2.22386 17.5 2.5V4H18L18.2061 4.00488C20.3194 4.11211 22 5.85996 22 8V18L21.9951 18.2061C21.8913 20.2512 20.2512 21.8913 18.2061 21.9951L18 22H6L5.79395 21.9951C3.7488 21.8913 2.10865 20.2512 2.00488 18.2061L2 18V8C2 5.85996 3.68056 4.11211 5.79395 4.00488L6 4H6.5V2.5C6.5 2.22386 6.72386 2 7 2C7.27614 2 7.5 2.22386 7.5 2.5V4H16.5V2.5C16.5 2.22386 16.7239 2 17 2ZM6 5C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5H17.5V6.5C17.5 6.77614 17.2761 7 17 7C16.7239 7 16.5 6.77614 16.5 6.5V5H7.5V6.5C7.5 6.77614 7.27614 7 7 7C6.72386 7 6.5 6.77614 6.5 6.5V5H6Z\"],[14,\"fill\",\"black\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n    \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/UlxIconInput/Namedblocks.js",
    "scope": () => [_ulxComponents.UlxIconInput],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Namedblocks"));
});
;define("ulx-ember/components/code-block", ["exports", "ember-prism/components/code-block"], function (_exports, _codeBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _codeBlock.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-prism/components/code-block"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/code-inline", ["exports", "ember-prism/components/code-inline"], function (_exports, _codeInline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _codeInline.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-prism/components/code-inline"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/collections/ulx-button-group/index", ["exports", "ulx-components/components/collections/ulx-button-group/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/collections/ulx-button-group/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/common/doc-layout/doc-sidebar", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/modifier", "ember-modifier", "@ember/helper", "@ember/routing", "ulx-ember/constants/docs", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _service, _modifier, _emberModifier, _helper, _routing, _docs, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _DocSidebarComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/modifier",0,"ember-modifier",0,"@ember/helper",0,"@ember/routing",0,"ulx-ember/constants/docs",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let DocSidebarComponent = _exports.default = (_class = (_DocSidebarComponent = class DocSidebarComponent extends _component.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "router", _descriptor, this);
      _initializerDefineProperty(this, "activeItem", _descriptor2, this);
      _defineProperty(this, "contentRefs", {});
      _defineProperty(this, "isRouteActive", (routePath, currentPath) => {
        if (!routePath) return false;
        const path = currentPath || this.currentPath || '';
        if (!path) return false;
        // Normalize paths by removing query params, hash, and trailing slashes
        const normalizedPath = path.split('?')[0].split('#')[0].replace(/\/$/, '');
        const normalizedRoute = routePath.split('?')[0].split('#')[0].replace(/\/$/, '');
        // Exact match only - prevents sibling routes from matching each other
        // e.g., /foundation/typography should NOT match /foundation/colors
        return normalizedPath === normalizedRoute;
      });
      _defineProperty(this, "getToggleHandler", menuTitle => {
        return () => {
          this.toggleItem(menuTitle);
        };
      });
      _defineProperty(this, "setContentRef", (0, _emberModifier.modifier)((element, [menuTitle]) => {
        if (element) {
          this.contentRefs[menuTitle] = element;
        }
      }));
      _defineProperty(this, "getContentHeight", menuTitle => {
        // Access activeItem to make this reactive
        const isExpanded = this.activeItem === menuTitle;
        const element = this.contentRefs[menuTitle];
        if (isExpanded && element) {
          // Get actual scroll height for smooth accordion animation
          // Use a large fallback to ensure content is visible
          const height = element.scrollHeight;
          return height > 0 ? `${height}px` : '2000px';
        }
        return '0px';
      });
      _defineProperty(this, "getContentStyle", menuTitle => {
        // Access activeItem to make this reactive
        const isExpanded = this.activeItem === menuTitle;
        const height = this.getContentHeight(menuTitle);
        // Smooth accordion transition
        return `max-height: ${height}; overflow: hidden; transition: max-height 0.3s ease-in-out;`;
      });
      _defineProperty(this, "getAccordionStyle", item => {
        // Access activeItem to make this reactive
        const menuTitle = item.menuTitle;
        return this.getContentStyle(menuTitle);
      });
      _defineProperty(this, "isExpanded", item => {
        if (!item) return false;
        return this.activeItem === item.menuTitle;
      });
      _defineProperty(this, "hasChildren", item => {
        if (!item) return false;
        return item.children && item.children.length > 0;
      });
      _defineProperty(this, "isItemActive", (item, currentPath) => {
        if (!item || !item.to) return false;
        return this.isRouteActive(item.to, currentPath);
      });
      _defineProperty(this, "getFirstChildRoute", item => {
        if (!item || !item.children || item.children.length === 0) {
          return null;
        }
        // Check direct children first
        for (const child of item.children) {
          if (child.route) {
            return child.route;
          }
          // Check nested items (for categories)
          if (child.items && child.items.length > 0) {
            for (const subItem of child.items) {
              if (subItem.route) {
                return subItem.route;
              }
            }
          }
        }
        return null;
      });
      this.setInitialActiveItem();
    }
    get currentPath() {
      try {
        return this.router.currentURL || '';
      } catch (e) {
        return '';
      }
    }
    setInitialActiveItem() {
      const currentPath = this.currentPath || '';
      _docs.DocNavItems.forEach(item => {
        if (item.children) {
          const hasMatchingRoute = item.children.some(childItem => {
            if (childItem.items) {
              return childItem.items.some(subItem => this.isRouteActive(subItem.to, currentPath));
            }
            return this.isRouteActive(childItem.to, currentPath);
          });
          if (hasMatchingRoute) {
            this.activeItem = item.menuTitle;
          }
        }
      });
    }
    toggleItem(menuTitle) {
      // Simply toggle the expansion state - no navigation
      this.activeItem = this.activeItem === menuTitle ? null : menuTitle;
    }
    handleToggle(event, menuTitle) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleItem(menuTitle);
    }
    handleToggleClick(menuTitle) {
      this.toggleItem(menuTitle);
    }
    navigateToRoute(route, event) {
      if (event) {
        event.preventDefault();
      }
      if (route) {
        this.router.transitionTo(route).then(() => {
          // Update active item after navigation
          this.setInitialActiveItem();
        });
      }
    }
    get navItems() {
      return _docs.DocNavItems;
    }
    // This getter will be called whenever the template renders, ensuring activeItem updates
    get computedActiveItem() {
      const currentPath = this.currentPath || '';
      for (const item of _docs.DocNavItems) {
        if (item.children) {
          const hasMatchingRoute = item.children.some(childItem => {
            if (childItem.items) {
              return childItem.items.some(subItem => this.isRouteActive(subItem.to, currentPath));
            }
            return this.isRouteActive(childItem.to, currentPath);
          });
          if (hasMatchingRoute) {
            if (this.activeItem !== item.menuTitle) {
              this.activeItem = item.menuTitle;
            }
            return item.menuTitle;
          }
        }
      }
      return this.activeItem;
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    {{! Force evaluation of computedActiveItem to update activeItem }}
  {{#if false}}{{this.computedActiveItem}}{{/if}}
  <aside class="ulsp-sidebar overflow-x-hidden overflow-y-auto mgb8 mgr10">
    <nav class="sidebar-nav fxgrow">
      <ol class="s-nav-list mgt2">
        {{#each this.navItems as |item|}}
          <li class="s-nav-item mgb4">
            {{#if item.to}}
              {{#if (this.hasChildren item)}}
                {{! Parent with children - dropdown button only (not LinkTo) }}
              <div class="fxb fvc gp2 w-100p">
                <button
                  type="button"
                  class="s-nav-link fxb fvc gp2 text-left {{if (this.isItemActive item this.currentPath) 'fg-primary' ''}}"
                  {{on "click" (fn this.toggleItem item.menuTitle)}}
                >
                  <span class="s-nav-link-icon w32 h32 fxb fvc fhc bd rds2">
                    <i class={{item.icon}}></i>
                  </span>
                  <span class="s-nav-link-text">
                    <span class="bold-font">{{item.menuTitle}}</span>
                  </span>
                </button>
                <button 
                  class="s-nav-link-icon mgl-auto pdl1"
                  {{on "click" (fn this.handleToggle item.menuTitle)}}
                  aria-label="Toggle {{item.menuTitle}} menu"
                  type="button"
                >
                  <i class="menu-toggle-icon pi pi-angle-down transition {{if (this.isExpanded item) 'rotate-180' ''}}"></i>
                </button>
              </div>
              {{else}}
                {{! Simple clickable link without children }}
                <LinkTo 
                  @route={{item.route}}
                  class="s-nav-link fxb fvc fhs gp2 w-100p {{if (this.isItemActive item this.currentPath) 'fg-primary' 'fg-text'}}"
                >
                  {{#if item.icon}}
                    <span class="s-nav-link-icon w32 h32 fxb fvc fhc bd rds2">
                      <i class={{item.icon}}></i>
                    </span>
                  {{/if}}
                  <span class="s-nav-link-text">
                    <span class="bold-font">{{item.menuTitle}}</span>
                  </span>
                </LinkTo>
              {{/if}}
            {{else}}
              {{! Expandable item without 'to' - dropdown button only (not LinkTo) }}
             <button 
                class="s-nav-link fxb fvc gp2 w-100p"
                type="button"
                {{on "click" (fn this.toggleItem item.menuTitle)}}
              >
                  <span class="s-nav-link-icon w32 h32 fxb fvc fhc bd rds2">
                    <i class={{item.icon}}></i>
                  </span>
                  <span class="s-nav-link-text">
                    <span class="bold-font">{{item.menuTitle}}</span>
                  </span>
                  <span class="s-nav-link-icon mgl-auto">
                    <i class="menu-toggle-icon pi pi-angle-down transition {{if (this.isExpanded item) 'rotate-180' ''}}"></i>
                  </span>
              </button>
            {{/if}}
            
            {{#if (this.hasChildren item)}}
              <div 
                class="accordion-content"
                style={{this.getAccordionStyle item}}
                {{this.setContentRef item.menuTitle}}
              >
                <ol class="s-nav-list mgt1 pdl2">
                  {{#each item.children as |childItem|}}
                    {{#if childItem.category}}
                      <li class="s-nav-item pdb2 pdt2">
                        <div class="s-nav-category medium-font fg-text-secondary">{{childItem.category}}</div>
                        {{#if childItem.items}}
                          <ol class="s-nav-list mgt2">
                            {{#each childItem.items as |subItem|}}
                              <li class="s-nav-item">
                                <LinkTo
                                  @route={{subItem.route}}
                                  @activeClass="bd-primary fg-primary"
                                  class="bd-l pdl5 pdt2 pdb2 font-size14 text-left w-100p fg-text block"
                                >
                                  {{subItem.menuItem}}
                                </LinkTo>
                              </li>
                            {{/each}}
                          </ol>
                        {{/if}}
                      </li>
                    {{else}}
                      <li class="s-nav-item">
                        <LinkTo
                          @route={{childItem.route}}
                          @activeClass="bd-primary fg-primary"
                          class="bd-l pdl5 pdb2 pdt2 font-size14 text-left w-100p block fg-text"
                        >
                          {{childItem.menuItem}}
                        </LinkTo>
                      </li>
                    {{/if}}
                  {{/each}}
                </ol>
              </div>
            {{/if}}
          </li>
        {{/each}}
      </ol>
    </nav>
    </aside>
  */
  {
    "id": "59Q4em8o",
    "block": "[[[41,false,[[[1,[30,0,[\"computedActiveItem\"]]]],[]],null],[1,\"\\n\"],[10,\"aside\"],[14,0,\"ulsp-sidebar overflow-x-hidden overflow-y-auto mgb8 mgr10\"],[12],[1,\"\\n  \"],[10,\"nav\"],[14,0,\"sidebar-nav fxgrow\"],[12],[1,\"\\n    \"],[10,\"ol\"],[14,0,\"s-nav-list mgt2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"navItems\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[14,0,\"s-nav-item mgb4\"],[12],[1,\"\\n\"],[41,[30,1,[\"to\"]],[[[41,[28,[30,0,[\"hasChildren\"]],[[30,1]],null],[[[1,\"            \"],[10,0],[14,0,\"fxb fvc gp2 w-100p\"],[12],[1,\"\\n              \"],[11,\"button\"],[16,0,[29,[\"s-nav-link fxb fvc gp2 text-left \",[52,[28,[30,0,[\"isItemActive\"]],[[30,1],[30,0,[\"currentPath\"]]],null],\"fg-primary\",\"\"]]]],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"toggleItem\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n                  \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                  \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[11,\"button\"],[24,0,\"s-nav-link-icon mgl-auto pdl1\"],[16,\"aria-label\",[29,[\"Toggle \",[30,1,[\"menuTitle\"]],\" menu\"]]],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"handleToggle\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                \"],[10,\"i\"],[15,0,[29,[\"menu-toggle-icon pi pi-angle-down transition \",[52,[28,[30,0,[\"isExpanded\"]],[[30,1]],null],\"rotate-180\",\"\"]]]],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],[[[1,\"              \"],[8,[32,2],[[16,0,[29,[\"s-nav-link fxb fvc fhs gp2 w-100p \",[52,[28,[30,0,[\"isItemActive\"]],[[30,1],[30,0,[\"currentPath\"]]],null],\"fg-primary\",\"fg-text\"]]]]],[[\"@route\"],[[30,1,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,1,[\"icon\"]],[[[1,\"                  \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n                    \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null],[1,\"                \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                  \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"]],[]]]]],[1,\"\\n\"]],[]]]],[]],[[[1,\"           \"],[11,\"button\"],[24,0,\"s-nav-link fxb fvc gp2 w-100p\"],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"toggleItem\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n                  \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                  \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-icon mgl-auto\"],[12],[1,\"\\n                  \"],[10,\"i\"],[15,0,[29,[\"menu-toggle-icon pi pi-angle-down transition \",[52,[28,[30,0,[\"isExpanded\"]],[[30,1]],null],\"rotate-180\",\"\"]]]],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]]],[1,\"          \\n\"],[41,[28,[30,0,[\"hasChildren\"]],[[30,1]],null],[[[1,\"            \"],[11,0],[24,0,\"accordion-content\"],[16,5,[28,[30,0,[\"getAccordionStyle\"]],[[30,1]],null]],[4,[30,0,[\"setContentRef\"]],[[30,1,[\"menuTitle\"]]],null],[12],[1,\"\\n              \"],[10,\"ol\"],[14,0,\"s-nav-list mgt1 pdl2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,1,[\"children\"]]],null]],null],null,[[[41,[30,2,[\"category\"]],[[[1,\"                    \"],[10,\"li\"],[14,0,\"s-nav-item pdb2 pdt2\"],[12],[1,\"\\n                      \"],[10,0],[14,0,\"s-nav-category medium-font fg-text-secondary\"],[12],[1,[30,2,[\"category\"]]],[13],[1,\"\\n\"],[41,[30,2,[\"items\"]],[[[1,\"                        \"],[10,\"ol\"],[14,0,\"s-nav-list mgt2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,2,[\"items\"]]],null]],null],null,[[[1,\"                            \"],[10,\"li\"],[14,0,\"s-nav-item\"],[12],[1,\"\\n                              \"],[8,[32,2],[[24,0,\"bd-l pdl5 pdt2 pdb2 font-size14 text-left w-100p fg-text block\"]],[[\"@route\",\"@activeClass\"],[[30,3,[\"route\"]],\"bd-primary fg-primary\"]],[[\"default\"],[[[[1,\"\\n                                \"],[1,[30,3,[\"menuItem\"]]],[1,\"\\n                              \"]],[]]]]],[1,\"\\n                            \"],[13],[1,\"\\n\"]],[3]],null],[1,\"                        \"],[13],[1,\"\\n\"]],[]],null],[1,\"                    \"],[13],[1,\"\\n\"]],[]],[[[1,\"                    \"],[10,\"li\"],[14,0,\"s-nav-item\"],[12],[1,\"\\n                      \"],[8,[32,2],[[24,0,\"bd-l pdl5 pdb2 pdt2 font-size14 text-left w-100p block fg-text\"]],[[\"@route\",\"@activeClass\"],[[30,2,[\"route\"]],\"bd-primary fg-primary\"]],[[\"default\"],[[[[1,\"\\n                        \"],[1,[30,2,[\"menuItem\"]]],[1,\"\\n                      \"]],[]]]]],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[]]]],[2]],null],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[13]],[\"item\",\"childItem\",\"subItem\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-layout/doc-sidebar.js",
    "scope": () => [_modifier.on, _helper.fn, _routing.LinkTo],
    "isStrictMode": true
  }), _DocSidebarComponent), _DocSidebarComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "activeItem", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleItem", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleToggle", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleToggle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleToggleClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleToggleClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "navigateToRoute", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "navigateToRoute"), _class.prototype), _class);
});
;define("ulx-ember/components/common/doc-main/class-property-table", ["exports", "@glimmer/component", "@ember/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _ClassPropertyTableComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class ClassPropertyTableComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "formatClassName", value => {
        if (typeof value !== 'string') {
          return value;
        }
        return value.replace(/(^|\s)\./g, '$1');
      });
      _defineProperty(this, "getStyleString", color => {
        return `background-color: ${color}; border-color: var(--uls-default-border-color, #dee2e6);`;
      });
    }
    get rows() {
      return this.args.rows || [];
    }
    get columnLabels() {
      return this.args.columnLabels || ['Class', 'Properties'];
    }
  }
  _exports.default = ClassPropertyTableComponent;
  _ClassPropertyTableComponent = ClassPropertyTableComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.rows.length}}
    <div class="uls-datatable s-size" style="width: 850px;">
      <div class="datatable-wrapper">
        <table class="datatable-table" style="table-layout: fixed;">
          <thead class="datatable-header">
            <tr class="datatable-header-row">
              <th class="datatable-column-header-cell">{{this.columnLabels.[0]}}</th>
              <th class="datatable-column-header-cell">{{this.columnLabels.[1]}}</th>
            </tr>
          </thead>
          <tbody class="datatable-tbody">
            {{#each this.rows as |row|}}
              <tr class="datatable-body-row">
                <td class="datatable-column-body-cell">
                  <div class="fxb fvc gp2">
                    {{#if row.color}}
                      <div
                        class="rds-circle bd w20 h20"
                        style={{this.getStyleString row.color}}
                        aria-hidden="true"
                      ></div>
                    {{/if}}
                    <span class="bold-font fg-primary font-size16">{{this.formatClassName row.className}}</span>
                  </div>
                </td>
                <td class="datatable-column-body-cell">
                  <span class="font-size16">{{row.property}}</span>
                </td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      </div>
    </div>
  {{/if}}
  */
  {
    "id": "+n4YXgVS",
    "block": "[[[41,[30,0,[\"rows\",\"length\"]],[[[1,\"  \"],[10,0],[14,0,\"uls-datatable s-size\"],[14,5,\"width: 850px;\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"datatable-wrapper\"],[12],[1,\"\\n      \"],[10,\"table\"],[14,0,\"datatable-table\"],[14,5,\"table-layout: fixed;\"],[12],[1,\"\\n        \"],[10,\"thead\"],[14,0,\"datatable-header\"],[12],[1,\"\\n          \"],[10,\"tr\"],[14,0,\"datatable-header-row\"],[12],[1,\"\\n            \"],[10,\"th\"],[14,0,\"datatable-column-header-cell\"],[12],[1,[30,0,[\"columnLabels\",\"0\"]]],[13],[1,\"\\n            \"],[10,\"th\"],[14,0,\"datatable-column-header-cell\"],[12],[1,[30,0,[\"columnLabels\",\"1\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[14,0,\"datatable-tbody\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"rows\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[14,0,\"datatable-body-row\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,0,\"datatable-column-body-cell\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"fxb fvc gp2\"],[12],[1,\"\\n\"],[41,[30,1,[\"color\"]],[[[1,\"                    \"],[10,0],[14,0,\"rds-circle bd w20 h20\"],[15,5,[28,[30,0,[\"getStyleString\"]],[[30,1,[\"color\"]]],null]],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"                  \"],[10,1],[14,0,\"bold-font fg-primary font-size16\"],[12],[1,[28,[30,0,[\"formatClassName\"]],[[30,1,[\"className\"]]],null]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"datatable-column-body-cell\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"font-size16\"],[12],[1,[30,1,[\"property\"]]],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[1]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"row\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/class-property-table.js",
    "isStrictMode": true
  }), _ClassPropertyTableComponent);
});
;define("ulx-ember/components/common/doc-main/code-preview", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "ember-prism/components/code-block", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _codeBlock, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _CodePreviewComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"ember-prism/components/code-block",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let CodePreviewComponent = _exports.default = (_class = (_CodePreviewComponent = class CodePreviewComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "isCodeTab", _descriptor, this);
      _initializerDefineProperty(this, "colCount", _descriptor2, this);
      _initializerDefineProperty(this, "expanded", _descriptor3, this);
      _initializerDefineProperty(this, "copied", _descriptor4, this);
    }
    setActiveTab(isCodeTab) {
      this.isCodeTab = isCodeTab;
    }
    get effectiveLanguage() {
      return !this.expanded ? 'markup' : 'javascript';
    }
    extractTemplateOnly(source) {
      if (!source) {
        return "";
      }
      const match = source.match(/<template>[\s\S]*?<\/template>/m);
      return match ? match[0].trim() : "";
    }
    toggleExpanded() {
      this.expanded = !this.expanded;
    }
    async copyCode() {
      if (this.displayCode && typeof navigator !== 'undefined' && navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(this.displayCode);
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
        }
      }
    }
    // Dedent helper: remove common indentation, preserve relative indents
    dedentBlock(text) {
      if (!text) return "";
      const normalized = text.replace(/\r\n?|\u2028|\u2029/g, "\n").replace(/^\uFEFF/, "");
      // Remove leading newline if present
      const withoutLeadingNewline = normalized.replace(/^\n/, "");
      const lines = withoutLeadingNewline.split("\n");
      // Find minimum indentation (excluding empty lines)
      let minIndent = Infinity;
      for (const line of lines) {
        if (line.trim().length === 0) continue; // Skip empty lines
        const m = line.match(/^[\t ]*/);
        const count = m ? m[0].length : 0;
        if (count < minIndent) minIndent = count;
      }
      // If no indentation found, return as is
      if (!isFinite(minIndent) || minIndent === 0) {
        return withoutLeadingNewline.trimEnd();
      }
      // Remove common indentation from all lines
      let out = lines.map(l => {
        if (l.trim().length === 0) return l; // Keep empty lines as is
        return l.slice(minIndent);
      });
      // Remove leading whitespace from first line
      if (out.length > 0 && out[0]) {
        out[0] = out[0].replace(/^\s+/, "");
      }
      return out.join("\n").trimEnd();
    }
    get displayCode() {
      const source = this.args.source;
      if (!source) return "";
      const code = String(source);
      // collapsed → template only
      if (!this.expanded) {
        const templateOnly = this.extractTemplateOnly(code);
        // 👇 IMPORTANT FIX
        if (!templateOnly) {
          return this.dedentBlock(code);
        }
        return this.dedentBlock(templateOnly);
      }
      // expanded → full code
      return this.dedentBlock(code);
    }
    get language() {
      // Map language names to Prism-supported languages
      const lang = this.args.language || 'javascript';
      // Map jsx to javascript, handlebars to markup
      if (lang === 'jsx') return 'javascript';
      if (lang === 'handlebars' || lang === 'hbs') return 'markup';
      return lang;
    }
    get snippetName() {
      return this.args.snippetName || 'code';
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
        <div class="code-preview-container" ...attributes>
        {{#if @title}}
          <h5 class="mgb2 font-medium">{{@title}}</h5>
        {{/if}}
        {{#if @description}}
          <div class="text-small fg-text-secondary mgb4">
            {{@description}}
          </div>
        {{/if}}
        {{#if (has-block)}}
          {{#if @hasDemo}}
            <div class="demo-and-code">
              <div class="demo">
                <div class="code-preview-container">
                  <div class="demo bg-default bd pd8 mgb2 rds3">
                    {{yield}}
                  </div>
                  {{#if this.displayCode}}
                    <div class="code-block asdad">
                      {{#if this.expanded}}
                        <CodeBlock
                          @code={{this.displayCode}}
                          @language="javascript"
                        />
                        {{else}}
                          <CodeBlock
                            @code={{this.displayCode}}
                            @language={{this.effectiveLanguage}}
                          />
                      {{/if}}
                      <div class="code-actions fxb gp4 pdy1 pdx3">
                        <button type="button"
                                class="expand-btn {{if this.expanded "is-expanded"}}"
                                {{on "click" this.toggleExpanded}}
                                aria-label={{if this.expanded "Collapse code" "Expand code"}}
                        >
                          <svg
    class="fit-width-icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <!-- left bar -->
    <path class="bar left" d="M4 4v16" />
  
    <!-- right bar -->
    <path class="bar right" d="M20 4v16" />
  
    <!-- left arrow -->
    <path class="arrow left" d="M10 12H6m0 0l2-2m-2 2l2 2" />
  
    <!-- right arrow -->
    <path class="arrow right" d="M14 12h4m0 0l-2-2m2 2l-2 2" />
  </svg>
                        </button>
                        <button type="button" class="copy-btn {{if this.copied "is-copied"}}" aria-label="Copy code" {{on "click" this.copyCode}}>
                          <svg class="copy-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" >
                            <!-- Copy icon -->
                            <g class="icon-copy">
                              <rect x="6" y="2" width="13" height="13" rx="2"
                                stroke="currentColor" stroke-width="2"/>
                              <rect x="1" y="8" width="13" height="13" rx="2"
                                stroke="currentColor" stroke-width="2" fill="#272822"/>
                              
                            </g>
  
                            <!-- Check icon -->
                            <path
                              class="icon-check"
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  {{/if}}
                </div>
              </div>
            </div>
          {{else}}
            {{#if this.displayCode}}
              <div class="code-block">
                <CodeBlock
                    @code={{this.displayCode}}
                    @language={{this.effectiveLanguage}}
                  />
                <div class="code-actions fxb gp4 pdy1 pdx3">
                  <button type="button" class="copy-btn {{if this.copied "is-copied"}}" aria-label="Copy code" {{on "click" this.copyCode}}>
                    <svg class="copy-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" >
                      <!-- Copy icon -->
                      <g class="icon-copy">
                        <rect x="6" y="2" width="13" height="13" rx="2"
                          stroke="currentColor" stroke-width="2"/>
                        <rect x="1" y="8" width="13" height="13" rx="2"
                          stroke="currentColor" stroke-width="2" fill="#272822"/>
                        
                      </g>
  
                      <!-- Check icon -->
                      <path
                        class="icon-check"
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            {{/if}}
          {{/if}}
        {{else}}
          {{#if this.displayCode}}
            <div class="code-block asdad">
              <CodeBlock
                @code={{this.displayCode}}
                @language={{this.effectiveLanguage}}
              />
              <div class="code-actions fxb gp4 pdy1 pdx3">
                <button type="button" aria-label="Copy code" {{on "click" this.copyCode}}>
                  {{#if this.copied}}
                    copied
                  {{else}}
                    copy
                  {{/if}}
                </button>
              </div>
            </div>
          {{/if}}
        {{/if}}
      </div>
  */
  {
    "id": "5PtWGm5Y",
    "block": "[[[1,\"    \"],[11,0],[24,0,\"code-preview-container\"],[17,1],[12],[1,\"\\n\"],[41,[30,2],[[[1,\"        \"],[10,\"h5\"],[14,0,\"mgb2 font-medium\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]],null],[41,[30,3],[[[1,\"        \"],[10,0],[14,0,\"text-small fg-text-secondary mgb4\"],[12],[1,\"\\n          \"],[1,[30,3]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[48,[30,5]],[[[41,[30,4],[[[1,\"          \"],[10,0],[14,0,\"demo-and-code\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"demo\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"code-preview-container\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"demo bg-default bd pd8 mgb2 rds3\"],[12],[1,\"\\n                  \"],[18,5,null],[1,\"\\n                \"],[13],[1,\"\\n\"],[41,[30,0,[\"displayCode\"]],[[[1,\"                  \"],[10,0],[14,0,\"code-block asdad\"],[12],[1,\"\\n\"],[41,[30,0,[\"expanded\"]],[[[1,\"                      \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],\"javascript\"]],null],[1,\"\\n\"]],[]],[[[1,\"                        \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n\"]],[]]],[1,\"                    \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n                      \"],[11,\"button\"],[16,0,[29,[\"expand-btn \",[52,[30,0,[\"expanded\"]],\"is-expanded\"]]]],[16,\"aria-label\",[52,[30,0,[\"expanded\"]],\"Collapse code\",\"Expand code\"]],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"toggleExpanded\"]]],null],[12],[1,\"\\n                        \"],[10,\"svg\"],[14,0,\"fit-width-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[3,\" left bar \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"bar left\"],[14,\"d\",\"M4 4v16\"],[12],[13],[1,\"\\n\\n  \"],[3,\" right bar \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"bar right\"],[14,\"d\",\"M20 4v16\"],[12],[13],[1,\"\\n\\n  \"],[3,\" left arrow \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"arrow left\"],[14,\"d\",\"M10 12H6m0 0l2-2m-2 2l2 2\"],[12],[13],[1,\"\\n\\n  \"],[3,\" right arrow \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"arrow right\"],[14,\"d\",\"M14 12h4m0 0l-2-2m2 2l-2 2\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n                      \"],[13],[1,\"\\n                      \"],[11,\"button\"],[16,0,[29,[\"copy-btn \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n                        \"],[10,\"svg\"],[14,0,\"copy-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n                          \"],[3,\" Copy icon \"],[1,\"\\n                          \"],[10,\"g\"],[14,0,\"icon-copy\"],[12],[1,\"\\n                            \"],[10,\"rect\"],[14,\"x\",\"6\"],[14,\"y\",\"2\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[12],[13],[1,\"\\n                            \"],[10,\"rect\"],[14,\"x\",\"1\"],[14,\"y\",\"8\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"#272822\"],[12],[13],[1,\"\\n                            \\n                          \"],[13],[1,\"\\n\\n                          \"],[3,\" Check icon \"],[1,\"\\n                          \"],[10,\"path\"],[14,0,\"icon-check\"],[14,\"d\",\"M5 13l4 4L19 7\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"none\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                      \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"displayCode\"]],[[[1,\"            \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n              \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n              \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n                \"],[11,\"button\"],[16,0,[29,[\"copy-btn \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n                  \"],[10,\"svg\"],[14,0,\"copy-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n                    \"],[3,\" Copy icon \"],[1,\"\\n                    \"],[10,\"g\"],[14,0,\"icon-copy\"],[12],[1,\"\\n                      \"],[10,\"rect\"],[14,\"x\",\"6\"],[14,\"y\",\"2\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[12],[13],[1,\"\\n                      \"],[10,\"rect\"],[14,\"x\",\"1\"],[14,\"y\",\"8\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"#272822\"],[12],[13],[1,\"\\n                      \\n                    \"],[13],[1,\"\\n\\n                    \"],[3,\" Check icon \"],[1,\"\\n                    \"],[10,\"path\"],[14,0,\"icon-check\"],[14,\"d\",\"M5 13l4 4L19 7\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"none\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[12],[13],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null]],[]]]],[]],[[[41,[30,0,[\"displayCode\"]],[[[1,\"          \"],[10,0],[14,0,\"code-block asdad\"],[12],[1,\"\\n            \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n            \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n              \"],[11,\"button\"],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copied\"]],[[[1,\"                  copied\\n\"]],[]],[[[1,\"                  copy\\n\"]],[]]],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null]],[]]],[1,\"    \"],[13]],[\"&attrs\",\"@title\",\"@description\",\"@hasDemo\",\"&default\"],[\"if\",\"has-block\",\"yield\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/code-preview.js",
    "scope": () => [_codeBlock.default, _modifier.on],
    "isStrictMode": true
  }), _CodePreviewComponent), _CodePreviewComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "isCodeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "colCount", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 6;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "expanded", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "copied", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setActiveTab", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setActiveTab"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleExpanded", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleExpanded"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyCode", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyCode"), _class.prototype), _class);
});
;define("ulx-ember/components/common/doc-main/color-palette", ["exports", "@glimmer/component", "@ember/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _ColorPaletteComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class ColorPaletteComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "getStyleString", cssVar => {
        return `width: 70px; height: 70px; margin: 0 auto 1rem; background: ${cssVar};`;
      });
    }
  }
  _exports.default = ColorPaletteComponent;
  _ColorPaletteComponent = ColorPaletteComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fcol gp8 w-100p">
    {{#each @paletteGroups as |group|}}
      <div class="fxcol gp2">
        <h5 class="mgt0 mgb2 bold-font fg-primary">{{group.title}}</h5>
        <div class="uls-grid col-4 gp5">
          {{#each group.colors as |color|}}
            <article
              class="uls-foundation-card pd3 rds2 bd flex-column md-w-1-3 text-center"
            >
              <div
                class="rds2 mgb2 bd mg-auto"
                style={{this.getStyleString color.cssVar}}
              ></div>
              <p class="mgb1 fg-text-secondary"><code
                >{{color.token}}</code></p>
            </article>
          {{/each}}
        </div>
      </div>
    {{/each}}
  </div>
  */
  {
    "id": "EiF8H8yf",
    "block": "[[[10,0],[14,0,\"fxb fcol gp8 w-100p\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"fxcol gp2\"],[12],[1,\"\\n      \"],[10,\"h5\"],[14,0,\"mgt0 mgb2 bold-font fg-primary\"],[12],[1,[30,2,[\"title\"]]],[13],[1,\"\\n      \"],[10,0],[14,0,\"uls-grid col-4 gp5\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,2,[\"colors\"]]],null]],null],null,[[[1,\"          \"],[10,\"article\"],[14,0,\"uls-foundation-card pd3 rds2 bd flex-column md-w-1-3 text-center\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"rds2 mgb2 bd mg-auto\"],[15,5,[28,[30,0,[\"getStyleString\"]],[[30,3,[\"cssVar\"]]],null]],[12],[13],[1,\"\\n            \"],[10,2],[14,0,\"mgb1 fg-text-secondary\"],[12],[10,\"code\"],[12],[1,[30,3,[\"token\"]]],[13],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[3]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13]],[\"@paletteGroups\",\"group\",\"color\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/color-palette.js",
    "isStrictMode": true
  }), _ColorPaletteComponent);
});
;define("ulx-ember/components/common/doc-main/component-builder", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/modifier", "@ember/helper", "ember-prism/components/code-block", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _modifier, _helper, _codeBlock, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _ComponentBuilderComponent;
  /**
   * Reusable doc builder: renders schema-driven controls, live preview, and generated code.
   * Yields resolved props to the <:preview> block so the parent can render the component.
   *
   * @param {Object} schema - Builder schema: { props, stateToProps, stateToSnippet, importLine?, componentName? }
   */
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/modifier",0,"@ember/helper",0,"ember-prism/components/code-block",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentBuilderComponent = _exports.default = (_class = (_ComponentBuilderComponent = class ComponentBuilderComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      _initializerDefineProperty(this, "stateSnapshot", _descriptor, this);
      _initializerDefineProperty(this, "copied", _descriptor2, this);
      const schema = args?.schema;
      const props = schema?.props ?? [];
      this.stateSnapshot = props.reduce((acc, p) => ({
        ...acc,
        [p.key]: p.default
      }), {});
    }
    get state() {
      return this.stateSnapshot ?? {};
    }
    get schema() {
      return this.args.schema ?? {};
    }
    get resolvedProps() {
      const fn = this.schema.stateToProps;
      return typeof fn === 'function' ? fn(this.state) : {};
    }
    get generatedSnippet() {
      const fn = this.schema.stateToSnippet;
      return typeof fn === 'function' ? fn(this.state) : '';
    }
    get importLine() {
      return this.schema.importLine ?? '';
    }
    get displayCode() {
      const importLine = this.importLine;
      const snippet = this.generatedSnippet;
      if (!snippet) return '';
      if (importLine) {
        return `${importLine}\n\n<template>\n  ${snippet.split('\n').join('\n  ')}\n</template>`;
      }
      return `<template>\n  ${snippet.split('\n').join('\n  ')}\n</template>`;
    }
    /**
    * Options for a prop: from static options or getOptions(state).
    */
    optionsFor(prop) {
      if (prop.getOptions && typeof prop.getOptions === 'function') {
        return prop.getOptions(this.state) ?? [];
      }
      return prop.options ?? [];
    }
    /**
    * Props with resolved options, current value, and type flags so the template
    * never calls methods with arguments (which can lose `this` in Glimmer).
    */
    get propsWithOptions() {
      const state = this.state;
      const schema = this.schema;
      const list = schema.props ?? [];
      return list.filter(prop => this.visible(prop)).map(prop => {
        const opts = this.optionsFor(prop);
        const currentValue = state[prop.key];
        return {
          ...prop,
          currentValue,
          inputName: `builder-${prop.key}`,
          isRadio: prop.type === 'radio',
          isSelect: prop.type === 'select',
          isCheckbox: prop.type === 'checkbox',
          resolvedOptions: opts.map(opt => ({
            ...opt,
            selected: currentValue === opt.value
          }))
        };
      });
    }
    visible(prop) {
      if (prop.visibleWhen && typeof prop.visibleWhen === 'function') {
        return prop.visibleWhen(this.state);
      }
      return true;
    }
    updateProp(key, value) {
      this.stateSnapshot = {
        ...this.stateSnapshot,
        [key]: value
      };
    }
    selectChange(propKey, event) {
      this.updateProp(propKey, event.target.value);
    }
    checkboxChange(propKey, event) {
      this.updateProp(propKey, event.target.checked);
    }
    async copyCode() {
      if (!this.displayCode || typeof navigator === 'undefined' || !navigator.clipboard) return;
      try {
        await navigator.clipboard.writeText(this.displayCode);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="doc-section component-builder">
    <div class="ulx-grid gp12">
  
      {{! Preview + code column }}
      <div class="fxgrow fxb column gp6 col-7">
        {{#if (has-block "preview")}}
          <div class="demo bg-default bd pd8 rds3">
            <p class="font-size12 fg-text-secondary mgt0 mgb4">Preview</p>
            {{yield this.resolvedProps to="preview"}}
          </div>
        {{/if}}
        {{#if this.displayCode}}
          <div class="code-block-wrapper">
            <div class="fxb fvc fsb">
              <p class="font-size12 fg-text-secondary mgt0">Generated code</p>
              <div class="code-actions fxb gp4 pdy1 pdx3">
                <button
                  type="button"
                  class="ulx-button link xs-size
                    {{if this.copied 'is-copied'}}"
                  aria-label="Copy code"
                  {{on "click" this.copyCode}}
                >
                  {{#if this.copied}}
                    Copied
                  {{else}}
                    Copy
                  {{/if}}
                </button>
              </div>
            </div>
            <div class="code-block">
              <CodeBlock @code={{this.displayCode}} @language="markup" />
  
            </div>
          </div>
        {{/if}}
      </div>
  
      {{! Controls column }}
      <div
        class="col-5 component-builder-controls bd rds3 pd6 bg-default component-builder-controls-col"
      >
        <h4 class="mgt0 mgb4 bold-font font-size14">Properties</h4>
        {{#each this.propsWithOptions as |prop|}}
          <div class="mgb4">
            <label
              class="block font-size12 font-medium mgb1 fg-text-secondary"
            >{{prop.label}}</label>
            {{#if prop.isRadio}}
              <div
                class="fxb wrap gp4"
                role="group"
                aria-label={{prop.label}}
              >
                {{#each prop.resolvedOptions as |opt|}}
                  <label class="fxb fvc cursor-pointer">
                    <input
                      type="radio"
                      name={{prop.inputName}}
                      value={{opt.value}}
                      checked={{opt.selected}}
                      {{on "change" (fn this.updateProp prop.key opt.value)}}
                      class="mgr1"
                    />
                    <span class="font-size12">{{opt.label}}</span>
                  </label>
                {{/each}}
              </div>
            {{else if prop.isSelect}}
              <select
                class="block w-100p pd2 rds2 bd font-size12"
                value={{prop.currentValue}}
                {{on "change" (fn this.selectChange prop.key)}}
                aria-label={{prop.label}}
              >
                {{#each prop.resolvedOptions as |opt|}}
                  <option
                    value={{opt.value}}
                    selected={{opt.selected}}
                  >{{opt.label}}</option>
                {{/each}}
              </select>
            {{else if prop.isCheckbox}}
              <label class="fxb fvc gp2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={{prop.currentValue}}
                  {{on "change" (fn this.checkboxChange prop.key)}}
                  class="mgr1"
                />
                <span class="font-size12">{{prop.label}}</span>
              </label>
            {{/if}}
          </div>
        {{/each}}
      </div>
  
    </div>
  </div>
  */
  {
    "id": "IcFETQrS",
    "block": "[[[10,0],[14,0,\"doc-section component-builder\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"ulx-grid gp12\"],[12],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"fxgrow fxb column gp6 col-7\"],[12],[1,\"\\n\"],[41,[48,[30,4]],[[[1,\"        \"],[10,0],[14,0,\"demo bg-default bd pd8 rds3\"],[12],[1,\"\\n          \"],[10,2],[14,0,\"font-size12 fg-text-secondary mgt0 mgb4\"],[12],[1,\"Preview\"],[13],[1,\"\\n          \"],[18,4,[[30,0,[\"resolvedProps\"]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"displayCode\"]],[[[1,\"        \"],[10,0],[14,0,\"code-block-wrapper\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"fxb fvc fsb\"],[12],[1,\"\\n            \"],[10,2],[14,0,\"font-size12 fg-text-secondary mgt0\"],[12],[1,\"Generated code\"],[13],[1,\"\\n            \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n              \"],[11,\"button\"],[16,0,[29,[\"ulx-button link xs-size\\n                  \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,0],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copied\"]],[[[1,\"                  Copied\\n\"]],[]],[[[1,\"                  Copy\\n\"]],[]]],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n            \"],[8,[32,1],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],\"markup\"]],null],[1,\"\\n\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"col-5 component-builder-controls bd rds3 pd6 bg-default component-builder-controls-col\"],[12],[1,\"\\n      \"],[10,\"h4\"],[14,0,\"mgt0 mgb4 bold-font font-size14\"],[12],[1,\"Properties\"],[13],[1,\"\\n\"],[42,[28,[31,4],[[28,[31,4],[[30,0,[\"propsWithOptions\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"mgb4\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"block font-size12 font-medium mgb1 fg-text-secondary\"],[12],[1,[30,1,[\"label\"]]],[13],[1,\"\\n\"],[41,[30,1,[\"isRadio\"]],[[[1,\"            \"],[10,0],[14,0,\"fxb wrap gp4\"],[14,\"role\",\"group\"],[15,\"aria-label\",[30,1,[\"label\"]]],[12],[1,\"\\n\"],[42,[28,[31,4],[[28,[31,4],[[30,1,[\"resolvedOptions\"]]],null]],null],null,[[[1,\"                \"],[10,\"label\"],[14,0,\"fxb fvc cursor-pointer\"],[12],[1,\"\\n                  \"],[11,\"input\"],[16,3,[30,1,[\"inputName\"]]],[16,2,[30,2,[\"value\"]]],[16,\"checked\",[30,2,[\"selected\"]]],[24,0,\"mgr1\"],[24,4,\"radio\"],[4,[32,0],[\"change\",[28,[32,2],[[30,0,[\"updateProp\"]],[30,1,[\"key\"]],[30,2,[\"value\"]]],null]],null],[12],[13],[1,\"\\n                  \"],[10,1],[14,0,\"font-size12\"],[12],[1,[30,2,[\"label\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n\"]],[2]],null],[1,\"            \"],[13],[1,\"\\n\"]],[]],[[[41,[30,1,[\"isSelect\"]],[[[1,\"            \"],[11,\"select\"],[24,0,\"block w-100p pd2 rds2 bd font-size12\"],[16,2,[30,1,[\"currentValue\"]]],[16,\"aria-label\",[30,1,[\"label\"]]],[4,[32,0],[\"change\",[28,[32,2],[[30,0,[\"selectChange\"]],[30,1,[\"key\"]]],null]],null],[12],[1,\"\\n\"],[42,[28,[31,4],[[28,[31,4],[[30,1,[\"resolvedOptions\"]]],null]],null],null,[[[1,\"                \"],[10,\"option\"],[15,2,[30,3,[\"value\"]]],[15,\"selected\",[30,3,[\"selected\"]]],[12],[1,[30,3,[\"label\"]]],[13],[1,\"\\n\"]],[3]],null],[1,\"            \"],[13],[1,\"\\n\"]],[]],[[[41,[30,1,[\"isCheckbox\"]],[[[1,\"            \"],[10,\"label\"],[14,0,\"fxb fvc gp2 cursor-pointer\"],[12],[1,\"\\n              \"],[11,\"input\"],[16,\"checked\",[30,1,[\"currentValue\"]]],[24,0,\"mgr1\"],[24,4,\"checkbox\"],[4,[32,0],[\"change\",[28,[32,2],[[30,0,[\"checkboxChange\"]],[30,1,[\"key\"]]],null]],null],[12],[13],[1,\"\\n              \"],[10,1],[14,0,\"font-size12\"],[12],[1,[30,1,[\"label\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"]],[]],null]],[]]]],[]]],[1,\"        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\"],[13]],[\"prop\",\"opt\",\"opt\",\"&preview\"],[\"if\",\"has-block\",\"yield\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/component-builder.js",
    "scope": () => [_modifier.on, _codeBlock.default, _helper.fn],
    "isStrictMode": true
  }), _ComponentBuilderComponent), _ComponentBuilderComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "stateSnapshot", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "copied", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateProp", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateProp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "selectChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkboxChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "checkboxChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyCode", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyCode"), _class.prototype), _class);
});
;define("ulx-ember/components/common/doc-main/component-layout", ["exports", "@glimmer/component", "ulx-ember/components/common/doc-main/doc-tab", "@ember/component", "@ember/template-factory"], function (_exports, _component, _docTab, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _ComponentLayoutComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-ember/components/common/doc-main/doc-tab",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class ComponentLayoutComponent extends _component.default {}
  _exports.default = ComponentLayoutComponent;
  _ComponentLayoutComponent = ComponentLayoutComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="doc-component-page">
    {{#if @tabs}}
      <DocTab
        @tabs={{@tabs}}
        @activeTab={{@activeTab}}
        @onChange={{@onTabChange}}
      >
        <header class="doc-component-page__header mgb8">
          <h1 class="mgt0 mgb2 bold-font">{{@title}}</h1>
          {{#if @description}}
            <p class="fg-text-secondary mgt0">{{@description}}</p>
          {{/if}}
        </header>
        <div class="doc-component-page__content">
          {{yield @activeTab}}
        </div>
      </DocTab>
    {{else}}
      <header class="doc-component-page__header mgb8">
        <h1 class="mgt0 mgb2 bold-font">{{@title}}</h1>
        {{#if @description}}
          <p class="fg-text-secondary mgt0">{{@description}}</p>
        {{/if}}
      </header>
      <div class="doc-component-page__content">
        {{yield}}
      </div>
    {{/if}}
  </div>
  */
  {
    "id": "3asbnY1D",
    "block": "[[[10,0],[14,0,\"doc-component-page\"],[12],[1,\"\\n\"],[41,[30,1],[[[1,\"    \"],[8,[32,0],null,[[\"@tabs\",\"@activeTab\",\"@onChange\"],[[30,1],[30,2],[30,3]]],[[\"default\"],[[[[1,\"\\n      \"],[10,\"header\"],[14,0,\"doc-component-page__header mgb8\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"mgt0 mgb2 bold-font\"],[12],[1,[30,4]],[13],[1,\"\\n\"],[41,[30,5],[[[1,\"          \"],[10,2],[14,0,\"fg-text-secondary mgt0\"],[12],[1,[30,5]],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"doc-component-page__content\"],[12],[1,\"\\n        \"],[18,6,[[30,2]]],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,\"header\"],[14,0,\"doc-component-page__header mgb8\"],[12],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"mgt0 mgb2 bold-font\"],[12],[1,[30,4]],[13],[1,\"\\n\"],[41,[30,5],[[[1,\"        \"],[10,2],[14,0,\"fg-text-secondary mgt0\"],[12],[1,[30,5]],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"doc-component-page__content\"],[12],[1,\"\\n      \"],[18,6,null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]],[13]],[\"@tabs\",\"@activeTab\",\"@onTabChange\",\"@title\",\"@description\",\"&default\"],[\"if\",\"yield\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/component-layout.js",
    "scope": () => [_docTab.default],
    "isStrictMode": true
  }), _ComponentLayoutComponent);
});
;define("ulx-ember/components/common/doc-main/doc-basic-section", ["exports", "@glimmer/component", "ulx-ember/components/common/doc-main/foundation-section", "@ember/component", "@ember/template-factory"], function (_exports, _component, _foundationSection, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DocBasicSectionComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-ember/components/common/doc-main/foundation-section",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DocBasicSectionComponent extends _component.default {}
  _exports.default = DocBasicSectionComponent;
  _DocBasicSectionComponent = DocBasicSectionComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <FoundationSection 
    @id={{@id}}
    @title={{@title}}
    @subtitle={{@subtitle}}
  >
    {{yield}}
  </FoundationSection>
  */
  {
    "id": "19AlYi18",
    "block": "[[[8,[32,0],null,[[\"@id\",\"@title\",\"@subtitle\"],[[30,1],[30,2],[30,3]]],[[\"default\"],[[[[1,\"\\n  \"],[18,4,null],[1,\"\\n\"]],[]]]]]],[\"@id\",\"@title\",\"@subtitle\",\"&default\"],[\"yield\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-basic-section.js",
    "scope": () => [_foundationSection.default],
    "isStrictMode": true
  }), _DocBasicSectionComponent);
});
;define("ulx-ember/components/common/doc-main/doc-import-section", ["exports", "@glimmer/component", "ulx-ember/components/common/doc-main/foundation-section", "@ember/component", "@ember/template-factory"], function (_exports, _component, _foundationSection, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DocImportSectionComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-ember/components/common/doc-main/foundation-section",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DocImportSectionComponent extends _component.default {}
  _exports.default = DocImportSectionComponent;
  _DocImportSectionComponent = DocImportSectionComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <FoundationSection 
    @id={{@id}}
    @title="import"
    @subtitle={{@subtitle}}
  >
    <div class="code-preview-container mgb4">
      <div class="code-block">
        <pre><code>{{@code}}</code></pre>
      </div>
    </div>
  </FoundationSection>
  */
  {
    "id": "tRdw9HNu",
    "block": "[[[8,[32,0],null,[[\"@id\",\"@title\",\"@subtitle\"],[[30,1],\"import\",[30,2]]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"code-preview-container mgb4\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n      \"],[10,\"pre\"],[12],[10,\"code\"],[12],[1,[30,3]],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@id\",\"@subtitle\",\"@code\"],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-import-section.js",
    "scope": () => [_foundationSection.default],
    "isStrictMode": true
  }), _DocImportSectionComponent);
});
;define("ulx-ember/components/common/doc-main/doc-panel", ["exports", "@glimmer/component", "ulx-ember/components/common/doc-main/foundation-section", "ulx-ember/components/common/doc-main/code-preview", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/components/common/doc-main/doc-section-nav", "@ember/component", "@ember/template-factory"], function (_exports, _component, _foundationSection, _codePreview, _richText, _docSectionNav, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _DocPanelComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-ember/components/common/doc-main/foundation-section",0,"ulx-ember/components/common/doc-main/code-preview",0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/components/common/doc-main/doc-section-nav",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class DocPanelComponent extends _component.default {
    hasValidComponent(feature) {
      return feature?.demo?.component && feature.demo.component !== null;
    }
  }
  _exports.default = DocPanelComponent;
  _DocPanelComponent = DocPanelComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="doc-panel-wrapper fxb fsb">
    <div class="doc-panel fxgrow w-100p">
      {{#if @features}}
        {{#each @features as |feature|}}
          <FoundationSection 
            @id={{feature.id}}
            @title={{feature.sectionNav}}
          >
            {{#if feature.sectionDesc}}
              <RichText 
                @as={{feature.sectionDesc.props.as}}
                @content={{feature.sectionDesc.props.content}}
              />
            {{/if}}
            
            {{#if feature.demo}}
              <CodePreview 
                @source={{feature.demo.props.source}}
                @language={{feature.demo.props.language}}
                @snippetName={{feature.demo.props.snippetName}}
                @title={{feature.demo.props.title}}
                @description={{feature.demo.props.description}}
                @hasDemo={{this.hasValidComponent feature}}
              >
                {{#if (this.hasValidComponent feature)}}
                  {{component feature.demo.component}}
                {{/if}}
              </CodePreview>
            {{/if}}
          </FoundationSection>
        {{/each}}
      {{else}}
        <p class="fg-text-secondary">No features available</p>
      {{/if}}
    </div>
    <DocSectionNav @features={{@features}} />
  </div>
  */
  {
    "id": "opkwsgol",
    "block": "[[[10,0],[14,0,\"doc-panel-wrapper fxb fsb\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"doc-panel fxgrow w-100p\"],[12],[1,\"\\n\"],[41,[30,1],[[[42,[28,[31,2],[[28,[31,2],[[30,1]],null]],null],null,[[[1,\"        \"],[8,[32,0],null,[[\"@id\",\"@title\"],[[30,2,[\"id\"]],[30,2,[\"sectionNav\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,2,[\"sectionDesc\"]],[[[1,\"            \"],[8,[32,1],null,[[\"@as\",\"@content\"],[[30,2,[\"sectionDesc\",\"props\",\"as\"]],[30,2,[\"sectionDesc\",\"props\",\"content\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"          \\n\"],[41,[30,2,[\"demo\"]],[[[1,\"            \"],[8,[32,2],null,[[\"@source\",\"@language\",\"@snippetName\",\"@title\",\"@description\",\"@hasDemo\"],[[30,2,[\"demo\",\"props\",\"source\"]],[30,2,[\"demo\",\"props\",\"language\"]],[30,2,[\"demo\",\"props\",\"snippetName\"]],[30,2,[\"demo\",\"props\",\"title\"]],[30,2,[\"demo\",\"props\",\"description\"]],[28,[30,0,[\"hasValidComponent\"]],[[30,2]],null]]],[[\"default\"],[[[[1,\"\\n\"],[41,[28,[30,0,[\"hasValidComponent\"]],[[30,2]],null],[[[1,\"                \"],[46,[30,2,[\"demo\",\"component\"]],null,null,null],[1,\"\\n\"]],[]],null],[1,\"            \"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"        \"]],[]]]]],[1,\"\\n\"]],[2]],null]],[]],[[[1,\"      \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"No features available\"],[13],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n  \"],[8,[32,3],null,[[\"@features\"],[[30,1]]],null],[1,\"\\n\"],[13]],[\"@features\",\"feature\"],[\"if\",\"each\",\"-track-array\",\"component\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-panel.js",
    "scope": () => [_foundationSection.default, _richText.default, _codePreview.default, _docSectionNav.default],
    "isStrictMode": true
  }), _DocPanelComponent);
});
;define("ulx-ember/components/common/doc-main/doc-section-nav", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ember-modifier", "@ember/modifier", "@ember/helper", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _emberModifier, _modifier, _helper, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _DocSectionNavComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ember-modifier",0,"@ember/modifier",0,"@ember/helper",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let DocSectionNavComponent = _exports.default = (_class = (_DocSectionNavComponent = class DocSectionNavComponent extends _component.default {
    constructor() {
      super(...arguments);
      // Set default active section to the first one (Import)
      _initializerDefineProperty(this, "activeSectionId", _descriptor, this);
      _defineProperty(this, "isActive", sectionId => {
        return this.activeSectionId === sectionId;
      });
      _defineProperty(this, "setupScrollObserver", (0, _emberModifier.modifier)(() => {
        const handleScroll = () => {
          const sections = this.sections;
          if (!sections || sections.length === 0) return;
          const scrollPosition = window.scrollY + 150; // Offset for sticky header
          // Find the current section based on scroll position
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const element = document.getElementById(section.id);
            if (element) {
              const elementTop = element.offsetTop;
              if (scrollPosition >= elementTop) {
                this.activeSectionId = section.id;
                return;
              }
            }
          }
          // If scrolled to top, set first section as active
          if (scrollPosition < 100) {
            this.activeSectionId = sections[0]?.id || null;
          }
        };
        // Set initial active section
        handleScroll();
        // Add scroll listener
        window.addEventListener('scroll', handleScroll, {
          passive: true
        });
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }));
      const _sections = this.args.features || [];
      if (_sections.length > 0) {
        this.activeSectionId = _sections[0].id;
      }
    }
    get sections() {
      return this.args.features || [];
    }
    scrollToSection(sectionId, event) {
      if (event) {
        event.preventDefault();
      }
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // Offset from top for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.sections.length}}
    <nav class="doc-section-nav" {{this.setupScrollObserver}}>
      <ul>
        {{#each this.sections as |section|}}
          <li>
            <a
              href="#{{section.id}}"
              class={{if (this.isActive section.id) "active" ""}}
              {{on "click" (fn this.scrollToSection section.id)}}
            >
              {{section.sectionNav}}
            </a>
          </li>
        {{/each}}
      </ul>
    </nav>
  {{/if}}
  */
  {
    "id": "ig6jNq82",
    "block": "[[[41,[30,0,[\"sections\",\"length\"]],[[[1,\"  \"],[11,\"nav\"],[24,0,\"doc-section-nav\"],[4,[30,0,[\"setupScrollObserver\"]],null,null],[12],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"sections\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,\"\\n          \"],[11,3],[16,6,[29,[\"#\",[30,1,[\"id\"]]]]],[16,0,[52,[28,[30,0,[\"isActive\"]],[[30,1,[\"id\"]]],null],\"active\",\"\"]],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"scrollToSection\"]],[30,1,[\"id\"]]],null]],null],[12],[1,\"\\n            \"],[1,[30,1,[\"sectionNav\"]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"section\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-section-nav.js",
    "scope": () => [_modifier.on, _helper.fn],
    "isStrictMode": true
  }), _DocSectionNavComponent), _DocSectionNavComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeSectionId", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "scrollToSection", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "scrollToSection"), _class.prototype), _class);
});
;define("ulx-ember/components/common/doc-main/doc-tab", ["exports", "@glimmer/component", "@ember/object", "@ember/modifier", "@ember/helper", "@ember/component", "@ember/template-factory"], function (_exports, _component, _object, _modifier, _helper, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _DocTabComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@ember/modifier",0,"@ember/helper",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  let DocTabComponent = _exports.default = (_class = (_DocTabComponent = class DocTabComponent extends _component.default {
    get isActive() {
      return tabId => {
        return this.args.activeTab === tabId;
      };
    }
    handleTabClick(tabId, event) {
      event.preventDefault();
      if (this.args.onChange) {
        this.args.onChange(tabId);
      }
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulsp-tabpanel">
    <ul class="ulsp-tabpanel-header fxb fvc gp0 mgb6" role="tablist">
      {{#each @tabs as |tab|}}
        <li class="ulsp-tabpanel-header-item" role="presentation">
          <a
            href="#"
            role="tab"
            aria-selected={{this.isActive tab.id}}
            class="pd4 fg-text-secondary text-decoration-none  font-size16 {{if (this.isActive tab.id) 'active' ''}}"
            {{on "click" (fn this.handleTabClick tab.id)}}
          >
            {{tab.label}}
          </a>
        </li>
      {{/each}}
    </ul>
    <div class="ulsp-tabpanel-content">
      {{yield @activeTab}}
    </div>
  </div>
  */
  {
    "id": "U0RPjhER",
    "block": "[[[10,0],[14,0,\"ulsp-tabpanel\"],[12],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"ulsp-tabpanel-header fxb fvc gp0 mgb6\"],[14,\"role\",\"tablist\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,1]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[14,0,\"ulsp-tabpanel-header-item\"],[14,\"role\",\"presentation\"],[12],[1,\"\\n        \"],[11,3],[24,6,\"#\"],[24,\"role\",\"tab\"],[16,\"aria-selected\",[28,[30,0,[\"isActive\"]],[[30,2,[\"id\"]]],null]],[16,0,[29,[\"pd4 fg-text-secondary text-decoration-none  font-size16 \",[52,[28,[30,0,[\"isActive\"]],[[30,2,[\"id\"]]],null],\"active\",\"\"]]]],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"handleTabClick\"]],[30,2,[\"id\"]]],null]],null],[12],[1,\"\\n          \"],[1,[30,2,[\"label\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"ulsp-tabpanel-content\"],[12],[1,\"\\n    \"],[18,4,[[30,3]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@tabs\",\"tab\",\"@activeTab\",\"&default\"],[\"each\",\"-track-array\",\"if\",\"yield\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-tab.js",
    "scope": () => [_modifier.on, _helper.fn],
    "isStrictMode": true
  }), _DocTabComponent), _DocTabComponent), _applyDecoratedDescriptor(_class.prototype, "handleTabClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTabClick"), _class.prototype), _class);
});
;define("ulx-ember/components/common/doc-main/foundation-layout", ["exports", "@glimmer/component", "@ember/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _FoundationLayoutComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class FoundationLayoutComponent extends _component.default {}
  _exports.default = FoundationLayoutComponent;
  _FoundationLayoutComponent = FoundationLayoutComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="doc-foundation-page pdx10">
    <header class="doc-foundation-page__header mgb8">
      <h3 class="mgt0 mgb2 bold-font">{{@title}}</h3>
      {{#if @description}}
        <p class="fg-text-secondary mgt0">{{@description}}</p>
      {{/if}}
    </header>
    <div class="doc-foundation-page__content">
      {{yield}}
    </div>
  </div>
  */
  {
    "id": "WwMmcyiz",
    "block": "[[[10,0],[14,0,\"doc-foundation-page pdx10\"],[12],[1,\"\\n  \"],[10,\"header\"],[14,0,\"doc-foundation-page__header mgb8\"],[12],[1,\"\\n    \"],[10,\"h3\"],[14,0,\"mgt0 mgb2 bold-font\"],[12],[1,[30,1]],[13],[1,\"\\n\"],[41,[30,2],[[[1,\"      \"],[10,2],[14,0,\"fg-text-secondary mgt0\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"doc-foundation-page__content\"],[12],[1,\"\\n    \"],[18,3,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@title\",\"@description\",\"&default\"],[\"if\",\"yield\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/foundation-layout.js",
    "isStrictMode": true
  }), _FoundationLayoutComponent);
});
;define("ulx-ember/components/common/doc-main/foundation-section", ["exports", "@glimmer/component", "@ember/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _FoundationSectionComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class FoundationSectionComponent extends _component.default {}
  _exports.default = FoundationSectionComponent;
  _FoundationSectionComponent = FoundationSectionComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <section id={{@id}} class="uls-foundation-section mgb10">
    <h3 class="bold-font mgt0 mgb2">{{@title}}</h3>
    <header class="mgb2">
      {{#if @subtitle}}
        <p class="uls-foundation-section__subtitle mgb5 font-regular fg-text-secondary mgr0">
          {{@subtitle}}
        </p>
      {{/if}}
    </header>
    <div class="uls-foundation-section__content w-100p">
      {{yield}}
    </div>
  </section>
  */
  {
    "id": "zMY2Twro",
    "block": "[[[10,\"section\"],[15,1,[30,1]],[14,0,\"uls-foundation-section mgb10\"],[12],[1,\"\\n  \"],[10,\"h3\"],[14,0,\"bold-font mgt0 mgb2\"],[12],[1,[30,2]],[13],[1,\"\\n  \"],[10,\"header\"],[14,0,\"mgb2\"],[12],[1,\"\\n\"],[41,[30,3],[[[1,\"      \"],[10,2],[14,0,\"uls-foundation-section__subtitle mgb5 font-regular fg-text-secondary mgr0\"],[12],[1,\"\\n        \"],[1,[30,3]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-section__content w-100p\"],[12],[1,\"\\n    \"],[18,4,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@id\",\"@title\",\"@subtitle\",\"&default\"],[\"if\",\"yield\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/foundation-section.js",
    "isStrictMode": true
  }), _FoundationSectionComponent);
});
;define("ulx-ember/components/common/doc-main/rich-text", ["exports", "@glimmer/component", "@ember/component", "@ember/template-factory"], function (_exports, _component, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _RichTextComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class RichTextComponent extends _component.default {
    get isSpan() {
      return this.args.as === 'span';
    }
    get htmlContent() {
      // Convert code tags to proper HTML with styling
      if (typeof this.args.content === 'string') {
        return this.args.content.replace(/<code>/g, '<code class="fg-primary bg-layer1 pdx2 pdy1 rds2">').replace(/<\/code>/g, '</code>');
      }
      return this.args.content;
    }
  }
  _exports.default = RichTextComponent;
  _RichTextComponent = RichTextComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="mgb3">
    {{#if this.isSpan}}
    <span>
      {{{this.htmlContent}}}
    </span>
  {{else}}
    <div>
      {{{this.htmlContent}}}
    </div>
  {{/if}}
  </div>
  */
  {
    "id": "lt4F+HCE",
    "block": "[[[10,0],[14,0,\"mgb3\"],[12],[1,\"\\n\"],[41,[30,0,[\"isSpan\"]],[[[1,\"  \"],[10,1],[12],[1,\"\\n    \"],[2,[30,0,[\"htmlContent\"]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[10,0],[12],[1,\"\\n    \"],[2,[30,0,[\"htmlContent\"]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]],[13]],[],[\"if\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/rich-text.js",
    "isStrictMode": true
  }), _RichTextComponent);
});
;define("ulx-ember/components/elements/uls-progress-bar/index", ["exports", "ulx-components/components/elements/uls-progress-bar/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/uls-progress-bar/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/uls-tieredmenu/index", ["exports", "ulx-components/components/elements/uls-tieredmenu/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/uls-tieredmenu/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/uls-tieredmenu/submenu", ["exports", "ulx-components/components/elements/uls-tieredmenu/submenu"], function (_exports, _submenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _submenu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/uls-tieredmenu/submenu"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-button/index", ["exports", "ulx-components/components/elements/ulx-button/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-button/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-icon-input/index", ["exports", "ulx-components/components/elements/ulx-icon-input/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-icon-input/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-icon/index", ["exports", "ulx-components/components/elements/ulx-icon/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-icon/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-input/index", ["exports", "ulx-components/components/elements/ulx-input/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-input/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-progressspinner/index", ["exports", "ulx-components/components/elements/ulx-progressspinner/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-progressspinner/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-textarea/index", ["exports", "ulx-components/components/elements/ulx-textarea/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-textarea/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/modules/ulx-toast/index", ["exports", "ulx-components/components/modules/ulx-toast/index"], function (_exports, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _index.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/modules/ulx-toast/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/uls-tieredmenu", ["exports", "ulx-components/components/uls-tieredmenu"], function (_exports, _ulsTieredmenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulsTieredmenu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/uls-tieredmenu"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-button-group", ["exports", "ulx-components/components/ulx-button-group"], function (_exports, _ulxButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxButtonGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-button-group"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-button", ["exports", "ulx-components/components/ulx-button"], function (_exports, _ulxButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-button"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-docs-header", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ember-modifier", "@ember/modifier", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _emberModifier, _modifier, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _UlxDocsHeaderComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ember-modifier",0,"@ember/modifier",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let UlxDocsHeaderComponent = _exports.default = (_class = (_UlxDocsHeaderComponent = class UlxDocsHeaderComponent extends _component.default {
    constructor() {
      super(...arguments);
      // Initialize dark mode from localStorage or system preference
      _initializerDefineProperty(this, "isSticky", _descriptor, this);
      _initializerDefineProperty(this, "isDarkMode", _descriptor2, this);
      _defineProperty(this, "setupScrollObserver", (0, _emberModifier.modifier)(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          // Add sticky class when scrolled past a threshold (e.g., 50px)
          this.isSticky = scrollPosition > 50;
        };
        // Set initial state
        handleScroll();
        // Add scroll listener
        window.addEventListener('scroll', handleScroll, {
          passive: true
        });
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }));
      this.initializeDarkMode();
    }
    initializeDarkMode() {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const savedTheme = localStorage.getItem('ulx-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || !savedTheme && prefersDark) {
          this.isDarkMode = true;
          document.body.classList.add('ulx-dark-mode');
        } else {
          this.isDarkMode = false;
          document.body.classList.remove('ulx-dark-mode');
        }
      }
    }
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        if (this.isDarkMode) {
          document.body.classList.add('ulx-dark-mode');
          localStorage.setItem('ulx-theme', 'dark');
        } else {
          document.body.classList.remove('ulx-dark-mode');
          localStorage.setItem('ulx-theme', 'light');
        }
      }
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div
    class="ulsp-topbar h64 pd1 ulx-grid col-1 w-100p
      {{if this.isSticky 'sticky' ''}}"
    {{this.setupScrollObserver}}
  >
    <header class="ulx-container-fluid fxb fvc fsb">
      {{! LEFT: Title }}
      <div class="t-left">
        <div class="t-logo">
          <h3 class="bold-font">ULX
            <span class="fg-primary">EMBER</span>
          </h3>
        </div>
      </div>
  
      {{! RIGHT: Action Buttons }}
      <div class="t-right fxb fvc gp2">
        {{! Search Button }}
        <button
          type="button"
          class="ulx-button secondary outlined m-size fxb fvc gp1"
          aria-haspopup="dialog"
          aria-expanded="false"
        >
          <span class="fg-text-secondary">Search docs</span>
          <span class="t-key-hint mgl2">⌘ K</span>
        </button>
  
        {{! Download Button }}
        <button
          type="button"
          class="ulx-button primary fxb fvc gp1 m-size"
          aria-haspopup="menu"
          aria-controls="doc-download-menu"
        >
          <span>Download ZIP</span>
        </button>
  
        {{! Theme Toggle Button }}
  
        <button
          type="button"
          aria-label={{if
            this.isDarkMode
            "Switch to light theme"
            "Switch to dark theme"
          }}
          class="pd2 --ulxbutton secondary outlined icon-only s-size"
          data-pc-name="button"
          data-pc-section="root"
          {{on "click" this.toggleDarkMode}}
        >
          <i class="--ulxicons s18" aria-hidden="true">{{if
              this.isDarkMode
              "☀️"
              "🌙"
            }}</i>
          <span
            class="--ulxbutton-label"
            data-pc-section="label"
          >&nbsp;</span>
          <span
            role="presentation"
            aria-hidden="true"
            class="--ulxbutton-ink"
            data-pc-name="ripple"
            data-pc-section="root"
          ></span>
        </button>
      </div>
    </header>
  </div>
  */
  {
    "id": "HyZ4/uV4",
    "block": "[[[11,0],[16,0,[29,[\"ulsp-topbar h64 pd1 ulx-grid col-1 w-100p\\n    \",[52,[30,0,[\"isSticky\"]],\"sticky\",\"\"]]]],[4,[30,0,[\"setupScrollObserver\"]],null,null],[12],[1,\"\\n  \"],[10,\"header\"],[14,0,\"ulx-container-fluid fxb fvc fsb\"],[12],[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"t-left\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"t-logo\"],[12],[1,\"\\n        \"],[10,\"h3\"],[14,0,\"bold-font\"],[12],[1,\"ULX\\n          \"],[10,1],[14,0,\"fg-primary\"],[12],[1,\"EMBER\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"t-right fxb fvc gp2\"],[12],[1,\"\\n\"],[1,\"      \"],[10,\"button\"],[14,0,\"ulx-button secondary outlined m-size fxb fvc gp1\"],[14,\"aria-haspopup\",\"dialog\"],[14,\"aria-expanded\",\"false\"],[14,4,\"button\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"fg-text-secondary\"],[12],[1,\"Search docs\"],[13],[1,\"\\n        \"],[10,1],[14,0,\"t-key-hint mgl2\"],[12],[1,\"⌘ K\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,\"button\"],[14,0,\"ulx-button primary fxb fvc gp1 m-size\"],[14,\"aria-haspopup\",\"menu\"],[14,\"aria-controls\",\"doc-download-menu\"],[14,4,\"button\"],[12],[1,\"\\n        \"],[10,1],[12],[1,\"Download ZIP\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"\\n      \"],[11,\"button\"],[16,\"aria-label\",[52,[30,0,[\"isDarkMode\"]],\"Switch to light theme\",\"Switch to dark theme\"]],[24,0,\"pd2 --ulxbutton secondary outlined icon-only s-size\"],[24,\"data-pc-name\",\"button\"],[24,\"data-pc-section\",\"root\"],[24,4,\"button\"],[4,[32,0],[\"click\",[30,0,[\"toggleDarkMode\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"--ulxicons s18\"],[14,\"aria-hidden\",\"true\"],[12],[1,[52,[30,0,[\"isDarkMode\"]],\"☀️\",\"🌙\"]],[13],[1,\"\\n        \"],[10,1],[14,0,\"--ulxbutton-label\"],[14,\"data-pc-section\",\"label\"],[12],[1,\" \"],[13],[1,\"\\n        \"],[10,1],[14,\"role\",\"presentation\"],[14,\"aria-hidden\",\"true\"],[14,0,\"--ulxbutton-ink\"],[14,\"data-pc-name\",\"ripple\"],[14,\"data-pc-section\",\"root\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"if\"]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/ulx-docs-header.js",
    "scope": () => [_modifier.on],
    "isStrictMode": true
  }), _UlxDocsHeaderComponent), _UlxDocsHeaderComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "isSticky", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isDarkMode", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleDarkMode", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleDarkMode"), _class.prototype), _class);
});
;define("ulx-ember/components/ulx-icon-input", ["exports", "ulx-components/components/ulx-icon-input"], function (_exports, _ulxIconInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxIconInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-icon-input"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-icon", ["exports", "ulx-components/components/ulx-icon"], function (_exports, _ulxIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-icon"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-input", ["exports", "ulx-components/components/ulx-input"], function (_exports, _ulxInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-input"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-progressbar", ["exports", "ulx-components/components/ulx-progressbar"], function (_exports, _ulxProgressbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxProgressbar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-progressbar"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-progressspinner", ["exports", "ulx-components/components/ulx-progressspinner"], function (_exports, _ulxProgressspinner) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxProgressspinner.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-progressspinner"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-react-bridge", ["exports", "@glimmer/component", "ember-modifier", "react-dom/client", "react", "@ember/component", "@ember/template-factory"], function (_exports, _component, _emberModifier, _client, _react, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _UlxReactBridge;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ember-modifier",0,"react-dom/client",0,"react",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // app/components/ulx-react-bridge.gjs
  class UlxReactBridge extends _component.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "root", null);
      _defineProperty(this, "mount", (0, _emberModifier.modifier)(element => {
        if (!this.args.component) return;
        this.root = (0, _client.createRoot)(element);
        this.root.render(_react.default.createElement(this.args.component, this.args.props ?? {}));
        return () => {
          this.root?.unmount();
          this.root = null;
        };
      }));
    }
  }
  _exports.default = UlxReactBridge;
  _UlxReactBridge = UlxReactBridge;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <!-- IMPORTANT: React mounts into THIS div -->
  <div {{this.mount}}></div>
  */
  {
    "id": "Vcw7URX5",
    "block": "[[[3,\" IMPORTANT: React mounts into THIS div \"],[1,\"\\n\"],[11,0],[4,[30,0,[\"mount\"]],null,null],[12],[13]],[],[]]",
    "moduleName": "/Users/shakthi-15519/Documents/backstage/ulx/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/ulx-react-bridge.js",
    "isStrictMode": true
  }), _UlxReactBridge);
});
;define("ulx-ember/components/ulx-textarea", ["exports", "ulx-components/components/ulx-textarea"], function (_exports, _ulxTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxTextarea.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-textarea"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-toast", ["exports", "ulx-components/components/ulx-toast"], function (_exports, _ulxToast) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxToast.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-toast"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("ulx-ember/constants/docs/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DocNavItems = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // DOCUMENTATION NAVIGATION ITEMS
  // ==========================================================================
  // Simplified navigation structure for Ember docs
  // TODO: Can be enhanced to auto-generate from component registry

  const DocNavItems = _exports.DocNavItems = [{
    menuTitle: 'Getting Started',
    icon: 'pi pi-home',
    to: '/walkthrough',
    route: 'walkthrough'
  }, {
    menuTitle: 'Foundation',
    icon: 'pi pi-palette',
    children: [{
      menuItem: 'Typography',
      to: '/foundation/typography',
      route: 'foundation.typography'
    }, {
      menuItem: 'Colors',
      to: '/foundation/colors',
      route: 'foundation.colors'
    }]
  }, {
    menuTitle: 'Utilities',
    icon: 'pi pi-sliders-h',
    children: [{
      menuItem: 'Border',
      to: '/utilities/border',
      route: 'utilities.border'
    }, {
      menuItem: 'Clear',
      to: '/utilities/clear',
      route: 'utilities.clear'
    }, {
      menuItem: 'Color',
      to: '/utilities/color',
      route: 'utilities.color'
    }, {
      menuItem: 'Cursor',
      to: '/utilities/cursor',
      route: 'utilities.cursor'
    }, {
      menuItem: 'Display',
      to: '/utilities/display',
      route: 'utilities.display'
    }, {
      menuItem: 'Filter',
      to: '/utilities/filter',
      route: 'utilities.filter'
    }, {
      menuItem: 'Flex',
      to: '/utilities/flex',
      route: 'utilities.flex'
    }, {
      menuItem: 'Float',
      to: '/utilities/float',
      route: 'utilities.float'
    }, {
      menuItem: 'Gap',
      to: '/utilities/gap',
      route: 'utilities.gap'
    }, {
      menuItem: 'Grid',
      to: '/utilities/grid',
      route: 'utilities.grid'
    }, {
      menuItem: 'Hover',
      to: '/utilities/hover',
      route: 'utilities.hover'
    }, {
      menuItem: 'Line Clamp',
      to: '/utilities/line-clamp',
      route: 'utilities.line-clamp'
    }, {
      menuItem: 'Object Fit',
      to: '/utilities/object-fit',
      route: 'utilities.object-fit'
    }, {
      menuItem: 'Opacity',
      to: '/utilities/opacity',
      route: 'utilities.opacity'
    }, {
      menuItem: 'Overflow',
      to: '/utilities/overflow',
      route: 'utilities.overflow'
    }, {
      menuItem: 'Pointer Events',
      to: '/utilities/pointer-events',
      route: 'utilities.pointer-events'
    }, {
      menuItem: 'Position',
      to: '/utilities/position',
      route: 'utilities.position'
    }, {
      menuItem: 'Shadow',
      to: '/utilities/shadow',
      route: 'utilities.shadow'
    }, {
      menuItem: 'Size',
      to: '/utilities/size',
      route: 'utilities.size'
    }, {
      menuItem: 'Space',
      to: '/utilities/space',
      route: 'utilities.space'
    }, {
      menuItem: 'Text Align',
      to: '/utilities/text-align',
      route: 'utilities.text-align'
    }, {
      menuItem: 'Text Decoration',
      to: '/utilities/text-decoration',
      route: 'utilities.text-decoration'
    }, {
      menuItem: 'Text Transform',
      to: '/utilities/text-transform',
      route: 'utilities.text-transform'
    }, {
      menuItem: 'User Select',
      to: '/utilities/user-select',
      route: 'utilities.user-select'
    }, {
      menuItem: 'Vertical Align',
      to: '/utilities/vertical-align',
      route: 'utilities.vertical-align'
    }, {
      menuItem: 'Visibility',
      to: '/utilities/visibility',
      route: 'utilities.visibility'
    }, {
      menuItem: 'White Space',
      to: '/utilities/white-space',
      route: 'utilities.white-space'
    }, {
      menuItem: 'Word Break',
      to: '/utilities/word-break',
      route: 'utilities.word-break'
    }, {
      menuItem: 'Z-Index',
      to: '/utilities/z-index',
      route: 'utilities.z-index'
    }]
  }, {
    menuTitle: 'Elements',
    icon: 'pi pi-list',
    children: [{
      category: 'Form',
      items: [{
        menuItem: 'Input',
        to: '/components/elements/input',
        route: 'components.elements.input'
      }, {
        menuItem: 'IconInput',
        to: '/components/elements/ulx-icon-input',
        route: 'components.elements.ulx-icon-input'
      }, {
        menuItem: 'InputGroup',
        to: '/components/elements/input-group',
        route: 'components.elements.input-group'
      }]
    }, {
      category: 'Button',
      items: [{
        menuItem: 'Button',
        to: '/components/elements/button',
        route: 'components.elements.button'
      }]
    }, {
      category: 'Icons',
      items: [{
        menuItem: 'Icon',
        to: '/components/elements/icon',
        route: 'components.elements.icon'
      }]
    }, {
      category: 'Menu',
      items: [{
        menuItem: 'TieredMenu',
        to: '/components/elements/tieredmenu',
        route: 'components.elements.tieredmenu'
      }]
    }, {
      category: 'Misc',
      items: [{
        menuItem: 'Progress Bar',
        to: '/components/elements/progressbar',
        route: 'components.elements.progressbar'
      }, {
        menuItem: 'ProgressSpinner',
        to: '/components/elements/progressspinner',
        route: 'components.elements.progressspinner'
      }]
    }, {
      category: 'Message',
      items: [{
        menuItem: 'Toast',
        to: '/components/modules/toast',
        route: 'components.modules.toast'
      }]
    }]
  }, {
    menuTitle: 'Collections',
    icon: 'pi pi-list',
    children: [{
      category: 'Form',
      items: []
    }, {
      category: 'Menu',
      items: [{
        menuItem: 'test-comp',
        to: '/components/collections/test-comp',
        route: 'components.collections.test-comp'
      }]
    }]
  }];
});
;define("ulx-ember/controllers/components/collections", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsCollectionsController = _exports.default = (_class = class ComponentsCollectionsController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'passthrough',
        label: 'PASS THROUGH'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isPassthroughTab() {
      return this.activeTab === 'passthrough';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/collections/test-comp", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsCollectionsTestCompController = _exports.default = (_class = class ComponentsCollectionsTestCompController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'passthrough',
        label: 'PASS THROUGH'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isPassthroughTab() {
      return this.activeTab === 'passthrough';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/button", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsButtonController = _exports.default = (_class = class ComponentsElementsButtonController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'builder',
        label: 'BUILDER'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isBuilderTab() {
      return this.activeTab === 'builder';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/icon", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsIconController = _exports.default = (_class = class ComponentsElementsIconController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'builder',
        label: 'BUILDER'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isBuilderTab() {
      return this.activeTab === 'builder';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/input-group", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsInputGroupController = _exports.default = (_class = class ComponentsElementsInputGroupController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'builder',
        label: 'BUILDER'
      }, {
        id: 'passthrough',
        label: 'PASS THROUGH'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isPassthroughTab() {
      return this.activeTab === 'passthrough';
    }
    get isBuilderTab() {
      return this.activeTab === 'builder';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/input", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsInputController = _exports.default = (_class = class ComponentsElementsInputController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'builder',
        label: 'BUILDER'
      }, {
        id: 'passthrough',
        label: 'PASS THROUGH'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isBuilderTab() {
      return this.activeTab === 'builder';
    }
    get isPassthroughTab() {
      return this.activeTab === 'passthrough';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/progressbar", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsProgressbarController = _exports.default = (_class = class ComponentsElementsProgressbarController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'builder',
        label: 'BUILDER'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isBuilderTab() {
      return this.activeTab === 'builder';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/progressspinner", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsProgressspinnerController = _exports.default = (_class = class ComponentsElementsProgressspinnerController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'builder',
        label: 'BUILDER'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isBuilderTab() {
      return this.activeTab === 'builder';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/tieredmenu", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsTieredmenuController = _exports.default = (_class = class ComponentsElementsTieredmenuController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'passthrough',
        label: 'PASS THROUGH'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isPassthroughTab() {
      return this.activeTab === 'passthrough';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/elements/ulx-icon-input", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsElementsUlxIconInputController = _exports.default = (_class = class ComponentsElementsUlxIconInputController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'builder',
        label: 'BUILDER'
      }, {
        id: 'passthrough',
        label: 'PASS THROUGH'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isPassthroughTab() {
      return this.activeTab === 'passthrough';
    }
    get isBuilderTab() {
      return this.activeTab === 'builder';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/controllers/components/modules/toast", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ComponentsModulesToastController = _exports.default = (_class = class ComponentsModulesToastController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "activeTab", _descriptor, this);
      _defineProperty(this, "tabs", [{
        id: 'features',
        label: 'FEATURES'
      }, {
        id: 'theming',
        label: 'THEMING'
      }, {
        id: 'passthrough',
        label: 'PASS THROUGH'
      }]);
    }
    get isFeaturesTab() {
      return this.activeTab === 'features';
    }
    get isThemingTab() {
      return this.activeTab === 'theming';
    }
    get isPassthroughTab() {
      return this.activeTab === 'passthrough';
    }
    onTabChange(tabId) {
      this.activeTab = tabId;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "activeTab", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'features';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onTabChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "onTabChange"), _class.prototype), _class);
});
;define("ulx-ember/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("ulx-ember/deprecation-workflow", ["ember-cli-deprecation-workflow"], function (_emberCliDeprecationWorkflow) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-deprecation-workflow"eaimeta@70e063a35619d71f
  /**
   * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
   */
  (0, _emberCliDeprecationWorkflow.default)({
    /**
      false by default, but if a developer / team wants to be more aggressive about being proactive with
      handling their deprecations, this should be set to "true"
    */
    throwOnUnhandled: false,
    workflow: [
      /* ... handlers ... */
      /* to generate this list, run your app for a while (or run the test suite),
       * and then run in the browser console:
       *
       *    deprecationWorkflow.flushDeprecations()
       *
       * And copy the handlers here
       */
      /* example: */
      /* { handler: 'silence', matchId: 'template-action' }, */
    ]
  });
});
;define("ulx-ember/documentation/components/collections/progress-bar/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressBar } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxProgressBar @value={{50}} @size="m" />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/collections/progress-bar/snippets/Dynamic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';
import willDestroy from '@ember/render-modifiers/modifiers/will-destroy';
import { UlxProgressBar, UlxToast } from 'ulx-components';

const INTERVAL_MS = 2000;

export default class DynamicProgressBarDemo extends Component {
  didInsert = didInsert;
  willDestroy = willDestroy;

  @tracked value = 0;
  @tracked messages = [];

  _interval = null;

  @action
  startInterval() {
    this._interval = setInterval(() => this.tick(), INTERVAL_MS);
  }

  @action
  clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  tick() {
    this.value += Math.floor(Math.random() * 20) + 1;
    if (this.value >= 100) {
      this.value = 100;
      this.messages = [
        ...this.messages,
        {
          id: \`msg-\${Date.now()}\`,
          severity: 'info',
          summary: 'Success',
          detail: 'Process Completed',
        },
      ];
      this.clearInterval();
    }
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div
      class="pda4 fxb column gp8"
      {{this.didInsert this.startInterval}}
      {{this.willDestroy this.clearInterval}}
    >
      <UlxProgressBar @value={{this.value}} @size="m" />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/progress-bar/snippets/Indeterminate.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressBar } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxProgressBar @mode="indeterminate" @size="m" aria-label="Loading" />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/collections/progress-bar/snippets/Template.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressBar } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxProgressBar @value={{40}} @size="m">
      <:content as |value|>
        {{value}}/<b>100</b>
      </:content>
    </UlxProgressBar>
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/collections/progress-spinner/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressSpinner } from 'ulx-components';

<template><UlxProgressSpinner @size="xl" @ariaLabel="Loading" /></template>

`;
});
;define("ulx-ember/documentation/components/collections/progress-spinner/snippets/Custom.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxProgressSpinner } from 'ulx-components';

export default class DemoProgressSpinnerCustom extends Component {
  get size() {
    return this.args.size ?? 'm';
  }

  get customClass() {
    return this.args.customClass;
  }

  <template>
    <UlxProgressSpinner
      @size={{this.size}}
      @customClass={{this.customClass}}
      @ariaLabel="Loading"
    />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/progress-spinner/snippets/Sizes.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressSpinner } from 'ulx-components';

<template>
  <div class="fxb fvc gp4">
    <UlxProgressSpinner @size="xs" aria-hidden="true" />
    <UlxProgressSpinner @size="s" aria-hidden="true" />
    <UlxProgressSpinner @size="m" @ariaLabel="Loading" />
    <UlxProgressSpinner @size="l" aria-hidden="true" />
    <UlxProgressSpinner @size="xl" aria-hidden="true" />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/collections/test-comp/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/collections/test-comp/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.TestCompFeatureItems = void 0;
  _exports.default = TestCompFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/collections/test-comp/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // TestComp Feature Items
  // ==========================================================================
  const TestCompFeatureItems = _exports.TestCompFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>TestComp</code> component."
      }
    },
    demo: {
      component: null,
      // Import section doesn't need demo
      props: {
        source: _imports.ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  }, {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the TestComp component."
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  }];
  function TestCompFeatures() {
    return TestCompFeatureItems;
  }
});
;define("ulx-ember/documentation/components/collections/test-comp/imports", ["exports", "ulx-ember/components/Demo/TestComp/Basic", "ulx-ember/documentation/components/collections/test-comp/snippets/Import.gjs", "ulx-ember/documentation/components/collections/test-comp/snippets/Basic.gjs"], function (_exports, _Basic, _Import, _Basic2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/TestComp/Basic",0,"ulx-ember/documentation/components/collections/test-comp/snippets/Import.gjs",0,"ulx-ember/documentation/components/collections/test-comp/snippets/Basic.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // TestComp Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all TestComp demo components
  // Demo Components
  // Import source (for import section)
  // TestComp Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all TestComp demo source files
});
;define("ulx-ember/documentation/components/collections/test-comp/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // TESTCOMP COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for TestComp component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Collections',
    subCategory: 'Menu',
    menuItem: 'test-comp',
    routeBase: '/components/collections/test-comp',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'test-comp',
    subHeader: 'test-comp is a component for user interaction.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }],
    // Import message for the component
    importMsg: "import { TestComp } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: "TestComp component description for accessibility.",
      example: "<TestComp />"
    }
  };
});
;define("ulx-ember/documentation/components/collections/test-comp/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BasicTestCompDemo extends Component {
  @tracked activeItem = null;

  constructor() {
    super(...arguments);
    // Initialize with first item active
    if (this.items && this.items.length > 0) {
      this.activeItem = this.items[0];
    }
  }

  get items() {
    return [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' },
      { label: 'Item 3', value: 'item3' }
    ];
  }

  @action
  handleItemClick(item) {
    this.activeItem = item;
  }
}

`;
});
;define("ulx-ember/documentation/components/collections/test-comp/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { TestComp } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/collections/toast/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class BasicToastDemo extends Component {
  @tracked messages = [];

  @action
  showToast() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}\`,
        severity: 'info',
        summary: 'Info',
        detail: 'This is a basic toast message.',
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxButton @label="Show toast" @severity="primary" {{on "click" this.showToast}} />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/toast/snippets/Multiple.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class MultipleToastDemo extends Component {
  @tracked messages = [];

  @action
  showMultiple() {
    const now = Date.now();
    const newMessages = [
      {
        id: \`msg-\${now}-1\`,
        severity: 'info',
        summary: 'Info',
        detail: 'Info message.',
      },
      {
        id: \`msg-\${now}-2\`,
        severity: 'success',
        summary: 'Success',
        detail: 'Success message.',
      },
      {
        id: \`msg-\${now}-3\`,
        severity: 'warn',
        summary: 'Warn',
        detail: 'Warn message.',
      },
      {
        id: \`msg-\${now}-4\`,
        severity: 'error',
        summary: 'Error',
        detail: 'Error message.',
      },
    ];
    this.messages = [...this.messages, ...newMessages];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxButton
        @label="Multiple"
        @severity="warning"
        {{on "click" this.showMultiple}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/toast/snippets/Positions.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

const POSITIONS = [
  'top-left',
  'top-center',
  'top-right',
  'center',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export default class PositionsToastDemo extends Component {
  /** Messages per position: { 'top-left': [...], 'top-right': [...], ... } */
  @tracked messagesByPosition = {};

  /** Array of { position, messages } for template; use getter so @messages is tracked. */
  get positionEntries() {
    const byPos = this.messagesByPosition;
    return POSITIONS.map((pos) => ({
      position: pos,
      messages: byPos[pos] ?? [],
    }));
  }

  @action
  showToast(pos) {
    const messages = this.messagesByPosition[pos] ?? [];
    const newMessage = {
      id: \`msg-\${Date.now()}-\${pos}\`,
      severity: 'info',
      summary: 'Position',
      detail: \`Toast at \${pos}.\`,
    };
    this.messagesByPosition = {
      ...this.messagesByPosition,
      [pos]: [...messages, newMessage],
    };
  }

  @action
  removeMessage(position, message) {
    const messages = (this.messagesByPosition[position] ?? []).filter(
      (m) => m.id !== message.id,
    );
    this.messagesByPosition = {
      ...this.messagesByPosition,
      [position]: messages,
    };
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        {{#each POSITIONS as |pos|}}
          <UlxButton
            @label={{pos}}
            @severity="secondary"
            {{on "click" (fn this.showToast pos)}}
          />
        {{/each}}
      </div>
      {{#each this.positionEntries key="position" as |entry|}}
        <UlxToast
          @messages={{entry.messages}}
          @position={{entry.position}}
          @onClose={{fn this.removeMessage entry.position}}
        />
      {{/each}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/toast/snippets/Severities.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class SeveritiesToastDemo extends Component {
  @tracked messages = [];

  @action
  addMessage(severity) {
    const labels = {
      info: 'Info',
      success: 'Success',
      warn: 'Warning',
      error: 'Error',
      secondary: 'Secondary',
      contrast: 'Contrast',
    };
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-\${severity}\`,
        severity,
        summary: labels[severity] ?? severity,
        detail: \`\${labels[severity] ?? severity} message.\`,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        <UlxButton @label="Info" @severity="info" {{on "click" (fn this.addMessage "info")}} />
        <UlxButton @label="Success" @severity="success" {{on "click" (fn this.addMessage "success")}} />
        <UlxButton @label="Warn" @severity="warning" {{on "click" (fn this.addMessage "warn")}} />
        <UlxButton @label="Error" @severity="danger" {{on "click" (fn this.addMessage "error")}} />
        <UlxButton @label="Secondary" @severity="secondary" {{on "click" (fn this.addMessage "secondary")}} />
        <UlxButton @label="Contrast" {{on "click" (fn this.addMessage "contrast")}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/toast/snippets/Sticky.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class StickyToastDemo extends Component {
  @tracked messages = [];

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-sticky\`,
        severity: 'info',
        summary: 'Sticky',
        detail: 'This message stays visible until you close it.',
        sticky: true,
      },
    ];
  }

  @action
  showWithLife() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-life\`,
        severity: 'info',
        summary: 'Auto-close',
        detail: 'This message disappears after 3000ms.',
      },
    ];
  }

  @action
  clearAll() {
    this.messages = [];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        <UlxButton
          @label="Sticky"
          @severity="secondary"
          {{on "click" this.showSticky}}
        />
        <UlxButton
          @label="Auto-close (3s)"
          @severity="secondary"
          {{on "click" this.showWithLife}}
        />
        <UlxButton
          @label="Clear"
          @severity="secondary"
          {{on "click" this.clearAll}}
        />
      </div>
      <UlxToast
        @messages={{this.messages}}
        @life={{3000}}
        @onClose={{this.removeMessage}}
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/toast/snippets/Template.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class TemplateToastDemo extends Component {
  @tracked messages = [];

  @action
  showTemplateToast() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-template\`,
        severity: 'success',
        summary: 'Can you send me the report?',
        sticky: true,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxButton
        @label="Confirm"
        @severity="primary"
        {{on "click" this.showTemplateToast}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}}>
        <:content as |message|>
          <div class="fxb column gp4">
            <span class="fw-semibold">Amy Elsner</span>
            <div class="fw-medium">{{message.summary}}</div>
            <UlxButton
              @label="Reply"
              @severity="success"
              @size="small"
              {{on "click" (fn this.removeMessage message)}}
            />
          </div>
        </:content>
      </UlxToast>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/collections/toast/snippets/Variants.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class VariantsToastDemo extends Component {
  @tracked messages = [];

  @action
  showElevated() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-elevated\`,
        severity: 'info',
        summary: 'Elevated',
        detail: 'Variant: elevated',
        variant: 'elevated',
      },
    ];
  }

  @action
  showFlat() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-flat\`,
        severity: 'success',
        summary: 'Flat',
        detail: 'Variant: flat',
        variant: 'flat',
      },
    ];
  }

  @action
  showOutlined() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-outlined\`,
        severity: 'warn',
        summary: 'Outlined',
        detail: 'Variant: outlined',
        variant: 'outlined',
      },
    ];
  }

  @action
  showNoIcon() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-noicon\`,
        severity: 'info',
        summary: 'No icon',
        detail: 'showIcon: false',
        showIcon: false,
      },
    ];
  }

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-sticky\`,
        severity: 'info',
        summary: 'Sticky',
        detail: 'Does not auto-close',
        sticky: true,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        <UlxButton @label="Elevated" @severity="primary" {{on "click" this.showElevated}} />
        <UlxButton @label="Flat" @severity="success" {{on "click" this.showFlat}} />
        <UlxButton @label="Outlined" @severity="warning" {{on "click" this.showOutlined}} />
        <UlxButton @label="No icon" @severity="secondary" {{on "click" this.showNoIcon}} />
        <UlxButton @label="Sticky" {{on "click" this.showSticky}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // Button Builder Schema
  // ==========================================================================
  // Drives the ComponentBuilder for the Button doc page

  const stateToProps = state => {
    return {
      label: state.label || 'Button',
      icon: state.icon || undefined,
      iconPos: state.iconPos,
      severity: state.severity,
      size: state.size || undefined,
      outlined: state.outlined,
      text: state.text,
      raised: state.raised,
      rounded: state.rounded,
      disabled: state.disabled,
      loading: state.loading,
      fluid: state.fluid,
      badge: state.badge || undefined
    };
  };
  const stateToSnippet = state => {
    const p = stateToProps(state);
    const attrs = [];
    if (p.label) attrs.push(`@label="${p.label}"`);
    if (p.icon) attrs.push(`@icon="${p.icon}"`);
    if (p.iconPos && p.iconPos !== 'left') attrs.push(`@iconPos="${p.iconPos}"`);
    if (p.severity && p.severity !== 'primary') attrs.push(`@severity="${p.severity}"`);
    if (p.size) attrs.push(`@size="${p.size}"`);
    if (p.outlined) attrs.push('@outlined={{true}}');
    if (p.text) attrs.push('@text={{true}}');
    if (p.raised) attrs.push('@raised={{true}}');
    if (p.rounded) attrs.push('@rounded={{true}}');
    if (p.disabled) attrs.push('@disabled={{true}}');
    if (p.loading) attrs.push('@loading={{true}}');
    if (p.fluid) attrs.push('@fluid={{true}}');
    if (p.badge) attrs.push(`@badge="${p.badge}"`);
    return attrs.length > 0 ? `<UlxButton\n  ${attrs.join('\n  ')}\n/>` : '<UlxButton />';
  };
  var _default = _exports.default = {
    componentName: 'UlxButton',
    importLine: "import { UlxButton } from 'ulx-components';",
    props: [{
      key: 'label',
      label: 'Label',
      type: 'text',
      default: 'Button'
    }, {
      key: 'severity',
      label: 'Severity',
      type: 'select',
      default: 'primary',
      options: [{
        value: 'primary',
        label: 'Primary'
      }, {
        value: 'secondary',
        label: 'Secondary'
      }, {
        value: 'success',
        label: 'Success'
      }, {
        value: 'info',
        label: 'Info'
      }, {
        value: 'warning',
        label: 'Warning'
      }, {
        value: 'help',
        label: 'Help'
      }, {
        value: 'danger',
        label: 'Danger'
      }]
    }, {
      key: 'icon',
      label: 'Icon',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: 'None'
      }, {
        value: 'search-icon',
        label: 'Search'
      }, {
        value: 'close-icon-01',
        label: 'Close'
      }, {
        value: 'ls-tick-icon',
        label: 'Tick'
      }, {
        value: 'comment-icon',
        label: 'Comment'
      }]
    }, {
      key: 'iconPos',
      label: 'Icon Position',
      type: 'radio',
      default: 'left',
      options: [{
        value: 'left',
        label: 'Left'
      }, {
        value: 'right',
        label: 'Right'
      }]
    }, {
      key: 'size',
      label: 'Size',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: 'Normal'
      }, {
        value: 'small',
        label: 'Small'
      }, {
        value: 'large',
        label: 'Large'
      }]
    }, {
      key: 'outlined',
      label: 'Outlined',
      type: 'checkbox',
      default: false
    }, {
      key: 'text',
      label: 'Text',
      type: 'checkbox',
      default: false
    }, {
      key: 'raised',
      label: 'Raised',
      type: 'checkbox',
      default: false
    }, {
      key: 'rounded',
      label: 'Rounded',
      type: 'checkbox',
      default: false
    }, {
      key: 'disabled',
      label: 'Disabled',
      type: 'checkbox',
      default: false
    }, {
      key: 'loading',
      label: 'Loading',
      type: 'checkbox',
      default: false
    }, {
      key: 'fluid',
      label: 'Fluid',
      type: 'checkbox',
      default: false
    }, {
      key: 'badge',
      label: 'Badge',
      type: 'text',
      default: ''
    }],
    stateToProps,
    stateToSnippet
  };
});
;define("ulx-ember/documentation/components/elements/button/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/button/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ButtonFeatureItems = void 0;
  _exports.default = ButtonFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/button/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Button Feature Items
  // ==========================================================================
  const ButtonFeatureItems = _exports.ButtonFeatureItems = [{
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>import</code> property is used to import the <code>Button</code> component.'
      }
    },
    demo: {
      component: null,
      // Import section doesn't need demo
      props: {
        source: _imports.ImportSource,
        snippetName: 'import',
        language: 'jsx'
      }
    }
  }, {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Basic</code> demo shows basic usage of the Button component with different severities.'
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: 'basic',
        language: 'handlebars'
      }
    }
  }, {
    id: 'link',
    sectionNav: 'Link',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Buttons can be rendered as anchor tags using <code>@link={{true}}</code> for navigation purposes.'
      }
    },
    demo: {
      component: _imports.LinkDemo,
      props: {
        source: _imports.LinkSource,
        snippetName: 'link',
        language: 'handlebars'
      }
    }
  }, {
    id: 'icons',
    sectionNav: 'Icons',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Buttons support icons with configurable position (left or right) and icon-only variants.'
      }
    },
    demo: {
      component: _imports.IconsDemo,
      props: {
        source: _imports.IconsSource,
        snippetName: 'icons',
        language: 'handlebars'
      }
    }
  }, {
    id: 'states',
    sectionNav: 'Loading',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'A button can show a loading state when <code>@loading</code> is true, displaying a spinner and preventing interaction.'
      }
    },
    demo: {
      component: _imports.StatesDemo,
      props: {
        source: _imports.StatesSource,
        snippetName: 'states',
        language: 'handlebars'
      }
    }
  }, {
    id: 'disabled',
    sectionNav: 'Disabled',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'A button can be rendered with a disabled state when the <code>disabled</code> property is present. The <code>disabled</code> property can be used to specify the disabled state of the button.'
      }
    },
    demo: {
      component: _imports.DisabledDemo,
      props: {
        source: _imports.DisabledSource,
        snippetName: 'disabled',
        language: 'handlebars'
      }
    }
  }, {
    id: 'severities',
    sectionNav: 'Severity',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Severities</code> demo shows all available button severities: primary, secondary, success, info, warning, help, and danger.'
      }
    },
    demo: {
      component: _imports.SeveritiesDemo,
      props: {
        source: _imports.SeveritiesSource,
        snippetName: 'severities',
        language: 'handlebars'
      }
    }
  }, {
    id: 'raised',
    sectionNav: 'Raised',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Raised</code> variant adds shadow to buttons for elevation effect.'
      }
    },
    demo: {
      component: _imports.RaisedDemo,
      props: {
        source: _imports.RaisedSource,
        snippetName: 'raised',
        language: 'handlebars'
      }
    }
  }, {
    id: 'raisedtext',
    sectionNav: 'RaisedText',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'A button can be rendered with raised and text state when <code>@raised</code> and <code>@text</code> are present. Use <code>@raised</code> for the elevation shadow and <code>@text</code> for the text-only (transparent background) style.'
      }
    },
    demo: {
      component: _imports.RaisedTextDemo,
      props: {
        source: _imports.RaisedTextSource,
        snippetName: 'raisedtext',
        language: 'handlebars'
      }
    }
  }, {
    id: 'rounded',
    sectionNav: 'Rounded',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Rounded</code> variant creates buttons with fully rounded corners for a modern pill-shaped appearance.'
      }
    },
    demo: {
      component: _imports.RoundedDemo,
      props: {
        source: _imports.RoundedSource,
        snippetName: 'rounded',
        language: 'handlebars'
      }
    }
  }, {
    id: 'text',
    sectionNav: 'Text',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Text</code> variant displays buttons with a transparent background, suitable for less prominent actions.'
      }
    },
    demo: {
      component: _imports.TextDemo,
      props: {
        source: _imports.TextSource,
        snippetName: 'text',
        language: 'handlebars'
      }
    }
  }, {
    id: 'outlined',
    sectionNav: 'Outlined',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Outlined</code> variant displays buttons with a transparent background and colored border.'
      }
    },
    demo: {
      component: _imports.OutlinedDemo,
      props: {
        source: _imports.OutlinedSource,
        snippetName: 'outlined',
        language: 'handlebars'
      }
    }
  }, {
    id: 'icononly',
    sectionNav: 'IconOnly',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'A button can be rendered with an icon only when <code>@icon</code> is present and no <code>@label</code> is passed. Icons use UlxIcon (font icons via <code>@iconComponentClass</code>). Use <code>aria-label</code> for accessibility.'
      }
    },
    demo: {
      component: _imports.IconOnlyDemo,
      props: {
        source: _imports.IconOnlySource,
        snippetName: 'icononly',
        language: 'handlebars'
      }
    }
  }, {
    id: 'badge',
    sectionNav: 'Badges',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Buttons support badges for displaying notifications, counts, or status indicators.'
      }
    },
    demo: {
      component: _imports.BadgeDemo,
      props: {
        source: _imports.BadgeSource,
        snippetName: 'badge',
        language: 'handlebars'
      }
    }
  }, {
    id: 'group',
    sectionNav: 'Group',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'A button can be rendered in a group when wrapped in <code>UlxButtonGroup</code>. Use <code>@orientation</code> for horizontal or vertical layout and <code>@size</code> for button size.'
      }
    },
    demo: {
      component: _imports.GroupDemo,
      props: {
        source: _imports.GroupSource,
        snippetName: 'group',
        language: 'handlebars'
      }
    }
  }, {
    id: 'sizes',
    sectionNav: 'Sizes',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Sizes</code> demo shows available button sizes: small, normal, and large.'
      }
    },
    demo: {
      component: _imports.SizesDemo,
      props: {
        source: _imports.SizesSource,
        snippetName: 'sizes',
        language: 'handlebars'
      }
    }
  }, {
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'A button can be rendered with custom content when content is passed as the default block. Use <code>@customClass</code> with uls-v2 classes for styling and pass any markup (e.g. an image logo) inside the button.'
      }
    },
    demo: {
      component: _imports.TemplateDemo,
      props: {
        source: _imports.TemplateSource,
        snippetName: 'template',
        language: 'handlebars'
      }
    }
  }];
  function ButtonFeatures() {
    return ButtonFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/button/imports", ["exports", "ulx-ember/components/Demo/Button/Basic", "ulx-ember/components/Demo/Button/Severities", "ulx-ember/components/Demo/Button/Outlined", "ulx-ember/components/Demo/Button/IconOnly", "ulx-ember/components/Demo/Button/Text", "ulx-ember/components/Demo/Button/Raised", "ulx-ember/components/Demo/Button/RaisedText", "ulx-ember/components/Demo/Button/Rounded", "ulx-ember/components/Demo/Button/Icons", "ulx-ember/components/Demo/Button/Sizes", "ulx-ember/components/Demo/Button/States", "ulx-ember/components/Demo/Button/Disabled", "ulx-ember/components/Demo/Button/Link", "ulx-ember/components/Demo/Button/Badge", "ulx-ember/components/Demo/Button/Group", "ulx-ember/components/Demo/Button/Template", "ulx-ember/documentation/components/elements/button/snippets/Import.gjs", "ulx-ember/documentation/components/elements/button/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/button/snippets/Severities.gjs", "ulx-ember/documentation/components/elements/button/snippets/Outlined.gjs", "ulx-ember/documentation/components/elements/button/snippets/IconOnly.gjs", "ulx-ember/documentation/components/elements/button/snippets/Text.gjs", "ulx-ember/documentation/components/elements/button/snippets/Raised.gjs", "ulx-ember/documentation/components/elements/button/snippets/RaisedText.gjs", "ulx-ember/documentation/components/elements/button/snippets/Rounded.gjs", "ulx-ember/documentation/components/elements/button/snippets/Icons.gjs", "ulx-ember/documentation/components/elements/button/snippets/Sizes.gjs", "ulx-ember/documentation/components/elements/button/snippets/States.gjs", "ulx-ember/documentation/components/elements/button/snippets/Disabled.gjs", "ulx-ember/documentation/components/elements/button/snippets/Link.gjs", "ulx-ember/documentation/components/elements/button/snippets/Badge.gjs", "ulx-ember/documentation/components/elements/button/snippets/Group.gjs", "ulx-ember/documentation/components/elements/button/snippets/Template.gjs"], function (_exports, _Basic, _Severities, _Outlined, _IconOnly, _Text, _Raised, _RaisedText, _Rounded, _Icons, _Sizes, _States, _Disabled, _Link, _Badge, _Group, _Template, _Import, _Basic2, _Severities2, _Outlined2, _IconOnly2, _Text2, _Raised2, _RaisedText2, _Rounded2, _Icons2, _Sizes2, _States2, _Disabled2, _Link2, _Badge2, _Group2, _Template2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BadgeDemo", {
    enumerable: true,
    get: function () {
      return _Badge.default;
    }
  });
  Object.defineProperty(_exports, "BadgeSource", {
    enumerable: true,
    get: function () {
      return _Badge2.default;
    }
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "DisabledDemo", {
    enumerable: true,
    get: function () {
      return _Disabled.default;
    }
  });
  Object.defineProperty(_exports, "DisabledSource", {
    enumerable: true,
    get: function () {
      return _Disabled2.default;
    }
  });
  Object.defineProperty(_exports, "GroupDemo", {
    enumerable: true,
    get: function () {
      return _Group.default;
    }
  });
  Object.defineProperty(_exports, "GroupSource", {
    enumerable: true,
    get: function () {
      return _Group2.default;
    }
  });
  Object.defineProperty(_exports, "IconOnlyDemo", {
    enumerable: true,
    get: function () {
      return _IconOnly.default;
    }
  });
  Object.defineProperty(_exports, "IconOnlySource", {
    enumerable: true,
    get: function () {
      return _IconOnly2.default;
    }
  });
  Object.defineProperty(_exports, "IconsDemo", {
    enumerable: true,
    get: function () {
      return _Icons.default;
    }
  });
  Object.defineProperty(_exports, "IconsSource", {
    enumerable: true,
    get: function () {
      return _Icons2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "LinkDemo", {
    enumerable: true,
    get: function () {
      return _Link.default;
    }
  });
  Object.defineProperty(_exports, "LinkSource", {
    enumerable: true,
    get: function () {
      return _Link2.default;
    }
  });
  Object.defineProperty(_exports, "OutlinedDemo", {
    enumerable: true,
    get: function () {
      return _Outlined.default;
    }
  });
  Object.defineProperty(_exports, "OutlinedSource", {
    enumerable: true,
    get: function () {
      return _Outlined2.default;
    }
  });
  Object.defineProperty(_exports, "RaisedDemo", {
    enumerable: true,
    get: function () {
      return _Raised.default;
    }
  });
  Object.defineProperty(_exports, "RaisedSource", {
    enumerable: true,
    get: function () {
      return _Raised2.default;
    }
  });
  Object.defineProperty(_exports, "RaisedTextDemo", {
    enumerable: true,
    get: function () {
      return _RaisedText.default;
    }
  });
  Object.defineProperty(_exports, "RaisedTextSource", {
    enumerable: true,
    get: function () {
      return _RaisedText2.default;
    }
  });
  Object.defineProperty(_exports, "RoundedDemo", {
    enumerable: true,
    get: function () {
      return _Rounded.default;
    }
  });
  Object.defineProperty(_exports, "RoundedSource", {
    enumerable: true,
    get: function () {
      return _Rounded2.default;
    }
  });
  Object.defineProperty(_exports, "SeveritiesDemo", {
    enumerable: true,
    get: function () {
      return _Severities.default;
    }
  });
  Object.defineProperty(_exports, "SeveritiesSource", {
    enumerable: true,
    get: function () {
      return _Severities2.default;
    }
  });
  Object.defineProperty(_exports, "SizesDemo", {
    enumerable: true,
    get: function () {
      return _Sizes.default;
    }
  });
  Object.defineProperty(_exports, "SizesSource", {
    enumerable: true,
    get: function () {
      return _Sizes2.default;
    }
  });
  Object.defineProperty(_exports, "StatesDemo", {
    enumerable: true,
    get: function () {
      return _States.default;
    }
  });
  Object.defineProperty(_exports, "StatesSource", {
    enumerable: true,
    get: function () {
      return _States2.default;
    }
  });
  Object.defineProperty(_exports, "TemplateDemo", {
    enumerable: true,
    get: function () {
      return _Template.default;
    }
  });
  Object.defineProperty(_exports, "TemplateSource", {
    enumerable: true,
    get: function () {
      return _Template2.default;
    }
  });
  Object.defineProperty(_exports, "TextDemo", {
    enumerable: true,
    get: function () {
      return _Text.default;
    }
  });
  Object.defineProperty(_exports, "TextSource", {
    enumerable: true,
    get: function () {
      return _Text2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Button/Basic",0,"ulx-ember/components/Demo/Button/Severities",0,"ulx-ember/components/Demo/Button/Outlined",0,"ulx-ember/components/Demo/Button/IconOnly",0,"ulx-ember/components/Demo/Button/Text",0,"ulx-ember/components/Demo/Button/Raised",0,"ulx-ember/components/Demo/Button/RaisedText",0,"ulx-ember/components/Demo/Button/Rounded",0,"ulx-ember/components/Demo/Button/Icons",0,"ulx-ember/components/Demo/Button/Sizes",0,"ulx-ember/components/Demo/Button/States",0,"ulx-ember/components/Demo/Button/Disabled",0,"ulx-ember/components/Demo/Button/Link",0,"ulx-ember/components/Demo/Button/Badge",0,"ulx-ember/components/Demo/Button/Group",0,"ulx-ember/components/Demo/Button/Template",0,"ulx-ember/documentation/components/elements/button/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Severities.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Outlined.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/IconOnly.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Text.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Raised.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/RaisedText.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Rounded.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Icons.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Sizes.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/States.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Disabled.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Link.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Badge.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Group.gjs",0,"ulx-ember/documentation/components/elements/button/snippets/Template.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Button Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Button demo components
  // Demo Components
  // Import source (for import section)
  // Button Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Button demo source files
});
;define("ulx-ember/documentation/components/elements/button/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // BUTTON COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Button component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Button',
    menuItem: 'Button',
    routeBase: '/components/elements/button',
    icon: 'pi pi-check-square',
    // Page metadata
    header: 'Button',
    subHeader: 'Button is a component for user interaction with support for multiple severities, variants, icons, and states.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    }],
    // Import message for the component
    importMsg: "import { UlxButton } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Button component with full keyboard support and ARIA attributes.',
      example: '<UlxButton @label="Click me" />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/button/snippets/Badge.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonBadge extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Messages" @badge="2" />
      <UlxButton @label="Updates" @badge="5" @severity="success" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonBasic extends Component {
  <template>
    <div class="flex gap-3 align-items-center">
      <UlxButton @label="Click Me" />
      <UlxButton @label="Submit" @severity="success" />
      <UlxButton @label="Delete" @severity="danger" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Disabled.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonDisabled extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton @label="Submit" @disabled={{true}} />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Group.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton, UlxButtonGroup } from 'ulx-components';

export default class DemoButtonGroup extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButtonGroup @orientation="horizontal" @size="normal">
        <UlxButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxButton
          @label="Delete"
          @icon="delete-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxButton
          @label="Cancel"
          @icon="close-icon-01"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
      </UlxButtonGroup>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/IconOnly.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

const ICON_ONLY_ROW = [
  { icon: 'ls-tick-icon', severity: 'primary', ariaLabel: 'Filter' },
  { icon: 'comment-icon', severity: 'secondary', ariaLabel: 'Bookmark' },
  { icon: 'search-icon', severity: 'success', ariaLabel: 'Search' },
  { icon: 'close-icon-01', severity: 'info', ariaLabel: 'User' },
  { icon: 'delete-icon', severity: 'warning', ariaLabel: 'Notification' },
  { icon: 'ls-tick-icon', severity: 'help', ariaLabel: 'Favorite' },
  { icon: 'close-icon-01', severity: 'danger', ariaLabel: 'Cancel' },
];

export default class DemoButtonIconOnly extends Component {
  get iconOnlyRow() {
    return ICON_ONLY_ROW;
  }

  <template>
    <div class="fxb column gp6">
      {{! Row 1: Square filled icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @severity={{item.severity}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 2: Rounded filled icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @severity={{item.severity}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 3: Rounded outlined icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @outlined={{true}}
            @severity={{item.severity}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 4: Rounded text raised icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @text={{true}}
            @raised={{true}}
            @severity={{item.severity}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 5: Rounded text icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @text={{true}}
            @severity={{item.severity}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Icons.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonIcons extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton
        @icon="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
        aria-label="Submit"
      />
      <UlxButton
        @label="Submit"
        @icon="ls-tick-icon"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
      />
      <UlxButton
        @label="Submit"
        @icon="ls-tick-icon"
        @iconPos="right"
        @iconSize="s22"
        @iconComponentClass="bs-icons1"
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxButton } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Link.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonLink extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Link" @link={{true}} @text={{true}} href="#" />
      <UlxButton @label="Navigate" @link={{true}} @severity="info" href="#" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Outlined.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonOutlined extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @outlined={{true}} />
      <UlxButton @label="Secondary" @outlined={{true}} @severity="secondary" />
      <UlxButton @label="Success" @outlined={{true}} @severity="success" />
      <UlxButton @label="Info" @outlined={{true}} @severity="info" />
      <UlxButton @label="Warning" @outlined={{true}} @severity="warning" />
      <UlxButton @label="Danger" @outlined={{true}} @severity="danger" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Raised.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonRaised extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @raised={{true}} />
      <UlxButton @label="Secondary" @raised={{true}} @severity="secondary" />
      <UlxButton @label="Success" @raised={{true}} @severity="success" />
      <UlxButton @label="Info" @raised={{true}} @severity="info" />
      <UlxButton @label="Warning" @raised={{true}} @severity="warning" />
      <UlxButton @label="Help" @raised={{true}} @severity="help" />
      <UlxButton @label="Danger" @raised={{true}} @severity="danger" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/RaisedText.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonRaisedText extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton @label="Primary" @text={{true}} @raised={{true}} />
      <UlxButton
        @label="Secondary"
        @text={{true}}
        @raised={{true}}
        @severity="secondary"
      />
      <UlxButton
        @label="Success"
        @text={{true}}
        @raised={{true}}
        @severity="success"
      />
      <UlxButton
        @label="Info"
        @text={{true}}
        @raised={{true}}
        @severity="info"
      />
      <UlxButton
        @label="Warning"
        @text={{true}}
        @raised={{true}}
        @severity="warning"
      />
      <UlxButton
        @label="Help"
        @text={{true}}
        @raised={{true}}
        @severity="help"
      />
      <UlxButton
        @label="Danger"
        @text={{true}}
        @raised={{true}}
        @severity="danger"
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Rounded.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonRounded extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @rounded={{true}} />
      <UlxButton @label="Secondary" @rounded={{true}} @severity="secondary" />
      <UlxButton @label="Success" @rounded={{true}} @severity="success" />
      <UlxButton @label="Info" @rounded={{true}} @severity="info" />
      <UlxButton @label="Warning" @rounded={{true}} @severity="warning" />
      <UlxButton @label="Danger" @rounded={{true}} @severity="danger" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Severities.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonSeverities extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Primary" @severity="primary" />
      <UlxButton @label="Secondary" @severity="secondary" />
      <UlxButton @label="Success" @severity="success" />
      <UlxButton @label="Info" @severity="info" />
      <UlxButton @label="Warning" @severity="warning" />
      <UlxButton @label="Help" @severity="help" />
      <UlxButton @label="Danger" @severity="danger" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Sizes.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonSizes extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Small" @size="small" />
      <UlxButton @label="Normal" />
      <UlxButton @label="Large" @size="large" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/States.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxButton } from 'ulx-components';

export default class DemoButtonStates extends Component {
  @tracked loading = false;

  @action
  startLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 20000);
  }

  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton
        @label="Submit"
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @loading={{this.loading}}
        {{on "click" this.startLoading}}
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Template.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonTemplate extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton
        aria-label="ULX"
        @customClass="bg-primary fg-primary bd-blue pd4"
      >
        <img
          alt=""
          src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg"
          class="h32"
          role="presentation"
        />
      </UlxButton>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/button/snippets/Text.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonText extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @text={{true}} />
      <UlxButton @label="Secondary" @text={{true}} @severity="secondary" />
      <UlxButton @label="Success" @text={{true}} @severity="success" />
      <UlxButton @label="Info" @text={{true}} @severity="info" />
      <UlxButton @label="Warning" @text={{true}} @severity="warning" />
      <UlxButton @label="Danger" @text={{true}} @severity="danger" />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/icon/builder-schema", ["exports", "ulx-ember/tokens/icon-tokens", "ulx-ember/documentation/utils/builder-schema-helpers"], function (_exports, _iconTokens, _builderSchemaHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/tokens/icon-tokens",0,"ulx-ember/documentation/utils/builder-schema-helpers"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Icon Builder Schema
  // ==========================================================================
  // Drives the ComponentBuilder for the Icon doc page. Size, layers, and spin
  // options are taken from icon-tokens.js, which is generated from
  // @uls-builder comments in uls-v2/.../less/elements/icon.less.
  // Run: node scripts/extract-uls-builder-tokens.js [path-to-icon.less]
  const normalSizes = _iconTokens.default['normal size'] ?? [];
  const shapedSizes = _iconTokens.default['shaped icons size'] ?? [];
  const layerTokens = _iconTokens.default['layers'] ?? [];
  const spinTokens = _iconTokens.default['spin'] ?? [];
  const spinClass = spinTokens[0] ?? 'spin-anim';
  const stateToProps = state => {
    const customParts = [state.customClass].filter(Boolean);
    if (state.spin && spinClass) customParts.push(spinClass);
    const customClass = customParts.join(' ');
    return {
      componentClass: 'bs-icons1',
      type: 'font',
      iconName: state.iconName,
      size: state.size,
      ariaLabel: state.ariaLabel ?? 'Icon',
      ...(customClass ? {
        customClass
      } : {})
    };
  };
  const stateToSnippet = state => {
    const p = stateToProps(state);
    const attrs = [`@componentClass="${p.componentClass}"`, `@type="${p.type}"`, `@iconName="${p.iconName}"`, `@size="${p.size}"`, `@ariaLabel="${p.ariaLabel}"`];
    if (p.customClass) attrs.push(`@customClass="${p.customClass}"`);
    return `<UlxIcon\n  ${attrs.join('\n  ')}\n/>`;
  };
  const defaultNormalSize = normalSizes.includes('s24') ? 's24' : normalSizes[0] ?? 's24';
  var _default = _exports.default = {
    componentName: 'UlxIcon',
    importLine: "import { UlxIcon } from 'ulx-components';",
    props: [{
      key: 'sizeMode',
      label: 'Size mode',
      type: 'radio',
      default: 'normal',
      options: [{
        value: 'normal',
        label: 'Normal'
      }, {
        value: 'layeredBg',
        label: 'Layered background'
      }]
    }, (0, _builderSchemaHelpers.createConditionalSizeProp)({
      key: 'size',
      label: 'Size',
      modeKey: 'sizeMode',
      normalTokens: normalSizes,
      shapedTokens: shapedSizes,
      defaultNormal: defaultNormalSize
    }), {
      key: 'iconName',
      label: 'Icon',
      type: 'select',
      default: 'comment-icon',
      options: [{
        value: 'ls-tick-icon',
        label: 'Tick'
      }, {
        value: 'close-icon-01',
        label: 'Close'
      }, {
        value: 'comment-icon',
        label: 'Comment'
      }, {
        value: 'session-settings-icon',
        label: 'Settings'
      }]
    }, (0, _builderSchemaHelpers.createLayerProp)({
      key: 'customClass',
      label: 'Layer',
      modeKey: 'sizeMode',
      layerTokens
    }), (0, _builderSchemaHelpers.createClassCheckboxProp)({
      key: 'spin',
      label: 'Spin'
    }), {
      key: 'ariaLabel',
      label: 'Aria label',
      type: 'select',
      default: 'Icon',
      options: [{
        value: 'Icon',
        label: 'Icon'
      }, {
        value: 'Close',
        label: 'Close'
      }, {
        value: 'Settings',
        label: 'Settings'
      }, {
        value: '',
        label: '(empty)'
      }]
    }],
    stateToProps,
    stateToSnippet
  };
});
;define("ulx-ember/documentation/components/elements/icon/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/icon/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.IconFeatureItems = void 0;
  _exports.default = IconFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/icon/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Icon Feature Items
  // ==========================================================================
  const IconFeatureItems = _exports.IconFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Icon</code> component."
      }
    },
    demo: {
      component: null,
      // Import section doesn't need demo
      props: {
        source: _imports.ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  }, {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the Icon component."
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  }, {
    id: "size",
    sectionNav: "Size",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Size</code> demo shows size usage of the Icon component."
      }
    },
    demo: {
      component: _imports.SizeDemo,
      props: {
        source: _imports.SizeSource,
        snippetName: "size",
        language: "handlebars"
      }
    }
  }, {
    id: "color",
    sectionNav: "Color",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Color</code> demo shows color usage of the Icon component."
      }
    },
    demo: {
      component: _imports.ColorDemo,
      props: {
        source: _imports.ColorSource,
        snippetName: "color",
        language: "handlebars"
      }
    }
  }, {
    id: "spin",
    sectionNav: "Spin",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Spin</code> demo shows spin usage of the Icon component."
      }
    },
    demo: {
      component: _imports.SpinDemo,
      props: {
        source: _imports.SpinSource,
        snippetName: "spin",
        language: "handlebars"
      }
    }
  }, {
    id: "layer",
    sectionNav: "Layer",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Layer</code> demo shows layer usage of the Icon component."
      }
    },
    demo: {
      component: _imports.LayerDemo,
      props: {
        source: _imports.LayerSource,
        snippetName: "layer",
        language: "handlebars"
      }
    }
  }, {
    id: "list",
    sectionNav: "List",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>List</code> demo shows list usage of the Icon component."
      }
    },
    demo: {
      component: _imports.ListDemo,
      props: {
        source: _imports.ListSource,
        snippetName: "list",
        language: "handlebars"
      }
    }
  }];
  function IconFeatures() {
    return IconFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/icon/imports", ["exports", "ulx-ember/components/Demo/Icon/Basic", "ulx-ember/components/Demo/Icon/Size", "ulx-ember/components/Demo/Icon/Color", "ulx-ember/components/Demo/Icon/Spin", "ulx-ember/components/Demo/Icon/Layer", "ulx-ember/components/Demo/Icon/List", "ulx-ember/documentation/components/elements/icon/snippets/Import.gjs", "ulx-ember/documentation/components/elements/icon/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/icon/snippets/Size.gjs", "ulx-ember/documentation/components/elements/icon/snippets/Color.gjs", "ulx-ember/documentation/components/elements/icon/snippets/Spin.gjs", "ulx-ember/documentation/components/elements/icon/snippets/Layer.gjs", "ulx-ember/documentation/components/elements/icon/snippets/List.gjs"], function (_exports, _Basic, _Size, _Color, _Spin, _Layer, _List, _Import, _Basic2, _Size2, _Color2, _Spin2, _Layer2, _List2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "ColorDemo", {
    enumerable: true,
    get: function () {
      return _Color.default;
    }
  });
  Object.defineProperty(_exports, "ColorSource", {
    enumerable: true,
    get: function () {
      return _Color2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "LayerDemo", {
    enumerable: true,
    get: function () {
      return _Layer.default;
    }
  });
  Object.defineProperty(_exports, "LayerSource", {
    enumerable: true,
    get: function () {
      return _Layer2.default;
    }
  });
  Object.defineProperty(_exports, "ListDemo", {
    enumerable: true,
    get: function () {
      return _List.default;
    }
  });
  Object.defineProperty(_exports, "ListSource", {
    enumerable: true,
    get: function () {
      return _List2.default;
    }
  });
  Object.defineProperty(_exports, "SizeDemo", {
    enumerable: true,
    get: function () {
      return _Size.default;
    }
  });
  Object.defineProperty(_exports, "SizeSource", {
    enumerable: true,
    get: function () {
      return _Size2.default;
    }
  });
  Object.defineProperty(_exports, "SpinDemo", {
    enumerable: true,
    get: function () {
      return _Spin.default;
    }
  });
  Object.defineProperty(_exports, "SpinSource", {
    enumerable: true,
    get: function () {
      return _Spin2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Icon/Basic",0,"ulx-ember/components/Demo/Icon/Size",0,"ulx-ember/components/Demo/Icon/Color",0,"ulx-ember/components/Demo/Icon/Spin",0,"ulx-ember/components/Demo/Icon/Layer",0,"ulx-ember/components/Demo/Icon/List",0,"ulx-ember/documentation/components/elements/icon/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/icon/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/icon/snippets/Size.gjs",0,"ulx-ember/documentation/components/elements/icon/snippets/Color.gjs",0,"ulx-ember/documentation/components/elements/icon/snippets/Spin.gjs",0,"ulx-ember/documentation/components/elements/icon/snippets/Layer.gjs",0,"ulx-ember/documentation/components/elements/icon/snippets/List.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Icon Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Icon demo components
  // Demo Components
  // Import source (for import section)
  // Icon Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Icon demo source files
});
;define("ulx-ember/documentation/components/elements/icon/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // ICON COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Icon component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Icons',
    menuItem: 'Icon',
    routeBase: '/components/elements/icon',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'Icon',
    subHeader: 'Icon is a component for user interaction.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    }],
    // Import message for the component
    importMsg: "import { Icon } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Icon component description for accessibility.',
      example: '<Icon />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/icon/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxIcon } from 'ulx-components';

<template>
  <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="ls-tick-icon"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="close-icon-01"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon>
      <:icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            transform="scale(1, -1) translate(0, -1024)"
            d="M 831.488 602.112h -24.576c -12.288 0.000 -20.480 8.192 -28.672 20.480 -4.096 12.288 -4.096 24.576 4.096 32.768l 20.480 20.480c 36.864 36.864 36.864 94.208 0.000 126.976 -36.864 36.864 -94.208 36.864 -126.976 0.000l -20.480 -20.480c -8.192 -8.192 -20.480 -12.288 -32.768 -4.096 -12.288 4.096 -20.480 16.384 -20.480 28.672v 24.576c 0.000 49.152 -40.960 90.112 -90.112 90.112s -90.112 -40.960 -90.112 -90.112v -24.576c 0.000 -12.288 -8.192 -20.480 -20.480 -28.672 -12.288 -4.096 -24.576 -4.096 -32.768 4.096l -16.384 20.480c -36.864 36.864 -94.208 36.864 -126.976 0.000 -36.864 -36.864 -36.864 -94.208 0.000 -126.976l 16.384 -20.480c 8.192 -8.192 8.192 -20.480 4.096 -32.768s -16.384 -20.480 -28.672 -20.480h -24.576c -49.152 0.000 -90.112 -40.960 -90.112 -90.112s 40.960 -90.112 90.112 -90.112h 24.576c 12.288 0.000 20.480 -8.192 28.672 -20.480 4.096 -12.288 4.096 -24.576 -4.096 -32.768l -20.480 -20.480c -36.864 -36.864 -36.864 -94.208 0.000 -126.976 36.864 -36.864 94.208 -36.864 126.976 0.000l 20.480 20.480c 8.192 8.192 20.480 12.288 32.768 4.096 12.288 -4.096 20.480 -16.384 20.480 -28.672v -24.576c 0.000 -49.152 40.960 -90.112 90.112 -90.112s 90.112 40.960 90.112 90.112v 24.576c 0.000 12.288 8.192 20.480 20.480 28.672 12.288 4.096 24.576 4.096 32.768 -4.096l 20.480 -20.480c 36.864 -36.864 94.208 -36.864 126.976 0.000s 36.864 94.208 0.000 126.976l -20.480 20.480c -8.192 8.192 -12.288 20.480 -4.096 32.768 4.096 12.288 16.384 20.480 28.672 20.480h 24.576c 49.152 0.000 90.112 40.960 90.112 90.112s -40.960 90.112 -90.112 90.112zM 831.488 471.040h -24.576c -32.768 0.000 -61.440 -20.480 -73.728 -49.152s -8.192 -61.440 16.384 -86.016l 20.480 -20.480c 16.384 -16.384 16.384 -40.960 0.000 -57.344s -40.960 -16.384 -57.344 0.000l -20.480 20.480c -24.576 24.576 -57.344 28.672 -86.016 16.384s -49.152 -36.864 -49.152 -73.728v -24.576c 0.000 -24.576 -20.480 -40.960 -40.960 -40.960 -24.576 0.000 -40.960 20.480 -40.960 40.960v 24.576c 0.000 32.768 -20.480 61.440 -49.152 73.728s -61.440 8.192 -86.016 -16.384l -20.480 -20.480c -16.384 -16.384 -40.960 -16.384 -57.344 0.000s -16.384 40.960 0.000 57.344l 20.480 20.480c 24.576 24.576 28.672 57.344 16.384 86.016s -36.864 49.152 -73.728 49.152h -32.768c -24.576 0.000 -40.960 20.480 -40.960 40.960s 20.480 40.960 40.960 40.960h 24.576c 32.768 0.000 61.440 20.480 73.728 49.152s 8.192 61.440 -16.384 86.016l -16.384 20.480c -16.384 16.384 -16.384 40.960 0.000 57.344s 40.960 16.384 57.344 0.000l 20.480 -20.480c 24.576 -24.576 57.344 -28.672 86.016 -16.384s 49.152 36.864 49.152 73.728v 28.672c 0.000 24.576 20.480 40.960 40.960 40.960 24.576 0.000 40.960 -20.480 40.960 -40.960v -24.576c 0.000 -32.768 20.480 -61.440 49.152 -73.728s 61.440 -8.192 86.016 16.384l 20.480 20.480c 16.384 16.384 40.960 16.384 57.344 0.000s 16.384 -40.960 0.000 -57.344l -20.480 -20.480c -24.576 -24.576 -28.672 -57.344 -16.384 -86.016s 36.864 -49.152 73.728 -49.152h 24.576c 24.576 0.000 40.960 -20.480 40.960 -40.960s -16.384 -45.056 -36.864 -45.056zM 512.000 647.168c -73.728 0.000 -135.168 -61.440 -135.168 -135.168s 61.440 -135.168 135.168 -135.168c 73.728 0.000 135.168 61.440 135.168 135.168s -61.440 135.168 -135.168 135.168zM 512.000 425.984c -49.152 0.000 -86.016 40.960 -86.016 86.016s 40.960 86.016 86.016 86.016c 49.152 0.000 86.016 -40.960 86.016 -86.016s -36.864 -86.016 -86.016 -86.016z"
          />
        </svg>
      </:icon>
    </UlxIcon>
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/icon/snippets/Color.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxIcon } from 'ulx-components';

<template>
  <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s12"
      @ariaLabel="tick icon"
      @customClass="primary"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s13"
      @ariaLabel="tick icon"
      @customClass="success"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s14"
      @ariaLabel="tick icon"
      @customClass="warning"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s16"
      @ariaLabel="tick icon"
      @customClass="danger"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s18"
      @ariaLabel="tick icon"
      @customClass="info"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s20"
      @ariaLabel="tick icon"
      @customClass="muted"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s22"
      @ariaLabel="tick icon"
      @customClass="inverted"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/icon/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Icon } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/icon/snippets/Layer.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxIcon } from 'ulx-components';

const LAYER_VARIATIONS = ['primary', 'success', 'warning', 'danger', 'info'];
const SAMPLE_ICONS = ['ls-tick-icon', 'close-icon-01', 'comment-icon'];

export default class DemoIconLayer extends Component {
  layerVariations = LAYER_VARIATIONS;
  sampleIcons = SAMPLE_ICONS;

  layerClass(color) {
    return \`\${color}-layer rounded\`;
  }

  <template>
    <div class="ulx-column col-3 gp8 fhc">
      {{#each this.layerVariations as |color|}}
        <div class="fxb column fvc gp2 col-3">
          <div class="text-sm">bg-{{color}}</div>
          <div class="fxb gp4">
            {{#each this.sampleIcons as |iconName|}}
              <UlxIcon
                @componentClass="bs-icons1"
                @type="font"
                @iconName={{iconName}}
                @size="l"
                @ariaLabel=""
                @customClass={{this.layerClass color}}
              />
            {{/each}}
          </div>
        </div>
      {{/each}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/icon/snippets/List.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxIcon } from 'ulx-components';

const BS_ICONS_CSS_URL =
  'https://cdn.zicons.in/21598000000025464/v2/bs-icons1.css';
const ICON_NAME_REGEX = /\\.bs-icons1\\.([a-zA-Z0-9_-]+):before/g;

export default class DemoIconList extends Component {
  on = on;
  runOnInsert = modifier(() => {
    this.loadIcons();
  });
  @tracked query = '';
  @tracked icons = [];

  get filteredIcons() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.icons;
    return this.icons.filter((name) => name.toLowerCase().includes(q));
  }

  @action
  loadIcons() {
    this.collectFromStyleSheets() || this.fetchAndParseCss();
  }

  collectFromStyleSheets() {
    const collected = new Set();
    try {
      Array.from(document.styleSheets).forEach((sheet) => {
        // Only parse the bs-icons1 icon-font stylesheet; skip app/vendor CSS
        // so we don't pick up utility classes like .bs-icons1.primary, .bs-icons1.s12, etc.
        if (!sheet.href || !sheet.href.includes('bs-icons1.css')) return;
        let rules;
        try {
          rules = sheet.cssRules || sheet.rules;
        } catch {
          return;
        }
        if (!rules) return;
        Array.from(rules).forEach((rule) => {
          if (!rule.selectorText) return;
          const selectors = rule.selectorText.split(',');
          selectors.forEach((sel) => {
            const s = sel.trim();
            if (s.startsWith('.bs-icons1.')) {
              const withoutPseudo = s.split(':')[0];
              if (withoutPseudo === '.bs-icons1') return;
              const match = /\\.bs-icons1\\.([a-zA-Z0-9_-]+)$/.exec(
                withoutPseudo,
              );
              if (match && !match[1].includes(' ')) {
                collected.add(match[1]);
              }
            }
          });
        });
      });
      if (collected.size > 0) {
        this.icons = Array.from(collected).sort();
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  }

  fetchAndParseCss() {
    fetch(BS_ICONS_CSS_URL)
      .then((r) => r.text())
      .then((css) => {
        const collected = new Set();
        let m;
        ICON_NAME_REGEX.lastIndex = 0;
        while ((m = ICON_NAME_REGEX.exec(css))) {
          collected.add(m[1]);
        }
        this.icons = Array.from(collected).sort();
      })
      .catch(() => {
        this.icons = [];
      });
  }

  @action
  updateQuery(e) {
    this.query = e.target.value ?? '';
  }
  <template>
    <div class="fxc gp4" {{this.runOnInsert}}>
      <div class="fxb fvc gp3 mgb8">
        <input
          type="text"
          placeholder="Search icons..."
          class="ulx-input"
          aria-label="Search icons"
          value={{this.query}}
          {{this.on "input" this.updateQuery}}
        />
        <span class="text-sm ulx-badge">{{this.filteredIcons.length}}
          icons</span>
      </div>

      {{#if this.filteredIcons.length}}
        <div class="ulx-grid gp5 col-5 pdt5 text-center bd-t">
          {{#each this.filteredIcons as |iconName|}}
            <div class="pd3 fxb column fvc gp3">
              <UlxIcon
                @componentClass="bs-icons1"
                @type="font"
                @iconName={{iconName}}
                @size="s20"
                @ariaLabel=""
              />
              <span class="text-sm">{{iconName}}</span>
            </div>
          {{/each}}
        </div>
      {{else}}
        <div class="text-center fg-text-muted pdy6 bd-t">No icons found</div>
      {{/if}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/icon/snippets/Size.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxIcon } from 'ulx-components';

<template>
  <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s12"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s13"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s14"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s16"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s18"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s20"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s22"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s24"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s26"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s28"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s30"
      @ariaLabel="tick icon"
    />
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="comment-icon"
      @size="s32"
      @ariaLabel="tick icon"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/icon/snippets/Spin.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxIcon } from 'ulx-components';

<template>
  <div class="fxb fvc gp4">
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="session-settings-icon"
      @size="s28"
      @ariaLabel="tick icon"
      @customClass="primary spin-anim"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input-group/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // INPUTGROUP BUILDER SCHEMA
  // ==========================================================================
  // Default builder schema for InputGroup.
  // Customize props, stateToProps, and stateToSnippet based on the component API.
  var _default = _exports.default = {
    componentName: 'InputGroup',
    importLine: "import { InputGroup } from 'ulx-components';",
    props: [],
    stateToProps: () => ({}),
    stateToSnippet: () => '<InputGroup />'
  };
});
;define("ulx-ember/documentation/components/elements/input-group/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/input-group/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.InputGroupFeatureItems = void 0;
  _exports.default = InputGroupFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/input-group/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // InputGroup Feature Items
  // ==========================================================================
  const InputGroupFeatureItems = _exports.InputGroupFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>InputGroup</code> component."
      }
    },
    demo: {
      component: null,
      // Import section doesn't need demo
      props: {
        source: _imports.ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  }, {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the InputGroup component."
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  }, {
    id: "multiple",
    sectionNav: "Multiple",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Multiple</code> demo shows Multiple usage of the InputGroup component."
      }
    },
    demo: {
      component: _imports.MultipleDemo,
      props: {
        source: _imports.MultipleSource,
        snippetName: "multiple",
        language: "handlebars"
      }
    }
  }];
  function InputGroupFeatures() {
    return InputGroupFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/input-group/imports", ["exports", "ulx-ember/components/Demo/InputGroup/Basic", "ulx-ember/components/Demo/InputGroup/Multiple", "ulx-ember/documentation/components/elements/input-group/snippets/Import.gjs", "ulx-ember/documentation/components/elements/input-group/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/input-group/snippets/Multiple.gjs"], function (_exports, _Basic, _Multiple, _Import, _Basic2, _Multiple2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "MultipleDemo", {
    enumerable: true,
    get: function () {
      return _Multiple.default;
    }
  });
  Object.defineProperty(_exports, "MultipleSource", {
    enumerable: true,
    get: function () {
      return _Multiple2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/InputGroup/Basic",0,"ulx-ember/components/Demo/InputGroup/Multiple",0,"ulx-ember/documentation/components/elements/input-group/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/input-group/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/input-group/snippets/Multiple.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // InputGroup Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all InputGroup demo components
  // Demo Components
  // Import source (for import section)
  // InputGroup Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all InputGroup demo source files
});
;define("ulx-ember/documentation/components/elements/input-group/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // INPUTGROUP COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for InputGroup component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Form',
    menuItem: 'InputGroup',
    routeBase: '/components/elements/input-group',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'InputGroup',
    subHeader: 'InputGroup is a component for user interaction.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    }, {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }],
    // Import message for the component
    importMsg: "import { InputGroup } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: "InputGroup component description for accessibility.",
      example: "<InputGroup />"
    }
  };
});
;define("ulx-ember/documentation/components/elements/input-group/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';
import { UlxIcon } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Website"
      aria-label="Website"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="ls-tick-icon"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
      </:start>

      <:end>
        <span class="ulx-inputgroup-addon">.com</span>
      </:end>
    </UlxInput>

  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input-group/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { InputGroup } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/input-group/snippets/Multiple.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';
import { UlxIcon } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      @fieldClass="col-12"
      placeholder="Website"
      aria-label="Website"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="user-info-icon-01"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="user-info-icon"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
      </:start>
      <:end>
        <span class="ulx-inputgroup-addon">.com</span>
      </:end>
    </UlxInput>
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // INPUT BUILDER SCHEMA
  // ==========================================================================
  // Drives the ComponentBuilder for the Input doc page.
  // This mirrors the Icon builder setup, but uses static options (no tokens yet).

  const toNumberOrNull = v => {
    if (v === '' || v === null || v === undefined) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };
  const buildRules = state => {
    const rules = {};
    if (state.required) rules.required = true;
    const minLength = toNumberOrNull(state.minLength);
    if (minLength != null) rules.minLength = {
      value: minLength
    };
    const maxLength = toNumberOrNull(state.maxLength);
    if (maxLength != null) rules.maxLength = {
      value: maxLength
    };
    const min = toNumberOrNull(state.min);
    if (min != null) rules.min = {
      value: min
    };
    const max = toNumberOrNull(state.max);
    if (max != null) rules.max = {
      value: max
    };
    return rules;
  };
  const stateToProps = state => {
    const rules = buildRules(state);
    return {
      label: state.label,
      // Use floatLabel as label when enabled (UlxInput supports string mode)
      ...(state.floatLabel ? {
        floatLabel: state.label
      } : {}),
      ...(Object.keys(rules).length ? {
        rules
      } : {}),
      size: state.size,
      fieldClass: state.fieldClass,
      placeholder: state.placeholder || undefined,
      type: state.type,
      keyfilter: state.keyfilter || undefined,
      filled: state.filled,
      disabled: state.disabled,
      readonly: state.readonly,
      ...(state.showHelp ? {
        helpText: 'Help text'
      } : {}),
      ...(state.showError ? {
        errorMessage: 'Error message'
      } : {})
    };
  };
  const rulesSnippet = state => {
    const parts = [];
    if (state.required) parts.push('required=true');
    if (state.minLength) parts.push(`minLength=(hash value=${state.minLength})`);
    if (state.maxLength) parts.push(`maxLength=(hash value=${state.maxLength})`);
    if (state.min) parts.push(`min=(hash value=${state.min})`);
    if (state.max) parts.push(`max=(hash value=${state.max})`);
    if (parts.length === 0) return null;
    return `@rules={{hash ${parts.join(' ')}}}`;
  };
  const stateToSnippet = state => {
    const attrs = [];
    if (state.label) attrs.push(`@label="${state.label}"`);
    if (state.floatLabel && state.label) attrs.push(`@floatLabel="${state.label}"`);
    if (state.size) attrs.push(`@size="${state.size}"`);
    if (state.fieldClass) attrs.push(`@fieldClass="${state.fieldClass}"`);
    if (state.placeholder) attrs.push(`placeholder="${state.placeholder}"`);
    if (state.type && state.type !== 'text') attrs.push(`@type="${state.type}"`);
    if (state.keyfilter) attrs.push(`@keyfilter="${state.keyfilter}"`);
    if (state.filled) attrs.push(`@filled={{true}}`);
    if (state.disabled) attrs.push(`@disabled={{true}}`);
    if (state.readonly) attrs.push(`@readonly={{true}}`);
    if (state.showHelp) attrs.push(`@helpText="Help text"`);
    if (state.showError) attrs.push(`@errorMessage="Error message"`);
    const rules = rulesSnippet(state);
    if (rules) attrs.push(rules);
    return `<UlxInput\n  ${attrs.join('\n  ')}\n/>`;
  };
  var _default = _exports.default = {
    componentName: 'UlxInput',
    importLine: "import { UlxInput } from 'ulx-components';",
    props: [{
      key: 'label',
      label: 'Label',
      type: 'select',
      default: 'Username',
      options: [{
        value: 'Username',
        label: 'Username'
      }, {
        value: 'Email',
        label: 'Email'
      }, {
        value: 'Age',
        label: 'Age'
      }]
    }, {
      key: 'floatLabel',
      label: 'Float label',
      type: 'checkbox',
      default: false
    }, {
      key: 'size',
      label: 'Size',
      type: 'radio',
      default: 's-size',
      options: [{
        value: 'xs-size',
        label: 'XS'
      }, {
        value: 's-size',
        label: 'S'
      }, {
        value: 'm-size',
        label: 'M'
      }, {
        value: 'l-size',
        label: 'L'
      }, {
        value: 'xl-size',
        label: 'XL'
      }]
    }, {
      key: 'type',
      label: 'Type',
      type: 'radio',
      default: 'text',
      options: [{
        value: 'text',
        label: 'Text'
      }, {
        value: 'email',
        label: 'Email'
      }, {
        value: 'password',
        label: 'Password'
      }, {
        value: 'number',
        label: 'Number'
      }, {
        value: 'textarea',
        label: 'Textarea'
      }]
    }, {
      key: 'keyfilter',
      label: 'Keyfilter',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: 'None'
      }, {
        value: 'int',
        label: 'int'
      }, {
        value: 'float',
        label: 'float'
      }, {
        value: 'email',
        label: 'email'
      }, {
        value: 'alphanum',
        label: 'alphanum'
      }]
    }, {
      key: 'fieldClass',
      label: 'Field class',
      type: 'select',
      default: 'col-12',
      options: [{
        value: 'col-12',
        label: 'col-12'
      }, {
        value: 'col-6',
        label: 'col-6'
      }, {
        value: 'col-4',
        label: 'col-4'
      }]
    }, {
      key: 'placeholder',
      label: 'Placeholder',
      type: 'select',
      default: 'Enter value',
      options: [{
        value: '',
        label: '(none)'
      }, {
        value: 'Enter value',
        label: 'Enter value'
      }, {
        value: 'Enter username',
        label: 'Enter username'
      }]
    }, {
      key: 'required',
      label: 'Required',
      type: 'checkbox',
      default: false
    }, {
      key: 'minLength',
      label: 'Min length',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: 'None'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '10',
        label: '10'
      }]
    }, {
      key: 'maxLength',
      label: 'Max length',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: 'None'
      }, {
        value: '20',
        label: '20'
      }, {
        value: '50',
        label: '50'
      }]
    }, {
      key: 'min',
      label: 'Min value',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: 'None'
      }, {
        value: '0',
        label: '0'
      }, {
        value: '1',
        label: '1'
      }, {
        value: '10',
        label: '10'
      }]
    }, {
      key: 'max',
      label: 'Max value',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: 'None'
      }, {
        value: '10',
        label: '10'
      }, {
        value: '100',
        label: '100'
      }]
    }, {
      key: 'filled',
      label: 'Filled',
      type: 'checkbox',
      default: false
    }, {
      key: 'disabled',
      label: 'Disabled',
      type: 'checkbox',
      default: false
    }, {
      key: 'readonly',
      label: 'Readonly',
      type: 'checkbox',
      default: false
    }, {
      key: 'showHelp',
      label: 'Help text',
      type: 'checkbox',
      default: true
    }, {
      key: 'showError',
      label: 'Error message',
      type: 'checkbox',
      default: false
    }],
    stateToProps,
    stateToSnippet
  };
});
;define("ulx-ember/documentation/components/elements/input/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/input/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.InputFeatureItems = void 0;
  _exports.default = InputFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/input/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Input Feature Items
  // ==========================================================================
  const InputFeatureItems = _exports.InputFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Input</code> component."
      }
    },
    demo: {
      component: null,
      // Import section doesn't need demo
      props: {
        source: _imports.ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  }, {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the Input component."
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  }, {
    id: "key-filter",
    sectionNav: "Keyfilter",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Keyfilter</code> demo shows KeyFilter usage of the Input component."
      }
    },
    demo: {
      component: _imports.KeyfilterDemo,
      props: {
        source: _imports.KeyfilterSource,
        snippetName: "key-filter",
        language: "handlebars"
      }
    }
  }, {
    id: "sizes",
    sectionNav: "Sizes",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Sizes</code> demo shows Sizes usage of the Input component."
      }
    },
    demo: {
      component: _imports.SizesDemo,
      props: {
        source: _imports.SizesSource,
        snippetName: "sizes",
        language: "handlebars"
      }
    }
  }, {
    id: "float-label",
    sectionNav: "Floatlabel",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Floatlabel</code> demo shows FloatLabel usage of the Input component."
      }
    },
    demo: {
      component: _imports.FloatlabelDemo,
      props: {
        source: _imports.FloatlabelSource,
        snippetName: "float-label",
        language: "handlebars"
      }
    }
  }, {
    id: "filled",
    sectionNav: "Filled",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Filled</code> demo shows Filled usage of the Input component."
      }
    },
    demo: {
      component: _imports.FilledDemo,
      props: {
        source: _imports.FilledSource,
        snippetName: "filled",
        language: "handlebars"
      }
    }
  }, {
    id: "invalid",
    sectionNav: "Invalid",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Invalid</code> demo shows Invalid usage of the Input component."
      }
    },
    demo: {
      component: _imports.InvalidDemo,
      props: {
        source: _imports.InvalidSource,
        snippetName: "invalid",
        language: "handlebars"
      }
    }
  }, {
    id: "disabled",
    sectionNav: "Disabled",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Disabled</code> demo shows Disabled usage of the Input component."
      }
    },
    demo: {
      component: _imports.DisabledDemo,
      props: {
        source: _imports.DisabledSource,
        snippetName: "disabled",
        language: "handlebars"
      }
    }
  }];
  function InputFeatures() {
    return InputFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/input/imports", ["exports", "ulx-ember/components/Demo/Input/Basic", "ulx-ember/components/Demo/Input/Keyfilter", "ulx-ember/components/Demo/Input/Sizes", "ulx-ember/components/Demo/Input/Floatlabel", "ulx-ember/components/Demo/Input/Filled", "ulx-ember/components/Demo/Input/Invalid", "ulx-ember/components/Demo/Input/Disabled", "ulx-ember/documentation/components/elements/input/snippets/Import.gjs", "ulx-ember/documentation/components/elements/input/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/input/snippets/Keyfilter.gjs", "ulx-ember/documentation/components/elements/input/snippets/Sizes.gjs", "ulx-ember/documentation/components/elements/input/snippets/Floatlabel.gjs", "ulx-ember/documentation/components/elements/input/snippets/Filled.gjs", "ulx-ember/documentation/components/elements/input/snippets/Invalid.gjs", "ulx-ember/documentation/components/elements/input/snippets/Disabled.gjs"], function (_exports, _Basic, _Keyfilter, _Sizes, _Floatlabel, _Filled, _Invalid, _Disabled, _Import, _Basic2, _Keyfilter2, _Sizes2, _Floatlabel2, _Filled2, _Invalid2, _Disabled2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "DisabledDemo", {
    enumerable: true,
    get: function () {
      return _Disabled.default;
    }
  });
  Object.defineProperty(_exports, "DisabledSource", {
    enumerable: true,
    get: function () {
      return _Disabled2.default;
    }
  });
  Object.defineProperty(_exports, "FilledDemo", {
    enumerable: true,
    get: function () {
      return _Filled.default;
    }
  });
  Object.defineProperty(_exports, "FilledSource", {
    enumerable: true,
    get: function () {
      return _Filled2.default;
    }
  });
  Object.defineProperty(_exports, "FloatlabelDemo", {
    enumerable: true,
    get: function () {
      return _Floatlabel.default;
    }
  });
  Object.defineProperty(_exports, "FloatlabelSource", {
    enumerable: true,
    get: function () {
      return _Floatlabel2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "InvalidDemo", {
    enumerable: true,
    get: function () {
      return _Invalid.default;
    }
  });
  Object.defineProperty(_exports, "InvalidSource", {
    enumerable: true,
    get: function () {
      return _Invalid2.default;
    }
  });
  Object.defineProperty(_exports, "KeyfilterDemo", {
    enumerable: true,
    get: function () {
      return _Keyfilter.default;
    }
  });
  Object.defineProperty(_exports, "KeyfilterSource", {
    enumerable: true,
    get: function () {
      return _Keyfilter2.default;
    }
  });
  Object.defineProperty(_exports, "SizesDemo", {
    enumerable: true,
    get: function () {
      return _Sizes.default;
    }
  });
  Object.defineProperty(_exports, "SizesSource", {
    enumerable: true,
    get: function () {
      return _Sizes2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Input/Basic",0,"ulx-ember/components/Demo/Input/Keyfilter",0,"ulx-ember/components/Demo/Input/Sizes",0,"ulx-ember/components/Demo/Input/Floatlabel",0,"ulx-ember/components/Demo/Input/Filled",0,"ulx-ember/components/Demo/Input/Invalid",0,"ulx-ember/components/Demo/Input/Disabled",0,"ulx-ember/documentation/components/elements/input/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/input/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/input/snippets/Keyfilter.gjs",0,"ulx-ember/documentation/components/elements/input/snippets/Sizes.gjs",0,"ulx-ember/documentation/components/elements/input/snippets/Floatlabel.gjs",0,"ulx-ember/documentation/components/elements/input/snippets/Filled.gjs",0,"ulx-ember/documentation/components/elements/input/snippets/Invalid.gjs",0,"ulx-ember/documentation/components/elements/input/snippets/Disabled.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Input Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Input demo components
  // Demo Components
  // Import source (for import section)
  // Input Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Input demo source files
});
;define("ulx-ember/documentation/components/elements/input/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // INPUT COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Input component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Form',
    menuItem: 'Input',
    routeBase: '/components/elements/input',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'Input',
    subHeader: 'Input is a component for user interaction.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    }, {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }],
    // Import message for the component
    importMsg: "import { UlxInput } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Input component description for accessibility.',
      example: '<Input />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/input/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';

const rules = {
  required: true,
  minLength: { value: 10 },
  maxLength: { value: 20 },
};

<template>
  <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxInput
      @label="Input"
      @rules={{rules}}
      @helpText="Use 3–20 characters. Letters and numbers only."
      @size="m-size"
      @error="Error message here"
      @fieldClass="col-12"
      placeholder="Enter username"
      aria-label="Username"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input/snippets/Disabled.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @disabled={{true}}
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input/snippets/Filled.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @floatLabel="label"
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @filled={{true}}
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input/snippets/Floatlabel.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @id="username"
      @label="Username"
      @floatLabel={{true}}
      @size="l-size"
      @fieldClass="col-12"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Input } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/input/snippets/Invalid.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @invalid={{true}}
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input/snippets/Keyfilter.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';

const keyfilters = [
  { label: 'Integers', keyfilter: 'int', placeholder: 'e.g. -123' },
  { label: 'Floats', keyfilter: 'float', placeholder: 'e.g. -12.34' },
  {
    label: 'Email (loose)',
    keyfilter: 'email',
    placeholder: 'e.g. name@site.com',
  },
  {
    label: 'URL (loose)',
    keyfilter: 'url',
    placeholder: 'e.g. https://example.com',
  },
  { label: 'Phone', keyfilter: 'phone', placeholder: 'e.g. +1 (555) 123-4567' },
  { label: 'CPF', keyfilter: 'cpf', placeholder: '11 digits' },
  { label: 'CNPJ', keyfilter: 'cnpj', placeholder: '14 digits' },
  { label: 'Hex', keyfilter: 'hex', placeholder: 'e.g. 1A2b3C' },
  { label: 'Alpha', keyfilter: 'alpha', placeholder: 'letters only' },
  {
    label: 'Alphanum',
    keyfilter: 'alphanum',
    placeholder: 'letters + numbers',
  },
  { label: 'UUID (loose)', keyfilter: 'uuid', placeholder: 'hex + hyphen' },
  { label: 'Date', keyfilter: 'date', placeholder: 'YYYY-MM-DD' },
  { label: 'Time', keyfilter: 'time', placeholder: 'HH:MM' },
  { label: 'Datetime', keyfilter: 'datetime', placeholder: 'YYYY-MM-DD HH:MM' },
  {
    label: 'Datetime Local',
    keyfilter: 'datetime-local',
    placeholder: 'YYYY-MM-DDTHH:MM',
  },
  { label: 'Month', keyfilter: 'month', placeholder: 'YYYY-MM' },
  { label: 'Week', keyfilter: 'week', placeholder: 'YYYY-Www' },
  { label: 'Custom RegExp', keyfilter: '/^[A-Z]*$/', placeholder: 'A–Z only' },
];

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    {{#each keyfilters as |item|}}
      <UlxInput
        @label={{item.label}}
        @size="s-size"
        @fieldClass="col-4"
        @keyfilter={{item.keyfilter}}
        placeholder={{item.placeholder}}
        aria-label={{item.label}}
      />
    {{/each}}
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/input/snippets/Sizes.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxInput } from 'ulx-components';

const sizes = [
  { label: 's-size', size: 's-size' },
  { label: 'm-size', size: 'm-size' },
  { label: 'l-size', size: 'l-size' },
  { label: 'xl-size', size: 'xl-size' },
];

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    {{#each sizes as |item|}}
      <UlxInput
        @label={{item.label}}
        @size={{item.size}}
        @fieldClass="col-12"
        @keyfilter={{item.keyfilter}}
        placeholder={{item.placeholder}}
        aria-label={{item.label}}
      />
    {{/each}}
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/progressbar/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // Progress Bar Builder Schema
  // ==========================================================================

  const stateToProps = state => ({
    value: state.value,
    mode: state.mode,
    showValue: state.showValue,
    size: state.size,
    severity: state.severity || undefined,
    customClass: state.customClass || undefined
  });
  const stateToSnippet = state => {
    const p = stateToProps(state);
    const attrs = [];
    if (p.value != null && p.mode !== 'indeterminate') attrs.push(`@value={{${p.value}}}`);
    if (p.mode === 'indeterminate') attrs.push('@mode="indeterminate"');
    if (p.showValue === false) attrs.push('@showValue={{false}}');
    if (p.size) attrs.push(`@size="${p.size}"`);
    if (p.severity) attrs.push(`@severity="${p.severity}"`);
    if (p.customClass) attrs.push(`@customClass="${p.customClass}"`);
    return attrs.length ? `<UlxProgressBar\n  ${attrs.join('\n  ')}\n/>` : '<UlxProgressBar />';
  };
  var _default = _exports.default = {
    componentName: 'UlxProgressBar',
    importLine: "import { UlxProgressBar } from 'ulx-components';",
    props: [{
      key: 'value',
      label: 'Value',
      type: 'number',
      default: 50
    }, {
      key: 'mode',
      label: 'Mode',
      type: 'select',
      default: 'determinate',
      options: [{
        value: 'determinate',
        label: 'Determinate'
      }, {
        value: 'indeterminate',
        label: 'Indeterminate'
      }]
    }, {
      key: 'showValue',
      label: 'Show value',
      type: 'checkbox',
      default: true
    }, {
      key: 'size',
      label: 'Size',
      type: 'select',
      default: 'm',
      options: [{
        value: 'xs',
        label: 'XS'
      }, {
        value: 's',
        label: 'S'
      }, {
        value: 'm',
        label: 'M'
      }, {
        value: 'l',
        label: 'L'
      }, {
        value: 'xl',
        label: 'XL'
      }]
    }, {
      key: 'severity',
      label: 'Severity',
      type: 'select',
      default: '',
      options: [{
        value: '',
        label: '(default)'
      }, {
        value: 'secondary',
        label: 'Secondary'
      }, {
        value: 'success',
        label: 'Success'
      }, {
        value: 'info',
        label: 'Info'
      }, {
        value: 'warning',
        label: 'Warning'
      }, {
        value: 'danger',
        label: 'Danger'
      }]
    }, {
      key: 'customClass',
      label: 'Custom class',
      type: 'text',
      default: ''
    }],
    stateToProps,
    stateToSnippet
  };
});
;define("ulx-ember/documentation/components/elements/progressbar/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/progressbar/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ProgressBarFeatureItems = void 0;
  _exports.default = ProgressBarFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/progressbar/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Progress Bar Feature Items
  // ==========================================================================
  const ProgressBarFeatureItems = _exports.ProgressBarFeatureItems = [{
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>import</code> property is used to import the <code>UlxProgressBar</code> component.'
      }
    },
    demo: {
      component: null,
      props: {
        source: _imports.ImportSource,
        snippetName: 'import',
        language: 'jsx'
      }
    }
  }, {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Basic</code> demo shows a determinate progress bar with <code>@value={{50}}</code> (0–100). Uses uls-v2 progress-bar.less classes.'
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: 'basic',
        language: 'handlebars'
      }
    }
  }, {
    id: 'dynamic',
    sectionNav: 'Dynamic',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Value is reactive so updating it dynamically changes the bar as well. This demo starts at 0 and increments by a random amount every 2s until 100, then shows a success toast (Process Completed).'
      }
    },
    demo: {
      component: _imports.DynamicDemo,
      props: {
        source: _imports.DynamicSource,
        snippetName: 'dynamic',
        language: 'handlebars'
      }
    }
  }, {
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Custom content inside the Progress Bar is defined with the <code>&lt;:content&gt;</code> block. Yield the value and render your own label (e.g. <code>value/100</code>).'
      }
    },
    demo: {
      component: _imports.TemplateDemo,
      props: {
        source: _imports.TemplateSource,
        snippetName: 'template',
        language: 'handlebars'
      }
    }
  }, {
    id: 'indeterminate',
    sectionNav: 'Indeterminate',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Omit <code>@value</code> or set <code>@mode="indeterminate"</code> for an animated loading bar. Pass <code>aria-label</code> when it is the main progress indicator.'
      }
    },
    demo: {
      component: _imports.IndeterminateDemo,
      props: {
        source: _imports.IndeterminateSource,
        snippetName: 'indeterminate',
        language: 'handlebars'
      }
    }
  }];
  function ProgressBarFeatures() {
    return ProgressBarFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/progressbar/imports", ["exports", "ulx-ember/components/Demo/ProgressBar/Basic", "ulx-ember/components/Demo/ProgressBar/Dynamic", "ulx-ember/components/Demo/ProgressBar/Template", "ulx-ember/components/Demo/ProgressBar/Indeterminate", "ulx-ember/documentation/components/elements/progressbar/snippets/Import.gjs", "ulx-ember/documentation/components/elements/progressbar/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/progressbar/snippets/Dynamic.gjs", "ulx-ember/documentation/components/elements/progressbar/snippets/Template.gjs", "ulx-ember/documentation/components/elements/progressbar/snippets/Indeterminate.gjs"], function (_exports, _Basic, _Dynamic, _Template, _Indeterminate, _Import, _Basic2, _Dynamic2, _Template2, _Indeterminate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "DynamicDemo", {
    enumerable: true,
    get: function () {
      return _Dynamic.default;
    }
  });
  Object.defineProperty(_exports, "DynamicSource", {
    enumerable: true,
    get: function () {
      return _Dynamic2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "IndeterminateDemo", {
    enumerable: true,
    get: function () {
      return _Indeterminate.default;
    }
  });
  Object.defineProperty(_exports, "IndeterminateSource", {
    enumerable: true,
    get: function () {
      return _Indeterminate2.default;
    }
  });
  Object.defineProperty(_exports, "TemplateDemo", {
    enumerable: true,
    get: function () {
      return _Template.default;
    }
  });
  Object.defineProperty(_exports, "TemplateSource", {
    enumerable: true,
    get: function () {
      return _Template2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/ProgressBar/Basic",0,"ulx-ember/components/Demo/ProgressBar/Dynamic",0,"ulx-ember/components/Demo/ProgressBar/Template",0,"ulx-ember/components/Demo/ProgressBar/Indeterminate",0,"ulx-ember/documentation/components/elements/progressbar/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/progressbar/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/progressbar/snippets/Dynamic.gjs",0,"ulx-ember/documentation/components/elements/progressbar/snippets/Template.gjs",0,"ulx-ember/documentation/components/elements/progressbar/snippets/Indeterminate.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Progress Bar Demo Components Barrel Export
  // ==========================================================================
});
;define("ulx-ember/documentation/components/elements/progressbar/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // Progress Bar Component Metadata
  // ==========================================================================
  var _default = _exports.default = {
    category: 'Elements',
    subCategory: 'Misc',
    menuItem: 'Progress Bar',
    routeBase: '/components/elements/progressbar',
    icon: 'pi pi-chart-line',
    header: 'Progress Bar',
    subHeader: 'Progress Bar indicates progress (0–100%) or an indeterminate loading state. Uses uls-v2 progress-bar.less.',
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    }],
    importMsg: "import { UlxProgressBar } from 'ulx-components';",
    accessibility: {
      description: 'Determinate: role="progressbar" with aria-valuenow, aria-valuemin, aria-valuemax. Indeterminate: aria-valuetext="Loading".',
      example: '<UlxProgressBar @value={{50}} aria-label="Upload progress" />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/progressbar/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressBar } from 'ulx-components';

<template>
  <UlxProgressBar @value={{50}} @size="m" />
</template>
`;
});
;define("ulx-ember/documentation/components/elements/progressbar/snippets/Dynamic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxProgressBar, UlxToast } from 'ulx-components';

const INTERVAL_MS = 2000;

export default class DynamicProgressBarDemo extends Component {
  @tracked value = 0;
  @tracked messages = [];

  _interval = null;

  @action
  startInterval() {
    this._interval = setInterval(() => this.tick(), INTERVAL_MS);
  }

  @action
  clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  tick() {
    this.value += Math.floor(Math.random() * 10) + 1;
    if (this.value >= 100) {
      this.value = 100;
      this.messages = [
        ...this.messages,
        {
          id: \`msg-\${Date.now()}\`,
          severity: 'info',
          summary: 'Success',
          detail: 'Process Completed',
        },
      ];
      this.clearInterval();
    }
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div {{did-insert this.startInterval}} {{will-destroy this.clearInterval}}>
      <UlxProgressBar @value={{this.value}} @size="m" />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/progressbar/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressBar } from 'ulx-components';

<UlxProgressBar @value={{50}} />
`;
});
;define("ulx-ember/documentation/components/elements/progressbar/snippets/Indeterminate.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressBar } from 'ulx-components';

<template>
  <UlxProgressBar @mode="indeterminate" @size="m" aria-label="Loading" />
</template>
`;
});
;define("ulx-ember/documentation/components/elements/progressbar/snippets/Template.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressBar } from 'ulx-components';

<template>
  <UlxProgressBar @value={{40}} @size="m">
    <:content as |value|>
      {{value}}/<b>100</b>
    </:content>
  </UlxProgressBar>
</template>
`;
});
;define("ulx-ember/documentation/components/elements/progressspinner/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // ProgressSpinner Builder Schema
  // ==========================================================================

  const stateToProps = state => ({
    size: state.size,
    ariaLabel: state.ariaLabel || undefined,
    customClass: state.customClass || undefined
  });
  const stateToSnippet = state => {
    const p = stateToProps(state);
    const attrs = [];
    if (p.size) attrs.push(`@size="${p.size}"`);
    if (p.ariaLabel) attrs.push(`@ariaLabel="${p.ariaLabel}"`);
    if (p.customClass) attrs.push(`@customClass="${p.customClass}"`);
    return attrs.length ? `<UlxProgressSpinner\n  ${attrs.join('\n  ')}\n/>` : '<UlxProgressSpinner />';
  };
  var _default = _exports.default = {
    componentName: 'UlxProgressSpinner',
    importLine: "import { UlxProgressSpinner } from 'ulx-components';",
    props: [{
      key: 'size',
      label: 'Size',
      type: 'select',
      default: 'm',
      options: [{
        value: 'xs',
        label: 'XS'
      }, {
        value: 's',
        label: 'S'
      }, {
        value: 'm',
        label: 'M'
      }, {
        value: 'l',
        label: 'L'
      }, {
        value: 'xl',
        label: 'XL'
      }]
    }, {
      key: 'ariaLabel',
      label: 'Aria label',
      type: 'select',
      default: 'Loading',
      options: [{
        value: 'Loading',
        label: 'Loading'
      }, {
        value: '',
        label: '(empty)'
      }]
    }, {
      key: 'customClass',
      label: 'Custom class',
      type: 'text',
      default: ''
    }],
    stateToProps,
    stateToSnippet
  };
});
;define("ulx-ember/documentation/components/elements/progressspinner/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/progressspinner/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ProgressSpinnerFeatureItems = void 0;
  _exports.default = ProgressSpinnerFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/progressspinner/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // ProgressSpinner Feature Items
  // ==========================================================================
  const ProgressSpinnerFeatureItems = _exports.ProgressSpinnerFeatureItems = [{
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>import</code> property is used to import the <code>ProgressSpinner</code> component.'
      }
    },
    demo: {
      component: null,
      props: {
        source: _imports.ImportSource,
        snippetName: 'import',
        language: 'jsx'
      }
    }
  }, {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Basic</code> demo shows a single ProgressSpinner with <code>@size="xl"</code> (largest size from uls-v2). Use <code>@ariaLabel</code> when it is the main loading indicator.'
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: 'basic',
        language: 'handlebars'
      }
    }
  }, {
    id: 'custom',
    sectionNav: 'Custom',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Custom</code> demo shows custom usage: pass <code>@size</code> and <code>@customClass</code> from the parent. Styling uses only existing uls-v2 <code>progress-spinner.less</code> (xs/s/m/l/xl-size).'
      }
    },
    demo: {
      component: _imports.CustomDemo,
      props: {
        source: _imports.CustomSource,
        snippetName: 'custom',
        language: 'handlebars'
      }
    }
  }];
  function ProgressSpinnerFeatures() {
    return ProgressSpinnerFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/progressspinner/imports", ["exports", "ulx-ember/components/Demo/ProgressSpinner/Basic", "ulx-ember/components/Demo/ProgressSpinner/Custom", "ulx-ember/documentation/components/elements/progressspinner/snippets/Import.gjs", "ulx-ember/documentation/components/elements/progressspinner/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/progressspinner/snippets/Custom.gjs"], function (_exports, _Basic, _Custom, _Import, _Basic2, _Custom2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "CustomDemo", {
    enumerable: true,
    get: function () {
      return _Custom.default;
    }
  });
  Object.defineProperty(_exports, "CustomSource", {
    enumerable: true,
    get: function () {
      return _Custom2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/ProgressSpinner/Basic",0,"ulx-ember/components/Demo/ProgressSpinner/Custom",0,"ulx-ember/documentation/components/elements/progressspinner/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/progressspinner/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/progressspinner/snippets/Custom.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // ProgressSpinner Demo Components Barrel Export
  // ==========================================================================
});
;define("ulx-ember/documentation/components/elements/progressspinner/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // ProgressSpinner Component Metadata
  // ==========================================================================
  var _default = _exports.default = {
    category: 'Elements',
    subCategory: 'Misc',
    menuItem: 'ProgressSpinner',
    routeBase: '/components/elements/progressspinner',
    icon: 'pi pi-spinner',
    header: 'ProgressSpinner',
    subHeader: 'ProgressSpinner is a process status indicator that displays an infinite circular spinner.',
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    }],
    importMsg: "import { UlxProgressSpinner } from 'ulx-components';",
    accessibility: {
      description: 'Use role="progressbar" (indeterminate). Pass aria-label when the spinner is the main loading indicator.',
      example: '<UlxProgressSpinner @ariaLabel="Loading" />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/progressspinner/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxProgressSpinner } from 'ulx-components';

export default class DemoProgressSpinnerBasic extends Component {
  <template>
    <UlxProgressSpinner @size="xl" @ariaLabel="Loading" />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/progressspinner/snippets/Custom.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxProgressSpinner } from 'ulx-components';

export default class DemoProgressSpinnerCustom extends Component {
  get size() {
    return this.args.size ?? 'm';
  }

  get customClass() {
    return this.args.customClass;
  }

  <template>
    <UlxProgressSpinner
      @size={{this.size}}
      @customClass={{this.customClass}}
      @ariaLabel="Loading"
    />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/progressspinner/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxProgressSpinner } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/progressspinner/snippets/Sizes.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
<div class="fxb fvc gp4">
  <UlxProgressSpinner @size="xs" aria-hidden="true" />
  <UlxProgressSpinner @size="s" aria-hidden="true" />
  <UlxProgressSpinner @size="m" @ariaLabel="Loading" />
  <UlxProgressSpinner @size="l" aria-hidden="true" />
  <UlxProgressSpinner @size="xl" aria-hidden="true" />
</div>

`;
});
;define("ulx-ember/documentation/components/elements/tieredmenu/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/tieredmenu/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.TieredmenuFeatureItems = void 0;
  _exports.default = TieredmenuFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/tieredmenu/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Tieredmenu Feature Items
  // ==========================================================================
  const TieredmenuFeatureItems = _exports.TieredmenuFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxTieredmenu</code> component."
      }
    },
    demo: {
      component: null,
      // Import section doesn't need demo
      props: {
        source: _imports.ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  }, {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the Tieredmenu component with nested submenus."
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  }, {
    id: "popup",
    sectionNav: "Popup",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Popup</code> demo shows the Tieredmenu in popup/overlay mode, triggered by a button. Use <code>@popup={{true}}</code>, <code>@visible</code>, and <code>@onHide</code> to control visibility."
      }
    },
    demo: {
      component: _imports.PopupDemo,
      props: {
        source: _imports.PopupSource,
        snippetName: "popup",
        language: "handlebars"
      }
    }
  }, {
    id: "template",
    sectionNav: "Template",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Template</code> demo shows custom item rendering with <code>badge</code>, <code>shortcut</code> properties and custom <code>@itemTemplate</code> component. The template receives <code>@item</code>, <code>@hasSubmenu</code>, and <code>@onClick</code> arguments."
      }
    },
    demo: {
      component: _imports.TemplateDemo,
      props: {
        source: _imports.TemplateSource,
        snippetName: "template",
        language: "handlebars"
      }
    }
  }];
  function TieredmenuFeatures() {
    return TieredmenuFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/tieredmenu/imports", ["exports", "ulx-ember/components/Demo/Tieredmenu/Basic", "ulx-ember/components/Demo/Tieredmenu/Popup", "ulx-ember/components/Demo/Tieredmenu/Template", "ulx-ember/documentation/components/elements/tieredmenu/snippets/Import.gjs", "ulx-ember/documentation/components/elements/tieredmenu/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/tieredmenu/snippets/Popup.gjs", "ulx-ember/documentation/components/elements/tieredmenu/snippets/Template.gjs"], function (_exports, _Basic, _Popup, _Template, _Import, _Basic2, _Popup2, _Template2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "PopupDemo", {
    enumerable: true,
    get: function () {
      return _Popup.default;
    }
  });
  Object.defineProperty(_exports, "PopupSource", {
    enumerable: true,
    get: function () {
      return _Popup2.default;
    }
  });
  Object.defineProperty(_exports, "TemplateDemo", {
    enumerable: true,
    get: function () {
      return _Template.default;
    }
  });
  Object.defineProperty(_exports, "TemplateSource", {
    enumerable: true,
    get: function () {
      return _Template2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Tieredmenu/Basic",0,"ulx-ember/components/Demo/Tieredmenu/Popup",0,"ulx-ember/components/Demo/Tieredmenu/Template",0,"ulx-ember/documentation/components/elements/tieredmenu/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/tieredmenu/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/tieredmenu/snippets/Popup.gjs",0,"ulx-ember/documentation/components/elements/tieredmenu/snippets/Template.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Tieredmenu Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Tieredmenu demo components
  // Demo Components
  // Import source (for import section)
  // Tieredmenu Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Tieredmenu demo source files
});
;define("ulx-ember/documentation/components/elements/tieredmenu/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // TIEREDMENU COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Tieredmenu component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Menu',
    menuItem: 'Tieredmenu',
    routeBase: '/components/elements/tieredmenu',
    icon: 'pi pi-bars',
    // Page metadata
    header: 'Tieredmenu',
    subHeader: 'Tieredmenu displays submenus in nested overlays.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }],
    // Import message for the component
    importMsg: "import { UlxTieredmenu } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: "Tieredmenu component with keyboard navigation and ARIA support.",
      example: "<UlxTieredmenu @model={{items}} />"
    }
  };
});
;define("ulx-ember/documentation/components/elements/tieredmenu/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTieredmenu } from 'ulx-components';

export default class BasicTieredmenuDemo extends Component {
  get items() {
    return [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              { label: 'Project', icon: 'pi pi-folder' },
              { label: 'File', icon: 'pi pi-file' },
              { separator: true },
              {
                label: 'From Template',
                icon: 'pi pi-copy',
                items: [
                  { label: 'React Template', icon: 'pi pi-code' },
                  { label: 'Ember Template', icon: 'pi pi-code' },
                  { label: 'Vue Template', icon: 'pi pi-code' },
                ],
              },
            ],
          },
          { label: 'Open', icon: 'pi pi-folder-open' },
          { separator: true },
          {
            label: 'Export',
            icon: 'pi pi-upload',
            items: [
              { label: 'PDF', icon: 'pi pi-file-pdf' },
              { label: 'Excel', icon: 'pi pi-file-excel' },
              { label: 'CSV', icon: 'pi pi-file' },
            ],
          },
          { separator: true },
          { label: 'Exit', icon: 'pi pi-times' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Undo', icon: 'pi pi-undo' },
          { label: 'Redo', icon: 'pi pi-refresh' },
          { separator: true },
          {
            label: 'Find',
            icon: 'pi pi-search',
            items: [
              { label: 'Find...', icon: 'pi pi-search' },
              { label: 'Find and Replace', icon: 'pi pi-sync' },
              { label: 'Find in Files', icon: 'pi pi-folder' },
            ],
          },
        ],
      },
      {
        label: 'View',
        icon: 'pi pi-eye',
        items: [
          { label: 'Zoom In', icon: 'pi pi-search-plus' },
          { label: 'Zoom Out', icon: 'pi pi-search-minus' },
        ],
      },
      { separator: true },
      {
        label: 'Help',
        icon: 'pi pi-question-circle',
      },
    ];
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="pda4">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/tieredmenu/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxTieredmenu } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/tieredmenu/snippets/Popup.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { UlxTieredmenu, UlxButton } from 'ulx-components';

export default class PopupTieredmenuDemo extends Component {
  @tracked isMenuVisible = false;

  /** Close menu when click is outside the wrapper (PrimeReact-style). */
  closeOnClickOutside = modifier((element, [when], { onClose }) => {
    let listener = null;
    if (when && typeof onClose === 'function') {
      const handler = (e) => {
        if (!element.contains(e.target)) {
          onClose();
        }
      };
      const add = () => {
        listener = handler;
        document.addEventListener('click', listener, true);
      };
      setTimeout(add, 0);
    }
    return () => {
      if (listener) {
        document.removeEventListener('click', listener, true);
      }
    };
  });

  get items() {
    return [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              { label: 'Project', icon: 'pi pi-folder' },
              { label: 'File', icon: 'pi pi-file' },
              { label: 'From Template', icon: 'pi pi-copy' },
            ],
          },
          { label: 'Open', icon: 'pi pi-folder-open' },
          { separator: true },
          { label: 'Exit', icon: 'pi pi-times' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        items: [
          { label: 'Undo', icon: 'pi pi-undo' },
          { label: 'Redo', icon: 'pi pi-refresh' },
        ],
      },
      {
        label: 'Help',
        icon: 'pi pi-question-circle',
        command: () => console.log('Help clicked'),
      },
    ];
  }

  @action
  toggleMenu(event) {
    event.stopPropagation();
    this.isMenuVisible = !this.isMenuVisible;
  }

  @action
  hideMenu() {
    this.isMenuVisible = false;
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div
      class="pda4 pos-rel"
      {{this.closeOnClickOutside this.isMenuVisible onClose=this.hideMenu}}
    >
      <UlxButton
        @label="Show"
        @severity="primary"
        {{on "click" this.toggleMenu}}
        aria-haspopup="menu"
        aria-expanded={{this.isMenuVisible}}
      />

      <div class="pos-abs t-100 l-0 z-1000 mgt4">
        <UlxTieredmenu
          @model={{this.items}}
          @popup={{true}}
          @visible={{this.isMenuVisible}}
          @onHide={{this.hideMenu}}
          @onItemSelect={{this.handleItemSelect}}
        />
      </div>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/tieredmenu/snippets/Template.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTieredmenu } from 'ulx-components';

// Custom item renderer using tieredmenu-item-link for proper styling
const ItemRenderer = <template>
  <button
    type="button"
    class="tieredmenu-item-link"
    role="menuitem"
    {{on "click" @onClick}}
  >
    {{#if @item.icon}}
      <span
        class="tieredmenu-item-icon {{@item.icon}}"
        aria-hidden="true"
      ></span>
    {{/if}}
    <span class="tieredmenu-item-label">{{@item.label}}</span>
    {{#if @item.badge}}
      <span class="uls-badge info mgl-auto">{{@item.badge}}</span>
    {{/if}}
    {{#if @item.shortcut}}
      <span
        class="mgl-auto bd pdh2 pdv1 font-size12 bg-layer1 rds2 fg-text-secondary"
      >{{@item.shortcut}}</span>
    {{/if}}
  </button>
</template>;

export default class TemplateTieredmenuDemo extends Component {
  itemRenderer = ItemRenderer;

  get items() {
    return [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'Document',
                icon: 'pi pi-file',
                shortcut: '⌘+N',
                template: this.itemRenderer,
              },
              {
                label: 'Image',
                icon: 'pi pi-image',
                shortcut: '⌘+I',
                template: this.itemRenderer,
              },
              {
                label: 'Video',
                icon: 'pi pi-video',
                shortcut: '⌘+L',
                template: this.itemRenderer,
              },
            ],
          },
          {
            label: 'Open',
            icon: 'pi pi-folder-open',
            shortcut: '⌘+O',
            template: this.itemRenderer,
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            shortcut: '⌘+P',
            template: this.itemRenderer,
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
          {
            label: 'Copy',
            icon: 'pi pi-copy',
            shortcut: '⌘+C',
            template: this.itemRenderer,
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            shortcut: '⌘+D',
            template: this.itemRenderer,
          },
        ],
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        shortcut: '⌘+S',
        template: this.itemRenderer,
      },
      {
        separator: true,
      },
      {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
          {
            label: 'Slack',
            icon: 'pi pi-slack',
            badge: 2,
            template: this.itemRenderer,
          },
          {
            label: 'Whatsapp',
            icon: 'pi pi-whatsapp',
            badge: 3,
            template: this.itemRenderer,
          },
        ],
      },
    ];
  }

  @action
  handleItemSelect(item) {
    console.log('Selected:', item.label);
  }

  <template>
    <div class="pda4">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/ulx-icon-input/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // ULXICONINPUT BUILDER SCHEMA
  // ==========================================================================
  // Default builder schema for IconInput.
  // Customize props, stateToProps, and stateToSnippet based on the component API.
  var _default = _exports.default = {
    componentName: 'UlxIconInput',
    importLine: "import { UlxIconInput } from 'ulx-components';",
    props: [],
    stateToProps: () => ({}),
    stateToSnippet: () => '<UlxIconInput />'
  };
});
;define("ulx-ember/documentation/components/elements/ulx-icon-input/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/ulx-icon-input/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.UlxIconInputFeatureItems = void 0;
  _exports.default = UlxIconInputFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/ulx-icon-input/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // UlxIconInput Feature Items
  // ==========================================================================
  const UlxIconInputFeatureItems = _exports.UlxIconInputFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxIconInput</code> component."
      }
    },
    demo: {
      component: null,
      // Import section doesn't need demo
      props: {
        source: _imports.ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  }, {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the UlxIconInput component."
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  }, {
    id: "named-blocks",
    sectionNav: "Namedblocks",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Namedblocks</code> demo shows NamedBlocks usage of the UlxIconInput component."
      }
    },
    demo: {
      component: _imports.NamedblocksDemo,
      props: {
        source: _imports.NamedblocksSource,
        snippetName: "named-blocks",
        language: "handlebars"
      }
    }
  }];
  function UlxIconInputFeatures() {
    return UlxIconInputFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/ulx-icon-input/imports", ["exports", "ulx-ember/components/Demo/UlxIconInput/Basic", "ulx-ember/components/Demo/UlxIconInput/Namedblocks", "ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Import.gjs", "ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Namedblocks.gjs"], function (_exports, _Basic, _Namedblocks, _Import, _Basic2, _Namedblocks2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "NamedblocksDemo", {
    enumerable: true,
    get: function () {
      return _Namedblocks.default;
    }
  });
  Object.defineProperty(_exports, "NamedblocksSource", {
    enumerable: true,
    get: function () {
      return _Namedblocks2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/UlxIconInput/Basic",0,"ulx-ember/components/Demo/UlxIconInput/Namedblocks",0,"ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Namedblocks.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // UlxIconInput Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all UlxIconInput demo components
  // Demo Components
  // Import source (for import section)
  // UlxIconInput Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all UlxIconInput demo source files
});
;define("ulx-ember/documentation/components/elements/ulx-icon-input/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // ULXICONINPUT COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for UlxIconInput component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Form',
    menuItem: 'IconInput',
    routeBase: '/components/elements/ulx-icon-input',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'IconInput',
    subHeader: 'IconInput is a component for user interaction.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Builder',
      route: '/builder',
      id: 'builder'
    }, {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }],
    // Import message for the component
    importMsg: "import { UlxIconInput } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: "UlxIconInput component description for accessibility.",
      example: "<UlxIconInput />"
    }
  };
});
;define("ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxIconInput } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxIconInput
      @iconName="search-icon"
      @iconType="font"
      @iconClass="bs-icons1"
      @iconPosition="left"
      @iconSize="s18"
      @fieldClass="col-4"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxIconInput } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/ulx-icon-input/snippets/Namedblocks.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxIconInput } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxIconInput
      @iconType="font"
      @iconPosition="left"
      @iconSize="s18"
      @fieldClass="col-4"
      placeholder="Search"
      aria-label="Search"
    >
      <:label><span class="bold-font">Calendar</span></:label>
      <:icon>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1621 9.63281C15.365 9.44555 15.6809 9.45824 15.8682 9.66113C16.0554 9.86404 16.0427 10.1799 15.8398 10.3672L9.33984 16.3672C9.24106 16.4583 9.10983 16.5058 8.97559 16.499C8.87512 16.4939 8.77935 16.459 8.7002 16.3994L8.62695 16.3311L7.45996 15.0127L7.40039 14.9297C7.28452 14.7282 7.32204 14.4667 7.50293 14.3066C7.68389 14.1466 7.94792 14.1415 8.13379 14.2812L8.20801 14.3496L9.03613 15.2861L15.1621 9.63281Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 2C17.2761 2 17.5 2.22386 17.5 2.5V4H18L18.2061 4.00488C20.3194 4.11211 22 5.85996 22 8V18L21.9951 18.2061C21.8913 20.2512 20.2512 21.8913 18.2061 21.9951L18 22H6L5.79395 21.9951C3.7488 21.8913 2.10865 20.2512 2.00488 18.2061L2 18V8C2 5.85996 3.68056 4.11211 5.79395 4.00488L6 4H6.5V2.5C6.5 2.22386 6.72386 2 7 2C7.27614 2 7.5 2.22386 7.5 2.5V4H16.5V2.5C16.5 2.22386 16.7239 2 17 2ZM6 5C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5H17.5V6.5C17.5 6.77614 17.2761 7 17 7C16.7239 7 16.5 6.77614 16.5 6.5V5H7.5V6.5C7.5 6.77614 7.27614 7 7 7C6.72386 7 6.5 6.77614 6.5 6.5V5H6Z"
            fill="black"
          />
        </svg>

      </:icon>
    </UlxIconInput>
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/modules/toast/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/modules/toast/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ToastFeatureItems = void 0;
  _exports.default = ToastFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/modules/toast/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Toast Feature Items
  // ==========================================================================
  const ToastFeatureItems = _exports.ToastFeatureItems = [{
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: "The <code>import</code> property is used to import the <code>UlxToast</code> component."
      }
    },
    demo: {
      component: null,
      props: {
        source: _imports.ImportSource,
        snippetName: 'import',
        language: 'jsx'
      }
    }
  }, {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'The <code>Basic</code> demo shows a single toast message. Pass <code>@messages</code> (array of message objects) and <code>@onClose</code> to remove messages.'
      }
    },
    demo: {
      component: _imports.BasicDemo,
      props: {
        source: _imports.BasicSource,
        snippetName: 'basic',
        language: 'handlebars'
      }
    }
  }, {
    id: 'severities',
    sectionNav: 'Severities',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Toast supports <code>info</code>, <code>success</code>, <code>warn</code>, <code>error</code>, <code>secondary</code>, and <code>contrast</code> severities per message.'
      }
    },
    demo: {
      component: _imports.SeveritiesDemo,
      props: {
        source: _imports.SeveritiesSource,
        snippetName: 'severities',
        language: 'handlebars'
      }
    }
  }, {
    id: 'positions',
    sectionNav: 'Positions',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Use <code>@position</code> to place the toast container: <code>top-left</code>, <code>top-center</code>, <code>top-right</code>, <code>center</code>, <code>bottom-left</code>, <code>bottom-center</code>, <code>bottom-right</code>. Default is <code>top-right</code>.'
      }
    },
    demo: {
      component: _imports.PositionsDemo,
      props: {
        source: _imports.PositionsSource,
        snippetName: 'positions',
        language: 'handlebars'
      }
    }
  }, {
    id: 'variants',
    sectionNav: 'Variants',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Per-message <code>variant</code>: <code>elevated</code>, <code>flat</code>, or <code>outlined</code>. Messages can be <code>closable</code>, <code>sticky</code>, or <code>showIcon: false</code>.'
      }
    },
    demo: {
      component: _imports.VariantsDemo,
      props: {
        source: _imports.VariantsSource,
        snippetName: 'variants',
        language: 'handlebars'
      }
    }
  }, {
    id: 'multiple',
    sectionNav: 'Multiple',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Multiple messages are displayed by passing an array to the show method. Click "Multiple" to add several messages at once to the same toast container.'
      }
    },
    demo: {
      component: _imports.MultipleDemo,
      props: {
        source: _imports.MultipleSource,
        snippetName: 'multiple',
        language: 'handlebars'
      }
    }
  }, {
    id: 'sticky',
    sectionNav: 'Sticky',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'A message disappears after the <code>@life</code> duration (e.g. 3000ms). To display messages that remain visible and do not hide automatically, set <code>sticky: true</code> on the message. Use "Clear" to remove all messages.'
      }
    },
    demo: {
      component: _imports.StickyDemo,
      props: {
        source: _imports.StickySource,
        snippetName: 'sticky',
        language: 'handlebars'
      }
    }
  }, {
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: _richText.default,
      props: {
        as: 'span',
        content: 'Custom content inside a message is defined with the <code>&lt;:content&gt;</code> block. Yield the message and render your own layout (e.g. sender name, summary, and actions like Reply).'
      }
    },
    demo: {
      component: _imports.TemplateDemo,
      props: {
        source: _imports.TemplateSource,
        snippetName: 'template',
        language: 'handlebars'
      }
    }
  }];
  function ToastFeatures() {
    return ToastFeatureItems;
  }
});
;define("ulx-ember/documentation/components/modules/toast/imports", ["exports", "ulx-ember/components/Demo/Toast/Basic", "ulx-ember/components/Demo/Toast/Severities", "ulx-ember/components/Demo/Toast/Positions", "ulx-ember/components/Demo/Toast/Variants", "ulx-ember/components/Demo/Toast/Multiple", "ulx-ember/components/Demo/Toast/Sticky", "ulx-ember/components/Demo/Toast/Template", "ulx-ember/documentation/components/modules/toast/snippets/Import.gjs", "ulx-ember/documentation/components/modules/toast/snippets/Basic.gjs", "ulx-ember/documentation/components/modules/toast/snippets/Severities.gjs", "ulx-ember/documentation/components/modules/toast/snippets/Positions.gjs", "ulx-ember/documentation/components/modules/toast/snippets/Variants.gjs", "ulx-ember/documentation/components/modules/toast/snippets/Multiple.gjs", "ulx-ember/documentation/components/modules/toast/snippets/Sticky.gjs", "ulx-ember/documentation/components/modules/toast/snippets/Template.gjs"], function (_exports, _Basic, _Severities, _Positions, _Variants, _Multiple, _Sticky, _Template, _Import, _Basic2, _Severities2, _Positions2, _Variants2, _Multiple2, _Sticky2, _Template2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "BasicDemo", {
    enumerable: true,
    get: function () {
      return _Basic.default;
    }
  });
  Object.defineProperty(_exports, "BasicSource", {
    enumerable: true,
    get: function () {
      return _Basic2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  Object.defineProperty(_exports, "MultipleDemo", {
    enumerable: true,
    get: function () {
      return _Multiple.default;
    }
  });
  Object.defineProperty(_exports, "MultipleSource", {
    enumerable: true,
    get: function () {
      return _Multiple2.default;
    }
  });
  Object.defineProperty(_exports, "PositionsDemo", {
    enumerable: true,
    get: function () {
      return _Positions.default;
    }
  });
  Object.defineProperty(_exports, "PositionsSource", {
    enumerable: true,
    get: function () {
      return _Positions2.default;
    }
  });
  Object.defineProperty(_exports, "SeveritiesDemo", {
    enumerable: true,
    get: function () {
      return _Severities.default;
    }
  });
  Object.defineProperty(_exports, "SeveritiesSource", {
    enumerable: true,
    get: function () {
      return _Severities2.default;
    }
  });
  Object.defineProperty(_exports, "StickyDemo", {
    enumerable: true,
    get: function () {
      return _Sticky.default;
    }
  });
  Object.defineProperty(_exports, "StickySource", {
    enumerable: true,
    get: function () {
      return _Sticky2.default;
    }
  });
  Object.defineProperty(_exports, "TemplateDemo", {
    enumerable: true,
    get: function () {
      return _Template.default;
    }
  });
  Object.defineProperty(_exports, "TemplateSource", {
    enumerable: true,
    get: function () {
      return _Template2.default;
    }
  });
  Object.defineProperty(_exports, "VariantsDemo", {
    enumerable: true,
    get: function () {
      return _Variants.default;
    }
  });
  Object.defineProperty(_exports, "VariantsSource", {
    enumerable: true,
    get: function () {
      return _Variants2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Toast/Basic",0,"ulx-ember/components/Demo/Toast/Severities",0,"ulx-ember/components/Demo/Toast/Positions",0,"ulx-ember/components/Demo/Toast/Variants",0,"ulx-ember/components/Demo/Toast/Multiple",0,"ulx-ember/components/Demo/Toast/Sticky",0,"ulx-ember/components/Demo/Toast/Template",0,"ulx-ember/documentation/components/modules/toast/snippets/Import.gjs",0,"ulx-ember/documentation/components/modules/toast/snippets/Basic.gjs",0,"ulx-ember/documentation/components/modules/toast/snippets/Severities.gjs",0,"ulx-ember/documentation/components/modules/toast/snippets/Positions.gjs",0,"ulx-ember/documentation/components/modules/toast/snippets/Variants.gjs",0,"ulx-ember/documentation/components/modules/toast/snippets/Multiple.gjs",0,"ulx-ember/documentation/components/modules/toast/snippets/Sticky.gjs",0,"ulx-ember/documentation/components/modules/toast/snippets/Template.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Toast Demo Components Barrel Export
  // ==========================================================================
  // Demo Components
  // Import source (for import section)
  // Toast Demo Sources
});
;define("ulx-ember/documentation/components/modules/toast/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // TOAST COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Toast component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Modules',
    subCategory: 'Message',
    menuItem: 'Toast',
    routeBase: '/components/modules/toast',
    icon: 'pi pi-bell',
    // Page metadata
    header: 'Toast',
    subHeader: 'Toast displays overlay notifications with different severities and positions.',
    // Tab configuration
    tabs: [{
      name: 'Features',
      route: '/features',
      id: 'features'
    }, {
      name: 'Theming',
      route: '/theming',
      id: 'theming'
    }, {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }],
    // Import message for the component
    importMsg: "import { UlxToast } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Toast component with role="region", role="alert" on messages, and accessible close buttons.',
      example: '<UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />'
    }
  };
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxToast } from 'ulx-components';

export default class BasicToastDemo extends Component {
  get messages() {
    return [
      {
        id: '1',
        severity: 'info',
        summary: 'Info',
        detail: 'This is a basic toast message.',
      },
    ];
  }

  @action
  removeMessage(message) {
    // Parent removes message from state (e.g. filter by id)
  }

  <template>
    <UlxToast
      @messages={{this.messages}}
      @onClose={{this.removeMessage}}
    />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxToast } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Multiple.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToast, UlxButton } from 'ulx-components';

export default class MultipleToastDemo extends Component {
  @tracked messages = [];

  @action
  showMultiple() {
    const now = Date.now();
    this.messages = [
      ...this.messages,
      { id: \`msg-\${now}-1\`, severity: 'info', summary: 'Info', detail: 'Info message.' },
      { id: \`msg-\${now}-2\`, severity: 'success', summary: 'Success', detail: 'Success message.' },
      { id: \`msg-\${now}-3\`, severity: 'warn', summary: 'Warn', detail: 'Warn message.' },
      { id: \`msg-\${now}-4\`, severity: 'error', summary: 'Error', detail: 'Error message.' },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label="Multiple" @severity="warning" {{on "click" this.showMultiple}} />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Positions.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxToast } from 'ulx-components';

export default class PositionsToastDemo extends Component {
  get messages() {
    return [
      { id: '1', severity: 'info', summary: 'Position', detail: 'Bottom-right (default).' },
    ];
  }

  <template>
    <UlxToast
      @messages={{this.messages}}
      @position="bottom-right"
    />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Severities.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxToast } from 'ulx-components';

export default class SeveritiesToastDemo extends Component {
  get messages() {
    return [
      { id: '1', severity: 'info', summary: 'Info', detail: 'Info message.' },
      { id: '2', severity: 'success', summary: 'Success', detail: 'Success message.' },
      { id: '3', severity: 'warn', summary: 'Warn', detail: 'Warning message.' },
      { id: '4', severity: 'error', summary: 'Error', detail: 'Error message.' },
      { id: '5', severity: 'secondary', summary: 'Secondary', detail: 'Secondary message.' },
      { id: '6', severity: 'contrast', summary: 'Contrast', detail: 'Contrast message.' },
    ];
  }

  <template>
    <UlxToast @messages={{this.messages}} />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Sticky.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToast, UlxButton } from 'ulx-components';

export default class StickyToastDemo extends Component {
  @tracked messages = [];

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-sticky\`,
        severity: 'info',
        summary: 'Sticky',
        detail: 'This message stays visible until you close it.',
        sticky: true,
      },
    ];
  }

  @action
  clearAll() {
    this.messages = [];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label="Sticky" @severity="secondary" {{on "click" this.showSticky}} />
    <UlxButton @label="Clear" @severity="secondary" {{on "click" this.clearAll}} />
    <UlxToast
      @messages={{this.messages}}
      @life={{3000}}
      @onClose={{this.removeMessage}}
    />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Template.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class TemplateToastDemo extends Component {
  @tracked messages = [];

  @action
  showTemplateToast() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-template\`,
        severity: 'success',
        summary: 'Can you send me the report?',
        sticky: true,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label="Confirm" @severity="primary" {{on "click" this.showTemplateToast}} />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}}>
      <:content as |message|>
        <div class="fxb column gp4">
          <span class="fw-semibold">Amy Elsner</span>
          <div class="fw-medium">{{message.summary}}</div>
          <UlxButton
            @label="Reply"
            @severity="success"
            @size="small"
            {{on "click" (fn this.removeMessage message)}}
          />
        </div>
      </:content>
    </UlxToast>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/modules/toast/snippets/Variants.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxToast } from 'ulx-components';

export default class VariantsToastDemo extends Component {
  get messages() {
    return [
      { id: '1', severity: 'info', summary: 'Elevated', detail: 'Variant: elevated', variant: 'elevated' },
      { id: '2', severity: 'success', summary: 'Flat', detail: 'Variant: flat', variant: 'flat' },
      { id: '3', severity: 'warn', summary: 'Outlined', detail: 'Variant: outlined', variant: 'outlined' },
      { id: '4', severity: 'info', summary: 'No icon', detail: 'showIcon: false', showIcon: false },
      { id: '5', severity: 'info', summary: 'Sticky', detail: 'Does not auto-close', sticky: true },
    ];
  }

  <template>
    <UlxToast @messages={{this.messages}} />
  </template>
}

`;
});
;define("ulx-ember/documentation/utils/builder-schema-helpers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createClassCheckboxProp = createClassCheckboxProp;
  _exports.createConditionalSizeProp = createConditionalSizeProp;
  _exports.createLayerProp = createLayerProp;
  _exports.toLayerOption = toLayerOption;
  _exports.toSimpleOption = toSimpleOption;
  _exports.toSizeOption = toSizeOption;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // Builder Schema Helpers
  // ==========================================================================
  // Reusable utilities for creating component builder schemas from extracted tokens.
  // Used by icon, button, input, badge, and other component builders.
  //
  // Each component imports its own tokens file and uses these helpers to build options.
  //
  // Example usage (for button component):
  //   import buttonTokens from '../../../../tokens/button-tokens';
  //   import { toSimpleOption, createConditionalSizeProp } from '../../../utils/builder-schema-helpers';
  //
  //   export default {
  //     componentName: 'UlxButton',
  //     importLine: "import { UlxButton } from 'ulx-components';",
  //     props: [
  //       {
  //         key: 'severity',
  //         label: 'Severity',
  //         type: 'radio',
  //         default: 'primary',
  //         options: (buttonTokens['severity'] ?? []).map(toSimpleOption),
  //       },
  //       createConditionalSizeProp({
  //         normalTokens: buttonTokens['sizes'] ?? [],
  //         shapedTokens: buttonTokens['shaped sizes'] ?? [],
  //       }),
  //       // ... other props
  //     ],
  //     stateToProps: (state) => ({ ... }),
  //     stateToSnippet: (state) => { ... },
  //   };

  /**
   * Convert a size value to an option object with value and label.
   * Handles patterns like "s24" → {value: "s24", label: "24"} and "xl2" → {value: "xl2", label: "2XL"}.
   */
  function toSizeOption(value) {
    if (/^s\d+$/.test(value)) {
      return {
        value,
        label: value.replace(/^s/, '')
      };
    }
    if (value === 'xl2') return {
      value,
      label: '2XL'
    };
    if (value === 'xl3') return {
      value,
      label: '3XL'
    };
    if (value === 'xl4') return {
      value,
      label: '4XL'
    };
    if (value === 'xl5') return {
      value,
      label: '5XL'
    };
    if (value === 'xl6') return {
      value,
      label: '6XL'
    };
    if (value === 'xl7') return {
      value,
      label: '7XL'
    };
    return {
      value,
      label: value.toUpperCase()
    };
  }

  /**
   * Convert a layer class value to an option with "rounded" suffix.
   * Example: "primary-layer" → {value: "primary-layer rounded", label: "Primary"}.
   */
  function toLayerOption(value, suffix = ' rounded') {
    const label = value.replace(/-layer$/, '').replace(/^(\w)/, c => c.toUpperCase());
    return {
      value: `${value}${suffix}`,
      label
    };
  }

  /**
   * Convert a simple token value to an option (capitalizes label).
   * Example: "primary" → {value: "primary", label: "Primary"}.
   */
  function toSimpleOption(value) {
    const label = value.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return {
      value,
      label
    };
  }

  /**
   * Create a size prop with conditional options based on a mode.
   * @param {Object} config - {key, label, modeKey, normalTokens, shapedTokens, defaultNormal, defaultShaped}
   */
  function createConditionalSizeProp(config) {
    const {
      key = 'size',
      label = 'Size',
      modeKey = 'sizeMode',
      normalTokens = [],
      shapedTokens = [],
      defaultNormal
    } = config;
    const defaultVal = defaultNormal ?? normalTokens[0] ?? '';
    return {
      key,
      label,
      type: 'radio',
      default: defaultVal,
      getOptions(state) {
        if (state[modeKey] === 'layeredBg' || state[modeKey] === 'shaped') {
          return shapedTokens.map(toSizeOption);
        }
        return normalTokens.map(toSizeOption);
      }
    };
  }

  /**
   * Create a layer prop that's visible only when a mode is set.
   * @param {Object} config - {key, label, modeKey, layerTokens, suffix}
   */
  function createLayerProp(config) {
    const {
      key = 'customClass',
      label = 'Layer',
      modeKey = 'sizeMode',
      layerTokens = [],
      suffix = ' rounded'
    } = config;
    return {
      key,
      label,
      type: 'select',
      default: '',
      visibleWhen: state => state[modeKey] === 'layeredBg' || state[modeKey] === 'shaped',
      options: [{
        value: '',
        label: 'None'
      }, ...layerTokens.map(v => toLayerOption(v, suffix))]
    };
  }

  /**
   * Create a checkbox prop (typically used to toggle a class in stateToProps).
   * The class name is handled in the component's stateToProps function.
   * @param {Object} config - {key, label}
   */
  function createClassCheckboxProp(config) {
    const {
      key = 'spin',
      label = 'Spin'
    } = config;
    return {
      key,
      label,
      type: 'checkbox',
      default: false
    };
  }
});
;define("ulx-ember/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/app-version", ["exports", "@ember/component/helper", "ulx-ember/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"ulx-ember/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("ulx-ember/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _eq.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/get-code-snippet", ["exports", "ember-code-snippet/helpers/get-code-snippet"], function (_exports, _getCodeSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _getCodeSnippet.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-code-snippet/helpers/get-code-snippet"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEq.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("ulx-ember/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("ulx-ember/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ulx-ember/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"ulx-ember/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("ulx-ember/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("ulx-ember/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("ulx-ember/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("ulx-ember/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("ulx-ember/router", ["exports", "@ember/routing/router", "ulx-ember/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"ulx-ember/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('walkthrough');
    this.route('foundation', function () {
      this.route('typography');
      this.route('colors');
    });
    this.route('components', function () {
      this.route('collections', function () {
        this.route('test-comp');
      });
      this.route('elements', function () {
        this.route('icon');
        this.route('input');
        this.route('ulx-icon-input');
        this.route('input-group');
        this.route('button', {
          path: '/button'
        });
        this.route('tieredmenu', {
          path: '/tieredmenu'
        });
        this.route('progressbar', {
          path: '/progressbar'
        });
        this.route('progressspinner', {
          path: '/progressspinner'
        });
      });
      this.route('modules', {
        path: '/modules'
      }, function () {
        this.route('toast', {
          path: '/toast'
        });
      });
    });
    this.route('utilities', function () {
      this.route('index', {
        path: '/'
      });
      this.route('space');
      this.route('gap');
      this.route('grid');
      this.route('flex');
      this.route('display');
      this.route('position');
      this.route('size');
      this.route('cursor');
      this.route('text-align');
      this.route('text-transform');
      this.route('text-decoration');
      this.route('vertical-align');
      this.route('float');
      this.route('clear');
      this.route('word-break');
      this.route('visibility');
      this.route('overflow');
      this.route('color');
      this.route('hover');
      this.route('line-clamp');
      this.route('border');
      this.route('shadow');
      this.route('z-index');
      this.route('opacity');
      this.route('filter');
      this.route('object-fit');
      this.route('user-select');
      this.route('pointer-events');
      this.route('white-space');
    });
  });
});
;define("ulx-ember/routes/components/collections", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ComponentsCollectionsRoute extends _route.default {
    model() {
      return {
        useReactComponents: false,
        reactProps: {}
      };
    }
  }
  _exports.default = ComponentsCollectionsRoute;
});
;define("ulx-ember/routes/components/collections/test-comp", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/collections/test-comp/features", "ulx-ember/documentation/components/collections/test-comp/meta"], function (_exports, _route, _features, _meta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/collections/test-comp/features",0,"ulx-ember/documentation/components/collections/test-comp/meta"eaimeta@70e063a35619d71f
  class ComponentsCollectionsTestCompRoute extends _route.default {
    model() {
      return {
        features: _features.TestCompFeatureItems,
        meta: _meta.default
      };
    }
  }
  _exports.default = ComponentsCollectionsTestCompRoute;
});
;define("ulx-ember/routes/components/elements/button", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/button/features", "ulx-ember/documentation/components/elements/button/meta", "ulx-ember/documentation/components/elements/button/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/button/features",0,"ulx-ember/documentation/components/elements/button/meta",0,"ulx-ember/documentation/components/elements/button/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsButtonRoute extends _route.default {
    model() {
      return {
        features: _features.ButtonFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsButtonRoute;
});
;define("ulx-ember/routes/components/elements/icon", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/icon/features", "ulx-ember/documentation/components/elements/icon/meta", "ulx-ember/documentation/components/elements/icon/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/icon/features",0,"ulx-ember/documentation/components/elements/icon/meta",0,"ulx-ember/documentation/components/elements/icon/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsIconRoute extends _route.default {
    model() {
      return {
        features: _features.IconFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsIconRoute;
});
;define("ulx-ember/routes/components/elements/input-group", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/input-group/features", "ulx-ember/documentation/components/elements/input-group/meta", "ulx-ember/documentation/components/elements/input-group/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/input-group/features",0,"ulx-ember/documentation/components/elements/input-group/meta",0,"ulx-ember/documentation/components/elements/input-group/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsInputGroupRoute extends _route.default {
    model() {
      return {
        features: _features.InputGroupFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsInputGroupRoute;
});
;define("ulx-ember/routes/components/elements/input", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/input/features", "ulx-ember/documentation/components/elements/input/meta", "ulx-ember/documentation/components/elements/input/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/input/features",0,"ulx-ember/documentation/components/elements/input/meta",0,"ulx-ember/documentation/components/elements/input/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsInputRoute extends _route.default {
    model() {
      return {
        features: _features.InputFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsInputRoute;
});
;define("ulx-ember/routes/components/elements/progressbar", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/progressbar/features", "ulx-ember/documentation/components/elements/progressbar/meta", "ulx-ember/documentation/components/elements/progressbar/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/progressbar/features",0,"ulx-ember/documentation/components/elements/progressbar/meta",0,"ulx-ember/documentation/components/elements/progressbar/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsProgressbarRoute extends _route.default {
    model() {
      return {
        features: _features.ProgressBarFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsProgressbarRoute;
});
;define("ulx-ember/routes/components/elements/progressspinner", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/progressspinner/features", "ulx-ember/documentation/components/elements/progressspinner/meta", "ulx-ember/documentation/components/elements/progressspinner/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/progressspinner/features",0,"ulx-ember/documentation/components/elements/progressspinner/meta",0,"ulx-ember/documentation/components/elements/progressspinner/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsProgressspinnerRoute extends _route.default {
    model() {
      return {
        features: _features.ProgressSpinnerFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsProgressspinnerRoute;
});
;define("ulx-ember/routes/components/elements/tieredmenu", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/tieredmenu/features", "ulx-ember/documentation/components/elements/tieredmenu/meta"], function (_exports, _route, _features, _meta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/tieredmenu/features",0,"ulx-ember/documentation/components/elements/tieredmenu/meta"eaimeta@70e063a35619d71f
  class ComponentsElementsTieredmenuRoute extends _route.default {
    model() {
      return {
        features: _features.TieredmenuFeatureItems,
        meta: _meta.default
      };
    }
  }
  _exports.default = ComponentsElementsTieredmenuRoute;
});
;define("ulx-ember/routes/components/elements/ulx-icon-input", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/ulx-icon-input/features", "ulx-ember/documentation/components/elements/ulx-icon-input/meta", "ulx-ember/documentation/components/elements/ulx-icon-input/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/ulx-icon-input/features",0,"ulx-ember/documentation/components/elements/ulx-icon-input/meta",0,"ulx-ember/documentation/components/elements/ulx-icon-input/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsUlxIconInputRoute extends _route.default {
    model() {
      return {
        features: _features.UlxIconInputFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsUlxIconInputRoute;
});
;define("ulx-ember/routes/components/modules/toast", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/modules/toast/features", "ulx-ember/documentation/components/modules/toast/meta"], function (_exports, _route, _features, _meta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/modules/toast/features",0,"ulx-ember/documentation/components/modules/toast/meta"eaimeta@70e063a35619d71f
  class ComponentsModulesToastRoute extends _route.default {
    model() {
      return {
        features: _features.ToastFeatureItems,
        meta: _meta.default
      };
    }
  }
  _exports.default = ComponentsModulesToastRoute;
});
;define("ulx-ember/routes/foundation/colors", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class FoundationColorsRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactColors: _foundation.Colors,
        reactProps: {}
      };
    }
  }
  _exports.default = FoundationColorsRoute;
});
;define("ulx-ember/routes/foundation/typography", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class FoundationTypographyRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactTypography: _foundation.Typography,
        reactProps: {}
      };
    }
  }
  _exports.default = FoundationTypographyRoute;
});
;define("ulx-ember/routes/utilities/border", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesBorderRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactBorderUtilities: _foundation.BorderUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesBorderRoute;
});
;define("ulx-ember/routes/utilities/clear", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesClearRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactClearUtilities: _foundation.ClearUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesClearRoute;
});
;define("ulx-ember/routes/utilities/color", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesColorRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactColorUtilities: _foundation.ColorUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesColorRoute;
});
;define("ulx-ember/routes/utilities/cursor", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesCursorRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactCursor: _foundation.Cursor,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesCursorRoute;
});
;define("ulx-ember/routes/utilities/display", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesDisplayRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactDisplay: _foundation.Display,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesDisplayRoute;
});
;define("ulx-ember/routes/utilities/filter", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesFilterRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactFilterUtilities: _foundation.FilterUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesFilterRoute;
});
;define("ulx-ember/routes/utilities/flex", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesFlexRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactFlex: _foundation.Flex,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesFlexRoute;
});
;define("ulx-ember/routes/utilities/float", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesFloatRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactFloatUtilities: _foundation.FloatUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesFloatRoute;
});
;define("ulx-ember/routes/utilities/gap", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  // app/routes/utilities/gap.js
  class UtilitiesGapRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactGap: _foundation.Gap,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesGapRoute;
});
;define("ulx-ember/routes/utilities/grid", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesGridRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactGridUtilities: _foundation.GridUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesGridRoute;
});
;define("ulx-ember/routes/utilities/hover", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesHoverRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactHoverUtilities: _foundation.HoverUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesHoverRoute;
});
;define("ulx-ember/routes/utilities/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",1,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesIndexRoute extends _route.default {
    async model() {
      // Import React Utilities component from @ulx/foundation
      let ReactUtilities;
      try {
        const utilitiesModule = await import("@ulx/foundation");
        ReactUtilities = utilitiesModule.Utilities ?? utilitiesModule.default;
      } catch (error) {
        console.error('Could not load React Utilities component:', error);
        if (error.message) {
          console.error('Error message:', error.message);
        }
        if (error.stack) {
          console.error('Error stack:', error.stack);
        }
      }
      return {
        useReactComponents: !!ReactUtilities,
        ReactUtilities
      };
    }
  }
  _exports.default = UtilitiesIndexRoute;
});
;define("ulx-ember/routes/utilities/line-clamp", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesLineClampRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactLineClampUtilities: _foundation.LineClampUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesLineClampRoute;
});
;define("ulx-ember/routes/utilities/object-fit", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesObjectFitRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactObjectFitUtilities: _foundation.ObjectFitUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesObjectFitRoute;
});
;define("ulx-ember/routes/utilities/opacity", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesOpacityRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactOpacityUtilities: _foundation.OpacityUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesOpacityRoute;
});
;define("ulx-ember/routes/utilities/overflow", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesOverflowRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactOverflowUtilities: _foundation.OverflowUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesOverflowRoute;
});
;define("ulx-ember/routes/utilities/pointer-events", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesPointerEventsRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactPointerEventsUtilities: _foundation.PointerEventsUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesPointerEventsRoute;
});
;define("ulx-ember/routes/utilities/position", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesPositionRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactPosition: _foundation.Position,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesPositionRoute;
});
;define("ulx-ember/routes/utilities/shadow", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesShadowRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactShadowUtilities: _foundation.ShadowUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesShadowRoute;
});
;define("ulx-ember/routes/utilities/size", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesSizeRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactSize: _foundation.Size,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesSizeRoute;
});
;define("ulx-ember/routes/utilities/space", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesSpaceRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactSpace: _foundation.Space,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesSpaceRoute;
});
;define("ulx-ember/routes/utilities/text-align", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesTextAlignRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactTextAlign: _foundation.TextAlign,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesTextAlignRoute;
});
;define("ulx-ember/routes/utilities/text-decoration", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesTextDecorationRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactTextDecoration: _foundation.TextDecoration,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesTextDecorationRoute;
});
;define("ulx-ember/routes/utilities/text-transform", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesTextTransformRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactTextTransform: _foundation.TextTransform,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesTextTransformRoute;
});
;define("ulx-ember/routes/utilities/user-select", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesUserSelectRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactUserSelectUtilities: _foundation.UserSelectUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesUserSelectRoute;
});
;define("ulx-ember/routes/utilities/vertical-align", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesVerticalAlignRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactVerticalAlign: _foundation.VerticalAlign,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesVerticalAlignRoute;
});
;define("ulx-ember/routes/utilities/visibility", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesVisibilityRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactVisibilityUtilities: _foundation.VisibilityUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesVisibilityRoute;
});
;define("ulx-ember/routes/utilities/white-space", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesWhiteSpaceRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactWhiteSpaceUtilities: _foundation.WhiteSpaceUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesWhiteSpaceRoute;
});
;define("ulx-ember/routes/utilities/word-break", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesWordBreakRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactWordBreakUtilities: _foundation.WordBreakUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesWordBreakRoute;
});
;define("ulx-ember/routes/utilities/z-index", ["exports", "@ember/routing/route", "@ulx/foundation"], function (_exports, _route, _foundation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ulx/foundation"eaimeta@70e063a35619d71f
  class UtilitiesZIndexRoute extends _route.default {
    model() {
      return {
        useReactComponents: true,
        ReactZIndexUtilities: _foundation.ZIndexUtilities,
        reactProps: {}
      };
    }
  }
  _exports.default = UtilitiesZIndexRoute;
});
;define("ulx-ember/routes/walkthrough", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class WalkthroughRoute extends _route.default {}
  _exports.default = WalkthroughRoute;
});
;define("ulx-ember/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("ulx-ember/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ulx-ember/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "ULX Ember Documentation"}}
  
  <UlxDocsHeader />
  
  <div class="ulx-container-fluid pdt6 fxb">
    <Common::DocLayout::DocSidebar />
    <div class="ulsp-app-routes-container fxauto">
      {{outlet}}
    </div>
  </div>
  */
  {
    "id": "UPcQcDkW",
    "block": "[[[1,[28,[35,0],[\"ULX Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[10,0],[14,0,\"ulx-container-fluid pdt6 fxb\"],[12],[1,\"\\n  \"],[8,[39,3],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"ulsp-app-routes-container fxauto\"],[12],[1,\"\\n    \"],[46,[28,[37,5],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"page-title\",\"ulx-docs-header\",\"div\",\"common/doc-layout/doc-sidebar\",\"component\",\"-outlet\"]]",
    "moduleName": "ulx-ember/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/collections", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{outlet}}
  */
  {
    "id": "KlGgRHBb",
    "block": "[[[46,[28,[37,1],null,null],null,null,null]],[],[\"component\",\"-outlet\"]]",
    "moduleName": "ulx-ember/templates/components/collections.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/collections/test-comp", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "test-comp - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-collections-test-comp-theming"
          @title="Theming"
          @subtitle="Theming documentation for test-comp component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-collections-test-comp-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for test-comp component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "ek+7Uz0i",
    "block": "[[[1,[28,[35,0],[\"test-comp - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-collections-test-comp-theming\",\"Theming\",\"Theming documentation for test-comp component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-collections-test-comp-passthrough\",\"Pass Through\",\"Pass Through props documentation for test-comp component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/components/collections/test-comp.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/button", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Button - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-button-theming"
          @title="Theming"
          @subtitle="Theming documentation for Button component."
        >
          <p class="fg-text-secondary">Button component theming uses ULS class names (uls-button, uls-button-primary, etc.) which can be styled via the ULS design system.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview as |props|>
          <UlxButton
            @label={{props.label}}
            @icon={{props.icon}}
            @iconPos={{props.iconPos}}
            @severity={{props.severity}}
            @size={{props.size}}
            @outlined={{props.outlined}}
            @text={{props.text}}
            @raised={{props.raised}}
            @rounded={{props.rounded}}
            @disabled={{props.disabled}}
            @loading={{props.loading}}
            @fluid={{props.fluid}}
            @badge={{props.badge}}
          />
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "vsezqm/Y",
    "block": "[[[1,[28,[35,0],[\"Button - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-button-theming\",\"Theming\",\"Theming documentation for Button component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Button component theming uses ULS class names (uls-button, uls-button-primary, etc.) which can be styled via the ULS design system.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[8,[39,9],null,[[\"@label\",\"@icon\",\"@iconPos\",\"@severity\",\"@size\",\"@outlined\",\"@text\",\"@raised\",\"@rounded\",\"@disabled\",\"@loading\",\"@fluid\",\"@badge\"],[[30,2,[\"label\"]],[30,2,[\"icon\"]],[30,2,[\"iconPos\"]],[30,2,[\"severity\"]],[30,2,[\"size\"]],[30,2,[\"outlined\"]],[30,2,[\"text\"]],[30,2,[\"raised\"]],[30,2,[\"rounded\"]],[30,2,[\"disabled\"]],[30,2,[\"loading\"]],[30,2,[\"fluid\"]],[30,2,[\"badge\"]]]],null],[1,\"\\n      \"]],[2]]]]],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\",\"props\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"ulx-button\"]]",
    "moduleName": "ulx-ember/templates/components/elements/button.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/icon", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Icon - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-icon-theming"
          @title="Theming"
          @subtitle="Theming documentation for Icon component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview as |props|>
          <UlxIcon
            @componentClass={{props.componentClass}}
            @type={{props.type}}
            @iconName={{props.iconName}}
            @size={{props.size}}
            @ariaLabel={{props.ariaLabel}}
            @customClass={{props.customClass}}
          />
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  */
  {
    "id": "4KiJEQW0",
    "block": "[[[1,[28,[35,0],[\"Icon - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-icon-theming\",\"Theming\",\"Theming documentation for Icon component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[8,[39,9],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[[30,2,[\"componentClass\"]],[30,2,[\"type\"]],[30,2,[\"iconName\"]],[30,2,[\"size\"]],[30,2,[\"ariaLabel\"]],[30,2,[\"customClass\"]]]],null],[1,\"\\n      \"]],[2]]]]],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]]],[\"@model\",\"props\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"ulx-icon\"]]",
    "moduleName": "ulx-ember/templates/components/elements/icon.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/input-group", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "InputGroup - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-input-group-theming"
          @title="Theming"
          @subtitle="Theming documentation for InputGroup component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview>
          <div class="pd6 fg-text-secondary font-size12">
            Preview not configured yet. Update
            <code>app/documentation/components/elements/input-group/builder-schema.js</code>
            and this template to render the component with the generated props.
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-input-group-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for InputGroup component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "ultwSWh/",
    "block": "[[[1,[28,[35,0],[\"InputGroup - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-input-group-theming\",\"Theming\",\"Theming documentation for InputGroup component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"pd6 fg-text-secondary font-size12\"],[12],[1,\"\\n          Preview not configured yet. Update\\n          \"],[10,\"code\"],[12],[1,\"app/documentation/components/elements/input-group/builder-schema.js\"],[13],[1,\"\\n          and this template to render the component with the generated props.\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-input-group-passthrough\",\"Pass Through\",\"Pass Through props documentation for InputGroup component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"code\"]]",
    "moduleName": "ulx-ember/templates/components/elements/input-group.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/input", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Input - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-input-theming"
          @title="Theming"
          @subtitle="Theming documentation for Input component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview as |props|>
          <div class="ulx-form s-size ulx-grid gp12">
            <UlxInput
              @label={{props.label}}
              @floatLabel={{props.floatLabel}}
              @rules={{props.rules}}
              @helpText={{props.helpText}}
              @errorMessage={{props.errorMessage}}
              @size={{props.size}}
              @fieldClass={{props.fieldClass}}
              @type={{props.type}}
              @keyfilter={{props.keyfilter}}
              @filled={{props.filled}}
              @disabled={{props.disabled}}
              @readonly={{props.readonly}}
              placeholder={{props.placeholder}}
              aria-label={{props.label}}
            />
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-input-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for Input component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  */
  {
    "id": "UHp//yaM",
    "block": "[[[1,[28,[35,0],[\"Input - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-input-theming\",\"Theming\",\"Theming documentation for Input component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"ulx-form s-size ulx-grid gp12\"],[12],[1,\"\\n          \"],[8,[39,9],[[16,\"placeholder\",[30,2,[\"placeholder\"]]],[16,\"aria-label\",[30,2,[\"label\"]]]],[[\"@label\",\"@floatLabel\",\"@rules\",\"@helpText\",\"@errorMessage\",\"@size\",\"@fieldClass\",\"@type\",\"@keyfilter\",\"@filled\",\"@disabled\",\"@readonly\"],[[30,2,[\"label\"]],[30,2,[\"floatLabel\"]],[30,2,[\"rules\"]],[30,2,[\"helpText\"]],[30,2,[\"errorMessage\"]],[30,2,[\"size\"]],[30,2,[\"fieldClass\"]],[30,2,[\"type\"]],[30,2,[\"keyfilter\"]],[30,2,[\"filled\"]],[30,2,[\"disabled\"]],[30,2,[\"readonly\"]]]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[2]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-input-passthrough\",\"Pass Through\",\"Pass Through props documentation for Input component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]]],[\"@model\",\"props\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"ulx-input\"]]",
    "moduleName": "ulx-ember/templates/components/elements/input.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/progressbar", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Progress Bar - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-progressbar-theming"
          @title="Theming"
          @subtitle="Theming documentation for Progress Bar component."
        >
          <p class="fg-text-secondary">Progress Bar uses uls-v2
            progress-bar classes (ulx-progressbar, ulx-progressbar-value,
            ulx-progressbar-label) from progress-bar.less.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview as |props|>
          <UlxProgressBar
            @value={{props.value}}
            @mode={{props.mode}}
            @showValue={{props.showValue}}
            @size={{props.size}}
            @severity={{props.severity}}
            @customClass={{props.customClass}}
          />
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "9VnDj35I",
    "block": "[[[1,[28,[35,0],[\"Progress Bar - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-progressbar-theming\",\"Theming\",\"Theming documentation for Progress Bar component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Progress Bar uses uls-v2\\n          progress-bar classes (ulx-progressbar, ulx-progressbar-value,\\n          ulx-progressbar-label) from progress-bar.less.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[8,[39,9],null,[[\"@value\",\"@mode\",\"@showValue\",\"@size\",\"@severity\",\"@customClass\"],[[30,2,[\"value\"]],[30,2,[\"mode\"]],[30,2,[\"showValue\"]],[30,2,[\"size\"]],[30,2,[\"severity\"]],[30,2,[\"customClass\"]]]],null],[1,\"\\n      \"]],[2]]]]],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\",\"props\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"ulx-progress-bar\"]]",
    "moduleName": "ulx-ember/templates/components/elements/progressbar.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/progressspinner", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "ProgressSpinner - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-progressspinner-theming"
          @title="Theming"
          @subtitle="Theming documentation for ProgressSpinner component."
        >
          <p class="fg-text-secondary">ProgressSpinner uses uls-v2
            progress-spinner classes (ulx-progressspinner,
            ulx-progressspinner-svg, ulx-progressspinner-circle) from
            progress-spinner.less.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview as |props|>
          <UlxProgressSpinner
            @size={{props.size}}
            @ariaLabel={{props.ariaLabel}}
            @customClass={{props.customClass}}
          />
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  */
  {
    "id": "+3BrS1EL",
    "block": "[[[1,[28,[35,0],[\"ProgressSpinner - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-progressspinner-theming\",\"Theming\",\"Theming documentation for ProgressSpinner component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"ProgressSpinner uses uls-v2\\n          progress-spinner classes (ulx-progressspinner,\\n          ulx-progressspinner-svg, ulx-progressspinner-circle) from\\n          progress-spinner.less.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[8,[39,9],null,[[\"@size\",\"@ariaLabel\",\"@customClass\"],[[30,2,[\"size\"]],[30,2,[\"ariaLabel\"]],[30,2,[\"customClass\"]]]],null],[1,\"\\n      \"]],[2]]]]],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]]],[\"@model\",\"props\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"ulx-progress-spinner\"]]",
    "moduleName": "ulx-ember/templates/components/elements/progressspinner.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/tieredmenu", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Tieredmenu - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-tieredmenu-theming"
          @title="Theming"
          @subtitle="Theming documentation for Tieredmenu component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-tieredmenu-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for Tieredmenu component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  */
  {
    "id": "NI1cH8lF",
    "block": "[[[1,[28,[35,0],[\"Tieredmenu - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-tieredmenu-theming\",\"Theming\",\"Theming documentation for Tieredmenu component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-tieredmenu-passthrough\",\"Pass Through\",\"Pass Through props documentation for Tieredmenu component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/components/elements/tieredmenu.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/ulx-icon-input", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "IconInput - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-ulx-icon-input-theming"
          @title="Theming"
          @subtitle="Theming documentation for IconInput component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview>
          <div class="pd6 fg-text-secondary font-size12">
            Preview not configured yet. Update
            <code>app/documentation/components/elements/ulx-icon-input/builder-schema.js</code>
            and this template to render the component with the generated props.
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-ulx-icon-input-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for IconInput component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "VKXQJYCu",
    "block": "[[[1,[28,[35,0],[\"IconInput - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-ulx-icon-input-theming\",\"Theming\",\"Theming documentation for IconInput component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"pd6 fg-text-secondary font-size12\"],[12],[1,\"\\n          Preview not configured yet. Update\\n          \"],[10,\"code\"],[12],[1,\"app/documentation/components/elements/ulx-icon-input/builder-schema.js\"],[13],[1,\"\\n          and this template to render the component with the generated props.\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-ulx-icon-input-passthrough\",\"Pass Through\",\"Pass Through props documentation for IconInput component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"code\"]]",
    "moduleName": "ulx-ember/templates/components/elements/ulx-icon-input.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/modules", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{outlet}}
  
  */
  {
    "id": "Gx1csabc",
    "block": "[[[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"]],[],[\"component\",\"-outlet\"]]",
    "moduleName": "ulx-ember/templates/components/modules.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/modules/toast", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Toast - ULS Ember Documentation"}}
  
  <Common::DocMain::ComponentLayout
    @title={{@model.meta.header}}
    @description={{@model.meta.subHeader}}
    @tabs={{this.tabs}}
    @activeTab={{this.activeTab}}
    @onTabChange={{this.onTabChange}}
  >
    {{#if this.isFeaturesTab}}
      <Common::DocMain::DocPanel @features={{@model.features}} />
    {{else if this.isThemingTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-modules-toast-theming"
          @title="Theming"
          @subtitle="Theming documentation for Toast component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-modules-toast-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for Toast component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "ZdZFuH80",
    "block": "[[[1,[28,[35,0],[\"Toast - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-modules-toast-theming\",\"Theming\",\"Theming documentation for Toast component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-modules-toast-passthrough\",\"Pass Through\",\"Pass Through props documentation for Toast component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/components/modules/toast.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/foundation/colors", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Colors - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Colors" 
    @description="Palette layers, semantic tokens, and theming workflow."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactColors}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="colors-overview"
          @title="Colors"
          @subtitle="Palette layers, semantic tokens, and theming workflow."
        >
          <p class="fg-text-secondary">React Colors component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "7hlDPAZo",
    "block": "[[[1,[28,[35,0],[\"Colors - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Colors\",\"Palette layers, semantic tokens, and theming workflow.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactColors\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"colors-overview\",\"Colors\",\"Palette layers, semantic tokens, and theming workflow.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Colors component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/foundation/colors.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/foundation/typography", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Typography - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Typography" 
    @description="Standardized font scale, heading system, and other utilities."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactTypography}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="typography-overview"
          @title="Typography"
          @subtitle="Standardized font scale, heading system, and other utilities."
        >
          <p class="fg-text-secondary">React Typography component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  */
  {
    "id": "EgOHkWVI",
    "block": "[[[1,[28,[35,0],[\"Typography - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Typography\",\"Standardized font scale, heading system, and other utilities.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTypography\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"typography-overview\",\"Typography\",\"Standardized font scale, heading system, and other utilities.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Typography component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/foundation/typography.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/border", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Border Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Border Utilities" 
    @description="Border utility classes for controlling element borders."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactBorderUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-border"
          @title="Border Utilities"
          @subtitle="Border utility classes for controlling element borders."
        >
          <p class="fg-text-secondary">React BorderUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "kF89skbe",
    "block": "[[[1,[28,[35,0],[\"Border Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Border Utilities\",\"Border utility classes for controlling element borders.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactBorderUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-border\",\"Border Utilities\",\"Border utility classes for controlling element borders.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React BorderUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/border.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/clear", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Clear Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Clear Utilities" 
    @description="Clear utility classes for controlling element clear behavior."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactClearUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-clear"
          @title="Clear Utilities"
          @subtitle="Clear utility classes for controlling element clear behavior."
        >
          <p class="fg-text-secondary">React ClearUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "m/xBYyn1",
    "block": "[[[1,[28,[35,0],[\"Clear Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Clear Utilities\",\"Clear utility classes for controlling element clear behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactClearUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-clear\",\"Clear Utilities\",\"Clear utility classes for controlling element clear behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ClearUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/clear.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/color", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Color Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Color Utilities" 
    @description="Color utility classes for text and background colors."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactColorUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-color"
          @title="Color Utilities"
          @subtitle="Color utility classes for text and background colors."
        >
          <p class="fg-text-secondary">React ColorUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "/MxkY5du",
    "block": "[[[1,[28,[35,0],[\"Color Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Color Utilities\",\"Color utility classes for text and background colors.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactColorUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-color\",\"Color Utilities\",\"Color utility classes for text and background colors.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ColorUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/color.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/cursor", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Cursor Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Cursor Utilities" 
    @description="Cursor utility classes for controlling mouse cursor appearance."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactCursor}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-cursor"
          @title="Cursor Utilities"
          @subtitle="Cursor utility classes for controlling mouse cursor appearance."
        >
          <p class="fg-text-secondary">React Cursor component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "5FpUeHGa",
    "block": "[[[1,[28,[35,0],[\"Cursor Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Cursor Utilities\",\"Cursor utility classes for controlling mouse cursor appearance.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactCursor\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-cursor\",\"Cursor Utilities\",\"Cursor utility classes for controlling mouse cursor appearance.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Cursor component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/cursor.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/display", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Display Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Display Utilities" 
    @description="Display utility classes for controlling element display type."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactDisplay}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-display"
          @title="Display Utilities"
          @subtitle="Display utility classes for controlling element display type."
        >
          <p class="fg-text-secondary">React Display component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "zEWCOUQl",
    "block": "[[[1,[28,[35,0],[\"Display Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Display Utilities\",\"Display utility classes for controlling element display type.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactDisplay\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-display\",\"Display Utilities\",\"Display utility classes for controlling element display type.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Display component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/display.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/filter", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Filter Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Filter Utilities" 
    @description="Filter utility classes for applying CSS filters."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactFilterUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-filter"
          @title="Filter Utilities"
          @subtitle="Filter utility classes for applying CSS filters."
        >
          <p class="fg-text-secondary">React FilterUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "5tVs9JrO",
    "block": "[[[1,[28,[35,0],[\"Filter Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Filter Utilities\",\"Filter utility classes for applying CSS filters.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactFilterUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-filter\",\"Filter Utilities\",\"Filter utility classes for applying CSS filters.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React FilterUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/filter.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/flex", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Flex Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Flex Utilities" 
    @description="Flexbox utility classes for layout."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge @component={{@model.ReactFlex}} />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-flex"
          @title="Flex Utilities"
          @subtitle="Flexbox utility classes for layout."
        >
          <p class="fg-text-secondary">React Flex component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "ojWunYV1",
    "block": "[[[1,[28,[35,0],[\"Flex Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Flex Utilities\",\"Flexbox utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactFlex\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-flex\",\"Flex Utilities\",\"Flexbox utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Flex component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/flex.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/float", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Float Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Float Utilities" 
    @description="Float utility classes for controlling element float behavior."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactFloatUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-float"
          @title="Float Utilities"
          @subtitle="Float utility classes for controlling element float behavior."
        >
          <p class="fg-text-secondary">React FloatUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "82puuZj/",
    "block": "[[[1,[28,[35,0],[\"Float Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Float Utilities\",\"Float utility classes for controlling element float behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactFloatUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-float\",\"Float Utilities\",\"Float utility classes for controlling element float behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React FloatUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/float.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/gap", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Gap Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Gap Utilities" 
    @description="Gap utility classes for flexbox and grid layouts."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactGap}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-gap"
          @title="Gap Utilities"
          @subtitle="Gap utility classes for flexbox and grid layouts."
        >
          <p class="fg-text-secondary">React Gap component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "zjdEu5xH",
    "block": "[[[1,[28,[35,0],[\"Gap Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Gap Utilities\",\"Gap utility classes for flexbox and grid layouts.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactGap\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-gap\",\"Gap Utilities\",\"Gap utility classes for flexbox and grid layouts.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Gap component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/gap.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/grid", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Grid Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Grid Utilities" 
    @description="Grid utility classes for layout."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge @component={{@model.ReactGridUtilities}} />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-grid"
          @title="Grid Utilities"
          @subtitle="Grid utility classes for layout."
        >
          <p class="fg-text-secondary">React GridUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "W8CJS3Ry",
    "block": "[[[1,[28,[35,0],[\"Grid Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Grid Utilities\",\"Grid utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactGridUtilities\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-grid\",\"Grid Utilities\",\"Grid utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React GridUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/grid.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/hover", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Hover Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Hover Utilities" 
    @description="Hover state utility classes for interactive elements."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactHoverUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-hover"
          @title="Hover Utilities"
          @subtitle="Hover state utility classes for interactive elements."
        >
          <p class="fg-text-secondary">React HoverUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "VL/RAFq7",
    "block": "[[[1,[28,[35,0],[\"Hover Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Hover Utilities\",\"Hover state utility classes for interactive elements.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactHoverUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-hover\",\"Hover Utilities\",\"Hover state utility classes for interactive elements.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React HoverUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/hover.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Utilities" 
    @description="Utility classes for spacing, layout, typography, and more."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge @component={{@model.ReactUtilities}} />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-overview"
          @title="Utilities"
          @subtitle="Utility classes for common styling needs."
        >
          <p class="fg-text-secondary">React Utilities components could not be loaded. Please ensure the ulx-foundation package is available.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "VkV4iBiz",
    "block": "[[[1,[28,[35,0],[\"Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Utilities\",\"Utility classes for spacing, layout, typography, and more.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactUtilities\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-overview\",\"Utilities\",\"Utility classes for common styling needs.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Utilities components could not be loaded. Please ensure the ulx-foundation package is available.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/index.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/line-clamp", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Line Clamp Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Line Clamp Utilities" 
    @description="Line clamp utility classes for truncating text to specific line counts."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactLineClampUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-line-clamp"
          @title="Line Clamp Utilities"
          @subtitle="Line clamp utility classes for truncating text to specific line counts."
        >
          <p class="fg-text-secondary">React LineClampUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "E3QN/zsI",
    "block": "[[[1,[28,[35,0],[\"Line Clamp Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Line Clamp Utilities\",\"Line clamp utility classes for truncating text to specific line counts.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactLineClampUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-line-clamp\",\"Line Clamp Utilities\",\"Line clamp utility classes for truncating text to specific line counts.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React LineClampUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/line-clamp.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/object-fit", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Object Fit Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Object Fit Utilities" 
    @description="Object fit utility classes for controlling how replaced elements are sized."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactObjectFitUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-object-fit"
          @title="Object Fit Utilities"
          @subtitle="Object fit utility classes for controlling how replaced elements are sized."
        >
          <p class="fg-text-secondary">React ObjectFitUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "C3zJm/Vw",
    "block": "[[[1,[28,[35,0],[\"Object Fit Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Object Fit Utilities\",\"Object fit utility classes for controlling how replaced elements are sized.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactObjectFitUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-object-fit\",\"Object Fit Utilities\",\"Object fit utility classes for controlling how replaced elements are sized.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ObjectFitUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/object-fit.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/opacity", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Opacity Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Opacity Utilities" 
    @description="Opacity utility classes for controlling element transparency."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactOpacityUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-opacity"
          @title="Opacity Utilities"
          @subtitle="Opacity utility classes for controlling element transparency."
        >
          <p class="fg-text-secondary">React OpacityUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "2GqGK0Sr",
    "block": "[[[1,[28,[35,0],[\"Opacity Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Opacity Utilities\",\"Opacity utility classes for controlling element transparency.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactOpacityUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-opacity\",\"Opacity Utilities\",\"Opacity utility classes for controlling element transparency.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React OpacityUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/opacity.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/overflow", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Overflow Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Overflow Utilities" 
    @description="Overflow utility classes for controlling element overflow behavior."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactOverflowUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-overflow"
          @title="Overflow Utilities"
          @subtitle="Overflow utility classes for controlling element overflow behavior."
        >
          <p class="fg-text-secondary">React OverflowUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "6P4xOjdY",
    "block": "[[[1,[28,[35,0],[\"Overflow Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Overflow Utilities\",\"Overflow utility classes for controlling element overflow behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactOverflowUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-overflow\",\"Overflow Utilities\",\"Overflow utility classes for controlling element overflow behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React OverflowUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/overflow.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/pointer-events", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Pointer Events Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Pointer Events Utilities" 
    @description="Pointer events utility classes for controlling pointer event handling."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactPointerEventsUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-pointer-events"
          @title="Pointer Events Utilities"
          @subtitle="Pointer events utility classes for controlling pointer event handling."
        >
          <p class="fg-text-secondary">React PointerEventsUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "E9vO3l4E",
    "block": "[[[1,[28,[35,0],[\"Pointer Events Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Pointer Events Utilities\",\"Pointer events utility classes for controlling pointer event handling.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactPointerEventsUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-pointer-events\",\"Pointer Events Utilities\",\"Pointer events utility classes for controlling pointer event handling.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React PointerEventsUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/pointer-events.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/position", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Position Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Position Utilities" 
    @description="Position utility classes for controlling element positioning."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactPosition}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-position"
          @title="Position Utilities"
          @subtitle="Position utility classes for controlling element positioning."
        >
          <p class="fg-text-secondary">React Position component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "6tZh8n9e",
    "block": "[[[1,[28,[35,0],[\"Position Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Position Utilities\",\"Position utility classes for controlling element positioning.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactPosition\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-position\",\"Position Utilities\",\"Position utility classes for controlling element positioning.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Position component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/position.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/shadow", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Shadow Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Shadow Utilities" 
    @description="Shadow utility classes for controlling element shadows."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactShadowUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-shadow"
          @title="Shadow Utilities"
          @subtitle="Shadow utility classes for controlling element shadows."
        >
          <p class="fg-text-secondary">React ShadowUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "IcUkvxVG",
    "block": "[[[1,[28,[35,0],[\"Shadow Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Shadow Utilities\",\"Shadow utility classes for controlling element shadows.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactShadowUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-shadow\",\"Shadow Utilities\",\"Shadow utility classes for controlling element shadows.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ShadowUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/shadow.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/size", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Size Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Size Utilities" 
    @description="Size utility classes for controlling element dimensions."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactSize}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-size"
          @title="Size Utilities"
          @subtitle="Size utility classes for controlling element dimensions."
        >
          <p class="fg-text-secondary">React Size component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "VfQ+LYtB",
    "block": "[[[1,[28,[35,0],[\"Size Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Size Utilities\",\"Size utility classes for controlling element dimensions.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactSize\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-size\",\"Size Utilities\",\"Size utility classes for controlling element dimensions.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Size component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/size.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/space", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Space Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Space Utilities" 
    @description="Padding and margin utility classes."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge @component={{@model.ReactSpace}} />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-space"
          @title="Space Utilities"
          @subtitle="Padding and margin utility classes."
        >
          <p class="fg-text-secondary">React Space component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "nMa1itAM",
    "block": "[[[1,[28,[35,0],[\"Space Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Space Utilities\",\"Padding and margin utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactSpace\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-space\",\"Space Utilities\",\"Padding and margin utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Space component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/space.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/text-align", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Text Align Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Text Align Utilities" 
    @description="Text alignment utility classes."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactTextAlign}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-text-align"
          @title="Text Align Utilities"
          @subtitle="Text alignment utility classes."
        >
          <p class="fg-text-secondary">React TextAlign component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "WDXhZwM5",
    "block": "[[[1,[28,[35,0],[\"Text Align Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Text Align Utilities\",\"Text alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTextAlign\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-text-align\",\"Text Align Utilities\",\"Text alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React TextAlign component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/text-align.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/text-decoration", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Text Decoration Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Text Decoration Utilities" 
    @description="Text decoration utility classes."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactTextDecoration}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-text-decoration"
          @title="Text Decoration Utilities"
          @subtitle="Text decoration utility classes."
        >
          <p class="fg-text-secondary">React TextDecoration component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "t/abuf+M",
    "block": "[[[1,[28,[35,0],[\"Text Decoration Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Text Decoration Utilities\",\"Text decoration utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTextDecoration\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-text-decoration\",\"Text Decoration Utilities\",\"Text decoration utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React TextDecoration component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/text-decoration.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/text-transform", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Text Transform Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Text Transform Utilities" 
    @description="Text transformation utility classes."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactTextTransform}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-text-transform"
          @title="Text Transform Utilities"
          @subtitle="Text transformation utility classes."
        >
          <p class="fg-text-secondary">React TextTransform component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "VtK6CQrG",
    "block": "[[[1,[28,[35,0],[\"Text Transform Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Text Transform Utilities\",\"Text transformation utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTextTransform\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-text-transform\",\"Text Transform Utilities\",\"Text transformation utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React TextTransform component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/text-transform.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/user-select", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "User Select Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="User Select Utilities" 
    @description="User select utility classes for controlling text selection behavior."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactUserSelectUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-user-select"
          @title="User Select Utilities"
          @subtitle="User select utility classes for controlling text selection behavior."
        >
          <p class="fg-text-secondary">React UserSelectUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "4CopePYs",
    "block": "[[[1,[28,[35,0],[\"User Select Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"User Select Utilities\",\"User select utility classes for controlling text selection behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactUserSelectUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-user-select\",\"User Select Utilities\",\"User select utility classes for controlling text selection behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React UserSelectUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/user-select.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/vertical-align", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Vertical Align Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Vertical Align Utilities" 
    @description="Vertical alignment utility classes."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactVerticalAlign}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-vertical-align"
          @title="Vertical Align Utilities"
          @subtitle="Vertical alignment utility classes."
        >
          <p class="fg-text-secondary">React VerticalAlign component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "4cwZvHrr",
    "block": "[[[1,[28,[35,0],[\"Vertical Align Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Vertical Align Utilities\",\"Vertical alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactVerticalAlign\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-vertical-align\",\"Vertical Align Utilities\",\"Vertical alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React VerticalAlign component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/vertical-align.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/visibility", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Visibility Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Visibility Utilities" 
    @description="Visibility utility classes for controlling element visibility."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactVisibilityUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-visibility"
          @title="Visibility Utilities"
          @subtitle="Visibility utility classes for controlling element visibility."
        >
          <p class="fg-text-secondary">React VisibilityUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "UgALH1+s",
    "block": "[[[1,[28,[35,0],[\"Visibility Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Visibility Utilities\",\"Visibility utility classes for controlling element visibility.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactVisibilityUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-visibility\",\"Visibility Utilities\",\"Visibility utility classes for controlling element visibility.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React VisibilityUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/visibility.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/white-space", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "White Space Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="White Space Utilities" 
    @description="White space utility classes for controlling how whitespace is handled."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactWhiteSpaceUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-white-space"
          @title="White Space Utilities"
          @subtitle="White space utility classes for controlling how whitespace is handled."
        >
          <p class="fg-text-secondary">React WhiteSpaceUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "E4lviE5A",
    "block": "[[[1,[28,[35,0],[\"White Space Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"White Space Utilities\",\"White space utility classes for controlling how whitespace is handled.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactWhiteSpaceUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-white-space\",\"White Space Utilities\",\"White space utility classes for controlling how whitespace is handled.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React WhiteSpaceUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/white-space.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/word-break", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Word Break Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Word Break Utilities" 
    @description="Word break utility classes for controlling text wrapping."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactWordBreakUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-word-break"
          @title="Word Break Utilities"
          @subtitle="Word break utility classes for controlling text wrapping."
        >
          <p class="fg-text-secondary">React WordBreakUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "Z+X6ENSA",
    "block": "[[[1,[28,[35,0],[\"Word Break Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Word Break Utilities\",\"Word break utility classes for controlling text wrapping.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactWordBreakUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-word-break\",\"Word Break Utilities\",\"Word break utility classes for controlling text wrapping.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React WordBreakUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/word-break.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/utilities/z-index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Z-Index Utilities - ULS Ember Documentation"}}
  
  <Common::DocMain::FoundationLayout 
    @title="Z-Index Utilities" 
    @description="Z-index utility classes for controlling element stacking order."
  >
    <div class="uls-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge
          @component={{@model.ReactZIndexUtilities}}
          @props={{@model.reactProps}}
        />
      {{else}}
        <Common::DocMain::FoundationSection 
          @id="utilities-z-index"
          @title="Z-Index Utilities"
          @subtitle="Z-index utility classes for controlling element stacking order."
        >
          <p class="fg-text-secondary">React ZIndexUtilities component could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  
  
  */
  {
    "id": "6fyGvGi/",
    "block": "[[[1,[28,[35,0],[\"Z-Index Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Z-Index Utilities\",\"Z-index utility classes for controlling element stacking order.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactZIndexUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-z-index\",\"Z-Index Utilities\",\"Z-index utility classes for controlling element stacking order.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ZIndexUtilities component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/utilities/z-index.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/walkthrough", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Get started with ULX - ULX Ember Documentation"}}
  
  <div class="ulsp-doc-tabpanel fxb fsb mgb10">
    <div class="panel-main mgr5">
      <h2 class="mgt0 mgb4 bold-font">Commands</h2>
      <p class="fg-text-secondary mgb6">Run these commands from the
        <code>ulx</code>
        directory. Use these npm scripts to create or remove demo pages and
        component variations. Replace
        <strong>ComponentName</strong>
        and
        <strong>VariationName</strong>
        with your component and variation names as needed.</p>
  
      <section class="mgb6">
        <Common::DocMain::CodePreview
          @title="Create demo-page"
          @description="Scaffolds a new demo page for a component. Use --category (e.g. collections, elements, modules) and optionally --submodule to match your docs structure."
          @source="npm run create -- demo-page 'IconInput[IconInput]' --category elements --submodule form"
          @language="bash"
        />
      </section>
  
      <section class="mgb6">
        <Common::DocMain::CodePreview
          @title="Delete demo-page"
          @description="Removes an existing demo page. Use the same --category value as when the page was created."
          @source="npm run destroy demo-page ComponentName --category collections"
          @language="bash"
        />
      </section>
  
      <section class="mgb6">
        <Common::DocMain::CodePreview
          @title="Create variations"
          @description="Adds a new variation (e.g. Default, Controlled, Disabled) to a component's demo. Pass --component and --variation. The leading -- forwards args to the underlying script."
          @source="npm run add-variation -- --component=ComponentName --variation=VariationName"
          @language="bash"
        />
      </section>
  
      <section class="mgb6">
        <Common::DocMain::CodePreview
          @title="Delete variations"
          @description="Removes a specific variation from a component. Example for removing the Controlled variation from CodePreviewComponent:"
          @source="npm run destroy-variation -- --component=ComponentName --variation=VariationName"
          @language="bash"
        />
      </section>
    </div>
  </div>
  */
  {
    "id": "hAXbiVZ1",
    "block": "[[[1,[28,[35,0],[\"Get started with ULX - ULX Ember Documentation\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"ulsp-doc-tabpanel fxb fsb mgb10\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"panel-main mgr5\"],[12],[1,\"\\n    \"],[10,\"h2\"],[14,0,\"mgt0 mgb4 bold-font\"],[12],[1,\"Commands\"],[13],[1,\"\\n    \"],[10,2],[14,0,\"fg-text-secondary mgb6\"],[12],[1,\"Run these commands from the\\n      \"],[10,\"code\"],[12],[1,\"ulx\"],[13],[1,\"\\n      directory. Use these npm scripts to create or remove demo pages and\\n      component variations. Replace\\n      \"],[10,\"strong\"],[12],[1,\"ComponentName\"],[13],[1,\"\\n      and\\n      \"],[10,\"strong\"],[12],[1,\"VariationName\"],[13],[1,\"\\n      with your component and variation names as needed.\"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Create demo-page\",\"Scaffolds a new demo page for a component. Use --category (e.g. collections, elements, modules) and optionally --submodule to match your docs structure.\",\"npm run create -- demo-page 'IconInput[IconInput]' --category elements --submodule form\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Delete demo-page\",\"Removes an existing demo page. Use the same --category value as when the page was created.\",\"npm run destroy demo-page ComponentName --category collections\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Create variations\",\"Adds a new variation (e.g. Default, Controlled, Disabled) to a component's demo. Pass --component and --variation. The leading -- forwards args to the underlying script.\",\"npm run add-variation -- --component=ComponentName --variation=VariationName\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Delete variations\",\"Removes a specific variation from a component. Example for removing the Controlled variation from CodePreviewComponent:\",\"npm run destroy-variation -- --component=ComponentName --variation=VariationName\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"page-title\",\"div\",\"h2\",\"p\",\"code\",\"strong\",\"section\",\"common/doc-main/code-preview\"]]",
    "moduleName": "ulx-ember/templates/walkthrough.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/tokens/icon-tokens", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // Auto-generated from @uls-builder comments in uls-v2 .../less/elements/icon.less
  // Run: node scripts/extract-uls-builder-tokens.js [path-to-icon.less]
  var _default = _exports.default = {
    "normal size": ["s11", "s12", "s13", "s14", "s16", "s18", "s20", "s22", "s24", "s26", "s28", "s30", "s32"],
    "colors": ["primary", "success", "warning", "danger", "info", "muted", "inverted"],
    "shaped icons size": ["xs", "sm", "md", "lg", "xl", "xl2", "xl3", "xl4", "xl5", "xl6", "xl7"],
    "layers": ["primary-layer", "success-layer", "warning-layer", "danger-layer", "info-layer"],
    "spin": ["spin-anim"]
  };
});
;define("ulx-ember/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ulx-ember/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ulx-ember/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("ulx-ember/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;

;define('ulx-ember/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ulx-ember/app")["default"].create({"name":"ulx-ember","version":"0.0.0+15060b5d"});
          }
        
//# sourceMappingURL=ulx-ember.map
