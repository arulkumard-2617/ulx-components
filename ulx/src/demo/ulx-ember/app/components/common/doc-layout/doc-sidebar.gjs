import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { fn } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { DocNavItems } from '../../../constants/docs';
import { t, UlxIconInput } from 'ulx-components';

export default class DocSidebarComponent extends Component {
  @service router;

  @tracked activeItem = null;
  @tracked searchQuery = '';
  contentRefs = {};

  syncActiveItemFromRoute = modifier(() => {
    const rafId = requestAnimationFrame(() => {
      this.setInitialActiveItem();
    });
    return () => cancelAnimationFrame(rafId);
  });

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
    // e.g., /utilities/color should NOT match /utilities/display
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

  childMatches(child, match) {
    if (child.category) {
      if (match(child.category)) return true;
      return child.items?.some((sub) => match(sub.menuItem));
    }
    return match(child.menuItem);
  }

  get filteredNavItems() {
    const q = (this.searchQuery ?? '').trim().toLowerCase();
    if (!q) return this.navItems;
    const match = (text) => text && String(text).toLowerCase().includes(q);
    return this.navItems
      .filter((item) => {
        if (match(item.menuTitle)) return true;
        if (!item.children?.length) return false;
        return item.children.some((child) => this.childMatches(child, match));
      })
      .map((item) => {
        if (!item.children?.length) return item;
        const filteredChildren = item.children
          .filter((child) => this.childMatches(child, match))
          .map((child) => {
            if (child.category && child.items) {
              const filteredItems = child.items.filter((sub) =>
                match(sub.menuItem),
              );
              return {
                ...child,
                items: filteredItems.length ? filteredItems : child.items,
              };
            }
            return child;
          });
        return { ...item, children: filteredChildren };
      });
  }

  @action
  handleSearchInput(event) {
    this.searchQuery = event.target?.value ?? '';
  }

  <template>
    {{! Force evaluation of computedActiveItem to update activeItem }}
    {{#if false}}{{this.computedActiveItem}}{{/if}}
    <aside
      class="ulsp-sidebar overflow-x-hidden overflow-y-auto bd-r"
      {{this.syncActiveItemFromRoute}}
    >
      <div class="mgb6">
        <UlxIconInput
          @value={{this.searchQuery}}
          @onInput={{this.handleSearchInput}}
          @placeholder={{t "lbl.search"}}
          @iconName="search-icon"
          @iconType="font"
          @iconClass="bs-icons1"
          @iconPosition="left"
          @iconSize="s18"
          @size="m-size"
          @fieldClass="w-100p"
          aria-label={{t "lbl.search"}}
        />
      </div>
      <nav class="sidebar-nav fxgrow">
        <ol class="s-nav-list">
          {{#each this.filteredNavItems as |item|}}
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
                        <i class={{item.icon}}></i>
                      </span>
                      <span class="s-nav-link-text">
                        <span class="bold-font">{{item.menuTitle}}</span>
                      </span>
                    </button>
                    <button
                      class="s-nav-link-icon mgl-auto pdl1"
                      {{on "click" (fn this.handleToggle item.menuTitle)}}
                      aria-label={{t
                        "msg.toggle.menu"
                        menuTitle=item.menuTitle
                      }}
                      type="button"
                    >
                      <i
                        class="menu-toggle-icon bs-icons1 down-arrow-icon s22
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
                      class="menu-toggle-icon bs-icons1 down-arrow-icon s22
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
                            class="s-nav-category medium-font fg-text-secondary text-uppercase fs-13"
                          >{{childItem.category}}</div>
                          {{#if childItem.items}}
                            <ol class="s-nav-list">
                              {{#each childItem.items as |subItem|}}
                                <li class="s-nav-item">
                                  {{#if subItem.slug}}
                                    <LinkTo
                                      @route={{subItem.route}}
                                      @model={{subItem.slug}}
                                      @activeClass="bd-primary fg-primary"
                                      class="bd-l pdl5 pdt2 pdb2 font-size14 text-left w-100p fg-text block"
                                    >
                                      {{subItem.menuItem}}
                                    </LinkTo>
                                  {{else}}
                                    <LinkTo
                                      @route={{subItem.route}}
                                      @activeClass="bd-primary fg-primary"
                                      class="bd-l pdl5 pdt2 pdb2 font-size14 text-left w-100p fg-text block"
                                    >
                                      {{subItem.menuItem}}
                                    </LinkTo>
                                  {{/if}}
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
