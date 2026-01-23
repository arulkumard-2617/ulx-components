# uls-components

Ember v2 addon with .gjs component format.

## Installation

### From npm (published)
```bash
npm install uls-components
# or
yarn add uls-components
# or
pnpm add uls-components
```

### Local Development
```json
{
  "dependencies": {
    "uls-components": "file:../uls-components"
  }
}
```

## Usage

### JavaScript Import
```javascript
import { UlsTest } from 'uls-components';
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
import { UlsTest } from 'uls-components';

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
│   ├── uls-test.gjs    # Re-export (enables <UlsTest />)
│   ├── elements/       # Element components
│   │   └── uls-test/   # Actual component implementation
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
- File: `src/components/uls-test.gjs` (re-export)
- Implementation: `src/components/elements/uls-test/index.gjs`
- Usage: `<UlsTest />`

### Namespaced Components
- File: `src/components/elements/my-button/index.gjs`
- Usage: `<Elements::MyButton />`

**Benefits:**
- ✅ Keep organized structure (components in category folders)
- ✅ Flexible usage (with or without namespace)
- ✅ Clean imports: `import { UlsTest } from 'uls-components'`

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
cd uls-components
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
src/components/elements/uls-button/index.gjs
```

### 2. Add re-export (for non-namespaced usage)
```
src/components/uls-button.gjs
```

Content:
```javascript
export { default } from './elements/uls-button/index.gjs';
```

### 3. Export in main entry
```javascript
// src/index.js
export { default as UlsButton } from './components/uls-button.gjs';
```

### 4. Usage
```handlebars
<UlsButton />
<Elements::UlsButton />
```

## License

MIT
