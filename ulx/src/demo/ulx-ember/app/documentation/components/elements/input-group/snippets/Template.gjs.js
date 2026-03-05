export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxInput, UlxButton, UlxCheckbox, t } from 'ulx-components';
import { eq, or } from 'ember-truth-helpers';

export default class DemoInputGroupTemplate extends Component {
  @tracked hours = 0;
  @tracked minutes = 45;
  @tracked isToBeAnnounced = false;

  hourMin = 0;
  hourMax = 23;

  minuteMin = 0;
  minuteMax = 59;

  get hourRules() {
    return { min: { value: this.hourMin }, max: { value: this.hourMax } };
  }

  get minuteRules() {
    return { min: { value: this.minuteMin }, max: { value: this.minuteMax } };
  }

  get isDisabled() {
    return this.isToBeAnnounced;
  }

  @action updateHours(event) {
    const num = Number(event.target.value);
    if (!Number.isNaN(num)) {
      this.hours = Math.max(this.hourMin, Math.min(this.hourMax, num));
    }
  }

  @action updateMinutes(event) {
    const num = Number(event.target.value);
    if (!Number.isNaN(num)) {
      this.minutes = Math.max(this.minuteMin, Math.min(this.minuteMax, num));
    }
  }

  @action incrementHours() {
    if (this.isDisabled) return;
    this.hours = Math.min(this.hourMax, this.hours + 1);
  }

  @action decrementHours() {
    if (this.isDisabled) return;
    this.hours = Math.max(this.hourMin, this.hours - 1);
  }

  @action incrementMinutes() {
    if (this.isDisabled) return;
    this.minutes = Math.min(this.minuteMax, this.minutes + 1);
  }

  @action decrementMinutes() {
    if (this.isDisabled) return;
    this.minutes = Math.max(this.minuteMin, this.minutes - 1);
  }

  @action handleToBeAnnouncedChange(checked) {
    this.isToBeAnnounced = checked;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxInput
        @inputGroup={{true}}
        @label={{t "lbl.start.time"}}
        placeholder={{t "lbl.start.time.placeholder"}}
        @fieldClass="col-4"
        @disabled={{this.isDisabled}}
        @fieldClass="col-4"
        @disabled={{this.isDisabled}}
      >
        <:end>
          <UlxButton
            @variant="basic"
            @size="compact"
            @icon="time-icon"
            @iconComponentClass="bs-icons1"
            @iconSize="s18"
            @customClass="inputgroup-addon icon-addon"
            aria-label={{t "lbl.start.time"}}
            @disabled={{this.isDisabled}}
          />
        </:end>

        <:bottom>
          <UlxCheckbox
            @itemLabel={{t "lbl.to.be.announced"}}
            @checked={{this.isToBeAnnounced}}
            @onCheckedChange={{this.handleToBeAnnouncedChange}}
          />
        </:bottom>
      </UlxInput>

      <div class="field col-8">
        <label>
          <span class="label-text">{{t "lbl.duration"}}</span>
        </label>

        <div class="ulx-grid gap-3">
          <UlxInput
            @inputGroup={{true}}
            @type="number"
            @value={{this.hours}}
            @rules={{this.hourRules}}
            @onChange={{this.updateHours}}
            aria-label={{t "lbl.duration.hours"}}
            @fieldClass="col-3"
            @disabled={{this.isDisabled}}
          >
            <:end>
              <span class="inputgroup-addon text-addon">{{t "lbl.hr"}}</span>
              <span class="inputgroup-addon vertical-stack-addon">
                <UlxButton
                  @variant="basic"
                  @size="compact"
                  @icon="up-arrow-icon"
                  @iconSize="s14"
                  @onClick={{this.incrementHours}}
            @disabled={{or this.isDisabled (eq this.hours this.hourMax)}}
                  aria-label={{t "lbl.increment"}}
                />
                <UlxButton
                  @variant="basic"
                  @size="compact"
                  @icon="down-arrow-icon"
                  @iconSize="s14"
                  @onClick={{this.decrementHours}}
            @disabled={{or this.isDisabled (eq this.hours this.hourMin)}}
                  aria-label={{t "lbl.decrement"}}
                />
              </span>
            </:end>
          </UlxInput>

          <UlxInput
            @inputGroup={{true}}
            @type="number"
            @value={{this.minutes}}
            @rules={{this.minuteRules}}
            @onChange={{this.updateMinutes}}
            aria-label={{t "lbl.duration.minutes"}}
            @fieldClass="col-3"
            @disabled={{this.isDisabled}}
          >
            <:end>
              <span class="inputgroup-addon text-addon">{{t "lbl.min"}}</span>
              <span class="inputgroup-addon vertical-stack-addon">
                <UlxButton
                  @variant="basic"
                  @size="compact"
                  @icon="up-arrow-icon"
                  @iconSize="s14"
                  @onClick={{this.incrementMinutes}}
            @disabled={{or this.isDisabled (eq this.minutes this.minuteMax)}}
                  aria-label={{t "lbl.increment"}}
                />
                <UlxButton
                  @variant="basic"
                  @size="compact"
                  @icon="down-arrow-icon"
                  @iconSize="s14"
                  @onClick={{this.decrementMinutes}}
            @disabled={{or this.isDisabled (eq this.minutes this.minuteMin)}}
                  aria-label={{t "lbl.decrement"}}
                />
              </span>
            </:end>
          </UlxInput>
        </div>
      </div>
    </div>
  </template>
}
`;

