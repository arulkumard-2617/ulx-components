export default `
import { UlxProgressBar, t } from 'ulx-components';

<template>
  <UlxProgressBar @mode="indeterminate" @size="m-size" aria-label={{t "lbl.loading"}} />
</template>
`;
