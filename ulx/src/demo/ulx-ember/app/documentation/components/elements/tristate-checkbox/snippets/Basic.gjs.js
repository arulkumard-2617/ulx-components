export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTristateCheckbox } from 'ulx-components';

export default class BasicTristateCheckboxDemo extends Component {
  @tracked value = false;

  get stateLabel() {
    if (this.value === true) return 'Checked';
    if (this.value === null) return 'Indeterminate';
    return 'Unchecked';
  }

  @action
  handleValueChange(nextValue) {
    this.value = nextValue;
  }

  <template>
    <UlxTristateCheckbox
      @id="tristate-basic"
      @value={{this.value}}
      @onValueChange={{this.handleValueChange}}
      @itemLabel="Accept terms"
      aria-label="Tri-state checkbox: {{this.stateLabel}}"
    />
  </template>
}

`;
