export default `
import { UlxIconButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxIconButton
      @label="Link"
      @href="#"
      @variant="link on-hover"
      @iconLeft="magic-link-icon"
      @customClass="underline"
    />
    <UlxIconButton
      @label="Navigate"
      @variant="link on-hover"
      @iconLeft="right-arrow-icon"
    />
  </div>
</template>

`;
