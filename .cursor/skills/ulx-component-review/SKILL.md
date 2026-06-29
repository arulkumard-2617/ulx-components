---
name: ulx-component-review
description: Review ULX component changes for correctness, accessibility, maintainability, API stability, and repo convention compliance. Use when reviewing component refactors, pull requests, or changes under src/components and related demos.
---

# ULX Component Review

## Use this skill when

- Reviewing changes under `src/components`
- Reviewing related demo updates for correctness and parity
- Performing a low-risk readability refactor without changing behavior
- Checking whether a component aligns with project conventions before merge
- Refactoring a Glimmer component for readability, scalability, design-system consistency, or `data-qa` alignment

## Review priorities

1. Correctness and regressions
2. Accessibility and keyboard behavior
3. Public API stability
4. Consistency with established ULX patterns
5. Maintainability and duplication reduction

## Checklist

- Logic still handles edge cases
- Public args and yielded blocks remain compatible unless change is intentional
- Accessibility semantics, focus flow, and keyboard interactions still work
- New or changed strings use the repo's i18n pattern
- Root and internal class naming follow ULX helpers and existing styles
- Direct component APIs are preferred over named blocks when the component already supports the simple case
- Named blocks follow lowercase and explicit default-block rules
- `data-qa` follows existing `resolveRootDataQa` and `buildDataQa` conventions when supported
- Demo changes still match real component behavior

## Low-risk refactor guidance

- Extract repeated logic into shared utilities when that reduces duplication
- Prefer scalable patterns such as maps or configuration objects over long conditional chains
- Simplify template structure where possible without changing behavior
- Allow a11y overrides through `...attributes` on the right surface when nearby ULX components do the same
- Keep root and interactive surfaces override-friendly through `...attributes` where that matches nearby component patterns
- Prefer existing helpers such as `joinClassNames` and small shared utilities over duplicated inline logic
- Prefer direct component arguments such as `@iconLeft`, `@label`, and similar affordances when the component supports them
- Avoid unnecessary named blocks for simple icon or affix cases; keep named blocks for custom markup or richer composition
- Do not change functionality or public API unless the user explicitly asks for it
- Keep the refactor minimal and avoid over-engineering

## data-qa pattern

When the component supports `@dataQa`, follow the ULX pattern below and document `@dataQa` in the JSDoc.

```javascript
import { buildDataQa, resolveRootDataQa } from '../../../utils/data-qa';
```

- Adjust the relative import path for the component location
- Root: `data-qa={{this.rootDataQa}}`
- Root getter: `resolveRootDataQa(this.args.dataQa, "{componentName}")`
- Internal parts: `buildDataQa(this.rootDataQa, part)`
- Use meaningful part names that follow `.cursor/rules/ulx-essentials.mdc` (`data-qa` section)

## Output format

When reviewing, report findings in severity order and cite the affected file or behavior. Keep summaries brief and focus on bugs, regressions, risks, and missing coverage first.

When the user asks for a refactor, return:

1. Explanation of improvements
2. Refactored code
