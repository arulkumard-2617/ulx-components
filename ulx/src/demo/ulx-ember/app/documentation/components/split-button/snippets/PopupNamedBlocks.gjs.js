export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxSplitButton, UlxButton, UlxPopup } from 'ulx-components';

export default class DemoSplitButtonPopupNamedBlocks extends Component {
  splitButtonRef = null;

  @action
  save() {}

  @action
  setSplitButtonRef(ref) {
    this.splitButtonRef = ref;
  }

  @action
  closePopup() {
    this.splitButtonRef?.close();
  }

  @action
  confirmSave() {
    this.closePopup();
  }

  <template>
    <UlxSplitButton
      @label="Save"
      @popup={{true}}
      @onClick={{this.save}}
      @registerRef={{this.setSplitButtonRef}}
      as |popup|
    >
      <UlxPopup
        @visible={{popup.visible}}
        @target={{popup.target}}
        @onHide={{popup.onHide}}
        @id={{popup.overlayId}}
        @dataQa={{popup.dataQa}}
        @hideFooter={{true}}
        @size="m-size"
      >
        <:head>Confirm</:head>
        <:body>
          <p class="mb-0">Use &lt;:head&gt;, &lt;:body&gt;, and &lt;:footer&gt; on UlxPopup for custom
            popup chrome when the argument-driven layout is not enough.</p>
        </:body>
        <:footer>
          <UlxButton @label="Cancel" @variant="basic" @onClick={{this.closePopup}} />
          <UlxButton @label="Save" @variant="primary" @onClick={{this.confirmSave}} />
        </:footer>
      </UlxPopup>
    </UlxSplitButton>
  </template>
}

`;
