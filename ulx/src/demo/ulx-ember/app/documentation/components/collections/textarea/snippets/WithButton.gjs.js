export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTextarea, UlxField, UlxButton } from 'ulx-components';

const NOTE_RULES = {
  maxLength: { value: 500 }
};

export default class DemoTextareaWithButton extends Component {
  noteRules = NOTE_RULES;

  @tracked noteValue = '';
  @tracked notes = [];

  get isAddDisabled() {
    return !this.noteValue.trim();
  }

  @action
  updateNote(value) {
    this.noteValue = value;
  }

  @action
  addNote() {
    const trimmed = this.noteValue.trim();
    if (!trimmed) return;
    this.notes = [...this.notes, trimmed];
    this.noteValue = '';
  }

  <template>
    <div class="ulx-form m-size">
      <UlxField
        @label="Add a Note"
        @showCharacterCount={{true}}
        @rules={{this.noteRules}}
        @value={{this.noteValue}}
        @fieldId="add-note"
        as |field|
      >
        <div class="ulx-inputtextarea-action">
          <div class="textarea-body">
            <UlxTextarea
              @field={{field}}
              @value={{this.noteValue}}
              @onInput={{this.updateNote}}
              @size="l-size"
              placeholder="Write your note here..."
              aria-label="Add a note"
            />
            <UlxButton
              @label="Add"
              @variant="primary"
              @disabled={{this.isAddDisabled}}
              @onClick={{this.addNote}}
              class="textarea-action-btn"
            />
          </div>
        </div>
      </UlxField>

      {{#if this.notes.length}}
        <ul class="flex flex-col gap-4 mt-8">
          {{#each this.notes as |note|}}
            <li class="text-13 fg-secondary">{{note}}</li>
          {{/each}}
        </ul>
      {{/if}}
    </div>
  </template>
}

`;
