// ==========================================================================
// Toggle Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  PreselectionDemo,
  InvalidDemo,
  DisabledDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  PreselectionSource,
  InvalidSource,
  DisabledSource,
  AccessibilitySource,
} from './imports';

export const ToggleFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>import</code> property is used to import the <code>UlxToggle</code> component.',
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
        content: 'The <code>Basic</code> demo shows basic usage of the Toggle component.',
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
    id: 'preselection',
    sectionNav: 'Preselection',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>Preselection</code> demo shows the Toggle with initial checked state.',
      },
    },
    demo: {
      component: PreselectionDemo,
      props: {
        source: PreselectionSource,
        snippetName: 'preselection',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'invalid',
    sectionNav: 'Invalid',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>Invalid</code> demo shows the Toggle in invalid/error state.',
      },
    },
    demo: {
      component: InvalidDemo,
      props: {
        source: InvalidSource,
        snippetName: 'invalid',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'disabled',
    sectionNav: 'Disabled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>Disabled</code> demo shows the Toggle in disabled state.',
      },
    },
    demo: {
      component: DisabledDemo,
      props: {
        source: DisabledSource,
        snippetName: 'disabled',
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
        content: 'The <code>Accessibility</code> demo shows labeling via inputId + label, aria-labelledby, and aria-label.',
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

export default function ToggleFeatures() {
  return ToggleFeatureItems;
}
