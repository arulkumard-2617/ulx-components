import { UlxInput, t } from 'ulx-components';

const rules = {
  required: true,
  minLength: { value: 10 },
  maxLength: { value: 20 },
};

<template>
  <div class="ulx-form m-size ulx-grid gap-12 mb-14">
    <UlxInput
      @label={{t "lbl.input"}}
      @tooltipMessage="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
      @rules={{rules}}
      @helpText={{t "msg.input.help"}}
      @fieldClass="col-12"
      placeholder={{t "lbl.enter.username"}}
      aria-label={{t "lbl.username"}}
    />
  </div>
</template>
