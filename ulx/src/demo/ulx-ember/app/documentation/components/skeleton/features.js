// ==========================================================================
// Skeleton Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  ShapesDemo,
  CardDemo,
  ListDemo,
  DataTableDemo,
  AccessibilityDemo,
  ImportSource,
  ShapesSource,
  CardSource,
  ListSource,
  DataTableSource,
  AccessibilitySource,
} from './imports';

export const SkeletonFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> section shows how to import and use the <code>UlxSkeleton</code> component.',
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
    id: 'shapes',
    sectionNav: 'Shapes',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Various shapes and sizes can be created using <code>@shape</code>, <code>@width</code>, <code>@height</code>, <code>@borderRadius</code>, and <code>@size</code> arguments.',
      },
    },
    demo: {
      component: ShapesDemo,
      props: {
        source: ShapesSource,
        snippetName: 'shapes',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'card',
    sectionNav: 'Card',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Sample Card implementation using different Skeleton components.',
      },
    },
    demo: {
      component: CardDemo,
      props: {
        source: CardSource,
        snippetName: 'card',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'list',
    sectionNav: 'List',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Sample List implementation using different Skeleton components.',
      },
    },
    demo: {
      component: ListDemo,
      props: {
        source: ListSource,
        snippetName: 'list',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'dataTable',
    sectionNav: 'DataTable',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Sample DataTable implementation using different Skeleton components.',
      },
    },
    demo: {
      component: DataTableDemo,
      props: {
        source: DataTableSource,
        snippetName: 'dataTable',
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
          'Skeleton uses <code>aria-hidden="true"</code> so screen readers ignore it. When grouping multiple skeletons, use <code>aria-busy</code> on the container.',
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
