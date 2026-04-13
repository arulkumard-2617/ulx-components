export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class StatusLabelsTagDemo extends Component {
  get variants() {
    return [
      // Session status tags
      { label: 'running-color', class: 'running-color' },
      { label: 'completed-color', class: 'completed-color' },

      // Additional status tags
      { label: 'published-color', class: 'published-color' },
      { label: 'draft-color', class: 'draft-color' },
      { label: 'cancelled-color', class: 'cancelled-color' },

      // User check-in labels
      { label: 'user-in-label', class: 'user-in-label' },
      { label: 'user-out-label', class: 'user-out-label' },
      { label: 'user-yet-in', class: 'user-yet-in' },
      { label: 'user-attended', class: 'user-attended' },

      // Event type tags
      { label: 'offline-color', class: 'offline-color' },
      { label: 'hybrid-color', class: 'hybrid-color' },
      { label: 'online-color', class: 'online-color' },

      // Generic/session labels
      { label: 'session-track-label', class: 'session-track-label' },
      { label: 'shortcut-key', class: 'shortcut-key' },
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variants key="class" as |item|}}
        <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
      {{/each}}
    </div>
  </template>
}

`;
