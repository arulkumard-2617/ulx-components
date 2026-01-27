// ==========================================================================
// Button Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  LinkDemo,
  // Sources
  ImportSource,
  BasicSource,
  LinkSource,
} from './imports';

export const ButtonFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>Button</code> component.',
      },
    },
    demo: {
      component: null, // Import section doesn't need demo
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
          'The <code>Basic</code> demo shows basic usage of the Button component.',
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
    id: 'link',
    sectionNav: 'Link',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Link</code> demo shows link usage of the Button component.',
      },
    },
    demo: {
      component: LinkDemo,
      props: {
        source: LinkSource,
        snippetName: 'link',
        language: 'handlebars',
      },
    },
  },
];

export default function ButtonFeatures() {
  return ButtonFeatureItems;
}
