import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { PageViewDemo, PageViewSource } from './imports';

export const PageViewFeatureItems = [
  {
    id: 'page-view',
    sectionNav: 'Page View',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Two-column page layout with an expandable left navigation panel (<code>page-left-panel expanded</code>), scrollable content area, and a full-size modal opened from the content header.'
      }
    },
    demo: {
      component: PageViewDemo,
      props: {
        source: PageViewSource,
        snippetName: 'page-view',
        language: 'handlebars'
      }
    }
  }
];
