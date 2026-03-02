import { UlxMessage, UlxInput } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <div class="flex items-center gap-2 mb-5">
    <UlxInput
      @placeholder={{t "lbl.username"}}
      @invalid={{true}}
      @fieldClass="col-12"
    />
    <UlxMessage
      @text={{t "msg.username.required"}}
      @variant="error"
      @icon="close-stroke-icon"
    />
  </div>
  <div class="flex items-center gap-2 mb-5">
    <UlxInput
      @placeholder={{t "lbl.email"}}
      @invalid={{true}}
      @fieldClass="col-12"
    />
    <UlxMessage
      @text={{t "msg.email.required"}}
      @variant="error"
      @icon="close-stroke-icon"
    />
  </div>
</template>
