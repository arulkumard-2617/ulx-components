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
          'Order summary table with checkbox selection, stacked cell typography, sortable date and amount columns, and pill tags for payment and order status.'
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
