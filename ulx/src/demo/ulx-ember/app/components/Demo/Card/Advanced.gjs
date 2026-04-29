import { UlxCard, UlxButton, t } from 'ulx-components';

const headerImage =
  'https://primefaces.org/cdn/primereact/images/usercard.png';

<template>
  <div class="pda4">
    <UlxCard
      @title="Advanced Card"
      @subTitle="Card subtitle"
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
          {{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum."}}
        </p>
      </:content>

      <:footer>
        <div class="ulx-card-actions">
          <UlxButton @label={{t "lbl.save"}} @variant="primary" />
          <UlxButton @label="Delete" @variant="secondary" />
        </div>
      </:footer>
    </UlxCard>
  </div>
</template>

