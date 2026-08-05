import { UlxMessage } from 'ulx-components';

<template>
  <UlxMessage @variant="with-badge announcement">
    <div class="message-badge message-badge-shimmer">
      <div class="relative">
        <div class="ulx-sparkles white">
          <span class="bs-icons1 sparkle-icon" aria-hidden="true"></span>
          <span class="bs-icons1 sparkle-icon spark2" aria-hidden="true"></span>
          <span class="bs-icons1 sparkle-icon spark3" aria-hidden="true"></span>
        </div>
        <span class="badge-label">New Feature</span>
      </div>
    </div>
    <div class="message-content flex justify-between gap-3 items-center wt100p">
      <div>
        <span class="bold-font">Contact Segments:</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
  </UlxMessage>
</template>
