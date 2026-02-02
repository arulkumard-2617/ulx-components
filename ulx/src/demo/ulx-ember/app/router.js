import EmberRouter from '@ember/routing/router';
import config from 'ulx-ember/config/environment';

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

  this.route('components', { path: '/components' }, function () {
    this.route('collections', { path: '/collections' }, function () {});
    this.route('elements', { path: '/elements' }, function () {
      this.route('icon', { path: '/icon' });
      this.route('button', { path: '/button' });
      this.route('tieredmenu', { path: '/tieredmenu' });
      this.route('progressbar', { path: '/progressbar' });
      this.route('progressspinner', { path: '/progressspinner' });
    });
    this.route('modules', { path: '/modules' }, function () {
      this.route('toast', { path: '/toast' });
    });
  });

  this.route('utilities', { path: '/utilities' }, function () {
    this.route('index', { path: '/' });
    this.route('space', { path: '/space' });
    this.route('gap', { path: '/gap' });
    this.route('grid', { path: '/grid' });
    this.route('flex', { path: '/flex' });
    this.route('display', { path: '/display' });
    this.route('position', { path: '/position' });
    this.route('size', { path: '/size' });
    this.route('cursor', { path: '/cursor' });
    this.route('text-align', { path: '/text-align' });
    this.route('text-transform', { path: '/text-transform' });
    this.route('text-decoration', { path: '/text-decoration' });
    this.route('vertical-align', { path: '/vertical-align' });
    this.route('float', { path: '/float' });
    this.route('clear', { path: '/clear' });
    this.route('word-break', { path: '/word-break' });
    this.route('visibility', { path: '/visibility' });
    this.route('overflow', { path: '/overflow' });
    this.route('color', { path: '/color' });
    this.route('hover', { path: '/hover' });
    this.route('line-clamp', { path: '/line-clamp' });
    this.route('border', { path: '/border' });
    this.route('shadow', { path: '/shadow' });
    this.route('z-index', { path: '/z-index' });
    this.route('opacity', { path: '/opacity' });
    this.route('filter', { path: '/filter' });
    this.route('object-fit', { path: '/object-fit' });
    this.route('user-select', { path: '/user-select' });
    this.route('pointer-events', { path: '/pointer-events' });
    this.route('white-space', { path: '/white-space' });
  });
});
