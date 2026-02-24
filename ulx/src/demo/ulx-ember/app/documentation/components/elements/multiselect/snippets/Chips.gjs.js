export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @display="chip"
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.multiselect.chips"}}
  @fieldClass="col-4"
/>

`;
