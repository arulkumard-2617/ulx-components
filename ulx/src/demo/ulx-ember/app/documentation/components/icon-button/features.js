// ==========================================================================
// IconButton Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  IconsDemo,
  IconOnlyDemo,
  VariantsDemo,
  OutlinedDemo,
  TextDemo,
  PilledDemo,
  SizesDemo,
  StatesDemo,
  DisabledDemo,
  LinkDemo,
  ImportSource,
  BasicSource,
  IconsSource,
  IconOnlySource,
  VariantsSource,
  OutlinedSource,
  TextSource,
  PilledSource,
  SizesSource,
  StatesSource,
  DisabledSource,
  LinkSource,
} from './imports';

export const IconButtonFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import the <code>UlxIconButton</code> component from <code>ulx-components</code>.',
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
          'IconButton displays a label with an icon using <code>@iconLeft</code> and <code>@iconComponentClass</code>.',
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
          'IconButton can render as a link using <code>@href</code> with the <code>link</code> variant.',
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
  {
    id: 'icons',
    sectionNav: 'Icons',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@iconLeft</code> or <code>@iconRight</code> for icon placement. Omit <code>@label</code> for icon-only buttons and set <code>aria-label</code>.',
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
    id: 'icononly',
    sectionNav: 'IconOnly',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Icon-only buttons omit <code>@label</code> and use <code>aria-label</code> for accessibility. Supports filled, pilled, outlined, and text styles.',
      },
    },
    demo: {
      component: IconOnlyDemo,
      props: {
        source: IconOnlySource,
        snippetName: 'icononly',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'states',
    sectionNav: 'Loading',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'When <code>@loading={{true}}</code>, IconButton shows a spinner in the icon affix area.',
      },
    },
    demo: {
      component: StatesDemo,
      props: {
        source: StatesSource,
        snippetName: 'states',
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
          'Set <code>@disabled={{true}}</code> to disable the button.',
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
    id: 'variants',
    sectionNav: 'Variant',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Variant defines semantic styles: basic, primary, secondary, success, info, warning, help-button, and danger.',
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
    id: 'pilled',
    sectionNav: 'Pilled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Use <code>@pilled={{true}}</code> for a pill-shaped icon button.',
      },
    },
    demo: {
      component: PilledDemo,
      props: {
        source: PilledSource,
        snippetName: 'pilled',
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
          'Text variant displays with a transparent background. Use <code>@text={{true}}</code>.',
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
          'Outlined buttons display a border without a filled background. Use <code>@outlined={{true}}</code>.',
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
          'Use <code>@size</code> for small (<code>s-size</code>), default, large (<code>l-size</code>), or extra large (<code>xl-size</code>).',
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
];

export default function IconButtonFeatures() {
  return IconButtonFeatureItems;
}
