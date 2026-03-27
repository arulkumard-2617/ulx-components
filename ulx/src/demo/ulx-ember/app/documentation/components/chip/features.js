// ==========================================================================
// Chip Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  IconDemo,
  ImageDemo,
  TemplateDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  IconSource,
  ImageSource,
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
