export default `
import Component from '@glimmer/component';
import { UlxButtonGroup, UlxIconButton } from 'ulx-components';

export default class DemoButtonGroup extends Component {
  <template>
    <div class="flex items-center wrap gap-md">
      <UlxButtonGroup @orientation="horizontal" @size="m-size">
        <UlxIconButton
          @label="Save"
          @iconLeft="ls-tick-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxIconButton
          @label="Delete"
          @iconLeft="delete-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxIconButton
          @label="Cancel"
          @iconLeft="close-icon-01"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
      </UlxButtonGroup>
    </div>
  </template>
}

`;
