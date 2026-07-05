// ==========================================================================
// DataView Demo Components Barrel Export
// ==========================================================================

export { default as BasicDemo } from '../../../components/Demo/DataView/Basic';
export { default as PaginationDemo } from '../../../components/Demo/DataView/Pagination';
export { default as SortingDemo } from '../../../components/Demo/DataView/Sorting';
export { default as LayoutDemo } from '../../../components/Demo/DataView/Layout';
export { default as LoadingDemo } from '../../../components/Demo/DataView/Loading';
export { default as AccessibilityDemo } from '../../../components/Demo/DataView/Accessibility';

export const ImportSource = `
import {
  UlxDataView,
  UlxButton,
  UlxRating,
  UlxTag,
  UlxIcon,
  t,
} from 'ulx-components';

<template>
  <UlxDataView>
    <:content>
      {{! Your list or grid content here, using the shared card layout }}
    </:content>
  </UlxDataView>
</template>
`;
export { default as BasicSource } from '../../../demo-sources/demo/data-view/basic';
export { default as PaginationSource } from '../../../demo-sources/demo/data-view/pagination';
export { default as SortingSource } from '../../../demo-sources/demo/data-view/sorting';
export { default as LayoutSource } from '../../../demo-sources/demo/data-view/layout';
export { default as LoadingSource } from '../../../demo-sources/demo/data-view/loading';
export { default as AccessibilitySource } from '../../../demo-sources/demo/data-view/accessibility';
