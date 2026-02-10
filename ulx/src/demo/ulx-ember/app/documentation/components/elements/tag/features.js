// ==========================================================================
// Tag Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  
  VariationsDemo,
  TypeDemo,
  SymbolDemo,
  SizeDemo,// Sources
  ImportSource,
  BasicSource,
  VariationsSource,
  TypeSource,
  SymbolSource,
  SizeSource
} from './imports';

export const TagFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Tag</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Tag component."
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
    id: "variations",
    sectionNav: "Variations",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Variations</code> demo shows Variations usage of the Tag component."
      }
    },
    demo: {
      component: VariationsDemo,
      props: {
        source: VariationsSource,
        snippetName: "variations",
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
        content: "The <code>Type</code> demo shows Type usage of the Tag component."
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
    id: "symbol",
    sectionNav: "Symbol",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Symbol</code> demo shows Symbol usage of the Tag component."
      }
    },
    demo: {
      component: SymbolDemo,
      props: {
        source: SymbolSource,
        snippetName: "symbol",
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
        content: "The <code>Size</code> demo shows Size usage of the Tag component."
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

export default function TagFeatures() {
  return TagFeatureItems;
}
