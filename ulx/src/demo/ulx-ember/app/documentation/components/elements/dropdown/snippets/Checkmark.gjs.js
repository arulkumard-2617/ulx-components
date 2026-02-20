export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @checkmark={{true}}
  @label={{t "lbl.dropdown.checkmark"}}
  @fieldClass="col-12"
/>

`;
