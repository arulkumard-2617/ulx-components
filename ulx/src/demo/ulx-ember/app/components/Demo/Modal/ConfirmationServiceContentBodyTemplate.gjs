import Component from '@glimmer/component';

export default class ConfirmationServiceContentBodyTemplate extends Component {
  <template>
    <div>
      <p class="mb-0">{{@templateArgs.detail}}</p>
    </div>
  </template>
}

