import Component from '@glimmer/component';
import { concat } from '@ember/helper';
import { UlxForm, UlxInput, UlxField, t } from 'ulx-components';

const sizes = [
  { label: 's-size', size: 's-size' },
  { label: 'm-size', size: 'm-size' },
  { label: 'l-size', size: 'l-size' },
  { label: 'xl-size', size: 'xl-size' },
];

export default class DemoSizes extends Component {
  sizes = sizes;

  <template>
    <UlxForm @size="m-size" @customClass="ulx-grid gap-8 mb-14">
      {{#each this.sizes as |item index|}}
        <UlxField
          @label={{item.label}}
          @helpText={{t "msg.input.help"}}
          @fieldId={{concat "size-" index}}
          @fieldClass="col-12"
          as |field|
        >
          <UlxInput
            @field={{field}}
            @size={{item.size}}
            placeholder={{item.label}}
            aria-label={{item.label}}
          />
        </UlxField>
      {{/each}}
    </UlxForm>
  </template>
}
