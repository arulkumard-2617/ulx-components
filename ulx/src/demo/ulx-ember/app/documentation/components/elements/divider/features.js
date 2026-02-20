// ==========================================================================
// Divider Feature Items
// ==========================================================================
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  ContentDemo,
  LoginDemo,
  TypeDemo,
  VerticalDemo,
  ImportSource,
  BasicSource,
  ContentSource,
  LoginSource,
  TypeSource,
  VerticalSource
} from './imports';

export const DividerFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>UlxDivider</code> component."
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
        content: "Divider is basically placed between the items to separate."
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
    id: "type",
    sectionNav: "Type",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Style of the border is configured with the <code>type</code> property that can either be <code>solid</code>, <code>dotted</code> or <code>dashed</code>."
      }
    },
    demo: {
      component: TypeDemo,
      props: {
        source: TypeSource,
        snippetName: "type",
        language: "handlebars"
      }
    }
  },
  {
    id: "vertical",
    sectionNav: "Vertical",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Vertical divider is enabled by setting the <code>layout</code> property as <code>vertical</code>."
      }
    },
    demo: {
      component: VerticalDemo,
      props: {
        source: VerticalSource,
        snippetName: "vertical",
        language: "handlebars"
      }
    }
  },
  {
    id: "content",
    sectionNav: "Content",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Children are rendered within the boundaries of the divider where location of the content is configured with the <code>align</code> property."
      }
    },
    demo: {
      component: ContentDemo,
      props: {
        source: ContentSource,
        snippetName: "content",
        language: "handlebars"
      }
    }
  },
  {
    id: "login",
    sectionNav: "Login",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "Sample implementation of a login form using a divider with content."
      }
    },
    demo: {
      component: LoginDemo,
      props: {
        source: LoginSource,
        snippetName: "login",
        language: "handlebars"
      }
    }
  }
];

export default function DividerFeatures() {
  return DividerFeatureItems;
}

