export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @editable={{true}}
  @placeholder={{t "msg.dropdown.select.or.type"}}
  @label={{t "lbl.dropdown.editable"}}
  @fieldClass="col-12"
/>

`;
