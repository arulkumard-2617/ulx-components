export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @error={{t "msg.dropdown.error.here"}}
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.dropdown.invalid"}}
  @fieldClass="col-4"
/>

`;
