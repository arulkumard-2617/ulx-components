export default `
import { UlxInput, UlxButton, UlxField, UlxInputGroup } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    {{! BUTTON ON LEFT }}
    <UlxField @fieldClass="col-12">
      <:control>
        <UlxInputGroup>

          <:start>
            <UlxButton
              @label="Search"
              @variant="primary"
              @customClass="inputgroup-addon"
            />
          </:start>

          <:input>
            <UlxInput placeholder="Search" aria-label="Search" />
          </:input>

        </UlxInputGroup>
      </:control>
    </UlxField>

    {{! BUTTON ON RIGHT }}
    <UlxField @fieldClass="col-12">
      <:control>
        <UlxInputGroup>

          <:input>
            <UlxInput placeholder="Search" aria-label="Search" />
          </:input>

          <:end>
            <UlxButton
              @label="Add"
              @variant="primary"
              @customClass="inputgroup-addon"
            />
          </:end>

        </UlxInputGroup>
      </:control>
    </UlxField>

  </div>
</template>

`;
