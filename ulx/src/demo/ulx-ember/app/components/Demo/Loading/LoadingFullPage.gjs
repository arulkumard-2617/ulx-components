import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxButton, UlxLoading } from 'ulx-components';

export default class DemoLoadingFullPage extends Component {
  @tracked isLoading = false;

  @action
  showLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  <template>
    <UlxButton @label="Show full-page loading" @onClick={{this.showLoading}} />
    {{#if this.isLoading}}
      <UlxLoading @isLabel={{true}} />
    {{/if}}
  </template>
}
