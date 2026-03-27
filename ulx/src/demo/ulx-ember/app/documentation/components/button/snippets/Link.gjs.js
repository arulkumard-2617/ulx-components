export default `
import { UlxButton, t } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      @label={{t "lbl.link"}}
      @href="#"
      @variant="link"
      @customClass="underline"
    />
    <UlxButton @label={{t "lbl.navigate"}} @variant="link" />
  </div>
</template>

`;
