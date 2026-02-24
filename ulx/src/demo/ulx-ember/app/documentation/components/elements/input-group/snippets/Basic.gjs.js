export default `
import { UlxInput, UlxIcon, t } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gap-8 mb-14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder={{t "lbl.website"}}
      aria-label={{t "lbl.website"}}
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="ls-tick-icon"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
      </:start>

      <:end>
        <span class="ulx-inputgroup-addon">.com</span>
      </:end>
    </UlxInput>
  </div>
</template>

`;
