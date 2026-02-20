import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn, hash } from "@ember/helper";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

/**
 * Steps indicator component for multi-step workflows.
 *
 * Matches ULS markup/classes from `ULS_V2.0/src/styles/uls-styles/less/modules/steps.less`.
 *
 * ## PrimeReact parity (variations)
 * - Basic: provide `@model`
 * - Controlled: provide `@activeIndex`
 * - Linear/read-only (default): `@readOnly={{true}}` (default) blocks selection
 * - Interactive (non-linear): `@readOnly={{false}}` + `@onSelect`
 * - Template: provide `:item` block for custom step rendering
 *
 * ## WCAG
 * - Uses `<nav>` with an ordered list.
 * - Current step has `aria-current="step"`.
 * - Keyboard (when `@readOnly={{false}}`):
 *   - Enter/Space selects focused step
 *   - ArrowLeft/ArrowRight moves focus
 *   - Home/End moves focus to first/last step
 *
 * @class UlxSteps
 * @param {Array<Object>} [model=[]] - Steps array. Each item may include:
 *   - `label` (string)
 *   - `icon` (string) - Font icon class for UlxIcon (type="font")
 *   - `disabled` (boolean)
 *   - `command` (Function) - Called on select: ({ originalEvent, index, item }) => void
 * @param {number} [activeIndex] - Controlled active step index (0-based)
 * @param {boolean} [readOnly=true] - When false, steps are interactive
 * @param {Function} [onSelect] - Called when a step is selected: ({ originalEvent, index, item }) => void
 * @param {string} [ariaLabel] - Accessible label for the nav element
 * @param {string} [ariaLabelledBy] - ID of element that labels the nav element
 * @param {string} [customClass] - Extra CSS classes appended to the root element
 *
 * @yield {Block} item - Custom renderer for step content, yields: `item index meta`
 *   - meta: `{ active, completed, disabled, readOnly }`
 */
export default class UlxSteps extends Component {
	get baseClass() {
		return getComponentClass("steps");
	}

	get model() {
		return this.args.model ?? [];
	}

	get activeIndex() {
		const raw = this.args.activeIndex ?? 0;
		return Number(raw);
	}

	get readOnly() {
		const { readOnly = true } = this.args;
		return Boolean(readOnly);
	}

	get ariaLabel() {
		return this.args.ariaLabel;
	}

	get ariaLabelledBy() {
		return this.args.ariaLabelledBy;
	}

	get listTabIndex() {
		return this.readOnly ? undefined : "0";
	}

