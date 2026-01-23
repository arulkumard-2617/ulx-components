// ==========================================================================
// TabMenu Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';

import { 
  // Demos
  BasicDemo,
  ControlledDemo,// Sources
  ImportSource,
  BasicSource,
  ControlledSource} from './imports';

export const TabMenuFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>TabMenu</code> component."
      }
    },
    demo: {
      component: null, // Import section doesn't need demo
      props: {
        source: ImportSource,
        snippetName: "import"}
    }
  },
  {
    id: "basic",
    sectionNav: "Basic",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the TabMenu component."
      }
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: "basic"}
    }
  },
  {
    id: "controlled",
    sectionNav: "Controlled",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Basic</code> demo shows basic usage of the TabMenu component."
      }
    },
    demo: {
      component: ControlledDemo,
      props: {
        source: ControlledSource,
        snippetName: "controlled"
      }
    }
  }
];

export default function TabMenuFeatures() {
  return TabMenuFeatureItems;
}
