import { tooltip, UlxTooltip, UlxButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      {{tooltip "Hides as soon as the pointer leaves the button"}}
      @label="Auto hide (default)"
    />
    <UlxTooltip
      @content="Stays open so you can move the pointer onto the tooltip (e.g. to click a link)"
      @autoHide={{false}}
      as |attach|
    >
      <UlxButton {{attach}} @label="Interactive" />
    </UlxTooltip>
  </div>
</template>
