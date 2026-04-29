// ==========================================================================
// Card Feature Items (Collections / Panel)
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  AdvancedDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  AdvancedSource,
  AccessibilitySource,
} from './imports';

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
    "Import",
    'The <code>import</code> snippet shows how to import the <code>UlxCard</code> component.',
    null,
    ImportSource,
    'import',
    'jsx'
  ),
  section(
    'basic',
    "Basic",
    "Card with optional header, title, subtitle, body, and footer content.",
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'advanced',
    "Advanced",
    "Card with custom header and footer based on PrimeReact Card advanced example.",
    AdvancedDemo,
    AdvancedSource,
    'advanced'
  ),
  section(
    'accessibility',
    "Accessibility",
    "Use role=\"region\" with aria-label when the card should be announced as a landmark.",
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function CardFeatures() {
  return CardFeatureItems;
}

