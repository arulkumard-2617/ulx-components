// ==========================================================================
// Slidepane Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  PositionDemo,
  FullscreenDemo,
  TemplateDemo,
  WithoutoverlayDemo,
  NestedpanesDemo,
  SizesDemo,
  // Sources
  ImportSource,
  BasicSource,
  PositionSource,
  FullscreenSource,
  TemplateSource,
  WithoutoverlaySource,
  NestedpanesSource,
  SizesSource
} from './imports';

export const SlidepaneFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Slidepane</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Slidepane component."
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
    id: "sizes",
    sectionNav: "Sizes",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Sizes</code> demo shows how to configure different widths for the Slidepane using the <code>@size</code> argument (e.g. <code>s-size</code>, <code>m-size</code>, <code>l-size</code>)."
      }
    },
    demo: {
      component: SizesDemo,
      props: {
        source: SizesSource,
        snippetName: "sizes",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "position",
    sectionNav: "Position",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Position</code> demo shows position usage of the Slidepane component."
      }
    },
    demo: {
      component: PositionDemo,
      props: {
        source: PositionSource,
        snippetName: "position",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "full-screen",
    sectionNav: "Fullscreen",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Fullscreen</code> demo shows fullScreen usage of the Slidepane component."
      }
    },
    demo: {
      component: FullscreenDemo,
      props: {
        source: FullscreenSource,
        snippetName: "full-screen",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "template",
    sectionNav: "Template",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Template</code> demo shows template usage of the Slidepane component."
      }
    },
    demo: {
      component: TemplateDemo,
      props: {
        source: TemplateSource,
        snippetName: "template",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "without-overlay",
    sectionNav: "Withoutoverlay",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Withoutoverlay</code> demo shows withoutOverlay usage of the Slidepane component."
      }
    },
    demo: {
      component: WithoutoverlayDemo,
      props: {
        source: WithoutoverlaySource,
        snippetName: "without-overlay",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "nested-panes",
    sectionNav: "Nestedpanes",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Nestedpanes</code> demo shows nestedPanes usage of the Slidepane component."
      }
    },
    demo: {
      component: NestedpanesDemo,
      props: {
        source: NestedpanesSource,
        snippetName: "nested-panes",
        language: "handlebars"
      }
    }
  }
];

export default function SlidepaneFeatures() {
  return SlidepaneFeatureItems;
}
