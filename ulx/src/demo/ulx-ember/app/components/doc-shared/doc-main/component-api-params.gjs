import Component from '@glimmer/component';
import ComponentParamsTable from './component-params-table';
import componentApiRegistry from '../../../documentation/generated/component-api';

export default class ComponentApiParamsComponent extends Component {
  get apiEntry() {
    const routeKey = this.args.routeKey;
    return routeKey ? componentApiRegistry[routeKey] : null;
  }

  get rows() {
    return this.apiEntry?.params ?? [];
  }

  <template>
    {{#if this.rows.length}}
      <div class="doc-api-params__content" data-usages-section="api-params">
        <ComponentParamsTable @rows={{this.rows}} />
      </div>
    {{/if}}
  </template>
}
