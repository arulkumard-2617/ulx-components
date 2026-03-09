export default `
import { UlxPassword, t } from 'ulx-components';

<template>
  <UlxPassword
    @invalid={{true}}
    @feedback={{false}}
    @label={{t "lbl.password"}}
    placeholder={{t "lbl.enter.password"}}
  />
</template>
`;
