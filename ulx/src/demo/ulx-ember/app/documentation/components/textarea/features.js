// ==========================================================================
// Textarea Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  TemplateDemo,
  KeyfilterDemo,
  SizesDemo,
  InvalidDemo,
  DisabledDemo,
  WithButtonDemo,
  ImportSource,
  BasicSource,
  TemplateSource,
  KeyfilterSource,
  SizesSource,
  InvalidSource,
  DisabledSource,
  WithButtonSource,
} from './imports';

export const TextareaFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>import</code> property is used to import the <code>Textarea</code> component.',
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
        content: 'The <code>Basic</code> demo shows basic usage of the Textarea component.',
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
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Template</code> demo shows a common form layout with assistive content using Textarea.',
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
    id: 'key-filter',
    sectionNav: 'Keyfilter',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>Keyfilter</code> demo shows KeyFilter usage of the Textarea component.',
      },
    },
    demo: {
      component: KeyfilterDemo,
      props: {
        source: KeyfilterSource,
        snippetName: 'key-filter',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'sizes',
    sectionNav: 'Sizes',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>Sizes</code> demo shows Sizes usage of the Textarea component.',
      },
    },
    demo: {
      component: SizesDemo,
      props: {
        source: SizesSource,
        snippetName: 'sizes',
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
        content: 'The <code>Invalid</code> demo shows Invalid usage of the Textarea component.',
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
        content: 'The <code>Disabled</code> demo shows Disabled usage of the Textarea component.',
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
    id: 'with-button',
    sectionNav: 'With Button',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>With Button</code> demo shows a Textarea with an inset action button, a label header, and a live character counter.',
      },
    },
    demo: {
      component: WithButtonDemo,
      props: {
        source: WithButtonSource,
        snippetName: 'with-button',
        language: 'handlebars',
      },
    },
  },
];

export default function TextareaFeatures() {
  return TextareaFeatureItems;
}
