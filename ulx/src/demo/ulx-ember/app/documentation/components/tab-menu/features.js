// ==========================================================================
// TabMenu Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  ControlledDemo,
  NamedblocksDemo,
  RouterDemo,
  CommandDemo,
  AccessibilityDemo,
  // Sources
  ImportSource,
  BasicSource,
  ControlledSource,
  NamedblocksSource,
  RouterSource,
  CommandSource,
  AccessibilitySource,
} from './imports';

export const TabMenuFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>TabMenu</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the TabMenu component."
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
  }
,
  {
    id: "controlled",
    sectionNav: "Controlled",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Controlled</code> demo shows Controlled usage of the TabMenu component."
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
  }
,
  {
    id: "named-blocks",
    sectionNav: "Namedblocks",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Namedblocks</code> demo shows NamedBlocks usage of the TabMenu component."
      }
    },
    demo: {
      component: NamedblocksDemo,
      props: {
        source: NamedblocksSource,
        snippetName: "named-blocks",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "router",
    sectionNav: "Router",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Router</code> demo shows Router usage of the TabMenu component."
      }
    },
    demo: {
      component: RouterDemo,
      props: {
        source: RouterSource,
        snippetName: "router",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "command",
    sectionNav: "Command",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Command</code> demo shows Command usage of the TabMenu component."
      }
    },
    demo: {
      component: CommandDemo,
      props: {
        source: CommandSource,
        snippetName: "command",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "accessibility",
    sectionNav: "Accessibility",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content:
          "The <code>Accessibility</code> demo shows TabMenu using <code>aria-label</code> to name the menubar and a disabled tab that exposes <code>aria-disabled</code> in line with the PrimeReact TabMenu accessibility guidance.",
      }
    },
    demo: {
      component: AccessibilityDemo,
      props: {
        source: AccessibilitySource,
        snippetName: "accessibility",
        language: "handlebars"
      }
    }
  }
];

export default function TabMenuFeatures() {
  return TabMenuFeatureItems;
}
