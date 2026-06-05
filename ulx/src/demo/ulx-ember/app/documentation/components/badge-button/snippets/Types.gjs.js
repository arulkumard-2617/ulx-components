export default `
import Component from '@glimmer/component';
import { UlxBadgeButton } from 'ulx-components';

const BADGE_TYPES = [
  { label: 'Circle', badge: 2, badgeType: 'circle' },
  { label: 'Square', badge: 12, badgeType: 'square' },
  { label: 'Dot', badgeType: 'dot' },
];

export default class DemoBadgeButtonTypes extends Component {
  get badgeTypes() {
    return BADGE_TYPES;
  }

  <template>
    <div class="flex gap-3 items-center flex-wrap">
      {{#each this.badgeTypes as |item|}}
        <UlxBadgeButton
          @label={{item.label}}
          @badge={{item.badge}}
          @badgeType={{item.badgeType}}
          @badgeSize="xs-size"
          @customClass="gap-1"
        />
      {{/each}}
    </div>
  </template>
}

`;
