// ==========================================================================
// Popup Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  PositionsDemo,
  HoverClickDemo,
  // Sources
  ImportSource,
  BasicSource,
  PositionsSource,
  HoverClickSource
} from './imports';

export const PopupFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Popup</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Popup component."
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
    id: "hover-click",
    sectionNav: "Interaction modes",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content:
          "Two examples side by side: <code>@interactionMode=&quot;click&quot;</code> (toggle on click / Enter / Space only) and <code>@interactionMode=&quot;hover&quot;</code> (open on pointer hover; dismiss elsewhere)."
      }
    },
    demo: {
      component: HoverClickDemo,
      props: {
        source: HoverClickSource,
        snippetName: "hover-click",
        language: "handlebars"
      }
    }
  },
  {
    id: "positions",
    sectionNav: "Positions",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Positions</code> demo shows Positions usage of the Popup component."
      }
    },
    demo: {
      component: PositionsDemo,
      props: {
        source: PositionsSource,
        snippetName: "positions",
        language: "handlebars"
      }
    }
  }
];

export default function PopupFeatures() {
  return PopupFeatureItems;
}
