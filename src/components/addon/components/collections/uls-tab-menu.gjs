import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { LinkTo } from '@ember/routing';

/**
 * ULS TabMenu Component
 * 
 * A horizontal menu of tabs that supports multiple interaction modes:
 * - Basic: Internal state management
 * - Controlled: External state via @activeIndex
 * - Template: Named block customization via <:tabItem>
 * - Command: Execute functions on item click
 * - Router: Navigation-based tabs
 * 
 * @component uls-tab-menu
 * @category collections
 */
export default class UlsTabMenu extends Component {
  // Internal state for basic mode (only used when not controlled)
  @tracked internalActiveIndex = this.args.activeIndex ?? 0;

  /**
   * Get the current active index
   * - If controlled (@activeIndex provided): use external value
   * - If basic mode: use internal tracked state
   */
  get activeIndex() {
    // Controlled mode: use external @activeIndex
    if (this.args.activeIndex !== undefined) {
      return this.args.activeIndex;
    }
    // Basic mode: use internal state
    return this.internalActiveIndex;
  }

  /**
   * Get the currently active item
   */
  get activeItem() {
    const items = this.args.items || [];
    return items[this.activeIndex] || null;
  }

  /**
   * Check if component is in controlled mode
   */
  get isControlled() {
    return this.args.activeIndex !== undefined;
  }

  // Note: Named block detection is handled in template using {{has-block "tabItem"}}

  /**
   * Get items array (default to empty array)
   */
  get items() {
    return this.args.items || [];
  }

  /**
   * Get root element classes
   * Uses: uls-tabmenu (from ULS styles)
   */
  get rootClasses() {
    const classes = ['uls-tabmenu'];
    if (this.args.className) {
      classes.push(this.args.className);
    }
    return classes.join(' ');
  }

  /**
   * Handle tab item click
   * Supports multiple modes:
   * - Basic: Update internal state
   * - Controlled: Emit @onTabChange
   * - Command: Execute item.command function
   * - Router: Navigation handled by LinkTo
   */
  @action
  handleItemClick(item, index, event) {
    // Prevent default if not a link
    if (!item.route && !item.externalUrl) {
      event?.preventDefault();
    }

    // Skip if disabled
    if (item.disabled) {
      return;
    }

    // Command mode: Execute command function if present
    if (item.command && typeof item.command === 'function') {
      item.command(item, index, event);
      // Command mode doesn't update active state unless controlled
      if (this.isControlled) {
        this.handleTabChange(item, index, event);
      }
      return;
    }

    // Update active state (basic or controlled mode)
    this.handleTabChange(item, index, event);
  }

  /**
   * Handle tab change (updates state and emits callbacks)
   */
  @action
  handleTabChange(item, index, event) {
    // Basic mode: Update internal state
    if (!this.isControlled) {
      this.internalActiveIndex = index;
    }

    // Controlled mode: Emit @onTabChange callback
    if (this.isControlled && this.args.onTabChange) {
      this.args.onTabChange(index, item, event);
    }

    // Emit general @onChange callback (for backward compatibility)
    if (this.args.onChange) {
      this.args.onChange(item, index, event);
    }
  }

