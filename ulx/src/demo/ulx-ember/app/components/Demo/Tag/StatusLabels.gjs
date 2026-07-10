import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

const sessionStatuses = [
  { name: 'running', label: 'running-color' },
  { name: 'completed', label: 'completed-color' },
  { name: 'published', label: 'published-color' },
  { name: 'draft', label: 'draft-color' },
  { name: 'cancelled', label: 'cancelled-color' },
];

const otherStatuses = [
  { name: 'user-in', label: 'user-in-label' },
  { name: 'user-out', label: 'user-out-label' },
  { name: 'user-yet-in', label: 'user-yet-in' },
  { name: 'user-attended', label: 'user-attended' },
  { name: 'offline', label: 'offline-color' },
  { name: 'hybrid', label: 'hybrid-color' },
  { name: 'online', label: 'online-color' },
  { name: 'session-track', label: 'session-track-label' },
  { name: 'shortcut-key', label: 'shortcut-key' },
];

export default class StatusLabelsTagDemo extends Component {
  get variants() {
    return [
      ...sessionStatuses.map(({ name, label }) => ({
        label,
        class: `color-${name}`,
        customClass: `fg-color-${name}`,
      })),
      ...otherStatuses.map(({ name, label }) => ({
        label,
        class: `color-${name}`,
        customClass: null,
      })),
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variants key="label" as |item|}}
        <UlxTag
          @value={{item.label}}
          @size="s-size"
          @variant={{item.class}}
          @customClass={{item.customClass}}
        />
      {{/each}}
    </div>
  </template>
}
