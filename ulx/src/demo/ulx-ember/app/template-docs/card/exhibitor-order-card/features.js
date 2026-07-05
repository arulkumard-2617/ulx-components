import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { ExhibitorOrderCardDemo, ExhibitorOrderCardSource } from './imports';

export const ExhibitorOrderCardFeatureItems = [
  {
    id: 'exhibitor-order-card',
    sectionNav: 'Exhibitor Order Card',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Two-row exhibitor and order summary card with a tinted header band (<code>bg-primaryLayer1</code>), column dividers, company image, booth details, and a footer row for order total, financial breakdown, and source.'
      }
    },
    demo: {
      component: ExhibitorOrderCardDemo,
      props: {
        source: ExhibitorOrderCardSource,
        snippetName: 'exhibitor-order-card',
        language: 'handlebars'
      }
    }
  }
];
