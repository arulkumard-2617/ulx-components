// ==========================================================================
// Password Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  MeterDemo,
  LocaleDemo,
  ToggleMaskDemo,
  TemplateDemo,
  FloatLabelDemo,
  FilledDemo,
  InvalidDemo,
  DisabledDemo,
  ImportSource,
  BasicSource,
  MeterSource,
  LocaleSource,
  ToggleMaskSource,
  TemplateSource,
  FloatLabelSource,
  FilledSource,
  InvalidSource,
  DisabledSource,
  AccessibilitySource,
} from './imports';

export const PasswordFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> statement is used to import the <code>UlxPassword</code> component.',
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
          'Password is used as a controlled component with <code>@value</code> and <code>@onInput</code>. Strength meter is enabled by default; set <code>@feedback</code> to <code>false</code> for a basic password input.',
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
    id: 'meter',
    sectionNav: 'Meter',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Strength meter is displayed as a popup while a value is being entered. The strength levels are <strong>weak</strong>, <strong>medium</strong>, and <strong>strong</strong>.',
      },
    },
    demo: {
      component: MeterDemo,
      props: {
        source: MeterSource,
        snippetName: 'meter',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'locale',
    sectionNav: 'Locale',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Labels are translated at component level by <code>@promptLabel</code>, <code>@weakLabel</code>, <code>@mediumLabel</code> and <code>@strongLabel</code> properties.',
      },
    },
    demo: {
      component: LocaleDemo,
      props: {
        source: LocaleSource,
        snippetName: 'locale',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'toggle-mask',
    sectionNav: 'Toggle Mask',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'When <code>@toggleMask</code> is present, an icon is displayed to show the value as plain text.',
      },
    },
    demo: {
      component: ToggleMaskDemo,
      props: {
        source: ToggleMaskSource,
        snippetName: 'toggle-mask',
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
          'Custom content is placed inside the strength popup using <code>&lt;:header&gt;</code> and <code>&lt;:footer&gt;</code> named blocks.',
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
    id: 'float-label',
    sectionNav: 'Float Label',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'A floating label appears on top of the input field when focused. Use <code>@floatLabel</code> and <code>@label</code> to enable.',
      },
    },
    demo: {
      component: FloatLabelDemo,
      props: {
        source: FloatLabelSource,
        snippetName: 'float-label',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'filled',
    sectionNav: 'Filled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Specify the <code>@filled</code> property to display the component with a higher visual emphasis than the default outlined style.',
      },
    },
    demo: {
      component: FilledDemo,
      props: {
        source: FilledSource,
        snippetName: 'filled',
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
          'Invalid state is displayed using the <code>@invalid</code> prop to indicate a failed validation.',
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
          'When <code>@disabled</code> is present, the element cannot be edited and focused.',
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
        content:
          'Value to describe the component can either be provided via <code>label</code> tag combined with <code>id</code> prop or using <code>aria-labelledby</code>, <code>aria-label</code> props. Screen reader is notified about the changes to the strength of the password using a section that has <code>aria-live</code> while typing.',
      },
    },
    demo: {
      component: null,
      props: {
        source: AccessibilitySource,
        snippetName: 'accessibility',
        language: 'handlebars',
      },
    },
  },
];

export default function PasswordFeatures() {
  return PasswordFeatureItems;
}
