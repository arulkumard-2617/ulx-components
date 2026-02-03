import { UlxProgressSpinner } from 'ulx-components';

<template>
  <div class="fxb fvc gp4">
    <UlxProgressSpinner @size="xs-size" aria-hidden="true" />
    <UlxProgressSpinner @size="s-size" aria-hidden="true" />
    <UlxProgressSpinner @size="m-size" @ariaLabel="Loading" />
    <UlxProgressSpinner @size="l-size" aria-hidden="true" />
    <UlxProgressSpinner @size="xl-size" aria-hidden="true" />
  </div>
</template>
