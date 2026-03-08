import EmberRouter from '@ember/routing/router';
import config from 'ulx-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('walkthrough');

  this.route('components', function () {
    this.route('collections', function () {
      this.route('tab-menu');
      this.route('segment');
      this.route('toolbar');
      this.route('split-button');
      this.route('option-segment');
      this.route('form');
      this.route('accordion');
      this.route('multiselect');
      this.route('timeline');
      this.route('card');
      this.route('message');
      this.route('messages');
    });
    this.route('elements', function () {
      this.route('icon');
      this.route('input');
      this.route('ulx-icon-input');
      this.route('input-group');
      this.route('checkbox');
      this.route('radio');
      this.route('tag');
      this.route('badge');
      this.route('chip');
      this.route('divider');
      this.route('avatar');
      this.route('button');
      this.route('progressbar');
      this.route('progressspinner');
      this.route('tristate-checkbox');
      this.route('toggle');
      this.route('dropdown');
      this.route('select-button');
      this.route('rating');
      this.route('skeleton');
    });
    this.route('modules', function () {
      this.route('data-view');
      this.route('toast');
      this.route('tieredmenu');
      this.route('panel-menu');
      this.route('popup');
      this.route('modal');
      this.route('tooltip');
      this.route('slidepane');
      this.route('steps');
      this.route('paginator');
      this.route('table');
    });
  });

  this.route('utilities', function () {
    this.route('index');
    this.route('utility', { path: ':slug' });
  });
});
