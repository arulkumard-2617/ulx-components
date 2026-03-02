export default `
import { tooltip, UlxButton, UlxIcon } from 'ulx-components';

<template>
  <div>
    <div class="flex fhs mb-10">
      <UlxIcon
        {{tooltip "Icon Tooltip" position="top"}}
        @componentClass="bs-icons1"
        @type="font"
        @iconName="info-icon-01"
      />
    </div>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton
        {{tooltip "Tooltip on the right" position="right"}}
        @label="Right"
      />
      <UlxButton {{tooltip "Tooltip on the top" position="top"}} @label="Top" />
      <UlxButton
        {{tooltip "Tooltip on the bottom" position="bottom"}}
        @label="Bottom"
      />
      <UlxButton
        {{tooltip "Tooltip on the left" position="left"}}
        @label="Left"
      />
    </div>
  </div>
</template>

`;
