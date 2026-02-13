export default `
import { UlxInput, t } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @id="username"
      @label={{t "lbl.username"}}
      @floatLabel={{true}}
      @size="l-size"
      @fieldClass="col-12"
    />
  </div>
</template>

`;
