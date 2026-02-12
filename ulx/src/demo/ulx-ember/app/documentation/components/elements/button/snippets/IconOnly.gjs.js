export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

const ICON_ONLY_ROW = [
  { icon: 'ls-tick-icon', type: 'primary', ariaLabel: t('lbl.filter') },
  { icon: 'comment-icon', type: 'secondary', ariaLabel: t('lbl.bookmark') },
  { icon: 'search-icon', type: 'success', ariaLabel: t('lbl.search') },
  { icon: 'close-icon-01', type: 'info', ariaLabel: t('lbl.user') },
  { icon: 'delete-icon', type: 'warning', ariaLabel: t('lbl.notification') },
  { icon: 'ls-tick-icon', type: 'help', ariaLabel: t('lbl.favorite') },
  { icon: 'close-icon-01', type: 'danger', ariaLabel: t('lbl.cancel') },
];

export default class DemoButtonIconOnly extends Component {
  get iconOnlyRow() {
    return ICON_ONLY_ROW;
  }

  <template>
    <div class="fxb column gp6">
      {{! Row 1: Square filled icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 2: Rounded filled icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 3: Rounded outlined icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @outlined={{true}}
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 4: Rounded text raised icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @text={{true}}
            @raised={{true}}
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 5: Rounded text icon-only }}
      <div class="fxb fvc gp6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxButton
            @icon={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @rounded={{true}}
            @text={{true}}
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>
    </div>
  </template>
}

`;
