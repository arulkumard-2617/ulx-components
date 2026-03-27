// ==========================================================================
// Tieredmenu Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  PopupDemo,
  TemplateDemo,
  
  CommandDemo,
  RouterDemo,// Sources
  ImportSource,
  BasicSource,
  PopupSource,
  TemplateSource,
  CommandSource,
  RouterSource
} from './imports';

export const TieredmenuFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxTieredmenu</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Tieredmenu component with nested submenus."
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
    id: "popup",
    sectionNav: "Popup",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Popup</code> demo shows the Tieredmenu in popup/overlay mode, triggered by a button. Use <code>@popup={{true}}</code>, <code>@visible</code>, and <code>@onHide</code> to control visibility."
      }
    },
    demo: {
      component: PopupDemo,
      props: {
        source: PopupSource,
        snippetName: "popup",
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
        content: "The <code>Template</code> demo shows custom item rendering with <code>badge</code>, <code>shortcut</code> properties and custom <code>@itemTemplate</code> component. The template receives <code>@item</code>, <code>@hasSubmenu</code>, and <code>@onClick</code> arguments."
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
,
  {
    id: "command",
    sectionNav: "Command",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Command</code> demo shows Command usage of the Tieredmenu component."
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
    id: "router",
    sectionNav: "Router",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Router</code> demo shows Router usage of the Tieredmenu component."
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
];

export default function TieredmenuFeatures() {
  return TieredmenuFeatureItems;
}
