import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxProgressBar, t } from 'ulx-components';

export default class WithControlsProgressBarDemo extends Component {
  @tracked value = 50;

  @action
  updateValue(newVal) {
    this.value = newVal;
  }

  <template>
    <div class="pda4 flex flex-col gap-4">
      <p class="fg-text-secondary">{{t "msg.progress.adjust.preference"}}</p>
      <UlxProgressBar
        @showControls={{true}}
        @value={{this.value}}
        @onChange={{this.updateValue}}
        @min={{1}}
        @max={{200}}
        @size="xs-size"
      />
    </div>
  </template>
}
