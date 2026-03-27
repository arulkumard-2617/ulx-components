// ==========================================================================
// ULXIMAGE COMPONENT METADATA
// ==========================================================================
// Single source of truth for UlxImage component documentation

export default {
  // Navigation metadata
  category: 'Elements',
  subCategory: 'Misc',
  menuItem: 'Image',
  routeBase: '/components/ulx-image',
  icon: 'pi pi-compass',

  // Page metadata
  header: 'Image',
  subHeader:
    'UlxImage wraps content images with ULS styles: shape, size scale, object-fit, aspect presets, and accessible fallbacks when loading fails.',

  // Tab configuration
  tabs: [
    {
      name: 'Features',
      route: '/features',
      id: 'features',
    },
    {
      name: 'Theming',
      route: '/theming',
      id: 'theming',
    },
    {
      name: 'Builder',
      route: '/builder',
      id: 'builder',
    },
    {
      name: 'Pass Through',
      route: '/passthrough',
      id: 'passthrough',
    },
  ],

  // Import message for the component
  importMsg: "import { UlxImage } from 'ulx-components'",

  // Accessibility information
  accessibility: {
    description:
      'Use empty alt for decorative images and meaningful alt (often via t()) for informative images. Pass aria-* through ...attributes when needed. On error, non-empty alt receives an accessible fallback name.',
    example: '<UlxImage @src={{url}} @alt={{description}} />',
  },
};
