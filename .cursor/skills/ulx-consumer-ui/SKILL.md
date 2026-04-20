---
name: ulx-consumer-ui
description: Build or style application UI that consumes ULX (not implementing the component library source). Use when wiring screens, layouts, or demos with ULX components, design-system utilities, and approved overrides while avoiding unnecessary custom CSS or brittle selectors.
---

# ULX consumer UI

## Use this skill when

- Building or updating **application** or **demo** screens that **import and use** ULX components
- Choosing layout, spacing, feedback, and wrapper markup around ULX components
- Styling or theming on the **consumer** side (app templates, app stylesheets), not inside the library's component implementations
- Applying design-system-first styling: tokens, utilities, and component APIs before new CSS or inline styles

## Do not use this skill when

- Implementing or refactoring components inside the **ULX library source tree** (e.g. `src/components` in ulx-components)—follow your team's **library authoring** rules and skills instead

## Required context

1. Read **`.cursor/rules/ulx-design-system.mdc`** for consumption rules (utilities first, override locations, no unnecessary CSS/inline styles when the system already covers the case, avoid brittle `.ulx-*` coupling).

## Workflow

1. Clarify the interaction: form, dense data, or general interactive UI.
2. If the right control is unclear, use **`ulx-component-discovery`** first.
3. Then follow the matching pattern skill:
   - **Forms** → `ulx-form-patterns`
   - **Overlays, navigation, selection, feedback, loading** → `ulx-ui-patterns`
   - **Tables, lists, cards, media, toolbars** → `ulx-data-display-patterns`
4. Prefer ULX component arguments and existing utilities; add overrides only in approved LESS/theme locations when the design system does not cover the case.

## Named Blocks

- **Only use named blocks when a component explicitly requires them** (e.g. `<:header>`, `<:footer>`, `<:icon>`).
- Do **not** wrap simple content in a named block when the component accepts it as a plain argument (`@label`, `@value`, etc.) or plain yielded default content.
- Check the component's public API first: if an `@argument` covers the use case, use the argument — not a named block.
- Unnecessary named blocks add noise, can conflict with a component's internal rendering logic, and make templates harder to read.

## Checklist

- No unnecessary new CSS files or inline styles when a component API or utility already exists
- No brittle app CSS targeting undocumented internal ULX structure
- User-facing strings follow the app's i18n rules when the app uses i18n (this skill does not exempt product code from locale requirements)
- No named blocks used where a plain argument or default yield is sufficient
