import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { CertificateTipNotifyDemo, CertificateTipNotifySource } from './imports';

export const CertificateTipNotifyFeatureItems = [
  {
    id: 'certificate-tip-notify',
    sectionNav: 'Certificate Tip Notify',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Inline contextual tip card using <code>.ulx-message.tip-notify</code>. Renders as a soft-gradient block with a bulb icon for short helper hints next to side-panel sections.'
      }
    },
    demo: {
      component: CertificateTipNotifyDemo,
      props: {
        source: CertificateTipNotifySource,
        snippetName: 'certificate-tip-notify',
        language: 'handlebars'
      }
    }
  }
];
