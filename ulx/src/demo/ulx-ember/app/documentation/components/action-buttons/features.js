// ==========================================================================
// ActionButtons Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  VariantsDemo,
  OutlinedDemo,
  IconsDemo,
  SplitActionsDemo,
  DisabledDemo,
  ImportSource,
  BasicSource,
  VariantsSource,
  OutlinedSource,
  IconsSource,
  SplitActionsSource,
  DisabledSource
} from './imports';

export const ActionButtonsFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import the <code>UlxActionButtons</code> component from <code>ulx-components</code>.'
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
          'The <code>Basic</code> demo shows a primary action with secondary items in the split dropdown.'
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
          '<code>@variant</code> is forwarded to the underlying button controls: primary, secondary, success, and danger.'
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
    id: 'icons',
    sectionNav: 'Icons',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>icon</code> on the primary action descriptor to show an icon on the main button, and on secondary items for dropdown menu icons.'
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
    id: 'split-actions',
    sectionNav: 'Split actions',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Primary and secondary actions with toast feedback on click. Secondary items can include <code>icon</code> for menu rows.'
      }
    },
    demo: {
      component: SplitActionsDemo,
      props: {
        source: SplitActionsSource,
        snippetName: 'split-actions',
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
          'When <code>@disabled</code> is true, the primary button and split dropdown are disabled.'
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

export default function ActionButtonsFeatures() {
  return ActionButtonsFeatureItems;
}
