// ==========================================================================
// Dropdown Feature Items
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  CheckmarkDemo,
  GroupDemo,
  TemplateDemo,
  FilterDemo,
  ClearIconDemo,
  LoadingStateDemo,
  VirtualScrollDemo,
  InvalidDemo,
  DisabledDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  CheckmarkSource,
  GroupSource,
  TemplateSource,
  FilterSource,
  ClearIconSource,
  LoadingStateSource,
  VirtualScrollSource,
  InvalidSource,
  DisabledSource,
  AccessibilitySource,
} from './imports';

const section = (id, sectionNav, content, Demo, Source, snippetName) => ({
  id,
  sectionNav,
  sectionDesc: {
    component: RichText,
    props: { as: 'span', content },
  },
  demo: {
    component: Demo,
    props: {
      source: Source,
      snippetName,
      language: 'handlebars',
    },
  },
});

export const DropdownFeatureItems = [
  section(
    'import',
    "Import",
    'The <code>import</code> property is used to import the <code>UlxDropdown</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    "Basic",
    'The <code>Basic</code> demo shows basic usage of the Dropdown with label, help text and field structure.',
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'checkmark',
    "Checkmark",
    'Selected option can be shown with a checkmark using <code>@checkmark</code>.',
    CheckmarkDemo,
    CheckmarkSource,
    'checkmark'
  ),
  section(
    'group',
    "Group",
    'Options can be organized in groups using <code>@optionGroupLabel</code> and <code>@optionGroupChildren</code>.',
    GroupDemo,
    GroupSource,
    'group'
  ),
  section(
    'template',
    "Template",
    'Customize option rendering with the <code>:item</code> (and <code>:value</code>) named blocks.',
    TemplateDemo,
    TemplateSource,
    'template'
  ),
  section(
    'filter',
    "Filter",
    'Enable <code>@filter</code> to show a search input inside the dropdown panel.',
    FilterDemo,
    FilterSource,
    'filter'
  ),
  section(
    'clear-icon',
    "Clear Icon",
    'Use <code>@showClear</code> to display a clear icon when a value is selected.',
    ClearIconDemo,
    ClearIconSource,
    'clear-icon'
  ),
  section(
    'loading-state',
    "Loading State",
    'Use <code>@loading</code> to show a loading indicator instead of the dropdown icon.',
    LoadingStateDemo,
    LoadingStateSource,
    'loading-state'
  ),
  section(
    'virtual-scroll',
    "Virtual Scroll",
    'Use <code>@scrollHeight</code> to limit list height; suitable for large option lists.',
    VirtualScrollDemo,
    VirtualScrollSource,
    'virtual-scroll'
  ),
  section(
    'invalid',
    "Invalid",
    'Use <code>UlxField</code> for the error message; pass <code>@invalid</code> on the dropdown and <code>@ariaDescribedBy</code> / <code>@ariaErrorMessage</code> from the field control hash.',
    InvalidDemo,
    InvalidSource,
    'invalid'
  ),
  section(
    'disabled',
    "Disabled",
    'Use <code>@disabled</code> to disable the dropdown.',
    DisabledDemo,
    DisabledSource,
    'disabled'
  ),
  section(
    'accessibility',
    "Accessibility",
    'Dropdown uses combobox and listbox roles, keyboard navigation (Arrow keys, Enter, Escape), and ARIA attributes for accessibility.',
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function DropdownFeatures() {
  return DropdownFeatureItems;
}
