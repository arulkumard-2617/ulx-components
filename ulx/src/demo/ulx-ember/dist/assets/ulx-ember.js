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
;define("ulx-ember/components/Demo/Avatar/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-grid col-2">
    <div class="">
      <h6 class="bold-font mgb3">Square</h6>
      <div class="fxb wrap gp4 fvc">
        <UlxAvatar
          @type="text"
          @label="UL"
          @shape="square"
          @size="xl-size"
          @variant="grey"
        />
        <UlxAvatar
          @type="text"
          @label="V"
          @shape="square"
          @size="l-size"
          @variant="blue"
        />
        <UlxAvatar
          @type="text"
          @label="U"
          @shape="square"
          @size="m-size"
          @variant="purple"
        />
      </div>
    </div>
  
    <div class="">
      <h6 class="bold-font mgb3">Circle</h6>
      <div class="fxb wrap gp4 fvc">
        <UlxAvatar
          @type="text"
          @label="P"
          @shape="circle"
          @size="xl-size"
          @variant="grey"
        />
        <UlxAvatar
          @type="text"
          @label="V"
          @shape="circle"
          @size="l-size"
          @variant="blue"
        />
        <UlxAvatar
          @type="text"
          @label="U"
          @shape="circle"
          @size="m-size"
          @variant="purple"
        />
      </div>
    </div>
  </div>
  */
  {
    "id": "BR9v3PO9",
    "block": "[[[10,0],[14,0,\"ulx-grid col-2\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"\"],[12],[1,\"\\n    \"],[10,\"h6\"],[14,0,\"bold-font mgb3\"],[12],[1,\"Square\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"fxb wrap gp4 fvc\"],[12],[1,\"\\n      \"],[8,[32,0],null,[[\"@type\",\"@label\",\"@shape\",\"@size\",\"@variant\"],[\"text\",\"UL\",\"square\",\"xl-size\",\"grey\"]],null],[1,\"\\n      \"],[8,[32,0],null,[[\"@type\",\"@label\",\"@shape\",\"@size\",\"@variant\"],[\"text\",\"V\",\"square\",\"l-size\",\"blue\"]],null],[1,\"\\n      \"],[8,[32,0],null,[[\"@type\",\"@label\",\"@shape\",\"@size\",\"@variant\"],[\"text\",\"U\",\"square\",\"m-size\",\"purple\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"\"],[12],[1,\"\\n    \"],[10,\"h6\"],[14,0,\"bold-font mgb3\"],[12],[1,\"Circle\"],[13],[1,\"\\n    \"],[10,0],[14,0,\"fxb wrap gp4 fvc\"],[12],[1,\"\\n      \"],[8,[32,0],null,[[\"@type\",\"@label\",\"@shape\",\"@size\",\"@variant\"],[\"text\",\"P\",\"circle\",\"xl-size\",\"grey\"]],null],[1,\"\\n      \"],[8,[32,0],null,[[\"@type\",\"@label\",\"@shape\",\"@size\",\"@variant\"],[\"text\",\"V\",\"circle\",\"l-size\",\"blue\"]],null],[1,\"\\n      \"],[8,[32,0],null,[[\"@type\",\"@label\",\"@shape\",\"@size\",\"@variant\"],[\"text\",\"U\",\"circle\",\"m-size\",\"purple\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Avatar/Basic.js",
    "scope": () => [_ulxComponents.UlxAvatar],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/Avatar/Group", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _GroupDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class GroupDemoComponent extends _component.default {
    get avatarItems() {
      return [{
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/90.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile'
      }, {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/91.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile'
      }, {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile'
      }, {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile'
      }, {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile'
      }];
    }
  }
  _exports.default = GroupDemoComponent;
  _GroupDemoComponent = GroupDemoComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <UlxAvatarGroup
    @items={{this.avatarItems}}
    @stacked={{true}}
    @maxVisible={{4}}
    @size="l-size"
    @shape="circle"
  />
  */
  {
    "id": "+9ZbG9tB",
    "block": "[[[8,[32,0],null,[[\"@items\",\"@stacked\",\"@maxVisible\",\"@size\",\"@shape\"],[[30,0,[\"avatarItems\"]],true,4,\"l-size\",\"circle\"]],null]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Avatar/Group.js",
    "scope": () => [_ulxComponents.UlxAvatarGroup],
    "isStrictMode": true
  }), _GroupDemoComponent);
});
;define("ulx-ember/components/Demo/Avatar/Icon", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap gp4 fvc">
    <UlxAvatar
      @type="icon"
      @iconName="user-info-icon-01"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="circle"
      @size="xl-size"
      @variant="primary"
    />
    <UlxAvatar
      @type="icon"
      @iconName="contact-support-icon-01"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="circle"
      @size="l-size"
      @variant="secondary"
    />
    <UlxAvatar
      @type="icon"
      @iconName="reassign-member-icon"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="square"
      @size="m-size"
      @variant="info"
    />
  </div>
  */
  {
    "id": "lr/8wdL2",
    "block": "[[[10,0],[14,0,\"fxb wrap gp4 fvc\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@type\",\"@iconName\",\"@iconType\",\"@iconComponentClass\",\"@shape\",\"@size\",\"@variant\"],[\"icon\",\"user-info-icon-01\",\"font\",\"bs-icons1\",\"circle\",\"xl-size\",\"primary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@type\",\"@iconName\",\"@iconType\",\"@iconComponentClass\",\"@shape\",\"@size\",\"@variant\"],[\"icon\",\"contact-support-icon-01\",\"font\",\"bs-icons1\",\"circle\",\"l-size\",\"secondary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@type\",\"@iconName\",\"@iconType\",\"@iconComponentClass\",\"@shape\",\"@size\",\"@variant\"],[\"icon\",\"reassign-member-icon\",\"font\",\"bs-icons1\",\"square\",\"m-size\",\"info\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Avatar/Icon.js",
    "scope": () => [_ulxComponents.UlxAvatar],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Icon"));
});
;define("ulx-ember/components/Demo/Avatar/Image", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap gp4 fvc">
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/90.jpg"
      @imageAlt="User profile picture"
      @shape="square"
      @size="xl-size"
      @ariaLabel="User profile"
    />
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/91.jpg"
      @imageAlt="User profile picture"
      @shape="circle"
      @size="xl-size"
      @ariaLabel="User profile"
    />
  </div>
  */
  {
    "id": "syMr1p8u",
    "block": "[[[10,0],[14,0,\"fxb wrap gp4 fvc\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@type\",\"@image\",\"@imageAlt\",\"@shape\",\"@size\",\"@ariaLabel\"],[\"image\",\"https://randomuser.me/api/portraits/women/90.jpg\",\"User profile picture\",\"square\",\"xl-size\",\"User profile\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@type\",\"@image\",\"@imageAlt\",\"@shape\",\"@size\",\"@ariaLabel\"],[\"image\",\"https://randomuser.me/api/portraits/women/91.jpg\",\"User profile picture\",\"circle\",\"xl-size\",\"User profile\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Avatar/Image.js",
    "scope": () => [_ulxComponents.UlxAvatar],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Image"));
});
;define("ulx-ember/components/Demo/Badge/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <UlxBadge @value="2" @size="s-size" @variant="primary" @circle={{true}} />
  */
  {
    "id": "ozVYm/av",
    "block": "[[[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\",\"@circle\"],[\"2\",\"s-size\",\"primary\",true]],null]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Badge/Basic.js",
    "scope": () => [_ulxComponents.UlxBadge],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/Badge/Size", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _SizeDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class SizeDemoComponent extends _component.default {
    get sizes() {
      return [{
        label: '1',
        size: 'xs-size'
      }, {
        label: '2',
        size: 's-size'
      }, {
        label: '3',
        size: 'm-size'
      }, {
        label: '4',
        size: 'l-size'
      }, {
        label: '5',
        size: 'xl-size'
      }];
    }
    get dotSizes() {
      return [{
        label: '5',
        size: 'xl-size'
      }, {
        label: '4',
        size: 'l-size'
      }, {
        label: '3',
        size: 'm-size'
      }, {
        label: '2',
        size: 's-size'
      }, {
        label: '1',
        size: 'xs-size'
      }];
    }
  }
  _exports.default = SizeDemoComponent;
  _SizeDemoComponent = SizeDemoComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap gp4 fvc mgb12">
    {{#each this.sizes key="size" as |item|}}
      <UlxBadge
        @value={{item.label}}
        @size={{item.size}}
        @variant="primary"
        @type="circle"
      />
    {{/each}}
  </div>
  <div class="fxb wrap gp4 fvc">
    {{#each this.dotSizes key="size" as |item|}}
      <UlxBadge
        @value={{item.label}}
        @size={{item.size}}
        @variant="primary"
        @type="dot"
        @ariaLabel="Notify"
      />
    {{/each}}
  </div>
  */
  {
    "id": "H8TQVYoT",
    "block": "[[[10,0],[14,0,\"fxb wrap gp4 fvc mgb12\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"sizes\"]]],null]],null],\"size\",[[[1,\"    \"],[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\",\"@type\"],[[30,1,[\"label\"]],[30,1,[\"size\"]],\"primary\",\"circle\"]],null],[1,\"\\n\"]],[1]],null],[13],[1,\"\\n\"],[10,0],[14,0,\"fxb wrap gp4 fvc\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"dotSizes\"]]],null]],null],\"size\",[[[1,\"    \"],[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\",\"@type\",\"@ariaLabel\"],[[30,2,[\"label\"]],[30,2,[\"size\"]],\"primary\",\"dot\",\"Notify\"]],null],[1,\"\\n\"]],[2]],null],[13]],[\"item\",\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Badge/Size.js",
    "scope": () => [_ulxComponents.UlxBadge],
    "isStrictMode": true
  }), _SizeDemoComponent);
});
;define("ulx-ember/components/Demo/Badge/Type", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _TypeDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class TypeDemoComponent extends _component.default {
    get types() {
      return [{
        label: '1',
        type: undefined
      }, {
        label: '2',
        type: 'circle'
      }, {
        label: '',
        type: 'dot'
      }];
    }
  }
  _exports.default = TypeDemoComponent;
  _TypeDemoComponent = TypeDemoComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap fvc gp4">
    {{#each this.types key="type" as |item|}}
      <UlxBadge
        @value={{item.label}}
        @size="s-size"
        @variant="primary"
        @type={{item.type}}
      />
    {{/each}}
  </div>
  */
  {
    "id": "bJRhnO6b",
    "block": "[[[10,0],[14,0,\"fxb wrap fvc gp4\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"types\"]]],null]],null],\"type\",[[[1,\"    \"],[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\",\"@type\"],[[30,1,[\"label\"]],\"s-size\",\"primary\",[30,1,[\"type\"]]]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Badge/Type.js",
    "scope": () => [_ulxComponents.UlxBadge],
    "isStrictMode": true
  }), _TypeDemoComponent);
});
;define("ulx-ember/components/Demo/Badge/Variants", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _VariantsDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class VariantsDemoComponent extends _component.default {
    get variants() {
      return [{
        label: '2',
        variant: 'primary'
      }, {
        label: '12',
        variant: 'secondary'
      }, {
        label: '32',
        variant: 'success'
      }, {
        label: '455',
        variant: 'info'
      }, {
        label: '32',
        variant: 'warning'
      }, {
        label: '54',
        variant: 'danger'
      }, {
        label: '65',
        variant: 'contrast'
      }, {
        label: '56',
        variant: 'light-grey'
      }];
    }
  }
  _exports.default = VariantsDemoComponent;
  _VariantsDemoComponent = VariantsDemoComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap gp4">
    {{#each this.variants key="variant" as |item|}}
      <UlxBadge
        @value={{item.label}}
        @size="s-size"
        @variant={{item.variant}}
        @type="circle"
      />
    {{/each}}
  </div>
  */
  {
    "id": "F3fb1DIh",
    "block": "[[[10,0],[14,0,\"fxb wrap gp4\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"variants\"]]],null]],null],\"variant\",[[[1,\"    \"],[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\",\"@type\"],[[30,1,[\"label\"]],\"s-size\",[30,1,[\"variant\"]],\"circle\"]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Badge/Variants.js",
    "scope": () => [_ulxComponents.UlxBadge],
    "isStrictMode": true
  }), _VariantsDemoComponent);
});
;define("ulx-ember/components/Demo/Checkbox/Basic", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _BasicCheckboxDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BasicCheckboxDemo = _exports.default = (_class = (_BasicCheckboxDemo = class BasicCheckboxDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    handleItemChange(item, checked) {
      this.items = this.items.map(i => i === item ? {
        ...i,
        checked
      } : i);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxCheckbox
      @rules={{this.requiredRules}}
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
    />
  </div>
  */
  {
    "id": "+yrbtrK7",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@rules\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\"],[[30,0,[\"requiredRules\"]],\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Checkbox/Basic.js",
    "scope": () => [_ulxComponents.UlxCheckbox],
    "isStrictMode": true
  }), _BasicCheckboxDemo), _BasicCheckboxDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'All Event Days',
        checked: true
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Checkbox/Disabled", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _WithlabelDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let WithlabelDemoComponent = _exports.default = (_class = (_WithlabelDemoComponent = class WithlabelDemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    handleItemChange(item, checked) {
      this.items = this.items.map(i => i === item ? {
        ...i,
        checked
      } : i);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxCheckbox
      @label="With Label"
      @rules={{this.requiredRules}}
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
    />
  </div>
  */
  {
    "id": "22cGrlWZ",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rules\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\",\"@helpText\"],[\"With Label\",[30,0,[\"requiredRules\"]],\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Checkbox/Disabled.js",
    "scope": () => [_ulxComponents.UlxCheckbox],
    "isStrictMode": true
  }), _WithlabelDemoComponent), _WithlabelDemoComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'All Event Days',
        checked: false,
        disabled: true
      }, {
        label: 'Single Event Days',
        checked: false
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Checkbox/Group", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _GroupDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let GroupDemoComponent = _exports.default = (_class = (_GroupDemoComponent = class GroupDemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get error() {
      // Example validation: require at least one item to be checked.
      const hasAtLeastOneChecked = this.items.some(i => i.checked);
      return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
    }
    handleItemChange(item, checked) {
      this.items = this.items.map(i => i === item ? {
        ...i,
        checked
      } : i);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxCheckbox
      @label="Group"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
      @fieldClass="col-12"
      @groupClass="horizontal"
      @error={{this.error}}
    />
  </div>
  */
  {
    "id": "MnrZCSKA",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@items\",\"@onItemChange\",\"@helpText\",\"@fieldClass\",\"@groupClass\",\"@error\"],[\"Group\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\",\"col-12\",\"horizontal\",[30,0,[\"error\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Checkbox/Group.js",
    "scope": () => [_ulxComponents.UlxCheckbox],
    "isStrictMode": true
  }), _GroupDemoComponent), _GroupDemoComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'Item 1',
        checked: true
      }, {
        label: 'Item 2',
        checked: false
      }, {
        label: 'Item 3 (disabled)',
        checked: false,
        disabled: true
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Checkbox/Invalid", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _WithlabelDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let WithlabelDemoComponent = _exports.default = (_class = (_WithlabelDemoComponent = class WithlabelDemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    get error() {
      // `UlxCheckbox` expects a *field-level* string error message (not per-item).
      // Example validation: require at least one item to be checked.
      const hasAtLeastOneChecked = this.items.some(i => i.checked);
      return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
    }
    handleItemChange(item, checked) {
      this.items = this.items.map(i => i === item ? {
        ...i,
        checked
      } : i);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxCheckbox
      @label="With Label"
      @rules={{this.requiredRules}}
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
      @error={{this.error}}
    />
  </div>
  */
  {
    "id": "OR2i6jqa",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rules\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\",\"@helpText\",\"@error\"],[\"With Label\",[30,0,[\"requiredRules\"]],\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\",[30,0,[\"error\"]]]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Checkbox/Invalid.js",
    "scope": () => [_ulxComponents.UlxCheckbox],
    "isStrictMode": true
  }), _WithlabelDemoComponent), _WithlabelDemoComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'All Event Days',
        checked: false
      }, {
        label: 'Single Event Days',
        checked: false
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Checkbox/Withlabel", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _WithlabelDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let WithlabelDemoComponent = _exports.default = (_class = (_WithlabelDemoComponent = class WithlabelDemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    // get error() {
    //   // `UlxCheckbox` expects a *field-level* string error message (not per-item).
    //   // Example validation: require at least one item to be checked.
    //   const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    //   return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
    // }
    handleItemChange(item, checked) {
      this.items = this.items.map(i => i === item ? {
        ...i,
        checked
      } : i);
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxCheckbox
      @label="With Label"
      @rules={{this.requiredRules}}
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
      {{!-- @error={{this.error}} --}}
    />
  </div>
  */
  {
    "id": "TTArh2Vo",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@label\",\"@rules\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\",\"@helpText\"],[\"With Label\",[30,0,[\"requiredRules\"]],\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Checkbox/Withlabel.js",
    "scope": () => [_ulxComponents.UlxCheckbox],
    "isStrictMode": true
  }), _WithlabelDemoComponent), _WithlabelDemoComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'All Event Days',
        checked: true
      }, {
        label: 'Single Event Days',
        checked: true
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
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
    "id": "tPl95DEK",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"ls-tick-icon\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"close-icon-01\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,null,[[\"icon\"],[[[[1,\"\\n      \"],[10,\"svg\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,\"width\",\"24\"],[14,\"height\",\"24\"],[14,\"viewBox\",\"0 0 1024 1024\"],[12],[1,\"\\n        \"],[10,\"path\"],[14,\"fill\",\"currentColor\"],[14,\"transform\",\"scale(1, -1) translate(0, -1024)\"],[14,\"d\",\"M 831.488 602.112h -24.576c -12.288 0.000 -20.480 8.192 -28.672 20.480 -4.096 12.288 -4.096 24.576 4.096 32.768l 20.480 20.480c 36.864 36.864 36.864 94.208 0.000 126.976 -36.864 36.864 -94.208 36.864 -126.976 0.000l -20.480 -20.480c -8.192 -8.192 -20.480 -12.288 -32.768 -4.096 -12.288 4.096 -20.480 16.384 -20.480 28.672v 24.576c 0.000 49.152 -40.960 90.112 -90.112 90.112s -90.112 -40.960 -90.112 -90.112v -24.576c 0.000 -12.288 -8.192 -20.480 -20.480 -28.672 -12.288 -4.096 -24.576 -4.096 -32.768 4.096l -16.384 20.480c -36.864 36.864 -94.208 36.864 -126.976 0.000 -36.864 -36.864 -36.864 -94.208 0.000 -126.976l 16.384 -20.480c 8.192 -8.192 8.192 -20.480 4.096 -32.768s -16.384 -20.480 -28.672 -20.480h -24.576c -49.152 0.000 -90.112 -40.960 -90.112 -90.112s 40.960 -90.112 90.112 -90.112h 24.576c 12.288 0.000 20.480 -8.192 28.672 -20.480 4.096 -12.288 4.096 -24.576 -4.096 -32.768l -20.480 -20.480c -36.864 -36.864 -36.864 -94.208 0.000 -126.976 36.864 -36.864 94.208 -36.864 126.976 0.000l 20.480 20.480c 8.192 8.192 20.480 12.288 32.768 4.096 12.288 -4.096 20.480 -16.384 20.480 -28.672v -24.576c 0.000 -49.152 40.960 -90.112 90.112 -90.112s 90.112 40.960 90.112 90.112v 24.576c 0.000 12.288 8.192 20.480 20.480 28.672 12.288 4.096 24.576 4.096 32.768 -4.096l 20.480 -20.480c 36.864 -36.864 94.208 -36.864 126.976 0.000s 36.864 94.208 0.000 126.976l -20.480 20.480c -8.192 8.192 -12.288 20.480 -4.096 32.768 4.096 12.288 16.384 20.480 28.672 20.480h 24.576c 49.152 0.000 90.112 40.960 90.112 90.112s -40.960 90.112 -90.112 90.112zM 831.488 471.040h -24.576c -32.768 0.000 -61.440 -20.480 -73.728 -49.152s -8.192 -61.440 16.384 -86.016l 20.480 -20.480c 16.384 -16.384 16.384 -40.960 0.000 -57.344s -40.960 -16.384 -57.344 0.000l -20.480 20.480c -24.576 24.576 -57.344 28.672 -86.016 16.384s -49.152 -36.864 -49.152 -73.728v -24.576c 0.000 -24.576 -20.480 -40.960 -40.960 -40.960 -24.576 0.000 -40.960 20.480 -40.960 40.960v 24.576c 0.000 32.768 -20.480 61.440 -49.152 73.728s -61.440 8.192 -86.016 -16.384l -20.480 -20.480c -16.384 -16.384 -40.960 -16.384 -57.344 0.000s -16.384 40.960 0.000 57.344l 20.480 20.480c 24.576 24.576 28.672 57.344 16.384 86.016s -36.864 49.152 -73.728 49.152h -32.768c -24.576 0.000 -40.960 20.480 -40.960 40.960s 20.480 40.960 40.960 40.960h 24.576c 32.768 0.000 61.440 20.480 73.728 49.152s 8.192 61.440 -16.384 86.016l -16.384 20.480c -16.384 16.384 -16.384 40.960 0.000 57.344s 40.960 16.384 57.344 0.000l 20.480 -20.480c 24.576 -24.576 57.344 -28.672 86.016 -16.384s 49.152 36.864 49.152 73.728v 28.672c 0.000 24.576 20.480 40.960 40.960 40.960 24.576 0.000 40.960 -20.480 40.960 -40.960v -24.576c 0.000 -32.768 20.480 -61.440 49.152 -73.728s 61.440 -8.192 86.016 16.384l 20.480 20.480c 16.384 16.384 40.960 16.384 57.344 0.000s 16.384 -40.960 0.000 -57.344l -20.480 -20.480c -24.576 -24.576 -28.672 -57.344 -16.384 -86.016s 36.864 -49.152 73.728 -49.152h 24.576c 24.576 0.000 40.960 -20.480 40.960 -40.960s -16.384 -45.056 -36.864 -45.056zM 512.000 647.168c -73.728 0.000 -135.168 -61.440 -135.168 -135.168s 61.440 -135.168 135.168 -135.168c 73.728 0.000 135.168 61.440 135.168 135.168s -61.440 135.168 -135.168 135.168zM 512.000 425.984c -49.152 0.000 -86.016 40.960 -86.016 86.016s 40.960 86.016 86.016 86.016c 49.152 0.000 86.016 -40.960 86.016 -86.016s -36.864 -86.016 -86.016 -86.016z\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Basic.js",
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
    "id": "C/PArxpG",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s12\",\"tick icon\",\"primary\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s13\",\"tick icon\",\"success\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s14\",\"tick icon\",\"warning\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s16\",\"tick icon\",\"danger\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s18\",\"tick icon\",\"info\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s20\",\"tick icon\",\"muted\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s22\",\"tick icon\",\"inverted\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Color.js",
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
    "id": "oXOQvddR",
    "block": "[[[10,0],[14,0,\"ulx-column col-3 gp8 fhc\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"layerVariations\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"fxb column fvc gp2 col-3\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"text-sm\"],[12],[1,\"bg-\"],[1,[30,1]],[13],[1,\"\\n      \"],[10,0],[14,0,\"fxb gp4\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"sampleIcons\"]]],null]],null],null,[[[1,\"          \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",[30,2],\"l\",\"\",[28,[30,0,[\"layerClass\"]],[[30,1]],null]]],null],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[1]],null],[13]],[\"color\",\"iconName\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Layer.js",
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
  const BS_ICONS_CSS_URL = 'https://cdn.zicons.in/21598000000025464/v1/bs-icons1.css';
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
    "id": "T/vlRwz+",
    "block": "[[[11,0],[24,0,\"fxc gp4\"],[4,[30,0,[\"runOnInsert\"]],null,null],[12],[1,\"\\n  \"],[10,0],[14,0,\"fxb fvc gp3 mgb8\"],[12],[1,\"\\n    \"],[11,\"input\"],[24,\"placeholder\",\"Search icons...\"],[24,0,\"ulx-input\"],[24,\"aria-label\",\"Search icons\"],[16,2,[30,0,[\"query\"]]],[24,4,\"text\"],[4,[30,0,[\"on\"]],[\"input\",[30,0,[\"updateQuery\"]]],null],[12],[13],[1,\"\\n    \"],[10,1],[14,0,\"text-sm ulx-badge\"],[12],[1,[30,0,[\"filteredIcons\",\"length\"]]],[1,\"\\n      icons\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"filteredIcons\",\"length\"]],[[[1,\"    \"],[10,0],[14,0,\"ulx-grid gp5 col-5 pdt5 text-center bd-t\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"filteredIcons\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"pd3 fxb column fvc gp3\"],[12],[1,\"\\n          \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",[30,1],\"s20\",\"\"]],null],[1,\"\\n          \"],[10,1],[14,0,\"text-sm\"],[12],[1,[30,1]],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,0],[14,0,\"text-center fg-text-muted pdy6 bd-t\"],[12],[1,\"No icons found\"],[13],[1,\"\\n\"]],[]]],[13]],[\"iconName\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/List.js",
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
    "id": "bnesuOAa",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s12\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s13\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s14\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s16\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s18\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s20\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s22\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s24\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s26\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s28\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s30\",\"tick icon\"]],null],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"comment-icon\",\"s32\",\"tick icon\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Size.js",
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
    "id": "ISidHcqN",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\",\"@customClass\"],[\"bs-icons1\",\"font\",\"session-settings-icon\",\"s28\",\"tick icon\",\"primary spin-anim\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Spin.js",
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
    "id": "lv2n+BA7",
    "block": "[[[10,0],[14,0,\"ulx-form m-size ulx-grid gp12 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Enter username\"],[24,\"aria-label\",\"Username\"]],[[\"@label\",\"@rules\",\"@helpText\",\"@size\",\"@error\",\"@fieldClass\"],[\"Input\",[32,1],\"Use 3–20 characters. Letters and numbers only.\",\"m-size\",\"Error message here\",\"col-12\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Basic.js",
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
    "id": "73RdPvq6",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"label\"]],[[\"@label\",\"@size\",\"@fieldClass\",\"@disabled\"],[\"label\",\"l-size\",\"col-12\",true]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Disabled.js",
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
    "id": "fIP7PZyA",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"label\"]],[[\"@floatLabel\",\"@label\",\"@size\",\"@fieldClass\",\"@filled\"],[\"label\",\"label\",\"l-size\",\"col-12\",true]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Filled.js",
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
    "id": "Gs7sOx/8",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@id\",\"@label\",\"@floatLabel\",\"@size\",\"@fieldClass\"],[\"username\",\"Username\",true,\"l-size\",\"col-12\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Floatlabel.js",
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
    "id": "ZIQZ4yIN",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"aria-label\",\"label\"]],[[\"@label\",\"@size\",\"@fieldClass\",\"@invalid\"],[\"label\",\"l-size\",\"col-12\",true]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Invalid.js",
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
    "id": "XsIgGia9",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[32,0]],null]],null],null,[[[1,\"    \"],[8,[32,1],[[16,\"placeholder\",[30,1,[\"placeholder\"]]],[16,\"aria-label\",[30,1,[\"label\"]]]],[[\"@label\",\"@size\",\"@fieldClass\",\"@keyfilter\"],[[30,1,[\"label\"]],\"s-size\",\"col-4\",[30,1,[\"keyfilter\"]]]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Keyfilter.js",
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
    "id": "WNqSN0hl",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[32,0]],null]],null],null,[[[1,\"    \"],[8,[32,1],[[16,\"placeholder\",[30,1,[\"placeholder\"]]],[16,\"aria-label\",[30,1,[\"label\"]]]],[[\"@label\",\"@size\",\"@fieldClass\",\"@keyfilter\"],[[30,1,[\"label\"]],[30,1,[\"size\"]],\"col-12\",[30,1,[\"keyfilter\"]]]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Input/Sizes.js",
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
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
    "id": "4/1BZHMB",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Website\"],[24,\"aria-label\",\"Website\"]],[[\"@inputGroup\",\"@size\",\"@fieldClass\"],[true,\"s-size\",\"col-12\"]],[[\"start\",\"end\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\"\\n        \"],[8,[32,1],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"ls-tick-icon\",\"s18\",\"tick icon\"]],null],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\".com\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/InputGroup/Basic.js",
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Price"
      aria-label="Price"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">$</span>
      </:start>
      <:end>
        <span class="ulx-inputgroup-addon">.00</span>
      </:end>
    </UlxInput>
  
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Search"
      aria-label="Search"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="ls-tick-icon"
            @size="s18"
            @ariaLabel="search icon"
          />
        </span>
      </:start>
    </UlxInput>
  </div>
  */
  {
    "id": "rDwI6E0j",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Price\"],[24,\"aria-label\",\"Price\"]],[[\"@inputGroup\",\"@size\",\"@fieldClass\"],[true,\"s-size\",\"col-12\"]],[[\"start\",\"end\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\"$\"],[13],[1,\"\\n    \"]],[]],[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\".00\"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Search\"],[24,\"aria-label\",\"Search\"]],[[\"@inputGroup\",\"@size\",\"@fieldClass\"],[true,\"s-size\",\"col-12\"]],[[\"start\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"ulx-inputgroup-addon\"],[12],[1,\"\\n        \"],[8,[32,1],null,[[\"@componentClass\",\"@type\",\"@iconName\",\"@size\",\"@ariaLabel\"],[\"bs-icons1\",\"font\",\"ls-tick-icon\",\"s18\",\"search icon\"]],null],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/InputGroup/Multiple.js",
    "scope": () => [_ulxComponents.UlxInput, _ulxComponents.UlxIcon],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Multiple"));
});
;define("ulx-ember/components/Demo/Radio/Basic", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _BasicRadioDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BasicRadioDemo = _exports.default = (_class = (_BasicRadioDemo = class BasicRadioDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    get selectedValue() {
      return this.items.find(i => i.checked)?.value;
    }
    handleItemChange(item, checked) {
      // Radios are single-select: when one is checked, the rest must be unchecked.
      if (!checked) return;
      this.items = this.items.map(i => ({
        ...i,
        checked: i === item
      }));
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxRadio
      @rules={{this.requiredRules}}
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
    />
  
    <div class="col-12">
      Selected:
      <strong>{{this.selectedValue}}</strong>
    </div>
  </div>
  */
  {
    "id": "znSdOYvW",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@rules\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\"],[[30,0,[\"requiredRules\"]],\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]]]],null],[1,\"\\n\\n  \"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n    Selected:\\n    \"],[10,\"strong\"],[12],[1,[30,0,[\"selectedValue\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Radio/Basic.js",
    "scope": () => [_ulxComponents.UlxRadio],
    "isStrictMode": true
  }), _BasicRadioDemo), _BasicRadioDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'Item 1',
        value: 'item1',
        checked: false
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Radio/Disabled", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _DisabledDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let DisabledDemoComponent = _exports.default = (_class = (_DisabledDemoComponent = class DisabledDemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    get selectedValue() {
      return this.items.find(i => i.checked)?.value;
    }
    get error() {
      // `UlxCheckbox` expects a *field-level* string error message (not per-item).
      // Example validation: require at least one item to be checked.
      const hasAtLeastOneChecked = this.items.some(i => i.checked);
      return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
    }
    handleItemChange(item, checked) {
      // Radios are single-select: when one is checked, the rest must be unchecked.
      if (!checked) return;
      this.items = this.items.map(i => ({
        ...i,
        checked: i === item
      }));
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxRadio
      @rules={{this.requiredRules}}
      @label="With Label"
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
      @error={{this.error}}
    />
  
    <div class="col-12">
      Selected:
      <strong>{{this.selectedValue}}</strong>
    </div>
  </div>
  */
  {
    "id": "ziiDPSbp",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@rules\",\"@label\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\",\"@helpText\",\"@error\"],[[30,0,[\"requiredRules\"]],\"With Label\",\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\",[30,0,[\"error\"]]]],null],[1,\"\\n\\n  \"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n    Selected:\\n    \"],[10,\"strong\"],[12],[1,[30,0,[\"selectedValue\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Radio/Disabled.js",
    "scope": () => [_ulxComponents.UlxRadio],
    "isStrictMode": true
  }), _DisabledDemoComponent), _DisabledDemoComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'Item 1',
        value: 'item1',
        checked: false
      }, {
        label: 'Item 2',
        value: 'item2',
        checked: true,
        disabled: true
      }, {
        label: 'Item 3',
        value: 'item3',
        checked: false,
        disabled: true
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Radio/Horizontal", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _HorizontalDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let HorizontalDemoComponent = _exports.default = (_class = (_HorizontalDemoComponent = class HorizontalDemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    get selectedValue() {
      return this.items.find(i => i.checked)?.value;
    }
    get error() {
      // `UlxCheckbox` expects a *field-level* string error message (not per-item).
      // Example validation: require at least one item to be checked.
      const hasAtLeastOneChecked = this.items.some(i => i.checked);
      return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
    }
    handleItemChange(item, checked) {
      // Radios are single-select: when one is checked, the rest must be unchecked.
      if (!checked) return;
      this.items = this.items.map(i => ({
        ...i,
        checked: i === item
      }));
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxRadio
      @rules={{this.requiredRules}}
      @label="With Label"
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
      @groupClass="horizontal"
      @error={{this.error}}
    />
  
    <div class="col-12">
      Selected:
      <strong>{{this.selectedValue}}</strong>
    </div>
  </div>
  */
  {
    "id": "aIBGOk7A",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@rules\",\"@label\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\",\"@helpText\",\"@groupClass\",\"@error\"],[[30,0,[\"requiredRules\"]],\"With Label\",\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\",\"horizontal\",[30,0,[\"error\"]]]],null],[1,\"\\n\\n  \"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n    Selected:\\n    \"],[10,\"strong\"],[12],[1,[30,0,[\"selectedValue\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Radio/Horizontal.js",
    "scope": () => [_ulxComponents.UlxRadio],
    "isStrictMode": true
  }), _HorizontalDemoComponent), _HorizontalDemoComponent), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'Item 1',
        value: 'item1',
        checked: false
      }, {
        label: 'Item 2',
        value: 'item2',
        checked: false
      }, {
        label: 'Item 3',
        value: 'item3',
        checked: false
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Radio/Invalid", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _InvalidRadioDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let InvalidRadioDemo = _exports.default = (_class = (_InvalidRadioDemo = class InvalidRadioDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    get selectedValue() {
      return this.items.find(i => i.checked)?.value;
    }
    get error() {
      // `UlxCheckbox` expects a *field-level* string error message (not per-item).
      // Example validation: require at least one item to be checked.
      const hasAtLeastOneChecked = this.items.some(i => i.checked);
      return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
    }
    handleItemChange(item, checked) {
      // Radios are single-select: when one is checked, the rest must be unchecked.
      if (!checked) return;
      this.items = this.items.map(i => ({
        ...i,
        checked: i === item
      }));
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxRadio
      @rules={{this.requiredRules}}
      @label="With Label"
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
      @error={{this.error}}
    />
  
    <div class="col-12">
      Selected:
      <strong>{{this.selectedValue}}</strong>
    </div>
  </div>
  */
  {
    "id": "W97KbOQe",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@rules\",\"@label\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\",\"@helpText\",\"@error\"],[[30,0,[\"requiredRules\"]],\"With Label\",\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\",[30,0,[\"error\"]]]],null],[1,\"\\n\\n  \"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n    Selected:\\n    \"],[10,\"strong\"],[12],[1,[30,0,[\"selectedValue\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Radio/Invalid.js",
    "scope": () => [_ulxComponents.UlxRadio],
    "isStrictMode": true
  }), _InvalidRadioDemo), _InvalidRadioDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'Item 1',
        value: 'item1',
        checked: false
      }, {
        label: 'Item 2',
        value: 'item2',
        checked: false
      }, {
        label: 'Item 3',
        value: 'item3',
        checked: false
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Radio/Withlabel", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _BasicRadioDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let BasicRadioDemo = _exports.default = (_class = (_BasicRadioDemo = class BasicRadioDemo extends _component.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "items", _descriptor, this);
    }
    get requiredRules() {
      return {
        required: true
      };
    }
    get selectedValue() {
      return this.items.find(i => i.checked)?.value;
    }
    handleItemChange(item, checked) {
      // Radios are single-select: when one is checked, the rest must be unchecked.
      if (!checked) return;
      this.items = this.items.map(i => ({
        ...i,
        checked: i === item
      }));
    }
  }, (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxRadio
      @rules={{this.requiredRules}}
      @label="With Label"
      @size="s-size"
      @fieldClass="col-12"
      @items={{this.items}}
      @onItemChange={{this.handleItemChange}}
      @helpText="Help text"
    />
  
    <div class="col-12">
      Selected:
      <strong>{{this.selectedValue}}</strong>
    </div>
  </div>
  */
  {
    "id": "/t2oTv4s",
    "block": "[[[10,0],[14,0,\"ulx-form s-size ulx-grid gp8 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],null,[[\"@rules\",\"@label\",\"@size\",\"@fieldClass\",\"@items\",\"@onItemChange\",\"@helpText\"],[[30,0,[\"requiredRules\"]],\"With Label\",\"s-size\",\"col-12\",[30,0,[\"items\"]],[30,0,[\"handleItemChange\"]],\"Help text\"]],null],[1,\"\\n\\n  \"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n    Selected:\\n    \"],[10,\"strong\"],[12],[1,[30,0,[\"selectedValue\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Radio/Withlabel.js",
    "scope": () => [_ulxComponents.UlxRadio],
    "isStrictMode": true
  }), _BasicRadioDemo), _BasicRadioDemo), _descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        label: 'Item 1',
        value: 'item1',
        checked: false
      }, {
        label: 'Item 2',
        value: 'item2',
        checked: false
      }, {
        label: 'Item 3',
        value: 'item3',
        checked: false
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleItemChange", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemChange"), _class.prototype), _class);
});
;define("ulx-ember/components/Demo/Tag/Basic", ["exports", "ulx-components", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _ulxComponents, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ulx-components",0,"@ember/component",0,"@ember/template-factory",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _component.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <UlxTag @value="Tag/Label" @size="s-size" @variant="primary" />
  */
  {
    "id": "qrqGHWFW",
    "block": "[[[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\"],[\"Tag/Label\",\"s-size\",\"primary\"]],null]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tag/Basic.js",
    "scope": () => [_ulxComponents.UlxTag],
    "isStrictMode": true
  }), (0, _templateOnly.default)(undefined, "Basic"));
});
;define("ulx-ember/components/Demo/Tag/Symbol", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _SymbolDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class SymbolDemoComponent extends _component.default {
    get examples() {
      return [
      // Symbol labels (tag.less §5C)
      {
        label: 'with-dot',
        variant: 'primary',
        type: undefined,
        customClass: 'with-dot'
      }, {
        label: 'with-star',
        variant: 'secondary',
        type: undefined,
        customClass: 'with-star'
      },
      // Icon positions (UlxTag @iconPosition)
      {
        label: 'icon left (default)',
        variant: 'success',
        type: undefined,
        icon: 'ls-tick-icon',
        iconPosition: 'left'
      }, {
        label: 'icon right',
        variant: 'danger',
        type: 'outline',
        icon: 'close-icon-01',
        iconPosition: 'right'
      }, {
        label: 'icon both sides',
        variant: 'info',
        type: undefined,
        icon: 'comment-icon',
        iconPosition: 'left',
        rightIcon: 'session-settings-icon'
      },
      // Icon labels (UlxTag @icon / @iconType)
      {
        label: 'tick icon',
        variant: 'success',
        type: undefined,
        icon: 'ls-tick-icon'
      }, {
        label: 'close icon + outline',
        variant: 'danger',
        type: 'outline',
        icon: 'close-icon-01'
      }, {
        label: 'comment icon',
        variant: 'info',
        type: undefined,
        icon: 'comment-icon'
      }, {
        label: 'settings icon + pill',
        variant: 'secondary',
        type: 'pill',
        icon: 'session-settings-icon'
      }];
    }
  }
  _exports.default = SymbolDemoComponent;
  _SymbolDemoComponent = SymbolDemoComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap gp4">
    {{#each this.examples key="label" as |item|}}
      <UlxTag
        @value={{item.label}}
        @size="s-size"
        @variant={{item.variant}}
        @type={{item.type}}
        @customClass={{item.customClass}}
        @icon={{item.icon}}
        @iconPosition={{item.iconPosition}}
        @iconType="font"
        @iconClass="bs-icons1"
        @iconSize="s14"
      />
    {{/each}}
  </div>
  */
  {
    "id": "hMRUk8B1",
    "block": "[[[10,0],[14,0,\"fxb wrap gp4\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"examples\"]]],null]],null],\"label\",[[[1,\"    \"],[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\",\"@type\",\"@customClass\",\"@icon\",\"@iconPosition\",\"@iconType\",\"@iconClass\",\"@iconSize\"],[[30,1,[\"label\"]],\"s-size\",[30,1,[\"variant\"]],[30,1,[\"type\"]],[30,1,[\"customClass\"]],[30,1,[\"icon\"]],[30,1,[\"iconPosition\"]],\"font\",\"bs-icons1\",\"s14\"]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tag/Symbol.js",
    "scope": () => [_ulxComponents.UlxTag],
    "isStrictMode": true
  }), _SymbolDemoComponent);
});
;define("ulx-ember/components/Demo/Tag/Type", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _TypeDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class TypeDemoComponent extends _component.default {
    get types() {
      return [{
        label: 'Filled (default)',
        type: undefined
      }, {
        label: 'Outline',
        type: 'outline'
      }, {
        label: 'Pill',
        type: 'pill'
      }];
    }
  }
  _exports.default = TypeDemoComponent;
  _TypeDemoComponent = TypeDemoComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap gp4">
    {{#each this.types key="label" as |item|}}
      <UlxTag
        @value={{item.label}}
        @size="m-size"
        @variant="primary"
        @type={{item.type}}
      />
    {{/each}}
  </div>
  */
  {
    "id": "pQdWLF3J",
    "block": "[[[10,0],[14,0,\"fxb wrap gp4\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"types\"]]],null]],null],\"label\",[[[1,\"    \"],[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\",\"@type\"],[[30,1,[\"label\"]],\"m-size\",\"primary\",[30,1,[\"type\"]]]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tag/Type.js",
    "scope": () => [_ulxComponents.UlxTag],
    "isStrictMode": true
  }), _TypeDemoComponent);
});
;define("ulx-ember/components/Demo/Tag/Variations", ["exports", "@glimmer/component", "ulx-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulxComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _VariationsDemoComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"ulx-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class VariationsDemoComponent extends _component.default {
    get variations() {
      return [
      // Core variants
      {
        label: 'primary',
        class: 'primary'
      }, {
        label: 'secondary',
        class: 'secondary'
      }, {
        label: 'success',
        class: 'success'
      }, {
        label: 'info',
        class: 'info'
      }, {
        label: 'warning',
        class: 'warning'
      }, {
        label: 'danger',
        class: 'danger'
      }, {
        label: 'contrast',
        class: 'contrast'
      }, {
        label: 'white',
        class: 'white'
      }, {
        label: 'black',
        class: 'black'
      },
      // Light tone variants (lt-*)
      {
        label: 'lt-green',
        class: 'lt-green'
      }, {
        label: 'lt-gold',
        class: 'lt-gold'
      }, {
        label: 'lt-purple',
        class: 'lt-purple'
      }, {
        label: 'lt-blue',
        class: 'lt-blue'
      }, {
        label: 'lt-red',
        class: 'lt-red'
      }, {
        label: 'lt-primary',
        class: 'lt-primary'
      },
      // Light palette variants (light-*)
      {
        label: 'light-nebula-blue',
        class: 'light-nebula-blue'
      }, {
        label: 'light-salmon-red',
        class: 'light-salmon-red'
      }, {
        label: 'light-jungle-green',
        class: 'light-jungle-green'
      }, {
        label: 'light-cyber-yellow',
        class: 'light-cyber-yellow'
      }, {
        label: 'light-cerise-pink',
        class: 'light-cerise-pink'
      }, {
        label: 'light-royal-violet',
        class: 'light-royal-violet'
      }, {
        label: 'light-medium-orchid',
        class: 'light-medium-orchid'
      }, {
        label: 'light-turquoise-green',
        class: 'light-turquoise-green'
      }, {
        label: 'light-not-blue',
        class: 'light-not-blue'
      }, {
        label: 'light-bs-grey',
        class: 'light-bs-grey'
      }, {
        label: 'light-grass-green',
        class: 'light-grass-green'
      }, {
        label: 'light-sandal-yellow',
        class: 'light-sandal-yellow'
      }, {
        label: 'light-lomo-blue',
        class: 'light-lomo-blue'
      }, {
        label: 'light-candy-orange',
        class: 'light-candy-orange'
      }, {
        label: 'light-dairy-violet',
        class: 'light-dairy-violet'
      }, {
        label: 'just-grey',
        class: 'just-grey'
      },
      // Status tags
      {
        label: 'running-color',
        class: 'running-color'
      }, {
        label: 'completed-color',
        class: 'completed-color'
      }, {
        label: 'published-color',
        class: 'published-color'
      }, {
        label: 'draft-color',
        class: 'draft-color'
      }, {
        label: 'cancelled-color',
        class: 'cancelled-color'
      }];
    }
  }
  _exports.default = VariationsDemoComponent;
  _VariationsDemoComponent = VariationsDemoComponent;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb wrap gp4">
    {{#each this.variations key="class" as |item|}}
      <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
    {{/each}}
  </div>
  */
  {
    "id": "dgikxjKY",
    "block": "[[[10,0],[14,0,\"fxb wrap gp4\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,0,[\"variations\"]]],null]],null],\"class\",[[[1,\"    \"],[8,[32,0],null,[[\"@value\",\"@size\",\"@variant\"],[[30,1,[\"label\"]],\"s-size\",[30,1,[\"class\"]]]],null],[1,\"\\n\"]],[1]],null],[13]],[\"item\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Tag/Variations.js",
    "scope": () => [_ulxComponents.UlxTag],
    "isStrictMode": true
  }), _VariationsDemoComponent);
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
    "id": "/7zhwCZj",
    "block": "[[[10,0],[14,0,\"ulx-form m-size ulx-grid gp12 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Search\"],[24,\"aria-label\",\"Search\"]],[[\"@iconName\",\"@iconType\",\"@iconClass\",\"@iconPosition\",\"@iconSize\",\"@fieldClass\"],[\"search-icon\",\"font\",\"bs-icons1\",\"left\",\"s18\",\"col-4\"]],null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/UlxIconInput/Basic.js",
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
    "id": "zi01XFEV",
    "block": "[[[10,0],[14,0,\"ulx-form m-size ulx-grid gp12 mgb14\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,\"placeholder\",\"Search\"],[24,\"aria-label\",\"Search\"]],[[\"@iconType\",\"@iconPosition\",\"@iconSize\",\"@fieldClass\"],[\"font\",\"left\",\"s18\",\"col-4\"]],[[\"label\",\"icon\"],[[[[10,1],[14,0,\"bold-font\"],[12],[1,\"Calendar\"],[13]],[]],[[[1,\"\\n      \"],[10,\"svg\"],[14,\"width\",\"16\"],[14,\"height\",\"16\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[12],[1,\"\\n        \"],[10,\"path\"],[14,\"d\",\"M15.1621 9.63281C15.365 9.44555 15.6809 9.45824 15.8682 9.66113C16.0554 9.86404 16.0427 10.1799 15.8398 10.3672L9.33984 16.3672C9.24106 16.4583 9.10983 16.5058 8.97559 16.499C8.87512 16.4939 8.77935 16.459 8.7002 16.3994L8.62695 16.3311L7.45996 15.0127L7.40039 14.9297C7.28452 14.7282 7.32204 14.4667 7.50293 14.3066C7.68389 14.1466 7.94792 14.1415 8.13379 14.2812L8.20801 14.3496L9.03613 15.2861L15.1621 9.63281Z\"],[14,\"fill\",\"black\"],[12],[13],[1,\"\\n        \"],[10,\"path\"],[14,\"fill-rule\",\"evenodd\"],[14,\"clip-rule\",\"evenodd\"],[14,\"d\",\"M17 2C17.2761 2 17.5 2.22386 17.5 2.5V4H18L18.2061 4.00488C20.3194 4.11211 22 5.85996 22 8V18L21.9951 18.2061C21.8913 20.2512 20.2512 21.8913 18.2061 21.9951L18 22H6L5.79395 21.9951C3.7488 21.8913 2.10865 20.2512 2.00488 18.2061L2 18V8C2 5.85996 3.68056 4.11211 5.79395 4.00488L6 4H6.5V2.5C6.5 2.22386 6.72386 2 7 2C7.27614 2 7.5 2.22386 7.5 2.5V4H16.5V2.5C16.5 2.22386 16.7239 2 17 2ZM6 5C4.34315 5 3 6.34315 3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8C21 6.34315 19.6569 5 18 5H17.5V6.5C17.5 6.77614 17.2761 7 17 7C16.7239 7 16.5 6.77614 16.5 6.5V5H7.5V6.5C7.5 6.77614 7.27614 7 7 7C6.72386 7 6.5 6.77614 6.5 6.5V5H6Z\"],[14,\"fill\",\"black\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n    \"]],[]]]]],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/UlxIconInput/Namedblocks.js",
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
;define("ulx-ember/components/common/doc-layout/doc-sidebar", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/modifier", "ember-modifier", "@ember/helper", "@ember/routing", "@ember/template", "ulx-ember/constants/docs", "@ember/component", "@ember/template-factory"], function (_exports, _component, _tracking, _object, _service, _modifier, _emberModifier, _helper, _routing, _template, _docs, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _DocSidebarComponent;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/modifier",0,"ember-modifier",0,"@ember/helper",0,"@ember/routing",0,"@ember/template",0,"ulx-ember/constants/docs",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
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
    getIconSvg(menuTitle) {
      const icons = {
        'Getting Started': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(42deg);"><defs><linearGradient id="rocketBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="currentColor" stop-opacity="1"></stop><stop offset="100%" stop-color="currentColor" stop-opacity="0.65"></stop></linearGradient><linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="orange"></stop><stop offset="100%" stop-color="red"></stop></linearGradient><filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="black" flood-opacity="0.25"></feDropShadow></filter></defs><path d="M12 2 C9 5, 8 9, 8 13 V17 H16 V13 C16 9, 15 5, 12 2Z" fill="url(#rocketBody)" filter="url(#softShadow)"></path><circle cx="12" cy="9" r="1.5" fill="white" opacity="0.8"></circle><path d="M8 14 L5 16 L8 16 Z" fill="currentColor" opacity="0.8"></path><path d="M16 14 L19 16 L16 16 Z" fill="currentColor" opacity="0.8"></path><path d="M12 22 C10.5 20.5, 10 19, 12 18 C14 19, 13.5 20.5, 12 22Z" fill="url(#flameGrad)"></path></svg>',
        Foundation: '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 13l9 5 9-5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
        Utilities: '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="6" r="2" stroke="currentColor" stroke-width="1.5"/><line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="15" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/><line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="11" cy="18" r="2" stroke="currentColor" stroke-width="1.5"/></svg>',
        Elements: '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>',
        Collections: '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="16" height="4" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="10" width="16" height="4" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="15" width="16" height="4" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>'
      };
      const svg = icons[menuTitle];
      return svg ? (0, _template.htmlSafe)(svg) : null;
    }
    hasCustomIcon(menuTitle) {
      return ['Getting Started', 'Foundation', 'Utilities', 'Elements', 'Collections'].includes(menuTitle);
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
                    class="s-nav-link fxb fvc gp2 text-left
                      {{if
                        (this.isItemActive item this.currentPath)
                        'fg-primary'
                        ''
                      }}"
                    {{on "click" (fn this.toggleItem item.menuTitle)}}
                  >
                    <span class="s-nav-link-icon w32 h32 fxb fvc fhc bd rds2">
                      {{#if (this.hasCustomIcon item.menuTitle)}}
                        {{! template-lint-disable no-triple-curlies }}
                        <span class="w24 h24">{{{this.getIconSvg
                            item.menuTitle
                          }}}</span>
                      {{else}}
                        <i class={{item.icon}}></i>
                      {{/if}}
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
                    <i
                      class="bs-icons1 down-arrow-icon s22 menu-toggle-icon transition
                        {{if (this.isExpanded item) 'rotate-180' ''}}"
                    ></i>
                  </button>
                </div>
              {{else}}
                {{! Simple clickable link without children }}
                <LinkTo
                  @route={{item.route}}
                  class="s-nav-link fxb fvc fhs gp2 w-100p
                    {{if
                      (this.isItemActive item this.currentPath)
                      'fg-primary'
                      'fg-text'
                    }}"
                >
                  {{#if item.icon}}
                    <span class="s-nav-link-icon w32 h32 fxb fvc fhc bd rds2">
                      {{#if (this.hasCustomIcon item.menuTitle)}}
                        {{! template-lint-disable no-triple-curlies }}
                        <span class="w24 h24">{{{this.getIconSvg
                            item.menuTitle
                          }}}</span>
                      {{else}}
                        <i class={{item.icon}}></i>
                      {{/if}}
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
                  {{#if (this.hasCustomIcon item.menuTitle)}}
                    {{! template-lint-disable no-triple-curlies }}
                    <span class="w24 h24">{{{this.getIconSvg
                        item.menuTitle
                      }}}</span>
                  {{else}}
                    <i class={{item.icon}}></i>
                  {{/if}}
                </span>
                <span class="s-nav-link-text">
                  <span class="bold-font">{{item.menuTitle}}</span>
                </span>
                <span class="s-nav-link-icon mgl-auto">
                  <i
                    class="bs-icons1 down-arrow-icon s22 menu-toggle-icon transition
                      {{if (this.isExpanded item) 'rotate-180' ''}}"
                  ></i>
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
                        <div
                          class="s-nav-category medium-font fg-text-secondary"
                        >{{childItem.category}}</div>
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
    "id": "VL4kKKPI",
    "block": "[[[41,false,[[[1,[30,0,[\"computedActiveItem\"]]]],[]],null],[1,\"\\n\"],[10,\"aside\"],[14,0,\"ulsp-sidebar overflow-x-hidden overflow-y-auto mgb8 mgr10\"],[12],[1,\"\\n  \"],[10,\"nav\"],[14,0,\"sidebar-nav fxgrow\"],[12],[1,\"\\n    \"],[10,\"ol\"],[14,0,\"s-nav-list mgt2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"navItems\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[14,0,\"s-nav-item mgb4\"],[12],[1,\"\\n\"],[41,[30,1,[\"to\"]],[[[41,[28,[30,0,[\"hasChildren\"]],[[30,1]],null],[[[1,\"              \"],[10,0],[14,0,\"fxb fvc gp2 w-100p\"],[12],[1,\"\\n                \"],[11,\"button\"],[16,0,[29,[\"s-nav-link fxb fvc gp2 text-left\\n                    \",[52,[28,[30,0,[\"isItemActive\"]],[[30,1],[30,0,[\"currentPath\"]]],null],\"fg-primary\",\"\"]]]],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"toggleItem\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                  \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n\"],[41,[28,[30,0,[\"hasCustomIcon\"]],[[30,1,[\"menuTitle\"]]],null],[[[1,\"                      \"],[10,1],[14,0,\"w24 h24\"],[12],[2,[28,[30,0,[\"getIconSvg\"]],[[30,1,[\"menuTitle\"]]],null]],[13],[1,\"\\n\"]],[]],[[[1,\"                      \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n\"]],[]]],[1,\"                  \"],[13],[1,\"\\n                  \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                    \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"s-nav-link-icon mgl-auto pdl1\"],[16,\"aria-label\",[29,[\"Toggle \",[30,1,[\"menuTitle\"]],\" menu\"]]],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"handleToggle\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                  \"],[10,\"i\"],[15,0,[29,[\"bs-icons1 down-arrow-icon s22 menu-toggle-icon transition\\n                      \",[52,[28,[30,0,[\"isExpanded\"]],[[30,1]],null],\"rotate-180\",\"\"]]]],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],[[[1,\"              \"],[8,[32,2],[[16,0,[29,[\"s-nav-link fxb fvc fhs gp2 w-100p\\n                  \",[52,[28,[30,0,[\"isItemActive\"]],[[30,1],[30,0,[\"currentPath\"]]],null],\"fg-primary\",\"fg-text\"]]]]],[[\"@route\"],[[30,1,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,1,[\"icon\"]],[[[1,\"                  \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n\"],[41,[28,[30,0,[\"hasCustomIcon\"]],[[30,1,[\"menuTitle\"]]],null],[[[1,\"                      \"],[10,1],[14,0,\"w24 h24\"],[12],[2,[28,[30,0,[\"getIconSvg\"]],[[30,1,[\"menuTitle\"]]],null]],[13],[1,\"\\n\"]],[]],[[[1,\"                      \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n\"]],[]]],[1,\"                  \"],[13],[1,\"\\n\"]],[]],null],[1,\"                \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                  \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"]],[]]]]],[1,\"\\n\"]],[]]]],[]],[[[1,\"            \"],[11,\"button\"],[24,0,\"s-nav-link fxb fvc gp2 w-100p\"],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"toggleItem\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n              \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n\"],[41,[28,[30,0,[\"hasCustomIcon\"]],[[30,1,[\"menuTitle\"]]],null],[[[1,\"                  \"],[10,1],[14,0,\"w24 h24\"],[12],[2,[28,[30,0,[\"getIconSvg\"]],[[30,1,[\"menuTitle\"]]],null]],[13],[1,\"\\n\"]],[]],[[[1,\"                  \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n\"]],[]]],[1,\"              \"],[13],[1,\"\\n              \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,1],[14,0,\"s-nav-link-icon mgl-auto\"],[12],[1,\"\\n                \"],[10,\"i\"],[15,0,[29,[\"bs-icons1 down-arrow-icon s22 menu-toggle-icon transition\\n                    \",[52,[28,[30,0,[\"isExpanded\"]],[[30,1]],null],\"rotate-180\",\"\"]]]],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"],[41,[28,[30,0,[\"hasChildren\"]],[[30,1]],null],[[[1,\"            \"],[11,0],[24,0,\"accordion-content\"],[16,5,[28,[30,0,[\"getAccordionStyle\"]],[[30,1]],null]],[4,[30,0,[\"setContentRef\"]],[[30,1,[\"menuTitle\"]]],null],[12],[1,\"\\n              \"],[10,\"ol\"],[14,0,\"s-nav-list mgt1 pdl2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,1,[\"children\"]]],null]],null],null,[[[41,[30,2,[\"category\"]],[[[1,\"                    \"],[10,\"li\"],[14,0,\"s-nav-item pdb2 pdt2\"],[12],[1,\"\\n                      \"],[10,0],[14,0,\"s-nav-category medium-font fg-text-secondary\"],[12],[1,[30,2,[\"category\"]]],[13],[1,\"\\n\"],[41,[30,2,[\"items\"]],[[[1,\"                        \"],[10,\"ol\"],[14,0,\"s-nav-list mgt2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,2,[\"items\"]]],null]],null],null,[[[1,\"                            \"],[10,\"li\"],[14,0,\"s-nav-item\"],[12],[1,\"\\n                              \"],[8,[32,2],[[24,0,\"bd-l pdl5 pdt2 pdb2 font-size14 text-left w-100p fg-text block\"]],[[\"@route\",\"@activeClass\"],[[30,3,[\"route\"]],\"bd-primary fg-primary\"]],[[\"default\"],[[[[1,\"\\n                                \"],[1,[30,3,[\"menuItem\"]]],[1,\"\\n                              \"]],[]]]]],[1,\"\\n                            \"],[13],[1,\"\\n\"]],[3]],null],[1,\"                        \"],[13],[1,\"\\n\"]],[]],null],[1,\"                    \"],[13],[1,\"\\n\"]],[]],[[[1,\"                    \"],[10,\"li\"],[14,0,\"s-nav-item\"],[12],[1,\"\\n                      \"],[8,[32,2],[[24,0,\"bd-l pdl5 pdb2 pdt2 font-size14 text-left w-100p block fg-text\"]],[[\"@route\",\"@activeClass\"],[[30,2,[\"route\"]],\"bd-primary fg-primary\"]],[[\"default\"],[[[[1,\"\\n                        \"],[1,[30,2,[\"menuItem\"]]],[1,\"\\n                      \"]],[]]]]],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[]]]],[2]],null],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"item\",\"childItem\",\"subItem\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-layout/doc-sidebar.js",
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
        return `background-color: ${color}; border-color: var(--ulx-default-border-color, #dee2e6);`;
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
    <div class="ulx-datatable s-size" style="width: 850px;">
      <div class="datatable-wrapper">
        <table class="datatable-table" style="table-layout: fixed;">
          <thead class="datatable-header">
            <tr class="datatable-header-row">
              <th
                class="datatable-column-header-cell"
              >{{this.columnLabels.[0]}}</th>
              <th
                class="datatable-column-header-cell"
              >{{this.columnLabels.[1]}}</th>
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
                    <span
                      class="bold-font fg-primary font-size16"
                    >{{this.formatClassName row.className}}</span>
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
    "id": "o7zXgyFW",
    "block": "[[[41,[30,0,[\"rows\",\"length\"]],[[[1,\"  \"],[10,0],[14,0,\"ulx-datatable s-size\"],[14,5,\"width: 850px;\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"datatable-wrapper\"],[12],[1,\"\\n      \"],[10,\"table\"],[14,0,\"datatable-table\"],[14,5,\"table-layout: fixed;\"],[12],[1,\"\\n        \"],[10,\"thead\"],[14,0,\"datatable-header\"],[12],[1,\"\\n          \"],[10,\"tr\"],[14,0,\"datatable-header-row\"],[12],[1,\"\\n            \"],[10,\"th\"],[14,0,\"datatable-column-header-cell\"],[12],[1,[30,0,[\"columnLabels\",\"0\"]]],[13],[1,\"\\n            \"],[10,\"th\"],[14,0,\"datatable-column-header-cell\"],[12],[1,[30,0,[\"columnLabels\",\"1\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[14,0,\"datatable-tbody\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"rows\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[14,0,\"datatable-body-row\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,0,\"datatable-column-body-cell\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"fxb fvc gp2\"],[12],[1,\"\\n\"],[41,[30,1,[\"color\"]],[[[1,\"                    \"],[10,0],[14,0,\"rds-circle bd w20 h20\"],[15,5,[28,[30,0,[\"getStyleString\"]],[[30,1,[\"color\"]]],null]],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"                  \"],[10,1],[14,0,\"bold-font fg-primary font-size16\"],[12],[1,[28,[30,0,[\"formatClassName\"]],[[30,1,[\"className\"]]],null]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"datatable-column-body-cell\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"font-size16\"],[12],[1,[30,1,[\"property\"]]],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[1]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"row\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/class-property-table.js",
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
        return '';
      }
      const match = source.match(/<template>[\s\S]*?<\/template>/m);
      return match ? match[0].trim() : '';
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
      if (!text) return '';
      const normalized = text.replace(/\r\n?|\u2028|\u2029/g, '\n').replace(/^\uFEFF/, '');
      // Remove leading newline if present
      const withoutLeadingNewline = normalized.replace(/^\n/, '');
      const lines = withoutLeadingNewline.split('\n');
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
        out[0] = out[0].replace(/^\s+/, '');
      }
      return out.join('\n').trimEnd();
    }
    get displayCode() {
      const source = this.args.source;
      if (!source) return '';
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
                <div class="code-block">
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
                    <button
                      type="button"
                      class="expand-btn {{if this.expanded 'is-expanded'}}"
                      {{on "click" this.toggleExpanded}}
                      aria-label={{if
                        this.expanded
                        "Collapse code"
                        "Expand code"
                      }}
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
                        <path
                          class="arrow left"
                          d="M10 12H6m0 0l2-2m-2 2l2 2"
                        />
  
                        <!-- right arrow -->
                        <path
                          class="arrow right"
                          d="M14 12h4m0 0l-2-2m2 2l-2 2"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="copy-btn {{if this.copied 'is-copied'}}"
                      aria-label="Copy code"
                      {{on "click" this.copyCode}}
                    >
                      <svg
                        class="copy-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <!-- Copy icon -->
                        <g class="icon-copy">
                          <rect
                            x="6"
                            y="2"
                            width="13"
                            height="13"
                            rx="2"
                            stroke="currentColor"
                            stroke-width="2"
                          />
                          <rect
                            x="1"
                            y="8"
                            width="13"
                            height="13"
                            rx="2"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="#272822"
                          />
  
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
              <button
                type="button"
                class="copy-btn {{if this.copied 'is-copied'}}"
                aria-label="Copy code"
                {{on "click" this.copyCode}}
              >
                <svg
                  class="copy-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <!-- Copy icon -->
                  <g class="icon-copy">
                    <rect
                      x="6"
                      y="2"
                      width="13"
                      height="13"
                      rx="2"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <rect
                      x="1"
                      y="8"
                      width="13"
                      height="13"
                      rx="2"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="#272822"
                    />
  
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
        <div class="code-block">
          <CodeBlock
            @code={{this.displayCode}}
            @language={{this.effectiveLanguage}}
          />
          <div class="code-actions fxb gp4 pdy1 pdx3">
            <button
              type="button"
              aria-label="Copy code"
              {{on "click" this.copyCode}}
            >
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
    "id": "juHwZUvh",
    "block": "[[[11,0],[24,0,\"code-preview-container\"],[17,1],[12],[1,\"\\n\"],[41,[30,2],[[[1,\"    \"],[10,\"h5\"],[14,0,\"mgb2 font-medium\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]],null],[41,[30,3],[[[1,\"    \"],[10,0],[14,0,\"text-small fg-text-secondary mgb4\"],[12],[1,\"\\n      \"],[1,[30,3]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[41,[48,[30,5]],[[[41,[30,4],[[[1,\"      \"],[10,0],[14,0,\"demo-and-code\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"demo\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"code-preview-container\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"demo bg-default bd pd8 mgb2 rds3\"],[12],[1,\"\\n              \"],[18,5,null],[1,\"\\n            \"],[13],[1,\"\\n\"],[41,[30,0,[\"displayCode\"]],[[[1,\"              \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n\"],[41,[30,0,[\"expanded\"]],[[[1,\"                  \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],\"javascript\"]],null],[1,\"\\n\"]],[]],[[[1,\"                  \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n\"]],[]]],[1,\"                \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n                  \"],[11,\"button\"],[16,0,[29,[\"expand-btn \",[52,[30,0,[\"expanded\"]],\"is-expanded\"]]]],[16,\"aria-label\",[52,[30,0,[\"expanded\"]],\"Collapse code\",\"Expand code\"]],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"toggleExpanded\"]]],null],[12],[1,\"\\n                    \"],[10,\"svg\"],[14,0,\"fit-width-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n                      \"],[3,\" left bar \"],[1,\"\\n                      \"],[10,\"path\"],[14,0,\"bar left\"],[14,\"d\",\"M4 4v16\"],[12],[13],[1,\"\\n\\n                      \"],[3,\" right bar \"],[1,\"\\n                      \"],[10,\"path\"],[14,0,\"bar right\"],[14,\"d\",\"M20 4v16\"],[12],[13],[1,\"\\n\\n                      \"],[3,\" left arrow \"],[1,\"\\n                      \"],[10,\"path\"],[14,0,\"arrow left\"],[14,\"d\",\"M10 12H6m0 0l2-2m-2 2l2 2\"],[12],[13],[1,\"\\n\\n                      \"],[3,\" right arrow \"],[1,\"\\n                      \"],[10,\"path\"],[14,0,\"arrow right\"],[14,\"d\",\"M14 12h4m0 0l-2-2m2 2l-2 2\"],[12],[13],[1,\"\\n                    \"],[13],[1,\"\\n                  \"],[13],[1,\"\\n                  \"],[11,\"button\"],[16,0,[29,[\"copy-btn \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n                    \"],[10,\"svg\"],[14,0,\"copy-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n                      \"],[3,\" Copy icon \"],[1,\"\\n                      \"],[10,\"g\"],[14,0,\"icon-copy\"],[12],[1,\"\\n                        \"],[10,\"rect\"],[14,\"x\",\"6\"],[14,\"y\",\"2\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[12],[13],[1,\"\\n                        \"],[10,\"rect\"],[14,\"x\",\"1\"],[14,\"y\",\"8\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"#272822\"],[12],[13],[1,\"\\n\\n                      \"],[13],[1,\"\\n\\n                      \"],[3,\" Check icon \"],[1,\"\\n                      \"],[10,\"path\"],[14,0,\"icon-check\"],[14,\"d\",\"M5 13l4 4L19 7\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"none\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[12],[13],[1,\"\\n                    \"],[13],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"displayCode\"]],[[[1,\"        \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n          \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n          \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n            \"],[11,\"button\"],[16,0,[29,[\"copy-btn \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n              \"],[10,\"svg\"],[14,0,\"copy-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n                \"],[3,\" Copy icon \"],[1,\"\\n                \"],[10,\"g\"],[14,0,\"icon-copy\"],[12],[1,\"\\n                  \"],[10,\"rect\"],[14,\"x\",\"6\"],[14,\"y\",\"2\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[12],[13],[1,\"\\n                  \"],[10,\"rect\"],[14,\"x\",\"1\"],[14,\"y\",\"8\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"#272822\"],[12],[13],[1,\"\\n\\n                \"],[13],[1,\"\\n\\n                \"],[3,\" Check icon \"],[1,\"\\n                \"],[10,\"path\"],[14,0,\"icon-check\"],[14,\"d\",\"M5 13l4 4L19 7\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"none\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null]],[]]]],[]],[[[41,[30,0,[\"displayCode\"]],[[[1,\"      \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n        \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n        \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n          \"],[11,\"button\"],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copied\"]],[[[1,\"              copied\\n\"]],[]],[[[1,\"              copy\\n\"]],[]]],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null]],[]]],[13]],[\"&attrs\",\"@title\",\"@description\",\"@hasDemo\",\"&default\"],[\"if\",\"has-block\",\"yield\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/code-preview.js",
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
        <div class="ulx-grid col-4 gp5">
          {{#each group.colors as |color|}}
            <article
              class="ulx-foundation-card pd3 rds2 bd flex-column md-w-1-3 text-center"
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
    "id": "WcvLtQ4S",
    "block": "[[[10,0],[14,0,\"fxb fcol gp8 w-100p\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"fxcol gp2\"],[12],[1,\"\\n      \"],[10,\"h5\"],[14,0,\"mgt0 mgb2 bold-font fg-primary\"],[12],[1,[30,2,[\"title\"]]],[13],[1,\"\\n      \"],[10,0],[14,0,\"ulx-grid col-4 gp5\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,2,[\"colors\"]]],null]],null],null,[[[1,\"          \"],[10,\"article\"],[14,0,\"ulx-foundation-card pd3 rds2 bd flex-column md-w-1-3 text-center\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"rds2 mgb2 bd mg-auto\"],[15,5,[28,[30,0,[\"getStyleString\"]],[[30,3,[\"cssVar\"]]],null]],[12],[13],[1,\"\\n            \"],[10,2],[14,0,\"mgb1 fg-text-secondary\"],[12],[10,\"code\"],[12],[1,[30,3,[\"token\"]]],[13],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[3]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13]],[\"@paletteGroups\",\"group\",\"color\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/color-palette.js",
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
    "id": "CTXUlw8W",
    "block": "[[[10,0],[14,0,\"doc-section component-builder\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"ulx-grid gp12\"],[12],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"fxgrow fxb column gp6 col-7\"],[12],[1,\"\\n\"],[41,[48,[30,4]],[[[1,\"        \"],[10,0],[14,0,\"demo bg-default bd pd8 rds3\"],[12],[1,\"\\n          \"],[10,2],[14,0,\"font-size12 fg-text-secondary mgt0 mgb4\"],[12],[1,\"Preview\"],[13],[1,\"\\n          \"],[18,4,[[30,0,[\"resolvedProps\"]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"displayCode\"]],[[[1,\"        \"],[10,0],[14,0,\"code-block-wrapper\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"fxb fvc fsb\"],[12],[1,\"\\n            \"],[10,2],[14,0,\"font-size12 fg-text-secondary mgt0\"],[12],[1,\"Generated code\"],[13],[1,\"\\n            \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n              \"],[11,\"button\"],[16,0,[29,[\"ulx-button link xs-size\\n                  \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,0],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copied\"]],[[[1,\"                  Copied\\n\"]],[]],[[[1,\"                  Copy\\n\"]],[]]],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n            \"],[8,[32,1],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],\"markup\"]],null],[1,\"\\n\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"col-5 component-builder-controls bd rds3 pd6 bg-default component-builder-controls-col\"],[12],[1,\"\\n      \"],[10,\"h4\"],[14,0,\"mgt0 mgb4 bold-font font-size14\"],[12],[1,\"Properties\"],[13],[1,\"\\n\"],[42,[28,[31,4],[[28,[31,4],[[30,0,[\"propsWithOptions\"]]],null]],null],null,[[[1,\"        \"],[10,0],[14,0,\"mgb4\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"block font-size12 font-medium mgb1 fg-text-secondary\"],[12],[1,[30,1,[\"label\"]]],[13],[1,\"\\n\"],[41,[30,1,[\"isRadio\"]],[[[1,\"            \"],[10,0],[14,0,\"fxb wrap gp4\"],[14,\"role\",\"group\"],[15,\"aria-label\",[30,1,[\"label\"]]],[12],[1,\"\\n\"],[42,[28,[31,4],[[28,[31,4],[[30,1,[\"resolvedOptions\"]]],null]],null],null,[[[1,\"                \"],[10,\"label\"],[14,0,\"fxb fvc cursor-pointer\"],[12],[1,\"\\n                  \"],[11,\"input\"],[16,3,[30,1,[\"inputName\"]]],[16,2,[30,2,[\"value\"]]],[16,\"checked\",[30,2,[\"selected\"]]],[24,0,\"mgr1\"],[24,4,\"radio\"],[4,[32,0],[\"change\",[28,[32,2],[[30,0,[\"updateProp\"]],[30,1,[\"key\"]],[30,2,[\"value\"]]],null]],null],[12],[13],[1,\"\\n                  \"],[10,1],[14,0,\"font-size12\"],[12],[1,[30,2,[\"label\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n\"]],[2]],null],[1,\"            \"],[13],[1,\"\\n\"]],[]],[[[41,[30,1,[\"isSelect\"]],[[[1,\"            \"],[11,\"select\"],[24,0,\"block w-100p pd2 rds2 bd font-size12\"],[16,2,[30,1,[\"currentValue\"]]],[16,\"aria-label\",[30,1,[\"label\"]]],[4,[32,0],[\"change\",[28,[32,2],[[30,0,[\"selectChange\"]],[30,1,[\"key\"]]],null]],null],[12],[1,\"\\n\"],[42,[28,[31,4],[[28,[31,4],[[30,1,[\"resolvedOptions\"]]],null]],null],null,[[[1,\"                \"],[10,\"option\"],[15,2,[30,3,[\"value\"]]],[15,\"selected\",[30,3,[\"selected\"]]],[12],[1,[30,3,[\"label\"]]],[13],[1,\"\\n\"]],[3]],null],[1,\"            \"],[13],[1,\"\\n\"]],[]],[[[41,[30,1,[\"isCheckbox\"]],[[[1,\"            \"],[10,\"label\"],[14,0,\"fxb fvc gp2 cursor-pointer\"],[12],[1,\"\\n              \"],[11,\"input\"],[16,\"checked\",[30,1,[\"currentValue\"]]],[24,0,\"mgr1\"],[24,4,\"checkbox\"],[4,[32,0],[\"change\",[28,[32,2],[[30,0,[\"checkboxChange\"]],[30,1,[\"key\"]]],null]],null],[12],[13],[1,\"\\n              \"],[10,1],[14,0,\"font-size12\"],[12],[1,[30,1,[\"label\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"]],[]],null]],[]]]],[]]],[1,\"        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\"],[13]],[\"prop\",\"opt\",\"opt\",\"&preview\"],[\"if\",\"has-block\",\"yield\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/component-builder.js",
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
    "id": "y7qc3DAW",
    "block": "[[[10,0],[14,0,\"doc-component-page\"],[12],[1,\"\\n\"],[41,[30,1],[[[1,\"    \"],[8,[32,0],null,[[\"@tabs\",\"@activeTab\",\"@onChange\"],[[30,1],[30,2],[30,3]]],[[\"default\"],[[[[1,\"\\n      \"],[10,\"header\"],[14,0,\"doc-component-page__header mgb8\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"mgt0 mgb2 bold-font\"],[12],[1,[30,4]],[13],[1,\"\\n\"],[41,[30,5],[[[1,\"          \"],[10,2],[14,0,\"fg-text-secondary mgt0\"],[12],[1,[30,5]],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"doc-component-page__content\"],[12],[1,\"\\n        \"],[18,6,[[30,2]]],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,\"header\"],[14,0,\"doc-component-page__header mgb8\"],[12],[1,\"\\n      \"],[10,\"h1\"],[14,0,\"mgt0 mgb2 bold-font\"],[12],[1,[30,4]],[13],[1,\"\\n\"],[41,[30,5],[[[1,\"        \"],[10,2],[14,0,\"fg-text-secondary mgt0\"],[12],[1,[30,5]],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"doc-component-page__content\"],[12],[1,\"\\n      \"],[18,6,null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]],[13]],[\"@tabs\",\"@activeTab\",\"@onTabChange\",\"@title\",\"@description\",\"&default\"],[\"if\",\"yield\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/component-layout.js",
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
    "id": "5tMIjXqw",
    "block": "[[[8,[32,0],null,[[\"@id\",\"@title\",\"@subtitle\"],[[30,1],[30,2],[30,3]]],[[\"default\"],[[[[1,\"\\n  \"],[18,4,null],[1,\"\\n\"]],[]]]]]],[\"@id\",\"@title\",\"@subtitle\",\"&default\"],[\"yield\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-basic-section.js",
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
    "id": "dAgx9cqy",
    "block": "[[[8,[32,0],null,[[\"@id\",\"@title\",\"@subtitle\"],[[30,1],\"import\",[30,2]]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"code-preview-container mgb4\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n      \"],[10,\"pre\"],[12],[10,\"code\"],[12],[1,[30,3]],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@id\",\"@subtitle\",\"@code\"],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-import-section.js",
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
    "id": "6o+fU4Np",
    "block": "[[[10,0],[14,0,\"doc-panel-wrapper fxb fsb\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"doc-panel fxgrow w-100p\"],[12],[1,\"\\n\"],[41,[30,1],[[[42,[28,[31,2],[[28,[31,2],[[30,1]],null]],null],null,[[[1,\"        \"],[8,[32,0],null,[[\"@id\",\"@title\"],[[30,2,[\"id\"]],[30,2,[\"sectionNav\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,2,[\"sectionDesc\"]],[[[1,\"            \"],[8,[32,1],null,[[\"@as\",\"@content\"],[[30,2,[\"sectionDesc\",\"props\",\"as\"]],[30,2,[\"sectionDesc\",\"props\",\"content\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"          \\n\"],[41,[30,2,[\"demo\"]],[[[1,\"            \"],[8,[32,2],null,[[\"@source\",\"@language\",\"@snippetName\",\"@title\",\"@description\",\"@hasDemo\"],[[30,2,[\"demo\",\"props\",\"source\"]],[30,2,[\"demo\",\"props\",\"language\"]],[30,2,[\"demo\",\"props\",\"snippetName\"]],[30,2,[\"demo\",\"props\",\"title\"]],[30,2,[\"demo\",\"props\",\"description\"]],[28,[30,0,[\"hasValidComponent\"]],[[30,2]],null]]],[[\"default\"],[[[[1,\"\\n\"],[41,[28,[30,0,[\"hasValidComponent\"]],[[30,2]],null],[[[1,\"                \"],[46,[30,2,[\"demo\",\"component\"]],null,null,null],[1,\"\\n\"]],[]],null],[1,\"            \"]],[]]]]],[1,\"\\n\"]],[]],null],[1,\"        \"]],[]]]]],[1,\"\\n\"]],[2]],null]],[]],[[[1,\"      \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"No features available\"],[13],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n  \"],[8,[32,3],null,[[\"@features\"],[[30,1]]],null],[1,\"\\n\"],[13]],[\"@features\",\"feature\"],[\"if\",\"each\",\"-track-array\",\"component\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-panel.js",
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
    "id": "602pZJF2",
    "block": "[[[41,[30,0,[\"sections\",\"length\"]],[[[1,\"  \"],[11,\"nav\"],[24,0,\"doc-section-nav\"],[4,[30,0,[\"setupScrollObserver\"]],null,null],[12],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"sections\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,\"\\n          \"],[11,3],[16,6,[29,[\"#\",[30,1,[\"id\"]]]]],[16,0,[52,[28,[30,0,[\"isActive\"]],[[30,1,[\"id\"]]],null],\"active\",\"\"]],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"scrollToSection\"]],[30,1,[\"id\"]]],null]],null],[12],[1,\"\\n            \"],[1,[30,1,[\"sectionNav\"]]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"section\"],[\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-section-nav.js",
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
    "id": "NNlzzEcK",
    "block": "[[[10,0],[14,0,\"ulsp-tabpanel\"],[12],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"ulsp-tabpanel-header fxb fvc gp0 mgb6\"],[14,\"role\",\"tablist\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,1]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[14,0,\"ulsp-tabpanel-header-item\"],[14,\"role\",\"presentation\"],[12],[1,\"\\n        \"],[11,3],[24,6,\"#\"],[24,\"role\",\"tab\"],[16,\"aria-selected\",[28,[30,0,[\"isActive\"]],[[30,2,[\"id\"]]],null]],[16,0,[29,[\"pd4 fg-text-secondary text-decoration-none  font-size16 \",[52,[28,[30,0,[\"isActive\"]],[[30,2,[\"id\"]]],null],\"active\",\"\"]]]],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"handleTabClick\"]],[30,2,[\"id\"]]],null]],null],[12],[1,\"\\n          \"],[1,[30,2,[\"label\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"ulsp-tabpanel-content\"],[12],[1,\"\\n    \"],[18,4,[[30,3]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@tabs\",\"tab\",\"@activeTab\",\"&default\"],[\"each\",\"-track-array\",\"if\",\"yield\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/doc-tab.js",
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
    "id": "8FosM6WN",
    "block": "[[[10,0],[14,0,\"doc-foundation-page pdx10\"],[12],[1,\"\\n  \"],[10,\"header\"],[14,0,\"doc-foundation-page__header mgb8\"],[12],[1,\"\\n    \"],[10,\"h3\"],[14,0,\"mgt0 mgb2 bold-font\"],[12],[1,[30,1]],[13],[1,\"\\n\"],[41,[30,2],[[[1,\"      \"],[10,2],[14,0,\"fg-text-secondary mgt0\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"doc-foundation-page__content\"],[12],[1,\"\\n    \"],[18,3,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@title\",\"@description\",\"&default\"],[\"if\",\"yield\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/foundation-layout.js",
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
    <section id={{@id}} class="ulx-foundation-section mgb10">
    <h3 class="bold-font mgt0 mgb2">{{@title}}</h3>
    <header class="mgb2">
      {{#if @subtitle}}
        <p
          class="ulx-foundation-section__subtitle mgb5 font-regular fg-text-secondary mgr0"
        >
          {{@subtitle}}
        </p>
      {{/if}}
    </header>
    <div class="ulx-foundation-section__content w-100p">
      {{yield}}
    </div>
  </section>
  */
  {
    "id": "8wOP6IBi",
    "block": "[[[10,\"section\"],[15,1,[30,1]],[14,0,\"ulx-foundation-section mgb10\"],[12],[1,\"\\n  \"],[10,\"h3\"],[14,0,\"bold-font mgt0 mgb2\"],[12],[1,[30,2]],[13],[1,\"\\n  \"],[10,\"header\"],[14,0,\"mgb2\"],[12],[1,\"\\n\"],[41,[30,3],[[[1,\"      \"],[10,2],[14,0,\"ulx-foundation-section__subtitle mgb5 font-regular fg-text-secondary mgr0\"],[12],[1,\"\\n        \"],[1,[30,3]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-section__content w-100p\"],[12],[1,\"\\n    \"],[18,4,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@id\",\"@title\",\"@subtitle\",\"&default\"],[\"if\",\"yield\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/foundation-section.js",
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
    "id": "Cem+sbON",
    "block": "[[[10,0],[14,0,\"mgb3\"],[12],[1,\"\\n\"],[41,[30,0,[\"isSpan\"]],[[[1,\"  \"],[10,1],[12],[1,\"\\n    \"],[2,[30,0,[\"htmlContent\"]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[10,0],[12],[1,\"\\n    \"],[2,[30,0,[\"htmlContent\"]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]],[13]],[],[\"if\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/rich-text.js",
    "isStrictMode": true
  }), _RichTextComponent);
});
;define("ulx-ember/components/elements/ulx-avatar-group/index", ["exports", "ulx-components/components/elements/ulx-avatar-group/index"], function (_exports, _index) {
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-avatar-group/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-avatar/index", ["exports", "ulx-components/components/elements/ulx-avatar/index"], function (_exports, _index) {
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-avatar/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-badge/index", ["exports", "ulx-components/components/elements/ulx-badge/index"], function (_exports, _index) {
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-badge/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-checkbox/checkbox-item", ["exports", "ulx-components/components/elements/ulx-checkbox/checkbox-item"], function (_exports, _checkboxItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkboxItem.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-checkbox/checkbox-item"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-checkbox/index", ["exports", "ulx-components/components/elements/ulx-checkbox/index"], function (_exports, _index) {
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-checkbox/index"eaimeta@70e063a35619d71f
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
;define("ulx-ember/components/elements/ulx-radio/index", ["exports", "ulx-components/components/elements/ulx-radio/index"], function (_exports, _index) {
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-radio/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-radio/radio-item", ["exports", "ulx-components/components/elements/ulx-radio/radio-item"], function (_exports, _radioItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radioItem.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-radio/radio-item"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/elements/ulx-tag/index", ["exports", "ulx-components/components/elements/ulx-tag/index"], function (_exports, _index) {
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
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/elements/ulx-tag/index"eaimeta@70e063a35619d71f
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
;define("ulx-ember/components/ulx-avatar-group", ["exports", "ulx-components/components/ulx-avatar-group"], function (_exports, _ulxAvatarGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxAvatarGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-avatar-group"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-avatar", ["exports", "ulx-components/components/ulx-avatar"], function (_exports, _ulxAvatar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxAvatar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-avatar"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-badge", ["exports", "ulx-components/components/ulx-badge"], function (_exports, _ulxBadge) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxBadge.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-badge"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/ulx-checkbox", ["exports", "ulx-components/components/ulx-checkbox"], function (_exports, _ulxCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxCheckbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-checkbox"eaimeta@70e063a35619d71f
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
    "id": "8d6iA30V",
    "block": "[[[11,0],[16,0,[29,[\"ulsp-topbar h64 pd1 ulx-grid col-1 w-100p\\n    \",[52,[30,0,[\"isSticky\"]],\"sticky\",\"\"]]]],[4,[30,0,[\"setupScrollObserver\"]],null,null],[12],[1,\"\\n  \"],[10,\"header\"],[14,0,\"ulx-container-fluid fxb fvc fsb\"],[12],[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"t-left\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"t-logo\"],[12],[1,\"\\n        \"],[10,\"h3\"],[14,0,\"bold-font\"],[12],[1,\"ULX\\n          \"],[10,1],[14,0,\"fg-primary\"],[12],[1,\"EMBER\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"t-right fxb fvc gp2\"],[12],[1,\"\\n\"],[1,\"      \"],[10,\"button\"],[14,0,\"ulx-button secondary outlined m-size fxb fvc gp1\"],[14,\"aria-haspopup\",\"dialog\"],[14,\"aria-expanded\",\"false\"],[14,4,\"button\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"fg-text-secondary\"],[12],[1,\"Search docs\"],[13],[1,\"\\n        \"],[10,1],[14,0,\"t-key-hint mgl2\"],[12],[1,\"⌘ K\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,\"button\"],[14,0,\"ulx-button primary fxb fvc gp1 m-size\"],[14,\"aria-haspopup\",\"menu\"],[14,\"aria-controls\",\"doc-download-menu\"],[14,4,\"button\"],[12],[1,\"\\n        \"],[10,1],[12],[1,\"Download ZIP\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"\\n      \"],[11,\"button\"],[16,\"aria-label\",[52,[30,0,[\"isDarkMode\"]],\"Switch to light theme\",\"Switch to dark theme\"]],[24,0,\"pd2 --ulxbutton secondary outlined icon-only s-size\"],[24,\"data-pc-name\",\"button\"],[24,\"data-pc-section\",\"root\"],[24,4,\"button\"],[4,[32,0],[\"click\",[30,0,[\"toggleDarkMode\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"--ulxicons s18\"],[14,\"aria-hidden\",\"true\"],[12],[1,[52,[30,0,[\"isDarkMode\"]],\"☀️\",\"🌙\"]],[13],[1,\"\\n        \"],[10,1],[14,0,\"--ulxbutton-label\"],[14,\"data-pc-section\",\"label\"],[12],[1,\" \"],[13],[1,\"\\n        \"],[10,1],[14,\"role\",\"presentation\"],[14,\"aria-hidden\",\"true\"],[14,0,\"--ulxbutton-ink\"],[14,\"data-pc-name\",\"ripple\"],[14,\"data-pc-section\",\"root\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"if\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/ulx-docs-header.js",
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
;define("ulx-ember/components/ulx-radio", ["exports", "ulx-components/components/ulx-radio"], function (_exports, _ulxRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxRadio.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-radio"eaimeta@70e063a35619d71f
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
    "id": "D2wwz5RV",
    "block": "[[[3,\" IMPORTANT: React mounts into THIS div \"],[1,\"\\n\"],[11,0],[4,[30,0,[\"mount\"]],null,null],[12],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/ulx-react-bridge.js",
    "isStrictMode": true
  }), _UlxReactBridge);
});
;define("ulx-ember/components/ulx-tag", ["exports", "ulx-components/components/ulx-tag"], function (_exports, _ulxTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulxTag.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-components/components/ulx-tag"eaimeta@70e063a35619d71f
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
      }, {
        menuItem: 'checkbox',
        to: '/components/elements/checkbox',
        route: 'components.elements.checkbox'
      }, {
        menuItem: 'radio',
        to: '/components/elements/radio',
        route: 'components.elements.radio'
      }]
    }, {
      category: 'Icons',
      items: [{
        menuItem: 'Icon',
        to: '/components/elements/icon',
        route: 'components.elements.icon'
      }]
    }, {
      category: 'Misc',
      items: [{
        menuItem: 'tag',
        to: '/components/elements/tag',
        route: 'components.elements.tag'
      }, {
        menuItem: 'Badge',
        to: '/components/elements/badge',
        route: 'components.elements.badge'
      }, {
        menuItem: 'Avatar',
        to: '/components/elements/avatar',
        route: 'components.elements.avatar'
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
;define("ulx-ember/controllers/components/elements/avatar", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
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
  let ComponentsElementsAvatarController = _exports.default = (_class = class ComponentsElementsAvatarController extends _controller.default {
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
;define("ulx-ember/controllers/components/elements/badge", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
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
  let ComponentsElementsBadgeController = _exports.default = (_class = class ComponentsElementsBadgeController extends _controller.default {
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
;define("ulx-ember/controllers/components/elements/checkbox", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
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
  let ComponentsElementsCheckboxController = _exports.default = (_class = class ComponentsElementsCheckboxController extends _controller.default {
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
;define("ulx-ember/controllers/components/elements/radio", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
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
  let ComponentsElementsRadioController = _exports.default = (_class = class ComponentsElementsRadioController extends _controller.default {
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
;define("ulx-ember/controllers/components/elements/tag", ["exports", "@ember/controller", "@glimmer/tracking", "@ember/object"], function (_exports, _controller, _tracking, _object) {
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
  let ComponentsElementsTagController = _exports.default = (_class = class ComponentsElementsTagController extends _controller.default {
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
      description: 'TestComp component description for accessibility.',
      example: '<TestComp />'
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
;define("ulx-ember/documentation/components/elements/avatar/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // AVATAR BUILDER SCHEMA
  // ==========================================================================
  // Default builder schema for Avatar.
  // Customize props, stateToProps, and stateToSnippet based on the component API.
  var _default = _exports.default = {
    componentName: 'Avatar',
    importLine: "import { Avatar } from 'ulx-components';",
    props: [],
    stateToProps: () => ({}),
    stateToSnippet: () => '<Avatar />'
  };
});
;define("ulx-ember/documentation/components/elements/avatar/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/avatar/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AvatarFeatureItems = void 0;
  _exports.default = AvatarFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/avatar/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Avatar Feature Items
  // ==========================================================================
  const AvatarFeatureItems = _exports.AvatarFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Avatar</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Avatar component."
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
    id: "icon",
    sectionNav: "Icon",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Icon</code> demo shows Icon usage of the Avatar component."
      }
    },
    demo: {
      component: _imports.IconDemo,
      props: {
        source: _imports.IconSource,
        snippetName: "icon",
        language: "handlebars"
      }
    }
  }, {
    id: "image",
    sectionNav: "Image",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Image</code> demo shows Image usage of the Avatar component."
      }
    },
    demo: {
      component: _imports.ImageDemo,
      props: {
        source: _imports.ImageSource,
        snippetName: "image",
        language: "handlebars"
      }
    }
  }, {
    id: "group",
    sectionNav: "Group",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Group</code> demo shows Group usage of the Avatar component."
      }
    },
    demo: {
      component: _imports.GroupDemo,
      props: {
        source: _imports.GroupSource,
        snippetName: "group",
        language: "handlebars"
      }
    }
  }];
  function AvatarFeatures() {
    return AvatarFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/avatar/imports", ["exports", "ulx-ember/components/Demo/Avatar/Basic", "ulx-ember/components/Demo/Avatar/Icon", "ulx-ember/components/Demo/Avatar/Image", "ulx-ember/components/Demo/Avatar/Group", "ulx-ember/documentation/components/elements/avatar/snippets/Import.gjs", "ulx-ember/documentation/components/elements/avatar/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/avatar/snippets/Icon.gjs", "ulx-ember/documentation/components/elements/avatar/snippets/Image.gjs", "ulx-ember/documentation/components/elements/avatar/snippets/Group.gjs"], function (_exports, _Basic, _Icon, _Image, _Group, _Import, _Basic2, _Icon2, _Image2, _Group2) {
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
  Object.defineProperty(_exports, "IconDemo", {
    enumerable: true,
    get: function () {
      return _Icon.default;
    }
  });
  Object.defineProperty(_exports, "IconSource", {
    enumerable: true,
    get: function () {
      return _Icon2.default;
    }
  });
  Object.defineProperty(_exports, "ImageDemo", {
    enumerable: true,
    get: function () {
      return _Image.default;
    }
  });
  Object.defineProperty(_exports, "ImageSource", {
    enumerable: true,
    get: function () {
      return _Image2.default;
    }
  });
  Object.defineProperty(_exports, "ImportSource", {
    enumerable: true,
    get: function () {
      return _Import.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Avatar/Basic",0,"ulx-ember/components/Demo/Avatar/Icon",0,"ulx-ember/components/Demo/Avatar/Image",0,"ulx-ember/components/Demo/Avatar/Group",0,"ulx-ember/documentation/components/elements/avatar/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/avatar/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/avatar/snippets/Icon.gjs",0,"ulx-ember/documentation/components/elements/avatar/snippets/Image.gjs",0,"ulx-ember/documentation/components/elements/avatar/snippets/Group.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Avatar Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Avatar demo components
  // Demo Components
  // Import source (for import section)
  // Avatar Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Avatar demo source files
});
;define("ulx-ember/documentation/components/elements/avatar/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // AVATAR COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Avatar component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Misc',
    menuItem: 'Avatar',
    routeBase: '/components/elements/avatar',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'Avatar',
    subHeader: 'Avatar is a component for user interaction.',
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
    importMsg: "import { Avatar } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Avatar component description for accessibility.',
      example: '<Avatar />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/avatar/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxAvatar } from 'ulx-components';

<template>
  <div class="ulx-grid col-2">
    <div class="">
      <h6 class="bold-font mgb3">Square</h6>
      <div class="fxb wrap gp4 fvc">
        <UlxAvatar
          @type="text"
          @label="UL"
          @shape="square"
          @size="xl-size"
          @variant="grey"
        />
        <UlxAvatar
          @type="text"
          @label="V"
          @shape="square"
          @size="l-size"
          @variant="blue"
        />
        <UlxAvatar
          @type="text"
          @label="U"
          @shape="square"
          @size="m-size"
          @variant="purple"
        />
      </div>
    </div>

    <div class="">
      <h6 class="bold-font mgb3">Circle</h6>
      <div class="fxb wrap gp4 fvc">
        <UlxAvatar
          @type="text"
          @label="P"
          @shape="circle"
          @size="xl-size"
          @variant="grey"
        />
        <UlxAvatar
          @type="text"
          @label="V"
          @shape="circle"
          @size="l-size"
          @variant="blue"
        />
        <UlxAvatar
          @type="text"
          @label="U"
          @shape="circle"
          @size="m-size"
          @variant="purple"
        />
      </div>
    </div>
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/avatar/snippets/Group.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxAvatarGroup } from 'ulx-components';

export default class GroupDemoComponent extends Component {
  get avatarItems() {
    return [
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/90.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/91.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
      {
        type: 'image',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        imageAlt: 'User profile picture',
        ariaLabel: 'User profile',
      },
    ];
  }

  <template>
    <UlxAvatarGroup
      @items={{this.avatarItems}}
      @stacked={{true}}
      @maxVisible={{4}}
      @size="l-size"
      @shape="circle"
    />
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/avatar/snippets/Icon.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxAvatar } from 'ulx-components';

<template>
  <div class="fxb wrap gp4 fvc">
    <UlxAvatar
      @type="icon"
      @iconName="user-info-icon-01"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="circle"
      @size="xl-size"
      @variant="primary"
    />
    <UlxAvatar
      @type="icon"
      @iconName="contact-support-icon-01"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="circle"
      @size="l-size"
      @variant="secondary"
    />
    <UlxAvatar
      @type="icon"
      @iconName="reassign-member-icon"
      @iconType="font"
      @iconComponentClass="bs-icons1"
      @shape="square"
      @size="m-size"
      @variant="info"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/avatar/snippets/Image.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxAvatar } from 'ulx-components';

<template>
  <div class="fxb wrap gp4 fvc">
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/90.jpg"
      @imageAlt="User profile picture"
      @shape="square"
      @size="xl-size"
      @ariaLabel="User profile"
    />
    <UlxAvatar
      @type="image"
      @image="https://randomuser.me/api/portraits/women/91.jpg"
      @imageAlt="User profile picture"
      @shape="circle"
      @size="xl-size"
      @ariaLabel="User profile"
    />
  </div>
</template>

`;
});
;define("ulx-ember/documentation/components/elements/avatar/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Avatar } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/badge/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // BADGE BUILDER SCHEMA
  // ==========================================================================
  // Default builder schema for Badge.
  // Customize props, stateToProps, and stateToSnippet based on the component API.
  var _default = _exports.default = {
    componentName: 'Badge',
    importLine: "import { Badge } from 'ulx-components';",
    props: [],
    stateToProps: () => ({}),
    stateToSnippet: () => '<Badge />'
  };
});
;define("ulx-ember/documentation/components/elements/badge/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/badge/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BadgeFeatureItems = void 0;
  _exports.default = BadgeFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/badge/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Badge Feature Items
  // ==========================================================================
  const BadgeFeatureItems = _exports.BadgeFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Badge</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Badge component."
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
    id: "variants",
    sectionNav: "Variants",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Variants</code> demo shows Variants usage of the Badge component."
      }
    },
    demo: {
      component: _imports.VariantsDemo,
      props: {
        source: _imports.VariantsSource,
        snippetName: "variants",
        language: "handlebars"
      }
    }
  }, {
    id: "type",
    sectionNav: "Type",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Type</code> demo shows Type usage of the Badge component."
      }
    },
    demo: {
      component: _imports.TypeDemo,
      props: {
        source: _imports.TypeSource,
        snippetName: "type",
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
        content: "The <code>Size</code> demo shows Size usage of the Badge component."
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
  }];
  function BadgeFeatures() {
    return BadgeFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/badge/imports", ["exports", "ulx-ember/components/Demo/Badge/Basic", "ulx-ember/components/Demo/Badge/Variants", "ulx-ember/components/Demo/Badge/Type", "ulx-ember/components/Demo/Badge/Size", "ulx-ember/documentation/components/elements/badge/snippets/Import.gjs", "ulx-ember/documentation/components/elements/badge/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/badge/snippets/Variants.gjs", "ulx-ember/documentation/components/elements/badge/snippets/Type.gjs", "ulx-ember/documentation/components/elements/badge/snippets/Size.gjs"], function (_exports, _Basic, _Variants, _Type, _Size, _Import, _Basic2, _Variants2, _Type2, _Size2) {
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
  Object.defineProperty(_exports, "TypeDemo", {
    enumerable: true,
    get: function () {
      return _Type.default;
    }
  });
  Object.defineProperty(_exports, "TypeSource", {
    enumerable: true,
    get: function () {
      return _Type2.default;
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
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Badge/Basic",0,"ulx-ember/components/Demo/Badge/Variants",0,"ulx-ember/components/Demo/Badge/Type",0,"ulx-ember/components/Demo/Badge/Size",0,"ulx-ember/documentation/components/elements/badge/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/badge/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/badge/snippets/Variants.gjs",0,"ulx-ember/documentation/components/elements/badge/snippets/Type.gjs",0,"ulx-ember/documentation/components/elements/badge/snippets/Size.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Badge Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Badge demo components
  // Demo Components
  // Import source (for import section)
  // Badge Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Badge demo source files
});
;define("ulx-ember/documentation/components/elements/badge/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // BADGE COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Badge component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Misc',
    menuItem: 'Badge',
    routeBase: '/components/elements/badge',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'Badge',
    subHeader: 'Badge is a component for user interaction.',
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
    importMsg: "import { Badge } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Badge component description for accessibility.',
      example: '<Badge />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/badge/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxBadge } from 'ulx-components';

<template>
  <UlxBadge @value="2" @size="s-size" @variant="primary" @circle={{true}} />
</template>

`;
});
;define("ulx-ember/documentation/components/elements/badge/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Badge } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/badge/snippets/Size.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxBadge } from 'ulx-components';

export default class SizeDemoComponent extends Component {
  get sizes() {
    return [
      { label: '1', size: 'xs-size' },
      { label: '2', size: 's-size' },
      { label: '3', size: 'm-size' },
      { label: '4', size: 'l-size' },
      { label: '5', size: 'xl-size' },
    ];
  }

  get dotSizes() {
    return [
      { label: '5', size: 'xl-size' },
      { label: '4', size: 'l-size' },
      { label: '3', size: 'm-size' },
      { label: '2', size: 's-size' },
      { label: '1', size: 'xs-size' },
    ];
  }

  <template>
    <div class="fxb wrap gp4 fvc mgb12">
      {{#each this.sizes key="size" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size={{item.size}}
          @variant="primary"
          @type="circle"
        />
      {{/each}}
    </div>
    <div class="fxb wrap gp4 fvc">
      {{#each this.dotSizes key="size" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size={{item.size}}
          @variant="primary"
          @type="dot"
          @ariaLabel="Notify"
        />
      {{/each}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/badge/snippets/Type.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxBadge } from 'ulx-components';

export default class TypeDemoComponent extends Component {
  get types() {
    return [
      { label: '1', type: undefined },
      { label: '2', type: 'circle' },
      { label: '', type: 'dot' },
    ];
  }

  <template>
    <div class="fxb wrap fvc gp4">
      {{#each this.types key="type" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size="s-size"
          @variant="primary"
          @type={{item.type}}
        />
      {{/each}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/badge/snippets/Variants.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxBadge } from 'ulx-components';

export default class VariantsDemoComponent extends Component {
  get variants() {
    return [
      { label: '2', variant: 'primary' },
      { label: '12', variant: 'secondary' },
      { label: '32', variant: 'success' },
      { label: '455', variant: 'info' },
      { label: '32', variant: 'warning' },
      { label: '54', variant: 'danger' },
      { label: '65', variant: 'contrast' },
      { label: '56', variant: 'light-grey' },
    ];
  }

  <template>
    <div class="fxb wrap gp4">
      {{#each this.variants key="variant" as |item|}}
        <UlxBadge
          @value={{item.label}}
          @size="s-size"
          @variant={{item.variant}}
          @type="circle"
        />
      {{/each}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/checkbox/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // CHECKBOX BUILDER SCHEMA
  // ==========================================================================
  // Default builder schema for checkbox.
  // Customize props, stateToProps, and stateToSnippet based on the component API.
  var _default = _exports.default = {
    componentName: 'Checkbox',
    importLine: "import { Checkbox } from 'ulx-components';",
    props: [],
    stateToProps: () => ({}),
    stateToSnippet: () => '<Checkbox />'
  };
});
;define("ulx-ember/documentation/components/elements/checkbox/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/checkbox/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CheckboxFeatureItems = void 0;
  _exports.default = CheckboxFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/checkbox/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Checkbox Feature Items
  // ==========================================================================
  const CheckboxFeatureItems = _exports.CheckboxFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Checkbox</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Checkbox component."
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
    id: "with-label",
    sectionNav: "Withlabel",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Withlabel</code> demo shows WithLabel usage of the Checkbox component."
      }
    },
    demo: {
      component: _imports.WithlabelDemo,
      props: {
        source: _imports.WithlabelSource,
        snippetName: "with-label",
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
        content: "The <code>Invalid</code> demo shows Invalid usage of the Checkbox component."
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
        content: "The <code>Disabled</code> demo shows Disabled usage of the Checkbox component."
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
  }, {
    id: "group",
    sectionNav: "Group",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Group</code> demo shows Group usage of the Checkbox component."
      }
    },
    demo: {
      component: _imports.GroupDemo,
      props: {
        source: _imports.GroupSource,
        snippetName: "group",
        language: "handlebars"
      }
    }
  }];
  function CheckboxFeatures() {
    return CheckboxFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/checkbox/imports", ["exports", "ulx-ember/components/Demo/Checkbox/Basic", "ulx-ember/components/Demo/Checkbox/Withlabel", "ulx-ember/components/Demo/Checkbox/Invalid", "ulx-ember/components/Demo/Checkbox/Disabled", "ulx-ember/components/Demo/Checkbox/Group", "ulx-ember/documentation/components/elements/checkbox/snippets/Import.gjs", "ulx-ember/documentation/components/elements/checkbox/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/checkbox/snippets/Withlabel.gjs", "ulx-ember/documentation/components/elements/checkbox/snippets/Invalid.gjs", "ulx-ember/documentation/components/elements/checkbox/snippets/Disabled.gjs", "ulx-ember/documentation/components/elements/checkbox/snippets/Group.gjs"], function (_exports, _Basic, _Withlabel, _Invalid, _Disabled, _Group, _Import, _Basic2, _Withlabel2, _Invalid2, _Disabled2, _Group2) {
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
  Object.defineProperty(_exports, "WithlabelDemo", {
    enumerable: true,
    get: function () {
      return _Withlabel.default;
    }
  });
  Object.defineProperty(_exports, "WithlabelSource", {
    enumerable: true,
    get: function () {
      return _Withlabel2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Checkbox/Basic",0,"ulx-ember/components/Demo/Checkbox/Withlabel",0,"ulx-ember/components/Demo/Checkbox/Invalid",0,"ulx-ember/components/Demo/Checkbox/Disabled",0,"ulx-ember/components/Demo/Checkbox/Group",0,"ulx-ember/documentation/components/elements/checkbox/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/checkbox/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/checkbox/snippets/Withlabel.gjs",0,"ulx-ember/documentation/components/elements/checkbox/snippets/Invalid.gjs",0,"ulx-ember/documentation/components/elements/checkbox/snippets/Disabled.gjs",0,"ulx-ember/documentation/components/elements/checkbox/snippets/Group.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Checkbox Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Checkbox demo components
  // Demo Components
  // Import source (for import section)
  // Checkbox Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Checkbox demo source files
});
;define("ulx-ember/documentation/components/elements/checkbox/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // CHECKBOX COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Checkbox component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Form',
    menuItem: 'checkbox',
    routeBase: '/components/elements/checkbox',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'checkbox',
    subHeader: 'checkbox is a component for user interaction.',
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
    importMsg: "import { Checkbox } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Checkbox component description for accessibility.',
      example: '<Checkbox />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/checkbox/snippets/Basic.gjs", ["exports"], function (_exports) {
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
import { UlxCheckbox } from 'ulx-components';

export default class BasicCheckboxDemo extends Component {
  @tracked items = [{ label: 'All Event Days', checked: true }];

  get requiredRules() {
    return { required: true };
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxCheckbox
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/checkbox/snippets/Disabled.gjs", ["exports"], function (_exports) {
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
import { UlxCheckbox } from 'ulx-components';

export default class WithlabelDemoComponent extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: false, disabled: true },
    { label: 'Single Event Days', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxCheckbox
        @label="With Label"
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/checkbox/snippets/Group.gjs", ["exports"], function (_exports) {
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
import { UlxCheckbox } from 'ulx-components';

export default class GroupDemoComponent extends Component {
  @tracked items = [
    { label: 'Item 1', checked: true },
    { label: 'Item 2', checked: false },
    { label: 'Item 3 (disabled)', checked: false, disabled: true },
  ];

  get error() {
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxCheckbox
        @label="Group"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
        @fieldClass="col-12"
        @groupClass="horizontal"
        @error={{this.error}}
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/checkbox/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Checkbox } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/checkbox/snippets/Invalid.gjs", ["exports"], function (_exports) {
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
import { UlxCheckbox } from 'ulx-components';

export default class WithlabelDemoComponent extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: false },
    { label: 'Single Event Days', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  get error() {
    // \`UlxCheckbox\` expects a *field-level* string error message (not per-item).
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxCheckbox
        @label="With Label"
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
        @error={{this.error}}
      />
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/checkbox/snippets/Withlabel.gjs", ["exports"], function (_exports) {
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
import { UlxCheckbox } from 'ulx-components';

export default class WithlabelDemoComponent extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: true },
    { label: 'Single Event Days', checked: true },
  ];

  get requiredRules() {
    return { required: true };
  }

  // get error() {
  //   // \`UlxCheckbox\` expects a *field-level* string error message (not per-item).
  //   // Example validation: require at least one item to be checked.
  //   const hasAtLeastOneChecked = this.items.some((i) => i.checked);
  //   return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
  // }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxCheckbox
        @label="With Label"
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
        {{!-- @error={{this.error}} --}}
      />
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
  // @ulx-builder comments in ulx-v2/.../less/elements/icon.less.
  // Run: node scripts/extract-ulx-builder-tokens.js [path-to-icon.less]
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
  'https://cdn.zicons.in/21598000000025464/v1/bs-icons1.css';
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
      description: 'InputGroup component description for accessibility.',
      example: '<InputGroup />'
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
import { UlxInput, UlxIcon } from 'ulx-components';

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
import { UlxInput, UlxIcon } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Price"
      aria-label="Price"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">$</span>
      </:start>
      <:end>
        <span class="ulx-inputgroup-addon">.00</span>
      </:end>
    </UlxInput>

    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Search"
      aria-label="Search"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="ls-tick-icon"
            @size="s18"
            @ariaLabel="search icon"
          />
        </span>
      </:start>
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
;define("ulx-ember/documentation/components/elements/radio/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // RADIO BUILDER SCHEMA
  // ==========================================================================
  // Default builder schema for radio.
  // Customize props, stateToProps, and stateToSnippet based on the component API.
  var _default = _exports.default = {
    componentName: 'Radio',
    importLine: "import { Radio } from 'ulx-components';",
    props: [],
    stateToProps: () => ({}),
    stateToSnippet: () => '<Radio />'
  };
});
;define("ulx-ember/documentation/components/elements/radio/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/radio/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.RadioFeatureItems = void 0;
  _exports.default = RadioFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/radio/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Radio Feature Items
  // ==========================================================================
  const RadioFeatureItems = _exports.RadioFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Radio</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Radio component."
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
    id: "with-label",
    sectionNav: "Withlabel",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Withlabel</code> demo shows WithLabel usage of the Radio component."
      }
    },
    demo: {
      component: _imports.WithlabelDemo,
      props: {
        source: _imports.WithlabelSource,
        snippetName: "with-label",
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
        content: "The <code>Invalid</code> demo shows Invalid usage of the Radio component."
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
        content: "The <code>Disabled</code> demo shows Disabled usage of the Radio component."
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
  }, {
    id: "horizontal",
    sectionNav: "Horizontal",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Horizontal</code> demo shows Horizontal usage of the Radio component."
      }
    },
    demo: {
      component: _imports.HorizontalDemo,
      props: {
        source: _imports.HorizontalSource,
        snippetName: "horizontal",
        language: "handlebars"
      }
    }
  }];
  function RadioFeatures() {
    return RadioFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/radio/imports", ["exports", "ulx-ember/components/Demo/Radio/Basic", "ulx-ember/components/Demo/Radio/Withlabel", "ulx-ember/components/Demo/Radio/Invalid", "ulx-ember/components/Demo/Radio/Disabled", "ulx-ember/components/Demo/Radio/Horizontal", "ulx-ember/documentation/components/elements/radio/snippets/Import.gjs", "ulx-ember/documentation/components/elements/radio/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/radio/snippets/Withlabel.gjs", "ulx-ember/documentation/components/elements/radio/snippets/Invalid.gjs", "ulx-ember/documentation/components/elements/radio/snippets/Disabled.gjs", "ulx-ember/documentation/components/elements/radio/snippets/Horizontal.gjs"], function (_exports, _Basic, _Withlabel, _Invalid, _Disabled, _Horizontal, _Import, _Basic2, _Withlabel2, _Invalid2, _Disabled2, _Horizontal2) {
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
  Object.defineProperty(_exports, "HorizontalDemo", {
    enumerable: true,
    get: function () {
      return _Horizontal.default;
    }
  });
  Object.defineProperty(_exports, "HorizontalSource", {
    enumerable: true,
    get: function () {
      return _Horizontal2.default;
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
  Object.defineProperty(_exports, "WithlabelDemo", {
    enumerable: true,
    get: function () {
      return _Withlabel.default;
    }
  });
  Object.defineProperty(_exports, "WithlabelSource", {
    enumerable: true,
    get: function () {
      return _Withlabel2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Radio/Basic",0,"ulx-ember/components/Demo/Radio/Withlabel",0,"ulx-ember/components/Demo/Radio/Invalid",0,"ulx-ember/components/Demo/Radio/Disabled",0,"ulx-ember/components/Demo/Radio/Horizontal",0,"ulx-ember/documentation/components/elements/radio/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/radio/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/radio/snippets/Withlabel.gjs",0,"ulx-ember/documentation/components/elements/radio/snippets/Invalid.gjs",0,"ulx-ember/documentation/components/elements/radio/snippets/Disabled.gjs",0,"ulx-ember/documentation/components/elements/radio/snippets/Horizontal.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Radio Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Radio demo components
  // Demo Components
  // Import source (for import section)
  // Radio Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Radio demo source files
});
;define("ulx-ember/documentation/components/elements/radio/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // RADIO COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Radio component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Form',
    menuItem: 'radio',
    routeBase: '/components/elements/radio',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'radio',
    subHeader: 'radio is a component for user interaction.',
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
    importMsg: "import { Radio } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Radio component description for accessibility.',
      example: '<Radio />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/radio/snippets/Basic.gjs", ["exports"], function (_exports) {
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
import { UlxRadio } from 'ulx-components';

export default class BasicRadioDemo extends Component {
  @tracked items = [{ label: 'Item 1', value: 'item1', checked: false }];

  get requiredRules() {
    return { required: true };
  }

  get selectedValue() {
    return this.items.find((i) => i.checked)?.value;
  }

  @action
  handleItemChange(item, checked) {
    // Radios are single-select: when one is checked, the rest must be unchecked.
    if (!checked) return;
    this.items = this.items.map((i) => ({ ...i, checked: i === item }));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxRadio
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
      />

      <div class="col-12">
        Selected:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/radio/snippets/Disabled.gjs", ["exports"], function (_exports) {
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
import { UlxRadio } from 'ulx-components';

export default class DisabledDemoComponent extends Component {
  @tracked items = [
    { label: 'Item 1', value: 'item1', checked: false },
    { label: 'Item 2', value: 'item2', checked: true, disabled: true },
    { label: 'Item 3', value: 'item3', checked: false, disabled: true },
  ];

  get requiredRules() {
    return { required: true };
  }

  get selectedValue() {
    return this.items.find((i) => i.checked)?.value;
  }

  get error() {
    // \`UlxCheckbox\` expects a *field-level* string error message (not per-item).
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
  }

  @action
  handleItemChange(item, checked) {
    // Radios are single-select: when one is checked, the rest must be unchecked.
    if (!checked) return;
    this.items = this.items.map((i) => ({ ...i, checked: i === item }));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxRadio
        @rules={{this.requiredRules}}
        @label="With Label"
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
        @error={{this.error}}
      />

      <div class="col-12">
        Selected:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/radio/snippets/Horizontal.gjs", ["exports"], function (_exports) {
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
import { UlxRadio } from 'ulx-components';

export default class HorizontalDemoComponent extends Component {
  @tracked items = [
    { label: 'Item 1', value: 'item1', checked: false },
    { label: 'Item 2', value: 'item2', checked: false },
    { label: 'Item 3', value: 'item3', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  get selectedValue() {
    return this.items.find((i) => i.checked)?.value;
  }

  get error() {
    // \`UlxCheckbox\` expects a *field-level* string error message (not per-item).
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
  }

  @action
  handleItemChange(item, checked) {
    // Radios are single-select: when one is checked, the rest must be unchecked.
    if (!checked) return;
    this.items = this.items.map((i) => ({ ...i, checked: i === item }));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxRadio
        @rules={{this.requiredRules}}
        @label="With Label"
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
        @groupClass="horizontal"
        @error={{this.error}}
      />

      <div class="col-12">
        Selected:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/radio/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Radio } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/radio/snippets/Invalid.gjs", ["exports"], function (_exports) {
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
import { UlxRadio } from 'ulx-components';

export default class InvalidRadioDemo extends Component {
  @tracked items = [
    { label: 'Item 1', value: 'item1', checked: false },
    { label: 'Item 2', value: 'item2', checked: false },
    { label: 'Item 3', value: 'item3', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  get selectedValue() {
    return this.items.find((i) => i.checked)?.value;
  }

  get error() {
    // \`UlxCheckbox\` expects a *field-level* string error message (not per-item).
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
  }

  @action
  handleItemChange(item, checked) {
    // Radios are single-select: when one is checked, the rest must be unchecked.
    if (!checked) return;
    this.items = this.items.map((i) => ({ ...i, checked: i === item }));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxRadio
        @rules={{this.requiredRules}}
        @label="With Label"
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
        @error={{this.error}}
      />

      <div class="col-12">
        Selected:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/radio/snippets/Withlabel.gjs", ["exports"], function (_exports) {
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
import { UlxRadio } from 'ulx-components';

export default class BasicRadioDemo extends Component {
  @tracked items = [
    { label: 'Item 1', value: 'item1', checked: false },
    { label: 'Item 2', value: 'item2', checked: false },
    { label: 'Item 3', value: 'item3', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  get selectedValue() {
    return this.items.find((i) => i.checked)?.value;
  }

  @action
  handleItemChange(item, checked) {
    // Radios are single-select: when one is checked, the rest must be unchecked.
    if (!checked) return;
    this.items = this.items.map((i) => ({ ...i, checked: i === item }));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxRadio
        @rules={{this.requiredRules}}
        @label="With Label"
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
      />

      <div class="col-12">
        Selected:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/tag/builder-schema", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // TAG BUILDER SCHEMA
  // ==========================================================================
  // Default builder schema for tag.
  // Customize props, stateToProps, and stateToSnippet based on the component API.
  var _default = _exports.default = {
    componentName: 'Tag',
    importLine: "import { Tag } from 'ulx-components';",
    props: [],
    stateToProps: () => ({}),
    stateToSnippet: () => '<Tag />'
  };
});
;define("ulx-ember/documentation/components/elements/tag/features", ["exports", "ulx-ember/components/common/doc-main/rich-text", "ulx-ember/documentation/components/elements/tag/imports"], function (_exports, _richText, _imports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.TagFeatureItems = void 0;
  _exports.default = TagFeatures;
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/common/doc-main/rich-text",0,"ulx-ember/documentation/components/elements/tag/imports"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Tag Feature Items
  // ==========================================================================
  const TagFeatureItems = _exports.TagFeatureItems = [{
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Tag</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Tag component."
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
    id: "variations",
    sectionNav: "Variations",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Variations</code> demo shows Variations usage of the Tag component."
      }
    },
    demo: {
      component: _imports.VariationsDemo,
      props: {
        source: _imports.VariationsSource,
        snippetName: "variations",
        language: "handlebars"
      }
    }
  }, {
    id: "type",
    sectionNav: "Type",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Type</code> demo shows Type usage of the Tag component."
      }
    },
    demo: {
      component: _imports.TypeDemo,
      props: {
        source: _imports.TypeSource,
        snippetName: "type",
        language: "handlebars"
      }
    }
  }, {
    id: "symbol",
    sectionNav: "Symbol",
    sectionDesc: {
      component: _richText.default,
      props: {
        as: "span",
        content: "The <code>Symbol</code> demo shows Symbol usage of the Tag component."
      }
    },
    demo: {
      component: _imports.SymbolDemo,
      props: {
        source: _imports.SymbolSource,
        snippetName: "symbol",
        language: "handlebars"
      }
    }
  }];
  function TagFeatures() {
    return TagFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/tag/imports", ["exports", "ulx-ember/components/Demo/Tag/Basic", "ulx-ember/components/Demo/Tag/Variations", "ulx-ember/components/Demo/Tag/Type", "ulx-ember/components/Demo/Tag/Symbol", "ulx-ember/documentation/components/elements/tag/snippets/Import.gjs", "ulx-ember/documentation/components/elements/tag/snippets/Basic.gjs", "ulx-ember/documentation/components/elements/tag/snippets/Variations.gjs", "ulx-ember/documentation/components/elements/tag/snippets/Type.gjs", "ulx-ember/documentation/components/elements/tag/snippets/Symbol.gjs"], function (_exports, _Basic, _Variations, _Type, _Symbol, _Import, _Basic2, _Variations2, _Type2, _Symbol2) {
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
  Object.defineProperty(_exports, "SymbolDemo", {
    enumerable: true,
    get: function () {
      return _Symbol.default;
    }
  });
  Object.defineProperty(_exports, "SymbolSource", {
    enumerable: true,
    get: function () {
      return _Symbol2.default;
    }
  });
  Object.defineProperty(_exports, "TypeDemo", {
    enumerable: true,
    get: function () {
      return _Type.default;
    }
  });
  Object.defineProperty(_exports, "TypeSource", {
    enumerable: true,
    get: function () {
      return _Type2.default;
    }
  });
  Object.defineProperty(_exports, "VariationsDemo", {
    enumerable: true,
    get: function () {
      return _Variations.default;
    }
  });
  Object.defineProperty(_exports, "VariationsSource", {
    enumerable: true,
    get: function () {
      return _Variations2.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Tag/Basic",0,"ulx-ember/components/Demo/Tag/Variations",0,"ulx-ember/components/Demo/Tag/Type",0,"ulx-ember/components/Demo/Tag/Symbol",0,"ulx-ember/documentation/components/elements/tag/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/tag/snippets/Basic.gjs",0,"ulx-ember/documentation/components/elements/tag/snippets/Variations.gjs",0,"ulx-ember/documentation/components/elements/tag/snippets/Type.gjs",0,"ulx-ember/documentation/components/elements/tag/snippets/Symbol.gjs"eaimeta@70e063a35619d71f
  // ==========================================================================
  // Tag Demo Components Barrel Export
  // ==========================================================================
  // Centralized exports for all Tag demo components
  // Demo Components
  // Import source (for import section)
  // Tag Demo Sources Barrel Export
  // ==========================================================================
  // Centralized exports for all Tag demo source files
});
;define("ulx-ember/documentation/components/elements/tag/meta", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  // ==========================================================================
  // TAG COMPONENT METADATA
  // ==========================================================================
  // Single source of truth for Tag component documentation
  var _default = _exports.default = {
    // Navigation metadata
    category: 'Elements',
    subCategory: 'Misc',
    menuItem: 'tag',
    routeBase: '/components/elements/tag',
    icon: 'pi pi-compass',
    // Page metadata
    header: 'tag',
    subHeader: 'tag is a component for user interaction.',
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
    importMsg: "import { Tag } from 'ulx-components'",
    // Accessibility information
    accessibility: {
      description: 'Tag component description for accessibility.',
      example: '<Tag />'
    }
  };
});
;define("ulx-ember/documentation/components/elements/tag/snippets/Basic.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { UlxTag } from 'ulx-components';

<template>
  <UlxTag @value="Tag/Label" @size="s-size" @variant="primary" />
</template>

`;
});
;define("ulx-ember/documentation/components/elements/tag/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Tag } from 'ulx-components';

`;
});
;define("ulx-ember/documentation/components/elements/tag/snippets/Symbol.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class SymbolDemoComponent extends Component {
  get examples() {
    return [
      // Symbol labels (tag.less §5C)
      {
        label: 'with-dot',
        variant: 'primary',
        type: undefined,
        customClass: 'with-dot',
      },
      {
        label: 'with-star',
        variant: 'secondary',
        type: undefined,
        customClass: 'with-star',
      },

      // Icon positions (UlxTag @iconPosition)
      {
        label: 'icon left (default)',
        variant: 'success',
        type: undefined,
        icon: 'ls-tick-icon',
        iconPosition: 'left',
      },
      {
        label: 'icon right',
        variant: 'danger',
        type: 'outline',
        icon: 'close-icon-01',
        iconPosition: 'right',
      },
      {
        label: 'icon both sides',
        variant: 'info',
        type: undefined,
        icon: 'comment-icon',
        iconPosition: 'left',
        rightIcon: 'session-settings-icon',
      },

      // Icon labels (UlxTag @icon / @iconType)
      {
        label: 'tick icon',
        variant: 'success',
        type: undefined,
        icon: 'ls-tick-icon',
      },
      {
        label: 'close icon + outline',
        variant: 'danger',
        type: 'outline',
        icon: 'close-icon-01',
      },
      {
        label: 'comment icon',
        variant: 'info',
        type: undefined,
        icon: 'comment-icon',
      },
      {
        label: 'settings icon + pill',
        variant: 'secondary',
        type: 'pill',
        icon: 'session-settings-icon',
      },
    ];
  }

  <template>
    <div class="fxb wrap gp4">
      {{#each this.examples key="label" as |item|}}
        <UlxTag
          @value={{item.label}}
          @size="s-size"
          @variant={{item.variant}}
          @type={{item.type}}
          @customClass={{item.customClass}}
          @icon={{item.icon}}
          @iconPosition={{item.iconPosition}}
          @iconType="font"
          @iconClass="bs-icons1"
          @iconSize="s14"
        />
      {{/each}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/tag/snippets/Type.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class TypeDemoComponent extends Component {
  get types() {
    return [
      { label: 'Filled (default)', type: undefined },
      { label: 'Outline', type: 'outline' },
      { label: 'Pill', type: 'pill' },
    ];
  }

  <template>
    <div class="fxb wrap gp4">
      {{#each this.types key="label" as |item|}}
        <UlxTag
          @value={{item.label}}
          @size="m-size"
          @variant="primary"
          @type={{item.type}}
        />
      {{/each}}
    </div>
  </template>
}

`;
});
;define("ulx-ember/documentation/components/elements/tag/snippets/Variations.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class VariationsDemoComponent extends Component {
  get variations() {
    return [
      // Core variants
      { label: 'primary', class: 'primary' },
      { label: 'secondary', class: 'secondary' },
      { label: 'success', class: 'success' },
      { label: 'info', class: 'info' },
      { label: 'warning', class: 'warning' },
      { label: 'danger', class: 'danger' },
      { label: 'contrast', class: 'contrast' },
      { label: 'white', class: 'white' },
      { label: 'black', class: 'black' },

      // Light tone variants (lt-*)
      { label: 'lt-green', class: 'lt-green' },
      { label: 'lt-gold', class: 'lt-gold' },
      { label: 'lt-purple', class: 'lt-purple' },
      { label: 'lt-blue', class: 'lt-blue' },
      { label: 'lt-red', class: 'lt-red' },
      { label: 'lt-primary', class: 'lt-primary' },

      // Light palette variants (light-*)
      { label: 'light-nebula-blue', class: 'light-nebula-blue' },
      { label: 'light-salmon-red', class: 'light-salmon-red' },
      { label: 'light-jungle-green', class: 'light-jungle-green' },
      { label: 'light-cyber-yellow', class: 'light-cyber-yellow' },
      { label: 'light-cerise-pink', class: 'light-cerise-pink' },
      { label: 'light-royal-violet', class: 'light-royal-violet' },
      { label: 'light-medium-orchid', class: 'light-medium-orchid' },
      { label: 'light-turquoise-green', class: 'light-turquoise-green' },
      { label: 'light-not-blue', class: 'light-not-blue' },
      { label: 'light-bs-grey', class: 'light-bs-grey' },
      { label: 'light-grass-green', class: 'light-grass-green' },
      { label: 'light-sandal-yellow', class: 'light-sandal-yellow' },
      { label: 'light-lomo-blue', class: 'light-lomo-blue' },
      { label: 'light-candy-orange', class: 'light-candy-orange' },
      { label: 'light-dairy-violet', class: 'light-dairy-violet' },
      { label: 'just-grey', class: 'just-grey' },

      // Status tags
      { label: 'running-color', class: 'running-color' },
      { label: 'completed-color', class: 'completed-color' },
      { label: 'published-color', class: 'published-color' },
      { label: 'draft-color', class: 'draft-color' },
      { label: 'cancelled-color', class: 'cancelled-color' },
    ];
  }

  <template>
    <div class="fxb wrap gp4">
      {{#each this.variations key="class" as |item|}}
        <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
      {{/each}}
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
      description: 'UlxIconInput component description for accessibility.',
      example: '<UlxIconInput />'
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
        this.route('checkbox');
        this.route('radio');
        this.route('tag');
        this.route('badge');
        this.route('avatar');
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
;define("ulx-ember/routes/components/elements/avatar", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/avatar/features", "ulx-ember/documentation/components/elements/avatar/meta", "ulx-ember/documentation/components/elements/avatar/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/avatar/features",0,"ulx-ember/documentation/components/elements/avatar/meta",0,"ulx-ember/documentation/components/elements/avatar/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsAvatarRoute extends _route.default {
    model() {
      return {
        features: _features.AvatarFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsAvatarRoute;
});
;define("ulx-ember/routes/components/elements/badge", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/badge/features", "ulx-ember/documentation/components/elements/badge/meta", "ulx-ember/documentation/components/elements/badge/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/badge/features",0,"ulx-ember/documentation/components/elements/badge/meta",0,"ulx-ember/documentation/components/elements/badge/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsBadgeRoute extends _route.default {
    model() {
      return {
        features: _features.BadgeFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsBadgeRoute;
});
;define("ulx-ember/routes/components/elements/checkbox", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/checkbox/features", "ulx-ember/documentation/components/elements/checkbox/meta", "ulx-ember/documentation/components/elements/checkbox/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/checkbox/features",0,"ulx-ember/documentation/components/elements/checkbox/meta",0,"ulx-ember/documentation/components/elements/checkbox/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsCheckboxRoute extends _route.default {
    model() {
      return {
        features: _features.CheckboxFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsCheckboxRoute;
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
;define("ulx-ember/routes/components/elements/radio", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/radio/features", "ulx-ember/documentation/components/elements/radio/meta", "ulx-ember/documentation/components/elements/radio/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/radio/features",0,"ulx-ember/documentation/components/elements/radio/meta",0,"ulx-ember/documentation/components/elements/radio/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsRadioRoute extends _route.default {
    model() {
      return {
        features: _features.RadioFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsRadioRoute;
});
;define("ulx-ember/routes/components/elements/tag", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/tag/features", "ulx-ember/documentation/components/elements/tag/meta", "ulx-ember/documentation/components/elements/tag/builder-schema"], function (_exports, _route, _features, _meta, _builderSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/tag/features",0,"ulx-ember/documentation/components/elements/tag/meta",0,"ulx-ember/documentation/components/elements/tag/builder-schema"eaimeta@70e063a35619d71f
  class ComponentsElementsTagRoute extends _route.default {
    model() {
      return {
        features: _features.TagFeatureItems,
        meta: _meta.default,
        builderSchema: _builderSchema.default
      };
    }
  }
  _exports.default = ComponentsElementsTagRoute;
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
;define("ulx-ember/templates/components/elements/avatar", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Avatar - ULS Ember Documentation"}}
  
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
          @id="components-elements-avatar-theming"
          @title="Theming"
          @subtitle="Theming documentation for Avatar component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview>
          <div class="pd6 fg-text-secondary font-size12">
            Preview not configured yet. Update
            <code>app/documentation/components/elements/avatar/builder-schema.js</code>
            and this template to render the component with the generated props.
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-avatar-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for Avatar component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "UA03u9d2",
    "block": "[[[1,[28,[35,0],[\"Avatar - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-avatar-theming\",\"Theming\",\"Theming documentation for Avatar component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"pd6 fg-text-secondary font-size12\"],[12],[1,\"\\n          Preview not configured yet. Update\\n          \"],[10,\"code\"],[12],[1,\"app/documentation/components/elements/avatar/builder-schema.js\"],[13],[1,\"\\n          and this template to render the component with the generated props.\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-avatar-passthrough\",\"Pass Through\",\"Pass Through props documentation for Avatar component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"code\"]]",
    "moduleName": "ulx-ember/templates/components/elements/avatar.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/badge", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Badge - ULS Ember Documentation"}}
  
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
          @id="components-elements-badge-theming"
          @title="Theming"
          @subtitle="Theming documentation for Badge component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview>
          <div class="pd6 fg-text-secondary font-size12">
            Preview not configured yet. Update
            <code>app/documentation/components/elements/badge/builder-schema.js</code>
            and this template to render the component with the generated props.
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-badge-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for Badge component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "T22JMl+Y",
    "block": "[[[1,[28,[35,0],[\"Badge - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-badge-theming\",\"Theming\",\"Theming documentation for Badge component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"pd6 fg-text-secondary font-size12\"],[12],[1,\"\\n          Preview not configured yet. Update\\n          \"],[10,\"code\"],[12],[1,\"app/documentation/components/elements/badge/builder-schema.js\"],[13],[1,\"\\n          and this template to render the component with the generated props.\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-badge-passthrough\",\"Pass Through\",\"Pass Through props documentation for Badge component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"code\"]]",
    "moduleName": "ulx-ember/templates/components/elements/badge.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/checkbox", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "checkbox - ULS Ember Documentation"}}
  
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
          @id="components-elements-checkbox-theming"
          @title="Theming"
          @subtitle="Theming documentation for checkbox component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview>
          <div class="pd6 fg-text-secondary font-size12">
            Preview not configured yet. Update
            <code>app/documentation/components/elements/checkbox/builder-schema.js</code>
            and this template to render the component with the generated props.
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-checkbox-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for checkbox component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "8GE82LUV",
    "block": "[[[1,[28,[35,0],[\"checkbox - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-checkbox-theming\",\"Theming\",\"Theming documentation for checkbox component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"pd6 fg-text-secondary font-size12\"],[12],[1,\"\\n          Preview not configured yet. Update\\n          \"],[10,\"code\"],[12],[1,\"app/documentation/components/elements/checkbox/builder-schema.js\"],[13],[1,\"\\n          and this template to render the component with the generated props.\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-checkbox-passthrough\",\"Pass Through\",\"Pass Through props documentation for checkbox component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"code\"]]",
    "moduleName": "ulx-ember/templates/components/elements/checkbox.hbs",
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
;define("ulx-ember/templates/components/elements/radio", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "radio - ULS Ember Documentation"}}
  
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
          @id="components-elements-radio-theming"
          @title="Theming"
          @subtitle="Theming documentation for radio component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview>
          <div class="pd6 fg-text-secondary font-size12">
            Preview not configured yet. Update
            <code>app/documentation/components/elements/radio/builder-schema.js</code>
            and this template to render the component with the generated props.
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-radio-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for radio component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "B4KMtk72",
    "block": "[[[1,[28,[35,0],[\"radio - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-radio-theming\",\"Theming\",\"Theming documentation for radio component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"pd6 fg-text-secondary font-size12\"],[12],[1,\"\\n          Preview not configured yet. Update\\n          \"],[10,\"code\"],[12],[1,\"app/documentation/components/elements/radio/builder-schema.js\"],[13],[1,\"\\n          and this template to render the component with the generated props.\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-radio-passthrough\",\"Pass Through\",\"Pass Through props documentation for radio component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"code\"]]",
    "moduleName": "ulx-ember/templates/components/elements/radio.hbs",
    "isStrictMode": false
  });
});
;define("ulx-ember/templates/components/elements/tag", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "tag - ULS Ember Documentation"}}
  
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
          @id="components-elements-tag-theming"
          @title="Theming"
          @subtitle="Theming documentation for tag component."
        >
          <p class="fg-text-secondary">Theming content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{else if this.isBuilderTab}}
      <Common::DocMain::ComponentBuilder @schema={{@model.builderSchema}}>
        <:preview>
          <div class="pd6 fg-text-secondary font-size12">
            Preview not configured yet. Update
            <code>app/documentation/components/elements/tag/builder-schema.js</code>
            and this template to render the component with the generated props.
          </div>
        </:preview>
      </Common::DocMain::ComponentBuilder>
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection
          @id="components-elements-tag-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for tag component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "IE7LSzfW",
    "block": "[[[1,[28,[35,0],[\"tag - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-tag-theming\",\"Theming\",\"Theming documentation for tag component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isBuilderTab\"]],[[[1,\"    \"],[8,[39,7],null,[[\"@schema\"],[[30,1,[\"builderSchema\"]]]],[[\"preview\"],[[[[1,\"\\n        \"],[10,0],[14,0,\"pd6 fg-text-secondary font-size12\"],[12],[1,\"\\n          Preview not configured yet. Update\\n          \"],[10,\"code\"],[12],[1,\"app/documentation/components/elements/tag/builder-schema.js\"],[13],[1,\"\\n          and this template to render the component with the generated props.\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-tag-passthrough\",\"Pass Through\",\"Pass Through props documentation for tag component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\",\"common/doc-main/component-builder\",\":preview\",\"code\"]]",
    "moduleName": "ulx-ember/templates/components/elements/tag.hbs",
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
    <div class="ulx-foundation-page">
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
    "id": "5s0npMjQ",
    "block": "[[[1,[28,[35,0],[\"Colors - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Colors\",\"Palette layers, semantic tokens, and theming workflow.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactColors\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"colors-overview\",\"Colors\",\"Palette layers, semantic tokens, and theming workflow.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Colors component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React Typography component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "WbE4WihN",
    "block": "[[[1,[28,[35,0],[\"Typography - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Typography\",\"Standardized font scale, heading system, and other utilities.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTypography\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"typography-overview\",\"Typography\",\"Standardized font scale, heading system, and other utilities.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Typography component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React BorderUtilities component could not
            be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "seWwnsIZ",
    "block": "[[[1,[28,[35,0],[\"Border Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Border Utilities\",\"Border utility classes for controlling element borders.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactBorderUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-border\",\"Border Utilities\",\"Border utility classes for controlling element borders.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React BorderUtilities component could not\\n          be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React ClearUtilities component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "gMy+sFyV",
    "block": "[[[1,[28,[35,0],[\"Clear Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Clear Utilities\",\"Clear utility classes for controlling element clear behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactClearUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-clear\",\"Clear Utilities\",\"Clear utility classes for controlling element clear behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ClearUtilities component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React ColorUtilities component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "haFXtqQz",
    "block": "[[[1,[28,[35,0],[\"Color Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Color Utilities\",\"Color utility classes for text and background colors.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactColorUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-color\",\"Color Utilities\",\"Color utility classes for text and background colors.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ColorUtilities component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
    "id": "/S0jr+QF",
    "block": "[[[1,[28,[35,0],[\"Cursor Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Cursor Utilities\",\"Cursor utility classes for controlling mouse cursor appearance.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactCursor\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-cursor\",\"Cursor Utilities\",\"Cursor utility classes for controlling mouse cursor appearance.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Cursor component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React Display component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "0M6eJ7lN",
    "block": "[[[1,[28,[35,0],[\"Display Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Display Utilities\",\"Display utility classes for controlling element display type.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactDisplay\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-display\",\"Display Utilities\",\"Display utility classes for controlling element display type.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Display component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React FilterUtilities component could not
            be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "7siFx1EI",
    "block": "[[[1,[28,[35,0],[\"Filter Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Filter Utilities\",\"Filter utility classes for applying CSS filters.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactFilterUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-filter\",\"Filter Utilities\",\"Filter utility classes for applying CSS filters.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React FilterUtilities component could not\\n          be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
    "id": "M2UBsYyl",
    "block": "[[[1,[28,[35,0],[\"Flex Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Flex Utilities\",\"Flexbox utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactFlex\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-flex\",\"Flex Utilities\",\"Flexbox utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Flex component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React FloatUtilities component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "m9tFpzTv",
    "block": "[[[1,[28,[35,0],[\"Float Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Float Utilities\",\"Float utility classes for controlling element float behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactFloatUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-float\",\"Float Utilities\",\"Float utility classes for controlling element float behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React FloatUtilities component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
    "id": "5lOEg3za",
    "block": "[[[1,[28,[35,0],[\"Gap Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Gap Utilities\",\"Gap utility classes for flexbox and grid layouts.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactGap\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-gap\",\"Gap Utilities\",\"Gap utility classes for flexbox and grid layouts.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Gap component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge @component={{@model.ReactGridUtilities}} />
      {{else}}
        <Common::DocMain::FoundationSection
          @id="utilities-grid"
          @title="Grid Utilities"
          @subtitle="Grid utility classes for layout."
        >
          <p class="fg-text-secondary">React GridUtilities component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "FuDQJX50",
    "block": "[[[1,[28,[35,0],[\"Grid Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Grid Utilities\",\"Grid utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactGridUtilities\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-grid\",\"Grid Utilities\",\"Grid utility classes for layout.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React GridUtilities component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React HoverUtilities component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "wbqkDyB5",
    "block": "[[[1,[28,[35,0],[\"Hover Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Hover Utilities\",\"Hover state utility classes for interactive elements.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactHoverUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-hover\",\"Hover Utilities\",\"Hover state utility classes for interactive elements.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React HoverUtilities component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
      {{#if @model.useReactComponents}}
        <UlxReactBridge @component={{@model.ReactUtilities}} />
      {{else}}
        <Common::DocMain::FoundationSection
          @id="utilities-overview"
          @title="Utilities"
          @subtitle="Utility classes for common styling needs."
        >
          <p class="fg-text-secondary">React Utilities components could not be
            loaded. Please ensure the ulx-foundation package is available.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "MMjrx09x",
    "block": "[[[1,[28,[35,0],[\"Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Utilities\",\"Utility classes for spacing, layout, typography, and more.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactUtilities\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-overview\",\"Utilities\",\"Utility classes for common styling needs.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Utilities components could not be\\n          loaded. Please ensure the ulx-foundation package is available.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React LineClampUtilities component could
            not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "kfTALGGb",
    "block": "[[[1,[28,[35,0],[\"Line Clamp Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Line Clamp Utilities\",\"Line clamp utility classes for truncating text to specific line counts.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactLineClampUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-line-clamp\",\"Line Clamp Utilities\",\"Line clamp utility classes for truncating text to specific line counts.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React LineClampUtilities component could\\n          not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React ObjectFitUtilities component could
            not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "40fRWdyO",
    "block": "[[[1,[28,[35,0],[\"Object Fit Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Object Fit Utilities\",\"Object fit utility classes for controlling how replaced elements are sized.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactObjectFitUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-object-fit\",\"Object Fit Utilities\",\"Object fit utility classes for controlling how replaced elements are sized.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ObjectFitUtilities component could\\n          not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React OpacityUtilities component could not
            be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "EXPKA/pe",
    "block": "[[[1,[28,[35,0],[\"Opacity Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Opacity Utilities\",\"Opacity utility classes for controlling element transparency.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactOpacityUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-opacity\",\"Opacity Utilities\",\"Opacity utility classes for controlling element transparency.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React OpacityUtilities component could not\\n          be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React OverflowUtilities component could not
            be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "H1jAywTx",
    "block": "[[[1,[28,[35,0],[\"Overflow Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Overflow Utilities\",\"Overflow utility classes for controlling element overflow behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactOverflowUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-overflow\",\"Overflow Utilities\",\"Overflow utility classes for controlling element overflow behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React OverflowUtilities component could not\\n          be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React PointerEventsUtilities component
            could not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "IcVWsKqe",
    "block": "[[[1,[28,[35,0],[\"Pointer Events Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Pointer Events Utilities\",\"Pointer events utility classes for controlling pointer event handling.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactPointerEventsUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-pointer-events\",\"Pointer Events Utilities\",\"Pointer events utility classes for controlling pointer event handling.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React PointerEventsUtilities component\\n          could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React Position component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "ihYL2B3I",
    "block": "[[[1,[28,[35,0],[\"Position Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Position Utilities\",\"Position utility classes for controlling element positioning.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactPosition\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-position\",\"Position Utilities\",\"Position utility classes for controlling element positioning.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Position component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React ShadowUtilities component could not
            be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "y1junIcE",
    "block": "[[[1,[28,[35,0],[\"Shadow Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Shadow Utilities\",\"Shadow utility classes for controlling element shadows.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactShadowUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-shadow\",\"Shadow Utilities\",\"Shadow utility classes for controlling element shadows.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ShadowUtilities component could not\\n          be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
    "id": "lWxtakMC",
    "block": "[[[1,[28,[35,0],[\"Size Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Size Utilities\",\"Size utility classes for controlling element dimensions.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactSize\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-size\",\"Size Utilities\",\"Size utility classes for controlling element dimensions.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Size component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
    "id": "DrFjlu78",
    "block": "[[[1,[28,[35,0],[\"Space Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Space Utilities\",\"Padding and margin utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\"],[[30,1,[\"ReactSpace\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-space\",\"Space Utilities\",\"Padding and margin utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React Space component could not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React TextAlign component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "QvzodvDo",
    "block": "[[[1,[28,[35,0],[\"Text Align Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Text Align Utilities\",\"Text alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTextAlign\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-text-align\",\"Text Align Utilities\",\"Text alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React TextAlign component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React TextDecoration component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "hR1luSli",
    "block": "[[[1,[28,[35,0],[\"Text Decoration Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Text Decoration Utilities\",\"Text decoration utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTextDecoration\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-text-decoration\",\"Text Decoration Utilities\",\"Text decoration utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React TextDecoration component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React TextTransform component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "n05MgFrY",
    "block": "[[[1,[28,[35,0],[\"Text Transform Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Text Transform Utilities\",\"Text transformation utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactTextTransform\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-text-transform\",\"Text Transform Utilities\",\"Text transformation utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React TextTransform component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React UserSelectUtilities component could
            not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "rKd7omT9",
    "block": "[[[1,[28,[35,0],[\"User Select Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"User Select Utilities\",\"User select utility classes for controlling text selection behavior.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactUserSelectUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-user-select\",\"User Select Utilities\",\"User select utility classes for controlling text selection behavior.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React UserSelectUtilities component could\\n          not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React VerticalAlign component could not be
            loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "7l3DGmqW",
    "block": "[[[1,[28,[35,0],[\"Vertical Align Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Vertical Align Utilities\",\"Vertical alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactVerticalAlign\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-vertical-align\",\"Vertical Align Utilities\",\"Vertical alignment utility classes.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React VerticalAlign component could not be\\n          loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React VisibilityUtilities component could
            not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "wpleaGpU",
    "block": "[[[1,[28,[35,0],[\"Visibility Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Visibility Utilities\",\"Visibility utility classes for controlling element visibility.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactVisibilityUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-visibility\",\"Visibility Utilities\",\"Visibility utility classes for controlling element visibility.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React VisibilityUtilities component could\\n          not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React WhiteSpaceUtilities component could
            not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "JKDUXMO1",
    "block": "[[[1,[28,[35,0],[\"White Space Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"White Space Utilities\",\"White space utility classes for controlling how whitespace is handled.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactWhiteSpaceUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-white-space\",\"White Space Utilities\",\"White space utility classes for controlling how whitespace is handled.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React WhiteSpaceUtilities component could\\n          not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React WordBreakUtilities component could
            not be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "BbExQVa1",
    "block": "[[[1,[28,[35,0],[\"Word Break Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Word Break Utilities\",\"Word break utility classes for controlling text wrapping.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactWordBreakUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-word-break\",\"Word Break Utilities\",\"Word break utility classes for controlling text wrapping.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React WordBreakUtilities component could\\n          not be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    <div class="ulx-foundation-page">
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
          <p class="fg-text-secondary">React ZIndexUtilities component could not
            be loaded.</p>
        </Common::DocMain::FoundationSection>
      {{/if}}
    </div>
  </Common::DocMain::FoundationLayout>
  */
  {
    "id": "D/pIA4Zt",
    "block": "[[[1,[28,[35,0],[\"Z-Index Utilities - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\"],[\"Z-Index Utilities\",\"Z-index utility classes for controlling element stacking order.\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"ulx-foundation-page\"],[12],[1,\"\\n\"],[41,[30,1,[\"useReactComponents\"]],[[[1,\"      \"],[8,[39,4],null,[[\"@component\",\"@props\"],[[30,1,[\"ReactZIndexUtilities\"]],[30,1,[\"reactProps\"]]]],null],[1,\"\\n\"]],[]],[[[1,\"      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"utilities-z-index\",\"Z-Index Utilities\",\"Z-index utility classes for controlling element stacking order.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"React ZIndexUtilities component could not\\n          be loaded.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"@model\"],[\"page-title\",\"common/doc-main/foundation-layout\",\"div\",\"if\",\"ulx-react-bridge\",\"common/doc-main/foundation-section\",\"p\"]]",
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
    {{page-title "Get started with ULS - ULS Ember Documentation"}}
  
  <div class="ulsp-doc-tabpanel fxb fsb mgb10">
    <div class="panel-main mgr5">
      <h2 class="mgt0 mgb4 bold-font">Commands</h2>
      <p class="fg-text-secondary mgb6">Run these commands from the
        <code>uls</code>
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
          @source="npm run create -- demo-page 'PageName[PageName]' --category elements --submodule form"
          @language="bash"
        />
      </section>
  
      <section class="mgb6">
        <Common::DocMain::CodePreview
          @title="Delete demo-page"
          @description="Removes an existing demo page. Use the same --category value as when the page was created."
          @source="npm run destroy demo-page PageName --category collections"
          @language="bash"
        />
      </section>
  
      <section class="mgb6">
        <Common::DocMain::CodePreview
          @title="Create variations"
          @description="Adds a new variation (e.g. Default, Controlled, Disabled) to a component's demo. Pass --component and --variation. The leading -- forwards args to the underlying script."
          @source="npm run add-variation -- --component=PageName --variation=VariationName"
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
    "id": "9QVoD0NK",
    "block": "[[[1,[28,[35,0],[\"Get started with ULS - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"ulsp-doc-tabpanel fxb fsb mgb10\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"panel-main mgr5\"],[12],[1,\"\\n    \"],[10,\"h2\"],[14,0,\"mgt0 mgb4 bold-font\"],[12],[1,\"Commands\"],[13],[1,\"\\n    \"],[10,2],[14,0,\"fg-text-secondary mgb6\"],[12],[1,\"Run these commands from the\\n      \"],[10,\"code\"],[12],[1,\"uls\"],[13],[1,\"\\n      directory. Use these npm scripts to create or remove demo pages and\\n      component variations. Replace\\n      \"],[10,\"strong\"],[12],[1,\"ComponentName\"],[13],[1,\"\\n      and\\n      \"],[10,\"strong\"],[12],[1,\"VariationName\"],[13],[1,\"\\n      with your component and variation names as needed.\"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Create demo-page\",\"Scaffolds a new demo page for a component. Use --category (e.g. collections, elements, modules) and optionally --submodule to match your docs structure.\",\"npm run create -- demo-page 'PageName[PageName]' --category elements --submodule form\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Delete demo-page\",\"Removes an existing demo page. Use the same --category value as when the page was created.\",\"npm run destroy demo-page PageName --category collections\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Create variations\",\"Adds a new variation (e.g. Default, Controlled, Disabled) to a component's demo. Pass --component and --variation. The leading -- forwards args to the underlying script.\",\"npm run add-variation -- --component=PageName --variation=VariationName\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Delete variations\",\"Removes a specific variation from a component. Example for removing the Controlled variation from CodePreviewComponent:\",\"npm run destroy-variation -- --component=ComponentName --variation=VariationName\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"page-title\",\"div\",\"h2\",\"p\",\"code\",\"strong\",\"section\",\"common/doc-main/code-preview\"]]",
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
  // Auto-generated from @ulx-builder comments in ulx-v2 .../less/elements/icon.less
  // Run: node scripts/extract-ulx-builder-tokens.js [path-to-icon.less]
  var _default = _exports.default = {
    'normal size': ['s11', 's12', 's13', 's14', 's16', 's18', 's20', 's22', 's24', 's26', 's28', 's30', 's32'],
    colors: ['primary', 'success', 'warning', 'danger', 'info', 'muted', 'inverted'],
    'shaped icons size': ['xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'xl6', 'xl7'],
    layers: ['primary-layer', 'success-layer', 'warning-layer', 'danger-layer', 'info-layer'],
    spin: ['spin-anim']
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
            require("ulx-ember/app")["default"].create({"name":"ulx-ember","version":"0.0.0+a29c2f1c"});
          }
        
//# sourceMappingURL=ulx-ember.map
