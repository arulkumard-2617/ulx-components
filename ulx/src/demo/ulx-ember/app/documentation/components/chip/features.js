// ==========================================================================
// Chip Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  SelectableDemo,
  LayeredDemo,
  IconDemo,
  ImageDemo,
  OnHoverDemo,
  TemplateDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  SelectableSource,
  LayeredSource,
  IconSource,
  ImageSource,
  OnHoverSource,
  TemplateSource,
  AccessibilitySource
} from './imports';

export const ChipFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Chip</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Chip component."
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
    id: "selectable",
    sectionNav: "Selectable",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Wrap chips in <code>ulx-chips</code> for a wrapping row. Use <code>@selectable</code> and <code>@selected</code> for toggle-style chips with a primary outline and tick when selected."
      }
    },
    demo: {
      component: SelectableDemo,
      props: {
        source: SelectableSource,
        snippetName: "selectable",
        language: "handlebars"
      }
    }
  },
  {
    id: "layered",
    sectionNav: "Layered",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Layered</code> demo shows Chip colors that use design-system layer backgrounds."
      }
    },
    demo: {
      component: LayeredDemo,
      props: {
        source: LayeredSource,
        snippetName: "layered",
        language: "handlebars"
      }
    }
  },
  {
    id: "icon",
    sectionNav: "Icon",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Icon</code> demo shows Chip with an icon."
      }
    },
    demo: {
      component: IconDemo,
      props: {
        source: IconSource,
        snippetName: "icon",
        language: "handlebars"
      }
    }
  },
  {
    id: "image",
    sectionNav: "Image",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Image</code> demo shows Chip with an image."
      }
    },
    demo: {
      component: ImageDemo,
      props: {
        source: ImageSource,
        snippetName: "image",
        language: "handlebars"
      }
    }
  },
  {
    id: "on-hover",
    sectionNav: "On Hover",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>On Hover</code> demo shows chips that reveal their label when hovered or focused."
      }
    },
    demo: {
      component: OnHoverDemo,
      props: {
        source: OnHoverSource,
        snippetName: "on-hover",
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
        content: "The <code>Template</code> demo shows custom content with the default block."
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
    id: "accessibility",
    sectionNav: "Accessibility",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Keyboard: Enter, NumpadEnter, Backspace on the remove control trigger removal. The remove button has an accessible name."
      }
    },
    demo: {
      component: AccessibilityDemo,
      props: {
        source: AccessibilitySource,
        snippetName: "accessibility",
        language: "handlebars"
      }
    }
  }
];

export default function ChipFeatures() {
  return ChipFeatureItems;
}
