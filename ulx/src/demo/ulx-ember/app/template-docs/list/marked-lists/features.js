import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { MarkedListsDemo, MarkedListsSource } from './imports';

export const MarkedListsFeatureItems = [
  {
    id: 'marked-lists',
    sectionNav: 'Marked Lists',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Helper class <code>ulx-ul</code> with marker variants — <code>decimal</code>, <code>decimal.primary</code>, <code>bullet-list</code> (+ <code>s-size</code>, <code>white</code>), <code>number</code>, <code>basic</code>, <code>diamond</code> (+ <code>primary</code>, <code>s13</code>, <code>s14</code>), and <code>diamond-01</code>. Wraps a regular <code>&lt;ul&gt;</code> with no extra components for the markers; pair with utilities like <code>gp0</code> to collapse spacing between items.'
      }
    },
    demo: {
      component: MarkedListsDemo,
      props: {
        source: MarkedListsSource,
        snippetName: 'marked-lists',
        language: 'handlebars'
      }
    }
  }
];
