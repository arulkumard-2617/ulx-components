export default `
import { UlxInput, UlxField, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField @label="User name" @key="filled-input" @fieldClass="col-12">
      <:control as |field|>
        <UlxInput
          @key={{field.key}}
          @ariaDescribedBy={{field.describedBy}}
          @ariaErrorMessage={{field.errorId}}
          @filled={{true}}
          @size="l-size"
          aria-label={{t "lbl.label"}}
        />
      </:control>
    </UlxField>

  </div>
</template>

`;
