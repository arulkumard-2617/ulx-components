import RichText from '../../../components/doc-shared/doc-main/rich-text';
import {
  BasicDemo,
  BasicSource,
  SortDemo,
  SortSource,
  PaginatorDemo,
  SelectionDemo,
  SelectionSource,
  FilterDemo,
  AdvancedFilterDemo,
  AdvancedFilterSource,
  ExpansionDemo,
  ExpansionSource,
  TreeTableDemo,
  TreeTableSource,
  TimelineTableDemo,
  TimelineTableSource,
  ColumnTemplateDemo,
  ColumnTemplateSource,
  GridLinesDemo,
  SizeVariantsDemo,
  ManageColumnsDemo,
  ResizeDemo,
  RowEditDemo,
  FrozenColumnsDemo,
  ConditionalStyleDemo,
  ConditionalStyleSource,
  RowReorderDemo,
  RowReorderSource,
  LoadingDemo,
  LoadingSource,
  EmptyStateDemo,
  EmptyStateSource,
  ExportDemo,
  ExportSource,
  FrozenRowsDemo,
  FrozenRowsSource,
  CellSelectionDemo,
  CellSelectionSource,
  ContextMenuDemo,
  ContextMenuSource,
  PreSortDemo,
  PreSortSource,
  ScrollDemo,
  ScrollSource,
  CellEditDemo,
  CellEditSource,
  DynamicColumnsDemo,
  DynamicColumnsSource,
  CardViewDemo,
  CardViewSource,
  BsTableViewDemo,
  BsTableViewSource,
  VerticalTableDemo,
  VerticalTableSource,
  ImportSource,
} from './imports';

