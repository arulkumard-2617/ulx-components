// ==========================================================================
// Segment Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  SolidBackgroundsDemo,
  PrimaryLayersDemo,
  GreenLayersDemo,
  BorderedDemo,
  BorderStartDemo,
  GroupDemo,
  DisabledDemo,
  // Sources
  ImportSource,
  BasicSource,
  SolidBackgroundsSource,
  PrimaryLayersSource,
  GreenLayersSource,
  BorderedSource,
  BorderStartSource,
  GroupSource,
  DisabledSource
} from './imports';

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
  },
  {
    id: "solid-backgrounds",
    sectionNav: "Solid backgrounds",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Solid color context surfaces (<code>color-primary</code>, <code>color-green</code>) via <code>@customClass</code> on <code>UlxSegment</code>."
      }
    },
    demo: {
      component: SolidBackgroundsDemo,
      props: {
        source: SolidBackgroundsSource,
        snippetName: "solid-backgrounds",
        language: "handlebars"
      }
    }
  },
  {
    id: "primary-layers",
    sectionNav: "Primary layers",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Tinted primary layer surfaces (<code>color-primary-layer1</code>–<code>layer4</code>) via <code>@customClass</code> on <code>UlxSegment</code>."
      }
    },
    demo: {
      component: PrimaryLayersDemo,
      props: {
        source: PrimaryLayersSource,
        snippetName: "primary-layers",
        language: "handlebars"
      }
    }
  },
  {
    id: "green-layers",
    sectionNav: "Green layers",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Tinted green layer surfaces (<code>color-green-layer1</code>–<code>layer3</code>) via <code>@customClass</code> on <code>UlxSegment</code>."
      }
    },
    demo: {
      component: GreenLayersDemo,
      props: {
        source: GreenLayersSource,
        snippetName: "green-layers",
        language: "handlebars"
      }
    }
  },
  {
    id: "bordered",
    sectionNav: "Bordered",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Add <code>bordered</code> to a <code>color-*</code> surface for a 1px outline. Override text with <code>fg-primary</code> or <code>fg-green</code>. Use <code>marked</code> on <code>UlxTag</code> for a leading accent dot."
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
  },
  {
    id: "border-start",
    sectionNav: "Border start",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Inline-start accent borders via <code>primary-border-start</code> or <code>green-border-start</code>, paired with a <code>color-*</code> surface or used alone."
      }
    },
    demo: {
      component: BorderStartDemo,
      props: {
        source: BorderStartSource,
        snippetName: "border-start",
        language: "handlebars"
      }
    }
  },
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
  },
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
