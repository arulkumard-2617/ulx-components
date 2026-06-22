// ==========================================================================
// SelectButton Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  MultipleDemo,
  TemplateDemo,
  InvalidDemo,
  DisabledDemo,
  CarouselDemo,
  ImportSource,
  BasicSource,
  MultipleSource,
  TemplateSource,
  InvalidSource,
  DisabledSource,
  CarouselSource,
} from './imports';

export const SelectButtonFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import the <code>UlxSelectButton</code> component from <code>ulx-components</code>.',
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
          'SelectButton is used as a controlled component with <code>@value</code> and <code>@onChange</code> along with an <code>@options</code> collection. Use <code>@optionLabel</code> and <code>@optionValue</code> for object options.',
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
    id: 'multiple',
    sectionNav: 'Multiple',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Enable <code>@multiple</code> to allow selecting more than one option. The <code>@value</code> should be an array.',
      },
    },
    demo: {
      component: MultipleDemo,
      props: {
        source: MultipleSource,
        snippetName: 'multiple',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'carousel',
    sectionNav: 'Carousel',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@carousel={{true}}</code> to show a fixed window of options with previous and next arrow controls. Use <code>@visibleCount</code> to control how many segments are visible at once, and <code>@stretch={{true}}</code> for equal-width buttons. Optionally control the window with <code>@carouselOffset</code> and <code>@onCarouselOffsetChange</code>.',
      },
    },
    demo: {
      component: CarouselDemo,
      props: {
        source: CarouselSource,
        snippetName: 'carousel',
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
          'Use the <code>&lt;:item&gt;</code> block to customize the content of each option (e.g. icons).',
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
    id: 'invalid',
    sectionNav: 'Invalid',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@invalid</code> to show validation error state when integrating with form validation.',
      },
    },
    demo: {
      component: InvalidDemo,
      props: {
        source: InvalidSource,
        snippetName: 'invalid',
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
          'Use <code>@disabled</code> to disable the whole component, or <code>@optionDisabled</code> (property name or function) to disable specific options.',
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

export default function SelectButtonFeatures() {
  return SelectButtonFeatureItems;
}
