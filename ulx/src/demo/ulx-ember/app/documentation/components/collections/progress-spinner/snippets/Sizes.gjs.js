export default `
import { UlxProgressSpinner } from 'ulx-components';

<template>
  <div class="fxb fvc gp4">
    <UlxProgressSpinner @size="xs" aria-hidden="true" />
    <UlxProgressSpinner @size="s" aria-hidden="true" />
    <UlxProgressSpinner @size="m" @ariaLabel="Loading" />
    <UlxProgressSpinner @size="l" aria-hidden="true" />
    <UlxProgressSpinner @size="xl" aria-hidden="true" />
  </div>
</template>

`;
