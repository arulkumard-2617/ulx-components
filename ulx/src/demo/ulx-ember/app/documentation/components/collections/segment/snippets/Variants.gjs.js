export default `
import Component from '@glimmer/component';
import { UlxSegment, t } from 'ulx-components';

export default class VariantsDemoComponent extends Component {
  get coloredVariants() {
    return [
      { variant: 'red', label: t('lbl.red') },
      { variant: 'orange', label: t('lbl.orange') },
      { variant: 'yellow', label: t('lbl.yellow') },
      { variant: 'green', label: t('lbl.green') },
      { variant: 'blue', label: t('lbl.blue') },
      { variant: 'purple', label: t('lbl.purple') },
      { variant: 'pink', label: t('lbl.pink') },
      { variant: 'brown', label: t('lbl.brown') },
      { variant: 'grey', label: t('lbl.grey') },
      { variant: 'black', label: t('lbl.black') },
    ];
  }

  get invertedVariants() {
    return [
      { variant: 'red-invert', label: t('lbl.red') },
      { variant: 'orange-invert', label: t('lbl.orange') },
      { variant: 'yellow-invert', label: t('lbl.yellow') },
      { variant: 'green-invert', label: t('lbl.green') },
      { variant: 'blue-invert', label: t('lbl.blue') },
      { variant: 'purple-invert', label: t('lbl.purple') },
      { variant: 'pink-invert', label: t('lbl.pink') },
      { variant: 'brown-invert', label: t('lbl.brown') },
      { variant: 'grey-invert', label: t('lbl.grey') },
      { variant: 'black-invert', label: t('lbl.black') },
    ];
  }

  <template>
    <div class="variants-demo">
      <h3 class="mgb4">{{t "msg.colored.segments.light"}}</h3>
      <div class="fxb fcol gp5 mgb12">
        {{#each this.coloredVariants as |item|}}
          <UlxSegment @variant={{item.variant}}>
            <p>{{item.label}} segment with light background and black text</p>
          </UlxSegment>
        {{/each}}
      </div>

      <h3 class="mgb4">{{t "msg.inverted.colored.segments"}}</h3>
      <div class="fxb fcol gp5">
        {{#each this.invertedVariants as |item|}}
          <UlxSegment @variant={{item.variant}}>
            <p>{{item.label}}
              inverted segment with dark background and white text</p>
          </UlxSegment>
        {{/each}}
      </div>
    </div>
  </template>
}

`;
