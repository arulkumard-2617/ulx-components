// ==========================================================================
// Loading Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  ContainerDemo,
  WithLabelDemo,
  FullPageDemo,
  ImportSource,
  BasicSource,
  ContainerSource,
  WithLabelSource,
  FullPageSource
} from './imports';

export const LoadingFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> section shows how to import and use the <code>UlxLoading</code> component.'
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
          'Use <code>@mode="cover"</code> to center a spinner inside a sized parent without positioning as an overlay.'
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
    id: 'container',
    sectionNav: 'Container',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@isParent={{true}}</code> (or <code>@mode="full-container"</code>) to cover the parent. The component adds the <code>relative</code> utility on the parent so the absolute overlay positions correctly.'
      }
    },
    demo: {
      component: ContainerDemo,
      props: {
        source: ContainerSource,
        snippetName: 'container',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'with-label',
    sectionNav: 'With label',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Pass <code>@isLabel={{true}}</code> to show a loading label under the spinner. Override text with <code>@label</code>.'
      }
    },
    demo: {
      component: WithLabelDemo,
      props: {
        source: WithLabelSource,
        snippetName: 'with-label',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'full-page',
    sectionNav: 'Full page',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Default mode is <code>full-page</code> (fixed overlay). Click the button to show it briefly.'
      }
    },
    demo: {
      component: FullPageDemo,
      props: {
        source: FullPageSource,
        snippetName: 'full-page',
        language: 'handlebars'
      }
    }
  }
];

export default function LoadingFeatures() {
  return LoadingFeatureItems;
}
