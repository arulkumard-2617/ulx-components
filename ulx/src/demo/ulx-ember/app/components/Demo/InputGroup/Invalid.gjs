import {
  UlxInput,
  UlxField,
  UlxInputGroup,
  UlxButton,
} from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @label="Amount"
      @fieldId="invalid-amount"
      @fieldClass="col-12"
      @error="Please enter a valid amount."
      as |field|
    >
      <UlxInputGroup
        @invalid={{true}}
        @startAddonClass="text-addon"
        @endAddonClass="button-addon"
      >

        <:start>
          <span aria-hidden="true">$</span>
        </:start>

        <:input as |group|>
          <UlxInput
            @field={{field}}
            @invalid={{group.invalid}}
            @disabled={{group.disabled}}
            placeholder="0.00"
            aria-label="Amount"
          />
        </:input>

        <:end>
          <UlxButton @label="Apply" @variant="primary" />
        </:end>

      </UlxInputGroup>
    </UlxField>

  </div>
</template>
