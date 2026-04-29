export default `
import { UlxMessage } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <UlxMessage
    @text="Inline info message."
    @variant="info"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
  />
</template>

`;
