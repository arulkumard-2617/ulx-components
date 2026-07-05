import Component from '@glimmer/component';
import { UlxCard } from 'ulx-components';

export default class OutlinedCardDemo extends Component {
  get variants() {
    return [
      {
        variant: 'primary',
        title: 'Primary',
        description:
          'Outlined card with a primary border and transparent background.'
      },
      {
        variant: 'secondary',
        title: 'Secondary',
        description:
          'Outlined card with a secondary border and transparent background.'
      },
      {
        variant: 'success',
        title: 'Success',
        description:
          'Outlined card with a success border and transparent background.'
      },
      {
        variant: 'warning',
        title: 'Warning',
        description:
          'Outlined card with a warning border and transparent background.'
      },
      {
        variant: 'danger',
        title: 'Danger',
        description:
          'Outlined card with a danger border and transparent background.'
      },
      {
        variant: 'info',
        title: 'Info',
        description:
          'Outlined card with an info border and transparent background.'
      }
    ];
  }

  <template>
    <div class="ulx-grid col-3 gap-4">
      {{#each this.variants key="variant" as |item|}}
        <UlxCard
          @appearance="outlined"
          @variant={{item.variant}}
          @size="s-size"
        >
          <h6 class="bold-font mb-2">{{item.title}}</h6>
          <p class="text-14">{{item.description}}</p>
        </UlxCard>
      {{/each}}
    </div>
  </template>
}
