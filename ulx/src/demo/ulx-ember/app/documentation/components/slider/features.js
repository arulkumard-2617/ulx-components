// ==========================================================================
// Slider Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  InputDemo,
  StepDemo,
  RangeDemo,
  FilterDemo,
  VerticalDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  InputSource,
  StepSource,
  RangeSource,
  FilterSource,
  VerticalSource,
  AccessibilitySource,
} from './imports';

export const SliderFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> statement is used to import the <code>UlxSlider</code> component.',
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
        content: 'Slider is used as a controlled input with <code>@value</code> and <code>@onChange</code>.',
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
    id: 'input',
    sectionNav: 'Input',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Slider value can be synchronized with an input component.',
      },
    },
    demo: {
      component: InputDemo,
      props: {
        source: InputSource,
        snippetName: 'input',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'step',
    sectionNav: 'Step',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Use <code>@step</code> to define the increment and <code>@withSteps</code> for tick styling.',
      },
    },
    demo: {
      component: StepDemo,
      props: {
        source: StepSource,
        snippetName: 'step',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'range',
    sectionNav: 'Range',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Enable range mode with <code>@range</code> and provide a two-number array value.',
      },
    },
    demo: {
      component: RangeDemo,
      props: {
        source: RangeSource,
        snippetName: 'range',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'filter',
    sectionNav: 'Filter',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'A slider can be used to filter data by a numeric threshold.',
      },
    },
    demo: {
      component: FilterDemo,
      props: {
        source: FilterSource,
        snippetName: 'filter',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'vertical',
    sectionNav: 'Vertical',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Use <code>@orientation=\"vertical\"</code> to display a vertical slider.',
      },
    },
    demo: {
      component: VerticalDemo,
      props: {
        source: VerticalSource,
        snippetName: 'vertical',
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
          'Provide an accessible name via <code>@ariaLabel</code>. Keyboard: Arrow keys, Home/End, PageUp/PageDown.',
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

export default function SliderFeatures() {
  return SliderFeatureItems;
}

