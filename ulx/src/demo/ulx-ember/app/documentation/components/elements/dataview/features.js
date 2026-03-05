// ==========================================================================
// DataView Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  PaginationDemo,
  SortingDemo,
  LayoutDemo,
  LoadingDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  PaginationSource,
  SortingSource,
  LayoutSource,
  LoadingSource,
  AccessibilitySource,
} from './imports';

export const DataViewFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> section shows how to import and use the <code>UlxDataView</code> component.',
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
          'The <code>Basic</code> demo shows a simple list of items using the <code>&lt;:item&gt;</code> block.',
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
    id: 'pagination',
    sectionNav: 'Pagination',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Enable <code>@paginator={{true}}</code> and set <code>@rows</code> to show pagination with optional <code>@rowsPerPageOptions</code>.',
      },
    },
    demo: {
      component: PaginationDemo,
      props: {
        source: PaginationSource,
        snippetName: 'pagination',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'sorting',
    sectionNav: 'Sorting',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@sortField</code> and <code>@sortOrder</code> (1 for ascending, -1 for descending) for client-side sorting.',
      },
    },
    demo: {
      component: SortingDemo,
      props: {
        source: SortingSource,
        snippetName: 'sorting',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'layout',
    sectionNav: 'Layout',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@layout="list"</code> or <code>@layout="grid"</code> to switch between list and grid display.',
      },
    },
    demo: {
      component: LayoutDemo,
      props: {
        source: LayoutSource,
        snippetName: 'layout',
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
          'Set <code>@loading={{true}}</code> to show a loading overlay. Optionally use the <code>&lt;:loading&gt;</code> block for custom content.',
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
    id: 'accessibility',
    sectionNav: 'Accessibility',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'DataView uses role="region" with an aria-label. Ensure item content has accessible names when interactive.',
      },
    },
    demo: {
      component: AccessibilityDemo,
      props: {
        source: AccessibilitySource,
        snippetName: 'accessibility',
        language: 'handlebars',
      },
    },
  },
];
