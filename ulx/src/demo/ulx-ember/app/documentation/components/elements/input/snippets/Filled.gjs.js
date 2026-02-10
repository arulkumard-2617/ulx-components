export default `
import { UlxInput } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @floatLabel="label"
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @filled={{true}}
    />
  </div>
</template>

`;
