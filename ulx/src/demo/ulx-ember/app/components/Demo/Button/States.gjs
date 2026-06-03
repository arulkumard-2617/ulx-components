import { UlxButton } from 'ulx-components';

<template>
  <div class="flex items-center wrap gap-md">
    <UlxButton @label="Submit" @loading={{true}} />
    <UlxButton @label="Submit" @variant="secondary" @loading={{true}} />
    <UlxButton @label="Submit" @variant="outlined" @loading={{true}} />
  </div>
</template>
