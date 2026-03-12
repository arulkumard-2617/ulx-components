// ==========================================================================
// Toast Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  TypesDemo,
  PositionsDemo,
  VariantsDemo,
  MultipleDemo,
  StickyDemo,
  TemplateDemo,
  ImportSource,
  BasicSource,
  TypesSource,
  PositionsSource,
  VariantsSource,
  MultipleSource,
  StickySource,
  TemplateSource,
} from './imports';

export const ToastFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          "The <code>import</code> property is used to import the <code>UlxToast</code> component.",
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
          'The <code>Basic</code> demo shows a single toast message. Pass <code>@messages</code> (array of message objects) and <code>@onClose</code> to remove messages.',
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
    id: 'variants',
    sectionNav: 'Variants',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Toast supports <code>info</code>, <code>success</code>, <code>warn</code>, <code>error</code>, <code>secondary</code>, and <code>contrast</code> variants per message.',
      },
    },
    demo: {
      component: TypesDemo,
      props: {
        source: TypesSource,
        snippetName: 'types',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'positions',
    sectionNav: 'Positions',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@position</code> to place the toast container: <code>top-left</code>, <code>top-center</code>, <code>top-right</code>, <code>center</code>, <code>bottom-left</code>, <code>bottom-center</code>, <code>bottom-right</code>. Default is <code>top-center</code>.',
      },
    },
    demo: {
      component: PositionsDemo,
      props: {
        source: PositionsSource,
        snippetName: 'positions',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'types',
    sectionNav: 'Types',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Per-message <code>type</code>: <code>elevated</code>, <code>flat</code>, or <code>outlined</code>. Messages can be <code>closable</code>, <code>sticky</code>, or <code>showIcon: true</code> to show the variant icon.',
      },
    },
    demo: {
      component: VariantsDemo,
      props: {
        source: VariantsSource,
        snippetName: 'variants',
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
          'Multiple messages are displayed by passing an array to the show method. Click "Multiple" to add several messages at once to the same toast container.',
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
    id: 'sticky',
    sectionNav: 'Sticky',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'A message disappears after the <code>@life</code> duration (e.g. 3000ms). To display messages that remain visible and do not hide automatically, set <code>sticky: true</code> on the message. Use "Clear" to remove all messages.',
      },
    },
    demo: {
      component: StickyDemo,
      props: {
        source: StickySource,
        snippetName: 'sticky',
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
          'Custom content inside a message is defined with the <code>&lt;:content&gt;</code> block. Yield the message and render your own layout (e.g. sender name, summary, and actions like Reply).',
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
];

export default function ToastFeatures() {
  return ToastFeatureItems;
}
