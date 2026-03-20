import Component from '@glimmer/component';
import { concat } from '@ember/helper';
import { UlxInput, UlxField } from 'ulx-components';

const keyfilters = [
  { label: 'Integers', keyfilter: 'int', placeholder: 'e.g. -123' },
  { label: 'Floats', keyfilter: 'float', placeholder: 'e.g. -12.34' },
  {
    label: 'Email (loose)',
    keyfilter: 'email',
    placeholder: 'e.g. name@site.com',
  },
  {
    label: 'URL (loose)',
    keyfilter: 'url',
    placeholder: 'e.g. https://example.com',
  },
  { label: 'Phone', keyfilter: 'phone', placeholder: 'e.g. +1 (555) 123-4567' },
  { label: 'CPF', keyfilter: 'cpf', placeholder: '11 digits' },
  { label: 'CNPJ', keyfilter: 'cnpj', placeholder: '14 digits' },
  { label: 'Hex', keyfilter: 'hex', placeholder: 'e.g. 1A2b3C' },
  { label: 'Alpha', keyfilter: 'alpha', placeholder: 'letters only' },
  {
    label: 'Alphanum',
    keyfilter: 'alphanum',
    placeholder: 'letters + numbers',
  },
  { label: 'UUID (loose)', keyfilter: 'uuid', placeholder: 'hex + hyphen' },
  { label: 'Date', keyfilter: 'date', placeholder: 'YYYY-MM-DD' },
  { label: 'Time', keyfilter: 'time', placeholder: 'HH:MM' },
  { label: 'Datetime', keyfilter: 'datetime', placeholder: 'YYYY-MM-DD HH:MM' },
  {
    label: 'Datetime Local',
    keyfilter: 'datetime-local',
    placeholder: 'YYYY-MM-DDTHH:MM',
  },
  { label: 'Month', keyfilter: 'month', placeholder: 'YYYY-MM' },
  { label: 'Week', keyfilter: 'week', placeholder: 'YYYY-Www' },
  { label: 'Custom RegExp', keyfilter: '/^[A-Z]*$/', placeholder: 'A–Z only' },
];

export default class DemoKeyFilter extends Component {
  keyfilters = keyfilters;

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">

      {{#each this.keyfilters as |item index|}}
        <UlxField
          @label={{item.label}}
          @id={{concat "keyfilter-" index}}
          @fieldClass="col-4"
        >
          <:control as |field|>
            <UlxInput
              @id={{field.id}}
              @ariaDescribedBy={{field.describedBy}}
              @ariaErrorMessage={{field.errorId}}
              @keyfilter={{item.keyfilter}}
              @size="s-size"
              placeholder={{item.placeholder}}
              aria-label={{item.label}}
            />
          </:control>
        </UlxField>
      {{/each}}

    </div>
  </template>
}
