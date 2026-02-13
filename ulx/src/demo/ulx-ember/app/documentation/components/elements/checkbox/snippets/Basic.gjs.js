export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox, t } from 'ulx-components';

export default class BasicCheckboxDemo extends Component {
  @tracked items = [{ label: t('lbl.all.event.days'), checked: true }];

  get requiredRules() {
    return { required: true };
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxCheckbox
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
      />
    </div>
  </template>
}

`;
