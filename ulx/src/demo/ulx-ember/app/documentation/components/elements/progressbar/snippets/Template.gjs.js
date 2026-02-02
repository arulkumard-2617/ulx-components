export default `
import { UlxProgressBar } from 'uls-components';

<template>
  <UlxProgressBar @value={{40}} @size="m">
    <:content as |value|>
      {{value}}/<b>100</b>
    </:content>
  </UlxProgressBar>
</template>
`;
