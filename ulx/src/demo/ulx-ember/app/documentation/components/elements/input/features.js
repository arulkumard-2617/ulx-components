// ==========================================================================
// Input Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  TemplateDemo,
  KeyfilterDemo,
  SizesDemo,
  FloatlabelDemo,
  FilledDemo,
  InvalidDemo,
  DisabledDemo,
  // Sources
  ImportSource,
  BasicSource,
  TemplateSource,
  KeyfilterSource,
  SizesSource,
  FloatlabelSource,
  FilledSource,
  InvalidSource,
  DisabledSource
} from './imports';

export const InputFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Input</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Input component."
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
    id: "template",
    sectionNav: "Template",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content:
          'The <code>Template</code> demo shows a common form layout: first and last name inputs, and a checkbox rendered via the new <code>&lt;:bottom&gt;</code> block to feature the speaker.'
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
    id: "key-filter",
    sectionNav: "Keyfilter",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Keyfilter</code> demo shows KeyFilter usage of the Input component."
      }
    },
    demo: {
      component: KeyfilterDemo,
      props: {
        source: KeyfilterSource,
        snippetName: "key-filter",
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
        content: "The <code>Sizes</code> demo shows Sizes usage of the Input component."
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
    id: "float-label",
    sectionNav: "Floatlabel",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Floatlabel</code> demo shows FloatLabel usage of the Input component."
      }
    },
    demo: {
      component: FloatlabelDemo,
      props: {
        source: FloatlabelSource,
        snippetName: "float-label",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "filled",
    sectionNav: "Filled",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Filled</code> demo shows Filled usage of the Input component."
      }
    },
    demo: {
      component: FilledDemo,
      props: {
        source: FilledSource,
        snippetName: "filled",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "invalid",
    sectionNav: "Invalid",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Invalid</code> demo shows Invalid usage of the Input component."
      }
    },
    demo: {
      component: InvalidDemo,
      props: {
        source: InvalidSource,
        snippetName: "invalid",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "disabled",
    sectionNav: "Disabled",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Disabled</code> demo shows Disabled usage of the Input component."
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

export default function InputFeatures() {
  return InputFeatureItems;
}
