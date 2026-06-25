import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { OrderSummaryDemo, OrderSummarySource } from './imports';

export const OrderSummaryFeatureItems = [
  {
    id: 'order-summary',
    sectionNav: 'Order Summary',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Tinted summary cards arranged as horizontal segments — each tile pairs a color-coded icon circle with a label, headline metric, and supporting caption. Uses utility classes (<code>bg-*Layer1</code>, <code>border-*-soft</code>, <code>fg-*</code>) plus <code>UlxIcon</code> for the leading and info icons.'
      }
    },
    demo: {
      component: OrderSummaryDemo,
      props: {
        source: OrderSummarySource,
        snippetName: 'order-summary',
        language: 'handlebars'
      }
    }
  }
];
