import { UlxButton, UlxIconButton, UlxBadgeButton, t } from 'ulx-components';

<template>
  <div class="flex items-center wrap gap-md">
    <UlxButton
      @label={{t "lbl.submit"}}
      @loading={{true}}
    />

    <UlxIconButton
      @label={{t "lbl.save"}}
      @iconLeft="ls-tick-icon"
      @iconSize="s18"
      @iconComponentClass="bs-icons1"
      @loading={{true}}
    />

    <UlxBadgeButton
      @label={{t "lbl.delete"}}
      @badge="3"
      @badgeVariant="danger"
      @badgeSize="xs-size"
      @variant="danger"
      @loading={{true}}
    />
  </div>
</template>
