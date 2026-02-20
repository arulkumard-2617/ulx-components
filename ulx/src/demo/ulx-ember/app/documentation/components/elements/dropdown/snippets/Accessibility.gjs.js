export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  id="a11y-dropdown"
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @label={{t "lbl.dropdown.accessible"}}
  @fieldClass="col-12"
  aria-label={{t "msg.dropdown.choose.city"}}
/>

`;
