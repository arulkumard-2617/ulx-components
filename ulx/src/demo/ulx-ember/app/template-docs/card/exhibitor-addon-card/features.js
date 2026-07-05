import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { ExhibitorAddonCardDemo, ExhibitorAddonCardSource } from './imports';

export const ExhibitorAddonCardFeatureItems = [
  {
    id: 'exhibitor-addon-card',
    sectionNav: 'Exhibitor Add-on Card',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Promotional add-on card with a tinted header band (<code>bg-primaryLayer1</code>), plugin artwork, inline <code>More Info</code> text button, and a footer row for applied status and <code>Revoke Add-On</code> link action.'
      }
    },
    demo: {
      component: ExhibitorAddonCardDemo,
      props: {
        source: ExhibitorAddonCardSource,
        snippetName: 'exhibitor-addon-card',
        language: 'handlebars'
      }
    }
  }
];
