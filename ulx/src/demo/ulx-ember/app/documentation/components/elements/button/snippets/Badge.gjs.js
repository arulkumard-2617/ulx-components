export default `
import { UlxButton, t } from 'ulx-components';

<template>
  <div class="flex gap-3 items-center flex-wrap">
    <UlxButton
      @label={{t "lbl.messages"}}
      @badgeVariant="danger"
      @badgeSize="xs-size"
      @badge="2"
      @customClass="gap-1"
    />
    <UlxButton
      @label={{t "lbl.updates"}}
      @badge="5"
      @customClass="gap-1"
      @badgeSize="xs-size"
      @variant="success"
    />
  </div>
</template>

`;
