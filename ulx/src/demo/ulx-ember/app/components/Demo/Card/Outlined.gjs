import Component from '@glimmer/component';
import { UlxCard } from 'ulx-components';

export default class OutlinedCardDemo extends Component {
  get variants() {
    return [
      {
        variant: 'primary',
        title: 'Primary',
        description:
          'Outlined card with a primary border and transparent background.',
      },
      {
        variant: 'secondary',
        title: 'Secondary',
        description:
          'Outlined card with a secondary border and transparent background.',
      },
      {
        variant: 'success',
        title: 'Success',
        description:
          'Outlined card with a success border and transparent background.',
      },
      {
        variant: 'warning',
        title: 'Warning',
        description:
          'Outlined card with a warning border and transparent background.',
      },
      {
        variant: 'danger',
        title: 'Danger',
        description:
          'Outlined card with a danger border and transparent background.',
      },
      {
        variant: 'info',
        title: 'Info',
        description:
          'Outlined card with an info border and transparent background.',
      },
      {
        variant: 'contrast',
        title: 'Contrast',
        description:
          'Outlined contrast card with a filled background and light text.',
      },
    ];
  }

  <template>
    <div class="flex flex-col gap-4 pda4">
      {{#each this.variants key="variant" as |item|}}
        <UlxCard
          @title={{item.title}}
          @appearance="outlined"
          @variant={{item.variant}}
          @size="s-size"
        >
          <p class="text-14">{{item.description}}</p>
        </UlxCard>
      {{/each}}
    </div>
  </template>
}
