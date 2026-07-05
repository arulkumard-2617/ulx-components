import { UlxCard, t } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxCard
      @title="Simple Card"
      @subTitle="Card subtitle"
      @size="s-size"
      @appearance="outlined"
    >
      <p class="fg-text-secondary text-14">
        {{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum."}}
      </p>
    </UlxCard>
  </div>
</template>
