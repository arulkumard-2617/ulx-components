import {
  UlxInput,
  UlxField,
  UlxInputGroup,
  UlxButton,
  t,
} from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    <UlxField
      @inputId="start-time"
      @label={{t "lbl.start.time"}}
      @fieldClass="col-3"
    >
      <:control as |field|>

        <UlxInputGroup>

          <:input>
            <UlxInput
              @inputId={{field.inputId}}
              @ariaDescribedBy={{field.describedBy}}
              @ariaErrorMessage={{field.errorId}}
              placeholder={{t "lbl.start.time.placeholder"}}
              aria-label={{t "lbl.start.time"}}
            />
          </:input>

          <:end>
            <UlxButton
              @variant="basic"
              @size="compact"
              @icon="time-icon"
              @iconComponentClass="bs-icons1"
              @iconSize="s18"
              @customClass="inputgroup-addon icon-addon"
              aria-label={{t "lbl.start.time"}}
            />
          </:end>

        </UlxInputGroup>

      </:control>
    </UlxField>

  </div>
</template>
