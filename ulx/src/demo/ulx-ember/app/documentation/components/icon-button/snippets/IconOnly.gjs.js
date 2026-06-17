export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

const ICON_ONLY_ROW = [
  { icon: 'ls-tick-icon', variant: 'primary', ariaLabel: 'Filter' },
  { icon: 'comment-icon', variant: 'secondary', ariaLabel: 'Bookmark' },
  { icon: 'search-icon', variant: 'success', ariaLabel: 'Search' },
  { icon: 'close-icon-01', variant: 'basic', ariaLabel: 'User' },
  { icon: 'delete-icon', variant: 'danger', ariaLabel: 'Cancel' }
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

      <div class="bg-primary p-4 rounded flex flex-col gap-4 w-400">
        <span class="text-13 fg-white">White on primary — hover inverts to white
          fill, dark icon</span>
        <div class="flex gap-3 align-items-center flex-wrap">
          <UlxIconButton
            @iconLeft="hamburger-icon"
            @outlined={{true}}
            @variant="white"
            aria-label="Menu"
          />
          <UlxIconButton
            @iconLeft="hamburger-icon"
            @variant="white on-hover"
            aria-label="Menu"
            @pilled={{true}}
          />
        </div>
      </div>
    </div>
  </template>
}

`;
