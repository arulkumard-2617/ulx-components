export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { hash } from '@ember/helper';
import { UlxTristateCheckbox, t } from 'ulx-components';

export default class BasicTristateCheckboxDemo extends Component {
  @tracked value = false;

  get stateLabel() {
    if (this.value === true) return t('lbl.tristate.checked');
    if (this.value === null) return t('lbl.tristate.indeterminate');
    return t('lbl.tristate.unchecked');
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
        aria-label={{t
          "aria.tristate.checkbox.state"
          (hash state=this.stateLabel)
        }}
      />
    </div>
  </template>
}

`;
