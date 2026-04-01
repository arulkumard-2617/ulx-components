// ==========================================================================
// Paginator Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  LayoutDemo,
  ImagesDemo,
  TemplateDemo,
  ImportSource,
  BasicSource,
  LayoutSource,
  ImagesSource,
  TemplateSource,
} from './imports';

export const PaginatorFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>UlxPaginator</code> component.',
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
          'The <code>Basic</code> demo shows basic usage of the UlxPaginator with first/prev/next/last buttons (UlxButton), page links, and rows-per-page dropdown (UlxDropdown).',
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
    id: 'layout',
    sectionNav: 'Layout',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Order and content of the paginator UI elements are defined with the <code>template</code> property. This example uses only PrevPageLink, CurrentPageReport, and NextPageLink.',
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
    id: 'images',
    sectionNav: 'Images',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Sample image gallery implementation using paginator with one item per page (FirstPageLink, PrevPageLink, CurrentPageReport, NextPageLink, LastPageLink).',
      },
    },
    demo: {
      component: ImagesDemo,
      props: {
        source: ImagesSource,
        snippetName: 'images',
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
          'Templating allows overriding the default content of paginator sections via named blocks. Use <code>&lt;:prevPageLink&gt;</code>, <code>&lt;:nextPageLink&gt;</code>, <code>&lt;:currentPageReport&gt;</code>, <code>&lt;:left&gt;</code>, and <code>&lt;:right&gt;</code> to customize labels, report text, and side content.',
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

export default function PaginatorFeatures() {
  return PaginatorFeatureItems;
}
