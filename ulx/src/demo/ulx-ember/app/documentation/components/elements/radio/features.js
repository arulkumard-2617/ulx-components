// ==========================================================================
// Radio Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  WithlabelDemo,
  
  InvalidDemo,
  DisabledDemo,
  HorizontalDemo,// Sources
  ImportSource,
  BasicSource,
  WithlabelSource,
  InvalidSource,
  DisabledSource,
  HorizontalSource} from './imports';

export const RadioFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Radio</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Radio component."
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
    id: "with-label",
    sectionNav: "Withlabel",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Withlabel</code> demo shows WithLabel usage of the Radio component."
      }
    },
    demo: {
      component: WithlabelDemo,
      props: {
        source: WithlabelSource,
        snippetName: "with-label",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "invalid",
    sectionNav: "Invalid",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Invalid</code> demo shows Invalid usage of the Radio component."
      }
    },
    demo: {
      component: InvalidDemo,
      props: {
        source: InvalidSource,
        snippetName: "invalid",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "disabled",
    sectionNav: "Disabled",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Disabled</code> demo shows Disabled usage of the Radio component."
      }
    },
    demo: {
      component: DisabledDemo,
      props: {
        source: DisabledSource,
        snippetName: "disabled",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "horizontal",
    sectionNav: "Horizontal",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Horizontal</code> demo shows Horizontal usage of the Radio component."
      }
    },
    demo: {
      component: HorizontalDemo,
      props: {
        source: HorizontalSource,
        snippetName: "horizontal",
        language: "handlebars"
      }
    }
  }
];

export default function RadioFeatures() {
  return RadioFeatureItems;
}
