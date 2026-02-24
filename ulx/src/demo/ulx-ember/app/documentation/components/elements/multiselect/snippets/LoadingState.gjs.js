export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @loading={{true}}
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.loading.state"}}
  @fieldClass="col-4"
/>

`;
