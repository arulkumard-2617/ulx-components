export default `
import { UlxMessage, UlxInput } from 'ulx-components';
import { t } from 'ulx-components';

<template>
  <div class="flex flex-column gap-4">
    <div class="field flex flex-column gap-1">
      <label for="form-username" class="label-text">{{t "lbl.username"}}</label>
      <div class="flex items-center gap-2">
        <UlxInput @id="form-username" @invalid={{true}} />
        <UlxMessage @text={{t "msg.username.required"}} @variant="error" />
      </div>
    </div>
    <div class="field flex flex-column gap-1">
      <label for="form-email" class="label-text">{{t "lbl.email"}}</label>
      <div class="flex items-center gap-2">
        <UlxInput @id="form-email" @invalid={{true}} />
        <UlxMessage @text={{t "msg.email.required"}} @variant="error" />
      </div>
    </div>
  </div>
</template>

`;
