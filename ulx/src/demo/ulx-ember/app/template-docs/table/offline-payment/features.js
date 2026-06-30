import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { OfflinePaymentDemo, OfflinePaymentSource } from './imports';

export const OfflinePaymentFeatureItems = [
  {
    id: 'offline-payment',
    sectionNav: 'Offline Payment',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Offline payment setup table with orange pill tags for payment mode, bold country codes, and a status column combining a green toggle with an Active pill tag. Uses <code>@scrollable</code> for horizontal overflow.'
      }
    },
    demo: {
      component: OfflinePaymentDemo,
      props: {
        source: OfflinePaymentSource,
        snippetName: 'offline-payment',
        language: 'handlebars'
      }
    }
  }
];
