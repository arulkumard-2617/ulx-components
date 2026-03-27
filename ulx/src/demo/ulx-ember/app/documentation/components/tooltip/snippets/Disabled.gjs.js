export default `
import { tooltip, UlxButton, UlxTooltip } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      {{tooltip "This tooltip is enabled" disabled=false}}
      @label="Enabled"
    />
    <UlxButton
      {{tooltip "This tooltip never shows" disabled=true}}
      @label="Disabled"
    />
    <span {{tooltip "Tooltip on a disabled button"}}>
      <UlxButton @label="Disabled button" @disabled={{true}} />
    </span>

    <UlxTooltip
      @content="Tooltip on a disabled button"
      @showOnDisabled={{true}}
    >
      <:trigger as |attach|>
        <span {{attach}}>
          <UlxButton @label="Disabled button" @disabled={{true}} />
        </span>
      </:trigger>
    </UlxTooltip>
  </div>
</template>

`;
