import Component from '@glimmer/component';
import { UlxToggle } from 'ulx-components';

export default class InvalidToggleDemo extends Component {
  <template>
    <UlxToggle @invalid={{true}} />
  </template>
}
