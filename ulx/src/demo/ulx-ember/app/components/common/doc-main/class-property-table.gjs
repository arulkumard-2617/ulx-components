import Component from '@glimmer/component';

export default class ClassPropertyTableComponent extends Component {
  formatClassName = (value) => {
    if (typeof value !== 'string') {
      return value;
    }
    return value.replace(/(^|\s)\./g, '$1');
  };

  get rows() {
    return this.args.rows || [];
  }

  get columnLabels() {
    return this.args.columnLabels || ['Class', 'Properties'];
  }

  getStyleString = (color) => {
    return `background-color: ${color}; border-color: var(--ulx-default-border-color, #dee2e6);`;
  };

  <template>
    {{#if this.rows.length}}
      <div class="ulx-datatable s-size" style="width: 850px;">
        <div class="datatable-wrapper">
          <table class="datatable-table" style="table-layout: fixed;">
            <thead class="datatable-header">
              <tr class="datatable-header-row">
                <th
                  class="datatable-column-header-cell"
                >{{this.columnLabels.[0]}}</th>
                <th
                  class="datatable-column-header-cell"
                >{{this.columnLabels.[1]}}</th>
              </tr>
            </thead>
            <tbody class="datatable-tbody">
              {{#each this.rows as |row|}}
                <tr class="datatable-body-row">
                  <td class="datatable-column-body-cell">
                    <div class="fxb fvc gp2">
                      {{#if row.color}}
                        <div
                          class="rds-circle bd w20 h20"
                          style={{this.getStyleString row.color}}
                          aria-hidden="true"
                        ></div>
                      {{/if}}
                      <span
                        class="bold-font fg-primary font-size16"
                      >{{this.formatClassName row.className}}</span>
                    </div>
                  </td>
                  <td class="datatable-column-body-cell">
                    <span class="font-size16">{{row.property}}</span>
                  </td>
                </tr>
              {{/each}}
            </tbody>
          </table>
        </div>
      </div>
    {{/if}}
  </template>
}
