// ==========================================================================
// Timeline Demo Components Barrel Export
// ==========================================================================
// Centralized exports for all Timeline demo components

// Demo Components
export { default as BasicDemo } from '../../../components/Demo/Timeline/Basic';
export { default as AlignmentDemo } from '../../../components/Demo/Timeline/Alignment';
export { default as OppositeDemo } from '../../../components/Demo/Timeline/Opposite';
export { default as TemplateDemo } from '../../../components/Demo/Timeline/Template';
export { default as HorizontalDemo } from '../../../components/Demo/Timeline/Horizontal';
export { default as MilestoneDemo } from '../../../components/Demo/Timeline/Milestone';

// Import source (for import section)
export const ImportSource = `
import { UlxTimeline } from 'ulx-components';

`;

// Timeline Demo Sources Barrel Export
// ==========================================================================
// Centralized exports for all Timeline demo source files
export { default as BasicSource } from '../../../demo-sources/demo/timeline/basic';
export { default as AlignmentSource } from '../../../demo-sources/demo/timeline/alignment';
export { default as OppositeSource } from '../../../demo-sources/demo/timeline/opposite';
export { default as TemplateSource } from '../../../demo-sources/demo/timeline/template';
export { default as HorizontalSource } from '../../../demo-sources/demo/timeline/horizontal';
export { default as MilestoneSource } from '../../../demo-sources/demo/timeline/milestone';
