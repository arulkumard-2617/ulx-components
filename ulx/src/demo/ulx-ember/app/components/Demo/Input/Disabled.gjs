import { UlxInput, UlxField, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @label={{t "lbl.label"}}
      @inputId="disabled-input"
      @fieldClass="col-12"
    >
      <:control as |field|>
        <UlxInput
          @inputId={{field.inputId}}
          @disabled={{true}}
          @size="l-size"
          aria-label={{t "lbl.label"}}
        />
      </:control>
    </UlxField>

  </div>
</template>
