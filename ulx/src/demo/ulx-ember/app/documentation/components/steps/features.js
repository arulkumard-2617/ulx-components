// ==========================================================================
// Steps Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  ControlledDemo,
  LinearDemo,
  InteractiveDemo,
  TemplateDemo,// Sources
  ImportSource,
  BasicSource,
  ControlledSource,
  LinearSource,
  InteractiveSource,
  TemplateSource
} from './imports';

export const StepsFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Steps</code> component."
      }
    },
    demo: {
      component: null, // Import section doesn't need demo
      props: {
        source: ImportSource,
        snippetName: "import",
        language: "jsx"
      }
    }
  },
  {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content:
          "The <code>Basic</code> demo shows the default stage indicator: icon and label in a row with <code>right-arrow-icon</code> separators. The active step uses <code>success-icon</code>; other steps use <code>success-stroke-icon</code> (override with <code>@activeStepIcon</code>, <code>@inactiveStepIcon</code>, or per-item icons)."
      }
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: "basic",
        language: "handlebars"
      }
    }
  },
  {
    id: "controlled",
    sectionNav: "Controlled",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Controlled</code> demo shows Controlled usage of the Steps component."
      }
    },
    demo: {
      component: ControlledDemo,
      props: {
        source: ControlledSource,
        snippetName: "controlled",
        language: "handlebars"
      }
    }
  },
  {
    id: "linear",
    sectionNav: "Linear",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Linear</code> demo shows Linear usage of the Steps component."
      }
    },
    demo: {
      component: LinearDemo,
      props: {
        source: LinearSource,
        snippetName: "linear",
        language: "handlebars"
      }
    }
  },
  {
    id: "interactive",
    sectionNav: "Interactive",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Interactive</code> demo shows Interactive usage of the Steps component."
      }
    },
    demo: {
      component: InteractiveDemo,
      props: {
        source: InteractiveSource,
        snippetName: "interactive",
        language: "handlebars"
      }
    }
  },
  {
    id: "template",
    sectionNav: "Template",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Template</code> demo shows Template usage of the Steps component."
      }
    },
    demo: {
      component: TemplateDemo,
      props: {
        source: TemplateSource,
        snippetName: "template",
        language: "handlebars"
      }
    }
  }
];

export default function StepsFeatures() {
  return StepsFeatureItems;
}
