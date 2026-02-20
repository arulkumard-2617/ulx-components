export default `
import { UlxDropdown, t } from 'ulx-components';

<UlxDropdown
  @options={{this.groupedCities}}
  @optionGroupLabel="label"
  @optionGroupChildren="items"
  @value={{this.selectedGroupCity}}
  @onChange={{this.setSelectedGroupCity}}
  @placeholder={{t "msg.dropdown.placeholder.city"}}
  @label={{t "lbl.group"}}
  @fieldClass="col-12"
/>

`;
