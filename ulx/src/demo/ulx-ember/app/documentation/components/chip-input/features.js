// ==========================================================================
// Chip Input Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  DisabledDemo,
  InvalidDemo,
  MaxDemo,
  SizesDemo,
  SeparatorDemo,
  ImportSource,
  BasicSource,
  DisabledSource,
  InvalidSource,
  MaxSource,
  SizesSource,
  SeparatorSource,
} from './imports';

export const ChipInputFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>ChipInput</code> component."
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
        content: "Type a value and press <kbd>Enter</kbd> to add it as a chip. Press <kbd>Backspace</kbd> on an empty field to remove the last chip."
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
    id: "disabled",
    sectionNav: "Disabled",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Set <code>@disabled={{true}}</code> to prevent adding or removing chips."
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
  },
  {
    id: "invalid",
    sectionNav: "Invalid",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Set <code>@invalid={{true}}</code> to apply the error visual state."
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
  },
  {
    id: "max",
    sectionNav: "Max Chips",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Use <code>@max</code> to limit the number of chips. The input field is hidden once the limit is reached."
      }
    },
    demo: {
      component: MaxDemo,
      props: {
        source: MaxSource,
        snippetName: "max",
        language: "handlebars"
      }
    }
  },
  {
    id: "sizes",
    sectionNav: "Sizes",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "ChipInput supports the same size variants as <code>UlxInput</code>: <code>xs-size</code>, <code>s-size</code>, <code>m-size</code>, <code>l-size</code>, and <code>xl-size</code>."
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
  },
  {
    id: "separator",
    sectionNav: "Separator",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Use <code>@separator</code> to control which key commits a chip. Pass a single key string (e.g. <code>@separator=\",\"</code>) or an array of keys (e.g. <code>@separator={{array \"Enter\" \",\"}}</code>) to support multiple separators at once."
      }
    },
    demo: {
      component: SeparatorDemo,
      props: {
        source: SeparatorSource,
        snippetName: "separator",
        language: "handlebars"
      }
    }
  }
];

export default function ChipInputFeatures() {
  return ChipInputFeatureItems;
}
