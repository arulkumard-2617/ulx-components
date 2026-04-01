import { t } from 'ulx-components';
import RichText from '../components/doc-shared/doc-main/rich-text';
import DropdownOverlayOptionsDemo from '../components/Demo/Dropdown/OverlayOptions';
import DropdownOverlayOptionsSource from './demo-sources/dropdown-overlay-options-source';

export const DropdownOverlayFeatureItem = {
  id: 'overlay-options',
  sectionNav: t('lbl.dropdown.overlay.options'),
  sectionDesc: {
    component: RichText,
    props: {
      as: 'span',
      content: t('msg.dropdown.overlay.options.doc')
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
