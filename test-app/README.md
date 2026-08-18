# ulx-components test-app

Minimal classic Ember host for **integration / rendering tests** of the `ulx-components` v2 addon.

Docs and demos stay in `ulx/src/demo/ulx-ember`. This app is for CI and component regression only.

> Uses classic Broccoli (not the Vite Ember 6.8 blueprint) so it runs on the same Node range as the demo app.

## Setup

From the addon root (rebuild after changing `src/`):

```bash
npm run build
cd test-app
npm install
```

`ulx-components` is linked via `"ulx-components": "file:.."`.

## Running tests

From addon root:

```bash
npm test
```

From this directory:

```bash
npm run test:ember
```

Filter:

```bash
npx ember test --filter="ulx-button"
```

## Adding a component suite

Add `tests/integration/components/ulx-{name}-test.js` using `setupRenderingTest` + `hbs` (same pattern as UlxButton).

Prefer `[data-qa="ulx-{name}"]` selectors.
