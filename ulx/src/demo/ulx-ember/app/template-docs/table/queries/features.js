import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { QueriesDemo, QueriesSource } from './imports';

export const QueriesFeatureItems = [
  {
    id: 'queries',
    sectionNav: 'Queries',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Queries table with checkbox selection, bold first name and email columns, a raised-on date separated by a light-grey dot badge, and pill tags with a leading dot for status.'
      }
    },
    demo: {
      component: QueriesDemo,
      props: {
        source: QueriesSource,
        snippetName: 'queries',
        language: 'handlebars'
      }
    }
  }
];
