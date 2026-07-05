// ==========================================================================
// Tooltip Demo Components Barrel Export
// ==========================================================================
// Centralized exports for all Tooltip demo components

// Demo Components
export { default as BasicDemo } from '../../../components/Demo/Tooltip/Basic';
export { default as EventDemo } from '../../../components/Demo/Tooltip/Event';
export { default as AutohideDemo } from '../../../components/Demo/Tooltip/Autohide';
export { default as DelayDemo } from '../../../components/Demo/Tooltip/Delay';
export { default as DisabledDemo } from '../../../components/Demo/Tooltip/Disabled';
export { default as TemplateDemo } from '../../../components/Demo/Tooltip/Template';
export { default as ModifierDemo } from '../../../components/Demo/Tooltip/Modifier';

// Import source (for import section)
export const ImportSource = `
import { UlxTooltip, tooltip } from 'ulx-components';
// UlxTooltip = component (use with block + yielded attach modifier)
// tooltip = modifier for attribute-style API: <div {{tooltip "Update name" position="top"}} />

`;

// Tooltip Demo Sources Barrel Export
// ==========================================================================
// Centralized exports for all Tooltip demo source files
export { default as BasicSource } from '../../../demo-sources/demo/tooltip/basic';
export { default as EventSource } from '../../../demo-sources/demo/tooltip/event';
export { default as AutohideSource } from '../../../demo-sources/demo/tooltip/autohide';
export { default as DelaySource } from '../../../demo-sources/demo/tooltip/delay';
export { default as DisabledSource } from '../../../demo-sources/demo/tooltip/disabled';
export { default as TemplateSource } from '../../../demo-sources/demo/tooltip/template';
export { default as ModifierSource } from '../../../demo-sources/demo/tooltip/modifier';
