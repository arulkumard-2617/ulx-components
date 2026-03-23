export default `
import { UlxPassword, UlxField, t } from 'ulx-components';

<template>
  <form class="ulx-form m-size ulx-grid gap-12 mb-14">

    <UlxField
      @label={{t "lbl.password"}}
      @fieldClass="col-12"
      @inputId="password-disabled"
    >

      <:default as |field|>
        <UlxPassword
          @disabled={{true}}
          @feedback={{false}}
          {{! accessibility wiring }}
          @id={{field.inputId}}
          @ariaDescribedBy={{field.describedBy}}
          @ariaErrorMessage={{field.errorId}}
          @placeholder={{t "lbl.enter.password"}}
        />
      </:default>

    </UlxField>

  </form>
</template>

`;
