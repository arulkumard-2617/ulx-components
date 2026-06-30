import Component from '@glimmer/component';
import { UlxBadgeButton } from 'ulx-components';

const BADGE_VARIANTS = [
  { label: 'Primary', badgeVariant: 'primary', badge: 2 },
  { label: 'Secondary', badgeVariant: 'secondary', badge: 4 },
  { label: 'Success', badgeVariant: 'success', badge: 1 },
  { label: 'Info', badgeVariant: 'info', badge: 8 },
  { label: 'Warning', badgeVariant: 'warning', badge: 3 },
  { label: 'Danger', badgeVariant: 'danger', badge: 9 }
];

export default class DemoBadgeButtonVariants extends Component {
  get badgeVariants() {
    return BADGE_VARIANTS;
  }

  <template>
    <div class="flex gap-3 items-center flex-wrap">
      {{#each this.badgeVariants as |item|}}
        <UlxBadgeButton
          @label={{item.label}}
          @badge={{item.badge}}
          @badgeVariant={{item.badgeVariant}}
          @badgeSize="xxs-size"
          @customClass="gap-1"
        />
      {{/each}}
    </div>
  </template>
}
