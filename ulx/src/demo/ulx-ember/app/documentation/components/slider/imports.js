// ==========================================================================
// Slider Demo Components Barrel Export
// ==========================================================================

export { default as BasicDemo } from '../../../components/Demo/Slider/Basic';
export { default as SizeDemo } from '../../../components/Demo/Slider/Size';
export { default as InputDemo } from '../../../components/Demo/Slider/Input';
export { default as StepDemo } from '../../../components/Demo/Slider/Step';
export { default as RangeDemo } from '../../../components/Demo/Slider/Range';
export { default as FilterDemo } from '../../../components/Demo/Slider/Filter';
export { default as VerticalDemo } from '../../../components/Demo/Slider/Vertical';
export { default as AccessibilityDemo } from '../../../components/Demo/Slider/Accessibility';

export const ImportSource = `
import Component from '@glimmer/component';
import { UlxSlider } from 'ulx-components';

export default class DemoSliderImport extends Component {
  <template>
    <UlxSlider />
  </template>
}

`;
export { default as BasicSource } from '../../../demo-sources/demo/slider/basic';
export { default as SizeSource } from '../../../demo-sources/demo/slider/size';
export { default as InputSource } from '../../../demo-sources/demo/slider/input';
export { default as StepSource } from '../../../demo-sources/demo/slider/step';
export { default as RangeSource } from '../../../demo-sources/demo/slider/range';
export { default as FilterSource } from '../../../demo-sources/demo/slider/filter';
export { default as VerticalSource } from '../../../demo-sources/demo/slider/vertical';
export { default as AccessibilitySource } from '../../../demo-sources/demo/slider/accessibility';

