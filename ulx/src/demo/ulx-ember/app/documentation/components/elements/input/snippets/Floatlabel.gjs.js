export default `
import { UlxInput } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gap-8 mb-14">
    <UlxInput
      @id="username"
      @label="Username"
      @floatLabel={{true}}
      @size="l-size"
      @fieldClass="col-12"
    />
  </div>
</template>

`;
