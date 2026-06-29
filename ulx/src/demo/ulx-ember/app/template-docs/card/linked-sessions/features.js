import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { LinkedSessionsDemo, LinkedSessionsSource } from './imports';

export const LinkedSessionsFeatureItems = [
  {
    id: 'linked-sessions',
    sectionNav: 'Linked Sessions',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Selectable session and companion rows built with <code>UlxFieldSet</code>, outlined <code>UlxCard</code> success/danger variants, per-row <code>UlxCheckbox</code> with rich <code>itemLabel</code> content, and footer <code>UlxMessage</code> status copy.',
      },
    },
    demo: {
      component: LinkedSessionsDemo,
      props: {
        source: LinkedSessionsSource,
        snippetName: 'linked-sessions',
        language: 'handlebars',
      },
    },
  },
];
