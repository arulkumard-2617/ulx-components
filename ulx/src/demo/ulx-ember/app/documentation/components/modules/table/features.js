import RichText from '../../../../components/common/doc-main/rich-text';
import {
  BasicDemo,       BasicSource,
  SortDemo,        SortSource,
  PaginatorDemo,
  SelectionDemo,   SelectionSource,
  FilterDemo,
  ExpansionDemo,   ExpansionSource,
  ColumnTemplateDemo, ColumnTemplateSource,
  GridLinesDemo,
  SizeVariantsDemo,
  ManageColumnsDemo,
  ResizeDemo,
  RowEditDemo,
  FrozenColumnsDemo,
  ImportSource,
} from './imports';

export const TableFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Import <code>UlxTable</code> from the ulx-components package.' },
    },
    demo: { component: null, props: { source: ImportSource, snippetName: 'import', language: 'jsx' } },
  },
  {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Basic usage — pass <code>@value</code> (data array) and <code>@columns</code> (column definitions).' },
    },
    demo: { component: BasicDemo, props: { source: BasicSource, snippetName: 'basic', language: 'handlebars' } },
  },
  {
    id: 'sort',
    sectionNav: 'Sort',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Set <code>sortable: true</code> on columns and use <code>@sortMode="single"</code> or <code>"multiple"</code>. Multi-sort: hold Ctrl/Cmd and click headers. <code>@removableSort</code> clears sort on third click.' },
    },
    demo: { component: SortDemo, props: { source: SortSource, snippetName: 'sort', language: 'handlebars' } },
  },
  {
    id: 'column-template',
    sectionNav: 'Column Template',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Define inline GJS components for custom cell rendering via <code>body</code> key in column config. Components receive <code>@row</code>, <code>@value</code>, and <code>@index</code>.' },
    },
    demo: { component: ColumnTemplateDemo, props: { source: ColumnTemplateSource, snippetName: 'column-template', language: 'handlebars' } },
  },
  {
    id: 'paginator',
    sectionNav: 'Pagination',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Enable pagination with <code>@paginator={{true}}</code>. Control rows per page with <code>@rows</code> and provide <code>@rowsPerPageOptions</code> for the dropdown.' },
    },
    demo: { component: PaginatorDemo, props: { source: null, snippetName: 'paginator', language: 'handlebars' } },
  },
  {
    id: 'selection',
    sectionNav: 'Selection',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Row selection modes: <code>single</code>, <code>multiple</code>, <code>checkbox</code>, <code>radio</code>. For checkbox/radio column, add <code>{ selectionMode: "multiple" }</code> to columns array.' },
    },
    demo: { component: SelectionDemo, props: { source: SelectionSource, snippetName: 'selection', language: 'handlebars' } },
  },
  {
    id: 'filter',
    sectionNav: 'Filter',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Two filter display modes: <code>row</code> (inline inputs in header) or <code>menu</code> (popup with multi-constraint support). Set <code>filter: true</code> on columns to enable.' },
    },
    demo: { component: FilterDemo, props: { source: null, snippetName: 'filter', language: 'handlebars' } },
  },
  {
    id: 'expansion',
    sectionNav: 'Row Expansion',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Add <code>{ expander: true }</code> to columns and use the <code>&lt;:rowExpansion as |row|&gt;</code> named block for expansion content. Control with <code>@expandedRows</code> + <code>@onRowToggle</code>.' },
    },
    demo: { component: ExpansionDemo, props: { source: ExpansionSource, snippetName: 'expansion', language: 'handlebars' } },
  },
  {
    id: 'gridlines',
    sectionNav: 'Grid Lines & Striped',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Use <code>@showGridlines</code> for bordered cells and <code>@stripedRows</code> for alternating row background colors.' },
    },
    demo: { component: GridLinesDemo, props: { source: null, snippetName: 'gridlines', language: 'handlebars' } },
  },
  {
    id: 'size',
    sectionNav: 'Size Variants',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Control cell padding and font size with <code>@size</code>: <code>xs-size</code>, <code>s-size</code> (default), <code>m-size</code>, <code>l-size</code>, <code>xl-size</code>.' },
    },
    demo: { component: SizeVariantsDemo, props: { source: null, snippetName: 'size', language: 'handlebars' } },
  },
  {
    id: 'manage-columns',
    sectionNav: 'Manage Columns',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Set <code>@showManageColumns={{true}}</code> to show the column management panel. Use <code>manageable: false</code> on a column to lock it (cannot be hidden or reordered).' },
    },
    demo: { component: ManageColumnsDemo, props: { source: null, snippetName: 'manage-columns', language: 'handlebars' } },
  },
  {
    id: 'resize',
    sectionNav: 'Column Resize',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Enable column resizing with <code>@resizableColumns={{true}}</code>. Drag the right edge of any column header to resize.' },
    },
    demo: { component: ResizeDemo, props: { source: null, snippetName: 'resize', language: 'handlebars' } },
  },
  {
    id: 'row-edit',
    sectionNav: 'Row Edit',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Row editing with <code>@editMode="row"</code>. Add <code>editor</code> component to columns for custom inputs. Add <code>{ rowEditor: true }</code> for save/cancel buttons column.' },
    },
    demo: { component: RowEditDemo, props: { source: null, snippetName: 'row-edit', language: 'handlebars' } },
  },
  {
    id: 'frozen-columns',
    sectionNav: 'Frozen Columns',
    sectionDesc: {
      component: RichText,
      props: { as: 'span', content: 'Freeze columns at left or right edge by setting <code>frozen: true</code>, <code>alignFrozen: "left" | "right"</code>, and <code>frozenOffset</code>. Use with <code>@scrollable</code>.' },
    },
    demo: { component: FrozenColumnsDemo, props: { source: null, snippetName: 'frozen-columns', language: 'handlebars' } },
  },
];

export default function TableFeatures() {
  return TableFeatureItems;
}
