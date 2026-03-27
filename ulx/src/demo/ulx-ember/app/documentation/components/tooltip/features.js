// ==========================================================================
// Tooltip Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  EventDemo,
  AutohideDemo,
  DelayDemo,
  DisabledDemo,
  TemplateDemo,
  ModifierDemo,
  // Sources
  ImportSource,
  BasicSource,
  EventSource,
  AutohideSource,
  DelaySource,
  DisabledSource,
  TemplateSource,
  ModifierSource,
} from './imports';

export const TooltipFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>Tooltip</code> component.',
      },
    },
    demo: {
      component: null, // Import section doesn't need demo
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
          'The <code>Basic</code> demo shows basic usage of the Tooltip component.',
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
    id: 'event',
    sectionNav: 'Event',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Event</code> demo shows Event usage of the Tooltip component.',
      },
    },
    demo: {
      component: EventDemo,
      props: {
        source: EventSource,
        snippetName: 'event',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'auto-hide',
    sectionNav: 'Autohide',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Autohide</code> demo shows AutoHide usage of the Tooltip component.',
      },
    },
    demo: {
      component: AutohideDemo,
      props: {
        source: AutohideSource,
        snippetName: 'auto-hide',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'delay',
    sectionNav: 'Delay',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Delay</code> demo shows Delay usage of the Tooltip component.',
      },
    },
    demo: {
      component: DelayDemo,
      props: {
        source: DelaySource,
        snippetName: 'delay',
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
          'Use <code>@disabled</code> to prevent the tooltip from showing. Use <code>@showOnDisabled</code> to show a tooltip on a disabled trigger (e.g. disabled button).',
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
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use the <code>&lt;:content&gt;</code> block for rich tooltip content (formatting, links, multiple lines). When present, <code>@content</code> is ignored.',
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
    id: 'modifier',
    sectionNav: 'Modifier (PrimeReact-style)',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use the <code>tooltip</code> modifier on any element for a PrimeReact-like API: no wrapper, tooltip appends to body. First positional is content; named args: <code>position</code>, <code>event</code>, <code>showDelay</code>, <code>hideDelay</code>, <code>disabled</code>, <code>options</code> (object). E.g. <code>&lt;div {{tooltip "Update name" position="top"}} /&gt;</code> or <code>&lt;button {{tooltip "Save" options=this.tooltipOptions}}&gt;</code>.',
      },
    },
    demo: {
      component: ModifierDemo,
      props: {
        source: ModifierSource,
        snippetName: 'modifier',
        language: 'handlebars',
      },
    },
  },
];

export default function TooltipFeatures() {
  return TooltipFeatureItems;
}
