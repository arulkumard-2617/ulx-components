// ==========================================================================
// Tieredmenu Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  PopupDemo,
  TemplateDemo,
  // Sources
  ImportSource,
  BasicSource,
  PopupSource,
  TemplateSource
} from './imports';

export const TieredmenuFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlsTieredmenu</code> component."
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
];

export default function TieredmenuFeatures() {
  return TieredmenuFeatureItems;
}
