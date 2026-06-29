import { SessionCardFeatureItems } from './session-card/features';
import { LinkedSessionsFeatureItems } from './linked-sessions/features';
import { DetailsSummaryCardFeatureItems } from './details-summary-card/features';

export const CardFeatureItems = [
  ...SessionCardFeatureItems,
  ...LinkedSessionsFeatureItems,
  ...DetailsSummaryCardFeatureItems
];
