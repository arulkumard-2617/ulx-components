'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    // Add options here
    'ember-template-imports': {
      // Enable .gjs component format
    },
  });

  return app.toTree();
};
