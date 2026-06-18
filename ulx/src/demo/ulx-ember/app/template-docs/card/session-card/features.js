import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { SessionCardDemo, SessionCardSource } from './imports';

export const SessionCardFeatureItems = [
  {
    id: 'session-card',
    sectionNav: 'Session Card',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Session schedule list built with <code>UlxCard</code>, <code>lt-track-label</code> tags, avatars, and footer action links.'
      }
    },
    demo: {
      component: SessionCardDemo,
      props: {
        source: SessionCardSource,
        snippetName: 'session-card',
        language: 'handlebars'
      }
    }
  }
];
