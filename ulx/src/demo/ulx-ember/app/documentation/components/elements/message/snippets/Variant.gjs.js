export default `
import { UlxMessage } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <UlxMessage @text={{t "msg.inline.success"}} @variant="success" />
    <UlxMessage @text={{t "msg.inline.info"}} @variant="info" />
    <UlxMessage @text={{t "msg.inline.warn"}} @variant="warn" />
    <UlxMessage @text={{t "msg.inline.error"}} @variant="error" />
    <UlxMessage @text={{t "msg.inline.secondary"}} @variant="secondary" />
    <UlxMessage @text={{t "msg.inline.contrast"}} @variant="contrast" />
  </div>
</template>

`;
