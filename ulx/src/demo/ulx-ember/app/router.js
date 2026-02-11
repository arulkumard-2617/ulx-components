import EmberRouter from '@ember/routing/router';
import config from 'ulx-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('walkthrough');

  this.route('foundation', function () {
    this.route('typography');
    this.route('colors');
  });

  this.route('components', function () {
    this.route('collections', function () {
      this.route('tab-menu');
      this.route('segment');
      this.route('option-segment');
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
      this.route('avatar');
      this.route('button');
      this.route('progressbar');
      this.route('progressspinner');
      this.route('tristate-checkbox');
});
    this.route('modules', function () {
      this.route('toast');
      this.route('tieredmenu');
      this.route('popup');
});
  });

  this.route('utilities', function () {
    this.route('index', { path: '/' });
    this.route('space');
    this.route('gap');
    this.route('grid');
    this.route('flex');
    this.route('display');
    this.route('position');
    this.route('size');
    this.route('cursor');
    this.route('text-align');
    this.route('text-transform');
    this.route('text-decoration');
    this.route('vertical-align');
    this.route('float');
    this.route('clear');
    this.route('word-break');
    this.route('visibility');
    this.route('overflow');
    this.route('color');
    this.route('hover');
    this.route('line-clamp');
    this.route('border');
    this.route('shadow');
    this.route('z-index');
    this.route('opacity');
    this.route('filter');
    this.route('object-fit');
    this.route('user-select');
    this.route('pointer-events');
    this.route('white-space');
  });
});
