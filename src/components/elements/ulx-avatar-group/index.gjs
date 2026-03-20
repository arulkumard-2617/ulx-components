import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxAvatar from "../ulx-avatar/index.gjs";
import UlxPopup from "../../modules/ulx-popup/index.gjs";

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
 * @param {string} [popupSize] - Size for the overflow UlxPopup. Defaults to UlxPopup default when not provided.
 * @param {string} [groupAriaLabel] - When set, the root uses `role="group"` and this `aria-label` for the collection.
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [componentClass] - Override base component class (defaults to "ulx-avatar-group").
 * @param {string} [dataQa] - Optional `data-qa` on the root (defaults to `ulx-avatar-group`).
 */
export default class UlxAvatarGroup extends Component {
	@tracked isOverflowPopupVisible = false;
	@tracked overflowTarget = null;

	get baseClass() {
		const { componentClass } = this.args;
		return componentClass ?? getComponentClass("avatar-group");
	}

	get rootDataQa() {
		const { dataQa } = this.args;
		return dataQa ?? "ulx-avatar-group";
	}

	get groupRole() {
		const { groupAriaLabel } = this.args;
		return typeof groupAriaLabel === "string" && groupAriaLabel.length > 0 ? "group" : undefined;
	}

	get groupAriaLabelResolved() {
		const { groupAriaLabel } = this.args;
		return typeof groupAriaLabel === "string" && groupAriaLabel.length > 0 ? groupAriaLabel : undefined;
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

		return items.map((item, index) => ({
			...item,
			size: item.size ?? size,
			shape: item.shape ?? shape,
			_ulxRowKey: item.id ?? item.key ?? `ulx-avatar-group-${index}`
		}));
	}

	get overflowItems() {
		const { maxVisible, size, shape } = this.args;
		const items = this.items;

		if (!maxVisible || items.length <= maxVisible) {
			return [];
		}

		const overflowSlice = items.slice(maxVisible);

		return overflowSlice.map((item, index) => ({
			...item,
			size: item.size ?? size,
			shape: item.shape ?? shape,
			_ulxRowKey: item.id ?? item.key ?? `ulx-avatar-group-overflow-${maxVisible + index}`
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

	@action
	handleOverflowClick(event) {
		this.overflowTarget = event?.currentTarget ?? null;
		this.isOverflowPopupVisible = true;
	}

	@action
	handleOverflowPopupHide() {
		this.isOverflowPopupVisible = false;
	}

	<template>
		<div
			class={{this.rootClasses}}
			role={{this.groupRole}}
			aria-label={{this.groupAriaLabelResolved}}
			data-qa={{this.rootDataQa}}
			...attributes
		>
			{{#if (has-block)}}
				{{yield}}
			{{else}}
				{{#each this.visibleItems key="_ulxRowKey" as |item|}}
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
					<button
						type="button"
						data-qa="ulx-avatar-group-overflow"
						aria-label={{t "msg.more.members" count=this.overflowCount}}
						{{on "click" this.handleOverflowClick}}
					>
						<UlxAvatar
							@type="text"
							@label={{this.overflowLabel}}
							@size={{@size}}
							@shape={{@shape}}
							@variant="grey"
						/>
					</button>

					<UlxPopup
						@visible={{this.isOverflowPopupVisible}}
						@target={{this.overflowTarget}}
						@size={{@popupSize}}
						@position="position-bottom-right"
						@ariaLabel={{t "msg.more.members" count=this.overflowCount}}
						@dismissable={{true}}
						@closable={{true}}
						@onHide={{this.handleOverflowPopupHide}}
					>
						{{#each this.overflowItems key="_ulxRowKey" as |item|}}
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
					</UlxPopup>
				{{/if}}
			{{/if}}
		</div>
	</template>
}
