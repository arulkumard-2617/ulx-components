# Ember Addon Structure - src/components/

## ✅ Complete Folder Structure

```
src/components/
├── addon/                          # Main addon code
│   ├── components/                 # Components (Atomic Design)
│   │   ├── -private/              # Internal components (not exported)
│   │   ├── elements/              # Atoms (basic components)
│   │   ├── collections/           # Molecules (composed components)
│   │   └── modules/               # Organisms (complex components)
│   ├── modifiers/                 # DOM modifiers
│   ├── helpers/                   # Template helpers
│   ├── services/                  # Services
│   ├── utils/                     # Pure JS utilities
│   └── index.js                   # Addon metadata
│
├── app-addon/                      # Re-exports for app compatibility
│   ├── components/
│   ├── modifiers/
│   ├── helpers/
│   └── services/
│
├── tests-addon/                    # Test files
│   ├── dummy/                     # Test app
│   │   ├── app/
│   │   └── config/
│   ├── integration/
│   └── unit/
│
├── index-addon.js                  # Addon entry point
├── ember-cli-build-addon.js       # Build configuration
├── package-addon.json              # Addon package.json
└── README.md                       # This file
```

## 📦 Atomic Design Categories

| Category | Path | Description | Example |
|----------|------|-------------|---------|
| **Elements** | `addon/components/elements/` | Atoms (basic) | `uls-button.gjs` |
| **Collections** | `addon/components/collections/` | Molecules (composed) | `uls-card.gjs` |
| **Modules** | `addon/components/modules/` | Organisms (complex) | `uls-dialog/` |
| **Private** | `addon/components/-private/` | Internal (not exported) | `_uls-wrapper.gjs` |

## 🎯 Component Authoring

### Create Components Here:

**Elements (Atoms):**
```
addon/components/elements/uls-button.gjs
addon/components/elements/uls-input-text.gjs
addon/components/elements/uls-icon.gjs
```

**Collections (Molecules):**
```
addon/components/collections/uls-card.gjs
addon/components/collections/uls-accordion/
  ├── index.gjs
  └── item.gjs
```

**Modules (Organisms):**
```
addon/components/modules/uls-dialog/
  ├── index.gjs
  ├── header.gjs
  └── body.gjs
```

**Private (Internal):**
```
addon/components/-private/_uls-input-wrapper.gjs
addon/components/-private/_uls-overlay-backdrop.gjs
```

## 🚀 Usage in Consuming Apps

Components are automatically available:

```handlebars
{{! Elements }}
<UlsButton @variant="primary">Click Me</UlsButton>
<UlsInputText @value={{this.name}} />

{{! Collections }}
<UlsCard @header="Title">Content</UlsCard>

{{! Modules }}
<UlsDialog @isOpen={{this.showDialog}}>
  Dialog content
</UlsDialog>
```

## 📝 Component Rules

- ✅ Use `.gjs` format (GlimmerJS)
- ✅ Follow naming: `uls-{name}.gjs`
- ✅ Private components: `_uls-{name}.gjs` (not exported)
- ✅ Follow `.cursorrules` for coding standards
- ✅ Document all components

## 🔧 Development

This addon structure is ready for component development. All components created in `addon/components/` will be available to consuming Ember applications.

