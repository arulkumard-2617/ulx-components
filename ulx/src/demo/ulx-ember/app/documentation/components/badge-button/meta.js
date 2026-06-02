// ==========================================================================
// BADGE BUTTON COMPONENT METADATA
// ==========================================================================

export default {
  category: 'Collections',
  subCategory: 'Button',
  menuItem: 'BadgeButton',
  routeBase: '/components/badge-button',
  icon: 'bs-icons1 checkbox-icon',

  header: 'BadgeButton',
  subHeader:
    'BadgeButton wraps UlxButton and renders a badge in the suffix slot via @badge, @badgeVariant, @badgeSize, and @badgeType.',

  tabs: [
    { name: 'Features', route: '/features', id: 'features' },
    { name: 'Theming', route: '/theming', id: 'theming' },
    { name: 'Pass Through', route: '/passthrough', id: 'passthrough' },
  ],

  importMsg: "import { UlxBadgeButton } from 'ulx-components'",

  accessibility: {
    description:
      'Use a descriptive @label or aria-label when the button has no visible text. Badge values are exposed via the suffix badge markup.',
    example:
      '<UlxBadgeButton @label="Messages" @badge={{2}} @badgeVariant="danger" />',
  },
};
