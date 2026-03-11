export default `
import { UlxPassword, t } from 'ulx-components';

<template>
  <form class="ulx-form m-size ulx-grid gap-12 mb-14">
    <UlxPassword
      @invalid={{true}}
      @feedback={{false}}
      @label={{t "lbl.password"}}
      @fieldClass="col-12"
      placeholder={{t "lbl.enter.password"}}
    />
  </form>
</template>

`;
