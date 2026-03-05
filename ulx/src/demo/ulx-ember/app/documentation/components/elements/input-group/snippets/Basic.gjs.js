export default `
import { UlxInput, UlxIcon, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">
    <UlxInput
      @inputGroup={{true}}
      @label={{t "lbl.start.time"}}
      placeholder={{t "lbl.start.time.placeholder"}}
      @fieldClass="col-12"
    >
      <:end>
        <span class="inputgroup-addon icon-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="time-icon"
            @size="s18"
          />
        </span>
      </:end>
    </UlxInput>
  </div>
</template>

`;

