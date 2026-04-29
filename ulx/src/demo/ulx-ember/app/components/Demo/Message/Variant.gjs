import { UlxMessage } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <UlxMessage
      @text="Inline success message."
      @variant="success"
      @icon="tick-icon-01"
    />
    <UlxMessage
      @text="Inline info message."
      @variant="info"
      @icon="info-icon"
    />
    <UlxMessage
      @text="Inline warning message."
      @variant="warn"
      @icon="sp-danger-filled-icon"
    />
    <UlxMessage
      @text="Inline error message."
      @variant="error"
      @icon="info-icon"
    />
    <UlxMessage @text="Secondary Message" @variant="secondary" />
    <UlxMessage @text="Contrast Message" @variant="contrast" />
  </div>
</template>
