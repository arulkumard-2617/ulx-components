export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxInput, UlxButton, t } from 'ulx-components';
import { eq } from 'ember-truth-helpers';

export default class DemoInputGroupVerticalStack extends Component {
  @tracked hours = 0;
  @tracked minutes = 45;

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
    this.hours = Math.min(this.hourMax, this.hours + 1);
  }

  @action decrementHours() {
    this.hours = Math.max(this.hourMin, this.hours - 1);
  }

  @action incrementMinutes() {
    this.minutes = Math.min(this.minuteMax, this.minutes + 1);
  }

  @action decrementMinutes() {
    this.minutes = Math.max(this.minuteMin, this.minutes - 1);
  }

  <template>
    <div class="ulx-form m-size mb-14">
      <div class="field col-12">
        <span class="field-label">{{t "lbl.duration"}}</span>

        <div class="ulx-grid gap-8">
          <UlxInput
            @inputGroup={{true}}
            @type="number"
            @value={{this.hours}}
            @rules={{this.hourRules}}
            @onChange={{this.updateHours}}
            aria-label={{t "lbl.duration.hours"}}
            @fieldClass="col-6"
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
                  @disabled={{eq this.hours this.hourMax}}
                  aria-label={{t "lbl.increment"}}
                />
                <UlxButton
                  @variant="basic"
                  @size="compact"
                  @icon="down-arrow-icon"
                  @iconSize="s14"
                  @onClick={{this.decrementHours}}
                  @disabled={{eq this.hours this.hourMin}}
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
            @fieldClass="col-6"
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
                  @disabled={{eq this.minutes this.minuteMax}}
                  aria-label={{t "lbl.increment"}}
                />
                <UlxButton
                  @variant="basic"
                  @size="compact"
                  @icon="down-arrow-icon"
                  @iconSize="s14"
                  @onClick={{this.decrementMinutes}}
                  @disabled={{eq this.minutes this.minuteMin}}
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
