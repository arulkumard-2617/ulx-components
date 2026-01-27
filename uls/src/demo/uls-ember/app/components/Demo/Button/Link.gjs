import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import UlsButton from 'uls-components/components/uls-button';

export default class LinkDemoComponent extends Component {
  <template>
    <div class="fxb fvc gp3">
      <UlsButton
        @href="https://www.zoho.com/"
        @label="Link"
        @target="_blank"
        @variant="link"
      />
      <UlsButton
        @href="https://www.zoho.com/"
        @label="Link"
        @target="_blank"
        @variant="primary"
        @loading={{true}}
      />
    </div>
  </template>
}
