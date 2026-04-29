export default `
import { UlxButton, t } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      @label="Link"
      @href="#"
      @variant="link"
      @customClass="underline"
    />
    <UlxButton @label="Navigate" @variant="link" />
  </div>
</template>

`;
