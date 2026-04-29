export default `
import {
  UlxInput,
  UlxField,
  UlxInputGroup,
  UlxIconButton,
  t,
} from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @fieldId="start-time"
      @label="Start Time"
      @fieldClass="col-3"
      as |field|
    >
      <UlxInputGroup @endAddonClass="icon-addon">

        <:input>
          <UlxInput
            @field={{field}}
            placeholder={{"12:00 AM"}}
            aria-label={{"Start Time"}}
          />
        </:input>

        <:end>
          <UlxIconButton
            @variant="basic"
            @size="compact"
            @iconLeft="time-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            aria-label={{"Start Time"}}
          />
        </:end>

      </UlxInputGroup>
    </UlxField>

  </div>
</template>

`;
