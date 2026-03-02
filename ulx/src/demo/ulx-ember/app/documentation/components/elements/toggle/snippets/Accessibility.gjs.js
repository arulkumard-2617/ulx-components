export default `
import Component from '@glimmer/component';
import { UlxToggle, t } from 'ulx-components';

export default class AccessibilityToggleDemo extends Component {
  <template>
    <div class="ulx-flex ulx-flex-col gap-4">
      <div class="ulx-flex ulx-items-center gap-2">
        <label for="toggle-switch-1">{{t "lbl.toggle.remember.me"}}</label>
        <UlxToggle @inputId="toggle-switch-1" />
      </div>
      <div class="ulx-flex ulx-items-center gap-2">
        <span id="toggle-switch-2-label">{{t "lbl.toggle.remember.me"}}</span>
        <UlxToggle aria-labelledby="toggle-switch-2-label" />
      </div>
      <div>
        <UlxToggle aria-label={{t "lbl.toggle.remember.me"}} />
      </div>
    </div>
  </template>
}

`;
