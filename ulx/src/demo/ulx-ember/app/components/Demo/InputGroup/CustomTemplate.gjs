import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxInput,
  UlxField,
  UlxInputGroup,
  UlxIconButton,
  t
} from 'ulx-components';

export default class CustomTemplate extends Component {
  afflLink = 'https://example.com/ref/abcdefghijklmno';

  @tracked affiliateCode = '';

  @action
  updateValue(event) {
    this.affiliateCode = event.target.value;
  }
  <template>
    <div class="ulx-form m-size">

      <UlxField @label="Affliated">
        <UlxInputGroup
          @size="l-size"
          @startAddonClass="text-addon filled bg-layer3"
        >
          <:start>
            <div class="line-clamp-1 w-220">{{this.afflLink}}</div>
          </:start>
          <:input>
            <UlxInput
              @value={{this.affiliateCode}}
              @onInput={{this.updateValue}}
              class="affiliateUrlInPane"
            />
          </:input>
        </UlxInputGroup>
      </UlxField>

    </div>
  </template>
}
