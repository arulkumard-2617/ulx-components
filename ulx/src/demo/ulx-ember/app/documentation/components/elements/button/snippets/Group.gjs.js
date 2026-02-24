export default `
import Component from '@glimmer/component';
import { UlxButton, UlxButtonGroup } from 'ulx-components';

export default class DemoButtonGroup extends Component {
  <template>
    <div class="flex items-center wrap gap-md">
      <UlxButtonGroup @orientation="horizontal" @size="m-size">
        <UlxButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxButton
          @label="Delete"
          @icon="delete-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxButton
          @label="Cancel"
          @icon="close-icon-01"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
      </UlxButtonGroup>
    </div>
  </template>
}

`;
