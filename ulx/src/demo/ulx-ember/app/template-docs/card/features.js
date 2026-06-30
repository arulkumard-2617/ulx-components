import { SessionCardFeatureItems } from './session-card/features';
import { ExhibitorOrderCardFeatureItems } from './exhibitor-order-card/features';
import { ExhibitorAddonCardFeatureItems } from './exhibitor-addon-card/features';

export const CardFeatureItems = [
  ...SessionCardFeatureItems,
  ...ExhibitorOrderCardFeatureItems,
  ...ExhibitorAddonCardFeatureItems
];
