export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @selectAllLabel=""
  @filter={{true}}
  @filterPlaceholder={{t "msg.multiselect.filter.placeholder"}}
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.dropdown.filter"}}
  @fieldClass="col-4"
/>

`;
