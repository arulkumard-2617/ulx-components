import { t } from 'ulx-components';
import RichText from '../components/common/doc-main/rich-text';
import MultiselectOverlayOptionsDemo from '../components/Demo/Multiselect/OverlayOptions';
import MultiselectOverlayOptionsSource from './demo-sources/multiselect-overlay-options-source';

export const MultiselectOverlayFeatureItem = {
  id: 'overlay-options',
  sectionNav: t('lbl.dropdown.overlay.options'),
  sectionDesc: {
    component: RichText,
    props: {
      as: 'span',
      content: t('msg.dropdown.overlay.options.doc'),
    },
  },
  demo: {
    component: MultiselectOverlayOptionsDemo,
    props: {
      source: MultiselectOverlayOptionsSource,
      snippetName: 'overlay-options',
      language: 'handlebars',
    },
  },
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
