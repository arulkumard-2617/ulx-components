import Component from "@glimmer/component";
import { action } from "@ember/object";
import SortableGroup from "ember-sortable/modifiers/sortable-group";
import { getComponentClass } from "../../utils/component-config.js";
import UlxSorterItem from "./item.gjs";

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
 * @param {string} [dataQa] - Override root data-qa attribute
 */
export default class UlxSorter extends Component {
	get baseClass() {
		return getComponentClass("sorter");
	}

	get items() {
		return this.args.items ?? [];
	}

	get direction() {
		return this.args.direction ?? "y";
	}

	get groupName() {
		return this.args.groupName;
	}

	get itemClass() {
		return this.args.itemClass;
	}

	get handle() {
		return this.args.handle;
	}

	get useDragIconAsHandle() {
		return this.args.useDragIconAsHandle ?? false;
	}

	get distance() {
		return this.args.distance ?? 30;
	}

	get rootClasses() {
		const { customClass } = this.args;

		const parts = [this.baseClass];
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-sorter";
	}

	@action
	onChange(items, draggableItem) {
		this.args.onChange?.(items, draggableItem);
	}

	@action
	onDragStart(item) {
		this.args.onDragStart?.(item);
	}

	@action
	onDragStop(item) {
		this.args.onDragStop?.(item);
	}

	<template>
		<div
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			{{SortableGroup
				onChange=this.onChange
				direction=this.direction
				disabled=@disabled
				groupName=@groupName
			}}
			...attributes
		>
			{{#each this.items as |item|}}
				<UlxSorterItem
					@items={{item}}
					@groupName={{this.groupName}}
					@customClass={{this.itemClass}}
					@handle={{this.handle}}
					@useDragIconAsHandle={{this.useDragIconAsHandle}}
					@distance={{this.distance}}
					@onDragStart={{this.onDragStart}}
					@onDragStop={{this.onDragStop}}
					@disabled={{@disabled}}
					@isAnimated={{@isAnimated}}
				>
					{{yield item}}
				</UlxSorterItem>
			{{/each}}
		</div>
	</template>
}
