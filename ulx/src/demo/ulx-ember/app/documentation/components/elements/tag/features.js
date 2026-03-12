// ==========================================================================
// Tag Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  VariationsDemo,
  ExtendedPaletteDemo,
  LightSoftColorsDemo,
  StatusLabelsDemo,
  TypeDemo,
  SymbolDemo,
  SizeDemo,
  // Sources
  ImportSource,
  BasicSource,
  VariationsSource,
  ExtendedPaletteSource,
  LightSoftColorsSource,
  StatusLabelsSource,
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
    id: "semantic-variants",
    sectionNav: "Variant colors (semantic)",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Shows semantic Tag variants like <code>primary</code>, <code>success</code>, <code>danger</code>, and related theme colors."
      }
    },
    demo: {
      component: VariationsDemo,
      props: {
        source: VariationsSource,
        snippetName: "semantic-variants",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "extended-palette",
    sectionNav: "Extended palette",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Shows extended color palette variants like <code>tag-red</code>, <code>tag-blue</code>, and other project colors."
      }
    },
    demo: {
      component: ExtendedPaletteDemo,
      props: {
        source: ExtendedPaletteSource,
        snippetName: "extended-palette",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "light-soft-colors",
    sectionNav: "Light / soft colors",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Shows soft tone Tag colors using <code>lt-*</code> and <code>light-*</code> classes for subtle backgrounds."
      }
    },
    demo: {
      component: LightSoftColorsDemo,
      props: {
        source: LightSoftColorsSource,
        snippetName: "light-soft-colors",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "status-labels",
    sectionNav: "Status & labels",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Shows status and label Tag variants like <code>running-color</code>, <code>completed-color</code>, and user check-in labels."
      }
    },
    demo: {
      component: StatusLabelsDemo,
      props: {
        source: StatusLabelsSource,
        snippetName: "status-labels",
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
