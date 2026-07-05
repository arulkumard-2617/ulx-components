// ==========================================================================
// Page Template Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { PageViewDemo, PageViewSource } from './imports';

const section = (id, sectionNav, content, Demo, Source, snippetName) => ({
  id,
  sectionNav,
  sectionDesc: {
    component: RichText,
    props: { as: 'span', content }
  },
  demo: {
    component: Demo,
    props: {
      source: Source,
      snippetName,
      language: 'handlebars'
    }
  }
});

export const PageFeatureItems = [
  section(
    'page-view',
    'Page View',
    'Two-column page layout with an expandable left navigation panel (<code>page-left-panel expanded</code>), scrollable content area, and a full-size modal opened from the content header.',
    PageViewDemo,
    PageViewSource,
    'page-view'
  )
];

export default function PageFeatures() {
  return PageFeatureItems;
}
