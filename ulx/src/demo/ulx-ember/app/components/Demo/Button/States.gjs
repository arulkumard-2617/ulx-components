import { UlxButton, t } from 'ulx-components';

<template>
  <div class="flex items-center wrap gap-md">
    <UlxButton
      @label={{t "lbl.submit"}}
      @icon="ls-tick-icon"
      @iconSize="s18"
      @iconComponentClass="bs-icons1"
      @loading={{true}}
    />
  </div>
</template>
