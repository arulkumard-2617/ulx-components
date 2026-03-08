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
  ImportSource,
  BasicSource,
  VariantSource,
  DynamicSource,
  ClosableSource,
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
];

export default function MessagesFeatures() {
  return MessagesFeatureItems;
}
