import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn, hash } from "@ember/helper";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import UlxIcon from "../ulx-icon/index.gjs";

/**
 * Steps indicator component for multi-step workflows.
 *
 * Matches ULS markup/classes from `ULS_V2.0/src/styles/uls-styles/less/modules/steps.less`.
 *
 * ## Variations
 * - Basic: provide `@items`
 * - Controlled: provide `@activeIndex`
 * - Linear/read-only (default): `@readOnly={{true}}` (default) blocks selection
 * - Interactive (non-linear): `@readOnly={{false}}` + `@onSelect`
 * - Template: provide `:item` block for custom step rendering
 * - Stage indicator: `@variant="stage-indicator"` — active step uses `@activeStepIcon`
 *   (default `success-icon`), others use `@inactiveStepIcon` (default `success-stroke-icon`).
 *   Per-item `activeIcon`, `inactiveIcon`, or `icon` override the defaults.
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
 * @param {Array<Object>} [items=[]] - Steps array. Each item may include:
 *   - `label` (string)
 *   - `icon` (string) - Font icon class for UlxIcon (type="font")
 *   - `activeIcon` (string) - Stage-indicator active-step icon override
 *   - `inactiveIcon` (string) - Stage-indicator inactive-step icon override
 *   - `disabled` (boolean)
 *   - `command` (Function) - Called on select: ({ originalEvent, index, item }) => void
 * @param {number} [activeIndex] - Controlled active step index (0-based)
 * @param {boolean} [readOnly=true] - When false, steps are interactive
 * @param {Function} [onSelect] - Called when a step is selected: ({ originalEvent, index, item }) => void
 * @param {string} [ariaLabel] - Accessible label for the nav element
 * @param {string} [ariaLabelledBy] - ID of element that labels the nav element
 * @param {string} [variant] - Visual variant (e.g. `stage-indicator`)
 * @param {string} [activeStepIcon='success-icon'] - Default active icon for `stage-indicator`
 * @param {string} [inactiveStepIcon='success-stroke-icon'] - Default inactive icon for `stage-indicator`
 * @param {string} [customClass] - Extra CSS classes appended to the root element
 * @param {string} [dataQa] - Override root data-qa attribute
 *
 * @yield {Block} item - Custom renderer for step content, yields: `item index meta`
 *   - meta: `{ active, completed, disabled, readOnly }`
 */
export default class UlxSteps extends Component {
	get baseClass() {
		return getComponentClass("steps");
	}

	get items() {
		return this.args.items ?? [];
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
		const { customClass, variant } = this.args;

		const parts = [this.baseClass];
		this.readOnly && parts.push("read-only");
		variant && parts.push(variant);
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isStageIndicator() {
		const { customClass = "", variant } = this.args;

		return (
			variant === "stage-indicator" ||
			String(customClass).split(/\s+/).includes("stage-indicator")
		);
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "steps");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
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
	isLastStep(index) {
		return Number(index) >= this.items.length - 1;
	}

	@action
	showStepSeparator(index) {
		return this.isStageIndicator && !this.isLastStep(index);
	}

	@action
	getStepIcon(item, index) {
		const {
			icon,
			activeIcon,
			inactiveIcon,
		} = item ?? {};

		if (!this.isStageIndicator) {
			return icon ?? null;
		}

		const {
			activeStepIcon = "success-icon",
			inactiveStepIcon = "success-stroke-icon",
		} = this.args;

		if (this.isStepActive(index)) {
			return activeIcon ?? activeStepIcon ?? icon ?? inactiveStepIcon;
		}

		return inactiveIcon ?? inactiveStepIcon ?? icon ?? activeStepIcon;
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
	setFocusToMenuitem(focusableItem) {
		if (!focusableItem) return;
		setTimeout(() => focusableItem.focus({ preventScroll: true }), 0);
	}

	@action
	findStepLinkInListItem(listItem) {
		if (!listItem?.classList?.contains?.("steps-item")) return null;
		return listItem.querySelector?.(".steps-link") ?? listItem.children?.[0] ?? null;
	}

	@action
	findNextItem(target) {
		let listItem = target?.parentElement;

		while (listItem) {
			listItem = listItem.nextElementSibling;
			const link = this.findStepLinkInListItem(listItem);
			if (link) return link;
		}

		return null;
	}

	@action
	findPrevItem(target) {
		let listItem = target?.parentElement;

		while (listItem) {
			listItem = listItem.previousElementSibling;
			const link = this.findStepLinkInListItem(listItem);
			if (link) return link;
		}

		return null;
	}

	findFirstItem() {
		return this.listElement?.querySelector?.("li.steps-item .steps-link") ?? null;
	}

	findLastItem() {
		const links = this.listElement?.querySelectorAll?.("li.steps-item .steps-link");
		return links?.length ? links[links.length - 1] : null;
	}

	@action
	setFocusToFirstItem() {
		const firstItem = this.findFirstItem();
		if (firstItem) {
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
				nextItem && this.setFocusToMenuitem(nextItem);
				originalEvent.preventDefault();
				break;
			}
			case "ArrowLeft": {
				const prevItem = this.findPrevItem(originalEvent.target);
				prevItem && this.setFocusToMenuitem(prevItem);
				originalEvent.preventDefault();
				break;
			}
			case "Home": {
				const firstItem = this.findFirstItem();
				firstItem && this.setFocusToMenuitem(firstItem);
				originalEvent.preventDefault();
				break;
			}
			case "End": {
				const lastItem = this.findLastItem();
				lastItem && this.setFocusToMenuitem(lastItem);
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
			data-qa={{this.rootDataQa}}
			aria-label={{this.ariaLabel}}
			aria-labelledby={{this.ariaLabelledBy}}
			data-active-index={{this.activeIndex}}
			...attributes
		>
			<ol
				class="steps-list"
				data-qa={{this.getDataQa "list"}}
				tabindex={{this.listTabIndex}}
				{{this.setListRef}}
				{{on "focus" this.handleListFocus}}
			>
				{{#each this.items as |item index|}}
					<li class={{this.getStepClasses item index}} data-qa={{this.getDataQa "item"}}>
						<a
							id={{this.getStepId index}}
							class="steps-link"
							data-qa={{this.getDataQa "link"}}
							href={{this.getItemHref item}}
							target={{item.target}}
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
								{{#if (this.getStepIcon item index)}}
									<span class="steps-icon">
										<UlxIcon @type="font" @iconName={{this.getStepIcon item index}} />
									</span>
								{{/if}}
								{{#if item.label}}
									<span class="steps-title">{{item.label}}</span>
								{{/if}}
							{{/if}}
						</a>
					</li>
					{{#if (this.showStepSeparator index)}}
						<li
							class="steps-separator-item"
							role="presentation"
							aria-hidden="true"
							data-qa={{this.getDataQa "separator"}}
						>
							<span class="steps-separator">
								<UlxIcon @type="font" @iconName="right-arrow-icon" @size="s22" />
							</span>
						</li>
					{{/if}}
				{{/each}}
			</ol>
		</nav>
	</template>
}
