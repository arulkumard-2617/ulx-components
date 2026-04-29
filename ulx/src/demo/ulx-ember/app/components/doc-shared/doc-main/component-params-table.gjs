import Component from '@glimmer/component';
import { t } from 'ulx-components';

export default class ComponentParamsTableComponent extends Component {
  get rows() {
    return this.args.rows ?? [];
  }

  getParamDisplayName(name) {
    return `@${name}`;
  }

  get showScopeColumn() {
    return this.rows.some((row) => row.scope && row.scope !== 'component');
  }

  <template>
    {{#if this.rows.length}}
      <div class="doc-section">
        <div class="ulx-datatable s-size">
          <div class="datatable-wrapper">
            <table class="datatable-table" role="grid">
              <thead class="datatable-header">
                <tr class="datatable-header-row">
                  <th class="column-header-cell" scope="col">{{"Name"}}</th>
                  <th class="column-header-cell" scope="col">{{"Type"}}</th>
                  {{#if this.showScopeColumn}}
                    <th class="column-header-cell" scope="col">{{"Scope"}}</th>
                  {{/if}}
                  <th class="column-header-cell" scope="col">{{"Required"}}</th>
                  <th class="column-header-cell" scope="col">{{"Default"}}</th>
                  <th class="column-header-cell" scope="col">{{"Description"}}</th>
                </tr>
              </thead>
              <tbody class="datatable-tbody">
                {{#each this.rows as |row|}}
                  <tr class="datatable-body-row">
                    <td class="column-body-cell">
                      <code>{{this.getParamDisplayName row.name}}</code>
                    </td>
                    <td class="column-body-cell">
                      <code>{{row.type}}</code>
                    </td>
                    {{#if this.showScopeColumn}}
                      <td class="column-body-cell">
                        <span class="fg-text-secondary">{{row.scope}}</span>
                      </td>
                    {{/if}}
                    <td class="column-body-cell">
                      {{if row.required "Yes" "No"}}
                    </td>
                    <td class="column-body-cell">
                      <code>{{if row.hasDefaultValue row.defaultValue "-"}}</code>
                    </td>
                    <td class="column-body-cell">
                      <span>{{if row.description row.description "-"}}</span>
                    </td>
                  </tr>
                {{/each}}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    {{/if}}
  </template>
}
