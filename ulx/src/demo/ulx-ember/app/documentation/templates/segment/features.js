// ==========================================================================
// Segment Template Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { OrderSummaryDemo, OrderSummarySource } from './imports';

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

export const SegmentFeatureItems = [
  section(
    'order-summary',
    'Order Summary',
    'Tinted summary cards arranged as horizontal segments — each tile pairs a color-coded icon circle with a label, headline metric, and supporting caption. Uses utility classes (<code>bg-*Layer1</code>, <code>border-*-soft</code>, <code>fg-*</code>) plus <code>UlxIcon</code> for the leading and info icons.',
    OrderSummaryDemo,
    OrderSummarySource,
    'order-summary'
  )
];

export default function SegmentFeatures() {
  return SegmentFeatureItems;
}
