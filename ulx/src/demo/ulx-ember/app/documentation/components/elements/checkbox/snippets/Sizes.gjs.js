export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { UlxCheckbox, UlxField } from 'ulx-components';

export default class SizesCheckboxDemo extends Component {
  @tracked sizeItems = [
    { size: 'xxxs-size', checked: false },
    { size: 'xs-size', checked: false },
    { size: 's-size', checked: false },
    { size: 'm-size', checked: false },
    { size: 'l-size', checked: false },
    { size: 'xl-size', checked: false },
  ];

  @action
  handleSizeChange(item, checked) {
    this.sizeItems = this.sizeItems.map((entry) =>
      entry === item ? { ...entry, checked } : entry
    );
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <div class="flex flex-column gap-4">
        {{#each this.sizeItems as |item|}}
          <div class="flex align-items-center gap-2">
            <UlxField @fieldId={{item.size}} as |field|>
              <UlxCheckbox
                @field={{field}}
                @size={{item.size}}
                @checked={{item.checked}}
                @onCheckedChange={{fn this.handleSizeChange item}}
                @itemLabel={{item.size}}
              />
            </UlxField>
          </div>
        {{/each}}
      </div>
    </div>
  </template>
}


`;
