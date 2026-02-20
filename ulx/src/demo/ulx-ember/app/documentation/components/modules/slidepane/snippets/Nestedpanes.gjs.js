export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxSlidePane, UlxButton, UlxModal } from 'ulx-components';

export default class NestedpanesDemoComponent extends Component {
  @tracked showPane1 = false;
  @tracked showPane2 = false;
  @tracked showPane3 = false;
  @tracked showModal = false;

  @action
  openPane1() {
    this.showPane1 = true;
  }

  @action
  closePane1() {
    this.showPane1 = false;
  }

  @action
  openPane2() {
    this.showPane2 = true;
  }

  @action
  closePane2() {
    this.showPane2 = false;
  }

  @action
  openPane3() {
    this.showPane3 = true;
  }

  @action
  closePane3() {
    this.showPane3 = false;
  }

  @action
  backToPane2() {
    this.closePane3();
  }

  @action
  backToPane1() {
    this.closePane2();
  }

  @action
  openModal() {
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }

  <template>
    <div class="fxb fvc gp4">
      <UlxButton
        @label="Open Slide Pane 1"
        @variant="primary"
        {{on "click" this.openPane1}}
      />
    </div>

    <UlxSlidePane
      @visible={{this.showPane1}}
      @title="Slide Pane 1"
      @onHide={{this.closePane1}}
      @position="right"
      @size="m-size"
      @onCancel={{this.closePane1}}
      @onDone={{this.closePane1}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Done"
    >
      <:body>
        <p>From here you can open Pane 2.</p>
        <UlxButton
          @label="Open Pane 2"
          @variant="primary"
          {{on "click" this.openPane2}}
        />
      </:body>
    </UlxSlidePane>

    <UlxSlidePane
      @visible={{this.showPane2}}
      @title="Slide Pane 2"
      @onHide={{this.closePane2}}
      @onBack={{this.backToPane1}}
      @backButtonLabel="Back to Pane 1"
      @position="right"
      @size="m-size"
      @onCancel={{this.closePane2}}
      @onDone={{this.closePane2}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Done"
    >
      <:body>
        <p>From here you can open Pane 3 or a modal. Use the Back button in the header to return to Pane 1.</p>
        <div class="fxb fvc gp4 fw-wrap">
          <UlxButton
            @label="Open Pane 3"
            @variant="primary"
            {{on "click" this.openPane3}}
          />
          <UlxButton
            @label="Open Modal"
            @variant="secondary"
            {{on "click" this.openModal}}
          />
        </div>
      </:body>
    </UlxSlidePane>

    <UlxSlidePane
      @visible={{this.showPane3}}
      @title="Slide Pane 3"
      @onHide={{this.closePane3}}
      @onBack={{this.backToPane2}}
      @backButtonLabel="Back to Pane 2"
      @position="right"
      @size="m-size"
      @onCancel={{this.closePane3}}
      @onDone={{this.closePane3}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Done"
    >
      <:body>
        <p>This is the third pane. Use the Back button in the header to return to Pane 2.</p>
      </:body>
    </UlxSlidePane>

    <UlxModal
      @visible={{this.showModal}}
      @title="Modal from Pane 2"
      @onHide={{this.closeModal}}
      @size="s-size"
      @position="center"
      @doneButtonLabel="Close"
      @onDone={{this.closeModal}}
      @onCancel={{this.closeModal}}
    >
      <p>This modal was opened from Slide Pane 2.</p>
    </UlxModal>
  </template>
}

`;
