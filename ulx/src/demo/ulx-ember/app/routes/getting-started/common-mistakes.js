import Route from '@ember/routing/route';

const COMMON_MISTAKES_SECTIONS = [
  { id: 'common-mistakes-list', sectionNav: 'Common mistakes' },
  { id: 'common-mistakes-correct-stylesheet-path', sectionNav: 'Correct stylesheet path' },
  { id: 'common-mistakes-required-theme-classes', sectionNav: 'Required theme classes' },
];

export default class GettingStartedCommonMistakesRoute extends Route {
  model() {
    return { sections: COMMON_MISTAKES_SECTIONS };
  }
}
