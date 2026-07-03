export default `
import Component from '@glimmer/component';
import { UlxIcon } from 'ulx-components';

export default class DemoIconLayer extends Component {
  get layerGroups() {
    return [
      {
        label: 'Primary',
        borderClass: 'border-primary',
        items: [
          { label: 'primary-layer1', class: 'primary-layer1' },
          { label: 'primary-layer', class: 'primary-layer' },
          { label: 'primary-layer2', class: 'primary-layer2' }
        ]
      },
      {
        label: 'Success',
        borderClass: 'border-green',
        items: [
          { label: 'success-layer', class: 'success-layer' },
          { label: 'success-layer2', class: 'success-layer2' },
          { label: 'success-layer3', class: 'success-layer3' }
        ]
      },
      {
        label: 'Warning',
        borderClass: 'border-orange',
        items: [
          { label: 'warning-layer', class: 'warning-layer' },
          { label: 'warning-layer2', class: 'warning-layer2' },
          { label: 'warning-layer3', class: 'warning-layer3' }
        ]
      },
      {
        label: 'Danger',
        borderClass: 'border-red',
        items: [
          { label: 'danger-layer', class: 'danger-layer' },
          { label: 'danger-layer2', class: 'danger-layer2' },
          { label: 'danger-layer3', class: 'danger-layer3' }
        ]
      },
      {
        label: 'Info',
        borderClass: 'border-info',
        items: [
          { label: 'info-layer', class: 'info-layer' },
          { label: 'info-layer2', class: 'info-layer2' },
          { label: 'info-layer3', class: 'info-layer3' }
        ]
      },
      {
        label: 'Blue',
        borderClass: 'border-blue',
        items: [
          { label: 'blue-layer1', class: 'blue-layer1' },
          { label: 'blue-layer2', class: 'blue-layer2' },
          { label: 'blue-layer3', class: 'blue-layer3' }
        ]
      },
      {
        label: 'Purple',
        borderClass: 'border-purple',
        items: [
          { label: 'purple-layer', class: 'purple-layer' },
          { label: 'purple-layer2', class: 'purple-layer2' },
          { label: 'purple-layer3', class: 'purple-layer3' },
          { label: 'purple-layer4', class: 'purple-layer4' }
        ]
      },
      {
        label: 'Gold',
        borderClass: 'border-gold',
        items: [
          { label: 'gold-layer', class: 'gold-layer' },
          { label: 'gold-layer2', class: 'gold-layer2' },
          { label: 'gold-layer3', class: 'gold-layer3' }
        ]
      },
      {
        label: 'Black',
        borderClass: 'border-black',
        items: [
          { label: 'black-layer', class: 'black-layer' },
          { label: 'black-layer2', class: 'black-layer2' },
          { label: 'black-layer3', class: 'black-layer3' },
          { label: 'black-layer4', class: 'black-layer4' }
        ]
      },
      {
        label: 'Other',
        borderClass: 'border-default',
        items: [
          { label: 'magenta-layer2', class: 'magenta-layer2' },
          { label: 'brown-layer2', class: 'brown-layer2' },
          { label: 'teal-layer3', class: 'teal-layer3' }
        ]
      }
    ];
  }

  layerClass(layerVariant) {
    return \`icon-layer l-size \${layerVariant} circle\`;
  }

  headerClass(borderClass) {
    return \`border-s ps-1 border-3 \${borderClass}\`;
  }

  <template>
    <div class="ulx-grid col-3 col-sm-1 w-full">
      {{#each this.layerGroups key="label" as |group|}}
        <section class="flex flex-col gap-4 px-4 py-6 min-w-0">
          <div
            class="flex items-center text-13 semibold-font fg-secondary
              {{this.headerClass group.borderClass}}"
          >
            {{group.label}}
          </div>
          <div class="flex flex-wrap gap-x-6 gap-y-4">
            {{#each group.items key="class" as |item|}}
              <div class="flex flex-col items-center gap-2">
                <UlxIcon
                  @componentClass="bs-icons1"
                  @type="font"
                  @iconName="ls-tick-icon"
                  @ariaLabel=""
                  @customClass={{this.layerClass item.class}}
                />
                <span
                  class="text-xs fg-tertiary text-center"
                >{{item.label}}</span>
              </div>
            {{/each}}
          </div>
        </section>
      {{/each}}
    </div>
  </template>
}

`;
