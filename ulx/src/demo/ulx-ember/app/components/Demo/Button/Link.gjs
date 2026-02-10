import { UlxButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      @label="Link"
      @href="#"
      @text={{true}}
      @customClass="underline"
    />
    <UlxButton @label="Navigate" @variant="link" />
  </div>
</template>
