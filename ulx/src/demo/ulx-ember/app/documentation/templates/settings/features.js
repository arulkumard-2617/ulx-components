// ==========================================================================
// Settings Template Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { SettingsListDemo, SettingsListSource } from './imports';

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

export const SettingsFeatureItems = [
  section(
    'settings-list',
    'Settings List',
    'Exhibitor and ticket settings using <code>ulx-settings</code>: card-based primary contact with badge and link action, description rows with edit links, toggles in <code>settings-actions</code>, and nested controls in <code>settings-body</code> (radios, number input, and dropdown).',
    SettingsListDemo,
    SettingsListSource,
    'settings-list'
  )
];

export default function SettingsFeatures() {
  return SettingsFeatureItems;
}
