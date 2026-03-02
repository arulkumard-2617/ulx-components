import { UlxMessage } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <UlxMessage
      @text={{t "msg.inline.success"}}
      @variant="success"
      @icon="tick-icon-01"
    />
    <UlxMessage
      @text={{t "msg.inline.info"}}
      @variant="info"
      @icon="info-icon"
    />
    <UlxMessage
      @text={{t "msg.inline.warn"}}
      @variant="warn"
      @icon="sp-danger-filled-icon"
    />
    <UlxMessage
      @text={{t "msg.inline.error"}}
      @variant="error"
      @icon="info-icon"
    />
    <UlxMessage @text={{t "msg.inline.secondary"}} @variant="secondary" />
    <UlxMessage @text={{t "msg.inline.contrast"}} @variant="contrast" />
  </div>
</template>
