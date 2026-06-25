export default `
import Component from '@glimmer/component';
import { UlxButtonGroup, UlxBadgeButton, UlxIcon } from 'ulx-components';

export default class DemoBadgeButtonGroup extends Component {
  <template>
    <div class="flex items-center wrap gap-md">
      <UlxButtonGroup @orientation="horizontal" @size="m-size">
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
        <UlxBadgeButton @customClass="icon-only" aria-label="Sort">
          <:prefix>
            <UlxIcon
              @iconName="sort-icon"
              @type="font"
              @componentClass="bs-icons1"
              @size="s18"
              aria-hidden="true"
            />
          </:prefix>
        </UlxBadgeButton>
        <UlxBadgeButton @customClass="icon-only" aria-label="Columns">
          <:prefix>
            <UlxIcon
              @iconName="columns-icon"
              @type="font"
              @componentClass="bs-icons1"
              @size="s18"
              aria-hidden="true"
            />
          </:prefix>
        </UlxBadgeButton>
      </UlxButtonGroup>
    </div>
  </template>
}

`;
