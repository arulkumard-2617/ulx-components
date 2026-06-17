// ==========================================================================
// Button Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  VariantsDemo,
  PilledDemo,
  OutlinedDemo,
  LinkDemo,
  TextDemo,
  GroupDemo,
  SizesDemo,
  DisabledDemo,
  StatesDemo,
  TemplateDemo,

  // Sources
  ImportSource,
  BasicSource,
  VariantsSource,
  PilledSource,
  OutlinedSource,
  LinkSource,
  TextSource,
  GroupSource,
  SizesSource,
  DisabledSource,
  StatesSource,
  TemplateSource,
} from './imports';

const ButtonFeatureItemsBase = [
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
          'The <code>Basic</code> demo shows a default primary button with a label.',
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
          'The <code>Variants</code> demo shows semantic variants: basic, primary, secondary, success, and danger.',
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
        content:
          'Use <code>@pilled={{true}}</code> for a pill-shaped button across semantic variants.',
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
    id: 'link',
    sectionNav: 'Link',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Buttons can be rendered as anchor tags using <code>@href</code> for navigation purposes.',
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
    id: 'states',
    sectionNav: 'Loading',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'A button shows a loading state when <code>@loading={{true}}</code>, displaying a spinner. You can also show loading while <code>@onClick</code> returns a Promise.',
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

export const ButtonFeatureItems = ButtonFeatureItemsBase;

export default function ButtonFeatures() {
  return ButtonFeatureItems;
}
