export default `
import { UlxForm, UlxInput, UlxField, t } from 'ulx-components';

<template>
  <UlxForm @size="m-size" @customClass="ulx-grid gap-8 mb-14">
    <UlxField
      @label="label"
      @fieldId="disabled-input"
      @fieldClass="col-12"
      as |field|
    >
      <UlxInput
        @field={{field}}
        @disabled={{true}}
        @size="l-size"
        aria-label={{"label"}}
      />
    </UlxField>
  </UlxForm>
</template>

`;
