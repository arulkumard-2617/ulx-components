export default `
import { UlxTooltip, UlxButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxTooltip>
      <:trigger as |attach|>
        <UlxButton {{attach}} @label="Rich content" />
      </:trigger>
      <:content>
        <strong>Bold text</strong>
        and plain text in the same tooltip.
      </:content>
    </UlxTooltip>
    <UlxTooltip>
      <:trigger as |attach|>
        <UlxButton {{attach}} @label="Multi-line" />
      </:trigger>
      <:content>
        First line.<br />Second line with more detail.
      </:content>
    </UlxTooltip>
    <UlxTooltip>
      <:trigger as |attach|>
        <UlxButton {{attach}} @label="With link" />
      </:trigger>
      <:content>
        Learn more at
        <a href="#" class="ulx-link">documentation</a>.
      </:content>
    </UlxTooltip>
  </div>
</template>

`;
