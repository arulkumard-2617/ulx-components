// ==========================================================================
// Message Template Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { CertificateTipNotifyDemo, CertificateTipNotifySource } from './imports';

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

export const MessageFeatureItems = [
  section(
    'certificate-tip-notify',
    'Certificate Tip Notify',
    'Inline contextual tip card using <code>.ulx-message.tip-notify</code>. Renders as a soft-gradient block with a bulb icon for short helper hints next to side-panel sections.',
    CertificateTipNotifyDemo,
    CertificateTipNotifySource,
    'certificate-tip-notify'
  )
];

export default function MessageFeatures() {
  return MessageFeatureItems;
}
