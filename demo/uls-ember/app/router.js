import EmberRouter from '@ember/routing/router';
import config from 'uls-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('walkthrough', { path: '/walkthrough' });
  
  this.route('foundation', { path: '/foundation' }, function () {
    this.route('typography', { path: '/typography' });
    this.route('colors', { path: '/colors' });
  });
});
