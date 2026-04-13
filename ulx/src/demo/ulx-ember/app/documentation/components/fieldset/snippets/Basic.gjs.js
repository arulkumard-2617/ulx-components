export default `
import { UlxForm, UlxFieldSet, UlxField, UlxInput, t } from 'ulx-components';

<template>
  <UlxForm @size="m-size">
    <UlxFieldSet
      @legend={{t "lbl.doc.fieldset.legend.contact"}}
      @description={{t "msg.doc.fieldset.desc.contact"}}
      @customClass="ulx-grid gap-6"
    >
      <UlxField
        @label={{t "lbl.doc.fieldset.name"}}
        @fieldId="demo-fieldset-basic-name"
        @fieldClass="col-6"
        as |field|
      >
        <UlxInput
          @field={{field}}
          @size="m-size"
          autocomplete="name"
          placeholder={{t "lbl.doc.fieldset.name"}}
        />
      </UlxField>
      <UlxField
        @label={{t "lbl.doc.fieldset.email"}}
        @fieldId="demo-fieldset-basic-email"
        @fieldClass="col-6"
        as |field|
      >
        <UlxInput
          @field={{field}}
          @size="m-size"
          type="email"
          autocomplete="email"
          placeholder={{t "lbl.doc.fieldset.email"}}
        />
      </UlxField>
    </UlxFieldSet>
  </UlxForm>
</template>

`;
