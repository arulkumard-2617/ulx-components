export default `
import { UlxForm, UlxFieldSet, UlxField, UlxInput, t } from 'ulx-components';

<template>
  <UlxForm @size="m-size" @customClass="flex flex-col gap-8">
    <UlxFieldSet
      class="w-full"
      @legend={{t "lbl.doc.fieldset.layout.grid"}}
      @description={{t "msg.doc.fieldset.layout.grid"}}
      @customClass="ulx-grid col-2 gap-6"
    >
      <UlxField
        @label={{t "lbl.doc.fieldset.name"}}
        @fieldId="demo-fieldset-layout-grid-name"
        @fieldClass="field"
        as |field|
      >
        <UlxInput @field={{field}} @size="m-size" autocomplete="name" />
      </UlxField>
      <UlxField
        @label={{t "lbl.doc.fieldset.email"}}
        @fieldId="demo-fieldset-layout-grid-email"
        @fieldClass="field"
        as |field|
      >
        <UlxInput
          @field={{field}}
          @size="m-size"
          type="email"
          autocomplete="email"
        />
      </UlxField>
    </UlxFieldSet>

    <UlxFieldSet
      class="w-full"
      @legend={{t "lbl.doc.fieldset.layout.stack"}}
      @description={{t "msg.doc.fieldset.layout.stack"}}
      @customClass="flex flex-col gap-4"
    >
      <UlxField
        @label={{t "lbl.doc.fieldset.demo.line1"}}
        @fieldId="demo-fieldset-layout-stack-a"
        @fieldClass="field"
        as |field|
      >
        <UlxInput @field={{field}} @size="m-size" />
      </UlxField>
      <UlxField
        @label={{t "lbl.doc.fieldset.demo.line2"}}
        @fieldId="demo-fieldset-layout-stack-b"
        @fieldClass="field"
        as |field|
      >
        <UlxInput @field={{field}} @size="m-size" />
      </UlxField>
    </UlxFieldSet>
  </UlxForm>
</template>

`;
