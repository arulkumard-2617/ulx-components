import { UlxInput } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @label="label"
      @size="l-size"
      @fieldClass="col-12"
      aria-label="label"
      @invalid={{true}}
    />
  </div>
</template>
