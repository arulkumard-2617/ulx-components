import { UlxInput, UlxField, UlxIconInput, UlxIcon, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-12 mb-14">
    <UlxField
      @label={{t "lbl.calendar"}}
      @fieldId="icon-input-calendar"
      @fieldClass="col-6"
      @helpText={{t "msg.input.help"}}
      as |field|
    >
      <UlxIconInput
        @iconRight={{true}}
        @iconType="font"
        @iconSize="s18"
        @size="m-size"
        @iconAriaLabel={{t "lbl.calendar"}}
      >

        <:icon>
          <UlxIcon
            @iconName="calendar-icon04"
            @type="font"
            @ariaLabel={{t "lbl.calendar"}}
            @size="s20"
          />
        </:icon>

        <:input>
          <UlxInput
            @field={{field}}
            placeholder={{t "lbl.calendar"}}
            aria-label={{t "lbl.calendar"}}
          />
        </:input>
      </UlxIconInput>
    </UlxField>
  </div>
</template>
