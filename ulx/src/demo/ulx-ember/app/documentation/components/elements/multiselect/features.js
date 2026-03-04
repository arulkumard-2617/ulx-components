// ==========================================================================
// MultiSelect Feature Items
// ==========================================================================
import { t } from 'ulx-components';
import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,
  ChipsDemo,
  GroupDemo,
  TemplateDemo,
  FilterDemo,
  AllowAdditionDemo,
  VirtualScrollDemo,
  LoadingStateDemo,
  FloatLabelDemo,
  FilledDemo,
  InvalidDemo,
  DisabledDemo,
  AccessibilityDemo,
  ImportSource,
  BasicSource,
  ChipsSource,
  GroupSource,
  TemplateSource,
  FilterSource,
  AllowAdditionSource,
  VirtualScrollSource,
  LoadingStateSource,
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

export const MultiselectFeatureItems = [
  section(
    'import',
    t('lbl.doc.section.import'),
    'The <code>import</code> property is used to import the <code>UlxMultiSelect</code> component.',
    null,
    ImportSource,
    'import'
  ),
  section(
    'basic',
    t('lbl.doc.section.basic'),
    'The <code>Basic</code> demo shows basic usage of the MultiSelect with <code>@options</code>, <code>@value</code> (array), and <code>@onChange</code>.',
    BasicDemo,
    BasicSource,
    'basic'
  ),
  section(
    'chips',
    t('lbl.multiselect.chips'),
    'Use <code>@display="chip"</code> to show selected items as removable chips.',
    ChipsDemo,
    ChipsSource,
    'chips'
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
    'Customize rendering with the <code>:value</code> and <code>:item</code> named blocks.',
    TemplateDemo,
    TemplateSource,
    'template'
  ),
  section(
    'filter',
    t('lbl.dropdown.filter'),
    'Enable <code>@filter</code> to show a search input inside the panel.',
    FilterDemo,
    FilterSource,
    'filter'
  ),
  section(
    'allow-addition',
    t('lbl.multiselect.allow.addition'),
    'Use <code>@allowAddition</code> and <code>@onAddItem</code> to show an Add button in the panel header; type in the filter and click Add (or press Enter) to create and select a new option.',
    AllowAdditionDemo,
    AllowAdditionSource,
    'allow-addition'
  ),
  section(
    'virtual-scroll',
    t('lbl.dropdown.virtual.scroll'),
    'Use <code>@virtualScrollerOptions</code> with <code>itemSize</code> to virtualize a long list (e.g. 100K items) for efficient rendering.',
    VirtualScrollDemo,
    VirtualScrollSource,
    'virtual-scroll'
  ),
  section(
    'loading-state',
    t('lbl.loading.state'),
    'Use <code>@loading</code> to show a loading indicator instead of the dropdown icon.',
    LoadingStateDemo,
    LoadingStateSource,
    'loading-state'
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
    'Use <code>@disabled</code> to disable the MultiSelect.',
    DisabledDemo,
    DisabledSource,
    'disabled'
  ),
  section(
    'accessibility',
    t('lbl.doc.section.accessibility'),
    'MultiSelect uses combobox and listbox with <code>aria-multiselectable</code>, keyboard navigation (Arrow keys, Enter, Space, Escape), and ARIA attributes.',
    AccessibilityDemo,
    AccessibilitySource,
    'accessibility'
  ),
];

export default function MultiselectFeatures() {
  return MultiselectFeatureItems;
}
