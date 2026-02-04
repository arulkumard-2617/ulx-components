import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { fn } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { htmlSafe } from '@ember/template';
import { DocNavItems } from '../../../constants/docs';

export default class DocSidebarComponent extends Component {
  @service router;

  @tracked activeItem = null;
  contentRefs = {};

  constructor() {
    super(...arguments);
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

    DocNavItems.forEach((item) => {
      if (item.children) {
        const hasMatchingRoute = item.children.some((childItem) => {
          if (childItem.items) {
            return childItem.items.some((subItem) =>
              this.isRouteActive(subItem.to, currentPath),
            );
          }
          return this.isRouteActive(childItem.to, currentPath);
        });

        if (hasMatchingRoute) {
          this.activeItem = item.menuTitle;
        }
      }
    });
  }

  isRouteActive = (routePath, currentPath) => {
    if (!routePath) return false;
    const path = currentPath || this.currentPath || '';
    if (!path) return false;

    // Normalize paths by removing query params, hash, and trailing slashes
    const normalizedPath = path.split('?')[0].split('#')[0].replace(/\/$/, '');
    const normalizedRoute = routePath
      .split('?')[0]
      .split('#')[0]
      .replace(/\/$/, '');

    // Exact match only - prevents sibling routes from matching each other
    // e.g., /foundation/typography should NOT match /foundation/colors
    return normalizedPath === normalizedRoute;
  };

  @action
  toggleItem(menuTitle) {
    // Simply toggle the expansion state - no navigation
    this.activeItem = this.activeItem === menuTitle ? null : menuTitle;
  }

  @action
  handleToggle(event, menuTitle) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleItem(menuTitle);
  }

  @action
  handleToggleClick(menuTitle) {
    this.toggleItem(menuTitle);
  }

  getToggleHandler = (menuTitle) => {
    return () => {
      this.toggleItem(menuTitle);
    };
  };

  setContentRef = modifier((element, [menuTitle]) => {
    if (element) {
      this.contentRefs[menuTitle] = element;
    }
  });

  @action
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

  getContentHeight = (menuTitle) => {
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
  };

  getContentStyle = (menuTitle) => {
    // Access activeItem to make this reactive
    const isExpanded = this.activeItem === menuTitle;
    const height = this.getContentHeight(menuTitle);

    // Smooth accordion transition
    return `max-height: ${height}; overflow: hidden; transition: max-height 0.3s ease-in-out;`;
  };

  getAccordionStyle = (item) => {
    // Access activeItem to make this reactive
    const menuTitle = item.menuTitle;
    return this.getContentStyle(menuTitle);
  };

  get navItems() {
    return DocNavItems;
  }

  // This getter will be called whenever the template renders, ensuring activeItem updates
  get computedActiveItem() {
    const currentPath = this.currentPath || '';

    for (const item of DocNavItems) {
      if (item.children) {
        const hasMatchingRoute = item.children.some((childItem) => {
          if (childItem.items) {
            return childItem.items.some((subItem) =>
              this.isRouteActive(subItem.to, currentPath),
            );
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

  isExpanded = (item) => {
    if (!item) return false;
    return this.activeItem === item.menuTitle;
  };

  hasChildren = (item) => {
    if (!item) return false;
    return item.children && item.children.length > 0;
  };

  getIconSvg(menuTitle) {
    const icons = {
      'Getting Started':
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(42deg);"><defs><linearGradient id="rocketBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="currentColor" stop-opacity="1"></stop><stop offset="100%" stop-color="currentColor" stop-opacity="0.65"></stop></linearGradient><linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="orange"></stop><stop offset="100%" stop-color="red"></stop></linearGradient><filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="black" flood-opacity="0.25"></feDropShadow></filter></defs><path d="M12 2 C9 5, 8 9, 8 13 V17 H16 V13 C16 9, 15 5, 12 2Z" fill="url(#rocketBody)" filter="url(#softShadow)"></path><circle cx="12" cy="9" r="1.5" fill="white" opacity="0.8"></circle><path d="M8 14 L5 16 L8 16 Z" fill="currentColor" opacity="0.8"></path><path d="M16 14 L19 16 L16 16 Z" fill="currentColor" opacity="0.8"></path><path d="M12 22 C10.5 20.5, 10 19, 12 18 C14 19, 13.5 20.5, 12 22Z" fill="url(#flameGrad)"></path></svg>',
      Foundation:
        '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 13l9 5 9-5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
      Utilities:
        '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="6" r="2" stroke="currentColor" stroke-width="1.5"/><line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="15" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/><line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="11" cy="18" r="2" stroke="currentColor" stroke-width="1.5"/></svg>',
      Elements:
        '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>',
      Collections:
        '<svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="16" height="4" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="10" width="16" height="4" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="15" width="16" height="4" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>',
    };
    const svg = icons[menuTitle];
    return svg ? htmlSafe(svg) : null;
  }

  hasCustomIcon(menuTitle) {
    return [
      'Getting Started',
      'Foundation',
      'Utilities',
      'Elements',
      'Collections',
    ].includes(menuTitle);
  }

  isItemActive = (item, currentPath) => {
    if (!item || !item.to) return false;
    return this.isRouteActive(item.to, currentPath);
  };

  getFirstChildRoute = (item) => {
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
  };

  <template>
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
  </template>
}
