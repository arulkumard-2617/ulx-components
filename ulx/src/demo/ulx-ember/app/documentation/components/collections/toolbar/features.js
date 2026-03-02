// ==========================================================================
// Toolbar Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  CustomDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  CustomSource,
  AccessibilitySource,
} from './imports';

export const ToolbarFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> section shows how to import and use the <code>UlxToolbar</code> component with start, center, and end blocks.',
      },
    },
    demo: {
      component: null,
      props: {
        source: ImportSource,
        snippetName: 'import',
        language: 'jsx',
      },
    },
  },
  {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Basic</code> demo shows a typical toolbar with primary actions on the left, a muted title in the center, and a primary action on the right.',
      },
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: 'basic',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'custom',
    sectionNav: 'Custom',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Custom</code> demo uses named blocks to compose navigation buttons, a search input, and icon-only actions in the toolbar.',
      },
    },
    demo: {
      component: CustomDemo,
      props: {
        source: CustomSource,
        snippetName: 'custom',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'accessibility',
    sectionNav: 'Accessibility',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Accessibility</code> demo shows a text editor toolbar labelled with <code>aria-label</code> and icon-only buttons that expose accessible names.',
      },
    },
    demo: {
      component: AccessibilityDemo,
      props: {
        source: AccessibilitySource,
        snippetName: 'accessibility',
        language: 'handlebars',
      },
    },
  },
];

export default function ToolbarFeatures() {
  return ToolbarFeatureItems;
}

