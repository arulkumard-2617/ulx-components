'use strict';

module.exports = {
  name: require('./package-addon').name || 'uls-components',

  isDevelopingAddon() {
    return true;
  },

  included(app) {
    this._super.included.apply(this, arguments);
  }
};
