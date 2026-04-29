export default `
import Component from '@glimmer/component';
import { concat } from '@ember/helper';
import { UlxTextarea, UlxField, t } from 'ulx-components';

const sizes = [
  { label: 's-size', size: 's-size' },
  { label: 'm-size', size: 'm-size' },
  { label: 'l-size', size: 'l-size' },
  { label: 'xl-size', size: 'xl-size' },
];

export default class DemoTextareaSizes extends Component {
  sizes = sizes;

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">

      {{#each this.sizes as |item index|}}
        <UlxField
          @label={{item.label}}
          @helpText="Use 3–20 characters. Letters and numbers only."
          @fieldId={{concat "textarea-size-" index}}
          @fieldClass="col-12"
          as |field|
        >
          <UlxTextarea
            @field={{field}}
            @size={{item.size}}
            placeholder={{item.label}}
            aria-label={{item.label}}
          />
        </UlxField>
      {{/each}}

    </div>
  </template>
}

`;
