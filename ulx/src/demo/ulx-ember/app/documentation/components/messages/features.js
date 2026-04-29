// ==========================================================================
// Messages Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
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
    "Import",
    'The <code>import</code> property is used to import the <code>UlxMessages</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    "Basic",
    "Messages container with a list of messages.",
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'variant',
    "Variant",
    "Each message can have a variant.",
    VariantDemo,
    VariantSource,
    'variant'
  ),
  section(
    'dynamic',
    "Dynamic",
    "Add or remove messages dynamically.",
    DynamicDemo,
    DynamicSource,
    'dynamic'
  ),
  section(
    'closable',
    "Closable",
    "Messages can be closable.",
    ClosableDemo,
    ClosableSource,
    'closable'
  ),
];

export default function MessagesFeatures() {
  return MessagesFeatureItems;
}
