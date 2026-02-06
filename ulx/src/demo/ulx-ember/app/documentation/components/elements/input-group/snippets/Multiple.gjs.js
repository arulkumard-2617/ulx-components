export default `
import { UlxInput } from 'ulx-components';
import { UlxIcon } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      @fieldClass="col-12"
      placeholder="Website"
      aria-label="Website"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="user-info-icon-01"
            @size="s18"
            @ariaLabel="tick icon"
          />
        </span>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="user-info-icon"
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
