// ==========================================================================
// Progress Bar Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  SizesDemo,
  DynamicDemo,
  WithControlsDemo,
  WithoutValueDemo,
  TemplateDemo,
  IndeterminateDemo,
  ImportSource,
  BasicSource,
  SizesSource,
  DynamicSource,
  WithControlsSource,
  WithoutValueSource,
  TemplateSource,
  IndeterminateSource,
} from './imports';

export const ProgressBarFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>UlxProgressBar</code> component.',
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
          'The <code>Basic</code> demo shows a determinate progress bar with <code>@value={{50}}</code> (0–100). Uses ULS_V2.0 progress-bar.less classes.',
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
    id: 'sizes',
    sectionNav: 'Sizes',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Size variants: <code>xxxs-size</code>, <code>xs-size</code>, <code>s-size</code>, <code>m-size</code>, <code>l-size</code>, <code>xl-size</code>, and custom height <code>h-14</code>, <code>h-20</code>. Pass <code>@size</code> to change the bar height.',
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
    id: 'with-controls',
    sectionNav: 'With controls',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@showControls={{true}}</code> with <code>@value</code> and <code>@onChange</code> to render decrease (−) and increase (+) buttons. The value is shown as a percentage to the right.',
      },
    },
    demo: {
      component: WithControlsDemo,
      props: {
        source: WithControlsSource,
        snippetName: 'with-controls',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'without-value',
    sectionNav: 'Without value',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Pass <code>@showValue={{false}}</code> to hide the percentage label inside the bar. The bar fill still reflects the value; only the text is hidden.',
      },
    },
    demo: {
      component: WithoutValueDemo,
      props: {
        source: WithoutValueSource,
        snippetName: 'without-value',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'dynamic',
    sectionNav: 'Dynamic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Value is reactive so updating it dynamically changes the bar as well. This demo starts at 0 and increments by a random amount every 2s until 100, then shows a success toast (Process Completed).',
      },
    },
    demo: {
      component: DynamicDemo,
      props: {
        source: DynamicSource,
        snippetName: 'dynamic',
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
          'Custom content inside the Progress Bar is defined with the <code>&lt;:content&gt;</code> block. Yield the value and render your own label (e.g. <code>value/100</code>).',
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
    id: 'indeterminate',
    sectionNav: 'Indeterminate',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Omit <code>@value</code> or set <code>@mode="indeterminate"</code> for an animated loading bar. Pass <code>aria-label</code> when it is the main progress indicator.',
      },
    },
    demo: {
      component: IndeterminateDemo,
      props: {
        source: IndeterminateSource,
        snippetName: 'indeterminate',
        language: 'handlebars',
      },
    },
  },
];

export default function ProgressBarFeatures() {
  return ProgressBarFeatureItems;
}
