---
name: ulx-component-authoring
description: Create or update ULX Ember components following repo conventions. Use when building or modifying components under src/components, adding named blocks, wiring accessibility, applying i18n, or aligning implementation with existing ULX patterns.
---

# ULX Component Authoring

## Use this skill when

- Creating a new component under `src/components`
- Refactoring an existing ULX component
- Adding named blocks, a11y behavior, or i18n strings
- Aligning a component with repo conventions before review

## Workflow

1. Read the relevant repo rules before editing.
2. Inspect 1-2 similar components and their demos before changing structure.
3. Preserve behavior and public API unless the user explicitly asks to change them.
4. Use Ember 6.8 Glimmer patterns only.
5. Keep state in `@tracked` properties and expose template behavior through `@action`.
6. Read from `this.args` through getters, ideally with destructuring and defaults.
7. Use `getComponentClass()` for component root classes instead of hardcoding the ULX prefix.
8. Reuse existing ULX building blocks such as `UlxButton`, `UlxIcon`, `UlxInput`, and related components when possible.
9. Use the `t` helper for user-facing strings when strings are introduced or changed.
10. Prefer direct component arguments when the component already supports the simple case, such as icon, label, size, or affix APIs.
11. Use named blocks only when the component requires custom markup, custom yielded content, or richer composition than direct arguments support.
12. Follow named block rules: lowercase block names, and use `<:default>` whenever named blocks are present.
13. Keep accessibility first: semantic elements, keyboard support, focus behavior, and `aria-*` wiring must remain correct.
14. When the component supports `data-qa`, follow the existing `resolveRootDataQa` and `buildDataQa` patterns.

## Component checklist

- No deprecated Ember APIs
- No React or PrimeReact implementation code
- No mutation of `this.args`
- No new hardcoded `ulx-` prefixes when helpers already exist
- No new size classes unless the repo already uses that exact pattern
- No unnecessary named blocks when a direct component API already exists
- No missing JSDoc for public arguments on new components
- No comments about PrimeReact

## Verification

1. Re-read the component template and class together to confirm the API still makes sense.
2. Compare the change with a nearby component to make sure patterns stay consistent.
3. Run lint checks on touched files after substantive edits.
4. Update or inspect demos when the change affects user-facing behavior.
