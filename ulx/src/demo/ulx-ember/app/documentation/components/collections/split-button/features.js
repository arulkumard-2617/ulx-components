// ==========================================================================
// SplitButton Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  IconsDemo,
  VariantsDemo,
  LoadingDemo,
  DisabledDemo,
  TextDemo,
  OutlinedDemo,
  SizesDemo,
  TemplateDemo,
  ImportSource,
  BasicSource,
  IconsSource,
  VariantsSource,
  LoadingSource,
  DisabledSource,
  TextSource,
  OutlinedSource,
  SizesSource,
  TemplateSource,
} from './imports';

export const SplitButtonFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import the <code>UlxSplitButton</code> component from <code>ulx-components</code>.',
      },
    },
    demo: {
      component: null,
      props: { source: ImportSource, snippetName: 'import', language: 'jsx' },
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
          'SplitButton has a default action button and a dropdown of options defined by <code>@model</code>.',
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
    id: 'icons',
    sectionNav: 'Icons',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@icon</code> for the main button and <code>@dropdownIcon</code> for the dropdown trigger icon.',
      },
    },
    demo: {
      component: IconsDemo,
      props: {
        source: IconsSource,
        snippetName: 'icons',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'variants',
    sectionNav: 'Variant',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Variant defines the type of button: primary, secondary, success, info, warning, help, danger.',
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
    id: 'loading',
    sectionNav: 'Loading',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'When the main action returns a Promise from <code>@onClick</code>, the main button shows a loading state until the promise settles.',
      },
    },
    demo: {
      component: LoadingDemo,
      props: {
        source: LoadingSource,
        snippetName: 'loading',
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
        content:
          'When <code>@disabled</code> is true, both the main button and dropdown are disabled.',
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
    id: 'text',
    sectionNav: 'Text',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Text variant displays as textual elements. Use <code>@text={{true}}</code>.',
      },
    },
    demo: {
      component: TextDemo,
      props: {
        source: TextSource,
        snippetName: 'text',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'outlined',
    sectionNav: 'Outlined',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Outlined buttons display a border without a background. Use <code>@outlined={{true}}</code>.',
      },
    },
    demo: {
      component: OutlinedDemo,
      props: {
        source: OutlinedSource,
        snippetName: 'outlined',
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
        content:
          'Use <code>@size</code> for small (<code>s-size</code>), default, or large (<code>l-size</code>).',
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
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@label</code> and <code>@icon</code> to define the main button content.',
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

export default function SplitButtonFeatures() {
  return SplitButtonFeatureItems;
}
