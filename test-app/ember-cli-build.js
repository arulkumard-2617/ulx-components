'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Minimal host for ulx-components rendering tests only.
  });

  return app.toTree();
};
