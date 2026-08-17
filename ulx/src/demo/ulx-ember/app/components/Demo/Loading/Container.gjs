import { UlxLoading } from 'ulx-components';

<template>
  <div class="border border-default rounded h-200">
    <p class="p-4 fg-text-secondary">{{"Container content sits under the overlay."}}</p>
    <UlxLoading @isParent={{true}} />
  </div>
</template>
