export default `
import { UlxInput, t } from 'ulx-components';

const rules = {
  required: true,
  minLength: { value: 10 },
  maxLength: { value: 20 },
};

<template>
  <div class="ulx-form m-size ulx-grid gp12 mgb14">
    <UlxInput
      @label={{t "lbl.input"}}
      @rules={{rules}}
      @helpText={{t "msg.input.help"}}
      @size="m-size"
      @error={{t "msg.error.message.here"}}
      @fieldClass="col-12"
      placeholder={{t "lbl.enter.username"}}
      aria-label={{t "lbl.username"}}
    />
  </div>
</template>

`;
