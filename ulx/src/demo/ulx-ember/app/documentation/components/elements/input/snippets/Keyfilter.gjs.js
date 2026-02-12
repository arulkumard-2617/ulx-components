export default `
import { UlxInput, t } from 'ulx-components';

const keyfilters = [
  { label: t('lbl.integers'), keyfilter: 'int', placeholder: t('ph.integers') },
  { label: t('lbl.floats'), keyfilter: 'float', placeholder: t('ph.floats') },
  {
    label: t('lbl.email.loose'),
    keyfilter: 'email',
    placeholder: t('ph.email'),
  },
  {
    label: t('lbl.url.loose'),
    keyfilter: 'url',
    placeholder: t('ph.url'),
  },
  { label: t('lbl.phone'), keyfilter: 'phone', placeholder: t('ph.phone') },
  { label: t('lbl.cpf'), keyfilter: 'cpf', placeholder: t('ph.cpf') },
  { label: t('lbl.cnpj'), keyfilter: 'cnpj', placeholder: t('ph.cnpj') },
  { label: t('lbl.hex'), keyfilter: 'hex', placeholder: t('ph.hex') },
  { label: t('lbl.alpha'), keyfilter: 'alpha', placeholder: t('ph.alpha') },
  {
    label: t('lbl.alphanum'),
    keyfilter: 'alphanum',
    placeholder: t('ph.alphanum'),
  },
  { label: t('lbl.uuid.loose'), keyfilter: 'uuid', placeholder: t('ph.uuid') },
  { label: t('lbl.date'), keyfilter: 'date', placeholder: 'YYYY-MM-DD' },
  { label: t('lbl.time'), keyfilter: 'time', placeholder: 'HH:MM' },
  { label: t('lbl.datetime'), keyfilter: 'datetime', placeholder: 'YYYY-MM-DD HH:MM' },
  {
    label: t('lbl.datetime.local'),
    keyfilter: 'datetime-local',
    placeholder: 'YYYY-MM-DDTHH:MM',
  },
  { label: t('lbl.month'), keyfilter: 'month', placeholder: 'YYYY-MM' },
  { label: t('lbl.week'), keyfilter: 'week', placeholder: 'YYYY-Www' },
  { label: t('lbl.custom.regexp'), keyfilter: '/^[A-Z]*$/', placeholder: t('ph.custom.regexp') },
];

<template>
  <div class="ulx-form s-size ulx-grid gp8 mgb14">
    {{#each keyfilters as |item|}}
      <UlxInput
        @label={{item.label}}
        @size="s-size"
        @fieldClass="col-4"
        @keyfilter={{item.keyfilter}}
        placeholder={{item.placeholder}}
        aria-label={{item.label}}
      />
    {{/each}}
  </div>
</template>

`;
