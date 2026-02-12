export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonSizes extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label={{t "lbl.small"}} @size="s-size" />
      <UlxButton @label={{t "lbl.normal"}} />
      <UlxButton @label={{t "lbl.large"}} @size="l-size" />
    </div>
  </template>
}

`;
