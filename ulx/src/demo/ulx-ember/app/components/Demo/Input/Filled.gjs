import { UlxInput, t } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @floatLabel={{t "lbl.label"}}
      @label={{t "lbl.label"}}
      @size="l-size"
      @fieldClass="col-12"
      aria-label={{t "lbl.label"}}
      @filled={{true}}
    />
  </div>
</template>
