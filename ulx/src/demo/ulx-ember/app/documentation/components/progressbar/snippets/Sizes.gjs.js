export default `
import Component from '@glimmer/component';
import { UlxProgressBar } from 'ulx-components';

export default class SizesProgressBarDemo extends Component {
  sizes = [
    'xxxs-size',
    'xs-size',
    's-size',
    'm-size',
    'l-size',
    'xl-size',
    'h-14',
    'h-20',
  ];

  <template>
    <div class="flex flex-col gap-6">
      {{#each this.sizes as |size|}}
        <div class="flex flex-col gap-2">
          <span class="fg-text-secondary">{{size}}</span>
          <UlxProgressBar @value={{50}} @size={{size}} />
        </div>
      {{/each}}
    </div>
  </template>
}
`;
