import { SessionCardFeatureItems } from './session-card/features';
import { LinkedSessionsFeatureItems } from './linked-sessions/features';
import { DetailsSummaryCardFeatureItems } from './details-summary-card/features';
import { ExhibitorOrderCardFeatureItems } from './exhibitor-order-card/features';
import { ExhibitorAddonCardFeatureItems } from './exhibitor-addon-card/features';

export const CardFeatureItems = [
  ...SessionCardFeatureItems,
  ...LinkedSessionsFeatureItems,
  ...DetailsSummaryCardFeatureItems,
  ...ExhibitorOrderCardFeatureItems,
  ...ExhibitorAddonCardFeatureItems
];
