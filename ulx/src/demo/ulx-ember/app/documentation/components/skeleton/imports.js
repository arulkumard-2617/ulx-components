// ==========================================================================
// Skeleton Demo Components Barrel Export
// ==========================================================================

export { default as ImportDemo } from '../../../components/Demo/Skeleton/Import';
export { default as ShapesDemo } from '../../../components/Demo/Skeleton/Shapes';
export { default as CardDemo } from '../../../components/Demo/Skeleton/Card';
export { default as ListDemo } from '../../../components/Demo/Skeleton/List';
export { default as DataTableDemo } from '../../../components/Demo/Skeleton/DataTable';
export { default as AccessibilityDemo } from '../../../components/Demo/Skeleton/Accessibility';

export const ImportSource = `
import Component from '@glimmer/component';

export default class DemoSkeletonImport extends Component {
  <template>
    <code>import {'{ UlxSkeleton }'} from 'ulx-components';</code>
  </template>
}

`;
export { default as ShapesSource } from '../../../demo-sources/demo/skeleton/shapes';
export { default as CardSource } from '../../../demo-sources/demo/skeleton/card';
export { default as ListSource } from '../../../demo-sources/demo/skeleton/list';
export { default as DataTableSource } from '../../../demo-sources/demo/skeleton/data-table';
export { default as AccessibilitySource } from '../../../demo-sources/demo/skeleton/accessibility';
