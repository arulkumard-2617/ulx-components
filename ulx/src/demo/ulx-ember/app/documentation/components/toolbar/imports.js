// ==========================================================================
// Toolbar Demo Components Barrel Export
// ==========================================================================

// Demo Components
export { default as BasicDemo } from '../../../components/Demo/Toolbar/Basic';
export { default as CustomDemo } from '../../../components/Demo/Toolbar/Custom';
export { default as AccessibilityDemo } from '../../../components/Demo/Toolbar/Accessibility';

// Import source (for import section)
export const ImportSource = `
import { UlxToolbar } from 'ulx-components';

<template>
  <UlxToolbar>
    <:start></:start>
    <:center></:center>
    <:end></:end>
  </UlxToolbar>
</template>
`;

// Toolbar Demo Sources Barrel Export
// ==========================================================================
// Centralized exports for all Toolbar demo source files
export { default as BasicSource } from '../../../demo-sources/demo/toolbar/basic';
export { default as CustomSource } from '../../../demo-sources/demo/toolbar/custom';
export { default as AccessibilitySource } from '../../../demo-sources/demo/toolbar/accessibility';

