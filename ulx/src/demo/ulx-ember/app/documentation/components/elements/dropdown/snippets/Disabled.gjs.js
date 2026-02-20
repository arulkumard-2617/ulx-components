export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @disabled={{true}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @label={{t "lbl.dropdown.disabled"}}
  @fieldClass="col-12"
/>

`;
