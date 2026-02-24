import { UlxInput, UlxButton } from 'ulx-components';

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Search"
      aria-label="Search"
      @fieldClass="col-12"
    >
      <:start>
        <UlxButton @label="Search" @variant="primary" />
      </:start>
    </UlxInput>

    <UlxInput
      @inputGroup={{true}}
      @size="s-size"
      placeholder="Search"
      aria-label="Search"
      @fieldClass="col-12"
    >
      <:end>
        <UlxButton @label="Add" @variant="primary" />
      </:end>
    </UlxInput>
  </div>
</template>
