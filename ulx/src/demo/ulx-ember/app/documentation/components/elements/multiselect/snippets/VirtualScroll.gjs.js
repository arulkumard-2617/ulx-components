export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.manyOptions}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @scrollHeight="300px"
  @placeholder={{t "msg.dropdown.select.virtual"}}
  @label={{t "lbl.dropdown.virtual.scroll"}}
  @fieldClass="col-4"
/>

`;
