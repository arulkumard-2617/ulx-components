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
        <span class="fg-text">{{t "lbl.doc.fieldset.section.blocks"}}</span>
      </:legend>
      <:description>
        <p class="help-text">{{t "msg.doc.fieldset.desc.blocks"}}</p>
      </:description>

      <:default>
        <UlxField
          @label={{t "lbl.doc.fieldset.city"}}
          @fieldId="demo-fieldset-blocks-city"
          @fieldClass="col-12"
          @helpText={{t "lbl.doc.fieldset.inline.help"}}
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
            @label={{t "lbl.secondary"}}
            @variant="secondary"
          />
        </div>
      </:actions>
    </UlxFieldSet>
  </UlxForm>
</template>
