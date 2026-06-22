// ==========================================================================
// TristateCheckbox Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  NestedDemo,
  // Sources
  ImportSource,
  BasicSource,
  NestedSource
} from './imports';

export const TristateCheckboxFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>TristateCheckbox</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the TristateCheckbox component."
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
    id: "nested",
    sectionNav: "Nested",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Nested</code> demo shows hierarchical checkboxes with tristate parent controls and primary connector lines."
      }
    },
    demo: {
      component: NestedDemo,
      props: {
        source: NestedSource,
        snippetName: "nested",
        language: "handlebars"
      }
    }
  }
];

export default function TristateCheckboxFeatures() {
  return TristateCheckboxFeatureItems;
}
