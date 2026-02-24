export default `
import { UlxMultiSelect, t } from 'ulx-components';

<UlxMultiSelect
  id="a11y-multiselect"
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @placeholder={{t "msg.multiselect.placeholder.city"}}
  @label={{t "lbl.multiselect.accessible"}}
  @fieldClass="col-4"
  aria-label={{t "msg.multiselect.choose.items"}}
/>

`;
