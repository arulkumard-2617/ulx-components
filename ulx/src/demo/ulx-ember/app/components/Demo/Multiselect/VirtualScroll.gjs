import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, t } from 'ulx-components';
import { hash } from '@ember/helper';

const LARGE_LIST = Array.from({ length: 100000 }, (_, i) => ({
  label: `Item ${i + 1}`,
  value: i + 1,
}));

export default class DemoMultiselectVirtualScroll extends Component {
  @tracked selected = [];

  get items() {
    return LARGE_LIST;
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  <template>
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxMultiSelect
        @options={{this.items}}
        @value={{this.selected}}
        @onChange={{this.setSelected}}
        @selectAll={{true}}
        @virtualScrollerOptions={{hash itemSize=43}}
        @selectionLimit={{3}}
        @placeholder={{t "msg.dropdown.select.virtual"}}
        @label={{t "lbl.dropdown.virtual.scroll"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
