export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @disabled={{true}}
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.dropdown.disabled"}}
  @fieldClass="col-4"
/>

`;
