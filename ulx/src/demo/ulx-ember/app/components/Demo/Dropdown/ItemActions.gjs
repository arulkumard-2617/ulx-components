import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn, hash } from '@ember/helper';
import { UlxDropdown, UlxField, UlxIconButton } from 'ulx-components';

const DEFAULT_HALLS = [
  { label: 'jagan', value: 'jagan' },
  { label: 'Hall 1', value: 'hall-1' },
  { label: 'hall 3', value: 'hall-3' }
];

export default class DemoDropdownItemActions extends Component {
  @tracked halls = [...DEFAULT_HALLS];
  @tracked selectedHall = 'hall-3';

  get options() {
    return this.args.options ?? this.halls;
  }

  @action
  setSelectedHall(value) {
    this.selectedHall = value;
  }

  @action
  addHall() {
    const nextIndex = this.halls.length + 1;

    this.halls = [
      ...this.halls,
      { label: `Hall ${nextIndex}`, value: `hall-${nextIndex}` }
    ];
  }

  @action
  editHall(option, event) {
    event?.stopPropagation?.();
  }

  @action
  deleteHall(option, event) {
    event?.stopPropagation?.();

    this.halls = this.halls.filter((hall) => hall.value !== option.value);

    if (this.selectedHall === option.value) {
      this.selectedHall = this.halls[0]?.value ?? null;
    }
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Hall"
        @fieldId="dropdown-item-actions"
        @fieldClass="col-4"
        @rules={{hash required=true}}
      >
        <:labelRight>
          <UlxIconButton
            @label="Add hall"
            @variant="link"
            @iconLeft="add-icon-01"
            @size="s-size"
            @onClick={{this.addHall}}
          />
        </:labelRight>

        <:default as |field|>
          <UlxDropdown
            @field={{field}}
            @options={{this.options}}
            @value={{this.selectedHall}}
            @onChange={{this.setSelectedHall}}
            @placeholder="Select a hall"
          >
            <:item as |ctx|>
              <span class="dropdown-item-content">
                <span class="dropdown-item-label">{{ctx.label}}</span>
                <span class="dropdown-item-actions">
                  <UlxIconButton
                    @variant="link on-hover"
                    @iconLeft="edit-icon"
                    @size="compact"
                    @customClass="dropdown-item-action"
                    @onClick={{fn this.editHall ctx.option}}
                    aria-label="Edit {{ctx.label}}"
                  />
                  <UlxIconButton
                    @variant="danger"
                    @text={{true}}
                    @iconLeft="delete-icon"
                    @size="compact"
                    @customClass="dropdown-item-action"
                    @onClick={{fn this.deleteHall ctx.option}}
                    aria-label="Delete {{ctx.label}}"
                  />
                </span>
              </span>
            </:item>
          </UlxDropdown>
        </:default>
      </UlxField>
    </div>
  </template>
}
