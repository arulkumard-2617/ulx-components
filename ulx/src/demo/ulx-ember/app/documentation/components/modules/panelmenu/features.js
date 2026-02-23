// ==========================================================================
// PanelMenu Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  CommandDemo,
  ControlledDemo,
  MultipleDemo,
  RouterDemo,
  TemplateDemo,
  ImportSource,
  BasicSource,
  MultipleSource,
  ControlledSource,
  TemplateSource,
  CommandSource,
  RouterSource
} from './imports';

export const PanelMenuFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> section shows how to import the <code>UlxPanelmenu</code> component."
      }
    },
    demo: {
      component: null,
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
        content: "Basic usage of PanelMenu with a nested model."
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
    id: "multiple",
    sectionNav: "Multiple",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Enable <code>@multiple={{true}}</code> to allow multiple root panels expanded at once."
      }
    },
    demo: {
      component: MultipleDemo,
      props: {
        source: MultipleSource,
        snippetName: "multiple",
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
        content: "Use <code>@expandedKeys</code> and <code>@onExpandedKeysChange</code> for controlled expansion state."
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
    id: "template",
    sectionNav: "Template",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Custom item rendering via <code>item.template</code>."
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
  },
  {
    id: "command",
    sectionNav: "Command",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Handle user selection with <code>item.command</code> callbacks."
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
  },
  {
    id: "router",
    sectionNav: "Router",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Use commands to navigate with Ember's router service."
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
  },
  {
    id: "accessibility",
    sectionNav: "Accessibility",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "PanelMenu uses <code>role=\"tree\"</code> for the root list with nested <code>role=\"group\"</code> lists. Headers are keyboard accessible."
      }
    },
    demo: {
      component: null,
      props: {}
    }
  }
];

export default function PanelmenuFeatures() {
  return PanelMenuFeatureItems;
}

