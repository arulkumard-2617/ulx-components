// ==========================================================================
// ActionMenu Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  OverviewDemo,
  LabelTriggerDemo,
  IconLabelTriggerDemo,
  IconOnlyTriggerDemo,
  ImportSource,
  OverviewSource,
  LabelTriggerSource,
  IconLabelTriggerSource,
  IconOnlyTriggerSource
} from './imports';

export const ActionMenuFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import the <code>UlxActionMenu</code> component from <code>ulx-components</code>.'
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
    id: 'overview',
    sectionNav: 'Overview',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Common trigger patterns side by side: label only, icon with label, and icon-only (text-style trigger). Use <code>@items</code> for menu entries and <code>@onItemSelect</code> when a choice is made.'
      }
    },
    demo: {
      component: OverviewDemo,
      props: {
        source: OverviewSource,
        snippetName: 'overview',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'label-trigger',
    sectionNav: 'Label trigger',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Primary trigger with <code>@label</code> only.'
      }
    },
    demo: {
      component: LabelTriggerDemo,
      props: {
        source: LabelTriggerSource,
        snippetName: 'label-trigger',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'icon-label-trigger',
    sectionNav: 'Icon and label',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Secondary outlined trigger with <code>@icon</code> and <code>@label</code>.'
      }
    },
    demo: {
      component: IconLabelTriggerDemo,
      props: {
        source: IconLabelTriggerSource,
        snippetName: 'icon-label-trigger',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'icon-only-trigger',
    sectionNav: 'Icon only',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Icon-only trigger using <code>@text</code> with <code>@triggerAriaLabel</code> for accessibility.'
      }
    },
    demo: {
      component: IconOnlyTriggerDemo,
      props: {
        source: IconOnlyTriggerSource,
        snippetName: 'icon-only-trigger',
        language: 'handlebars'
      }
    }
  }
];

export default function ActionMenuFeatures() {
  return ActionMenuFeatureItems;
}
