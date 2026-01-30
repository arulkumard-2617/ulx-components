// ==========================================================================
// Dialog Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  PositionDemo,// Sources
  ImportSource,
  BasicSource,
  PositionSource
} from './imports';

export const DialogFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxModal</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the UlxModal component."
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
    id: "position",
    sectionNav: "Position",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Position</code> demo shows position usage of the Dialog component."
      }
    },
    demo: {
      component: PositionDemo,
      props: {
        source: PositionSource,
        snippetName: "position",
        language: "handlebars"
      }
    }
  }
];

export default function DialogFeatures() {
  return DialogFeatureItems;
}
