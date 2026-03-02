import { UlxProgressBar, t } from 'ulx-components';

<template>
  <div class="">
    <UlxProgressBar
      @customClass="h6"
      @mode="indeterminate"
      @size="s-size"
      aria-label={{t "lbl.loading"}}
    />
  </div>
</template>
