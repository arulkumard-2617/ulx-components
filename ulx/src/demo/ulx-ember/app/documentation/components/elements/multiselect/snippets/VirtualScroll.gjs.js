export default `
import { UlxMultiSelect, t } from 'ulx-components';
import { hash } from '@ember/helper';

<UlxMultiSelect
  @options={{this.items}}
  @value={{this.selected}}
  @onChange={{this.setSelected}}
  @selectAll={{true}}
  @virtualScrollerOptions={{hash itemSize=43}}
  @selectionLimit={{3}}
  @placeholder={{t "msg.dropdown.select.virtual"}}
  @label={{t "lbl.dropdown.virtual.scroll"}}
  @fieldClass="col-4"
/>

`;
