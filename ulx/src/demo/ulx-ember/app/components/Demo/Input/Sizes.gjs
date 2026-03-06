import { UlxInput, t } from 'ulx-components';

const sizes = [
  { label: 's-size', size: 's-size' },
  { label: 'm-size', size: 'm-size' },
  { label: 'l-size', size: 'l-size' },
  { label: 'xl-size', size: 'xl-size' },
];

<template>
  <div class="ulx-form m-size ulx-grid gap-8 mb-14">
    {{#each sizes as |item|}}
      <UlxInput
        @label={{item.label}}
        @size={{item.size}}
        @fieldClass="col-12"
        @helpText={{t "msg.input.help"}}
        @keyfilter={{item.keyfilter}}
        placeholder={{item.placeholder}}
        aria-label={{item.label}}
      />
    {{/each}}
  </div>
</template>
