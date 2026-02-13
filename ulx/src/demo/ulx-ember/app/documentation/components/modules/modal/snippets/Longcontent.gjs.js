export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton } from 'ulx-components';

export default class LongcontentDemoComponent extends Component {
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

  <template>
    <div class="fxb fvc gp4">
      <UlxButton
        @label="Show Long Content Modal"
        @variant="primary"
        {{on "click" this.openModal}}
      />

      <UlxModal
        @visible={{this.isVisible}}
        @title="Long Content"
        @onHide={{this.closeModal}}
        @scrollable={{true}}
        @width="560px"
        @size="m-size"
        @showDefaultFooter={{true}}
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Close"
        @onDone={{this.handleConfirm}}
        @onCancel={{this.closeModal}}
      >
        <p>This modal demonstrates scrollable long content. When the content exceeds the modal height, the body area scrolls independently.</p>
        <h4>Section 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <h4>Section 2</h4>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h4>Section 3</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p>
      </UlxModal>
    </div>
  </template>
}

`;
