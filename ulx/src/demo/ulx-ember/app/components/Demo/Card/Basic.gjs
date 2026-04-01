import { UlxCard, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxCard
      @title={{t "lbl.card.simple"}}
      @subTitle={{t "lbl.card.subtitle"}}
      @size="m-size"
      @appearance="outlined"
    >
      <p class="fg-text-secondary text-14">
        {{t "msg.card.basic.body"}}
      </p>
    </UlxCard>
  </div>
</template>

