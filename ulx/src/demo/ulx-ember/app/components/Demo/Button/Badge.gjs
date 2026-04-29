import { UlxBadgeButton, t } from 'ulx-components';

<template>
  <div class="flex gap-3 items-center flex-wrap">
    <UlxBadgeButton
      @label="Messages"
      @badgeVariant="danger"
      @badgeSize="xs-size"
      @badge="2"
      @customClass="gap-1"
    />
    <UlxBadgeButton
      @label="Updates"
      @badge="5"
      @customClass="gap-1"
      @badgeSize="xs-size"
      @variant="success"
    />
  </div>
</template>
