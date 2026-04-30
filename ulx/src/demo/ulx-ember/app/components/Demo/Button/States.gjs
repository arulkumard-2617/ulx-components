import { UlxIconButton, t } from 'ulx-components';

<template>
  <div class="flex items-center wrap gap-md">
    <UlxIconButton
      @label="Submit"
      @iconLeft="ls-tick-icon"
      @iconSize="s18"
      @iconComponentClass="bs-icons1"
      @loading={{true}}
    />
    <UlxIconButton @label="Submit" @loading={{true}} />
  </div>
</template>
