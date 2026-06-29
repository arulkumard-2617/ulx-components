export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxSplitButton, UlxPopup } from 'ulx-components';

const POSITIONS = [
  'position-bottom-left',
  'position-bottom-right',
  'position-bottom-center',
  'position-top-left',
  'position-top-right',
  'position-top-center',
  'position-left',
  'position-right',
];

export default class DemoSplitButtonPopupPositions extends Component {
  get positions() {
    return POSITIONS;
  }

  @action
  save() {}

  <template>
    <div class="flex flex-col gap-6">
      <p class="mb-0">
        {{"Click the chevron on each split button to open the popup at that position. This demo uses @context=\\"body\\" on UlxPopup so each placement is easy to compare."}}
      </p>
      <div class="flex items-center gap-8 flex-wrap">
        {{#each this.positions as |position|}}
          <UlxSplitButton @label={{position}} @popup={{true}} @onClick={{this.save}} as |popup|>
            <UlxPopup
              @visible={{popup.visible}}
              @target={{popup.target}}
              @onHide={{popup.onHide}}
              @id={{popup.overlayId}}
              @dataQa={{popup.dataQa}}
              @title="Position"
              @position={{position}}
              @context="body"
              @boundary="window"
              @hideFooter={{true}}
            >
              <p class="mb-0">
                <span class="bold-font">{{"Selected:"}}</span>
                {{position}}
              </p>
            </UlxPopup>
          </UlxSplitButton>
        {{/each}}
      </div>
    </div>
  </template>
}

`;
