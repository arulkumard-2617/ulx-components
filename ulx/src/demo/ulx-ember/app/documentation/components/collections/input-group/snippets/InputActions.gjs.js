export default `
import { UlxInput, UlxInputGroup, UlxIconButton } from 'ulx-components';

<template>
  <div class="mb-14">
    <span class="flex gap-2 items-center">
      <UlxInputGroup
        @size="s-size"
        @startAddonClass="text-addon"
        @customClass="w-108"
      >
        <:start>$</:start>
        <:input>
          <UlxInput
            @type="number"
            @value="5000"
            aria-label="Base price"
          />
        </:input>
      </UlxInputGroup>

      <UlxIconButton
        @iconLeft="bs-icons1 ls-tick-icon"
        @variant="primary"
        @text={{true}}
        @pilled={{true}}
        @iconSize="s20"
        aria-label="Confirm base price"
      />

      <UlxIconButton
        @iconLeft="bs-icons1 close-stroke-icon-new"
        @variant="danger"
        @text={{true}}
        @pilled={{true}}
        @iconSize="s20"
        aria-label="Cancel base price edit"
      />
    </span>
  </div>
</template>

`;
