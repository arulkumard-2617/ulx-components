// ==========================================================================
// ProgressSpinner Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  CustomDemo,
  ImportSource,
  BasicSource,
  CustomSource,
} from './imports';

export const ProgressSpinnerFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>ProgressSpinner</code> component.',
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
          'The <code>Basic</code> demo shows a single ProgressSpinner with <code>@size="xl"</code> (largest size from uls-v2). Use <code>@ariaLabel</code> when it is the main loading indicator.',
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
    id: 'custom',
    sectionNav: 'Custom',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Custom</code> demo shows custom usage: pass <code>@size</code> and <code>@customClass</code> from the parent. Styling uses only existing uls-v2 <code>progress-spinner.less</code> (xs/s/m/l/xl-size).',
      },
    },
    demo: {
      component: CustomDemo,
      props: {
        source: CustomSource,
        snippetName: 'custom',
        language: 'handlebars',
      },
    },
  },
];

export default function ProgressSpinnerFeatures() {
  return ProgressSpinnerFeatureItems;
}
