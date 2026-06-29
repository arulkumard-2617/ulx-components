import RichText from '../../../components/doc-shared/doc-main/rich-text';
import { DetailsSummaryCardDemo, DetailsSummaryCardSource } from './imports';

export const DetailsSummaryCardFeatureItems = [
  {
    id: 'details-summary-card',
    sectionNav: 'Details Summary Card',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Primary expandable summary card using the <code>details-summary-card</code> pattern from <code>card.less</code>, a three-column header grid, linked session and companion detail rows, and a footer link toggle with <code>expanded</code> state.'
      }
    },
    demo: {
      component: DetailsSummaryCardDemo,
      props: {
        source: DetailsSummaryCardSource,
        snippetName: 'details-summary-card',
        language: 'handlebars'
      }
    }
  }
];
