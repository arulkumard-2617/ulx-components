// ==========================================================================
// InputGroup Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  VerticalStackDemo,
  TemplateDemo,
  MultipleDemo,
  InputButtonDemo,
  // Sources
  ImportSource,
  BasicSource,
  VerticalStackSource,
  TemplateSource,
  MultipleSource,
  InputButtonSource,
} from './imports';

export const InputGroupFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>InputGroup</code> component.',
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
          'The <code>Basic</code> demo shows basic usage of the InputGroup component.',
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
    id: 'vertical-stack',
    sectionNav: 'Vertical Stack',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>vertical-stack-addon</code> on an addon to stack content (e.g. increment/decrement buttons) vertically in the input group.',
      },
    },
    demo: {
      component: VerticalStackDemo,
      props: {
        source: VerticalStackSource,
        snippetName: 'verticalStack',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Template</code> demo shows a combined layout: a start time input with a basic button addon, a duration pair using vertical-stack addons, and a checkbox to disable the fields when the time is to be announced.',
      },
    },
    demo: {
      component: TemplateDemo,
      props: {
        source: TemplateSource,
        snippetName: 'template',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'multiple',
    sectionNav: 'Multiple',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Multiple</code> demo shows Multiple usage of the InputGroup component.',
      },
    },
    demo: {
      component: MultipleDemo,
      props: {
        source: MultipleSource,
        snippetName: 'multiple',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'input-button',
    sectionNav: 'Input Button',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>&lt;:start&gt;</code> and <code>&lt;:end&gt;</code> with <code>UlxButton</code> for input group with buttons.',
      },
    },
    demo: {
      component: InputButtonDemo,
      props: {
        source: InputButtonSource,
        snippetName: 'inputButton',
        language: 'handlebars',
      },
    },
  },
];

export default function InputGroupFeatures() {
  return InputGroupFeatureItems;
}
