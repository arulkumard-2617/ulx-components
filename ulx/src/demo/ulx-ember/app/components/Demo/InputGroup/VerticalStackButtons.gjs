import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxInput,
  UlxField,
  UlxIconButton,
  UlxInputGroup
} from 'ulx-components';
import { eq } from 'ember-truth-helpers';

export default class DemoInputGroupVerticalStackButtons extends Component {
  @tracked top = 12;
  @tracked bottom = 12;
  @tracked left = 24;
  @tracked right = 24;

  min = 0;

  get topRules() {
    return { min: { value: this.min } };
  }

  get bottomRules() {
    return { min: { value: this.min } };
  }

  get leftRules() {
    return { min: { value: this.min } };
  }

  get rightRules() {
    return { min: { value: this.min } };
  }

  @action
  updateTop(value) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      this.top = Math.max(this.min, num);
    }
  }

  @action
  updateBottom(value) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      this.bottom = Math.max(this.min, num);
    }
  }

  @action
  updateLeft(value) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      this.left = Math.max(this.min, num);
    }
  }

  @action
  updateRight(value) {
    const num = Number(value);
    if (!Number.isNaN(num)) {
      this.right = Math.max(this.min, num);
    }
  }

  @action
  incrementTop() {
    this.top += 1;
  }

  @action
  decrementTop() {
    this.top = Math.max(this.min, this.top - 1);
  }

  @action
  incrementBottom() {
    this.bottom += 1;
  }

  @action
  decrementBottom() {
    this.bottom = Math.max(this.min, this.bottom - 1);
  }

  @action
  incrementLeft() {
    this.left += 1;
  }

  @action
  decrementLeft() {
    this.left = Math.max(this.min, this.left - 1);
  }

  @action
  incrementRight() {
    this.right += 1;
  }

  @action
  decrementRight() {
    this.right = Math.max(this.min, this.right - 1);
  }

  <template>
    <div class="ulx-form m-size mb-14 w-300">

      <div class="field col-12">
        <label>
          <span class="label-text">Padding (px)</span>
        </label>

        <div class="ulx-grid gap-3">
          <UlxField
            @label="Top"
            @fieldId="padding-top"
            @fieldClass="col-6"
            as |field|
          >
            <UlxInputGroup>
              <:input>
                <UlxInput
                  @field={{field}}
                  @value={{this.top}}
                  @rules={{this.topRules}}
                  @onChange={{this.updateTop}}
                  @type="number"
                  aria-label="Top padding"
                />
              </:input>
              <:end>
                <span class="inputgroup-addon vertical-stack-addon">
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="up-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.incrementTop}}
                    aria-label="Increment top padding"
                  />
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="down-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.decrementTop}}
                    @disabled={{eq this.top this.min}}
                    aria-label="Decrement top padding"
                  />
                </span>
              </:end>
            </UlxInputGroup>
          </UlxField>

          <UlxField
            @label="Bottom"
            @fieldId="padding-bottom"
            @fieldClass="col-6"
            as |field|
          >
            <UlxInputGroup>
              <:input>
                <UlxInput
                  @field={{field}}
                  @value={{this.bottom}}
                  @rules={{this.bottomRules}}
                  @onChange={{this.updateBottom}}
                  @type="number"
                  aria-label="Bottom padding"
                />
              </:input>
              <:end>
                <span class="inputgroup-addon vertical-stack-addon">
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="up-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.incrementBottom}}
                    aria-label="Increment bottom padding"
                  />
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="down-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.decrementBottom}}
                    @disabled={{eq this.bottom this.min}}
                    aria-label="Decrement bottom padding"
                  />
                </span>
              </:end>
            </UlxInputGroup>
          </UlxField>

          <UlxField
            @label="Left"
            @fieldId="padding-left"
            @fieldClass="col-6"
            as |field|
          >
            <UlxInputGroup>
              <:input>
                <UlxInput
                  @field={{field}}
                  @value={{this.left}}
                  @rules={{this.leftRules}}
                  @onChange={{this.updateLeft}}
                  @type="number"
                  aria-label="Left padding"
                />
              </:input>
              <:end>
                <span class="inputgroup-addon vertical-stack-addon">
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="up-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.incrementLeft}}
                    aria-label="Increment left padding"
                  />
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="down-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.decrementLeft}}
                    @disabled={{eq this.left this.min}}
                    aria-label="Decrement left padding"
                  />
                </span>
              </:end>
            </UlxInputGroup>
          </UlxField>

          <UlxField
            @label="Right"
            @fieldId="padding-right"
            @fieldClass="col-6"
            as |field|
          >
            <UlxInputGroup>
              <:input>
                <UlxInput
                  @field={{field}}
                  @value={{this.right}}
                  @rules={{this.rightRules}}
                  @onChange={{this.updateRight}}
                  @type="number"
                  aria-label="Right padding"
                />
              </:input>
              <:end>
                <span class="inputgroup-addon vertical-stack-addon">
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="up-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.incrementRight}}
                    aria-label="Increment right padding"
                  />
                  <UlxIconButton
                    @variant="basic"
                    @size="compact"
                    @iconLeft="down-arrow-icon"
                    @iconSize="s14"
                    @onClick={{this.decrementRight}}
                    @disabled={{eq this.right this.min}}
                    aria-label="Decrement right padding"
                  />
                </span>
              </:end>
            </UlxInputGroup>
          </UlxField>
        </div>
      </div>

    </div>
  </template>
}
