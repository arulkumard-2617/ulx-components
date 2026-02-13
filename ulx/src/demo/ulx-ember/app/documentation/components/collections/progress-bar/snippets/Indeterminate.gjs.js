export default `
import { UlxProgressBar, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxProgressBar
      @customClass="h6"
      @mode="indeterminate"
      @size="s-size"
      aria-label={{t "lbl.loading"}}
    />
  </div>
</template>

`;
