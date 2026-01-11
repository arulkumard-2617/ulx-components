# ULS Components - Ember Addon

This directory contains the Ember addon structure for ULS Components.

## Structure

```
src/components/
├── addon/                    # Main addon code
│   ├── components/          # Components (Atomic Design)
│   │   ├── -private/       # Internal components (not exported)
│   │   ├── elements/       # Atoms (basic components)
│   │   ├── collections/    # Molecules (composed components)
│   │   └── modules/        # Organisms (complex components)
│   ├── modifiers/         # DOM modifiers
│   ├── helpers/           # Template helpers
│   ├── services/          # Services
│   └── utils/             # Pure JS utilities
│
├── app-addon/              # Re-exports for app compatibility
│   ├── components/
│   ├── modifiers/
│   ├── helpers/
│   └── services/
│
├── tests-addon/            # Test files
│   └── dummy/             # Test app
│
├── index-addon.js          # Addon entry point
├── ember-cli-build-addon.js # Build configuration
└── package-addon.json      # Addon package.json
```

## Component Authoring

Create components in the appropriate Atomic Design category:

- **Elements** (`addon/components/elements/`) - Basic building blocks
  - Example: `uls-button.gjs`, `uls-input-text.gjs`

- **Collections** (`addon/components/collections/`) - Composed components
  - Example: `uls-card.gjs`, `uls-accordion/`

- **Modules** (`addon/components/modules/`) - Complex components
  - Example: `uls-dialog/`, `uls-data-table/`

- **Private** (`addon/components/-private/`) - Internal components
  - Example: `_uls-input-wrapper.gjs`

## Usage

Components are automatically available to consuming Ember apps:

```handlebars
<UlsButton @variant="primary">Click Me</UlsButton>
<UlsInputText @value={{this.name}} />
```

