import Component from '@glimmer/component';
import { UlxIcon } from 'ulx-components';
import ComponentUsages from './component-usages';

export default class DocGuidancePanelComponent extends Component {
  get subtitle() {
    return (
      this.args.subtitle ??
      'Best practices, when to use, and accessibility considerations.'
    );
  }

  <template>
    <details class="doc-guidance-panel" data-doc="guidance">
      <summary class="doc-guidance-panel__summary pointer">
        <span class="doc-guidance-panel__lead-icon" aria-hidden="true">
          <UlxIcon
            @iconName="read-icon"
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
            {{"Usage guidance"}}
          </span>
          <span class="doc-guidance-panel__subtitle text-13 fg-text-secondary">
            {{this.subtitle}}
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
        <ComponentUsages @content={{@usages}} @routeKey={{@routeKey}} />
      </div>
    </details>
  </template>
}
