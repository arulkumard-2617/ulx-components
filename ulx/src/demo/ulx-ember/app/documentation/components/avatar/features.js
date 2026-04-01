// ==========================================================================
// Avatar Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  // Demos
  BasicDemo,
  IconDemo,
  ImageDemo,
  GroupDemo,
  MemberDemo,
  // Sources
  ImportSource,
  BasicSource,
  IconSource,
  ImageSource,
  GroupSource,
  MemberSource
} from './imports';

export const AvatarFeatureItems = [
  {
    id: "import",
    sectionNav: "Import",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>import</code> property is used to import the <code>Avatar</code> component."
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
        content: "The <code>Basic</code> demo shows basic usage of the Avatar component."
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
    id: "icon",
    sectionNav: "Icon",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Icon</code> demo shows Icon usage of the Avatar component."
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
  }
,
  {
    id: "image",
    sectionNav: "Image",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Image</code> demo shows Image usage of the Avatar component."
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
  }
,
  {
    id: "group",
    sectionNav: "Group",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>Group</code> demo shows Group usage of the Avatar component."
      }
    },
    demo: {
      component: GroupDemo,
      props: {
        source: GroupSource,
        snippetName: "group",
        language: "handlebars"
      }
    }
  }
,
  {
    id: "member",
    sectionNav: "Member Avatar",
    sectionDesc: {
      component: RichText,
      props: {
        as: "span",
        content: "The <code>MemberAvatar</code> demo shows how to approximate legacy member-avatar behavior (image, initials, and anonymous states) using the unified <code>UlxAvatar</code> component."
      }
    },
    demo: {
      component: MemberDemo,
      props: {
        source: MemberSource,
        snippetName: "member",
        language: "handlebars"
      }
    }
  }
];

export default function AvatarFeatures() {
  return AvatarFeatureItems;
}
