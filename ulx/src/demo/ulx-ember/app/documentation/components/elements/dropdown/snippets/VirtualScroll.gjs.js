export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.manyOptions}}
  @value={{this.selectedOption}}
  @onChange={{this.setSelectedOption}}
  @scrollHeight="300px"
  @placeholder={{t "msg.dropdown.select.virtual"}}
  @label={{t "lbl.dropdown.virtual.scroll"}}
  @fieldClass="col-12"
/>

`;
