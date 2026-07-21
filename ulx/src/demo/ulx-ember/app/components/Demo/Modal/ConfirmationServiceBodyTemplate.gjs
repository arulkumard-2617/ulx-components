import Component from '@glimmer/component';
import { UlxIcon } from 'ulx-components';

export default class ConfirmationServiceBodyTemplate extends Component {
  <template>
    <div class="flex items-start gap-4">
      <div
        class="color-danger-layer rounded-full flex items-center justify-center w-56 h-56 shrink-0"
      >
        <UlxIcon
          @iconName="delete-icon-01"
          @type="font"
          @componentClass="bs-icons1"
          @size="s24"
        />
      </div>
      <div class="flex flex-col gap-2 min-w-0">
        <h4 class="dialog-title mb-0" id="modal-title">Destructive action header</h4>
        <p class="mb-0">
          Enter you decision making description here. Description must capture
          on what happen when an action is taken after making the decision.
        </p>
      </div>
    </div>
  </template>
}
