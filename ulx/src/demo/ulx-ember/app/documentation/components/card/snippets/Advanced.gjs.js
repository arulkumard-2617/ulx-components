export default `
import { UlxCard, UlxButton, t } from 'ulx-components';

const headerImage =
  'https://primefaces.org/cdn/primereact/images/usercard.png';

<template>
  <div class="pda4">
    <UlxCard
      @title={{t "lbl.card.advanced"}}
      @subTitle={{t "lbl.card.subtitle"}}
      @size="m-size"
      @appearance="elevated"
      @variant="primary"
    >
      <:header>
        <img
          src={{headerImage}}
          alt={{t "lbl.image"}}
          class="ulx-card-image"
        />
      </:header>

      <:content>
        <p class="fg-text-secondary text-14">
          {{t "msg.card.basic.body"}}
        </p>
      </:content>

      <:footer>
        <div class="ulx-card-actions">
          <UlxButton @label={{t "lbl.save"}} @variant="primary" />
          <UlxButton @label={{t "lbl.delete"}} @variant="secondary" />
        </div>
      </:footer>
    </UlxCard>
  </div>
</template>


`;
