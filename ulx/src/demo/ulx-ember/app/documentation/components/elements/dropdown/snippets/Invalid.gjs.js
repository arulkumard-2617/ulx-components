export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @invalid={{true}}
  @error={{t "msg.dropdown.error.here"}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @label={{t "lbl.dropdown.invalid"}}
  @fieldClass="col-12"
/>

`;
