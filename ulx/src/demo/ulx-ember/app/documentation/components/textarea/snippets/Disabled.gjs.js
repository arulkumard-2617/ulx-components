export default `
import { UlxTextarea, UlxField, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @label="label"
      @fieldId="disabled-textarea"
      @fieldClass="col-12"
      as |field|
    >
      <UlxTextarea
        @field={{field}}
        @disabled={{true}}
        @size="l-size"
        aria-label={{"label"}}
      />
    </UlxField>

  </div>
</template>

`;
