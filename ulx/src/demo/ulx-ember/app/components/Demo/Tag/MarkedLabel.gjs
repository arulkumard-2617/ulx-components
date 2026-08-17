import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

const paletteVariants = [
  { label: 'Color primary', class: 'color-primary' },
  { label: 'Color green layer2', class: 'color-green-layer2' },
  { label: 'Color gold layer2', class: 'color-gold-layer2' },
  { label: 'Color red layer1', class: 'color-red-layer1' },
  { label: 'Color purple layer1', class: 'color-purple-layer1' },
  { label: 'Color light nebula blue', class: 'color-light-nebula-blue' }
];

const sessionStatuses = [
  { label: 'Running color', name: 'running' },
  { label: 'Completed color', name: 'completed' },
  { label: 'Published color', name: 'published' },
  { label: 'Draft color', name: 'draft' },
  { label: 'Cancelled color', name: 'cancelled' }
];

const otherStatuses = [
  { name: 'user-in', label: 'User in label' },
  { name: 'user-out', label: 'User out label' },
  { name: 'user-yet-in', label: 'User yet in' },
  { name: 'user-attended', label: 'User attended' },
  { name: 'offline', label: 'Offline color' },
  { name: 'hybrid', label: 'Hybrid color' },
  { name: 'online', label: 'Online color' },
  { name: 'session-track', label: 'Session track label' },
  { name: 'shortcut-key', label: 'Shortcut key' }
];

export default class MarkedLabelTagDemo extends Component {
  get variants() {
    return [
      ...paletteVariants.map(({ label, class: className }) => ({
        label,
        class: className,
        customClass: 'marked'
      })),
      ...sessionStatuses.map(({ name, label }) => ({
        label,
        class: `color-${name}`,
        customClass: `marked fg-${name}`
      })),
      ...otherStatuses.map(({ name, label }) => ({
        label,
        class: `color-${name}`,
        customClass: 'marked'
      }))
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variants key="label" as |item|}}
        <UlxTag
          @value={{item.label}}
          @size="xs-size"
          @variant={{item.class}}
          @customClass={{item.customClass}}
        />
      {{/each}}
    </div>
  </template>
}
