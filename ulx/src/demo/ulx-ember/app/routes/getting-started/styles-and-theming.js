import Route from '@ember/routing/route';

const STYLES_AND_THEMING_SECTIONS = [
  { id: 'styles-and-theming-foundation', sectionNav: 'Foundation' },
  { id: 'styles-and-theming-themes', sectionNav: 'Themes' },
  { id: 'styles-and-theming-overrides', sectionNav: 'Overrides' },
];

export default class GettingStartedStylesAndThemingRoute extends Route {
  model() {
    return { sections: STYLES_AND_THEMING_SECTIONS };
  }
}
