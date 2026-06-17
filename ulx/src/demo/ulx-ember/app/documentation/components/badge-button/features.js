// ==========================================================================
// BadgeButton Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  VariantsDemo,
  GroupDemo,
  TemplateDemo,
  DisabledDemo,
  ImportSource,
  BasicSource,
  VariantsSource,
  GroupSource,
  TemplateSource,
  DisabledSource,
} from './imports';

export const BadgeButtonFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import the <code>UlxBadgeButton</code> component from <code>ulx-components</code>.',
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
          'The <code>Basic</code> demo shows a default badge button with a label and count.',
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
          'Use <code>@badgeVariant</code> for badge color: primary, secondary, success, info, warning, and danger.',
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
    id: 'group',
    sectionNav: 'Group',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Badge buttons can be grouped with <code>UlxButtonGroup</code> for toolbar-style layouts.',
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
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use the <code>&lt;:prefix&gt;</code> block for custom content such as icons. Icon-only badge buttons should include <code>aria-label</code>.',
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
    id: 'disabled',
    sectionNav: 'Disabled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Set <code>@disabled={{true}}</code> to disable the badge button.',
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
];

export default function BadgeButtonFeatures() {
  return BadgeButtonFeatureItems;
}
