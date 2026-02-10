import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";
import UlxAvatar from "../ulx-avatar/index.gjs";

/**
 * AvatarGroup component for displaying multiple avatars together, with support for stacked/overlapping layout.
 *
 * ## WCAG
 * - **Group semantics**: The group container provides context for multiple related avatars.
 * - **Individual avatars**: Each avatar within the group inherits accessibility from UlxAvatar component.
 * - **Overflow indicator**: When `@maxVisible` is used, the overflow avatar should have an accessible label (e.g., `aria-label="2 more members"`).
 *
 * @class UlxAvatarGroup
 * @param {Array<object>} [items] - Array of avatar items to display. Each item supports all UlxAvatar props.
 * @param {boolean} [stacked=false] - When true, applies stacked/overlapping layout where avatars overlap each other.
 * @param {number} [maxVisible] - Maximum number of avatars to display. Remaining count is shown as overflow indicator (e.g., "+2").
 * @param {string} [size] - Default size for all avatars in the group. Can be overridden per item.
 * @param {string} [shape] - Default shape for all avatars in the group. Can be overridden per item.
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [componentClass] - Override base component class (defaults to "ulx-avatar-group").
 */
export default class UlxAvatarGroup extends Component {
	get baseClass() {
		const { componentClass } = this.args;
		return componentClass ?? getComponentClass("avatar-group");
	}

	get rootClasses() {
		const { stacked = false, customClass } = this.args;

		const parts = [this.baseClass];

		// Stacked layout
		stacked && parts.push("stacked");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get items() {
		return Array.isArray(this.args.items) ? this.args.items : [];
	}

	get visibleItems() {
		const { maxVisible, size, shape } = this.args;
		let items = this.items;

		if (maxVisible && items.length > maxVisible) {
			items = items.slice(0, maxVisible);
		}

		// Resolve size and shape for each item (fallback to group defaults)
		return items.map((item) => ({
			...item,
			size: item.size ?? size,
			shape: item.shape ?? shape
		}));
	}

	get overflowCount() {
		const { maxVisible } = this.args;
		if (maxVisible && this.items.length > maxVisible) {
			return this.items.length - maxVisible;
		}
		return 0;
	}

	get hasOverflow() {
		return this.overflowCount > 0;
	}

	get overflowLabel() {
		return `+${this.overflowCount}`;
	}

	get overflowAriaLabel() {
		return `${this.overflowCount} more members`;
	}

	<template>
		<div class={{this.rootClasses}} ...attributes>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				{{#each this.visibleItems key="@index" as |item|}}
					<UlxAvatar
						@type={{item.type}}
						@label={{item.label}}
						@image={{item.image}}
						@imageAlt={{item.imageAlt}}
						@iconName={{item.iconName}}
						@iconType={{item.iconType}}
						@iconComponentClass={{item.iconComponentClass}}
						@iconAriaLabel={{item.iconAriaLabel}}
						@variant={{item.variant}}
						@size={{item.size}}
						@shape={{item.shape}}
						@ariaLabel={{item.ariaLabel}}
						@disabled={{item.disabled}}
						@clickable={{item.clickable}}
						@customClass={{item.customClass}}
					/>
				{{/each}}

				{{#if this.hasOverflow}}
					<UlxAvatar
						@type="text"
						@label={{this.overflowLabel}}
						@size={{@size}}
						@shape={{@shape}}
						@variant="grey"
						@ariaLabel={{this.overflowAriaLabel}}
					/>
				{{/if}}
			{{/if}}
		</div>
	</template>
}
