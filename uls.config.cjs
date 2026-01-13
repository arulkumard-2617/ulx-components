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

  // Location for passthrough helpers
  passthroughPath: 'src/scripts/passthrough.js',

  // Demo directories
  demoPrimereactPath: 'src/demo/uls-primereact',
  demoEmberPath: 'demo/uls-ember',
  demoComponentsPath: 'src/components',

  // CSS Purge Configuration
  // Scans HTML files and removes unused CSS classes from uls-<app>.css
  purge: {
    // HTML files to scan for class usage
    htmlFiles: ['**/*.html', 'index.html'],
    
    // Optional: Also scan JS/JSX/TS files (for React/Vue projects)
    sourceDirs: ['src'],
    
    // Additional classes to always keep (regex patterns or strings)
    safelist: []
  }
};
