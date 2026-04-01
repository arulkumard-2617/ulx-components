export default `
import { UlxMessage } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <UlxMessage
    @text={{t "msg.inline.info"}}
    @variant="info"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
  />
</template>

`;
