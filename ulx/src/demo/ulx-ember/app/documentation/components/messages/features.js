// ==========================================================================
// Messages Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  VariantDemo,
  DynamicDemo,
  ClosableDemo,
  WithBadgeAnnouncementDemo,
  WithBadgeAnnouncementSuccessDemo,
  MessageWithTagDemo,
  ImportSource,
  BasicSource,
  VariantSource,
  DynamicSource,
  ClosableSource,
  WithBadgeAnnouncementSource,
  WithBadgeAnnouncementSuccessSource,
  MessageWithTagSource
} from './imports';

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

export const MessagesFeatureItems = [
  section(
    'import',
    'Import',
    'The <code>import</code> property is used to import the <code>UlxMessages</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    'Basic',
    'Messages container with a list of messages.',
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'variant',
    'Variant',
    'Each message can have a variant.',
    VariantDemo,
    VariantSource,
    'variant'
  ),
  section(
    'dynamic',
    'Dynamic',
    'Add or remove messages dynamically.',
    DynamicDemo,
    DynamicSource,
    'dynamic'
  ),
  section(
    'closable',
    'Closable',
    'Messages can be closable.',
    ClosableDemo,
    ClosableSource,
    'closable'
  ),
  section(
    'with-badge-announcement',
    'With Badge Announcement',
    'Gold-toned announcement banner with a clipped badge label and shimmer animation. Combine <code>with-badge</code> for the diagonal badge layout and <code>announcement</code> for the warm gold background.',
    WithBadgeAnnouncementDemo,
    WithBadgeAnnouncementSource,
    'with-badge-announcement'
  ),
  section(
    'with-badge-announcement-success',
    'With Badge Announcement Success',
    'Green-toned announcement banner for positive messages. Use <code>announcement-success</code> alongside <code>with-badge</code> for the success variant.',
    WithBadgeAnnouncementSuccessDemo,
    WithBadgeAnnouncementSuccessSource,
    'with-badge-announcement-success'
  ),
  section(
    'message-with-tag',
    'Message With Tag',
    'Promotional banner with a <code>running-color</code> <code>with-star</code> tag, illustration via <code>leftItem</code>, action buttons, and a gradient card sidebar.',
    MessageWithTagDemo,
    MessageWithTagSource,
    'message-with-tag'
  )
];

export default function MessagesFeatures() {
  return MessagesFeatureItems;
}
