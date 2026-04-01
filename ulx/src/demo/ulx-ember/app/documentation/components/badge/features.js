// ==========================================================================
// Badge Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  VariantsDemo,
  TypeDemo,
  SizeDemo,// Sources
  ImportSource,
  BasicSource,
  VariantsSource,
  TypeSource,
  SizeSource
} from './imports';

export const BadgeFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Badge</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Badge component."
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
        content: "The <code>Variants</code> demo shows Variants usage of the Badge component."
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
    id: "type",
    sectionNav: "Type",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Type</code> demo shows Type usage of the Badge component."
      }
    },
    demo: {
      component: TypeDemo,
      props: {
        source: TypeSource,
        snippetName: "type",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "size",
    sectionNav: "Size",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Size</code> demo shows Size usage of the Badge component."
      }
    },
    demo: {
      component: SizeDemo,
      props: {
        source: SizeSource,
        snippetName: "size",
        language: "handlebars"
      }
    }
  }
];

export default function BadgeFeatures() {
  return BadgeFeatureItems;
}
