// ==========================================================================
// InputGroup Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  MultipleDemo,// Sources
  ImportSource,
  BasicSource,
  MultipleSource
} from './imports';

export const InputGroupFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>InputGroup</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the InputGroup component."
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
    id: "multiple",
    sectionNav: "Multiple",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Multiple</code> demo shows Multiple usage of the InputGroup component."
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
  }
];

export default function InputGroupFeatures() {
  return InputGroupFeatureItems;
}
