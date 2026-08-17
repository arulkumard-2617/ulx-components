// ==========================================================================
// Badge Demo Components Barrel Export
// ==========================================================================
// Centralized exports for all Badge demo components

// Demo Components
export { default as BasicDemo } from '../../../components/Demo/Badge/Basic';
export { default as VariantsDemo } from '../../../components/Demo/Badge/Variants';
export { default as TypeDemo } from '../../../components/Demo/Badge/Type';
export { default as SizeDemo } from '../../../components/Demo/Badge/Size';

// Import source (for import section)
export const ImportSource = `
import { Badge } from 'ulx-components';

`;

// Badge Demo Sources Barrel Export
// ==========================================================================
// Centralized exports for all Badge demo source files
export { default as BasicSource } from '../../../demo-sources/demo/badge/basic';
export { default as VariantsSource } from '../../../demo-sources/demo/badge/variants';
export { default as TypeSource } from '../../../demo-sources/demo/badge/type';
export { default as SizeSource } from '../../../demo-sources/demo/badge/size';
