import Route from '@ember/routing/route';

const WALKTHROUGH_SECTIONS = [
  { id: 'walkthrough-prerequisites', sectionNav: 'Prerequisites' },
  { id: 'walkthrough-run-docs', sectionNav: 'Run the documentation' },
  { id: 'walkthrough-create-demo-page', sectionNav: 'Create demo-page' },
  { id: 'walkthrough-delete-demo-page', sectionNav: 'Delete demo-page' },
  { id: 'walkthrough-create-variations', sectionNav: 'Create variations' },
  { id: 'walkthrough-delete-variations', sectionNav: 'Delete variations' },
  { id: 'walkthrough-next-steps', sectionNav: 'Next steps' },
];

export default class WalkthroughRoute extends Route {
  model() {
    return { sections: WALKTHROUGH_SECTIONS };
  }
}
