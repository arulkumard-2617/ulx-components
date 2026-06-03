export default `
import Component from '@glimmer/component';
import { UlxButtonGroup, UlxButton } from 'ulx-components';

export default class DemoButtonGroup extends Component {
  <template>
    <div class="flex items-center wrap gap-md">
      <UlxButtonGroup @orientation="horizontal" @size="m-size">
        <UlxButton @label="Save" @variant="primary" />
        <UlxButton @label="Cancel" @variant="secondary" />
        <UlxButton @label="Delete" @variant="danger" />
      </UlxButtonGroup>
    </div>
  </template>
}

`;
