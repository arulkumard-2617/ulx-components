// ==========================================================================
// SplitButton Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  VariantsDemo,
  OutlinedDemo,
  TextDemo,
  SizesDemo,
  DisabledDemo,
  LoadingDemo,
  PopupDemo,
  PopupNamedBlocksDemo,
  PopupDefaultHeaderDemo,
  PopupWithoutHeaderDemo,
  PopupDefaultFooterDemo,
  PopupBodyOnlyDemo,
  PopupClosableDemo,
  PopupPositionsDemo,
  TemplateDemo,
  IconsDemo,
  SeparatorDemo,
  ImportSource,
  BasicSource,
  VariantsSource,
  OutlinedSource,
  TextSource,
  SizesSource,
  DisabledSource,
  LoadingSource,
  PopupSource,
  PopupNamedBlocksSource,
  PopupDefaultHeaderSource,
  PopupWithoutHeaderSource,
  PopupDefaultFooterSource,
  PopupBodyOnlySource,
  PopupClosableSource,
  PopupPositionsSource,
  TemplateSource,
  IconsSource,
  SeparatorSource
} from './imports';

export const SplitButtonFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import the <code>UlxSplitButton</code> component from <code>ulx-components</code>.'
      }
    },
    demo: {
      component: null,
      props: { source: ImportSource, snippetName: 'import', language: 'jsx' }
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
          'The <code>Basic</code> demo shows a default primary split button with a main action and dropdown menu.'
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
    id: 'variants',
    sectionNav: 'Variants',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Variants</code> demo shows semantic variants: primary, secondary, success, and danger.'
      }
    },
    demo: {
      component: VariantsDemo,
      props: {
        source: VariantsSource,
        snippetName: 'variants',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'outlined',
    sectionNav: 'Outlined',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Outlined</code> variant displays buttons with a transparent background and colored border.'
      }
    },
    demo: {
      component: OutlinedDemo,
      props: {
        source: OutlinedSource,
        snippetName: 'outlined',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup',
    sectionNav: 'Popup',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@popup={{true}}</code> to open a chevron-triggered popup instead of a tiered menu. Nest <code>UlxPopup</code> in the default block (<code>as |popup|</code>) and pass <code>popup.visible</code>, <code>popup.target</code>, and <code>popup.onHide</code>. Configure the popup with <code>UlxPopup</code> arguments such as <code>@title</code>, <code>@cancelButtonLabel</code>, and <code>@onDone</code> — no named blocks required.'
      }
    },
    demo: {
      component: PopupDemo,
      props: {
        source: PopupSource,
        snippetName: 'popup',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup-named-blocks',
    sectionNav: 'Popup named blocks',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>&lt;:head&gt;</code>, <code>&lt;:body&gt;</code>, and <code>&lt;:footer&gt;</code> on the nested <code>UlxPopup</code> for custom header, body, and footer markup. Set <code>@hideFooter={{true}}</code> when providing a custom <code>&lt;:footer&gt;</code> block. Place <code>UlxButton</code> controls as direct children of <code>&lt;:footer&gt;</code> so <code>.popup-footer</code> alignment matches <code>UlxPopup</code>.'
      }
    },
    demo: {
      component: PopupNamedBlocksDemo,
      props: {
        source: PopupNamedBlocksSource,
        snippetName: 'popupNamedBlocks',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup-default-header',
    sectionNav: 'Popup default header',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Pass <code>@title</code> on <code>UlxPopup</code> for the built-in popup header when you do not provide a custom <code>&lt;:head&gt;</code> block.'
      }
    },
    demo: {
      component: PopupDefaultHeaderDemo,
      props: {
        source: PopupDefaultHeaderSource,
        snippetName: 'popupDefaultHeader',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup-without-header',
    sectionNav: 'Popup without header',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Omit <code>@title</code> and <code>&lt;:head&gt;</code> on <code>UlxPopup</code> for a headless popup. Set <code>@ariaLabel</code> for accessibility.'
      }
    },
    demo: {
      component: PopupWithoutHeaderDemo,
      props: {
        source: PopupWithoutHeaderSource,
        snippetName: 'popupWithoutHeader',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup-default-footer',
    sectionNav: 'Popup default footer',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@cancelButtonLabel</code>, <code>@doneButtonLabel</code>, and <code>@onDone</code> on <code>UlxPopup</code> for the default footer actions.'
      }
    },
    demo: {
      component: PopupDefaultFooterDemo,
      props: {
        source: PopupDefaultFooterSource,
        snippetName: 'popupDefaultFooter',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup-body-only',
    sectionNav: 'Popup body only',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@hideFooter={{true}}</code> on <code>UlxPopup</code> for body-only popup content with no header or footer chrome.'
      }
    },
    demo: {
      component: PopupBodyOnlyDemo,
      props: {
        source: PopupBodyOnlySource,
        snippetName: 'popupBodyOnly',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup-closable',
    sectionNav: 'Popup closable',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@closable={{true}}</code> on <code>UlxPopup</code> to show the close button in the panel chrome.'
      }
    },
    demo: {
      component: PopupClosableDemo,
      props: {
        source: PopupClosableSource,
        snippetName: 'popupClosable',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'popup-positions',
    sectionNav: 'Popup positions',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Control popup placement with <code>@position</code> on <code>UlxPopup</code>. Use values such as <code>position-bottom-right</code>, <code>position-top</code>, or <code>position-left</code>.'
      }
    },
    demo: {
      component: PopupPositionsDemo,
      props: {
        source: PopupPositionsSource,
        snippetName: 'popupPositions',
        language: 'handlebars'
      }
    }
  },

  {
    id: 'text',
    sectionNav: 'Text',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Text</code> variant displays buttons with a transparent background, suitable for less prominent actions.'
      }
    },
    demo: {
      component: TextDemo,
      props: {
        source: TextSource,
        snippetName: 'text',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'sizes',
    sectionNav: 'Sizes',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@size</code> for small (<code>s-size</code>), default, or large (<code>l-size</code>).'
      }
    },
    demo: {
      component: SizesDemo,
      props: {
        source: SizesSource,
        snippetName: 'sizes',
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
          'When <code>@disabled</code> is true, both the main button and dropdown are disabled.'
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
  },
  {
    id: 'loading',
    sectionNav: 'Loading',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'When the main action returns a Promise from <code>@onClick</code>, the main button shows a loading state until the promise settles.'
      }
    },
    demo: {
      component: LoadingDemo,
      props: {
        source: LoadingSource,
        snippetName: 'loading',
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
          'Use <code>@label</code> and <code>@icon</code> to define the main button content.'
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
    id: 'icons',
    sectionNav: 'Icons',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@icon</code> for the main button and <code>@dropdownIcon</code> for the dropdown trigger icon.'
      }
    },
    demo: {
      component: IconsDemo,
      props: {
        source: IconsSource,
        snippetName: 'icons',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'separator',
    sectionNav: 'Separator',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Add <code>{ separator: true }</code> to the <code>@items</code> array to render a divider between dropdown menu entries.'
      }
    },
    demo: {
      component: SeparatorDemo,
      props: {
        source: SeparatorSource,
        snippetName: 'separator',
        language: 'handlebars'
      }
    }
  }
];

export default function SplitButtonFeatures() {
  return SplitButtonFeatureItems;
}
