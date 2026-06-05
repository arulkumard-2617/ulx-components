import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { PriceBreakdownDemo, PriceBreakdownSource } from './imports';

export const PriceBreakdownFeatureItems = [
  {
    id: 'price-breakdown',
    sectionNav: 'Price Breakdown',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Semantic <code>&lt;table&gt;</code> with <code>ulx-price-breakdown</code> styles for booth tiers, line items, category bands, and footer totals. Click <strong>Edit Order</strong> to switch to the editable layout (<strong>Save</strong> / <strong>Cancel</strong>, inline edit icons, and tinted premium/add-on sections). Enable <strong>Add item level discount</strong> to add a per-line <strong>Discount</strong> column with input groups and discounted <strong>Price</strong> values.'
      }
    },
    demo: {
      component: PriceBreakdownDemo,
      props: {
        source: PriceBreakdownSource,
        snippetName: 'price-breakdown',
        language: 'handlebars'
      }
    }
  }
];
