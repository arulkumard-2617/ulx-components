import Component from "@glimmer/component";
import { action } from "@ember/object";
import SortableItem from "ember-sortable/modifiers/sortable-item";
import SortableHandle from "ember-sortable/modifiers/sortable-handle";
import { getComponentClass } from "../../../utils/component-config.js";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

/**
 * Sortable item wrapper around ember-sortable. Must be used inside UlxSorter.
 * Each item receives a model; the parent's onChange receives the reordered array.
 *
 * @class UlxSorterItem
 * @param {*} items - The item data (passed to onChange when order changes)
 * @param {string} [handle] - Selector for the drag handle element (optional)
 * @param {boolean} [showDragIcon=false] - When true, renders a default drag icon before the yielded content
 * @param {boolean} [useDragIconAsHandle=false] - When true, the drag icon acts as the drag handle (no extra markup needed)
 * @param {string} [dragIconName="dragdrop-icon1"] - Icon name used when showDragIcon is enabled
 * @param {string} [dragIconComponentClass="bs-icons1"] - Icon font class (zicons bs-icons1)
 * @param {string} [dragIconType="font"] - Icon type passed to UlxIcon
 * @param {string} [dragIconSize="s18"] - Icon size passed to UlxIcon
 * @param {Function} [onDragStart] - Called with (model) when drag starts
 * @param {Function} [onDragStop] - Called with (model) when drag ends
 * @param {boolean} [disabled=false] - When true, this item is not draggable
 * @param {string} [groupName] - Must match the UlxSorter groupName when multiple sorters exist
 * @param {boolean} [isAnimated] - Whether to animate the item when reordering
 * @param {number} [distance=30] - Pixel distance before drag starts (helps with click vs drag)
 * @param {string} [customClass] - Extra CSS classes for the root element
 */
export default class UlxSorterItem extends Component {
	get showDragIcon() {
		return this.args.showDragIcon ?? false;
	}

	get useDragIconAsHandle() {
		return this.args.useDragIconAsHandle ?? false;
	}

	get baseClass() {
		return getComponentClass("sorter-item");
	}

	get groupName() {
		return this.args.groupName;
	}

	get rootClasses() {
		const { customClass } = this.args;

		const parts = [this.baseClass];
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get distance() {
		return this.args.distance ?? 30;
	}

	get handleSelector() {
		const { handle } = this.args;

		if (handle) return handle;
		if (!this.showDragIcon || !this.useDragIconAsHandle) return undefined;

		return "[data-ulx-sorter-handle]";
	}

	get dragIconArgs() {
		const {
			dragIconName = "dragdrop-icon1",
			dragIconComponentClass = "bs-icons1",
			dragIconType = "font",
			dragIconSize = "s18"
		} = this.args;

		return { dragIconName, dragIconComponentClass, dragIconType, dragIconSize };
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
			{{SortableItem
				model=@items
				handle=this.handleSelector
				onDragStart=this.onDragStart
				onDragStop=this.onDragStop
				disabled=@disabled
				groupName=this.groupName
				isAnimated=@isAnimated
				distance=this.distance
			}}
			...attributes
		>
			{{! If needed add drag icon back in }}
			{{!-- {{#if this.showDragIcon}}
				<span
					class="inline-flex items-center"
					data-ulx-sorter-handle
					{{SortableHandle}}
					aria-hidden="true"
				>
					<UlxIcon
						@iconName={{this.dragIconArgs.dragIconName}}
						@iconComponentClass={{this.dragIconArgs.dragIconComponentClass}}
						@type={{this.dragIconArgs.dragIconType}}
						@iconSize={{this.dragIconArgs.dragIconSize}}
					/>
				</span>
			{{/if}} --}}
			{{yield}}
		</div>
	</template>
}
