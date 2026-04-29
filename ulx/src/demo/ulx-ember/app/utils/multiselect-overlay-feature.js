import { t } from 'ulx-components';
import RichText from '../components/doc-shared/doc-main/rich-text';
import MultiselectOverlayOptionsDemo from '../components/Demo/Multiselect/OverlayOptions';
import MultiselectOverlayOptionsSource from './demo-sources/multiselect-overlay-options-source';

export const MultiselectOverlayFeatureItem = {
  id: 'overlay-options',
  sectionNav: "Overlay Options",
  sectionDesc: {
    component: RichText,
    props: {
      as: 'span',
      content: "Use <code>@context</code> to choose where the panel is rendered. Combine <code>@boundary</code> and <code>@scrollContext</code> to keep the overlay inside a scrollable container and reposition it while that container scrolls."
    }
  },
  demo: {
    component: MultiselectOverlayOptionsDemo,
    props: {
      source: MultiselectOverlayOptionsSource,
      snippetName: 'overlay-options',
      language: 'handlebars'
    }
  }
};

export function withMultiselectOverlayFeature(featureItems = []) {
  const items = [...featureItems];
  const accessibilityIndex = items.findIndex((item) => item.id === 'accessibility');

  if (accessibilityIndex >= 0) {
    items.splice(accessibilityIndex, 0, MultiselectOverlayFeatureItem);
    return items;
  }

  items.push(MultiselectOverlayFeatureItem);
  return items;
}
