export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxActionButtons, UlxToast } from 'ulx-components';
import { buildSplitActionButtons } from './actions';

const VARIANTS = [
  'primary',
  'secondary',
  'success',
  'danger'
];

export default class DemoActionButtonsVariants extends Component {
  @tracked messages = [];

  variants = VARIANTS;

  get actionButtons() {
    return buildSplitActionButtons({
      onPrimary: () => this.addMessage('Saved', 'Primary action completed'),
      onUpdate: () => this.addMessage('Updated', 'Secondary update action'),
      onDelete: () => this.addMessage('Deleted', 'Secondary delete action')
    });
  }

  @action
  addMessage(summary, detail) {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}\`,
        severity: 'success',
        summary,
        detail
      }
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
      <div class="flex items-center gap-5 flex-wrap">
        {{#each this.variants as |variant|}}
          <UlxActionButtons
            @actionButtons={{this.actionButtons}}
            @variant={{variant}}
          />
        {{/each}}
      </div>
    </div>
  </template>
}

`;
