// ==========================================================================
// Segment Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  VariantsDemo,
  BorderedDemo,
  
  GroupDemo,
  DisabledDemo,// Sources
  ImportSource,
  BasicSource,
  VariantsSource,
  BorderedSource,
  GroupSource,
  DisabledSource} from './imports';

export const SegmentFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Segment</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Segment component."
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
    id: "variants",
    sectionNav: "Variants",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Variants</code> demo shows Variants usage of the Segment component."
      }
    },
    demo: {
      component: VariantsDemo,
      props: {
        source: VariantsSource,
        snippetName: "variants",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "bordered",
    sectionNav: "Bordered",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Bordered</code> demo shows Bordered usage of the Segment component."
      }
    },
    demo: {
      component: BorderedDemo,
      props: {
        source: BorderedSource,
        snippetName: "bordered",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "group",
    sectionNav: "Group",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Group</code> demo shows Group usage of the Segment component."
      }
    },
    demo: {
      component: GroupDemo,
      props: {
        source: GroupSource,
        snippetName: "group",
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
        content: "The <code>Disabled</code> demo shows Disabled usage of the Segment component."
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
];

export default function SegmentFeatures() {
  return SegmentFeatureItems;
}
