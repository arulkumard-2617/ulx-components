export default `
import { UlxInput, UlxIcon, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">
    <UlxInput
      @inputGroup={{true}}
      placeholder={{t "lbl.price"}}
      aria-label={{t "lbl.price"}}
      @fieldClass="col-12"
    >
      <:start>
        <span class="inputgroup-addon text-addon">$</span>
      </:start>
      <:end>
        <span class="inputgroup-addon text-addon">.00</span>
      </:end>
    </UlxInput>

    <UlxInput
      @inputGroup={{true}}
      placeholder={{t "lbl.search"}}
      aria-label={{t "lbl.search"}}
      @fieldClass="col-12"
    >
      <:start>
        <span class="inputgroup-addon icon-addon">
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
