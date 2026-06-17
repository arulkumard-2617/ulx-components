export default `
import Component from '@glimmer/component';
import { UlxBadgeButton, UlxIcon } from 'ulx-components';

export default class DemoBadgeButtonTemplate extends Component {
  <template>
    <div class="flex gap-3 items-center flex-wrap">
      <UlxBadgeButton
        @badge={{2}}
        @badgeType="circle"
        @badgeSize="xxs-size"
        @customClass="highlighted icon-only"
        aria-label="Filter"
      >
        <:prefix>
          <UlxIcon
            @iconName="filter-icon"
            @type="font"
            @componentClass="bs-icons1"
            @size="s18"
            aria-hidden="true"
          />
        </:prefix>
      </UlxBadgeButton>
      <UlxBadgeButton
        @badge={{4}}
        @badgeVariant="danger"
        @badgeSize="xxs-size"
        @customClass="icon-only"
        aria-label="Notifications"
      >
        <:prefix>
          <UlxIcon
            @iconName="comment-icon"
            @type="font"
            @componentClass="bs-icons1"
            @size="s18"
            aria-hidden="true"
          />
        </:prefix>
      </UlxBadgeButton>
    </div>
  </template>
}

`;
