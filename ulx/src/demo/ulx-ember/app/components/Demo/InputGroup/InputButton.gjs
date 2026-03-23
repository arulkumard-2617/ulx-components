import { UlxInput, UlxButton, UlxField, UlxInputGroup } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    {{! BUTTON ON LEFT }}
    <UlxField @fieldClass="col-12" as |field|>
      <UlxInputGroup @startAddonClass="button-addon">

        <:start>
          <UlxButton
            @label="Search"
            @variant="primary"
          />
        </:start>

        <:input>
          <UlxInput
            @field={{field}}
            placeholder="Search"
            aria-label="Search"
          />
        </:input>

      </UlxInputGroup>
    </UlxField>

    {{! BUTTON ON RIGHT }}
    <UlxField @fieldClass="col-12" as |field|>
      <UlxInputGroup @endAddonClass="button-addon">

        <:input>
          <UlxInput
            @field={{field}}
            placeholder="Search"
            aria-label="Search"
          />
        </:input>

        <:end>
          <UlxButton
            @label="Add"
            @variant="primary"
          />
        </:end>

      </UlxInputGroup>
    </UlxField>

  </div>
</template>
