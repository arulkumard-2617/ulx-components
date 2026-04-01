# data-qa (ULX)

- **Root:** `data-qa="ulx-{component}"` on the component root (e.g. `ulx-accordion`).
- **Override:** Optional `@dataQa`; bind `data-qa={{this.rootDataQa}}` where `rootDataQa` is `this.args.dataQa ?? "ulx-{component}"`. Document `@dataQa` in the class JSDoc.
- **Internals:** Meaningful parts use `data-qa="ulx-{component}-{part}"` (e.g. `ulx-accordion-trigger`, `ulx-accordion-content`).use the root for prefix.
