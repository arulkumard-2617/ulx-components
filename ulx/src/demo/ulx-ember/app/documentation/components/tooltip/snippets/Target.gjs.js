export default `
import { UlxTooltip, UlxIcon, UlxBadge } from 'ulx-components';

<template>
  <UlxTooltip @target=".custom-target-icon" />
  <div class="flex gap-3 align-items-center flex-wrap">
    <button
      type="button"
      class="custom-target-icon p-2"
      aria-label="Notifications"
      data-ulx-tooltip="No notifications"
      data-ulx-position="right"
    >
      <UlxIcon @type="font" @iconName="envelope-icon" @iconClass="bs-icons1" aria-hidden="true" />
      <UlxBadge @value="3" @variant="danger" />
    </button>
    <button
      type="button"
      class="custom-target-icon p-2"
      aria-label="Settings"
      data-ulx-tooltip="Settings"
      data-ulx-position="bottom"
    >
      <UlxIcon @type="font" @iconName="gear-icon" @iconClass="bs-icons1" aria-hidden="true" />
    </button>
  </div>
</template>

`;
