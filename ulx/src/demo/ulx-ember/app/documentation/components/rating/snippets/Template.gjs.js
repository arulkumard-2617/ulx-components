export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxRating } from 'ulx-components';

export default class TemplateRatingDemo extends Component {
  @tracked value = 0;

  @action
  handleChange(val) {
    this.value = val;
  }

  <template>
    <UlxRating @value={{this.value}} @onChange={{this.handleChange}}>
      <:onIcon><span aria-hidden="true">🥵</span></:onIcon>
      <:offIcon><span aria-hidden="true">🥶</span></:offIcon>
      <:cancelIcon><span aria-hidden="true">✕</span></:cancelIcon>
    </UlxRating>
  </template>
}

`;
