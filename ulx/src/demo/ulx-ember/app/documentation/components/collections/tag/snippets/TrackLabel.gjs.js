export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class TrackLabelTagDemo extends Component {
  get examples() {
    return [
      {
        label: 'Default',
        variant: 'lt-track-label',
        type: 'pill'
      },
      {
        label: 'Open',
        variant: 'lt-track-label',
        type: 'pill',
        style:
          '--lt-track-bg-color: color-mix(in srgb, #16A34A 20%, white); --track-bg-color: #16A34A'
      },
      {
        label: 'Design',
        variant: 'lt-track-label',
        type: 'pill',
        style:
          '--lt-track-bg-color: color-mix(in srgb, #3B82F6 20%, white); --track-bg-color: #3B82F6'
      },
      {
        label: 'Engineering',
        variant: 'lt-track-label',
        type: 'pill',
        style:
          '--lt-track-bg-color: color-mix(in srgb, #8B5CF6 20%, white); --track-bg-color: #8B5CF6'
      },
      {
        label: 'Inactive',
        variant: 'lt-track-label',
        type: 'pill',
        style:
          '--lt-track-bg-color: color-mix(in srgb, #2f3c49 20%, white); --track-bg-color: #2f3c49'
      }
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.examples key="label" as |item|}}
        <UlxTag
          @value={{item.label}}
          @size="xs-size"
          @variant={{item.variant}}
          @type={{item.type}}
          style={{if item.style item.style}}
        />
      {{/each}}
    </div>
  </template>
}

`;
