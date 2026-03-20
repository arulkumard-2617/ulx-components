export default `
import { UlxInput, UlxField, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @label={{t "lbl.label"}}
      @error="Fill the proper data"
      @id="error-input"
      @fieldClass="col-12"
    >
      <:control as |field|>
        <UlxInput
          @id={{field.id}}
          @ariaDescribedBy={{field.describedBy}}
          @ariaErrorMessage={{field.errorId}}
          @invalid={{true}}
          @size="l-size"
          aria-label={{t "lbl.label"}}
        />
      </:control>
    </UlxField>

  </div>
</template>

`;
