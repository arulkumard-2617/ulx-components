// ==========================================================================
// Slidepane Template Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { ExhibitorRequestDemo, ExhibitorRequestSource } from './imports';

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

export const SlidepaneFeatureItems = [
  section(
    'exhibitor-request',
    'Exhibitor Request',
    'Exhibitor request review pane built with <code>UlxSlidePane</code>, <code>UlxSteps</code>, a summary <code>UlxSegment</code> grid, labeled <code>UlxTabmenu</code>, vertical <code>UlxTable</code> request details, notes with character count, and an activities timeline with managed-by profile.',
    ExhibitorRequestDemo,
    ExhibitorRequestSource,
    'exhibitor-request'
  )
];

export default function SlidepaneFeatures() {
  return SlidepaneFeatureItems;
}
