export default `
import {
  UlxForm,
  UlxFieldSet,
  UlxField,
  UlxInput,
  UlxButton,
  t,
} from 'ulx-components';

<template>
  <UlxForm @size="m-size">
    <UlxFieldSet class="col-12" @customClass="ulx-grid gap-6">
      <:legend>
        <span class="fg-text">{{"Custom blocks"}}</span>
      </:legend>
      <:description>
        <p class="help-text">{{"Legend, description, and actions can use named blocks for richer markup."}}</p>
      </:description>

      <:default>
        <UlxField
          @label="City"
          @fieldId="demo-fieldset-blocks-city"
          @fieldClass="col-12"
          @helpText="Optional help for this group"
          as |field|
        >
          <UlxInput
            @field={{field}}
            @size="m-size"
            autocomplete="address-level2"
          />
        </UlxField>
      </:default>

      <:actions>
        <div class="flex gap-4">
          <UlxButton
            @type="button"
            @label="Secondary"
            @variant="secondary"
          />
        </div>
      </:actions>
    </UlxFieldSet>
  </UlxForm>
</template>

`;
