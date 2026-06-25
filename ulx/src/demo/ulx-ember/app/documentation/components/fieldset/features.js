// ==========================================================================
// Fieldset feature items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  LayoutDemo,
  BlocksDemo,
  FormLayoutDemo,
  TemplateDemo,
  ImportSource,
  BasicSource,
  LayoutSource,
  BlocksSource,
  FormLayoutSource,
  TemplateSource
} from './imports';

export const FieldsetFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'The <code>import</code> section shows how to import <code>UlxFieldSet</code> from <code>ulx-components</code>.'
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
          'Wrapped in <code>UlxForm</code> for <code>@size</code>. <code>@layout="grid"</code> (default) adds <code>ulx-grid</code> on <code>fieldset-wrapper</code>; use <code>@customClass</code> for gaps. See <strong>Grid and stack</strong> for stack layout.'
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
    id: 'layout',
    sectionNav: 'Grid and stack',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Two groups in one <code>UlxForm</code>: <code>@layout="grid"</code> (ulx-grid on <code>fieldset-wrapper</code>) vs <code>@layout="stack"</code> (<code>flex flex-col</code> on <code>fieldset-wrapper</code>).'
      }
    },
    demo: {
      component: LayoutDemo,
      props: {
        source: LayoutSource,
        snippetName: 'layout',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'blocks',
    sectionNav: 'Named blocks',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>&lt;:legend&gt;</code>, <code>&lt;:description&gt;</code>, and <code>&lt;:actions&gt;</code> for richer markup. Main fields must be wrapped in <code>&lt;:default&gt;</code> when other named blocks are present.'
      }
    },
    demo: {
      component: BlocksDemo,
      props: {
        source: BlocksSource,
        snippetName: 'blocks',
        language: 'handlebars'
      }
    }
  },
  {
    id: 'form-layout',
    sectionNav: 'With form',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Nest fieldsets in <code>UlxForm</code> (<code>@size</code>, <code>@customClass</code> such as <code>flex flex-col gap-8</code> — not <code>ulx-grid</code> on the form). Second group uses <code>@layout="stack"</code>. Use <code>&lt;:default&gt;</code> with <code>&lt;:actions&gt;</code>.'
      }
    },
    demo: {
      component: FormLayoutDemo,
      props: {
        source: FormLayoutSource,
        snippetName: 'formLayout',
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
          'A mobile app configuration form grouped with three <code>UlxFieldSet</code> sections: basic text fields, asset upload areas, and visual customization controls including <code>UlxOptionSegment</code> and color swatches.'
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

export default function FieldsetFeatures() {
  return FieldsetFeatureItems;
}
