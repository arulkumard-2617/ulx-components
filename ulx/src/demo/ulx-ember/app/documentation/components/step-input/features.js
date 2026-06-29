// ==========================================================================
// Step Input Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  WithLabelDemo,
  MinMaxDemo,
  DisabledDemo,
  WithFieldDemo,
  ImportSource,
  BasicSource,
  WithLabelSource,
  MinMaxSource,
  DisabledSource,
  WithFieldSource
} from './imports';

export const StepInputFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>UlxStepInput</code> component.'
      }
    },
    demo: {
      component: null,
      props: {
        source: ImportSource,
        snippetName: 'import',
        language: 'jsx'
      }
    }
  },
  {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'StepInput is controlled with <code>@value</code> and <code>@onChange</code>. Use the up and down buttons or type a number directly.'
      }
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: 'basic',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'with-label',
    sectionNav: 'With Label',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Pass <code>@label</code> for a decorative suffix addon. Pair with <code>aria-label</code> on the component so screen readers use a meaningful name for the input.'
      }
    },
    demo: {
      component: WithLabelDemo,
      props: {
        source: WithLabelSource,
        snippetName: 'with-label',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'min-max',
    sectionNav: 'Min, Max and Step',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@min</code>, <code>@max</code>, and <code>@step</code> to constrain values. Step buttons disable at the bounds.'
      }
    },
    demo: {
      component: MinMaxDemo,
      props: {
        source: MinMaxSource,
        snippetName: 'min-max',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'disabled',
    sectionNav: 'Disabled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: 'Set <code>@disabled={{true}}</code> to disable the input and step buttons.'
      }
    },
    demo: {
      component: DisabledDemo,
      props: {
        source: DisabledSource,
        snippetName: 'disabled',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'with-field',
    sectionNav: 'With Field',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Wrap StepInput in <code>UlxField</code> and pass <code>@field={{field}}</code> for label, help text, and validation wiring. Bounds can also be supplied via <code>@rules</code>.'
      }
    },
    demo: {
      component: WithFieldDemo,
      props: {
        source: WithFieldSource,
        snippetName: 'with-field',
        language: 'handlebars'
      }
    }
  }
];

export default function StepInputFeatures() {
  return StepInputFeatureItems;
}
