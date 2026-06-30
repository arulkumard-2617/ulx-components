export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxSplitButton, UlxPopup } from 'ulx-components';

export default class DemoSplitButtonPopupBodyOnly extends Component {
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
        @hideFooter={{true}}
        @ariaLabel="Quick note"
        @size="s-size"
      >
        <p class="mb-0">Plain popup body content with no header or footer.</p>
      </UlxPopup>
    </UlxSplitButton>
  </template>
}

`;
