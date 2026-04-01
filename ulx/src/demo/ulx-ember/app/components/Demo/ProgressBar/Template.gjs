import { UlxProgressBar } from 'ulx-components';

<template>
  <div class="">
    <UlxProgressBar @value={{40}}>
      <:content as |value|>
        {{value}}/<b>100</b>
      </:content>
    </UlxProgressBar>
  </div>
</template>
