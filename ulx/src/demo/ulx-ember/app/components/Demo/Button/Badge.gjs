import { UlxButton } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      @label="Messages"
      @badgeVariant="danger"
      @badgeSize="xs-size"
      @badge="2"
      @customClass="gp1"
    />
    <UlxButton
      @label="Updates"
      @badge="5"
      @customClass="gp1"
      @badgeSize="xs-size"
      @variant="success"
    />
  </div>
</template>
