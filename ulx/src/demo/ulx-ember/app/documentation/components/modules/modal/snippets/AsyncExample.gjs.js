const snippet = `import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton } from 'ulx-components';

export default class AsyncExampleDemoComponent extends Component {
  @tracked showModal = false;
  @tracked errorMessage = null;

  @action
  openModal() {
    this.showModal = true;
    this.errorMessage = null;
  }

  @action
  closeModal() {
    this.showModal = false;
  }

  @action
  async handleSave() {
    // Your async operation (API call, validation, etc.)
    await this.api.saveData();
    
    // Modal auto-closes on success (autoCloseOnDone=true by default)
  }

  @action
  handleError(error) {
    // Modal stays open on error so user can retry
    this.errorMessage = error.message;
  }

  <template>
    <UlxButton @label="Open Modal" {{on "click" this.openModal}} />

    <UlxModal
      @visible={{this.showModal}}
      @title="Save Data"
      @onHide={{this.closeModal}}
      @onDone={{this.handleSave}}
      @onError={{this.handleError}}
      @autoCloseOnDone={{true}}
      @submittingLabel="Saving..."
      @showDefaultFooter={{true}}
      @doneButtonLabel="Save"
    >
      {{#if this.errorMessage}}
        <div class="error">{{this.errorMessage}}</div>
      {{/if}}
      
      <p>Your form content here...</p>
    </UlxModal>
  </template>
}`;

export default snippet;
