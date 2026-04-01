import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ulx-ember/config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import { VERSION } from '@ember/version';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
  // Expose Ember version and app for console debugging (development only)
  if (typeof window !== 'undefined') {
    window.__EMBER_VERSION__ = VERSION;
  }
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
