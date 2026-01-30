export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal } from 'uls-components';

<template>
  <div class="fxb fvc gp4">
    <button
      type="button"
      class="uls-button uls-button-primary"
      {{on "click" this.openModal}}
    >
      Open Modal
    </button>

    <UlxModal
      @visible={{this.isVisible}}
      @title="Basic Dialog"
      @onHide={{this.closeModal}}
      @showDefaultFooter={{true}}
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Confirm"
      @onDone={{this.handleConfirm}}
    >
      <p>This is the default body content. You can pass any content as the default block.</p>
    </UlxModal>
  </div>
</template>

export default class BasicDialogDemo extends Component {
  @tracked isVisible = false;

  @action
  openModal() {
    this.isVisible = true;
  }

  @action
  closeModal() {
    this.isVisible = false;
  }

  @action
  handleConfirm() {
    this.isVisible = false;
  }
}
`;
