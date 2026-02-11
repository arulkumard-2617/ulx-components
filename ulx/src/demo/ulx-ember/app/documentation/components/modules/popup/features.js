// ==========================================================================
// Popup Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  PositionsDemo,// Sources
  ImportSource,
  BasicSource,
  PositionsSource
} from './imports';

export const PopupFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Popup</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Popup component."
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
    id: "positions",
    sectionNav: "Positions",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Positions</code> demo shows Positions usage of the Popup component."
      }
    },
    demo: {
      component: PositionsDemo,
      props: {
        source: PositionsSource,
        snippetName: "positions",
        language: "handlebars"
      }
    }
  }
];

export default function PopupFeatures() {
  return PopupFeatureItems;
}
