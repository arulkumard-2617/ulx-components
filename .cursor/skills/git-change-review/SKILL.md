---
name: git-change-review
description: Reviews pull request or branch changes for unintended behavior, API impact, and merge risk. Produces a behavior-change verdict and High, Medium, or Low merge risk with rationale. Use when the user shares a git diff, PR description, branch name, or screenshots of code changes; asks whether merge is safe; or wants a risk assessment before merging.
---

# Git / PR change review

## When to use this skill

- The user pasted a **diff**, **patch**, or **PR link/description**, or **screenshots** of code changes.
- They ask: Is this safe to merge? Any behavior change? What is the **risk**?
- They want a structured **High / Medium / Low** classification with reasons.

## Evidence order (mandatory)

1. **Prefer the real change set** when the workspace matches the PR: read affected files, or run read-only `git diff` / `git show` for the relevant commit or branch.
2. If only a **text diff** is pasted, trace **call sites** and **child components** for args that are passed but not consumed (dead pass-through).
3. If only **screenshots** are available: perform the review from what is visible, state **gaps explicitly** (cropped lines, unknown file, cannot grep), and **do not** downgrade risk below **Medium** unless the visible change is clearly cosmetic (comments only, whitespace-only, or obviously test-only attributes such as `data-qa` with no logic edits).

## Review workflow

1. **Scope**: List files or areas touched (components, styles, API, migrations, config).
2. **Intent vs effect**: Separate “author probably meant X” from what the code **actually** does.
3. **Behavior**:
   - **No intended runtime behavior change**: e.g. rename-only, types, comments, formatting, additive optional props that existing children already honor, `data-qa` only.
   - **Behavior change**: different conditions, order of operations, default values, error handling, network I/O, persistence, auth, event handlers, public API shape (new required args, renamed exports).
4. **Integration**: For each new `@arg` or public symbol, check whether **consumers** (child components, services) read it; unused pass-through is **low user impact** but can be **Medium** merge risk if callers rely on the attribute appearing in the DOM and it never does.
5. **Tests & docs**: Note if tests or changelog/JSDoc should accompany the change; missing tests **increase** risk for logic changes.
6. **Domain skills**: If changes are under `src/components` or ULX demos, also apply **ulx-component-review** expectations (a11y, i18n, API stability).

## Merge risk rubric

Assign **one** overall level. Use the **highest** matching category when several apply.

### High

- Security, auth, secrets, or trust boundaries changed.
- Data loss, destructive migrations, or irreversible schema changes without safe rollout.
- Breaking **required** public API or contract for external consumers.
- Silent change to money, permissions, or correctness of business rules without clear tests.
- Dependency upgrades with known breaking changes and no verification steps.

### Medium

- **Observable** UI or UX behavior change (layout, focus, keyboard, loading states).
- Logic changes in hot paths without tests; unclear edge cases.
- New optional API surface that is **half-wired** (parent passes args child ignores).
- Performance-sensitive loops, renders, or N+1 risk.
- Screenshot-only review where behavior **looks** non-functional but full file context is missing.

### Low

- Comments, formatting, rename with no reference changes.
- Type-only or lint-only fixes proven equivalent.
- **Purely additive** test hooks (`data-qa`, optional metadata) with **no** change to conditions, handlers, or data flow—and verified against child component support when relevant.
- Test-only changes that mirror production behavior.

If uncertain between two levels, choose the **higher** one and say what would reduce risk (e.g. read full file, run tests, verify child accepts `@arg`).

## Output format (use this structure)

```markdown
## Summary
(1–3 sentences)

## Behavior change
- **Verdict**: None / Possible / Confirmed
- **Details**: (bullets; cite files or diff hunks when known)

## Pass-through / API wiring
- (Note any `@foo` passed to children that may be ignored, or new exports)

## Merge risk: **High | Medium | Low**
- **Rationale**: (bullets tied to rubric)

## Evidence gaps (if any)
- (screenshot-only, missing files, cannot run tests, etc.)

## Suggested follow-ups before merge
- (optional checklist)
```

## Screenshots specifically

- Treat image input as **secondary evidence**; describe what was inferred.
- Explicitly warn when **green/red** highlights might omit hunks (imports, closing braces, adjacent lines).
- Never claim “zero behavior change” with **High** confidence from screenshots alone unless the visible diff is strictly non-functional (e.g. only `data-qa` / comment lines in the visible region).

## Relation to other skills

- **ULX component changes** (`src/components`, related demos): combine this skill’s risk framing with **ulx-component-review** for convention and a11y depth.
- **Commit messages**: use a different workflow or skill; this skill focuses on **merge safety** and **behavior**, not message wording.
