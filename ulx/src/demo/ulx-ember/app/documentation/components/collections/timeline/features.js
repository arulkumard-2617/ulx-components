// ==========================================================================
// Timeline Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  AlignmentDemo,
  OppositeDemo,
  TemplateDemo,
  HorizontalDemo,
  // Sources
  ImportSource,
  BasicSource,
  AlignmentSource,
  OppositeSource,
  TemplateSource,
  HorizontalSource
} from './imports';

export const TimelineFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxTimeline</code> component."
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
        content: "Timeline requires a <code>model</code> for the collection of events and a <code>:content</code> block to render each item."
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
    id: "alignment",
    sectionNav: "Alignment",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Content location relative to the line is defined with the <code>align</code> property."
      }
    },
    demo: {
      component: AlignmentDemo,
      props: {
        source: AlignmentSource,
        snippetName: "alignment",
        language: "handlebars"
      }
    }
  },
  {
    id: "opposite",
    sectionNav: "Opposite",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Additional content at the other side of the line can be provided with the <code>:opposite</code> named block."
      }
    },
    demo: {
      component: OppositeDemo,
      props: {
        source: OppositeSource,
        snippetName: "opposite",
        language: "handlebars"
      }
    }
  },
  {
    id: "template",
    sectionNav: "Template",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Sample implementation with custom content and custom markers using <code>:marker</code> and <code>:content</code>."
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
  },
  {
    id: "horizontal",
    sectionNav: "Horizontal",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Timeline orientation is controlled with the <code>layout</code> property; default is <code>vertical</code> with <code>horizontal</code> as the alternative."
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
  },
  {
    id: "accessibility",
    sectionNav: "Accessibility",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Timeline renders a semantic ordered list for events. The component itself has no interactive elements, so no keyboard handling is required."
      }
    }
  }
];

export default function TimelineFeatures() {
  return TimelineFeatureItems;
}
