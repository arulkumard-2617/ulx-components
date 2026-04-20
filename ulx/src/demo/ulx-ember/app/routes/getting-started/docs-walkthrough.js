import Route from '@ember/routing/route';

const DOCS_WALKTHROUGH_SECTIONS = [
  { id: 'docs-walkthrough-prerequisites', sectionNav: 'Prerequisites' },
  { id: 'docs-walkthrough-run-docs', sectionNav: 'Run the documentation' },
  { id: 'docs-walkthrough-create-demo-page', sectionNav: 'Create demo-page' },
  { id: 'docs-walkthrough-delete-demo-page', sectionNav: 'Delete demo-page' },
  { id: 'docs-walkthrough-create-variations', sectionNav: 'Create variations' },
  { id: 'docs-walkthrough-delete-variations', sectionNav: 'Delete variations' },
  { id: 'docs-walkthrough-next-steps', sectionNav: 'Next steps' }
];

export default class GettingStartedDocsWalkthroughRoute extends Route {
  model() {
    return { sections: DOCS_WALKTHROUGH_SECTIONS };
  }
}
