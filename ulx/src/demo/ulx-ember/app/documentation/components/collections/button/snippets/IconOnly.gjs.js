export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

const ICON_ONLY_ROW = [
  { icon: 'ls-tick-icon', type: 'primary', ariaLabel: 'Filter' },
  { icon: 'comment-icon', type: 'secondary', ariaLabel: 'Bookmark' },
  { icon: 'search-icon', type: 'success', ariaLabel: 'Search' },
  { icon: 'close-icon-01', type: 'info', ariaLabel: 'User' },
  { icon: 'delete-icon', type: 'warning', ariaLabel: 'Notification' },
  { icon: 'ls-tick-icon', type: 'help-button', ariaLabel: 'Favorite' },
  { icon: 'close-icon-01', type: 'danger', ariaLabel: 'Cancel' },
];

export default class DemoButtonIconOnly extends Component {
  get iconOnlyRow() {
    return ICON_ONLY_ROW;
  }

  <template>
    <div class="flex flex-col flex-wrap gap-6">
      {{! Row 1: Square filled icon-only }}
      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 2: Pilled filled icon-only }}
      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @pilled={{true}}
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 3: Pilled outlined icon-only }}
      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @pilled={{true}}
            @outlined={{true}}
            @variant={{item.type}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      {{! Row 4: Pilled text icon-only }}
      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @iconSize="s18"
            @iconComponentClass="bs-icons1"
            @pilled={{true}}
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
