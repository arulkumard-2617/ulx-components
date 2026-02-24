import { UlxInput, UlxIcon, t } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gap-8 mb-14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder={{t "lbl.price"}}
      aria-label={{t "lbl.price"}}
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
      placeholder={{t "lbl.search"}}
      aria-label={{t "lbl.search"}}
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
