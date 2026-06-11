import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton } from 'ulx-components';

export default class FooterAlignmentModalDemo extends Component {
  @tracked defaultFooterVisible = false;
  @tracked customFooterVisible = false;
  @tracked defaultAlignment = 'end';
  @tracked customAlignment = 'end';

  get alignmentOptions() {
    return [
      { label: 'Start', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End', value: 'end' },
      { label: 'Space between', value: 'space-between' },
    ];
  }

  @action
  openDefaultFooterModal(alignment) {
    this.defaultAlignment = alignment;
    this.defaultFooterVisible = true;
  }

  @action
  openCustomFooterModal(alignment) {
    this.customAlignment = alignment;
    this.customFooterVisible = true;
  }

  @action
  closeDefaultFooterModal() {
    this.defaultFooterVisible = false;
  }

  @action
  closeCustomFooterModal() {
    this.customFooterVisible = false;
  }

  <template>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <p class="text-13 fg-secondary m-0">Default footer</p>
        <div class="flex flex-wrap gap-3">
          {{#each this.alignmentOptions as |option|}}
            <UlxButton
              @label={{option.label}}
              @variant="primary"
              {{on "click" (fn this.openDefaultFooterModal option.value)}}
            />
          {{/each}}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-13 fg-secondary m-0">Custom footer block</p>
        <div class="flex flex-wrap gap-3">
          {{#each this.alignmentOptions as |option|}}
            <UlxButton
              @label={{option.label}}
              @variant="secondary"
              {{on "click" (fn this.openCustomFooterModal option.value)}}
            />
          {{/each}}
        </div>
      </div>
    </div>

    <UlxModal
      @visible={{this.defaultFooterVisible}}
      @title="Default footer: {{this.defaultAlignment}}"
      @alignment={{this.defaultAlignment}}
      @onHide={{this.closeDefaultFooterModal}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Confirm"
      @onCancel={{this.closeDefaultFooterModal}}
      @onDone={{this.closeDefaultFooterModal}}
    >
      <p>
        Footer actions are aligned with
        <code>@alignment="{{this.defaultAlignment}}"</code>
        on the default footer.
      </p>
    </UlxModal>

    <UlxModal
      @visible={{this.customFooterVisible}}
      @title="Custom footer: {{this.customAlignment}}"
      @alignment={{this.customAlignment}}
      @onHide={{this.closeCustomFooterModal}}
    >
      <:default>
        <p>
          Footer actions are aligned with
          <code>@alignment="{{this.customAlignment}}"</code>
          on a custom
          <code>:footer</code>
          block.
        </p>
      </:default>
      <:footer>
        <UlxButton
          @label="Cancel"
          @variant="basic"
          {{on "click" this.closeCustomFooterModal}}
        />
        <UlxButton
          @label="Confirm"
          @variant="primary"
          {{on "click" this.closeCustomFooterModal}}
        />
      </:footer>
    </UlxModal>
  </template>
}
