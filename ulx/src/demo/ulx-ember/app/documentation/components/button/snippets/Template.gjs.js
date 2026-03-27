export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonTemplate extends Component {
  <template>
    <div class="flex items-center flex-wrap gap-md">
      <UlxButton
        aria-label="ULX"
        @customClass="bg-primary fg-primary border-blue p-4"
      >
        <img
          alt=""
          src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg"
          class="h-32"
          role="presentation"
        />
      </UlxButton>
    </div>
  </template>
}

`;
