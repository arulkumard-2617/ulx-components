// ==========================================================================
// Card Template Feature Items
// ==========================================================================
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  SessionCardDemo,
  LinkedSessionsDemo,
  DetailsSummaryCardDemo,
  ExhibitorOrderCardDemo,
  ExhibitorAddonCardDemo,
  SessionCardSource,
  LinkedSessionsSource,
  DetailsSummaryCardSource,
  ExhibitorOrderCardSource,
  ExhibitorAddonCardSource
} from './imports';

const section = (id, sectionNav, content, Demo, Source, snippetName) => ({
  id,
  sectionNav,
  sectionDesc: {
    component: RichText,
    props: { as: 'span', content }
  },
  demo: {
    component: Demo,
    props: {
      source: Source,
      snippetName,
      language: 'handlebars'
    }
  }
});

export const CardFeatureItems = [
  section(
    'session-card',
    'Session Card',
    'Session schedule list built with <code>UlxCard</code>, <code>lt-track-label</code> tags, avatars, and footer action links.',
    SessionCardDemo,
    SessionCardSource,
    'session-card'
  ),
  section(
    'linked-sessions',
    'Linked Sessions',
    'Selectable session and companion rows built with <code>UlxFieldSet</code>, outlined <code>UlxCard</code> success/danger variants, per-row <code>UlxCheckbox</code> with rich <code>itemLabel</code> content, and footer <code>UlxMessage</code> status copy.',
    LinkedSessionsDemo,
    LinkedSessionsSource,
    'linked-sessions'
  ),
  section(
    'details-summary-card',
    'Details Summary Card',
    'Primary expandable summary card using the <code>details-summary-card</code> pattern from <code>card.less</code>, a three-column header grid, linked session and companion detail rows, and a footer link toggle with <code>expanded</code> state.',
    DetailsSummaryCardDemo,
    DetailsSummaryCardSource,
    'details-summary-card'
  ),
  section(
    'exhibitor-order-card',
    'Exhibitor Order Card',
    'Two-row exhibitor and order summary card with a tinted header band (<code>bg-primaryLayer1</code>), column dividers, company image, booth details, and a footer row for order total, financial breakdown, and source.',
    ExhibitorOrderCardDemo,
    ExhibitorOrderCardSource,
    'exhibitor-order-card'
  ),
  section(
    'exhibitor-addon-card',
    'Exhibitor Add-on Card',
    'Promotional add-on card with a tinted header band (<code>bg-primaryLayer1</code>), plugin artwork, inline <code>More Info</code> text button, and a footer row for applied status and <code>Revoke Add-On</code> link action.',
    ExhibitorAddonCardDemo,
    ExhibitorAddonCardSource,
    'exhibitor-addon-card'
  )
];

export default function CardFeatures() {
  return CardFeatureItems;
}
