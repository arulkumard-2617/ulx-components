export default `
import { UlxInput, UlxButton, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">
    <UlxInput
      @inputGroup={{true}}
      @label={{t "lbl.start.time"}}
      placeholder={{t "lbl.start.time.placeholder"}}
      @fieldClass="col-3"
    >
      <:end>
        <UlxButton
          @variant="basic"
          @size="compact"
          @icon="time-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s18"
          @customClass="inputgroup-addon icon-addon"
          aria-label={{t "lbl.start.time"}}
        />
      </:end>
    </UlxInput>
  </div>
</template>

`;
