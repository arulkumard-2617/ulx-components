// ==========================================================================
// Messages Feature Items
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  VariantDemo,
  DynamicDemo,
  ClosableDemo,
  StickyDemo,
  CustomIconDemo,
  TemplateDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  VariantSource,
  DynamicSource,
  ClosableSource,
  StickySource,
  CustomIconSource,
  TemplateSource,
  AccessibilitySource,
} from './imports';

const section = (id, sectionNav, content, Demo, Source, snippetName) => ({
  id,
  sectionNav,
  sectionDesc: {
    component: RichText,
    props: { as: 'span', content },
  },
  demo: {
    component: Demo,
    props: {
      source: Source,
      snippetName,
      language: 'handlebars',
    },
  },
});

export const MessagesFeatureItems = [
  section(
    'import',
    t('lbl.doc.section.import'),
    'The <code>import</code> property is used to import the <code>UlxMessages</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    t('lbl.doc.section.basic'),
    t('msg.messages.basic.desc'),
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'variant',
    t('lbl.variant'),
    t('msg.messages.variant.desc'),
    VariantDemo,
    VariantSource,
    'variant'
  ),
  section(
    'dynamic',
    t('lbl.dynamic'),
    t('msg.messages.dynamic.desc'),
    DynamicDemo,
    DynamicSource,
    'dynamic'
  ),
  section(
    'closable',
    t('lbl.closable'),
    t('msg.messages.closable.desc'),
    ClosableDemo,
    ClosableSource,
    'closable'
  ),
  section(
    'sticky',
    t('lbl.sticky'),
    t('msg.messages.sticky.desc'),
    StickyDemo,
    StickySource,
    'sticky'
  ),
  section(
    'custom-icon',
    t('lbl.custom.icon'),
    t('msg.messages.custom.icon.desc'),
    CustomIconDemo,
    CustomIconSource,
    'custom-icon'
  ),
  section(
    'template',
    t('lbl.template'),
    t('msg.messages.template.desc'),
    TemplateDemo,
    TemplateSource,
    'template'
  ),
  section(
    'accessibility',
    t('lbl.doc.section.accessibility'),
    'Messages use role="alert", aria-live="assertive", aria-atomic="true" per message; close button has aria-label.',
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function MessagesFeatures() {
  return MessagesFeatureItems;
}
