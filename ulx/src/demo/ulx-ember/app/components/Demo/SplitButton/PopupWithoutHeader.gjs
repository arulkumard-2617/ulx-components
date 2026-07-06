import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxSplitButton, UlxPopup } from 'ulx-components';

export default class DemoSplitButtonPopupWithoutHeader extends Component {
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
        @ariaLabel="Save options"
        @hideFooter={{true}}
        @size="m-size"
      >
        <p class="mb-0">Headless popup with body content only. Provide @ariaLabel on UlxPopup for
          an accessible name.</p>
      </UlxPopup>
    </UlxSplitButton>
  </template>
}
