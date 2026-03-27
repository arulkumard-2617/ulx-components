export default `
import { tooltip, UlxButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <div {{tooltip "Update name"}}>...</div>
    <UlxButton
      {{tooltip
        "Confirm to proceed"
        position="top"
        showDelay=1000
        hideDelay=300
      }}
      @label="Save"
    />
  </div>
</template>

`;
