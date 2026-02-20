export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.cities}}
  @value={{this.selectedCity}}
  @onChange={{this.setSelectedCity}}
  @filter={{true}}
  @filterPlaceholder={{t "msg.dropdown.search.cities"}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @label={{t "lbl.dropdown.filter"}}
  @fieldClass="col-12"
/>

`;
