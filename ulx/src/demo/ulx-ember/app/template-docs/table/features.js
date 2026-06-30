import { OfflinePaymentFeatureItems } from './offline-payment/features';
import { OrderSummaryFeatureItems } from './order-summary/features';
import { PriceBreakdownFeatureItems } from './price-breakdown/features';
import { QueriesFeatureItems } from './queries/features';
import { AutomatedTriggersFeatureItems } from './automated-triggers/features';
import { VerticalTableFeatureItems } from './vertical-table/features';

export const TableFeatureItems = [
  ...OfflinePaymentFeatureItems,
  ...OrderSummaryFeatureItems,
  ...PriceBreakdownFeatureItems,
  ...QueriesFeatureItems,
  ...AutomatedTriggersFeatureItems,
  ...VerticalTableFeatureItems
];
