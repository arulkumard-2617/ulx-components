export default `
import Component from '@glimmer/component';
import { concat } from '@ember/helper';
import { UlxInput, UlxField, t } from 'ulx-components';

const sizes = [
  { label: 's-size', size: 's-size' },
  { label: 'm-size', size: 'm-size' },
  { label: 'l-size', size: 'l-size' },
  { label: 'xl-size', size: 'xl-size' },
];

export default class DemoSizes extends Component {
  sizes = sizes;

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">

      {{#each this.sizes as |item index|}}
        <UlxField
          @label={{item.label}}
          @helpText={{t "msg.input.help"}}
          @inputId={{concat "size-" index}}
          @fieldClass="col-12"
        >
          <:control as |field|>
            <UlxInput
              @inputId={{field.inputId}}
              @ariaDescribedBy={{field.describedBy}}
              @ariaErrorMessage={{field.errorId}}
              @size={{item.size}}
              placeholder={{item.label}}
              aria-label={{item.label}}
            />
          </:control>
        </UlxField>
      {{/each}}

    </div>
  </template>
}

`;
