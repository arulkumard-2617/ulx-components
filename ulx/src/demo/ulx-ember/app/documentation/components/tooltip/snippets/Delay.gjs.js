export default `
import { tooltip, UlxButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      {{tooltip "Shows and hides immediately (no delay)"}}
      @label="No delay"
    />
    <UlxButton
      {{tooltip "Waits 500 ms after hover before showing" showDelay=500}}
      @label="Show delay 500 ms"
    />
    <UlxButton
      {{tooltip
        "Waits 300 ms after pointer leaves before hiding"
        hideDelay=300
      }}
      @label="Hide delay 300 ms"
    />
    <UlxButton
      {{tooltip
        "Show after 400 ms, hide after 200 ms"
        showDelay=400
        hideDelay=200
      }}
      @label="Both delays"
    />
  </div>
</template>

`;
