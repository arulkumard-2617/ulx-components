import Component from '@glimmer/component';
import { UlxIcon } from 'ulx-components';
import ComponentApiParams from './component-api-params';

export default class DocApiParamsPanelComponent extends Component {
  <template>
    <details
      class="doc-guidance-panel doc-api-params-panel"
      data-doc="api-params"
    >
      <summary class="doc-guidance-panel__summary pointer">
        <span class="doc-guidance-panel__lead-icon" aria-hidden="true">
          <UlxIcon
            @iconName="bulk-code-icon"
            @type="font"
            @size="s22"
            @customClass="icon-layer primary-layer l-size circle"
            aria-hidden="true"
          />
        </span>
        <span class="doc-guidance-panel__text">
          <span
            class="doc-guidance-panel__title text-14 bold-font fg-text-primary"
          >
            {{"API arguments"}}
          </span>
          <span class="doc-guidance-panel__subtitle text-13 fg-text-secondary">
            {{"Properties, types, default values, and usage."}}
          </span>
        </span>
        <span class="doc-guidance-panel__chevron-wrap" aria-hidden="true">
          <UlxIcon
            @iconName="down-arrow-icon"
            @type="font"
            @componentClass="bs-icons1"
            @size="s18"
            @customClass="doc-guidance-panel__chevron fg-text-secondary"
            aria-hidden="true"
          />
        </span>
      </summary>
      <div class="doc-guidance-panel__body">
        <ComponentApiParams @routeKey={{@routeKey}} />
      </div>
    </details>
  </template>
}
