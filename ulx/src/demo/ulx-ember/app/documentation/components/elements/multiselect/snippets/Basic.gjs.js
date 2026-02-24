export default `
import { UlxMultiSelect, t } from 'ulx-components';

<div class="ulx-form m-size ulx-grid gp12 mgb14">
  <UlxMultiSelect
    id="multiselect-basic"
    @options={{this.items}}
    @value={{this.selected}}
    @onChange={{this.setSelected}}
    @selectAll={{true}}
    @placeholder={{t "msg.multiselect.placeholder.city"}}
    @label={{t "lbl.multiselect.basic"}}
    @fieldClass="col-4"
  />
</div>

`;
