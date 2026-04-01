// ==========================================================================
// Form Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  TemplateDemo,
  // Sources
  ImportSource,
  BasicSource,
  TemplateSource
} from './imports';

export const FormFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Form</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Form component."
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
    id: "template",
    sectionNav: "Template",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Template</code> demo shows a real-world form layout using ULX components."
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
];

export default function FormFeatures() {
  return FormFeatureItems;
}
