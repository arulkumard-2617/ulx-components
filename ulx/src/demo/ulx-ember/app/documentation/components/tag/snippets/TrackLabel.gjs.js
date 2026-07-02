export default `
import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

const TRACK_COLORS = [
  '#93A4FF',
  '#8594E4',
  '#8777F7',
  '#9966FF',
  '#7c73e6',
  '#8754E1',
  '#7371CD',
  '#fc85ae',
  '#e972d1',
  '#C976F4',
  '#BD60ED',
  '#B249E8',
  '#ED0BA0',
  '#38CBB9',
  '#02BECA',
  '#00b894',
  '#13958D',
  '#39A477',
  '#7dc383',
  '#108ddc',
  '#4a74e1',
  '#5D4FE8',
  '#5785FF',
  '#5D9DE8',
  '#46A0D2',
  '#F4892F',
  '#FF7346',
  '#ff7675',
  '#fc5e5e',
  '#ff4860',
  '#FF3131',
  '#BE793F',
  '#ffc900',
  '#f5ab1c',
  '#e0c45c',
  '#DDAD03',
  '#9E946F',
  '#AC8C18',
  '#C24D33',
  '#A0AFB7',
  '#87B0C3',
  '#7D9CAB',
  '#69779b',
  '#4b81ab',
  '#516C8D',
  '#396193',
  '#fa6b92',
  '#19ca78',
  '#40A0E8'
];

export default class TrackLabelTagDemo extends Component {
  get examples() {
    return [
      {
        label: 'Default',
        variant: 'lt-track-label',
        type: 'pill'
      },
      ...TRACK_COLORS.map((color, index) => ({
        label: \`Track \${index + 1}\`,
        variant: 'lt-track-label',
        type: 'pill',
        style: \`--track-bg-color:\${color};--lt-track-bg-color:\${color}30\`
      }))
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
