export default `
import { UlxIconButton, t } from 'ulx-components';

<template>
  <div class="flex items-center wrap gap-md">
    <UlxIconButton
      @label={{t "lbl.submit"}}
      @iconLeft="ls-tick-icon"
      @iconSize="s18"
      @iconComponentClass="bs-icons1"
      @loading={{true}}
    />
  </div>
</template>

`;
