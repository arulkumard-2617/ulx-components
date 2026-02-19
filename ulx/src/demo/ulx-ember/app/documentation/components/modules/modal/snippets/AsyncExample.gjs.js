export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton } from 'ulx-components';

/**
 * Demo: Async operations with loading states
 * Shows how to handle async save operations with proper loading states and error handling
 */
export default class AsyncExampleDemoComponent extends Component {
  @tracked showModal = false;
  @tracked errorMessage = null;
  @tracked successMessage = null;

  @action
  openModal() {
    this.showModal = true;
    this.errorMessage = null;
    this.successMessage = null;
  }

  @action
  closeModal() {
    this.showModal = false;
    this.errorMessage = null;
  }

  @action
  async handleSave() {
    // Simulate async API call
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success 70% of the time
        if (Math.random() > 0.3) {
          resolve();
        } else {
          reject(new Error('Network error: Failed to save data'));
        }
      }, 2000); // 2 second delay
    });

    // If successful, show success message (modal will auto-close)
    this.successMessage = 'Data saved successfully!';
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
  }

  @action
  handleError(error) {
    // Modal stays open on error so user can retry
    this.errorMessage = error.message;
  }

  <template>
    <div class="fxb fvc gp4">
      <UlxButton
        @label="Open Async Modal"
        @variant="primary"
        {{on "click" this.openModal}}
      />

      {{#if this.successMessage}}
        <div class="success-message" style="color: green; padding: 1rem; background: #e8f5e9; border-radius: 4px;">
          ✓ {{this.successMessage}}
        </div>
      {{/if}}
    </div>

    <UlxModal
      @visible={{this.showModal}}
      @title="Save Data"
      @onHide={{this.closeModal}}
      @onDone={{this.handleSave}}
      @onError={{this.handleError}}
      @autoCloseOnDone={{true}}
      @submittingLabel="Saving..."
      @size="m-size"
      @position="center"
      @cancelButtonLabel="Cancel"
      @doneButtonLabel="Save"
    >
      <div class="fxb fvc gp3">
        <p>This modal demonstrates async operations with proper loading states:</p>
        <ul style="margin-left: 1.5rem;">
          <li><strong>Promise handling</strong>: onDone returns a Promise</li>
          <li><strong>Loading state</strong>: Buttons disabled during save</li>
          <li><strong>Auto-close</strong>: Closes automatically on success</li>
          <li><strong>Error handling</strong>: Stays open on error with message</li>
        </ul>

        {{#if this.errorMessage}}
          <div class="error-message" style="color: #d32f2f; padding: 0.75rem; background: #ffebee; border-radius: 4px; border-left: 4px solid #d32f2f;">
            <strong>Error:</strong> {{this.errorMessage}}
            <br />
            <small>Try clicking Save again (70% success rate)</small>
          </div>
        {{/if}}

        <div style="padding: 1rem; background: #f5f5f5; border-radius: 4px; font-family: monospace; font-size: 0.9em;">
          <code>
            @onDone=\\{{this.handleSave}}<br />
            @onError=\\{{this.handleError}}<br />
            @autoCloseOnDone=\\{{true}}<br />
            @submittingLabel="Saving..."
          </code>
        </div>
      </div>
    </UlxModal>
  </template>
}

`;
