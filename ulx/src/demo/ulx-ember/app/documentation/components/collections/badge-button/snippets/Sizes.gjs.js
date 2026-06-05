export default `
import Component from '@glimmer/component';
import { UlxBadgeButton } from 'ulx-components';

const BADGE_SIZES = [
  { label: 'XS', badgeSize: 'xs-size', badge: 1 },
  { label: 'S', badgeSize: 's-size', badge: 2 },
  { label: 'M', badgeSize: 'm-size', badge: 3 },
  { label: 'L', badgeSize: 'l-size', badge: 4 },
  { label: 'XL', badgeSize: 'xl-size', badge: 5 },
];

export default class DemoBadgeButtonSizes extends Component {
  get badgeSizes() {
    return BADGE_SIZES;
  }

  <template>
    <div class="flex gap-3 items-center flex-wrap">
      {{#each this.badgeSizes as |item|}}
        <UlxBadgeButton
          @label={{item.label}}
          @badge={{item.badge}}
          @badgeSize={{item.badgeSize}}
          @customClass="gap-1"
        />
      {{/each}}
    </div>
  </template>
}

`;
