export default `
import { UlxInput, t } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gap-8 mb-14">
    <UlxInput
      @label={{t "lbl.label"}}
      @size="l-size"
      @fieldClass="col-12"
      aria-label={{t "lbl.label"}}
      @filled={{true}}
      @value="User Name"
    />
  </div>
</template>

`;
