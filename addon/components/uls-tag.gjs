import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';

/**
 * UlsTag Component
 * 
 * A reusable tag component that displays a label with optional variant styling,
 * size options, and removable functionality.
 */
export default class UlsTag extends Component {
  /**
   * Computed getter for the tag variant class.
   * Defaults to "default" if no variant is provided.
   * 
   * @returns {string} CSS class name for the variant
   */
  get variantClass() {
    const variant = this.args.variant || 'default';
    return `uls-tag--${variant}`;
  }

  /**
   * Computed getter for the tag size class.
   * Defaults to "md" if no size is provided.
   * 
   * @returns {string} CSS class name for the size
   */
  get sizeClass() {
    const size = this.args.size || 'md';
    return `uls-tag--${size}`;
  }

  /**
   * Computed getter for all tag CSS classes.
   * Combines base class with variant and size classes.
   * 
   * @returns {string} Complete class string for the tag element
   */
  get tagClasses() {
    const classes = ['uls-tag', this.variantClass, this.sizeClass];
    
    // Add removable class if the tag can be removed
    if (this.args.removable) {
      classes.push('uls-tag--removable');
    }
    
    return classes.filter(Boolean).join(' ');
  }

  /**
   * Action handler for the remove button click.
   * Calls the @onRemove callback if provided.
   * 
   * @param {Event} event - The click event
   */
  @action
  handleRemove(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Only call the callback if it's provided
    if (this.args.onRemove && typeof this.args.onRemove === 'function') {
      this.args.onRemove(this.args.label);
    }
  }

  /**
   * Action handler for keyboard events on the remove button.
   * Handles Enter and Space key presses to trigger removal.
   * 
   * @param {KeyboardEvent} event - The keyboard event
   */
  @action
  handleRemoveKeydown(event) {
    // Allow Enter and Space to trigger removal
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleRemove(event);
    }
  }

  <template>
    <span class={{this.tagClasses}} ...attributes>
      {{! Tag label content }}
      <span class="uls-tag__label">{{@label}}</span>
      
      {{! Remove button - only shown if @removable is true }}
      {{#if @removable}}
        <button
          type="button"
          class="uls-tag__remove"
          aria-label="Remove tag"
          {{on "click" this.handleRemove}}
          {{on "keydown" this.handleRemoveKeydown}}
        >
          <span class="uls-tag__remove-icon" aria-hidden="true">×</span>
        </button>
      {{/if}}
    </span>
  </template>
}

/**
 * ============================================================================
 * COMPONENT DOCUMENTATION
 * ============================================================================
 * 
 * Component: UlsTag
 * Category: elements
 * 
 * PURPOSE:
 * A reusable tag component for displaying labels, categories, or chips with
 * optional styling variants, sizes, and removable functionality. This component
 * is useful for displaying tags, badges, labels, or any small text-based
 * indicators in a UI.
 * 
 * PUBLIC API (Arguments):
 * - @label {string} (required) - The text content displayed inside the tag
 * - @variant {string} (optional) - Visual style variant: "default" | "success" | "warning" | "danger"
 *   Default: "default"
 * - @size {string} (optional) - Size of the tag: "sm" | "md" | "lg"
 *   Default: "md"
 * - @removable {boolean} (optional) - Whether to show a close/remove button
 *   Default: false
 * - @onRemove {Function} (optional) - Callback function called when the remove
 *   button is clicked. Receives the tag label as an argument.
 * 
 * INTERNAL LOGIC:
 * - Uses computed getters to build CSS class strings dynamically
 * - Combines base class with variant and size modifiers
 * - Handles remove button click and keyboard events
 * - Prevents event propagation when remove button is clicked
 * 
 * ACCESSIBILITY:
 * - Keyboard navigation: Remove button is fully keyboard accessible
 *   - Enter and Space keys trigger removal
 *   - Tab order is maintained
 * - ARIA roles: Uses semantic <span> and <button> elements
 * - ARIA attributes:
 *   - Remove button has aria-label="Remove tag"
 *   - Remove icon has aria-hidden="true" to hide decorative content
 * - Screen reader support: Label text is read, remove button is announced
 * 
 * USAGE:
 * {{! Basic tag }}
 * <UlsTag @label="Ember.js" />
 * 
 * {{! Tag with variant }}
 * <UlsTag @label="Success" @variant="success" />
 * 
 * {{! Removable tag }}
 * <UlsTag 
 *   @label="Removable Tag"
 *   @removable={{true}}
 *   @onRemove={{this.handleRemove}}
 * />
 * 
 * {{! Full example }}
 * <UlsTag
 *   @label="Ember"
 *   @variant="success"
 *   @size="sm"
 *   @removable={{true}}
 *   @onRemove={{this.removeTag}}
 * />
 * 
 * CONSTRAINTS:
 * - @label is required - component will render empty if not provided
 * - @onRemove callback is optional but recommended when @removable is true
 * - CSS classes follow BEM-style naming: uls-tag, uls-tag--variant, uls-tag--size
 * - Component uses semantic HTML and does not require additional ARIA roles
 * - Browser compatibility: Modern browsers with ES6+ support
 * 
 * ============================================================================
 */

