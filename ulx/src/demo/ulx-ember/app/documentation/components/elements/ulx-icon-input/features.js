// ==========================================================================
// UlxIconInput Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  NamedblocksDemo,// Sources
  ImportSource,
  BasicSource,
  NamedblocksSource
} from './imports';

export const UlxIconInputFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxIconInput</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the UlxIconInput component."
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
    id: "named-blocks",
    sectionNav: "Namedblocks",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Namedblocks</code> demo shows NamedBlocks usage of the UlxIconInput component."
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
];

export default function UlxIconInputFeatures() {
  return UlxIconInputFeatureItems;
}
