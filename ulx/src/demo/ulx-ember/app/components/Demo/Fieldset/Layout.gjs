import { UlxForm, UlxFieldSet, UlxField, UlxInput, t } from 'ulx-components';

<template>
  <UlxForm @size="m-size" @customClass="flex flex-col gap-8">
    <UlxFieldSet
      class="w-full"
      @legend="Grid layout"
      @description="Use @customClass on the fieldset content wrapper with ulx-grid and column templates (e.g. ulx-grid col-2 gap-6)."
      @customClass="ulx-grid col-2 gap-6"
    >
      <UlxField
        @label="Full name"
        @fieldId="demo-fieldset-layout-grid-name"
        @fieldClass="field"
        as |field|
      >
        <UlxInput @field={{field}} @size="m-size" autocomplete="name" />
      </UlxField>
      <UlxField
        @label="Email"
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
      @legend="Stack layout"
      @description="Use @customClass with flex utilities on the fieldset content wrapper (e.g. flex flex-col gap-4)."
      @customClass="flex flex-col gap-4"
    >
      <UlxField
        @label="Line one"
        @fieldId="demo-fieldset-layout-stack-a"
        @fieldClass="field"
        as |field|
      >
        <UlxInput @field={{field}} @size="m-size" />
      </UlxField>
      <UlxField
        @label="Line two"
        @fieldId="demo-fieldset-layout-stack-b"
        @fieldClass="field"
        as |field|
      >
        <UlxInput @field={{field}} @size="m-size" />
      </UlxField>
    </UlxFieldSet>
  </UlxForm>
</template>