	get rootClasses() {
		const { customClass } = this.args;

		const parts = [this.baseClass];
		this.readOnly && parts.push("read-only");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	listElement = null;

	setListRef = modifier((element) => {
		this.listElement = element;
		return () => {
			this.listElement = null;
		};
	});

	@action
	getStepId(index) {
		return `ulx-steps-step-${index}`;
	}

	@action
	getItemHref(item) {
		return item?.url ?? "#";
	}

	@action
	getStepNumber(index) {
		return index + 1;
	}

	@action
	isStepDisabled(item, index) {
		const itemDisabled = Boolean(item?.disabled);
		return itemDisabled || (this.readOnly && index !== this.activeIndex);
	}

	@action
	isStepActive(index) {
		return this.activeIndex === Number(index);
	}

	@action
	isStepCompleted(index) {
		return Number(index) < this.activeIndex;
	}

	@action
	getStepClasses(item, index) {
		const parts = ["steps-item"];

		this.isStepCompleted(index) && parts.push("completed");
		if (this.isStepActive(index)) {
			parts.push("active");
			parts.push("current-step");
		}
		this.isStepDisabled(item, index) && parts.push("disabled");

		return parts.filter(Boolean).join(" ");
	}

	@action
	setFocusToMenuitem(target, focusableItem) {
		if (!target || !focusableItem) return;
		target.tabIndex = "-1";
		focusableItem.tabIndex = "0";
		setTimeout(() => focusableItem.focus({ preventScroll: true }), 0);
	}

	@action
	findNextItem(target) {
		const next = target?.parentElement?.nextElementSibling;
		return next ? next.children?.[0] : null;
	}

	@action
	findPrevItem(target) {
		const prev = target?.parentElement?.previousElementSibling;
		return prev ? prev.children?.[0] : null;
	}

	findFirstItem() {
		const firstLi = this.listElement?.querySelector?.("li");
		return firstLi ? firstLi.children?.[0] : null;
	}

	findLastItem() {
		const items = this.listElement?.querySelectorAll?.("li");
		const lastLi = items?.length ? items[items.length - 1] : null;
		return lastLi ? lastLi.children?.[0] : null;
	}

	@action
	setFocusToFirstItem() {
		const firstItem = this.findFirstItem();
		if (firstItem) {
			firstItem.tabIndex = "0";
			firstItem.focus({ preventScroll: true });
		}
	}

	@action
	handleListFocus() {
		if (!this.readOnly) {
			this.setFocusToFirstItem();
		}
	}

	@action
	itemClick(item, index, originalEvent) {
		if (this.readOnly || item?.disabled) {
			originalEvent?.preventDefault?.();
			return;
		}

		const event = { originalEvent, index, item };
		this.args.onSelect?.(event);
		item?.command?.(event);

		if (!item?.url) {
			originalEvent?.preventDefault?.();
			originalEvent?.stopPropagation?.();
		}
	}

	@action
	onItemKeyDown(originalEvent, item, index) {
		if (this.readOnly) return;

		switch (originalEvent.code) {
			case "ArrowRight": {
				const nextItem = this.findNextItem(originalEvent.target);
				nextItem && this.setFocusToMenuitem(originalEvent.target, nextItem);
				originalEvent.preventDefault();
				break;
			}
			case "ArrowLeft": {
				const prevItem = this.findPrevItem(originalEvent.target);
				prevItem && this.setFocusToMenuitem(originalEvent.target, prevItem);
				originalEvent.preventDefault();
				break;
			}
			case "Home": {
				const firstItem = this.findFirstItem();
				firstItem && this.setFocusToMenuitem(originalEvent.target, firstItem);
				originalEvent.preventDefault();
				break;
			}
			case "End": {
				const lastItem = this.findLastItem();
				lastItem && this.setFocusToMenuitem(originalEvent.target, lastItem);
				originalEvent.preventDefault();
				break;
			}
			case "Tab":
				break;
			case "Enter":
			case "NumpadEnter":
			case "Space":
				this.itemClick(item, index, originalEvent);
				originalEvent.preventDefault();
				break;
			default:
				break;
		}
	}

	<template>
		<nav
			class={{this.rootClasses}}
			aria-label={{this.ariaLabel}}
			aria-labelledby={{this.ariaLabelledBy}}
			data-active-index={{this.activeIndex}}
			...attributes
		>
			<ol
				class="steps-list"
				tabindex={{this.listTabIndex}}
				{{this.setListRef}}
				{{on "focus" this.handleListFocus}}
			>
				{{#each this.model as |item index|}}
					<li class={{this.getStepClasses item index}}>
						<a
							id={{this.getStepId index}}
							class="steps-link"
							href={{this.getItemHref item}}
							target={{item.target}}
							tabindex="-1"
							aria-current={{if (this.isStepActive index) "step"}}
							aria-disabled={{if (this.isStepDisabled item index) "true"}}
							{{on "keydown" (fn this.onItemKeyDown item index)}}
							{{on "click" (fn this.itemClick item index)}}
						>
							{{#if (has-block "item")}}
								{{yield
									item
									index
									(hash
										active=(this.isStepActive index)
										completed=(this.isStepCompleted index)
										disabled=(this.isStepDisabled item index)
										readOnly=this.readOnly
									)
									to="item"
								}}
							{{else}}
								<span class="steps-number">{{this.getStepNumber index}}</span>
								{{#if item.icon}}
									<span class="steps-icon">
										<UlxIcon @type="font" @iconName={{item.icon}} />
									</span>
								{{/if}}
								{{#if item.label}}
									<span class="steps-title">{{item.label}}</span>
								{{/if}}
							{{/if}}
						</a>
					</li>
				{{/each}}
			</ol>
		</nav>
	</template>
}
