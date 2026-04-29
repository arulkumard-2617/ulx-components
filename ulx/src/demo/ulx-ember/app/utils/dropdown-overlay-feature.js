import { t } from 'ulx-components';
import RichText from '../components/doc-shared/doc-main/rich-text';
import DropdownOverlayOptionsDemo from '../components/Demo/Dropdown/OverlayOptions';
import DropdownOverlayOptionsSource from './demo-sources/dropdown-overlay-options-source';

export const DropdownOverlayFeatureItem = {
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
    component: DropdownOverlayOptionsDemo,
    props: {
      source: DropdownOverlayOptionsSource,
      snippetName: 'overlay-options',
      language: 'handlebars'
    }
  }
};

export function withDropdownOverlayFeature(featureItems = []) {
  const items = [...featureItems];
  const accessibilityIndex = items.findIndex((item) => item.id === 'accessibility');

  if (accessibilityIndex >= 0) {
    items.splice(accessibilityIndex, 0, DropdownOverlayFeatureItem);
    return items;
  }

  items.push(DropdownOverlayFeatureItem);
  return items;
}
