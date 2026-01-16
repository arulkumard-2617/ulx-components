// ==========================================================================
// TabMenu Demo Components Barrel Export
// ==========================================================================
// Centralized exports for all TabMenu demo components

// Demo Components
export { default as BasicDemo } from '../../../../components/Demo/TabMenu/Basic';
// Import source (for import section)
export const ImportSource = `import UlsTabmenu from 'uls-components/components/collections/uls-tabmenu';`;

// TabMenu Demo Sources Barrel Export
// ==========================================================================
// Centralized exports for all TabMenu demo source files
export const BasicSource = `<UlsTabmenu 
  @items={{this.items}}
  @activeItem={{this.activeItem}}
  @onItemClick={{this.handleItemClick}}
/>`;
