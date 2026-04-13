# ulx-components

Ember v2 addon with .gjs component format.

## Installation

### From npm (published)

```bash
npm install ulx-components
# or
yarn add ulx-components
# or
pnpm add ulx-components
```

### Local Development

```json
{
	"dependencies": {
		"ulx-components": "file:../ulx-components"
	}
}
```

### CSS (`dev-releases`)

Built styles (`dev-releases/css/ulx-editor.min.css`) are **included in the published npm package** (`package.json` `files` includes `dev-releases`). They are produced by `npm run ulxEditor` in the `ulx/` package (see `ulx/package.json`), and the root package runs that before Rollup via **`npm run build`** and the **`prepare`** lifecycle (runs during `npm pack`, `npm publish`, and `npm install` in this repo). The minified file is gitignored; run **`npm install` inside `ulx/`** before packing or publishing so LESS, `glob`, and `ULS_V2.0` resolve.

Host apps should load this as a separate stylesheet (not via Ember `vendor.css`), for example by copying `dev-releases/css/ulx-editor.min.css` into their static `/styles/` output.

## Usage

### JavaScript Import

```javascript
import { UlsTest } from 'ulx-components';
```

### Template Usage

```handlebars
<!-- Simple, no namespace -->
<UlsTest />

<!-- OR with namespace -->
<Elements::UlsTest />
```

### In .gjs Components

```javascript
import Component from '@glimmer/component';
import { UlsTest } from 'ulx-components';

export default class MyPage extends Component {
  <template>
    <div>
      <h1>My Page</h1>
      <UlsTest />
    </div>
  </template>
}
```

## Folder Structure

```
src/
├── index.js            # Main entry point
├── components/
│   ├── ulx-test.gjs    # Re-export (enables <UlsTest />)
│   ├── elements/       # Element components
│   │   └── ulx-test/   # Actual component implementation
│   ├── collections/    # Collection components
│   ├── modules/        # Module components
│   └── common/         # Common shared components
├── helpers/            # Template helpers
├── modifiers/          # Element modifiers
├── services/           # Ember services
└── utils/              # Utility functions
```

## Component Naming Convention

### Root Level Components (No Namespace)

- File: `src/components/ulx-test.gjs` (re-export)
- Implementation: `src/components/elements/ulx-test/index.gjs`
- Usage: `<UlsTest />`

### Namespaced Components

- File: `src/components/elements/my-button/index.gjs`
- Usage: `<Elements::MyButton />`

**Benefits:**

- ✅ Keep organized structure (components in category folders)
- ✅ Flexible usage (with or without namespace)
- ✅ Clean imports: `import { UlsTest } from 'ulx-components'`

## Development

### Setup

```bash
npm install
```

### Building

```bash
npm run build
```

### Watching for changes

```bash
npm start  # Watches and rebuilds automatically
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## Development Workflow

**Terminal 1 (Addon):**

```bash
cd ulx-components
npm start  # Keep running
```

**Terminal 2 (Your App):**

```bash
cd your-ember-app
ember serve
```

Changes in the addon will automatically rebuild and be available after refresh.

## Adding New Components

### 1. Create the component

```
src/components/elements/ulx-button/index.gjs
```

### 2. Add re-export (for non-namespaced usage)

```
src/components/ulx-button.gjs
```

Content:

```javascript
export { default } from './elements/ulx-button/index.gjs';
```

### 3. Export in main entry

```javascript
// src/index.js
export { default as UlsButton } from './components/ulx-button.gjs';
```

### 4. Usage

```handlebars
<UlsButton />
<Elements::UlsButton />
```

## License

MIT
