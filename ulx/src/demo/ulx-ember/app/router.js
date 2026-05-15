import EmberRouter from '@ember/routing/router';
import config from 'ulx-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('getting-started', function () {
    this.route('overview');
    this.route('quick-start');
    this.route('styles-and-theming');
    this.route('common-mistakes');
    this.route('docs-walkthrough');
  });

  this.route('components', function () {
    this.route('action-menu');
    this.route('accordion');
    this.route('avatar');
    this.route('badge');
    this.route('button');
    this.route('card');
    this.route('checkbox');
    this.route('chip');
    this.route('data-view');
    this.route('divider');
    this.route('dropdown');
    this.route('empty-state');
    this.route('fieldset');
    this.route('form');
    this.route('icon');
    this.route('input');
    this.route('chip-input');
    this.route('input-group');
    this.route('message');
    this.route('messages');
    this.route('modal');
    this.route('multiselect');
    this.route('option-segment');
    this.route('paginator');
    this.route('panel-menu');
    this.route('password');
    this.route('date-picker');
    this.route('date-range-picker');
    this.route('time-picker');
    this.route('popup');
    this.route('progressbar');
    this.route('progressspinner');
    this.route('radio');
    this.route('rating');
    this.route('segment');
    this.route('select-button');
    this.route('skeleton');
    this.route('slidepane');
    this.route('slider');
    this.route('sorter');
    this.route('split-button');
    this.route('steps');
    this.route('tab-menu');
    this.route('table');
    this.route('tag');
    this.route('textarea');
    this.route('timeline');
    this.route('tieredmenu');
    this.route('toast');
    this.route('toggle');
    this.route('toolbar');
    this.route('tooltip');
    this.route('tristate-checkbox');
    this.route('rich-text-editor');
    this.route('ulx-icon-input');
    this.route('ulx-image');
  });

  this.route('utilities', function () {
    this.route('index');
    this.route('utility', { path: ':slug' });
  });
});
