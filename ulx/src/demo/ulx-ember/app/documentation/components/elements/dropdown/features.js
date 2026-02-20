// ==========================================================================
// Dropdown Feature Items
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  CheckmarkDemo,
  EditableDemo,
  GroupDemo,
  TemplateDemo,
  FilterDemo,
  ClearIconDemo,
  LoadingStateDemo,
  VirtualScrollDemo,
  FloatLabelDemo,
  FilledDemo,
  InvalidDemo,
  DisabledDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  CheckmarkSource,
  EditableSource,
  GroupSource,
  TemplateSource,
  FilterSource,
  ClearIconSource,
  LoadingStateSource,
  VirtualScrollSource,
  FloatLabelSource,
  FilledSource,
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
    t('lbl.doc.section.import'),
    'The <code>import</code> property is used to import the <code>UlxDropdown</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    t('lbl.doc.section.basic'),
    'The <code>Basic</code> demo shows basic usage of the Dropdown with label, help text and field structure.',
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'checkmark',
    t('lbl.dropdown.checkmark'),
    'Selected option can be shown with a checkmark using <code>@checkmark</code>.',
    CheckmarkDemo,
    CheckmarkSource,
    'checkmark'
  ),
  section(
    'editable',
    t('lbl.dropdown.editable'),
    'The <code>Editable</code> demo allows typing in the trigger to filter options.',
    EditableDemo,
    EditableSource,
    'editable'
  ),
  section(
    'group',
    t('lbl.group'),
    'Options can be organized in groups using <code>@optionGroupLabel</code> and <code>@optionGroupChildren</code>.',
    GroupDemo,
    GroupSource,
    'group'
  ),
  section(
    'template',
    t('lbl.dropdown.template'),
    'Customize option rendering with the <code>:item</code> (and <code>:value</code>) named blocks.',
    TemplateDemo,
    TemplateSource,
    'template'
  ),
  section(
    'filter',
    t('lbl.dropdown.filter'),
    'Enable <code>@filter</code> to show a search input inside the dropdown panel.',
    FilterDemo,
    FilterSource,
    'filter'
  ),
  section(
    'clear-icon',
    t('lbl.dropdown.clear.icon'),
    'Use <code>@showClear</code> to display a clear icon when a value is selected.',
    ClearIconDemo,
    ClearIconSource,
    'clear-icon'
  ),
  section(
    'loading-state',
    t('lbl.dropdown.loading.state'),
    'Use <code>@loading</code> to show a loading indicator instead of the dropdown icon.',
    LoadingStateDemo,
    LoadingStateSource,
    'loading-state'
  ),
  section(
    'virtual-scroll',
    t('lbl.dropdown.virtual.scroll'),
    'Use <code>@scrollHeight</code> to limit list height; suitable for large option lists.',
    VirtualScrollDemo,
    VirtualScrollSource,
    'virtual-scroll'
  ),
  section(
    'float-label',
    t('lbl.dropdown.float.label'),
    'Use <code>@floatLabel</code> for float label styling.',
    FloatLabelDemo,
    FloatLabelSource,
    'float-label'
  ),
  section(
    'filled',
    t('lbl.dropdown.filled'),
    'Use <code>@filled</code> for filled variant styling.',
    FilledDemo,
    FilledSource,
    'filled'
  ),
  section(
    'invalid',
    t('lbl.dropdown.invalid'),
    'Use <code>@invalid</code> or <code>@error</code> to show invalid state.',
    InvalidDemo,
    InvalidSource,
    'invalid'
  ),
  section(
    'disabled',
    t('lbl.dropdown.disabled'),
    'Use <code>@disabled</code> to disable the dropdown.',
    DisabledDemo,
    DisabledSource,
    'disabled'
  ),
  section(
    'accessibility',
    t('lbl.doc.section.accessibility'),
    'Dropdown uses combobox and listbox roles, keyboard navigation (Arrow keys, Enter, Escape), and ARIA attributes for accessibility.',
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function DropdownFeatures() {
  return DropdownFeatureItems;
}
