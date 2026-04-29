import { UlxForm, UlxFieldSet, UlxField, UlxInput, t } from 'ulx-components';

<template>
  <UlxForm @size="m-size">
    <UlxFieldSet
      @legend="Contact"
      @description="We use these fields to identify your account."
      @customClass="ulx-grid gap-6"
    >
      <UlxField
        @label="Full name"
        @fieldId="demo-fieldset-basic-name"
        @fieldClass="col-6"
        as |field|
      >
        <UlxInput
          @field={{field}}
          @size="m-size"
          autocomplete="name"
          placeholder={{"Full name"}}
        />
      </UlxField>
      <UlxField
        @label="Email"
        @fieldId="demo-fieldset-basic-email"
        @fieldClass="col-6"
        as |field|
      >
        <UlxInput
          @field={{field}}
          @size="m-size"
          type="email"
          autocomplete="email"
          placeholder={{"Email"}}
        />
      </UlxField>
    </UlxFieldSet>
  </UlxForm>
</template>
