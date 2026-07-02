import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxSplitButton, UlxPopup } from 'ulx-components';

export default class DemoSplitButtonPopupDefaultHeader extends Component {
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
        @title="Confirm Save"
        @hideFooter={{true}}
        @size="m-size"
      >
        <p class="mb-0">Pass @title on UlxPopup when you need a default header without custom head
          content.</p>
      </UlxPopup>
    </UlxSplitButton>
  </template>
}
