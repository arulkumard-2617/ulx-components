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
  toggleModal1() {
    this.showModal1 = !this.showModal1;
  }

  @action
  toggleModal2() {
    this.showModal2 = !this.showModal2;
  }

  @action
  toggleModal3() {
    this.showModal3 = !this.showModal3;
  }

  <template>
    <div class="fxb fvc gp4 fw-wrap">
      <UlxButton @label="Show First" @variant="primary" {{on "click" this.toggleModal1}} />
      <UlxButton @label="Show Second" @variant="primary" {{on "click" this.toggleModal2}} />
      <UlxButton @label="Show Third" @variant="primary" {{on "click" this.toggleModal3}} />
    </div>

    <UlxModal
      @visible={{this.showModal1}}
      @title="First Dialog (No Overlay)"
      @onHide={{this.toggleModal1}}
      @modal={{false}}
      @blockScroll={{false}}
      @draggable={{true}}
      @size="s-size"
      @position="center"
      @showDefaultFooter={{true}}
      @doneButtonLabel="Close"
      @onDone={{this.toggleModal1}}
      @onCancel={{this.toggleModal1}}
    >
      <p>This dialog has <code>@modal={{false}}</code> and <code>@draggable={{true}}</code>. No overlay—drag the header to move.</p>
    </UlxModal>

    <UlxModal
      @visible={{this.showModal2}}
      @title="Second Dialog (No Overlay)"
      @onHide={{this.toggleModal2}}
      @modal={{false}}
      @blockScroll={{false}}
      @draggable={{true}}
      @size="s-size"
      @position="center"
      @showDefaultFooter={{true}}
      @doneButtonLabel="Close"
      @onDone={{this.toggleModal2}}
      @onCancel={{this.toggleModal2}}
    >
      <p>Multiple non-modal dialogs stack one above the other. Drag by the header to reposition.</p>
    </UlxModal>

    <UlxModal
      @visible={{this.showModal3}}
      @title="Third Dialog (No Overlay)"
      @onHide={{this.toggleModal3}}
      @modal={{false}}
      @blockScroll={{false}}
      @draggable={{true}}
      @size="s-size"
      @position="center"
      @showDefaultFooter={{true}}
      @doneButtonLabel="Close"
      @onDone={{this.toggleModal3}}
      @onCancel={{this.toggleModal3}}
    >
      <p>Uses dialog-mask:not(.modal) from uls-v2—transparent, non-blocking. Drag the header to move.</p>
    </UlxModal>
  </template>
}

`;
