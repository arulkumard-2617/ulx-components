export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxActionButtons,
  UlxPopup,
  UlxField,
  UlxInputGroup,
  UlxInput,
  UlxButton
} from 'ulx-components';

const SHARE_URL = 'https://example.com/event#/?ref=demo123';

export default class DemoActionButtonsPrimaryButtonPopup extends Component {
  @tracked isSplitPopupVisible = false;

  @tracked isStandalonePopupVisible = false;

  @tracked splitPopupAnchor = null;

  @tracked standalonePopupAnchor = null;

  get shareUrl() {
    return SHARE_URL;
  }

  get splitActionButtons() {
    return [
      {
        label: 'Get Link',
        command: this.toggleSplitPopup
      },
      {
        label: 'View',
        icon: 'view-icon',
        command: () => {}
      },
      {
        label: 'Delete',
        icon: 'delete-icon',
        command: () => {}
      }
    ];
  }

  get standaloneActionButtons() {
    return [
      {
        label: 'Get Link',
        command: this.toggleStandalonePopup
      }
    ];
  }

  @action
  setSplitPopupAnchor(element) {
    this.splitPopupAnchor = element;
  }

  @action
  setStandalonePopupAnchor(element) {
    this.standalonePopupAnchor = element;
  }

  @action
  toggleSplitPopup() {
    if (this.isSplitPopupVisible) {
      this.isSplitPopupVisible = false;
      return;
    }

    this.isSplitPopupVisible = true;
  }

  @action
  toggleStandalonePopup() {
    if (this.isStandalonePopupVisible) {
      this.isStandalonePopupVisible = false;
      return;
    }

    this.isStandalonePopupVisible = true;
  }

  @action
  hideSplitPopup() {
    this.isSplitPopupVisible = false;
  }

  @action
  hideStandalonePopup() {
    this.isStandalonePopupVisible = false;
  }

  @action
  copyShareUrl() {
    navigator.clipboard?.writeText(SHARE_URL);
  }

  <template>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <p class="text-secondary mb-0">
          {{"Split button — popup anchors to the primary action button, not the dropdown chevron."}}
        </p>
        <UlxActionButtons
          @actionButtons={{this.splitActionButtons}}
          @variant="secondary"
          @outlined={{true}}
          @size="m-size"
          @onShow={{this.hideSplitPopup}}
          @onPrimaryButtonReady={{this.setSplitPopupAnchor}}
        />
      </div>

      <UlxPopup
        @visible={{this.isSplitPopupVisible}}
        @target={{this.splitPopupAnchor}}
        @context="body"
        @position="position-bottom-left"
        @size="l-size"
        @variant="elevated"
        @onHide={{this.hideSplitPopup}}
        @hideFooter={{true}}
      >
        <:body>
          <div class="ulx-form m-size fluid">
            <UlxField @label="URL" as |field|>
              <UlxInputGroup @size="l-size">
                <:input>
                  <UlxInput @field={{field}} @value={{this.shareUrl}} @readonly={{true}} />
                </:input>
                <:end>
                  <UlxButton
                    @label="Copy"
                    @variant="primary"
                    @customClass="right-item"
                    @onClick={{this.copyShareUrl}}
                  />
                </:end>
              </UlxInputGroup>
            </UlxField>
          </div>
        </:body>
      </UlxPopup>

      <div class="flex flex-col gap-2">
        <p class="text-secondary mb-0">
          {{"Standalone button — same @onPrimaryButtonReady callback when only one action is provided."}}
        </p>
        <UlxActionButtons
          @actionButtons={{this.standaloneActionButtons}}
          @variant="secondary"
          @outlined={{true}}
          @size="m-size"
          @onPrimaryButtonReady={{this.setStandalonePopupAnchor}}
        />
      </div>

      <UlxPopup
        @visible={{this.isStandalonePopupVisible}}
        @target={{this.standalonePopupAnchor}}
        @context="body"
        @position="position-bottom-left"
        @size="l-size"
        @variant="elevated"
        @onHide={{this.hideStandalonePopup}}
        @hideFooter={{true}}
      >
        <:body>
          <div class="ulx-form m-size fluid">
            <UlxField @label="URL" as |field|>
              <UlxInputGroup @size="l-size">
                <:input>
                  <UlxInput @field={{field}} @value={{this.shareUrl}} @readonly={{true}} />
                </:input>
                <:end>
                  <UlxButton
                    @label="Copy"
                    @variant="primary"
                    @customClass="right-item"
                    @onClick={{this.copyShareUrl}}
                  />
                </:end>
              </UlxInputGroup>
            </UlxField>
          </div>
        </:body>
      </UlxPopup>
    </div>
  </template>
}

`;
