export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn, concat } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxPopup, UlxButton } from 'ulx-components';

const POSITIONS = [
  { id: 'position-bottom', label: 'Bottom' },
  { id: 'position-top', label: 'Top' },
  { id: 'position-left', label: 'Left' },
  { id: 'position-right', label: 'Right' },
  { id: 'position-bottom-left', label: 'Bottom left' },
  { id: 'position-bottom-right', label: 'Bottom right' },
  { id: 'position-top-left', label: 'Top left' },
  { id: 'position-top-right', label: 'Top right' },
  { id: 'position-top-center', label: 'Top center' },
  { id: 'position-bottom-center', label: 'Bottom center' },
];

export default class PositionsPopupDemo extends Component {
  @tracked visibleByPosition = {};
  @tracked targetByPosition = {};

  @action
  openPopup(positionId, event) {
    const currentlyVisible = this.visibleByPosition[positionId] === true;

    // Toggle behavior: clicking the same trigger again hides its popup.
    this.visibleByPosition = {
      ...this.visibleByPosition,
      [positionId]: !currentlyVisible,
    };

    const target = event?.currentTarget;
    if (!currentlyVisible && target) {
      this.targetByPosition = {
        ...this.targetByPosition,
        [positionId]: target,
      };
    }
  }

  @action
  handlePopupHide(positionId) {
    this.visibleByPosition = {
      ...this.visibleByPosition,
      [positionId]: false,
    };
  }

  @action
  isVisibleFor(positionId) {
    return this.visibleByPosition[positionId] === true;
  }

  @action
  targetFor(positionId) {
    return this.targetByPosition[positionId];
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        {{#each POSITIONS as |pos|}}
          <UlxButton
            @label={{pos.label}}
            @customClass="mg5"
            @variant="secondary"
            {{on "click" (fn this.openPopup pos.id)}}
          />
        {{/each}}
      </div>

      {{#each POSITIONS as |pos|}}
        <UlxPopup
          @visible={{this.isVisibleFor pos.id}}
          @target={{this.targetFor pos.id}}
          @position={{pos.id}}
          @size="m-size"
          @variant="elevated"
          @dismissable={{true}}
          @closable={{false}}
          @closeOnEscape={{true}}
          @ariaLabel={{concat "Popup at " pos.label}}
          @onHide={{fn this.handlePopupHide pos.id}}
        >
          <:default>
            <div class="pda2">
              <p>
                This popup is positioned at
                <strong>{{pos.label}}</strong>.
              </p>
            </div>
          </:default>
        </UlxPopup>
      {{/each}}
    </div>
  </template>
}

`;
