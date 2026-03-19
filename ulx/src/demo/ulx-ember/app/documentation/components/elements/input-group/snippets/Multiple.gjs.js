export default `
import { UlxInput, UlxField, UlxInputGroup, UlxIcon, t } from 'ulx-components';

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">

    {{! PRICE INPUT }}
    <UlxField @fieldClass="col-12">
      <:control>
        <UlxInputGroup>

          <:start>
            <span class="inputgroup-addon text-addon">$</span>
          </:start>

          <:input>
            <UlxInput
              placeholder={{t "lbl.price"}}
              aria-label={{t "lbl.price"}}
            />
          </:input>

          <:end>
            <span class="inputgroup-addon text-addon">.00</span>
          </:end>

        </UlxInputGroup>
      </:control>
    </UlxField>

    {{! SEARCH INPUT }}
    <UlxField @fieldClass="col-12">
      <:control>
        <UlxInputGroup>

          <:start>
            <span class="inputgroup-addon icon-addon">
              <UlxIcon
                @componentClass="bs-icons1"
                @type="font"
                @iconName="ls-tick-icon"
                @size="s18"
                @ariaLabel="search icon"
              />
            </span>
          </:start>

          <:input>
            <UlxInput
              placeholder={{t "lbl.search"}}
              aria-label={{t "lbl.search"}}
            />
          </:input>

        </UlxInputGroup>
      </:control>
    </UlxField>

  </div>
</template>

`;
