import Route from '@ember/routing/route';

const QUICK_START_SECTIONS = [
  { id: 'quick-start-install-package', sectionNav: 'Install the package' },
  { id: 'quick-start-load-stylesheet', sectionNav: 'Load the stylesheet' },
  { id: 'quick-start-apply-theme-classes', sectionNav: 'Apply theme classes' },
  { id: 'quick-start-use-your-first-component', sectionNav: 'Use your first component' },
  { id: 'quick-start-installation', sectionNav: 'Installation' },
  { id: 'quick-start-component-imports', sectionNav: 'Component imports' },
  { id: 'quick-start-theme-setup', sectionNav: 'Theme setup' },
];

export default class GettingStartedQuickStartRoute extends Route {
  model() {
    return { sections: QUICK_START_SECTIONS };
  }
}
