export default `
import {
  UlxInput,
  UlxField,
  UlxInputGroup,
  UlxIconButton,
  UlxButton,
} from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @fieldId="disabled-start-time"
      @label="Start Time"
      @fieldClass="col-12"
      as |field|
    >
      <UlxInputGroup @disabled={{true}} @endAddonClass="icon-addon">

        <:input as |group|>
          <UlxInput
            @field={{field}}
            @disabled={{group.disabled}}
            @invalid={{group.invalid}}
            placeholder="12:00 AM"
            aria-label="Start Time"
          />
        </:input>

        <:end>
          <UlxIconButton
            @variant="basic"
            @size="compact"
            @iconLeft="time-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @disabled={{true}}
            aria-label="Open time picker"
          />
        </:end>

      </UlxInputGroup>
    </UlxField>

    <UlxField @label="Search" @fieldClass="col-12" as |field|>
      <UlxInputGroup @disabled={{true}} @endAddonClass="button-addon">

        <:input as |group|>
          <UlxInput
            @field={{field}}
            @disabled={{group.disabled}}
            @invalid={{group.invalid}}
            placeholder="Search"
            aria-label="Search"
          />
        </:input>

        <:end>
          <UlxButton @label="Add" @variant="primary" @disabled={{true}} />
        </:end>

      </UlxInputGroup>
    </UlxField>

  </div>
</template>

`;
