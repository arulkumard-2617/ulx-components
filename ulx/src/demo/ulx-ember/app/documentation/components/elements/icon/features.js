// ==========================================================================
// Icon Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import { 
  // Demos
  BasicDemo,
  
  SizeDemo,
  ColorDemo,
  SpinDemo,
  LayerDemo,
  ListDemo,// Sources
  ImportSource,
  BasicSource,
  SizeSource,
  ColorSource,
  SpinSource,
  LayerSource,
  ListSource
} from './imports';

export const IconFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Icon</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Icon component."
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
    id: "size",
    sectionNav: "Size",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Size</code> demo shows size usage of the Icon component."
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
,
  {
    id: "color",
    sectionNav: "Color",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Color</code> demo shows color usage of the Icon component."
      }
    },
    demo: {
      component: ColorDemo,
      props: {
        source: ColorSource,
        snippetName: "color",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "spin",
    sectionNav: "Spin",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Spin</code> demo shows spin usage of the Icon component."
      }
    },
    demo: {
      component: SpinDemo,
      props: {
        source: SpinSource,
        snippetName: "spin",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "layer",
    sectionNav: "Layer",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Layer</code> demo shows layer usage of the Icon component."
      }
    },
    demo: {
      component: LayerDemo,
      props: {
        source: LayerSource,
        snippetName: "layer",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "list",
    sectionNav: "List",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>List</code> demo shows list usage of the Icon component."
      }
    },
    demo: {
      component: ListDemo,
      props: {
        source: ListSource,
        snippetName: "list",
        language: "handlebars"
      }
    }
  }
];

export default function IconFeatures() {
  return IconFeatureItems;
}
