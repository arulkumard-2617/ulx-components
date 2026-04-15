import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { fn } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { DocNavItems } from '../../../constants/docs';
import { t, UlxIconInput, UlxInput } from 'ulx-components';

export default class DocSidebarComponent extends Component {
  @service router;

  @tracked activeItem = null;
  @tracked searchQuery = '';
  contentRefs = {};

  syncActiveItemFromRoute = modifier(() => {
    let rafId = requestAnimationFrame(() => {
      this.setInitialActiveItem();
    });

    const onRouteDidChange = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        this.setInitialActiveItem();
      });
    };

    this.router.on('routeDidChange', onRouteDidChange);

    return () => {
      cancelAnimationFrame(rafId);
      this.router.off('routeDidChange', onRouteDidChange);
    };
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

    for (const item of DocNavItems) {
      if (!item.children?.length) continue;

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
        return;
      }
    }
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
    const item = this.filteredNavItems.find((i) => i.menuTitle === menuTitle);
    const isExpanded = item ? this.isExpanded(item) : false;
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

  isExpanded = (item) => {
    if (!item) return false;
    const hasSearchQuery = (this.searchQuery ?? '').trim() !== '';
    if (hasSearchQuery && this.hasChildren(item)) {
      return true;
    }
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
    const prevHadQuery = (this.searchQuery ?? '').trim() !== '';
    this.searchQuery = event.target?.value ?? '';
    const nowHasQuery = (this.searchQuery ?? '').trim() !== '';

    if (prevHadQuery && !nowHasQuery) {
      requestAnimationFrame(() => {
        this.setInitialActiveItem();
      });
    }
  }

  <template>
    <aside
      class="doc-sidebar flex flex-col p-0 sticky left-0 top-32 w-260 shrink-0 select-none overflow-x-hidden overflow-y-auto border-e"
      style="height: calc(100vh - 5rem);"
      {{this.syncActiveItemFromRoute}}
    >
      <div class="px-5 bg-default py-3 sticky top-0 z-10">
        <UlxIconInput @iconLeft="search-icon" @iconType="font">
          <UlxInput
            @value={{this.searchQuery}}
            @onInput={{this.handleSearchInput}}
            @placeholder={{t "lbl.search"}}
            aria-label={{t "lbl.search"}}
            class="w-full"
          />
        </UlxIconInput>
      </div>
      <nav class="grow p-5">
        <ol class="p-0 m-0">
          {{#each this.filteredNavItems as |item|}}
            <li class="mb-4" data-a11y="focus">
              {{#if item.to}}
                {{#if (this.hasChildren item)}}
                  {{! Parent with children - dropdown button only (not LinkTo) }}
                  <div class="flex items-center gap-2 w-full">
                    <button
                      type="button"
                      class="flex items-center gap-2 text-start
                        {{if
                          (this.isItemActive item this.currentPath)
                          'fg-primary'
                          ''
                        }}"
                      {{on "click" (fn this.toggleItem item.menuTitle)}}
                    >
                      <span
                        class="w-32 h-32 flex items-center justify-center border rounded"
                      >
                        <i class={{item.icon}}></i>
                      </span>
                      <span class="bold-font">{{item.menuTitle}}</span>
                    </button>
                    <button
                      class="ms-auto ps-1"
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
                    class="flex items-center justify-start gap-2 w-full
                      {{if
                        (this.isItemActive item this.currentPath)
                        'fg-primary'
                        'fg-text'
                      }}"
                  >
                    {{#if item.icon}}
                      <span
                        class="w-32 h-32 flex items-center justify-center border rounded"
                      >
                        <i class={{item.icon}}></i>
                      </span>
                    {{/if}}
                    <span class="bold-font">{{item.menuTitle}}</span>
                  </LinkTo>
                {{/if}}
              {{else}}
                {{! Expandable item without 'to' - dropdown button only (not LinkTo) }}
                <button
                  class="flex items-center gap-2 w-full"
                  type="button"
                  {{on "click" (fn this.toggleItem item.menuTitle)}}
                >
                  <span
                    class="w-32 h-32 flex items-center justify-center border rounded"
                  >
                    {{#if (this.hasCustomIcon item.menuTitle)}}
                      {{! template-lint-disable no-triple-curlies }}
                      <span class="w24 h24">{{{this.getIconSvg
                          item.menuTitle
                        }}}</span>
                    {{else}}
                      <i class={{item.icon}}></i>
                    {{/if}}
                  </span>
                  <span class="bold-font">{{item.menuTitle}}</span>
                  <span class="ms-auto">
                    <i
                      class="menu-toggle-icon bs-icons1 down-arrow-icon s22
                        {{if (this.isExpanded item) 'rotate-180' ''}}"
                    ></i>
                  </span>
                </button>
              {{/if}}

              {{#if (this.hasChildren item)}}
                <div
                  style={{this.getAccordionStyle item}}
                  {{this.setContentRef item.menuTitle}}
                >
                  <ol class="ps-2 py-3">
                    {{#each item.children as |childItem|}}
                      {{#if childItem.category}}
                        <li class="pb-2 pt-2" data-a11y="focus">
                          <div
                            class="medium-font fg-text-secondary text-uppercase text-12"
                          >{{childItem.category}}</div>
                          {{#if childItem.items}}
                            <ol class="p-0 m-0 pt-2">
                              {{#each childItem.items as |subItem|}}
                                <li data-a11y="focus">
                                  {{#if subItem.slug}}
                                    <LinkTo
                                      @route={{subItem.route}}
                                      @model={{subItem.slug}}
                                      @activeClass="border-primary fg-primary"
                                      class="border-s ps-5 pt-2 pb-2 text-14 text-start w-full fg-text block"
                                    >
                                      {{subItem.menuItem}}
                                    </LinkTo>
                                  {{else}}
                                    <LinkTo
                                      @route={{subItem.route}}
                                      @activeClass="border-primary fg-primary"
                                      class="border-s ps-5 pt-2 pb-2 text-14 text-start w-full fg-text block"
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
                        <li data-a11y="focus">
                          <LinkTo
                            @route={{childItem.route}}
                            @activeClass="border-primary fg-primary"
                            class="border-s ps-5 pb-2 pt-2 text-14 text-start w-full block fg-text"
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
