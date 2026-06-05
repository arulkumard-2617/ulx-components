import { UlxIconButton } from 'ulx-components';

<template>
  <div class="flex gap-6 items-center flex-wrap">
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
      @iconRight="right-arrow-icon"
    />
  </div>
</template>
