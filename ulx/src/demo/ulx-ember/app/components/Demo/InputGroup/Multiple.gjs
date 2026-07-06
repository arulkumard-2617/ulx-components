import {
  UlxInput,
  UlxField,
  UlxInputGroup,
  UlxIcon,
  UlxButton
} from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14 w-400">

    <h6 class="col-12 bold-font">Geometry</h6>

    <UlxField @fieldId="geometry-x" @fieldClass="col-4" as |field|>
      <UlxInputGroup @endAddonClass="text-addon">
        <:input>
          <UlxInput
            @field={{field}}
            @type="number"
            @value="10"
            aria-label="X position"
          />
        </:input>
        <:end>
          <span aria-hidden="true">X</span>
        </:end>
      </UlxInputGroup>
    </UlxField>

    <UlxField @fieldId="geometry-y" @fieldClass="col-4" as |field|>
      <UlxInputGroup @endAddonClass="text-addon">
        <:input>
          <UlxInput
            @field={{field}}
            @type="number"
            @value="78"
            aria-label="Y position"
          />
        </:input>
        <:end>
          <span aria-hidden="true">Y</span>
        </:end>
      </UlxInputGroup>
    </UlxField>

    <UlxField @fieldId="geometry-w" @fieldClass="col-4" as |field|>
      <UlxInputGroup
        @endAddonClass="button-addon"
        @startAddonClass="button-addon"
      >
        <:start>
          <UlxButton
            @label="-"
            @variant="basic"
            @size="xs-size"
            aria-label={{"Start Time"}}
          />
        </:start>
        <:input>
          <UlxInput
            @field={{field}}
            @type="number"
            @value="4"
            aria-label="Width"
            class="text-center"
          />
        </:input>
        <:end>
          <UlxButton
            @label="+"
            @variant="basic"
            @size="xs-size"
            aria-label={{"Start Time"}}
          />
        </:end>
      </UlxInputGroup>
    </UlxField>

    <UlxField @fieldId="geometry-h" @fieldClass="col-4" as |field|>
      <UlxInputGroup @endAddonClass="text-addon">
        <:input>
          <UlxInput
            @field={{field}}
            @type="number"
            @value="24"
            aria-label="Height"
          />
        </:input>
        <:end>
          <span aria-hidden="true">H</span>
        </:end>
      </UlxInputGroup>
    </UlxField>

    <UlxField @fieldId="geometry-rotation" @fieldClass="col-4" as |field|>
      <UlxInputGroup @endAddonClass="icon-addon">
        <:input>
          <UlxInput
            @field={{field}}
            @type="number"
            @value="0"
            aria-label="Rotation"
          />
        </:input>
        <:end>
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="angle-icon"
            @size="s18"
            aria-hidden="true"
          />
        </:end>
      </UlxInputGroup>
    </UlxField>

  </div>
</template>
