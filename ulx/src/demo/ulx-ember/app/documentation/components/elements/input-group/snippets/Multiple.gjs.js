export default `
import { UlxInput, UlxField, UlxInputGroup, UlxIcon, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    {{! PRICE INPUT }}
    <UlxField @fieldClass="col-12" as |field|>
      <UlxInputGroup
        @startAddonClass="text-addon"
        @endAddonClass="text-addon"
      >

        <:start>
          $
        </:start>

        <:input>
          <UlxInput
            @field={{field}}
            placeholder={{t "lbl.price"}}
            aria-label={{t "lbl.price"}}
          />
        </:input>

        <:end>
          .00
        </:end>

      </UlxInputGroup>
    </UlxField>

    {{! SEARCH INPUT }}
    <UlxField @fieldClass="col-12" as |field|>
      <UlxInputGroup @startAddonClass="icon-addon">

        <:start>
          <UlxIcon
            @componentClass="bs-icons1"
            @type="font"
            @iconName="ls-tick-icon"
            @size="s18"
            @ariaLabel="search icon"
          />
        </:start>

        <:input>
          <UlxInput
            @field={{field}}
            placeholder={{t "lbl.search"}}
            aria-label={{t "lbl.search"}}
          />
        </:input>

      </UlxInputGroup>
    </UlxField>

  </div>
</template>

`;
