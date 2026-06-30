import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxSplitButton, UlxPopup } from 'ulx-components';

export default class DemoSplitButtonPopupClosable extends Component {
  @action
  save() {}

  <template>
    <UlxSplitButton @label="Save" @popup={{true}} @onClick={{this.save}} as |popup|>
      <UlxPopup
        @visible={{popup.visible}}
        @target={{popup.target}}
        @onHide={{popup.onHide}}
        @id={{popup.overlayId}}
        @dataQa={{popup.dataQa}}
        @title="More options"
        @closable={{true}}
        @hideFooter={{true}}
        @size="m-size"
      >
        <p class="mb-0">Set @closable on UlxPopup to show the close button in the panel chrome.</p>
      </UlxPopup>
    </UlxSplitButton>
  </template>
}
