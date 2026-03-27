// ==========================================================================
// EmptyState Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  WithButtonDemo,
  WithDropdownDemo,
  ImportSource,
  BasicSource,
  WithButtonSource,
  WithDropdownSource,
} from './imports';

export const EmptyStateFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>UlxEmptyState</code> component.',
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
          'EmptyState shows an icon, title, and subtitle when there is no data. Use <code>@headerText</code>, <code>@subHeaderText</code>, and <code>@iconName</code> (i18n keys or text).',
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
    id: 'with-button',
    sectionNav: 'With Button',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use the yielded <code>button</code> helper to render a call-to-action within the EmptyState actions area.',
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
  {
    id: 'with-dropdown',
    sectionNav: 'With Dropdown',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'You can render any content in the actions area, such as a <code>UlxDropdown</code> to let users refine criteria before data becomes available.',
      },
    },
    demo: {
      component: WithDropdownDemo,
      props: {
        source: WithDropdownSource,
        snippetName: 'with-dropdown',
        language: 'handlebars',
      },
    },
  },
];

export default function EmptyStateFeatures() {
  return EmptyStateFeatureItems;
}
