// ==========================================================================
// Table Template Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  OfflinePaymentDemo,
  OrderSummaryDemo,
  PriceBreakdownDemo,
  QueriesDemo,
  AutomatedTriggersDemo,
  VerticalTableDemo,
  OfflinePaymentSource,
  OrderSummarySource,
  PriceBreakdownSource,
  QueriesSource,
  AutomatedTriggersSource,
  VerticalTableSource
} from './imports';

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

export const TableFeatureItems = [
  section(
    'offline-payment',
    'Offline Payment',
    'Offline payment setup table with orange pill tags for payment mode, bold country codes, and a status column combining a green toggle with an Active pill tag. Uses <code>@scrollable</code> for horizontal overflow.',
    OfflinePaymentDemo,
    OfflinePaymentSource,
    'offline-payment'
  ),
  section(
    'order-summary',
    'Order Summary',
    'Order summary table with checkbox selection, stacked cell typography, sortable date and amount columns, and pill tags for payment and order status.',
    OrderSummaryDemo,
    OrderSummarySource,
    'order-summary'
  ),
  section(
    'price-breakdown',
    'Price Breakdown',
    'Semantic <code>&lt;table&gt;</code> with <code>ulx-price-breakdown</code> styles for booth tiers, line items, category bands, and footer totals. Click <strong>Edit Order</strong> to switch to the editable layout (<strong>Save</strong> / <strong>Cancel</strong>, inline edit icons, and tinted premium/add-on sections). Enable <strong>Add item level discount</strong> to add a per-line <strong>Discount</strong> column with input groups and discounted <strong>Price</strong> values.',
    PriceBreakdownDemo,
    PriceBreakdownSource,
    'price-breakdown'
  ),
  section(
    'queries',
    'Queries',
    'Queries table with checkbox selection, bold first name and email columns, a raised-on date separated by a light-grey dot badge, and pill tags with a leading dot for status.',
    QueriesDemo,
    QueriesSource,
    'queries'
  ),
  section(
    'automated-triggers',
    'Automated Triggers',
    '<code>UlxTable</code> with custom body cells (<code>UlxToggle</code>, <code>UlxTag</code>, <code>UlxSplitButton</code>) for trigger management. Demonstrates row-level <code>alert-row</code> banner via <code>UlxMessage.tr-notify</code> using <code>@rowClassName</code>, plus a search input and <strong>Create Trigger</strong> action above the table.',
    AutomatedTriggersDemo,
    AutomatedTriggersSource,
    'automated-triggers'
  ),
  section(
    'vertical-table',
    'Vertical Table',
    '<code>UlxTable</code> with <code>@layout="vertical"</code> and a single data record for label-and-value rows. Add <code>@customClass="variant-yellow"</code> for the yellow <code>datatable-vertical-row-header</code> label column. Use column <code>body</code> templates for numeric values or included-state icons.',
    VerticalTableDemo,
    VerticalTableSource,
    'vertical-table'
  )
];

export default function TableFeatures() {
  return TableFeatureItems;
}
