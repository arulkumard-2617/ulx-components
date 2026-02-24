export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.groupedCities}}
  @optionGroupLabel="label"
  @optionGroupChildren="items"
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.group"}}
  @fieldClass="col-4"
/>

`;
