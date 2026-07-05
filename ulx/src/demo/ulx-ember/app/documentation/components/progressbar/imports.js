// ==========================================================================
// Progress Bar Demo Components Barrel Export
// ==========================================================================

export { default as BasicDemo } from '../../../components/Demo/ProgressBar/Basic';
export { default as SizesDemo } from '../../../components/Demo/ProgressBar/Sizes';
export { default as DynamicDemo } from '../../../components/Demo/ProgressBar/Dynamic';
export { default as WithControlsDemo } from '../../../components/Demo/ProgressBar/WithControls';
export { default as WithoutValueDemo } from '../../../components/Demo/ProgressBar/WithoutValue';
export { default as TemplateDemo } from '../../../components/Demo/ProgressBar/Template';
export { default as IndeterminateDemo } from '../../../components/Demo/ProgressBar/Indeterminate';

export const ImportSource = `
import { UlxProgressBar } from 'ulx-components';

<UlxProgressBar @value={{50}} />
`;
export { default as BasicSource } from '../../../demo-sources/demo/progress-bar/basic';
export { default as SizesSource } from '../../../demo-sources/demo/progress-bar/sizes';
export { default as DynamicSource } from '../../../demo-sources/demo/progress-bar/dynamic';
export { default as WithControlsSource } from '../../../demo-sources/demo/progress-bar/with-controls';
export { default as WithoutValueSource } from '../../../demo-sources/demo/progress-bar/without-value';
export { default as TemplateSource } from '../../../demo-sources/demo/progress-bar/template';
export { default as IndeterminateSource } from '../../../demo-sources/demo/progress-bar/indeterminate';
