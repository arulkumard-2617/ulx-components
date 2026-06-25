// ==========================================================================
// SplitButton Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  VariantsDemo,
  OutlinedDemo,
  TextDemo,
  SizesDemo,
  DisabledDemo,
  LoadingDemo,
  TemplateDemo,
  IconsDemo,
  SeparatorDemo,
  ImportSource,
  BasicSource,
  VariantsSource,
  OutlinedSource,
  TextSource,
  SizesSource,
  DisabledSource,
  LoadingSource,
  TemplateSource,
  IconsSource,
  SeparatorSource
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
          'Import the <code>UlxSplitButton</code> component from <code>ulx-components</code>.'
      }
    },
    demo: {
      component: null,
      props: { source: ImportSource, snippetName: 'import', language: 'jsx' }
    }
  },
  {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Basic</code> demo shows a default primary split button with a main action and dropdown menu.'
      }
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: 'basic',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'variants',
    sectionNav: 'Variants',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Variants</code> demo shows semantic variants: primary, secondary, success, and danger.'
      }
    },
    demo: {
      component: VariantsDemo,
      props: {
        source: VariantsSource,
        snippetName: 'variants',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'outlined',
    sectionNav: 'Outlined',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Outlined</code> variant displays buttons with a transparent background and colored border.'
      }
    },
    demo: {
      component: OutlinedDemo,
      props: {
        source: OutlinedSource,
        snippetName: 'outlined',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'text',
    sectionNav: 'Text',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Text</code> variant displays buttons with a transparent background, suitable for less prominent actions.'
      }
    },
    demo: {
      component: TextDemo,
      props: {
        source: TextSource,
        snippetName: 'text',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'sizes',
    sectionNav: 'Sizes',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@size</code> for small (<code>s-size</code>), default, or large (<code>l-size</code>).'
      }
    },
    demo: {
      component: SizesDemo,
      props: {
        source: SizesSource,
        snippetName: 'sizes',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'disabled',
    sectionNav: 'Disabled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'When <code>@disabled</code> is true, both the main button and dropdown are disabled.'
      }
    },
    demo: {
      component: DisabledDemo,
      props: {
        source: DisabledSource,
        snippetName: 'disabled',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'loading',
    sectionNav: 'Loading',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'When the main action returns a Promise from <code>@onClick</code>, the main button shows a loading state until the promise settles.'
      }
    },
    demo: {
      component: LoadingDemo,
      props: {
        source: LoadingSource,
        snippetName: 'loading',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@label</code> and <code>@icon</code> to define the main button content.'
      }
    },
    demo: {
      component: TemplateDemo,
      props: {
        source: TemplateSource,
        snippetName: 'template',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'icons',
    sectionNav: 'Icons',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@icon</code> for the main button and <code>@dropdownIcon</code> for the dropdown trigger icon.'
      }
    },
    demo: {
      component: IconsDemo,
      props: {
        source: IconsSource,
        snippetName: 'icons',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'separator',
    sectionNav: 'Separator',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Add <code>{ separator: true }</code> to the <code>@items</code> array to render a divider between dropdown menu entries.'
      }
    },
    demo: {
      component: SeparatorDemo,
      props: {
        source: SeparatorSource,
        snippetName: 'separator',
        language: 'handlebars'
      }
    }
  }
];

export default function SplitButtonFeatures() {
  return SplitButtonFeatureItems;
}
