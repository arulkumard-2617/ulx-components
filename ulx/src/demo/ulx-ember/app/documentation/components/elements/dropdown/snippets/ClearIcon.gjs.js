export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @showClear={{true}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @label={{t "lbl.dropdown.clear.icon"}}
  @fieldClass="col-12"
/>

`;
