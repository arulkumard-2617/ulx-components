export default `
import { UlxTooltip, UlxButton, UlxIcon } from 'ulx-components';

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
        <UlxButton {{attach}} @label="Template" />
      </:trigger>
      <:content>
        <div class="ulx-flex-col flex-col gap-1">
          <span>
            <UlxIcon
              @componentClass="bs-icons1"
              @type="font"
              @iconName="user-info-icon"
              @size="s18"
            />Item 1
          </span>
          <span>
            <UlxIcon
              @componentClass="bs-icons1"
              @type="font"
              @iconName="user-info-icon"
              @size="s18"
            />Item 2
          </span>
          <span>
            <UlxIcon
              @componentClass="bs-icons1"
              @type="font"
              @iconName="user-info-icon"
              @size="s18"
              @customClass="fg-green"
            /><span class="fg-green">Item 3</span>
          </span>
        </div>

      </:content>
    </UlxTooltip>
  </div>
</template>

`;
