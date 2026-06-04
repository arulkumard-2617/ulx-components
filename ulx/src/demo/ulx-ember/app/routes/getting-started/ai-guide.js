import Route from '@ember/routing/route';

const AI_GUIDE_SECTIONS = [
  { id: 'ai-guide-purpose', sectionNav: 'Purpose' },
  { id: 'ai-guide-read-order', sectionNav: 'How to read a component page' },
  { id: 'ai-guide-urls', sectionNav: 'URLs and static JSON' },
  { id: 'ai-guide-families', sectionNav: 'Component families' },
  { id: 'ai-guide-prompt', sectionNav: 'Example prompt' },
];

export default class GettingStartedAiGuideRoute extends Route {
  model() {
    return { sections: AI_GUIDE_SECTIONS };
  }
}