  /**
   * Handle keyboard navigation
   * ArrowLeft/ArrowRight to move focus
   * Enter/Space to activate
   */
  @action
  handleKeyDown(event, item, index) {
    const items = this.items;
    let newIndex = index;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        // Move to previous item (wrap around)
        newIndex = index > 0 ? index - 1 : items.length - 1;
        // Skip disabled items
        while (items[newIndex]?.disabled && newIndex !== index) {
          newIndex = newIndex > 0 ? newIndex - 1 : items.length - 1;
        }
        this.focusTab(newIndex);
        break;

      case 'ArrowRight':
        event.preventDefault();
        // Move to next item (wrap around)
        newIndex = index < items.length - 1 ? index + 1 : 0;
        // Skip disabled items
        while (items[newIndex]?.disabled && newIndex !== index) {
          newIndex = newIndex < items.length - 1 ? newIndex + 1 : 0;
        }
        this.focusTab(newIndex);
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        // Activate the focused item
        this.handleItemClick(item, index, event);
        break;

      case 'Home':
        event.preventDefault();
        // Move to first enabled item
        newIndex = 0;
        while (items[newIndex]?.disabled && newIndex < items.length - 1) {
          newIndex++;
        }
        this.focusTab(newIndex);
        break;

      case 'End':
        event.preventDefault();
        // Move to last enabled item
        newIndex = items.length - 1;
        while (items[newIndex]?.disabled && newIndex > 0) {
          newIndex--;
        }
        this.focusTab(newIndex);
        break;
    }
  }

  /**
   * Focus a specific tab by index
   */
  @action
  focusTab(index) {
    // Find the tab element and focus it
    const tabElement = document.querySelector(
      `[data-tab-menu-item="${index}"]`
    );
    if (tabElement) {
      tabElement.focus();
    }
  }

  /**
   * Check if an item is active
   */
  isItemActive(index) {
    return this.activeIndex === index;
  }

  /**
   * Get item container classes
   * Uses: tabmenu-item (from ULS styles)
   */
  getItemContainerClasses(item, index) {
    const classes = ['tabmenu-item'];
    
    if (this.isItemActive(index)) {
      classes.push('active');
    }
    
    if (item.disabled) {
      classes.push('disabled');
    }
    
    return classes.join(' ');
  }

  /**
   * Get link/button classes for styling
   * Uses: tabmenu-link (from ULS styles)
   */
  getLinkClasses(item) {
    const classes = ['tabmenu-link'];
    
    if (item.disabled) {
      classes.push('disabled');
    }
    
    if (item.className) {
      classes.push(item.className);
    }
    
    return classes.join(' ');
  }

  /**
   * Get ARIA label for root element
   */
  get ariaLabel() {
    return this.args.ariaLabel || this.args['aria-label'];
  }

  /**
   * Get ARIA labelled by
   */
  get ariaLabelledBy() {
    return this.args.ariaLabelledBy || this.args['aria-labelledby'];
  }

  <template>
    <nav
      class={{this.rootClasses}}
      role="menubar"
      aria-label={{this.ariaLabel}}
      aria-labelledby={{this.ariaLabelledBy}}
      ...attributes
    >
      <ul class="tabmenu-nav" role="presentation">
        {{#each this.items as |item index|}}
          <li
            class={{this.getItemContainerClasses item index}}
            role="presentation"
          >
            {{#if (has-block "tabItem")}}
              {{! TEMPLATE MODE: Yield to named block for full customization }}
              {{yield item (this.isItemActive index) index to="tabItem"}}
            {{else}}
              {{! DEFAULT RENDERING: Standard tab item UI }}
              {{#if item.route}}
                {{! ROUTER MODE: Use LinkTo for internal navigation }}
                <LinkTo
                  @route={{item.route}}
                  @models={{item.models}}
                  @query={{item.query}}
                  class={{this.getLinkClasses item}}
                  role="menuitem"
                  aria-label={{item.label}}
                  aria-disabled={{if item.disabled "true" "false"}}
                  data-tab-menu-item={{index}}
                  tabindex={{if item.disabled "-1" "0"}}
                  {{on "keydown" (fn this.handleKeyDown item index)}}
                >
                  {{#if item.icon}}
                    <i class="tabmenu-icon {{item.icon}}" aria-hidden="true"></i>
                  {{/if}}
                  <span class="tabmenu-label">{{item.label}}</span>
                  {{#if (this.isItemActive index)}}
                    <span class="tabmenu-inkbar" aria-hidden="true"></span>
                  {{/if}}
                </LinkTo>
              {{else if item.externalUrl}}
                {{! ROUTER MODE: External link }}
                <a
                  href={{item.externalUrl}}
                  class={{this.getLinkClasses item}}
                  role="menuitem"
                  aria-label={{item.label}}
                  aria-disabled={{if item.disabled "true" "false"}}
                  data-tab-menu-item={{index}}
                  tabindex={{if item.disabled "-1" "0"}}
                  {{on "keydown" (fn this.handleKeyDown item index)}}
                  ...attributes
                >
                  {{#if item.icon}}
                    <i class="tabmenu-icon {{item.icon}}" aria-hidden="true"></i>
                  {{/if}}
                  <span class="tabmenu-label">{{item.label}}</span>
                  {{#if (this.isItemActive index)}}
                    <span class="tabmenu-inkbar" aria-hidden="true"></span>
                  {{/if}}
                </a>
              {{else}}
                {{! BASIC/CONTROLLED/COMMAND MODE: Button-based tab }}
                <button
                  type="button"
                  class={{this.getLinkClasses item}}
                  role="menuitem"
                  aria-label={{item.label}}
                  aria-disabled={{if item.disabled "true" "false"}}
                  aria-current={{if (this.isItemActive index) "page" false}}
                  data-tab-menu-item={{index}}
                  disabled={{item.disabled}}
                  tabindex={{if item.disabled "-1" "0"}}
                  {{on "click" (fn this.handleItemClick item index)}}
                  {{on "keydown" (fn this.handleKeyDown item index)}}
                >
                  {{#if item.icon}}
                    <i class="tabmenu-icon {{item.icon}}" aria-hidden="true"></i>
                  {{/if}}
                  <span class="tabmenu-label">{{item.label}}</span>
                  {{#if (this.isItemActive index)}}
                    <span class="tabmenu-inkbar" aria-hidden="true"></span>
                  {{/if}}
                </button>
              {{/if}}
            {{/if}}
          </li>
        {{/each}}
      </ul>
    </nav>
  </template>
}

/**
 * ============================================================================
 * COMPONENT DOCUMENTATION
 * ============================================================================
 * 
 * Component: UlsTabMenu
 * Category: collections
 * 
 * PURPOSE:
 * Renders a horizontal menu of tabs based on a collection of menu items.
 * Supports multiple interaction modes: Basic, Controlled, Template (named blocks),
 * Command, and Router. Designed for navigation and tab-based UI patterns.
 * 
 * PUBLIC API (Arguments):
 * - @items {Array} - Required. Array of menu item objects with structure:
 *   {
 *     label: String (required),
 *     icon: String (optional),
 *     disabled: Boolean (optional),
 *     command: Function (optional),
 *     route: String (optional),
 *     models: Array (optional),
 *     query: Object (optional),
 *     externalUrl: String (optional),
 *     className: String (optional)
 *   }
 * 
 * - @activeIndex {Number} - Optional. For controlled mode. External control
 *   of active tab index. When provided, component operates in controlled mode.
 * 
 * - @onTabChange {Function} - Optional. Callback for controlled mode.
 *   Signature: (index, item, event) => void
 *   Called when active tab changes in controlled mode.
 * 
 * - @onChange {Function} - Optional. General change callback (backward compatibility).
 *   Signature: (item, index, event) => void
 *   Called whenever a tab is activated.
 * 
 * - @ariaLabel {String} - Optional. Accessible label for the menubar.
 *   Alternative to @ariaLabelledBy.
 * 
 * - @ariaLabelledBy {String} - Optional. ID of element that labels the menubar.
 *   Alternative to @ariaLabel.
 * 
 * - @className {String} - Optional. Additional CSS classes for root element.
 * 
 * NAMED BLOCKS:
 * - <:tabItem> - Optional. Custom template for rendering tab items.
 *   Yields: item (Object), isActive (Boolean), index (Number)
 *   When provided, consumer has full control over item rendering.
 *   When not provided, default tab UI is rendered.
 * 
 * INTERNAL LOGIC:
 * - Tracks internalActiveIndex for basic mode (when @activeIndex not provided)
 * - Determines mode based on presence of @activeIndex (controlled vs basic)
 * - Detects named block using hasBlock('tabItem')
 * - Handles keyboard navigation (ArrowLeft/Right, Enter/Space, Home/End)
 * - Manages focus for keyboard navigation
 * - Supports multiple item types: buttons, links, router links
 * 
 * MODES:
 * 
 * 1. BASIC MODE:
 *    - No @activeIndex provided
 *    - Component manages active state internally
 *    - Updates internalActiveIndex on click
 *    - Emits @onChange callback
 * 
 * 2. CONTROLLED MODE:
 *    - @activeIndex provided
 *    - Active state managed externally
 *    - Emits @onTabChange callback
 *    - Does not update internal state
 * 
 * 3. TEMPLATE MODE:
 *    - <:tabItem> named block provided
 *    - Consumer controls item rendering
 *    - Yields item, isActive, index
 *    - Full customization possible
 * 
 * 4. COMMAND MODE:
 *    - Item has command function
 *    - Executes command on click
 *    - Does not update active state (unless controlled)
 *    - Useful for actions, not navigation
 * 
 * 5. ROUTER MODE:
 *    - Item has route or externalUrl
 *    - Uses <LinkTo> for internal routes
 *    - Uses <a> for external URLs
 *    - Active state derived from current route
 * 
 * ACCESSIBILITY:
 * - Keyboard navigation:
 *   - ArrowLeft/ArrowRight: Navigate between tabs
 *   - Enter/Space: Activate focused tab
 *   - Home: Move to first tab
 *   - End: Move to last tab
 *   - Tab: Move focus out of component
 * - ARIA roles:
 *   - Root: role="menubar"
 *   - List: role="presentation"
 *   - Items: role="menuitem"
 * - ARIA attributes:
 *   - aria-label or aria-labelledby on root
 *   - aria-label on each item (from item.label)
 *   - aria-disabled on disabled items
 *   - aria-current="page" on active item
 * - Screen reader support:
 *   - Semantic HTML structure
 *   - Proper ARIA roles and labels
 *   - Keyboard navigation fully functional
 * 
 * USAGE EXAMPLES:
 * 
 * Basic Mode:
 * <UlsTabMenu 
 *   @items={{this.menuItems}}
 *   @onChange={{this.handleTabChange}}
 * />
 * 
 * Controlled Mode:
 * <UlsTabMenu 
 *   @items={{this.menuItems}}
 *   @activeIndex={{this.activeTabIndex}}
 *   @onTabChange={{this.handleTabChange}}
 * />
 * 
 * Template Mode (Custom Rendering):
 * <UlsTabMenu @items={{this.menuItems}}>
 *   <:tabItem as |item isActive index|>
 *     <button
 *       type="button"
 *       class={{if isActive "is-active"}}
 *       disabled={{item.disabled}}
 *     >
 *       {{item.label}}
 *     </button>
 *   </:tabItem>
 * </UlsTabMenu>
 * 
 * Command Mode:
 * <UlsTabMenu 
 *   @items={{this.menuItemsWithCommands}}
 * />
 * // Where menuItemsWithCommands includes items with command functions
 * 
 * Router Mode:
 * <UlsTabMenu 
 *   @items={{this.navigationItems}}
 * />
 * // Where navigationItems includes items with route or externalUrl
 * 
 * CONSTRAINTS:
 * - @items array is required
 * - Menu items must have a label property
 * - In controlled mode, @activeIndex must be provided
 * - Keyboard navigation skips disabled items
 * - Focus management requires tab elements to have data-tab-menu-item attribute
 * - Styles must be provided externally (component uses semantic class names)
 * - Router mode requires Ember routing to be set up
 * 
 * ============================================================================
 */

