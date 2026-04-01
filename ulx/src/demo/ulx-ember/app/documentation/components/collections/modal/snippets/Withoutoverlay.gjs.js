export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton } from 'ulx-components';

export default class WithoutoverlayDemoComponent extends Component {
  @tracked showModal1 = false;
  @tracked showModal2 = false;
  @tracked showModal3 = false;

  @action
  openModal1() {
    this.showModal1 = true;
  }

  @action
  closeModal1() {
    this.showModal1 = false;
  }

  @action
  openModal2() {
    this.showModal2 = true;
  }

  @action
  closeModal2() {
    this.showModal2 = false;
  }

  @action
  openModal3() {
    this.showModal3 = true;
  }

  @action
  closeModal3() {
    this.showModal3 = false;
  }

  <template>
    <div class="flex items-center gap-4 flex-wrap">
      <UlxButton
        @label="Show First"
        @variant="primary"
        {{on "click" this.openModal1}}
      />
      <UlxButton
        @label="Show Second"
        @variant="primary"
        {{on "click" this.openModal2}}
      />
      <UlxButton
        @label="Show Third"
        @variant="primary"
        {{on "click" this.openModal3}}
      />
    </div>

    <UlxModal
      @visible={{this.showModal1}}
      @title="First Dialog (No Overlay)"
      @onHide={{this.closeModal1}}
      @overlay={{false}}
      @blockScroll={{false}}
      @draggable={{true}}
      @size="s-size"
      @position="center"
      @doneButtonLabel="Close"
      @onDone={{this.closeModal1}}
      @onCancel={{this.closeModal1}}
    >
      <p>This dialog has
        <code>@overlay={{false}}</code>
        and
        <code>@draggable={{true}}</code>. No overlay—drag the header to move.
        Multiple dialogs stack in the center.</p>
    </UlxModal>

    <UlxModal
      @visible={{this.showModal2}}
      @title="Second Dialog (No Overlay)"
      @onHide={{this.closeModal2}}
      @overlay={{false}}
      @blockScroll={{false}}
      @draggable={{true}}
      @size="s-size"
      @position="center"
      @doneButtonLabel="Close"
      @onDone={{this.closeModal2}}
      @onCancel={{this.closeModal2}}
    >
      <p>Multiple non-modal dialogs stack one above the other. Drag by the
        header to reposition and see the others.</p>
    </UlxModal>

    <UlxModal
      @visible={{this.showModal3}}
      @title="Third Dialog (No Overlay)"
      @onHide={{this.closeModal3}}
      @overlay={{false}}
      @blockScroll={{false}}
      @draggable={{true}}
      @size="s-size"
      @position="center"
      @doneButtonLabel="Close"
      @onDone={{this.closeModal3}}
      @onCancel={{this.closeModal3}}
    >
      <p>Uses
        <code>dialog-mask:not(.modal)</code>
        from uls-v2—transparent, non-blocking. Drag the header to move.</p>
    </UlxModal>
  </template>
}

`;
