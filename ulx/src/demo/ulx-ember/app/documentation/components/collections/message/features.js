// ==========================================================================
// Message Feature Items
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  VariantDemo,
  FormDemo,
  TemplateDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  VariantSource,
  FormSource,
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

export const MessageFeatureItems = [
  section(
    'import',
    t('lbl.doc.section.import'),
    'The <code>import</code> property is used to import the <code>UlxMessage</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    t('lbl.doc.section.basic'),
    t('msg.message.basic.desc'),
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'variant',
    t('lbl.variant'),
    t('msg.message.variant.desc'),
    VariantDemo,
    VariantSource,
    'variant'
  ),
  section(
    'form',
    t('lbl.form'),
    t('msg.message.form.desc'),
    FormDemo,
    FormSource,
    'form'
  ),
  section(
    'template',
    t('lbl.template'),
    t('msg.message.template.desc'),
    TemplateDemo,
    TemplateSource,
    'template'
  ),
  section(
    'accessibility',
    t('lbl.doc.section.accessibility'),
    'Message uses role="alert", aria-live="polite", aria-atomic="true".',
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function MessageFeatures() {
  return MessageFeatureItems;
}
