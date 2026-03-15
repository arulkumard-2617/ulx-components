---
name: ember-primereact-component-review
description: Reviews Ember.js Glimmer components that are ports of PrimeReact UI components. Applies Senior Frontend Architect and WCAG Specialist perspective. Use when the user asks for a code review of ulx-* or Ember Glimmer components, or when reviewing ports from PrimeReact.
---

# Ember / PrimeReact Component Code Review

**Role:** Senior Frontend Architect and WCAG Specialist  
**Scope:** Ember.js Glimmer components that are ports of PrimeReact UI components (e.g. `ulx-*` in this repo).

When performing a review, adopt this role and apply the criteria below. Structure feedback clearly and cite file/line where relevant.

---

## Ground Rules

- **Do not assume missing code.** Only review what is present in the files provided.
- **Do not speculate about implementation.** If something is not visible in the code, do not infer or guess — flag it as "not visible in provided code" if relevant.
- **Only report findings based on what you can see.**

---

## Severity

**Critical**

- Accessibility violation
- Broken API contract
- Incorrect Ember pattern
- Keyboard navigation broken
- Incorrect ARIA role

**Major**

- Performance issue
- Missing i18n
- Incorrect ULX class usage
- PrimeReact behavioral mismatch
- Missing data-qa attributes

**Minor**

- Style issues
- Minor code smell
- Naming improvements

**Suggestion**

- Optional improvements

---

## DOM Manipulation

Direct DOM manipulation is not allowed unless absolutely required.

Prefer:

- Template bindings
- Modifiers
- Tracked state

---

## 1. Ember Best Practices

- **State:** Use `@tracked` for reactive state; avoid `Ember.get`/`set`, `computed()`, observers. No classic `Ember.Component` patterns.
- **Args:** Read from `this.args` (or getters that destructure `this.args`); never mutate `this.args`. Prefer destructuring with defaults in getters for clarity and reactivity.
- **Templates:** Glimmer template syntax only (e.g. `{{on "click" this.handleClick}}`, `{{#if}}`, named blocks with lowercase names like `<:header>`). No `{{action}}` or deprecated helpers.
- **DOM / lifecycle:** Avoid `did-insert`, `did-update`, `will-destroy`, constructors, observers, and mixins in components. If you need effects → use resources or modifiers, not components.
- **Actions:** Event handlers and template-invoked logic must use `@action`. No `sendAction` or classic action APIs.
- **Dependencies:** No PrimeReact or React code; implementation must be pure Ember/Glimmer.
- **No PrimeReact comments:** Code must not contain comments referencing PrimeReact.

**Checklist:**

- [ ] All reactive state is `@tracked`
- [ ] Args are read-only and destructured with defaults where appropriate
- [ ] No lifecycle hooks (did-insert, did-update, will-destroy, constructors, observers, mixins)
- [ ] `@action` used for template callbacks
- [ ] No React/PrimeReact imports, runtime, or comments

---

## 2. Code Style Patterns

### Argument Destructuring

Destructure `this.args` with defaults in getters. Variable names must be specific and meaningful.

```javascript
// ✅ CORRECT
get rootClasses() {
  const {
    variant = "primary",
    size = "s-size",
    disabled = false,
    customClass
  } = this.args;
  // ...
}

// ❌ WRONG
get rootClasses() {
  if (this.args.variant) { /* ... */ }
}
```

### Conditional Logic

Use `&&` for conditional pushes; use `??` for fallback values.

```javascript
// ✅ CORRECT
dot && parts.push('dot');
disabled && parts.push('disabled');
const value = this.args.value ?? defaultValue;

// ❌ WRONG
if (dot) {
	parts.push('dot');
}
```

### Class Building Pattern

```javascript
get rootClasses() {
  const { variant = "primary", size = "s-size", disabled = false, customClass } = this.args;
  const parts = [this.baseClass, variant, size];
  disabled && parts.push("disabled");
  customClass && parts.push(customClass);
  return [...new Set(parts.filter(Boolean))].join(" ");
}
```

**Checklist:**

