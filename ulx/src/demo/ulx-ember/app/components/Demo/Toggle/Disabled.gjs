import Component from '@glimmer/component';
import { UlxToggle } from 'ulx-components';

export default class DisabledToggleDemo extends Component {
  <template>
    <UlxToggle @disabled={{true}} />
  </template>
}
