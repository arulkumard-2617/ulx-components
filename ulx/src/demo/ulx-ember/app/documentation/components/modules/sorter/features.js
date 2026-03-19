// ==========================================================================
// Sorter Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  HandleDemo,
  ImportSource,
  BasicSource,
  HandleSource
} from './imports';

export const SorterFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxSorter</code> and <code>UlxSorterItem</code> components."
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
        content: "The <code>Basic</code> demo shows a vertical sortable list. Drag items to reorder."
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
    id: "handle",
    sectionNav: "Handle",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Use a drag handle so only the handle starts the drag. Pass <code>@handle</code> to UlxSorterItem and attach the sortable-handle modifier to the handle element."
      }
    },
    demo: {
      component: HandleDemo,
      props: {
        source: HandleSource,
        snippetName: "handle",
        language: "handlebars"
      }
    }
  },
];

export default function SorterFeatures() {
  return SorterFeatureItems;
}