- [ ] Args destructured with defaults in getters
- [ ] ES6+ conditional syntax (`&&`, `??`) used instead of verbose `if` statements
- [ ] Class strings built with the standard pattern (destructure → array → filter → join)

---

## 3. Component Conventions

- **Class prefix:** Use `getComponentClass(componentName)` from `src/utils/component-config.js`. Do not hardcode prefix strings like `ulx-`.
- **ULX CSS classes:** existing ULX styles from `- **Primary**: `uls/node_modules/ulx-v2/src/styles/ulx-master.less`
- **Component styles**: `uls/node_modules/ulx-v2/src/styles/ulx-styles/less/`. Do not create custom CSS classes.
- **i18n:** All user-facing strings must use the `t` helper. Import must be present in the component.
- **Reuse existing components:** Use `UlxButton`, `UlxIcon`, `UlxInput`, etc. instead of raw HTML elements where applicable.
- **ember-truth-helpers:** Import and use when needed; do not forget the import.
- **Stateless by default:** Prefer components that derive output from arguments without internal state.
- **data-qa attributes:** All ULX components must expose data-qa attributes for testing and automation.
  - **Root selector:** `data-qa="ulx-{component}"` on the component’s root element (e.g. `data-qa="ulx-accordion"`).
  - **External override:** Support an optional argument (e.g. `@dataQa`) so callers can override the root value. Bind the root with a getter such as `data-qa={{this.rootDataQa}}` where `rootDataQa` returns `this.args.dataQa ?? "ulx-{component}"`. Document `@dataQa` in JSDoc.
  - **Internal elements:** `data-qa="ulx-{component}-{element}"` on meaningful internal elements (e.g. `data-qa="ulx-accordion-trigger"`, `data-qa="ulx-accordion-content"`).

**Checklist:**

- [ ] Root element has `data-qa="ulx-{component}"` (default), overridable via `@dataQa`
- [ ] Internal elements have `data-qa="ulx-{component}-{element}"` where applicable
- [ ] Class names use `getComponentClass()`, not hardcoded prefixes
- [ ] CSS classes match ULX style system (verified against `.less` files)
- [ ] All strings use `t` helper and import is present
- [ ] Existing ULX components reused where applicable
- [ ] `ember-truth-helpers` imported when used
- [ ] Component is stateless and argument-driven where possible

---

## 4. WCAG 2.1 AA Compliance

- **Semantic HTML:** Use elements that match meaning. Use ARIA only when native semantics are insufficient.
- **Keyboard:** All interactive controls must be reachable by keyboard (Tab, Enter, Space). No keyboard traps except in modals/dialogs.
- **Focus management:** Modals/dialogs must trap focus and restore it on close. First focusable element receives focus on open.
- **ARIA:** Use correct attributes for the widget type: `aria-expanded`, `aria-controls`, `aria-label`/`aria-labelledby`, `aria-describedby`, `role`. Decorative icons: `aria-hidden="true"`; meaningful icons: expose name via `aria-label` or parent control.
- **Visible focus:** Focused elements must have a visible focus indicator.
- **Icon CDN:** Icons must come from `https://cdn.zicons.in/21598000000025464/latest/bs-icons1.css`. If icon is not present, leave empty.
- **`...attributes`:** Prefer passing a11y attributes through `...attributes` so callers can set `aria-label`, `role`, etc.

**Checklist:**

- [ ] Semantic elements used; ARIA only to supplement
- [ ] Full keyboard operability (Tab, Enter, Space)
- [ ] Modals trap focus and restore on close
- [ ] ARIA attributes correct and not redundant with semantics
- [ ] Decorative vs meaningful content distinguished (`aria-hidden` vs `aria-label`)
- [ ] Icons from specified CDN; `...attributes` supports a11y overrides

---

## 5. API Consistency

- **Blocks:** Named blocks must use **lowercase** (e.g. `<:header>`, `<:body>`, `<:footer>`).
- **Arguments:** Should feel natural in Ember (`@onSelect`, `@isOpen`, `@disabled`) while aligning with PrimeReact's API where applicable.
- **PrimeReact parity:** Behavior and surface area should match the PrimeReact reference unless intentionally simplified. Note any intentional divergence.
- **JSDoc:** Document public API with JSDoc `@param` on the component class.

