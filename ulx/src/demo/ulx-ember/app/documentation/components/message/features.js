// ==========================================================================
// Message Feature Items
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../components/doc-shared/doc-main/rich-text';
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
    "Import",
    'The <code>import</code> property is used to import the <code>UlxMessage</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    "Basic",
    "Inline message with variant and optional icon.",
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'variant',
    "Variant",
    "Message variant (info, success, warn, error).",
    VariantDemo,
    VariantSource,
    'variant'
  ),
  section(
    'form',
    "Form",
    "Message used in form validation context.",
    FormDemo,
    FormSource,
    'form'
  ),
  section(
    'template',
    "Template",
    "Custom content via default block.",
    TemplateDemo,
    TemplateSource,
    'template'
  ),
  section(
    'accessibility',
    "Accessibility",
    'Message uses role="alert", aria-live="polite", aria-atomic="true".',
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function MessageFeatures() {
  return MessageFeatureItems;
}
