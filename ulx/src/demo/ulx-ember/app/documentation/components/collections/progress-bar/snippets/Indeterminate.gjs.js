export default `
import { UlxProgressBar, t } from 'ulx-components';

<template>
  <div class="">
    <UlxProgressBar
      @customClass="h6"
      @mode="indeterminate"
      aria-label={{t "lbl.loading"}}
    />
  </div>
</template>

`;
