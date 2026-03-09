export default `
import { UlxCard, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxCard
      @title={{t "lbl.card.simple"}}
      @size="m-size"
      @appearance="outlined"
      role="region"
      aria-label={{t "lbl.card.region"}}
    >
      <p class="fg-text-secondary text-14">
        {{t "msg.card.basic.body"}}
      </p>
    </UlxCard>
  </div>
</template>


`;
