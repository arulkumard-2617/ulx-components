export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @label={{t "lbl.dropdown.template"}}
  @fieldClass="col-12"
>
  <:value as |ctx|>
    {{#if ctx.selectedOption}}
      {{ctx.selectedLabel}}
    {{else}}
      {{ctx.selectedLabel}}
    {{/if}}
  </:value>
  <:item as |ctx|>
    <span class="dw-text">{{ctx.label}}</span>
  </:item>
</UlxDropdown>

`;
