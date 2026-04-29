import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { hash } from '@ember/helper';
import { UlxTristateCheckbox, t } from 'ulx-components';

export default class BasicTristateCheckboxDemo extends Component {
  @tracked value = false;

  get stateLabel() {
    if (this.value === true) return "Checked";
    if (this.value === null) return "Indeterminate";
    return "Unchecked";
  }

  @action
  handleValueChange(nextValue) {
    this.value = nextValue;
  }

  <template>
    <div class="ulx-form m-size">
      <UlxTristateCheckbox
        @id="tristate-basic"
        @value={{this.value}}
        @onValueChange={{this.handleValueChange}}
        @hideLabel={{true}}
        aria-label={{"Tri-state checkbox: this.stateLabel)"}}
      />
    </div>
  </template>
}
