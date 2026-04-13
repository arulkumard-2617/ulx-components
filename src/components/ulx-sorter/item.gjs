import Component from "@glimmer/component";

/**
 * Row layout inside `UlxSorter` matching `sorter.less` (handle, content, actions).
 * Empty lists are styled on the parent `UlxSorter` via `.sorter-container.is-empty`.
 *
 * @class UlxSorterItem
 * @block handle - Drag handle (use with `handle: '.sorter-handle'` in Sortable options).
 * @block default - Main content (rendered in `.sorter-content`).
 * @block actions - Trailing actions (`.sorter-actions`).
 */
export default class UlxSorterItem extends Component {
	<template>
		{{#if (has-block "handle")}}
			<span class="sorter-handle" aria-hidden="true">
				{{yield to="handle"}}
			</span>
		{{/if}}
		<div class="sorter-content">
			{{yield}}
		</div>
		{{#if (has-block "actions")}}
			<div class="sorter-actions">
				{{yield to="actions"}}
			</div>
		{{/if}}
	</template>
}
