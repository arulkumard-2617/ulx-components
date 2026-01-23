/**
 * ULS Generator Config
 * Auto-created via: npm run uls-init
 */
module.exports = {
  // Where your compiled assets live
  srcPath: '',

  // Centralized ULS styles directory
  stylesPath: 'styles/uls',

  // Framework demo scaffolding (primereact | ember)
  framework: 'ember',

  // Default app bundle name used by build + generators when ULS_APP is not set
  defaultApp: 'guls',

  // App bundles to scaffold (each compiles independently)
  // Example: ['default', 'admin', 'portal']
  apps: ['guls'],

  prefix: 'uls-',

  // Location for passthrough helpers
  passthroughPath: 'src/scripts/passthrough.js',

  // Demo directories
  demoPrimereactPath: 'src/demo/uls-primereact',
  demoEmberPath: 'demo/uls-ember',
  demoComponentsPath: 'src/components',
  // Per-app prefix configuration (optional)
  // Overrides the global 'prefix' for specific apps
  // Example: { foundation: 'uls-', guls: 'guls-', onair: 'ba-', editor: 'uld-' }
  // If an app is not listed here, it will use the global 'prefix' value above
  prefixes: {
    foundation: 'uld-',
    guls: 'uld-',
    editor: 'uld-'
  },

  // CSS variable prefix configuration (optional)
  // Default: same as 'prefix' if not specified
  // Examples: 'uld-', 'ba-', 'editor-', etc.
  // This prefix will be used for all CSS custom properties (e.g., --uls-primary-color becomes --{cssVarPrefix}primary-color)
  // If not specified, it defaults to the 'prefix' value above
  // cssVarPrefix: 'uls-',

  // Per-app CSS variable prefix configuration (optional)
  // Overrides the global 'cssVarPrefix' for specific apps
  // Example: { foundation: 'uls-', guls: 'guls-', onair: 'ba-', editor: 'uld-' }
  // If an app is not listed here, it will use the global 'cssVarPrefix' or 'prefix' value
  cssVarPrefixes: {
    foundation: 'uld-',
    guls: 'uld-',
    editor: 'uld-'
  },


};
