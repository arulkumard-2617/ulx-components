import Component from "@glimmer/component";
import { action } from "@ember/object";
import SortableGroup from "ember-sortable/modifiers/sortable-group";
import { getComponentClass } from "../../../utils/component-config.js";

/**
 * Sortable group wrapper around ember-sortable. Renders a container that reorders
 * child UlxSorterItem components when the user drags them.
 *
 * @class UlxSorter
 * @param {Function} [onChange] - Called with (items, draggedItem) when order changes
 * @param {string} [direction="y"] - Sort direction: "y" (vertical), "x" (horizontal), or "grid"
 * @param {boolean} [disabled=false] - When true, sorting is disabled for the group
 * @param {string} [groupName] - Unique name when multiple sorters are on the page
 * @param {string} [customClass] - Extra CSS classes for the root element
 */
export default class UlxSorter extends Component {
	get baseClass() {
		return getComponentClass("sorter");
	}

	get direction() {
		return this.args.direction ?? "y";
	}

	get rootClasses() {
		const { customClass } = this.args;

		const parts = [this.baseClass];
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	@action
	onChange(items, draggableItem) {
		this.args.onChange?.(items, draggableItem);
	}

	<template>
		<div
			class={{this.rootClasses}}
			{{SortableGroup
				onChange=this.onChange
				direction=this.direction
				disabled=@disabled
				groupName=@groupName
			}}
			...attributes
		>
			{{yield this.groupName}}
		</div>
	</template>
}
