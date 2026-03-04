// ==========================================================================
// Accordion Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  SingleDemo,
  MultipleDemo,
  DisabledDemo,
  ControlledDemo,
  DynamicDemo,
  TemplateDemo,
  ImportSource,
  BasicSource,
  SingleSource,
  MultipleSource,
  DisabledSource,
  ControlledSource,
  DynamicSource,
  TemplateSource
} from './imports';

export const AccordionFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: "The <code>import</code> property is used to import the <code>UlxAccordion</code> component."
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
        content: "Accordion consists of one or more tabs which are collapsed by default. Tab to expand initially can be defined with the <i>activeIndex</i> property."
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
    id: 'dynamic',
    sectionNav: 'Dynamic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: "Accordion tabs can be generated dynamically using <code>@model</code>."
      }
    },
    demo: {
      component: DynamicDemo,
      props: {
        source: DynamicSource,
        snippetName: 'dynamic',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'single',
    sectionNav: 'Flat',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: "By default, Accordion allows only a single tab expanded at a time."
      }
    },
    demo: {
      component: SingleDemo,
      props: {
        source: SingleSource,
        snippetName: 'single',
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
        content: "Only one tab at a time can be active by default; enabling <i>multiple</i> allows multiple tabs. In that case <i>activeIndex</i> is an array."
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
    id: 'disabled',
    sectionNav: 'Disabled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: "Enabling <i>disabled</i> on a tab prevents user interaction."
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
    id: 'controlled',
    sectionNav: 'Controlled',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content: "Accordion can be controlled programmatically using <i>activeIndex</i> with <i>onTabChange</i> to update the active index."
      }
    },
    demo: {
      component: ControlledDemo,
      props: {
        source: ControlledSource,
        snippetName: 'controlled',
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
        content: "Content section of a tab is customized with the <i>:content</i> block."
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
  }
];

export default function AccordionFeatures() {
  return AccordionFeatureItems;
}
