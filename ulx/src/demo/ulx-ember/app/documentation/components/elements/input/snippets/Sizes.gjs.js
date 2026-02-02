export default `
import { UlxInput } from 'uls-components';

const sizes = [
  { label: 's-size', size: 's-size' },
  { label: 'm-size', size: 'm-size' },
  { label: 'l-size', size: 'l-size' },
  { label: 'xl-size', size: 'xl-size' },
];

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    {{#each sizes as |item|}}
      <UlxInput
        @label={{item.label}}
        @size={{item.size}}
        @fieldClass="col-12"
        @keyfilter={{item.keyfilter}}
        placeholder={{item.placeholder}}
        aria-label={{item.label}}
      />
    {{/each}}
  </div>
</template>

`;
