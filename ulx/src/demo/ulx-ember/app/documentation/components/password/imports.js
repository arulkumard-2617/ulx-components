// ==========================================================================
// Password Demo Components Barrel Export
// ==========================================================================

export { default as BasicDemo } from '../../../components/Demo/Password/Basic';
export { default as MeterDemo } from '../../../components/Demo/Password/Meter';
export { default as LocaleDemo } from '../../../components/Demo/Password/Locale';
export { default as ToggleMaskDemo } from '../../../components/Demo/Password/ToggleMask';
export { default as TemplateDemo } from '../../../components/Demo/Password/Template';
export { default as InvalidDemo } from '../../../components/Demo/Password/Invalid';
export { default as DisabledDemo } from '../../../components/Demo/Password/Disabled';

export const ImportSource = `
import { UlxPassword } from 'ulx-components';
`;
export { default as BasicSource } from '../../../demo-sources/demo/password/basic';
export { default as MeterSource } from '../../../demo-sources/demo/password/meter';
export { default as LocaleSource } from '../../../demo-sources/demo/password/locale';
export { default as ToggleMaskSource } from '../../../demo-sources/demo/password/toggle-mask';
export { default as TemplateSource } from '../../../demo-sources/demo/password/template';
export { default as InvalidSource } from '../../../demo-sources/demo/password/invalid';
export { default as DisabledSource } from '../../../demo-sources/demo/password/disabled';
export const AccessibilitySource = `
<label for="pwd1">Password</label>
<UlxPassword @id="pwd1" @feedback={{false}} />

<span id="pwd2">Password</span>
<UlxPassword aria-labelledby="pwd2" @feedback={{false}} />

<UlxPassword aria-label="Password" @feedback={{false}} />
`;
