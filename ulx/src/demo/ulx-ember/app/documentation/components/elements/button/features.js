// ==========================================================================
// Button Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  TypesDemo,
  OutlinedDemo,
  IconOnlyDemo,
  TextDemo,
  RaisedDemo,
  RaisedTextDemo,
  RoundedDemo,
  IconsDemo,
  SizesDemo,
  StatesDemo,
  DisabledDemo,
  LinkDemo,
  BadgeDemo,
  GroupDemo,
  TemplateDemo,

  // Sources
  ImportSource,
  BasicSource,
  TypesSource,
  OutlinedSource,
  IconOnlySource,
  TextSource,
  RaisedSource,
  RaisedTextSource,
  RoundedSource,
  IconsSource,
  SizesSource,
  StatesSource,
  DisabledSource,
  LinkSource,
  BadgeSource,
  GroupSource,
  TemplateSource,
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
          'The <code>Basic</code> demo shows basic usage of the Button component with different types.',
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
          'Buttons can be rendered as anchor tags using <code>@link={{true}}</code> for navigation purposes.',
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
          'Buttons support icons with configurable position (left or right) and icon-only variants.',
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
    id: 'states',
    sectionNav: 'Loading',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'A button can show a loading state when <code>@loading</code> is true, displaying a spinner and preventing interaction.',
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
          'A button can be rendered with a disabled state when the <code>disabled</code> property is present. The <code>disabled</code> property can be used to specify the disabled state of the button.',
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
    id: 'types',
    sectionNav: 'Types',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Types</code> demo shows all available button types: primary, secondary, success, info, warning, help, and danger.',
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
    id: 'raised',
    sectionNav: 'Raised',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Raised</code> variant adds shadow to buttons for elevation effect.',
      },
    },
    demo: {
      component: RaisedDemo,
      props: {
        source: RaisedSource,
        snippetName: 'raised',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'raisedtext',
    sectionNav: 'RaisedText',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'A button can be rendered with raised and text state when <code>@raised</code> and <code>@text</code> are present. Use <code>@raised</code> for the elevation shadow and <code>@text</code> for the text-only (transparent background) style.',
      },
    },
    demo: {
      component: RaisedTextDemo,
      props: {
        source: RaisedTextSource,
        snippetName: 'raisedtext',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'rounded',
    sectionNav: 'Rounded',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Rounded</code> variant creates buttons with fully rounded corners for a modern pill-shaped appearance.',
      },
    },
    demo: {
      component: RoundedDemo,
      props: {
        source: RoundedSource,
        snippetName: 'rounded',
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
          'The <code>Text</code> variant displays buttons with a transparent background, suitable for less prominent actions.',
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
          'The <code>Outlined</code> variant displays buttons with a transparent background and colored border.',
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
    id: 'icononly',
    sectionNav: 'IconOnly',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'A button can be rendered with an icon only when <code>@icon</code> is present and no <code>@label</code> is passed. Icons use UlxIcon (font icons via <code>@iconComponentClass</code>). Use <code>aria-label</code> for accessibility.',
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
    id: 'badge',
    sectionNav: 'Badges',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Buttons support badges for displaying notifications, counts, or status indicators.',
      },
    },
    demo: {
      component: BadgeDemo,
      props: {
        source: BadgeSource,
        snippetName: 'badge',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'group',
    sectionNav: 'Group',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'A button can be rendered in a group when wrapped in <code>UlxButtonGroup</code>. Use <code>@orientation</code> for horizontal or vertical layout and <code>@size</code> for button size.',
      },
    },
    demo: {
      component: GroupDemo,
      props: {
        source: GroupSource,
        snippetName: 'group',
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
          'The <code>Sizes</code> demo shows available button sizes: small, normal, and large.',
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
          'A button can be rendered with custom content when content is passed as the default block. Use <code>@customClass</code> with ULS_V2.0 classes for styling and pass any markup (e.g. an image logo) inside the button.',
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

export default function ButtonFeatures() {
  return ButtonFeatureItems;
}
