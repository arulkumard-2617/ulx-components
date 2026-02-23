// ==========================================================================
// PanelMenu Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  // Sources
  ImportSource,
  BasicSource
} from './imports';

export const PanelMenuFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>PanelMenu</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the PanelMenu component."
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
];

export default function PanelMenuFeatures() {
  return PanelMenuFeatureItems;
}
