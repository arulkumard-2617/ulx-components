// ==========================================================================
// Card Feature Items (Collections / Panel)
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  AdvancedDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  AdvancedSource,
  AccessibilitySource,
} from '../../elements/card/imports';

const section = (id, sectionNav, content, Demo, Source, snippetName, language = 'handlebars') => ({
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
      language,
    },
  },
});

export const CardFeatureItems = [
  section(
    'import',
    t('lbl.doc.section.import'),
    'The <code>import</code> snippet shows how to import the <code>UlxCard</code> component.',
    null,
    ImportSource,
    'import',
    'jsx'
  ),
  section(
    'basic',
    t('lbl.doc.section.basic'),
    t('msg.card.basic.desc'),
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'advanced',
    t('lbl.advanced'),
    t('msg.card.advanced.desc'),
    AdvancedDemo,
    AdvancedSource,
    'advanced'
  ),
  section(
    'accessibility',
    t('lbl.doc.section.accessibility'),
    t('msg.card.accessibility.desc'),
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function CardFeatures() {
  return CardFeatureItems;
}

