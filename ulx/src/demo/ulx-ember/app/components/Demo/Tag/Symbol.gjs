import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class SymbolDemoComponent extends Component {
  get examples() {
    return [
      // Symbol labels (tag.less §5C)
      {
        label: 'with-dot',
        variant: 'primary',
        type: undefined,
        customClass: 'with-dot',
      },
      {
        label: 'with-star',
        variant: 'secondary',
        type: undefined,
        customClass: 'with-star',
      },
      {
        label: 'with-symbol ●',
        variant: 'info',
        type: undefined,
        customClass: 'with-symbol',
        symbol: '●',
      },
      {
        label: 'with-symbol ★',
        variant: 'warning',
        type: undefined,
        customClass: 'with-symbol',
        symbol: '★',
      },
      {
        label: 'running label',
        variant: 'running-color',
        type: undefined,
        customClass: 'running-lbl',
      },

      // Icon positions (UlxTag @iconPosition)
      {
        label: 'icon left (default)',
        variant: 'success',
        type: undefined,
        icon: 'ls-tick-icon',
        iconPosition: 'left',
      },
      {
        label: 'icon right',
        variant: 'danger',
        type: 'outline',
        icon: 'close-icon-01',
        iconPosition: 'right',
      },

      // Icon labels (UlxTag @icon / @iconType)
      {
        label: 'tick icon',
        variant: 'success',
        type: undefined,
        icon: 'ls-tick-icon',
      },
      {
        label: 'close icon + outline',
        variant: 'danger',
        type: 'outline',
        icon: 'close-icon-01',
      },
      {
        label: 'comment icon',
        variant: 'info',
        type: undefined,
        icon: 'comment-icon',
      },
      {
        label: 'settings icon + pill',
        variant: 'secondary',
        type: 'pill',
        icon: 'session-settings-icon',
      },
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.examples key="label" as |item|}}
        <UlxTag
          @value={{item.label}}
          @size="s-size"
          @variant={{item.variant}}
          @type={{item.type}}
          @customClass={{item.customClass}}
          @icon={{item.icon}}
          @iconPosition={{item.iconPosition}}
          @iconType="font"
          @iconClass="bs-icons1"
          @iconSize="s14"
          data-symbol={{item.symbol}}
        />
      {{/each}}
    </div>
  </template>
}
