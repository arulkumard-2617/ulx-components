// ==========================================================================
// OptionSegment Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  RadiogroupDemo,
  CheckboxgroupDemo,
  HorizontalDemo,
  NamedblocksDemo,
  NestedDemo,
  TristateDemo, // Sources
  ImportSource,
  BasicSource,
  RadiogroupSource,
  CheckboxgroupSource,
  HorizontalSource,
  NamedblocksSource,
  NestedSource,
  TristateSource,
} from './imports';

export const OptionSegmentFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>OptionSegment</code> component.',
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
          'The <code>Basic</code> demo shows basic usage of the OptionSegment component.',
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
    id: 'radio-group',
    sectionNav: 'Radiogroup',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Radiogroup</code> demo shows RadioGroup usage of the OptionSegment component.',
      },
    },
    demo: {
      component: RadiogroupDemo,
      props: {
        source: RadiogroupSource,
        snippetName: 'radio-group',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'checkbox-group',
    sectionNav: 'Checkboxgroup',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Checkboxgroup</code> demo shows CheckboxGroup usage of the OptionSegment component.',
      },
    },
    demo: {
      component: CheckboxgroupDemo,
      props: {
        source: CheckboxgroupSource,
        snippetName: 'checkbox-group',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'horizontal',
    sectionNav: 'Horizontal',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Horizontal</code> demo shows Horizontal usage of the OptionSegment component.',
      },
    },
    demo: {
      component: HorizontalDemo,
      props: {
        source: HorizontalSource,
        snippetName: 'horizontal',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'named-blocks',
    sectionNav: 'Namedblocks',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Namedblocks</code> demo shows NamedBlocks usage of the OptionSegment component.',
      },
    },
    demo: {
      component: NamedblocksDemo,
      props: {
        source: NamedblocksSource,
        snippetName: 'named-blocks',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'nested',
    sectionNav: 'Nested',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Nested</code> demo shows Nested usage of the OptionSegment component.',
      },
    },
    demo: {
      component: NestedDemo,
      props: {
        source: NestedSource,
        snippetName: 'nested',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'tri-state',
    sectionNav: 'Tristate',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Tristate</code> demo shows TriState usage of the OptionSegment component.',
      },
    },
    demo: {
      component: TristateDemo,
      props: {
        source: TristateSource,
        snippetName: 'tri-state',
        language: 'handlebars',
      },
    },
  },
];

export default function OptionSegmentFeatures() {
  return OptionSegmentFeatureItems;
}
