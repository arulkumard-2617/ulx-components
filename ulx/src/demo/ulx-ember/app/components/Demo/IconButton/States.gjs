import { UlxIconButton } from 'ulx-components';

<template>
  <div class="flex items-center wrap gap-md">
    <UlxIconButton
      @label="Submit"
      @iconLeft="ls-tick-icon"
      @loading={{true}}
    />
    <UlxIconButton
      @iconLeft="ls-tick-icon"
      @loading={{true}}
      aria-label="Submit"
    />
    <UlxIconButton
      @label="Submit"
      @iconLeft="ls-tick-icon"
      @variant="secondary"
      @loading={{true}}
    />
    <UlxIconButton
      @label="Submit"
      @iconLeft="ls-tick-icon"
      @outlined={{true}}
      @loading={{true}}
    />
  </div>
</template>
