export default `
import { UlxBadgeButton } from 'ulx-components';

<template>
  <div class="flex gap-3 items-center flex-wrap">
    <UlxBadgeButton
      @label="Messages"
      @badge="2"
      @badgeSize="xs-size"
      @disabled={{true}}
      @customClass="gap-1"
      @badgeVariant="danger"
    />
  </div>
</template>

`;
