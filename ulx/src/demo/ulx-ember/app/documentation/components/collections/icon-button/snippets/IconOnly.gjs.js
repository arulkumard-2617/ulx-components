export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

const ICON_ONLY_ROW = [
  { icon: 'ls-tick-icon', variant: 'primary', ariaLabel: 'Filter' },
  { icon: 'comment-icon', variant: 'secondary', ariaLabel: 'Bookmark' },
  { icon: 'search-icon', variant: 'success', ariaLabel: 'Search' },
  { icon: 'close-icon-01', variant: 'info', ariaLabel: 'User' },
  { icon: 'delete-icon', variant: 'warning', ariaLabel: 'Notification' },
  { icon: 'ls-tick-icon', variant: 'help-button', ariaLabel: 'Favorite' },
  { icon: 'close-icon-01', variant: 'danger', ariaLabel: 'Cancel' },
];

export default class DemoIconButtonIconOnly extends Component {
  get iconOnlyRow() {
    return ICON_ONLY_ROW;
  }

  <template>
    <div class="flex flex-col flex-wrap gap-6">
      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @variant={{item.variant}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @pilled={{true}}
            @variant={{item.variant}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @pilled={{true}}
            @outlined={{true}}
            @variant={{item.variant}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>

      <div class="flex items-center gap-6">
        {{#each this.iconOnlyRow as |item|}}
          <UlxIconButton
            @iconLeft={{item.icon}}
            @pilled={{true}}
            @text={{true}}
            @variant={{item.variant}}
            aria-label={{item.ariaLabel}}
          />
        {{/each}}
      </div>
    </div>
  </template>
}

`;
