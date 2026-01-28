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
;define("ulx-ember/components/Demo/Icon/Basic", ["exports", "@glimmer/component", "uls-components", "@ember/component", "@ember/template-factory"], function (_exports, _component, _ulsComponents, _component2, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _BasicIconDemo;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"uls-components",0,"@ember/component",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  class BasicIconDemo extends _component.default {}
  _exports.default = BasicIconDemo;
  _BasicIconDemo = BasicIconDemo;
  (0, _component2.setComponentTemplate)((0, _templateFactory.createTemplateFactory)(
  /*
    <div class="fxb fvc gp4">
    <UlsIcon class="fg-primary" />
  </div>
  */
  {
    "id": "iJyJqFYG",
    "block": "[[[10,0],[14,0,\"fxb fvc gp4\"],[12],[1,\"\\n  \"],[8,[32,0],[[24,0,\"fg-primary\"]],null,null],[1,\"\\n\"],[13]],[],[]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/Demo/Icon/Basic.js",
    "scope": () => [_ulsComponents.UlsIcon],
    "isStrictMode": true
  }), _BasicIconDemo);
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
    "id": "AAgtDOyw",
    "block": "[[[41,false,[[[1,[30,0,[\"computedActiveItem\"]]]],[]],null],[1,\"\\n\"],[10,\"aside\"],[14,0,\"ulsp-sidebar overflow-x-hidden overflow-y-auto mgb8 mgr10\"],[12],[1,\"\\n  \"],[10,\"nav\"],[14,0,\"sidebar-nav fxgrow\"],[12],[1,\"\\n    \"],[10,\"ol\"],[14,0,\"s-nav-list mgt2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"navItems\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[14,0,\"s-nav-item mgb4\"],[12],[1,\"\\n\"],[41,[30,1,[\"to\"]],[[[41,[28,[30,0,[\"hasChildren\"]],[[30,1]],null],[[[1,\"            \"],[10,0],[14,0,\"fxb fvc gp2 w-100p\"],[12],[1,\"\\n              \"],[11,\"button\"],[16,0,[29,[\"s-nav-link fxb fvc gp2 text-left \",[52,[28,[30,0,[\"isItemActive\"]],[[30,1],[30,0,[\"currentPath\"]]],null],\"fg-primary\",\"\"]]]],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"toggleItem\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n                  \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                  \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[11,\"button\"],[24,0,\"s-nav-link-icon mgl-auto pdl1\"],[16,\"aria-label\",[29,[\"Toggle \",[30,1,[\"menuTitle\"]],\" menu\"]]],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"handleToggle\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                \"],[10,\"i\"],[15,0,[29,[\"menu-toggle-icon pi pi-angle-down transition \",[52,[28,[30,0,[\"isExpanded\"]],[[30,1]],null],\"rotate-180\",\"\"]]]],[12],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],[[[1,\"              \"],[8,[32,2],[[16,0,[29,[\"s-nav-link fxb fvc fhs gp2 w-100p \",[52,[28,[30,0,[\"isItemActive\"]],[[30,1],[30,0,[\"currentPath\"]]],null],\"fg-primary\",\"fg-text\"]]]]],[[\"@route\"],[[30,1,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,1,[\"icon\"]],[[[1,\"                  \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n                    \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null],[1,\"                \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                  \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"]],[]]]]],[1,\"\\n\"]],[]]]],[]],[[[1,\"           \"],[11,\"button\"],[24,0,\"s-nav-link fxb fvc gp2 w-100p\"],[24,4,\"button\"],[4,[32,0],[\"click\",[28,[32,1],[[30,0,[\"toggleItem\"]],[30,1,[\"menuTitle\"]]],null]],null],[12],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-icon w32 h32 fxb fvc fhc bd rds2\"],[12],[1,\"\\n                  \"],[10,\"i\"],[15,0,[30,1,[\"icon\"]]],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-text\"],[12],[1,\"\\n                  \"],[10,1],[14,0,\"bold-font\"],[12],[1,[30,1,[\"menuTitle\"]]],[13],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,1],[14,0,\"s-nav-link-icon mgl-auto\"],[12],[1,\"\\n                  \"],[10,\"i\"],[15,0,[29,[\"menu-toggle-icon pi pi-angle-down transition \",[52,[28,[30,0,[\"isExpanded\"]],[[30,1]],null],\"rotate-180\",\"\"]]]],[12],[13],[1,\"\\n                \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]]],[1,\"          \\n\"],[41,[28,[30,0,[\"hasChildren\"]],[[30,1]],null],[[[1,\"            \"],[11,0],[24,0,\"accordion-content\"],[16,5,[28,[30,0,[\"getAccordionStyle\"]],[[30,1]],null]],[4,[30,0,[\"setContentRef\"]],[[30,1,[\"menuTitle\"]]],null],[12],[1,\"\\n              \"],[10,\"ol\"],[14,0,\"s-nav-list mgt1 pdl2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,1,[\"children\"]]],null]],null],null,[[[41,[30,2,[\"category\"]],[[[1,\"                    \"],[10,\"li\"],[14,0,\"s-nav-item pdb2 pdt2\"],[12],[1,\"\\n                      \"],[10,0],[14,0,\"s-nav-category medium-font fg-text-secondary\"],[12],[1,[30,2,[\"category\"]]],[13],[1,\"\\n\"],[41,[30,2,[\"items\"]],[[[1,\"                        \"],[10,\"ol\"],[14,0,\"s-nav-list mgt2\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,2,[\"items\"]]],null]],null],null,[[[1,\"                            \"],[10,\"li\"],[14,0,\"s-nav-item\"],[12],[1,\"\\n                              \"],[8,[32,2],[[24,0,\"bd-l pdl5 pdt2 pdb2 font-size14 text-left w-100p fg-text block\"]],[[\"@route\",\"@activeClass\"],[[30,3,[\"route\"]],\"bd-primary fg-primary\"]],[[\"default\"],[[[[1,\"\\n                                \"],[1,[30,3,[\"menuItem\"]]],[1,\"\\n                              \"]],[]]]]],[1,\"\\n                            \"],[13],[1,\"\\n\"]],[3]],null],[1,\"                        \"],[13],[1,\"\\n\"]],[]],null],[1,\"                    \"],[13],[1,\"\\n\"]],[]],[[[1,\"                    \"],[10,\"li\"],[14,0,\"s-nav-item\"],[12],[1,\"\\n                      \"],[8,[32,2],[[24,0,\"bd-l pdl5 pdb2 pdt2 font-size14 text-left w-100p block fg-text\"]],[[\"@route\",\"@activeClass\"],[[30,2,[\"route\"]],\"bd-primary fg-primary\"]],[[\"default\"],[[[[1,\"\\n                        \"],[1,[30,2,[\"menuItem\"]]],[1,\"\\n                      \"]],[]]]]],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[]]]],[2]],null],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[13]],[\"item\",\"childItem\",\"subItem\"],[\"if\",\"each\",\"-track-array\"]]",
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
    "id": "ECpZW1Lj",
    "block": "[[[41,[30,0,[\"rows\",\"length\"]],[[[1,\"  \"],[10,0],[14,0,\"uls-datatable s-size\"],[14,5,\"width: 850px;\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"datatable-wrapper\"],[12],[1,\"\\n      \"],[10,\"table\"],[14,0,\"datatable-table\"],[14,5,\"table-layout: fixed;\"],[12],[1,\"\\n        \"],[10,\"thead\"],[14,0,\"datatable-header\"],[12],[1,\"\\n          \"],[10,\"tr\"],[14,0,\"datatable-header-row\"],[12],[1,\"\\n            \"],[10,\"th\"],[14,0,\"datatable-column-header-cell\"],[12],[1,[30,0,[\"columnLabels\",\"0\"]]],[13],[1,\"\\n            \"],[10,\"th\"],[14,0,\"datatable-column-header-cell\"],[12],[1,[30,0,[\"columnLabels\",\"1\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tbody\"],[14,0,\"datatable-tbody\"],[12],[1,\"\\n\"],[42,[28,[31,2],[[28,[31,2],[[30,0,[\"rows\"]]],null]],null],null,[[[1,\"            \"],[10,\"tr\"],[14,0,\"datatable-body-row\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,0,\"datatable-column-body-cell\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"fxb fvc gp2\"],[12],[1,\"\\n\"],[41,[30,1,[\"color\"]],[[[1,\"                    \"],[10,0],[14,0,\"rds-circle bd w20 h20\"],[15,5,[28,[30,0,[\"getStyleString\"]],[[30,1,[\"color\"]]],null]],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"                  \"],[10,1],[14,0,\"bold-font fg-primary font-size16\"],[12],[1,[28,[30,0,[\"formatClassName\"]],[[30,1,[\"className\"]]],null]],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"datatable-column-body-cell\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"font-size16\"],[12],[1,[30,1,[\"property\"]]],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[1]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"row\"],[\"if\",\"each\",\"-track-array\"]]",
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
    "id": "uhYnALUB",
    "block": "[[[1,\"    \"],[11,0],[24,0,\"code-preview-container\"],[17,1],[12],[1,\"\\n\"],[41,[30,2],[[[1,\"        \"],[10,\"h5\"],[14,0,\"mgb2 font-medium\"],[12],[1,[30,2]],[13],[1,\"\\n\"]],[]],null],[41,[30,3],[[[1,\"        \"],[10,0],[14,0,\"text-small fg-text-secondary mgb4\"],[12],[1,\"\\n          \"],[1,[30,3]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[48,[30,5]],[[[41,[30,4],[[[1,\"          \"],[10,0],[14,0,\"demo-and-code\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"demo\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"code-preview-container\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"demo bg-default bd pd8 mgb2 rds3\"],[12],[1,\"\\n                  \"],[18,5,null],[1,\"\\n                \"],[13],[1,\"\\n\"],[41,[30,0,[\"displayCode\"]],[[[1,\"                  \"],[10,0],[14,0,\"code-block asdad\"],[12],[1,\"\\n\"],[41,[30,0,[\"expanded\"]],[[[1,\"                      \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],\"javascript\"]],null],[1,\"\\n\"]],[]],[[[1,\"                        \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n\"]],[]]],[1,\"                    \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n                      \"],[11,\"button\"],[16,0,[29,[\"expand-btn \",[52,[30,0,[\"expanded\"]],\"is-expanded\"]]]],[16,\"aria-label\",[52,[30,0,[\"expanded\"]],\"Collapse code\",\"Expand code\"]],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"toggleExpanded\"]]],null],[12],[1,\"\\n                        \"],[10,\"svg\"],[14,0,\"fit-width-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n  \"],[3,\" left bar \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"bar left\"],[14,\"d\",\"M4 4v16\"],[12],[13],[1,\"\\n\\n  \"],[3,\" right bar \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"bar right\"],[14,\"d\",\"M20 4v16\"],[12],[13],[1,\"\\n\\n  \"],[3,\" left arrow \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"arrow left\"],[14,\"d\",\"M10 12H6m0 0l2-2m-2 2l2 2\"],[12],[13],[1,\"\\n\\n  \"],[3,\" right arrow \"],[1,\"\\n  \"],[10,\"path\"],[14,0,\"arrow right\"],[14,\"d\",\"M14 12h4m0 0l-2-2m2 2l-2 2\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n                      \"],[13],[1,\"\\n                      \"],[11,\"button\"],[16,0,[29,[\"copy-btn \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n                        \"],[10,\"svg\"],[14,0,\"copy-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n                          \"],[3,\" Copy icon \"],[1,\"\\n                          \"],[10,\"g\"],[14,0,\"icon-copy\"],[12],[1,\"\\n                            \"],[10,\"rect\"],[14,\"x\",\"6\"],[14,\"y\",\"2\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[12],[13],[1,\"\\n                            \"],[10,\"rect\"],[14,\"x\",\"1\"],[14,\"y\",\"8\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"#272822\"],[12],[13],[1,\"\\n                            \\n                          \"],[13],[1,\"\\n\\n                          \"],[3,\" Check icon \"],[1,\"\\n                          \"],[10,\"path\"],[14,0,\"icon-check\"],[14,\"d\",\"M5 13l4 4L19 7\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"none\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[12],[13],[1,\"\\n                        \"],[13],[1,\"\\n                      \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"displayCode\"]],[[[1,\"            \"],[10,0],[14,0,\"code-block\"],[12],[1,\"\\n              \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n              \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n                \"],[11,\"button\"],[16,0,[29,[\"copy-btn \",[52,[30,0,[\"copied\"]],\"is-copied\"]]]],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n                  \"],[10,\"svg\"],[14,0,\"copy-icon\"],[14,\"width\",\"18\"],[14,\"height\",\"18\"],[14,\"viewBox\",\"0 0 24 24\"],[14,\"fill\",\"none\"],[14,\"aria-hidden\",\"true\"],[12],[1,\"\\n                    \"],[3,\" Copy icon \"],[1,\"\\n                    \"],[10,\"g\"],[14,0,\"icon-copy\"],[12],[1,\"\\n                      \"],[10,\"rect\"],[14,\"x\",\"6\"],[14,\"y\",\"2\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[12],[13],[1,\"\\n                      \"],[10,\"rect\"],[14,\"x\",\"1\"],[14,\"y\",\"8\"],[14,\"width\",\"13\"],[14,\"height\",\"13\"],[14,\"rx\",\"2\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"#272822\"],[12],[13],[1,\"\\n                      \\n                    \"],[13],[1,\"\\n\\n                    \"],[3,\" Check icon \"],[1,\"\\n                    \"],[10,\"path\"],[14,0,\"icon-check\"],[14,\"d\",\"M5 13l4 4L19 7\"],[14,\"stroke\",\"currentColor\"],[14,\"stroke-width\",\"2\"],[14,\"fill\",\"none\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[12],[13],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null]],[]]]],[]],[[[41,[30,0,[\"displayCode\"]],[[[1,\"          \"],[10,0],[14,0,\"code-block asdad\"],[12],[1,\"\\n            \"],[8,[32,0],null,[[\"@code\",\"@language\"],[[30,0,[\"displayCode\"]],[30,0,[\"effectiveLanguage\"]]]],null],[1,\"\\n            \"],[10,0],[14,0,\"code-actions fxb gp4 pdy1 pdx3\"],[12],[1,\"\\n              \"],[11,\"button\"],[24,\"aria-label\",\"Copy code\"],[24,4,\"button\"],[4,[32,1],[\"click\",[30,0,[\"copyCode\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"copied\"]],[[[1,\"                  copied\\n\"]],[]],[[[1,\"                  copy\\n\"]],[]]],[1,\"              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null]],[]]],[1,\"    \"],[13]],[\"&attrs\",\"@title\",\"@description\",\"@hasDemo\",\"&default\"],[\"if\",\"has-block\",\"yield\"]]",
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
    "id": "GZ3/CgkA",
    "block": "[[[10,0],[14,0,\"fxb fcol gp8 w-100p\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"fxcol gp2\"],[12],[1,\"\\n      \"],[10,\"h5\"],[14,0,\"mgt0 mgb2 bold-font fg-primary\"],[12],[1,[30,2,[\"title\"]]],[13],[1,\"\\n      \"],[10,0],[14,0,\"uls-grid col-4 gp5\"],[12],[1,\"\\n\"],[42,[28,[31,1],[[28,[31,1],[[30,2,[\"colors\"]]],null]],null],null,[[[1,\"          \"],[10,\"article\"],[14,0,\"uls-foundation-card pd3 rds2 bd flex-column md-w-1-3 text-center\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"rds2 mgb2 bd mg-auto\"],[15,5,[28,[30,0,[\"getStyleString\"]],[[30,3,[\"cssVar\"]]],null]],[12],[13],[1,\"\\n            \"],[10,2],[14,0,\"mgb1 fg-text-secondary\"],[12],[10,\"code\"],[12],[1,[30,3,[\"token\"]]],[13],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[3]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13]],[\"@paletteGroups\",\"group\",\"color\"],[\"each\",\"-track-array\"]]",
    "moduleName": "/Users/bhuvanesh-12328/Documents/Backstage/backstage_UI/ulx-components/ulx/src/demo/ulx-ember/ulx-ember/components/common/doc-main/color-palette.js",
    "isStrictMode": true
  }), _ColorPaletteComponent);
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
    "id": "43nMk5bS",
    "block": "[[[10,\"section\"],[15,1,[30,1]],[14,0,\"uls-foundation-section mgb10\"],[12],[1,\"\\n  \"],[10,\"h3\"],[14,0,\"bold-font mgt0 mgb2\"],[12],[1,[30,2]],[13],[1,\"\\n  \"],[10,\"header\"],[14,0,\"mgb2\"],[12],[1,\"\\n\"],[41,[30,3],[[[1,\"      \"],[10,2],[14,0,\"uls-foundation-section__subtitle mgb5 font-regular fg-text-secondary mgr0\"],[12],[1,\"\\n        \"],[1,[30,3]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"uls-foundation-section__content w-100p\"],[12],[1,\"\\n    \"],[18,4,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@id\",\"@title\",\"@subtitle\",\"&default\"],[\"if\",\"yield\"]]",
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
;define("ulx-ember/components/elements/uls-icon/index", ["exports", "uls-components/components/elements/uls-icon/index"], function (_exports, _index) {
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
  0; //eaimeta@70e063a35619d71f0,"uls-components/components/elements/uls-icon/index"eaimeta@70e063a35619d71f
});
;define("ulx-ember/components/uls-icon", ["exports", "uls-components/components/uls-icon"], function (_exports, _ulsIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ulsIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"uls-components/components/uls-icon"eaimeta@70e063a35619d71f
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
    class="ulsp-topbar h64 pd1 uls-grid col-1 w-100p
      {{if this.isSticky 'sticky' ''}}"
    {{this.setupScrollObserver}}
  >
    <header class="uls-container-fluid fxb fvc fsb">
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
          class="uls-button secondary outlined m-size fxb fvc gp1"
          aria-haspopup="dialog"
          aria-expanded="false"
        >
          <span class="fg-text-secondary">Search docs</span>
          <span class="t-key-hint mgl2">⌘ K</span>
        </button>
  
        {{! Download Button }}
        <button
          type="button"
          class="uls-button primary fxb fvc gp1 m-size"
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
          class="pd2 uls-button secondary outlined icon-only s-size"
          data-pc-name="button"
          data-pc-section="root"
          {{on "click" this.toggleDarkMode}}
        >
          <i class="uls-icons s18" aria-hidden="true">{{if
              this.isDarkMode
              "☀️"
              "🌙"
            }}</i>
          <span class="uls-button-label" data-pc-section="label">&nbsp;</span>
          <span
            role="presentation"
            aria-hidden="true"
            class="uls-button-ink"
            data-pc-name="ripple"
            data-pc-section="root"
            style="height: 40px; width: 40px;"
          ></span>
        </button>
      </div>
    </header>
  </div>
  */
  {
    "id": "1DwiwG/w",
    "block": "[[[11,0],[16,0,[29,[\"ulsp-topbar h64 pd1 uls-grid col-1 w-100p\\n    \",[52,[30,0,[\"isSticky\"]],\"sticky\",\"\"]]]],[4,[30,0,[\"setupScrollObserver\"]],null,null],[12],[1,\"\\n  \"],[10,\"header\"],[14,0,\"uls-container-fluid fxb fvc fsb\"],[12],[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"t-left\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"t-logo\"],[12],[1,\"\\n        \"],[10,\"h3\"],[14,0,\"bold-font\"],[12],[1,\"ULX\\n          \"],[10,1],[14,0,\"fg-primary\"],[12],[1,\"EMBER\"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"t-right fxb fvc gp2\"],[12],[1,\"\\n\"],[1,\"      \"],[10,\"button\"],[14,0,\"uls-button secondary outlined m-size fxb fvc gp1\"],[14,\"aria-haspopup\",\"dialog\"],[14,\"aria-expanded\",\"false\"],[14,4,\"button\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"fg-text-secondary\"],[12],[1,\"Search docs\"],[13],[1,\"\\n        \"],[10,1],[14,0,\"t-key-hint mgl2\"],[12],[1,\"⌘ K\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,\"button\"],[14,0,\"uls-button primary fxb fvc gp1 m-size\"],[14,\"aria-haspopup\",\"menu\"],[14,\"aria-controls\",\"doc-download-menu\"],[14,4,\"button\"],[12],[1,\"\\n        \"],[10,1],[12],[1,\"Download ZIP\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"\\n      \"],[11,\"button\"],[16,\"aria-label\",[52,[30,0,[\"isDarkMode\"]],\"Switch to light theme\",\"Switch to dark theme\"]],[24,0,\"pd2 uls-button secondary outlined icon-only s-size\"],[24,\"data-pc-name\",\"button\"],[24,\"data-pc-section\",\"root\"],[24,4,\"button\"],[4,[32,0],[\"click\",[30,0,[\"toggleDarkMode\"]]],null],[12],[1,\"\\n        \"],[10,\"i\"],[14,0,\"uls-icons s18\"],[14,\"aria-hidden\",\"true\"],[12],[1,[52,[30,0,[\"isDarkMode\"]],\"☀️\",\"🌙\"]],[13],[1,\"\\n        \"],[10,1],[14,0,\"uls-button-label\"],[14,\"data-pc-section\",\"label\"],[12],[1,\" \"],[13],[1,\"\\n        \"],[10,1],[14,\"role\",\"presentation\"],[14,\"aria-hidden\",\"true\"],[14,0,\"uls-button-ink\"],[14,\"data-pc-name\",\"ripple\"],[14,\"data-pc-section\",\"root\"],[14,5,\"height: 40px; width: 40px;\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"if\"]]",
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
        menuItem: 'Checkbox',
        to: '/collections/accordion'
      }, {
        menuItem: 'Dropdown',
        to: '/collections/card'
      }]
    }, {
      category: 'Icons',
      items: [{
        menuItem: 'Icon',
        to: '/components/elements/icon',
        route: 'components.elements.icon'
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
  }];
  function IconFeatures() {
    return IconFeatureItems;
  }
});
;define("ulx-ember/documentation/components/elements/icon/imports", ["exports", "ulx-ember/components/Demo/Icon/Basic", "ulx-ember/documentation/components/elements/icon/snippets/Import.gjs", "ulx-ember/documentation/components/elements/icon/snippets/Basic.gjs"], function (_exports, _Basic, _Import, _Basic2) {
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
  0; //eaimeta@70e063a35619d71f0,"ulx-ember/components/Demo/Icon/Basic",0,"ulx-ember/documentation/components/elements/icon/snippets/Import.gjs",0,"ulx-ember/documentation/components/elements/icon/snippets/Basic.gjs"eaimeta@70e063a35619d71f
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
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough'
    }],
    // Import message for the component
    importMsg: "import { Icon } from 'uls-components'",
    // Accessibility information
    accessibility: {
      description: "Icon component description for accessibility.",
      example: "<Icon />"
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
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BasicIconDemo extends Component {
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
;define("ulx-ember/documentation/components/elements/icon/snippets/Import.gjs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = _exports.default = `
import { Icon } from 'uls-components';

`;
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
    this.route('walkthrough', {
      path: '/walkthrough'
    });
    this.route('foundation', {
      path: '/foundation'
    }, function () {
      this.route('typography', {
        path: '/typography'
      });
      this.route('colors', {
        path: '/colors'
      });
    });
    this.route('components', {
      path: '/components'
    }, function () {
      this.route('collections', {
        path: '/collections'
      }, function () {});
      this.route('elements', {
        path: '/elements'
      }, function () {
        this.route('icon', {
          path: '/icon'
        });
      });
    });
    this.route('utilities', {
      path: '/utilities'
    }, function () {
      this.route('index', {
        path: '/'
      });
      this.route('space', {
        path: '/space'
      });
      this.route('gap', {
        path: '/gap'
      });
      this.route('grid', {
        path: '/grid'
      });
      this.route('flex', {
        path: '/flex'
      });
      this.route('display', {
        path: '/display'
      });
      this.route('position', {
        path: '/position'
      });
      this.route('size', {
        path: '/size'
      });
      this.route('cursor', {
        path: '/cursor'
      });
      this.route('text-align', {
        path: '/text-align'
      });
      this.route('text-transform', {
        path: '/text-transform'
      });
      this.route('text-decoration', {
        path: '/text-decoration'
      });
      this.route('vertical-align', {
        path: '/vertical-align'
      });
      this.route('float', {
        path: '/float'
      });
      this.route('clear', {
        path: '/clear'
      });
      this.route('word-break', {
        path: '/word-break'
      });
      this.route('visibility', {
        path: '/visibility'
      });
      this.route('overflow', {
        path: '/overflow'
      });
      this.route('color', {
        path: '/color'
      });
      this.route('hover', {
        path: '/hover'
      });
      this.route('line-clamp', {
        path: '/line-clamp'
      });
      this.route('border', {
        path: '/border'
      });
      this.route('shadow', {
        path: '/shadow'
      });
      this.route('z-index', {
        path: '/z-index'
      });
      this.route('opacity', {
        path: '/opacity'
      });
      this.route('filter', {
        path: '/filter'
      });
      this.route('object-fit', {
        path: '/object-fit'
      });
      this.route('user-select', {
        path: '/user-select'
      });
      this.route('pointer-events', {
        path: '/pointer-events'
      });
      this.route('white-space', {
        path: '/white-space'
      });
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
;define("ulx-ember/routes/components/elements/icon", ["exports", "@ember/routing/route", "ulx-ember/documentation/components/elements/icon/features", "ulx-ember/documentation/components/elements/icon/meta"], function (_exports, _route, _features, _meta) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ulx-ember/documentation/components/elements/icon/features",0,"ulx-ember/documentation/components/elements/icon/meta"eaimeta@70e063a35619d71f
  class ComponentsElementsIconRoute extends _route.default {
    model() {
      return {
        features: _features.IconFeatureItems,
        meta: _meta.default
      };
    }
  }
  _exports.default = ComponentsElementsIconRoute;
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
  
  <div class="uls-container-fluid pdt6 fxb">
    <Common::DocLayout::DocSidebar />
    <div class="ulsp-app-routes-container fxauto">
  {{outlet}}
    </div>
  </div>
  
  
  */
  {
    "id": "A1GY2ArI",
    "block": "[[[1,[28,[35,0],[\"ULX Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[10,0],[14,0,\"uls-container-fluid pdt6 fxb\"],[12],[1,\"\\n  \"],[8,[39,3],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"ulsp-app-routes-container fxauto\"],[12],[1,\"\\n\"],[46,[28,[37,5],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[],[\"page-title\",\"ulx-docs-header\",\"div\",\"common/doc-layout/doc-sidebar\",\"component\",\"-outlet\"]]",
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
    {{else if this.isPassthroughTab}}
      <div class="doc-section">
        <Common::DocMain::FoundationSection 
          @id="components-elements-icon-passthrough"
          @title="Pass Through"
          @subtitle="Pass Through props documentation for Icon component."
        >
          <p class="fg-text-secondary">Pass Through content goes here.</p>
        </Common::DocMain::FoundationSection>
      </div>
    {{/if}}
  </Common::DocMain::ComponentLayout>
  
  */
  {
    "id": "8rl9LkwQ",
    "block": "[[[1,[28,[35,0],[\"Icon - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\",\"@description\",\"@tabs\",\"@activeTab\",\"@onTabChange\"],[[30,1,[\"meta\",\"header\"]],[30,1,[\"meta\",\"subHeader\"]],[30,0,[\"tabs\"]],[30,0,[\"activeTab\"]],[30,0,[\"onTabChange\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"isFeaturesTab\"]],[[[1,\"    \"],[8,[39,3],null,[[\"@features\"],[[30,1,[\"features\"]]]],null],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isThemingTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-icon-theming\",\"Theming\",\"Theming documentation for Icon component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Theming content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"isPassthroughTab\"]],[[[1,\"    \"],[10,0],[14,0,\"doc-section\"],[12],[1,\"\\n      \"],[8,[39,5],null,[[\"@id\",\"@title\",\"@subtitle\"],[\"components-elements-icon-passthrough\",\"Pass Through\",\"Pass Through props documentation for Icon component.\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,2],[14,0,\"fg-text-secondary\"],[12],[1,\"Pass Through content goes here.\"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],null]],[]]]],[]]]],[]]]]],[1,\"\\n\"]],[\"@model\"],[\"page-title\",\"common/doc-main/component-layout\",\"if\",\"common/doc-main/doc-panel\",\"div\",\"common/doc-main/foundation-section\",\"p\"]]",
    "moduleName": "ulx-ember/templates/components/elements/icon.hbs",
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
          @source="npm run create demo-page ComponentName --category collections --submodule menu"
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
    "id": "MhlRxbAT",
    "block": "[[[1,[28,[35,0],[\"Get started with ULS - ULS Ember Documentation\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"ulsp-doc-tabpanel fxb fsb mgb10\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"panel-main mgr5\"],[12],[1,\"\\n    \"],[10,\"h2\"],[14,0,\"mgt0 mgb4 bold-font\"],[12],[1,\"Commands\"],[13],[1,\"\\n    \"],[10,2],[14,0,\"fg-text-secondary mgb6\"],[12],[1,\"Run these commands from the\\n      \"],[10,\"code\"],[12],[1,\"uls\"],[13],[1,\"\\n      directory. Use these npm scripts to create or remove demo pages and\\n      component variations. Replace\\n      \"],[10,\"strong\"],[12],[1,\"ComponentName\"],[13],[1,\"\\n      and\\n      \"],[10,\"strong\"],[12],[1,\"VariationName\"],[13],[1,\"\\n      with your component and variation names as needed.\"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Create demo-page\",\"Scaffolds a new demo page for a component. Use --category (e.g. collections, elements, modules) and optionally --submodule to match your docs structure.\",\"npm run create demo-page ComponentName --category collections --submodule menu\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Delete demo-page\",\"Removes an existing demo page. Use the same --category value as when the page was created.\",\"npm run destroy demo-page ComponentName --category collections\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Create variations\",\"Adds a new variation (e.g. Default, Controlled, Disabled) to a component's demo. Pass --component and --variation. The leading -- forwards args to the underlying script.\",\"npm run add-variation -- --component=ComponentName --variation=VariationName\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"section\"],[14,0,\"mgb6\"],[12],[1,\"\\n      \"],[8,[39,7],null,[[\"@title\",\"@description\",\"@source\",\"@language\"],[\"Delete variations\",\"Removes a specific variation from a component. Example for removing the Controlled variation from CodePreviewComponent:\",\"npm run destroy-variation -- --component=ComponentName --variation=VariationName\",\"bash\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],[\"page-title\",\"div\",\"h2\",\"p\",\"code\",\"strong\",\"section\",\"common/doc-main/code-preview\"]]",
    "moduleName": "ulx-ember/templates/walkthrough.hbs",
    "isStrictMode": false
  });
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
            require("ulx-ember/app")["default"].create({"name":"ulx-ember","version":"0.0.0+7e24d557"});
          }
        
//# sourceMappingURL=ulx-ember.map
