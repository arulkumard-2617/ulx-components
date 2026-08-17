// ==========================================================================
// Modal Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  PositionDemo,
  HeadlessDemo,
  MaximizableDemo,
  LongcontentDemo,
  ResponsiveDemo,
  WithoutoverlayDemo,
  StackedDemo,
  ConfirmationServiceDemo,
  ConfirmationServiceContentDemo,
  FooterAlignmentDemo,
  ImportSource,
  BasicSource,
  PositionSource,
  HeadlessSource,
  MaximizableSource,
  LongcontentSource,
  ResponsiveSource,
  WithoutoverlaySource,
  StackedSource,
  ConfirmationServiceSource,
  ConfirmationServiceContentSource,
  FooterAlignmentSource
} from './imports';

export const ModalFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> property is used to import the <code>UlxModal</code> component.'
      }
    },
    demo: {
      component: null,
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
          'The <code>Basic</code> demo shows basic usage of the UlxModal component.'
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
    id: 'position',
    sectionNav: 'Position',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Position</code> demo shows position usage of the Modal component.'
      }
    },
    demo: {
      component: PositionDemo,
      props: {
        source: PositionSource,
        snippetName: 'position',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'headless',
    sectionNav: 'Headless',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Headless</code> demo shows fully custom content with no default header or footer. Use <code>@hideHeader={{true}}</code> and <code>@hideFooter={{true}}</code> with a <code>:body</code> block; close via <code>@onHide</code> or your own action.'
      }
    },
    demo: {
      component: HeadlessDemo,
      props: {
        source: HeadlessSource,
        snippetName: 'headless',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'maximizable',
    sectionNav: 'Maximizable',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Maximizable</code> demo shows maximizable usage of the Modal component.'
      }
    },
    demo: {
      component: MaximizableDemo,
      props: {
        source: MaximizableSource,
        snippetName: 'maximizable',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'longcontent',
    sectionNav: 'Longcontent',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Longcontent</code> demo shows longcontent usage of the Modal component.'
      }
    },
    demo: {
      component: LongcontentDemo,
      props: {
        source: LongcontentSource,
        snippetName: 'longcontent',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'responsive',
    sectionNav: 'Responsive',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Responsive</code> demo shows responsive usage of the Modal component.'
      }
    },
    demo: {
      component: ResponsiveDemo,
      props: {
        source: ResponsiveSource,
        snippetName: 'responsive',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'without-overlay',
    sectionNav: 'Withoutoverlay',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Withoutoverlay</code> demo shows withoutOverlay usage of the Modal component.'
      }
    },
    demo: {
      component: WithoutoverlayDemo,
      props: {
        source: WithoutoverlaySource,
        snippetName: 'without-overlay',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'confirmation-service',
    sectionNav: 'Confirmation service',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Mount <code>&lt;UlxConfirmationModal /&gt;</code> once in <code>application.hbs</code>, then call <code>this.modalManager.openModal()</code> from anywhere. No per-page <code>&lt;UlxModal&gt;</code> needed for confirm/delete flows.'
      }
    },
    demo: {
      component: ConfirmationServiceDemo,
      props: {
        source: ConfirmationServiceSource,
        snippetName: 'confirmation-service',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'confirmation-service-content',
    sectionNav: 'Confirmation service content',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Confirmation modals can render a plain <code>message</code>, an <code>htmlMessage</code>, or a custom <code>template</code>. You can also show an icon/illustration above the body with <code>iconName</code>, <code>iconHtml</code>, or <code>iconTemplate</code>.'
      }
    },
    demo: {
      component: ConfirmationServiceContentDemo,
      props: {
        source: ConfirmationServiceContentSource,
        snippetName: 'confirmation-service-content',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'footer-alignment',
    sectionNav: 'Footer alignment',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@footerAlign</code> to control footer action placement: <code>start</code>, <code>center</code>, <code>end</code>, or <code>space-between</code>. Works with the default footer and with a custom <code>:footer</code> block.'
      }
    },
    demo: {
      component: FooterAlignmentDemo,
      props: {
        source: FooterAlignmentSource,
        snippetName: 'footer-alignment',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'stacked',
    sectionNav: 'Stacked',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>Stacked</code> demo shows overlays (toast, popup, tiered menu, dropdown, tooltip) opened inside a modal. ESC closes the topmost overlay first; toasts close before the modal.'
      }
    },
    demo: {
      component: StackedDemo,
      props: {
        source: StackedSource,
        snippetName: 'stacked',
        language: 'handlebars'
      }
    }
  }
];

export default function ModalFeatures() {
  return ModalFeatureItems;
}
