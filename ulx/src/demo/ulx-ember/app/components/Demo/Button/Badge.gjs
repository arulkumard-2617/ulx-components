import { UlxButton, t } from 'ulx-components';

<template>
  <div class="flex gap-3 align-items-center flex-wrap">
    <UlxButton
      @label={{t "lbl.messages"}}
      @badgeVariant="danger"
      @badgeSize="xs-size"
      @badge="2"
      @customClass="gp1"
    />
    <UlxButton
      @label={{t "lbl.updates"}}
      @badge="5"
      @customClass="gp1"
      @badgeSize="xs-size"
      @variant="success"
    />
  </div>
</template>
