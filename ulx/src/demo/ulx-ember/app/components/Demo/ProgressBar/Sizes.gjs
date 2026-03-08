import Component from '@glimmer/component';
import { UlxProgressBar } from 'ulx-components';

export default class SizesProgressBarDemo extends Component {
  sizes = [
    'default',
    'h-14',
    'h-20',
    'xxxs-size',
    'xs-size',
    's-size',
    'm-size',
    'l-size',
    'xl-size',
  ];

  <template>
    <div class="flex flex-col gap-6">
      {{#each this.sizes as |size|}}
        <div class="flex flex-col gap-2">
          <span class="fg-text-secondary">{{size}}</span>
          <UlxProgressBar @value={{50}} @size={{size}} @showValue={{false}} />
        </div>
      {{/each}}
    </div>
  </template>
}
