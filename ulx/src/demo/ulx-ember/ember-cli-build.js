'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const path = require('path');

module.exports = function (defaults) {
  const projectRoot = __dirname;
  const app = new EmberApp(defaults, {
    emberData: {
      deprecations: {
        // New projects can safely leave this deprecation disabled.
        // If upgrading, to opt-into the deprecated behavior, set this to true and then follow:
        // https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object
        // before upgrading to Ember Data 6.0
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false
      }
    },

    // Configure ember-code-snippet for .gjs files with Handlebars comments
    'ember-code-snippet': {
      snippetExtensions: [
        'js',
        'ts',
        'coffee',
        'html',
        'hbs',
        'md',
        'css',
        'sass',
        'scss',
        'less',
        'emblem',
        'yaml',
        'gjs'
      ],
      snippetSearchPaths: ['app'],
      // Custom regex to match Handlebars comment syntax: {{! BEGIN-SNIPPET name }}
      snippetRegexes: [
        {
          begin: /\{\{!\s*BEGIN-SNIPPET\s+(\S+)\s*\}\}/,
          end: /\{\{!\s*END-SNIPPET\s*\}\}/
        }
      ],
      // Include file extension in snippet names (default: true)
      // So "tabmenu-basic" becomes "tabmenu-basic.gjs"
      includeFileExtensionInSnippetNames: true
    },

    'ember-prism': {
      theme: 'okaidia', // or 'twilight', 'okaidia', 'tomorrow'
      plugins: ['line-numbers']
    },
    // Add options here
    lessOptions: {
      paths: [
        path.resolve(__dirname, '../../../../styles'),
        path.resolve(__dirname, '../../../node_modules'),
        path.resolve(__dirname, '../../../../node_modules')
      ]
    },
    autoImport: {
      webpack: {
        resolve: {
          alias: {
            react: path.resolve(projectRoot, 'node_modules/react'),
            'react-dom': path.resolve(projectRoot, 'node_modules/react-dom')
          }
        }
      }
    }
  });

  app.import('node_modules/sortablejs/Sortable.js');
  app.import('node_modules/flatpickr/dist/flatpickr.min.css');
  app.import('node_modules/quill/dist/quill.snow.css');

  return app.toTree();
};
