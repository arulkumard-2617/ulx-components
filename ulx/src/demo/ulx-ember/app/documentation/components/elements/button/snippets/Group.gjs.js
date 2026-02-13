export default `
import Component from '@glimmer/component';
import { UlxButton, UlxButtonGroup, t } from 'ulx-components';

export default class DemoButtonGroup extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButtonGroup @orientation="horizontal" @size="m-size">
        <UlxButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxButton
          @label={{t "lbl.delete"}}
          @icon="delete-icon"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
        <UlxButton
          @label={{t "lbl.cancel"}}
          @icon="close-icon-01"
          @iconSize="s18"
          @iconComponentClass="bs-icons1"
        />
      </UlxButtonGroup>
    </div>
  </template>
}

`;