export const TableFeatureItems = [
  {
    id: 'import',
    sectionNav: 'Import',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Import <code>UlxTable</code> from the ulx-components package.',
      },
    },
    demo: {
      component: null,
      props: { source: ImportSource, snippetName: 'import', language: 'jsx' },
    },
  },
  {
    id: 'portal-members',
    sectionNav: 'BSTable view',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'BSTable style: <code>@showGlobalFilter</code>, toolbar <code>@sortOptions</code> / <code>@sortBy</code> / <code>@onSortByChange</code>, filter slide pane via <code>@filterGroups</code>, <code>@showManageColumns</code> (use <code>manageable: false</code> on columns to lock them), and primary action in <code>&lt;:postRightMenu&gt;</code>. Uses custom body for Name & Email (avatar + name + email) and <code>&lt;:optionCell&gt;</code> for row actions.',
      },
    },
    demo: {
      component: BsTableViewDemo,
      props: {
        source: BsTableViewSource,
        snippetName: 'portal-members',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'card-view',
    sectionNav: 'Table / Detailed / Card views',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Three view modes: <strong>table</strong> (default), <strong>detailed</strong> (list — one full-width row per item, uls-grid col-12), and <strong>card</strong> (grid — column count from <code>@cardViewColumns</code>). Layouts use ULS <code>uls-grid</code> / <code>uls-column</code> from grid.less. <code>&lt;:customOptions&gt;</code> is shared by all views.',
      },
    },
    demo: {
      component: CardViewDemo,
      props: {
        source: CardViewSource,
        snippetName: 'card-view',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'vertical-table',
    sectionNav: 'Vertical Table',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Transpose the table with <code>@layout="vertical"</code>. Each row represents a <strong>property/field</strong> and each column represents a <strong>data record</strong>. Optionally pass <code>@verticalLabelField</code> (e.g. <code>"name"</code>) to render a header row whose cells show that field value from each record.',
      },
    },
    demo: {
      component: VerticalTableDemo,
      props: {
        source: VerticalTableSource,
        snippetName: 'vertical-table',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'basic',
    sectionNav: 'Basic',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Basic usage — pass <code>@value</code> (data array) and <code>@columns</code> (column definitions).',
      },
    },
    demo: {
      component: BasicDemo,
      props: {
        source: BasicSource,
        snippetName: 'basic',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'dynamic-columns',
    sectionNav: 'Dynamic Columns',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Build the <code>@columns</code> array dynamically from tracked state. Toggle fields at runtime and the table automatically re-renders with the new column set.',
      },
    },
    demo: {
      component: DynamicColumnsDemo,
      props: {
        source: DynamicColumnsSource,
        snippetName: 'dynamic-columns',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'column-template',
    sectionNav: 'Template',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Define inline GJS components for custom cell rendering via the <code>body</code> key in column config. Components receive <code>@row</code>, <code>@value</code>, and <code>@index</code>.',
      },
    },
    demo: {
      component: ColumnTemplateDemo,
      props: {
        source: ColumnTemplateSource,
        snippetName: 'column-template',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'size',
    sectionNav: 'Size',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Control cell padding and font size with <code>@size</code>: <code>xs-size</code>, <code>s-size</code> (default), <code>m-size</code>, <code>l-size</code>, <code>xl-size</code>.',
      },
    },
    demo: {
      component: SizeVariantsDemo,
      props: { source: null, snippetName: 'size', language: 'handlebars' },
    },
  },
  {
    id: 'gridlines',
    sectionNav: 'Grid Lines & Striped Rows',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@showGridlines</code> for bordered cells and <code>@stripedRows</code> for alternating row background colors.',
      },
    },
    demo: {
      component: GridLinesDemo,
      props: { source: null, snippetName: 'gridlines', language: 'handlebars' },
    },
  },
  {
    id: 'paginator',
    sectionNav: 'Paginator',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Enable pagination with <code>@paginator={{true}}</code>. Control rows per page with <code>@rows</code> and provide <code>@rowsPerPageOptions</code> for the dropdown.',
      },
    },
    demo: {
      component: PaginatorDemo,
      props: { source: null, snippetName: 'paginator', language: 'handlebars' },
    },
  },
  {
    id: 'sort',
    sectionNav: 'Sort',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>sortable: true</code> on columns and use <code>@sortMode="single"</code> or <code>"multiple"</code>. Multi-sort: hold Ctrl/Cmd and click headers. <code>@removableSort</code> clears sort on third click.',
      },
    },
    demo: {
      component: SortDemo,
      props: {
        source: SortSource,
        snippetName: 'sort',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'pre-sort',
    sectionNav: 'Presort',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set an initial sort state by providing <code>@sortField</code> and <code>@sortOrder</code> (1 = ascending, -1 = descending). The table will render pre-sorted without user interaction.',
      },
    },
    demo: {
      component: PreSortDemo,
      props: {
        source: PreSortSource,
        snippetName: 'pre-sort',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'filter',
    sectionNav: 'Filter',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Two filter display modes: <code>row</code> (inline inputs in header) or <code>menu</code> (popup with multi-constraint support). Set <code>filter: true</code> on columns to enable.',
      },
    },
    demo: {
      component: FilterDemo,
      props: { source: null, snippetName: 'filter', language: 'handlebars' },
    },
  },
  {
    id: 'advanced-filter',
    sectionNav: 'Advanced Filter',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Advanced filtering with custom <code>filterElement</code> components per column. Supports multiselect, numeric range, boolean tristate, and configurable match modes. Use <code>@showGlobalFilter</code> for a built-in global search.',
      },
    },
    demo: {
      component: AdvancedFilterDemo,
      props: {
        source: AdvancedFilterSource,
        snippetName: 'advanced-filter',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'selection',
    sectionNav: 'Row Selection',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Row selection modes: <code>single</code>, <code>multiple</code>, <code>checkbox</code>, <code>radio</code>. For checkbox/radio column, add <code>{ selectionMode: "multiple" }</code> to columns array.',
      },
    },
    demo: {
      component: SelectionDemo,
      props: {
        source: SelectionSource,
        snippetName: 'selection',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'cell-selection',
    sectionNav: 'Cell Selection',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Enable cell-level selection with <code>@selectionMode="cell"</code>. The <code>@onSelectionChange</code> callback receives <code>{ row, field }</code> for the clicked cell.',
      },
    },
    demo: {
      component: CellSelectionDemo,
      props: {
        source: CellSelectionSource,
        snippetName: 'cell-selection',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'expansion',
    sectionNav: 'Row Expansion',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Add <code>{ expander: true }</code> to columns and use the <code>&lt;:rowExpansion as |row|&gt;</code> named block for expansion content. Control with <code>@expandedRows</code> + <code>@onRowToggle</code>.',
      },
    },
    demo: {
      component: ExpansionDemo,
      props: {
        source: ExpansionSource,
        snippetName: 'expansion',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'tree-table',
    sectionNav: 'Tree Table',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Inline parent and child rows with tree connectors. Flatten nested data in the app, use <code>@customClass="tree-table"</code>, <code>@scrollable</code> with column <code>min-width</code> styles, custom <code>col.body</code> cells, and <code>@rowClassName</code> for parent and child rows. Supports expandable detail rows and always-visible companion rows.',
      },
    },
    demo: {
      component: TreeTableDemo,
      props: {
        source: TreeTableSource,
        snippetName: 'tree-table',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'timeline-table',
    sectionNav: 'Timeline Table',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Flat activity or audit log rows with a vertical step spine in the first column. Use <code>@customClass="timeline-table"</code>, <code>className: \'timeline-table-cell\'</code> on the timeline column, and <code>timeline-table-step</code> markup with <code>data-state</code> (completed, upcoming) for milestone-style markers and a neutral grey spine.',
      },
    },
    demo: {
      component: TimelineTableDemo,
      props: {
        source: TimelineTableSource,
        snippetName: 'timeline-table',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'cell-edit',
    sectionNav: 'Edit (Cell)',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Cell-level inline editing with <code>@editMode="cell"</code>. Add an <code>editor</code> component to any column definition. Press Enter or click outside to save, Escape to cancel.',
      },
    },
    demo: {
      component: CellEditDemo,
      props: {
        source: CellEditSource,
        snippetName: 'cell-edit',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'row-edit',
    sectionNav: 'Edit (Row)',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Row editing with <code>@editMode="row"</code>. Add <code>editor</code> component to columns for custom inputs. Add <code>{ rowEditor: true }</code> for the save/cancel buttons column.',
      },
    },
    demo: {
      component: RowEditDemo,
      props: { source: null, snippetName: 'row-edit', language: 'handlebars' },
    },
  },
  {
    id: 'scroll',
    sectionNav: 'Scroll',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Use <code>@scrollable</code> with <code>@scrollHeight</code> for vertical scroll, wide <code>min-width</code> columns for horizontal scroll, or <code>@scrollHeight="flex"</code> to fill a flex container.',
      },
    },
    demo: {
      component: ScrollDemo,
      props: {
        source: ScrollSource,
        snippetName: 'scroll',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'frozen-rows',
    sectionNav: 'Frozen Rows',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Pass <code>@frozenValue</code> to pin rows at the top of the table — ideal for summary or header rows that should always be visible.',
      },
    },
    demo: {
      component: FrozenRowsDemo,
      props: {
        source: FrozenRowsSource,
        snippetName: 'frozen-rows',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'frozen-columns',
    sectionNav: 'Frozen Columns',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Freeze columns at left or right edge by setting <code>frozen: true</code>, <code>alignFrozen: "left" | "right"</code>, and <code>frozenOffset</code>. Use with <code>@scrollable</code>.',
      },
    },
    demo: {
      component: FrozenColumnsDemo,
      props: {
        source: null,
        snippetName: 'frozen-columns',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'conditional-style',
    sectionNav: 'Conditional Style',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Apply dynamic styles per row with <code>@rowClassName</code> — pass a function <code>(row) => string</code> to return CSS classes. Use a custom <code>body</code> component for per-cell styling.',
      },
    },
    demo: {
      component: ConditionalStyleDemo,
      props: {
        source: ConditionalStyleSource,
        snippetName: 'conditional-style',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'resize',
    sectionNav: 'Column Resize',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Enable column resizing with <code>@resizableColumns={{true}}</code>. Drag the right edge of any column header to resize.',
      },
    },
    demo: {
      component: ResizeDemo,
      props: { source: null, snippetName: 'resize', language: 'handlebars' },
    },
  },
  {
    id: 'row-reorder',
    sectionNav: 'Reorder',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Add <code>{ rowReorder: true }</code> to the columns array to show a drag handle. Handle <code>@onRowReorder</code> to update the data array with the new order.',
      },
    },
    demo: {
      component: RowReorderDemo,
      props: {
        source: RowReorderSource,
        snippetName: 'row-reorder',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'manage-columns',
    sectionNav: 'Column Toggle',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Set <code>@showManageColumns={{true}}</code> to show the column management panel. Use <code>manageable: false</code> on a column to lock it (cannot be hidden or reordered).',
      },
    },
    demo: {
      component: ManageColumnsDemo,
      props: {
        source: null,
        snippetName: 'manage-columns',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'loading',
    sectionNav: 'Loading',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Show a loading spinner overlay with <code>@loading={{true}}</code>. Customize the overlay using the <code>&lt;:loadingOverlay&gt;</code> named block.',
      },
    },
    demo: {
      component: LoadingDemo,
      props: {
        source: LoadingSource,
        snippetName: 'loading',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'empty-state',
    sectionNav: 'Empty State',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Render custom empty content with the <code>&lt;:emptyMessage&gt;</code> named block. This example uses <code>UlxEmptyState</code> when the table has no rows.',
      },
    },
    demo: {
      component: EmptyStateDemo,
      props: {
        source: EmptyStateSource,
        snippetName: 'empty-state',
        language: 'handlebars',
      },
    },
  },
  {
    id: 'export',
    sectionNav: 'Export',
    sectionDesc: {
      component: RichText,
      props: {
        as: 'span',
        content:
          'Export table data to CSV. Use the <code>&lt;:header&gt;</code> named block to add an export button and call a custom export function with your columns and data.',
      },
    },
    demo: {
      component: ExportDemo,
      props: {
        source: ExportSource,
        snippetName: 'export',
        language: 'handlebars',
      },
    },
  },
];

export default function TableFeatures() {
  return TableFeatureItems;
}
