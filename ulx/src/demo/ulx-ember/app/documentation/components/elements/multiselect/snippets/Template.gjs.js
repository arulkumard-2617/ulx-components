export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.dropdown.template"}}
  @fieldClass="col-4"
>
  <:value as |ctx|>
    {{#if ctx.selectedOptions.length}}
      <span>{{ctx.selectedLabels}}</span>
    {{else}}
      <span>{{ctx.placeholder}}</span>
    {{/if}}
  </:value>
  <:item as |ctx|>
    <span>{{ctx.label}}</span>
  </:item>
</UlxMultiSelect>

`;
