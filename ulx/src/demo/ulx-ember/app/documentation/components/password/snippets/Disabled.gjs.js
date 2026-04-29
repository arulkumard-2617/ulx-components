export default `
import { UlxPassword, UlxField, t } from 'ulx-components';

<template>
  <form class="ulx-form m-size ulx-grid gap-12 mb-14">

    <UlxField
      @label="Password"
      @fieldClass="col-12"
      @fieldId="password-disabled"
      as |field|
    >
      <UlxPassword
        @field={{field}}
        @disabled={{true}}
        @feedback={{false}}
        @placeholder="Enter password"
      />

    </UlxField>

  </form>
</template>

`;
