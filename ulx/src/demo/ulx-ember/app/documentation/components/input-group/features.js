// ==========================================================================
// InputGroup Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  VerticalStackButtonsDemo,
  TemplateDemo,
  MultipleDemo,
  IconPrefixDemo,
  InputButtonDemo,
  InputActionsDemo,
  InputDropdownDemo,
  InputMultiDropdownDemo,
  DisabledDemo,
  InvalidDemo,
  // Sources
  ImportSource,
  BasicSource,
  VerticalStackButtonsSource,
  TemplateSource,
  MultipleSource,
  IconPrefixSource,
  InputButtonSource,
  InputActionsSource,
  InputDropdownSource,
  InputMultiDropdownSource,
  DisabledSource,
  InvalidSource
} from './imports';

export const InputGroupFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>InputGroup</code> component.'
      }
    },
    demo: {
      component: null, // Import section doesn't need demo
      props: {
        source: ImportSource,
        snippetName: 'import',
        language: 'jsx'
      }
    }
  },
  {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Basic</code> demo shows basic usage of the InputGroup component.'
      }
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: 'basic',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'vertical-stack-buttons',
    sectionNav: 'Vertical Stack Buttons',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>vertical-stack-addon</code> on an end addon with <code>UlxIconButton</code> increment and decrement controls. Pair with number inputs—for example a padding grid with top, bottom, left, and right values.'
      }
    },
    demo: {
      component: VerticalStackButtonsDemo,
      props: {
        source: VerticalStackButtonsSource,
        snippetName: 'verticalStackButtons',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Template</code> demo shows a combined layout: a start time input with a basic button addon, a duration pair using vertical-stack addons, and a checkbox to disable the fields when the time is to be announced.'
      }
    },
    demo: {
      component: TemplateDemo,
      props: {
        source: TemplateSource,
        snippetName: 'template',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'multiple',
    sectionNav: 'Multiple',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Multiple</code> demo shows Multiple usage of the InputGroup component.'
      }
    },
    demo: {
      component: MultipleDemo,
      props: {
        source: MultipleSource,
        snippetName: 'multiple',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'icon-prefix',
    sectionNav: 'Icon Prefix',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@startAddonClass="icon-addon"</code> with <code>UlxIcon</code> in the <code>&lt;:start&gt;</code> slot for form fields that show a leading icon and placeholder label inside the group.'
      }
    },
    demo: {
      component: IconPrefixDemo,
      props: {
        source: IconPrefixSource,
        snippetName: 'iconPrefix',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'input-button',
    sectionNav: 'Input Button',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>&lt;:start&gt;</code> and <code>&lt;:end&gt;</code> with <code>UlxButton</code> for input group with buttons.'
      }
    },
    demo: {
      component: InputButtonDemo,
      props: {
        source: InputButtonSource,
        snippetName: 'inputButton',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'input-actions',
    sectionNav: 'Input Actions',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Place confirm and cancel icon buttons beside an input group for inline editing. Wrap the group and actions in a flex row (e.g. <code>flex gap-2 items-center</code>) with a currency or text prefix addon on the input group.'
      }
    },
    demo: {
      component: InputActionsDemo,
      props: {
        source: InputActionsSource,
        snippetName: 'inputActions',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'input-dropdown',
    sectionNav: 'Input Dropdown',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>dropdown-addon</code> on <code>@startAddonClass</code> or <code>@endAddonClass</code> with <code>UlxDropdown</code> in the start, end, or both addon slots.'
      }
    },
    demo: {
      component: InputDropdownDemo,
      props: {
        source: InputDropdownSource,
        snippetName: 'inputDropdown',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'input-multi-dropdown',
    sectionNav: 'Input Multi Dropdown',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>dropdown-addon</code> with <code>UlxMultiSelect</code> in the start, end, or both addon slots for multi-select dropdowns in an input group.'
      }
    },
    demo: {
      component: InputMultiDropdownDemo,
      props: {
        source: InputMultiDropdownSource,
        snippetName: 'inputMultiDropdown',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'invalid',
    sectionNav: 'Invalid',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@invalid</code> on <code>UlxInputGroup</code> and pass <code>@invalid={{group.invalid}}</code> from the <code>&lt;:input&gt;</code> yield to keep the control and group in sync. Pair with <code>UlxField</code> <code>@error</code> for the error message.'
      }
    },
    demo: {
      component: InvalidDemo,
      props: {
        source: InvalidSource,
        snippetName: 'invalid',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'disabled',
    sectionNav: 'Disabled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@disabled</code> on <code>UlxInputGroup</code> to disable the whole group (<code>inert</code>, <code>aria-disabled</code>). Use <code>&lt;:input as |group|&gt;</code> and mirror <code>@disabled={{group.disabled}}</code> on the input; disable addon buttons separately.'
      }
    },
    demo: {
      component: DisabledDemo,
      props: {
        source: DisabledSource,
        snippetName: 'disabled',
        language: 'handlebars'
      }
    }
  }
];

export default function InputGroupFeatures() {
  return InputGroupFeatureItems;
}
