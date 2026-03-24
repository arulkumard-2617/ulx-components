Refactor this Glimmer component for better readability, scalability, and design-system consistency.

Goals:

- Extract reusable logic into utilities (e.g., `joinClassNames` from `utils/class-names`, icon/transition helpers where duplicated)
- Replace conditionals with scalable patterns (maps instead of if/else)
- Simplify template structure and reduce redundancy; inline components are OK when they help
- Improve accessibility by allowing overrides (`...attributes` on roots and interactive surfaces where appropriate)
- **data-qa:** Import and use `buildDataQa` and `resolveRootDataQa` from `utils/data-qa` (same pattern as `ulx-panelmenu`):

  ```javascript
  import { buildDataQa, resolveRootDataQa } from "../../../utils/data-qa";
  ```

  Adjust the relative path (`../`) for `elements/`, `collections/`, or `modules/`. Root: `data-qa={{this.rootDataQa}}` with a getter using `resolveRootDataQa(this.args.dataQa, "{componentName}")`. Internal nodes: `buildDataQa(this.rootDataQa, part)` (or a small `@action`/getter wrapper). Follow `.cursor/rules/data-qa.md` and document `@dataQa` in the component JSDoc when supported.

- Do NOT change functionality or public API
- Keep it minimal and avoid over-engineering

Also follow `.cursor/rules/data-qa.md` for naming and overrides.

Return:

1. Explanation of improvements
2. Refactored code
