import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonTemplate extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton
        aria-label="ULX"
        @customClass="bg-primary fg-primary bd-blue pd4"
      >
        <img
          alt=""
          src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg"
          class="h32"
          role="presentation"
        />
      </UlxButton>
    </div>
  </template>
}
