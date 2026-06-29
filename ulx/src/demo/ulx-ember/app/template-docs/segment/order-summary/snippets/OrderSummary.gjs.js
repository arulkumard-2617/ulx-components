export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxButton } from 'ulx-components';

export default class OrderSummaryTemplate extends Component {
  @tracked isExpanded = false;

  rowOne = [
    {
      key: 'net',
      label: 'Net Amount',
      value: '$1,72,412.00',
      caption: '98 paid orders',
      icon: 'total-sales-icon',
      iconBg: 'bg-greenLayer1',
      iconCircleBg: 'bg-greenLayer2',
      iconFg: 'fg-green',
      amountFg: 'fg-green',
      borderColor: 'border-green-soft'
    },
    {
      key: 'deposit',
      label: 'Deposit Amount',
      value: '$4,412.00',
      caption: '6 deposit orders',
      icon: 'wallet-credits-icon',
      iconBg: 'bg-purpleLayer1',
      iconCircleBg: 'bg-purpleLayer2',
      iconFg: 'fg-purple',
      amountFg: 'fg-purple',
      borderColor: 'border-purple-soft'
    }
  ];

  rowTwo = [
    {
      key: 'outstanding',
      label: 'Outstanding',
      value: '$90,121.00',
      caption: '18 pending orders',
      icon: 'pending-icon',
      iconBg: 'bg-goldLayer1',
      iconCircleBg: 'bg-goldLayer2',
      iconFg: 'fg-gold',
      amountFg: 'fg-gold',
      borderColor: 'border-orange-soft'
    },
    {
      key: 'refunded',
      label: 'Refunded',
      value: '$8,382.00',
      caption: '8 refunded orders',
      icon: 'undo-icon',
      iconBg: 'bg-redLayer1',
      iconCircleBg: 'bg-redLayer2',
      iconFg: 'fg-red',
      amountFg: 'fg-red',
      borderColor: 'border-red-soft'
    }
  ];

  rowThree = [
    {
      key: 'total',
      label: 'Order Total',
      value: '$2,62,231.00',
      caption: '124 total orders',
      icon: 'order-summary-icon',
      iconBg: 'bg-blueLayer1',
      iconCircleBg: 'bg-blueLayer2',
      iconFg: 'fg-blue',
      amountFg: '',
      borderColor: 'border-blue-soft'
    }
  ];

  get hiddenCount() {
    return this.rowTwo.length + this.rowThree.length;
  }

  get toggleLabel() {
    return this.isExpanded ? 'Show less' : \`Show all (\${this.hiddenCount} more)\`;
  }

  get toggleIcon() {
    return this.isExpanded
      ? 'bs-icons1 up-arrow-icon'
      : 'bs-icons1 down-arrow-icon';
  }

  @action
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  <template>
    <div class="flex flex-col gap-4">
      <div class="flex items-stretch gap-4">
        {{#each this.rowOne key="key" as |card|}}
          <div
            class="flex flex1 items-start gap-3 p-4 rounded
              border min-w-0 {{card.borderColor}} {{card.iconBg}}"
          >
            <div
              class="flex items-center justify-center
                rounded-full w-44 h-44 shrink-0 {{card.iconCircleBg}}"
            >
              <i class="bs-icons1 s24 {{card.icon}} {{card.iconFg}}"></i>
            </div>
            <div class="flex flex-col gap-1 grow min-w-0">
              <div class="flex items-center gap-1 text-13 text-secondary">
                <span>{{card.label}}</span>
                <i class="bs-icons1 s14 info-icon"></i>
              </div>
              <div class="text-h4 bold-font {{card.amountFg}}">{{card.value}}</div>
              <div class="text-13 text-secondary">{{card.caption}}</div>
            </div>
          </div>
        {{/each}}
      </div>

      {{#if this.isExpanded}}
        <div class="flex items-stretch gap-4">
          {{#each this.rowTwo key="key" as |card|}}
            <div
              class="flex flex1 items-start gap-3 p-4 rounded
                border min-w-0 {{card.borderColor}} {{card.iconBg}}"
            >
              <div
                class="flex items-center justify-center
                  rounded-full w-44 h-44 shrink-0 {{card.iconCircleBg}}"
              >
                <i class="bs-icons1 s24 {{card.icon}} {{card.iconFg}}"></i>
              </div>
              <div class="flex flex-col gap-1 grow min-w-0">
                <div class="flex items-center gap-1 text-13 text-secondary">
                  <span>{{card.label}}</span>
                  <i class="bs-icons1 s14 info-icon"></i>
                </div>
                <div class="text-h4 bold-font {{card.amountFg}}">{{card.value}}</div>
                <div class="text-13 text-secondary">{{card.caption}}</div>
              </div>
            </div>
          {{/each}}
        </div>

        <div class="flex items-stretch gap-4">
          {{#each this.rowThree key="key" as |card|}}
            <div
              class="flex flex1 items-start gap-3 p-4 rounded
                border min-w-0 {{card.borderColor}} {{card.iconBg}}"
            >
              <div
                class="flex items-center justify-center
                  rounded-full w-44 h-44 shrink-0 {{card.iconCircleBg}}"
              >
                <i class="bs-icons1 s24 {{card.icon}} {{card.iconFg}}"></i>
              </div>
              <div class="flex flex-col gap-1 grow min-w-0">
                <div class="flex items-center gap-1 text-13 text-secondary">
                  <span>{{card.label}}</span>
                  <i class="bs-icons1 s14 info-icon"></i>
                </div>
                <div class="text-h4 bold-font {{card.amountFg}}">{{card.value}}</div>
                <div class="text-13 text-secondary">{{card.caption}}</div>
              </div>
            </div>
          {{/each}}
          <div class="flex1"></div>
        </div>
      {{/if}}

      <div>
        <UlxButton
          @label={{this.toggleLabel}}
          @variant="link"
          @size="m-size"
          @iconLeft={{this.toggleIcon}}
          @onClick={{this.toggleExpand}}
        />
      </div>
    </div>
  </template>
}

`;