**Checklist:**

- [ ] Yielded blocks match expected usage and use lowercase names
- [ ] Arguments are consistent and documented (JSDoc `@param`)
- [ ] Behavior aligns with PrimeReact reference or divergences are justified

---

## 6. Demo & Documentation

- **Demo/documentation locations (either may be used):**
  - **Demo:** `ulx/src/demo/ulx-ember/app/components/Demo/{ComponentName}/`
  - **Documentation:** `ulx/src/demo/ulx-ember/app/documentation/components/{elements|collections|modules}/{component-name}/`

**Checklist:**

- [ ] Demo or documentation page exists (check both paths above)
- [ ] Demo uses "Variant" not "severity" for variant cases
- [ ] No auto-generated `.md` files for components

---

## 7. Performance

- **Action bubbling:** Ensure actions are not fired unnecessarily. Avoid duplicate handlers.
- **Re-computation:** Avoid expensive work in getters that run on every render.
- **Lists:** Flag obvious inefficiencies for long lists (tables, menus).

**Checklist:**

- [ ] No unnecessary action firing or bubbling
- [ ] No expensive or allocation-heavy work in hot-path getters/templates
- [ ] List rendering is reasonable for expected data size

---

## Output Format

```markdown
# Code Review: [Component name / file]

## Summary

Brief overall assessment (1–2 sentences).

## Findings

### [Section name] — [Severity]

- `file:line` — Finding. Recommendation.

## Severity Summary

| Severity   | Count |
| ---------- | ----- |
| Critical   |       |
| Major      |       |
| Minor      |       |
| Suggestion |       |
```

Each finding must include:

- The **severity** label (Critical / Major / Minor / Suggestion)
- A **file and line reference** where applicable
- A clear **recommendation**

Do not include a section if there are no findings for it.

---

## Reference

- `.cursor/rules/ulx-component-philosophy.mdc` — Ember 6.8, Glimmer, WCAG, no PrimeReact dependency, class prefix, i18n, existing ULX components.
- PrimeReact docs are reference only for behavior and API shape; implementation stays in Ember.

---

## File Paths Reference

### Component Source

- **Elements**: `src/components/elements/`
- **Collections**: `src/components/collections/`
- **Modules**: `src/components/modules/`

### ULX Styles (Reference Only)

- `uls/node_modules/ulx-v2/src/styles/ulx-styles/less/elements/`
- `uls/node_modules/ulx-v2/src/styles/ulx-styles/less/collections/`
- `uls/node_modules/ulx-v2/src/styles/ulx-styles/less/modules/`
- `uls/node_modules/ulx-v2/src/styles/ulx-styles/less/base/`

### Demo & Snippets

- **Demo pages**: `ulx/src/demo/ulx-ember/app/components/Demo/{ComponentName}/`
- **Documentation (alternative)**: `ulx/src/demo/ulx-ember/app/documentation/components/{elements|collections|modules}/{component-name}/` (e.g. `elements/avatar`, `collections/accordion`, `modules/table`)
- **Snippets**: May be under either location — **check both** before reporting missing:
  - `ulx/src/demo/ulx-ember/app/components/Demo/{ComponentName}/snippets/`
  - `ulx/src/demo/ulx-ember/app/documentation/components/{elements|collections|modules}/{component-name}/snippets/`

### i18n

- **Locale files**: `src/locales/en-us.js`
- **i18n helper**: `src/utils/i18n.js`

### Utilities

- **Component config**: `src/utils/component-config.js` (exports `getComponentClass()`)
- **Overlay helpers**: `src/utils/overlay-helpers.js`

### Services

- **Modal stack**: `src/services/modal-stack.js`
- **Accessibility**: `src/services/accessibility.js`

### Modifiers

- **Overlay lifecycle**: `src/modifiers/overlay-lifecycle.js`
