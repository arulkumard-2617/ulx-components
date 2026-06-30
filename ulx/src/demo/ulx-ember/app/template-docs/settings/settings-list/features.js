import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { SettingsListDemo, SettingsListSource } from './imports';

export const SettingsListFeatureItems = [
  {
    id: 'settings-list',
    sectionNav: 'Settings List',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Exhibitor and ticket settings using <code>ulx-settings</code>: card-based primary contact with badge and link action, description rows with edit links, toggles in <code>settings-actions</code>, and nested controls in <code>settings-body</code> (radios, number input, and dropdown).'
      }
    },
    demo: {
      component: SettingsListDemo,
      props: {
        source: SettingsListSource,
        snippetName: 'settings-list',
        language: 'handlebars'
      }
    }
  }
];
