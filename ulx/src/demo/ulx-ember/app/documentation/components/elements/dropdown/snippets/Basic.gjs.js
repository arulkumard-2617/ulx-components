export default `
import { UlxDropdown, t } from 'ulx-components';

<div class="ulx-form m-size ulx-grid gp12 mgb14">
  <UlxDropdown
    id="city-basic"
    @options={{this.cities}}
    @value={{this.selectedCity}}
    @onChange={{this.setSelectedCity}}
    @placeholder={{t "msg.dropdown.placeholder.city"}}
    @label={{t "lbl.dropdown.label.text"}}
    @labelRight={{t "lbl.dropdown.label.right"}}
    @helpText={{t "msg.dropdown.help.text"}}
    @fieldClass="col-12"
  />
</div>

`;
