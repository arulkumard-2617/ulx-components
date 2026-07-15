// ==========================================================================
// Rating Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  WithoutCancelDemo,
  NumberOfStarsDemo,
  TemplateDemo,
  ReadonlyDemo,
  ScoreDemo,
  DisabledDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  WithoutCancelSource,
  NumberOfStarsSource,
  TemplateSource,
  ReadonlySource,
  ScoreSource,
  DisabledSource,
  AccessibilitySource,
} from './imports';

export const RatingFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'The <code>import</code> property is used to import the <code>UlxRating</code> component.',
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
        content: 'Rating is used as a controlled input with <code>value</code> and <code>onChange</code>.',
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
    id: 'without-cancel',
    sectionNav: 'Without Cancel',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Set <code>cancel=false</code> to hide the reset icon.',
      },
    },
    demo: {
      component: WithoutCancelDemo,
      props: {
        source: WithoutCancelSource,
        snippetName: 'without-cancel',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'number-of-stars',
    sectionNav: 'Number of Stars',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Use the <code>stars</code> property to define how many stars to display.',
      },
    },
    demo: {
      component: NumberOfStarsDemo,
      props: {
        source: NumberOfStarsSource,
        snippetName: 'number-of-stars',
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
        content: 'Customize icons with <code>&lt;:onIcon&gt;</code>, <code>&lt;:offIcon&gt;</code> and <code>&lt;:cancelIcon&gt;</code> blocks.',
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
    id: 'readonly',
    sectionNav: 'ReadOnly',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'When <code>readOnly</code> is set, the value cannot be changed.',
      },
    },
    demo: {
      component: ReadonlyDemo,
      props: {
        source: ReadonlySource,
        snippetName: 'readonly',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'score',
    sectionNav: 'Score',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@type="score"</code> for a compact display with a single filled star and the numeric rating value.',
      },
    },
    demo: {
      component: ScoreDemo,
      props: {
        source: ScoreSource,
        snippetName: 'score',
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
        content: 'When <code>disabled</code> is set, a visual hint indicates the rating cannot be interacted with.',
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
    id: 'accessibility',
    sectionNav: 'Accessibility',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Use <code>ariaLabel</code> or a visible label for an accessible name. Keyboard: Tab, Left/Right, Space.',
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

export default function RatingFeatures() {
  return RatingFeatureItems;
}
