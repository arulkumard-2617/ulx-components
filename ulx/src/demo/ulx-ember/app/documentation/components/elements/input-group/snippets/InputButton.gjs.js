export default `
import { UlxInput, UlxButton } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">
    <UlxInput
      @inputGroup={{true}}
      placeholder="Search"
      aria-label="Search"
      @fieldClass="col-12"
    >
      <:start>
        <UlxButton
          @label="Search"
          @variant="primary"
          @customClass="inputgroup-addon"
        />
      </:start>
    </UlxInput>

    <UlxInput
      @inputGroup={{true}}
      placeholder="Search"
      aria-label="Search"
      @fieldClass="col-12"
    >
      <:end>
        <UlxButton
          @label="Add"
          @variant="primary"
          @customClass="inputgroup-addon"
        />
      </:end>
    </UlxInput>
  </div>
</template>

`;
