import { UlxProgressBar } from 'ulx-components';

<template>
  <div class="pda4">
    <UlxProgressBar @value={{40}} @size="m">
      <:content as |value|>
        {{value}}/<b>100</b>
      </:content>
    </UlxProgressBar>
  </div>
</template>
