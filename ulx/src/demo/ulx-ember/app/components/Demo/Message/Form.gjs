import { UlxMessage, UlxInput } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <div class="flex items-center gap-2 mb-5">
    <UlxInput
      @placeholder="Username"
      @invalid={{true}}
      @fieldClass="col-12"
    />
    <UlxMessage
      @text="Username is required."
      @variant="error"
      @icon="close-stroke-icon"
    />
  </div>
  <div class="flex items-center gap-2 mb-5">
    <UlxInput
      @placeholder="Email"
      @invalid={{true}}
      @fieldClass="col-12"
    />
    <UlxMessage
      @text="Email is required."
      @variant="error"
      @icon="close-stroke-icon"
    />
  </div>
</template>
