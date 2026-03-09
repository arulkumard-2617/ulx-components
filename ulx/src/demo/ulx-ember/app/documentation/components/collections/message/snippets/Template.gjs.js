export default `
import { UlxMessage } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <UlxMessage @variant="info" @icon="info-icon">
    <strong>{{t "lbl.message"}}:</strong>
    {{t "msg.message.template.desc"}}
  </UlxMessage>
</template>

`;
