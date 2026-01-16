import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';

/**
 * ULS TabMenu Component
 * 
 * A navigation component that displays menu items as tab headers.
 * Inspired by PrimeReact TabMenu API, implemented natively in Ember/Glimmer.
 * 
 * @class UlsTabmenuComponent
 * @public
 */
export default class UlsTabmenuComponent extends Component {
  /**
   * Get the current active index
   * Supports both activeIndex (PrimeReact style) and activeItem (convenience)
   * @returns {number|null} The index of the active item, or null if none
   */
  get currentActiveIndex() {
    // Priority: activeIndex (PrimeReact API) > activeItem (convenience)
    if (this.args.activeIndex !== undefined && this.args.activeIndex !== null) {
      return this.args.activeIndex;
    }
    
    if (this.args.activeItem && this.args.model) {
      const index = this.args.model.findIndex(
        (item) => this.getItemId(item) === this.args.activeItem
      );
      return index >= 0 ? index : null;
    }
    
    return null;
  }

  /**
   * Get the unique ID for an item
   * @param {Object} item - The menu item
   * @returns {string|number} The item ID
   */
  getItemId(item) {
    return item.id !== undefined ? item.id : item.label;
  }

  /**
   * Get the active index helper
   * @returns {number|null} The active index
   */
  getActiveIndex() {
    const args = this.args;
    // Priority: activeIndex (PrimeReact API) > activeItem (convenience)
    if (args.activeIndex !== undefined && args.activeIndex !== null) {
      return args.activeIndex;
    }
    
    if (args.activeItem && args.model) {
      const foundIndex = args.model.findIndex(
        (i) => this.getItemId(i) === args.activeItem
      );
      return foundIndex >= 0 ? foundIndex : null;
    }
    
    return null;
  }

  /**
   * Check if an item is active
   * @param {Object} item - The menu item
   * @param {number} index - The item index
   * @returns {boolean} True if the item is active
   */
  isActive = (item, index) => {
    const args = this.args;
    const activeIndex = this.getActiveIndex();
    
    if (activeIndex === null) {
      return false;
    }
    
    // Check by index first (PrimeReact style)
    if (activeIndex === index) {
      return true;
    }
    
    // Fallback to ID comparison (convenience)
    if (args.activeItem) {
      return this.getItemId(item) === args.activeItem;
    }
    
    return false;
  }

  /**
   * Check if an item is disabled
   * @param {Object} item - The menu item
   * @returns {boolean} True if the item is disabled
   */
  isDisabled = (item) => {
    const args = this.args;
    return args.disabled === true || item.disabled === true;
  }

  /**
   * Handle item click
   * @param {Object} item - The menu item
   * @param {Event} event - The click event
   */
  @action
  handleItemClick(item, event) {
    event.preventDefault();
    
    if (this.isDisabled(item)) {
      return;
    }

    const itemId = this.getItemId(item);
    const itemIndex = this.args.model.findIndex((i) => this.getItemId(i) === itemId);

    // Execute command if provided
    if (item.command) {
      item.command({
        originalEvent: event,
        item: item,
        index: itemIndex
      });
    }

    // Call onChange callback if provided
    if (this.args.onTabChange) {
      this.args.onTabChange({
        originalEvent: event,
        item: item,
        index: itemIndex
      });
    }
  }

  /**
   * Handle keyboard navigation
   * @param {Object} item - The menu item
   * @param {Event} event - The keyboard event
   */
  @action
  handleKeyDown(item, event) {
    if (this.isDisabled(item)) {
      return;
    }

    const items = this.args.model || [];
    const currentIndex = items.findIndex((i) => this.getItemId(i) === this.getItemId(item));
    const container = event.target.closest('.uls-tabmenu');

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.handleItemClick(item, event);
        break;

      case 'ArrowRight':
        event.preventDefault();
        // Find next non-disabled item
        let nextIndex = (currentIndex + 1) % items.length;
        let attempts = 0;
        while (this.isDisabled(items[nextIndex]) && attempts < items.length) {
          nextIndex = (nextIndex + 1) % items.length;
          attempts++;
        }
        if (!this.isDisabled(items[nextIndex])) {
          this.focusItem(items[nextIndex], container);
        }
        break;

      case 'ArrowLeft':
        event.preventDefault();
        // Find previous non-disabled item
        let prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        attempts = 0;
        while (this.isDisabled(items[prevIndex]) && attempts < items.length) {
          prevIndex = prevIndex <= 0 ? items.length - 1 : prevIndex - 1;
          attempts++;
        }
        if (!this.isDisabled(items[prevIndex])) {
          this.focusItem(items[prevIndex], container);
        }
        break;

      case 'Home':
        event.preventDefault();
        // Find first non-disabled item
        for (let i = 0; i < items.length; i++) {
          if (!this.isDisabled(items[i])) {
            this.focusItem(items[i], container);
            break;
          }
        }
        break;

      case 'End':
        event.preventDefault();
        // Find last non-disabled item
        for (let i = items.length - 1; i >= 0; i--) {
          if (!this.isDisabled(items[i])) {
            this.focusItem(items[i], container);
            break;
          }
        }
        break;
    }
  }

  /**
   * Focus a specific item by finding its DOM element
   * @param {Object} item - The menu item to focus
   * @param {HTMLElement} container - The container element
   */
  focusItem(item, container) {
    if (!container) {
      return;
    }
    
    const items = this.args.model || [];
    const itemIndex = items.findIndex((i) => this.getItemId(i) === this.getItemId(item));
    
    if (itemIndex >= 0) {
      const links = container.querySelectorAll('.tabmenu-link');
      if (links[itemIndex]) {
        links[itemIndex].focus();
      }
    }
  }

  <template>
    <div 
      class="uls-tabmenu {{@className}}"
      role="menubar"
      aria-label={{@ariaLabel}}
      aria-labelledby={{@ariaLabelledBy}}
    >
      <ul class="tabmenu-nav">
        {{#each @model as |item index|}}
          <li 
            class="tabmenu-item {{if (this.isActive item index) 'active'}} {{if (this.isDisabled item) 'disabled'}}"
            role="presentation"
          >
            {{#if @itemTemplate}}
              {{! Custom template support via yield }}
              <div
                role="menuitem"
                aria-label={{item.label}}
                aria-disabled={{this.isDisabled item}}
                tabindex={{if (this.isDisabled item) '-1' '0'}}
                class="tabmenu-link {{if (this.isDisabled item) 'disabled'}}"
                {{on "click" (fn this.handleItemClick item)}}
                {{on "keydown" (fn this.handleKeyDown item)}}
              >
                {{yield item index}}
              </div>
            {{else}}
              <a
                href="#"
                role="menuitem"
                aria-label={{item.label}}
                aria-disabled={{this.isDisabled item}}
                tabindex={{if (this.isDisabled item) '-1' '0'}}
                class="tabmenu-link {{if (this.isDisabled item) 'disabled'}}"
                {{on "click" (fn this.handleItemClick item)}}
                {{on "keydown" (fn this.handleKeyDown item)}}
              >
                {{#if item.icon}}
                  <i class="tabmenu-icon {{item.icon}}"></i>
                {{/if}}
                <span class="tabmenu-label">{{item.label}}</span>
              </a>
            {{/if}}
          </li>
        {{/each}}
      </ul>
    </div>
  </template>
}