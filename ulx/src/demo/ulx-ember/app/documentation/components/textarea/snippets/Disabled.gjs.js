export default `
import { UlxTextarea, UlxField, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @label={{t "lbl.label"}}
      @fieldId="disabled-textarea"
      @fieldClass="col-12"
      as |field|
    >
      <UlxTextarea
        @field={{field}}
        @disabled={{true}}
        @size="l-size"
        aria-label={{t "lbl.label"}}
      />
    </UlxField>

  </div>
</template>

`;
