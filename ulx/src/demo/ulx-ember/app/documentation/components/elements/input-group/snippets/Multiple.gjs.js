export default `
import { UlxInput, UlxIcon } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Price"
      aria-label="Price"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">$</span>
      </:start>
      <:end>
        <span class="ulx-inputgroup-addon">.00</span>
      </:end>
    </UlxInput>

    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Search"
      aria-label="Search"
      @fieldClass="col-12"
    >
      <:start>
        <span class="ulx-inputgroup-addon">
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="ls-tick-icon"
            @size="s18"
            @ariaLabel="search icon"
          />
        </span>
      </:start>
    </UlxInput>
  </div>
</template>

`;
