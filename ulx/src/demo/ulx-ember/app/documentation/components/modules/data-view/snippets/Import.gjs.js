export default `
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
