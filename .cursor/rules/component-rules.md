# Component Rules - ULS Styling Guidelines

## Styling & CSS Guidelines

### ULS Styles Source
- **Primary Source**: `node_modules/uls-v2/src/styles/uls-master.less`
- **Component Styles**: `node_modules/uls-v2/src/styles/uls-styles/less/`
- **Style Organization**:
  - `base/` - Variables, mixins, reset, utilities
  - `elements/` - Element component styles (button, input, etc.)
  - `collections/` - Collection component styles (tabmenu, card, accordion, etc.)
  - `modules/` - Module component styles (dialog, table, etc.)
  - `themes/` - Theme files

### Using ULS Component Classes
- ✅ **MUST**: Use existing ULS classes from `uls-styles/less/` for respective components
- ✅ **MUST**: Follow the ULS class naming convention (e.g., `.uls-tabmenu`, `.uls-button`)
- ✅ **MUST**: Use the exact class names defined in the ULS style files
- ✅ **MUST**: Reference the corresponding `.less` file in `uls-styles/less/` for available classes
- ❌ **NEVER**: Create custom CSS classes that duplicate ULS functionality
- ❌ **NEVER**: Override ULS styles unless absolutely necessary (use overrides directory)
- ❌ **NEVER**: Hardcode inline styles or create component-specific CSS files

### Component Class Structure
Each component has pre-defined classes in ULS. For example:
- **Tabmenu**: `.uls-tabmenu`, `.tabmenu-nav`, `.tabmenu-item`, `.tabmenu-link`, `.tabmenu-link-active`
- **Button**: `.uls-button`, `.uls-button-primary`, `.uls-button-secondary`
- **Card**: `.uls-card`, `.uls-card-header`, `.uls-card-body`, `.uls-card-footer`

### Finding Component Styles
1. Locate the component's style file in `node_modules/uls-v2/src/styles/uls-styles/less/`
2. Check the appropriate folder (`elements/`, `collections/`, or `modules/`)
3. Review the `.less` file to see available classes and their structure
4. Use those exact class names in your component template

### Example: Using ULS Classes
```javascript
// ✅ CORRECT: Using ULS classes
<template>
  <div class="uls-tabmenu">
    <ul class="tabmenu-nav">
      <li class="tabmenu-item">
        <a class="tabmenu-link tabmenu-link-active">Tab 1</a>
      </li>
    </ul>
  </div>
</template>

// ❌ WRONG: Creating custom classes
<template>
  <div class="my-custom-tabmenu">
    <ul class="my-nav">
      <!-- Custom classes not using ULS -->
    </ul>
  </div>
</template>
```

### Style Import
- ULS styles are imported via `uls-master.less` which includes:
  - Base styles (variables, reset, mixins)
  - Component styles (elements, collections, modules)
  - Theme styles
  - Framework-specific overrides (if any)
- Components should rely on these globally imported styles
- No need to import styles directly in component files

### Overrides (When Necessary)
- If customization is needed, use the override system:
  - `styles/uls/{app}/overrides/` directory
  - Follow the existing override pattern
  - Only override when ULS classes don't meet requirements
  - Document why an override is necessary

## Component Philosophy

### PrimeReact as a Reference
- ✅ **Component behavior and public API design may be inspired by PrimeReact**
- ✅ **Use PrimeReact only as a reference for:**
  - Component responsibilities
  - Interaction patterns
  - Props / arguments structure
  - UX and accessibility behavior
- ✅ **All components must be newly written native Ember components**
- ✅ **Component logic must align with:**
  - Ember idioms
  - Glimmer reactivity model
  - Native Ember patterns and best practices

### Implementation Guidelines
- ❌ **NEVER**: Reuse PrimeReact, React, or third-party component logic
- ❌ **NEVER**: Directly translate PrimeReact code to Ember
- ❌ **NEVER**: Import or depend on PrimeReact or React libraries
- ✅ **MUST**: Implement all component logic using native Ember/Glimmer patterns
- ✅ **MUST**: Use Ember's `@tracked`, `@action`, `@computed` decorators
- ✅ **MUST**: Follow Ember's component lifecycle and reactivity model
- ✅ **MUST**: Use Glimmer component syntax and patterns

### PrimeReact Reference Usage
- **PrimeReact must be treated as a conceptual guide, not a dependency**
- Reference PrimeReact documentation to understand:
  - What props/arguments the component should accept
  - How the component should behave from a user perspective
  - What accessibility features should be implemented
  - What interaction patterns users expect
- Then implement these concepts using native Ember/Glimmer code
- Example: If PrimeReact TabMenu has an `activeIndex` prop, your Ember component might have `@activeItem` argument, but implement the logic using Ember's `@tracked` and `@action` decorators

### Component Logic & HTML Structure Reference
- ✅ **MUST**: Follow implementation logic patterns from `ui-lab/addon/components/*.gjs` files
  - Reference existing `.gjs` components in ui-lab for:
    - Component class structure and organization
    - Method naming conventions
    - State management patterns (`@tracked`, `@action`)
    - Lifecycle handling (modifiers, event listeners)
    - Service injection patterns
    - Utility usage patterns
- ✅ **MUST**: Use HTML structure/DOM from PrimeReact components
  - Reference PrimeReact component source code for:
    - HTML element structure and nesting
    - CSS class names and hierarchy
    - ARIA attributes and accessibility markup
    - Semantic HTML elements
- **Combined Approach**:
  - **Logic/Implementation**: Follow patterns from `ui-lab/addon/components/*.gjs` files
  - **HTML Structure**: Follow DOM structure from PrimeReact components
  - **Example**: Use `bs-modal.gjs` logic patterns (modifiers, tracked state, actions) but structure the `<dialog>` HTML as PrimeReact Dialog component does
- ❌ **NEVER**: Copy entire component logic from ui-lab - adapt patterns only
- ❌ **NEVER**: Use PrimeReact's React-specific logic - only reference HTML structure
- ✅ **MUST**: Ensure HTML structure aligns with ULS CSS classes (from `uls-styles/less/`)

