import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fn, hash } from "@ember/helper";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import UlxIcon from "../ulx-icon/index.gjs";

const STEP_LINK_DIRECTION = {
	NEXT: "next",
	PREV: "prev",
};

const STEP_LINK_FOCUS_POSITION = {
	FIRST: "first",
	LAST: "last",
};

/**
 * Stage-indicator steps component for multi-step workflows.
 *
 * Matches ULS markup/classes from `uls-styles/less/modules/steps.less`.
 *
 * ## Variations
 * - Basic: provide `@items`
 * - Controlled: provide `@activeIndex`
 * - Linear/read-only (default): `@readOnly={{true}}` (default) blocks selection
 * - Interactive (non-linear): `@readOnly={{false}}` + `@onSelect`
 * - Template: provide `:item` block for custom step rendering
 *
 * Default rendering shows icon + label in a row with `right-arrow-icon` separators.
 * Active step uses `@activeStepIcon` (default `success-icon`); other steps use
 * `@inactiveStepIcon` (default `success-stroke-icon`). Per-item `activeIcon`,
 * `inactiveIcon`, or `icon` override the defaults.
 *
 * ## WCAG
 * - Uses `<nav>` with an ordered list.
 * - Current step has `aria-current="step"`.
 * - Keyboard (when `@readOnly={{false}}`):
 *   - Enter/Space selects focused step
 *   - ArrowLeft/ArrowRight moves focus between enabled steps only
 *   - Home/End moves focus to first/last enabled step
 * - Disabled steps use `tabindex="-1"` and are skipped by focus navigation
 *
 * @class UlxSteps
 * @param {Array<Object>} [items=[]] - Steps array. Each item may include:
 *   - `label` (string)
 *   - `icon` (string) - Font icon class for UlxIcon (type="font")
 *   - `activeIcon` (string) - Active-step icon override
 *   - `inactiveIcon` (string) - Inactive-step icon override
 *   - `disabled` (boolean)
 *   - `command` (Function) - Called on select: ({ originalEvent, index, item }) => void
 * @param {number} [activeIndex] - Controlled active step index (0-based)
 * @param {boolean} [readOnly=true] - When false, steps are interactive
 * @param {Function} [onSelect] - Called when a step is selected: ({ originalEvent, index, item }) => void
 * @param {string} [ariaLabel] - Accessible label for the nav element
 * @param {string} [ariaLabelledBy] - ID of element that labels the nav element
 * @param {string} [activeStepIcon='success-icon'] - Default active step icon
 * @param {string} [inactiveStepIcon='success-stroke-icon'] - Default inactive step icon
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
		const { customClass } = this.args;

		const parts = [this.baseClass];
		this.readOnly && parts.push("read-only");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
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
	getStepTabIndex(item, index) {
		return this.isStepDisabled(item, index) ? "-1" : undefined;
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
		return !this.isLastStep(index);
	}

	@action
	getStepIcon(item, index) {
		const { icon, activeIcon, inactiveIcon } = item ?? {};
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
	findAdjacentStepLink(target, direction) {
		let listItem = target?.parentElement;

		while (listItem) {
			listItem =
				direction === STEP_LINK_DIRECTION.NEXT
					? listItem.nextElementSibling
					: listItem.previousElementSibling;
			if (!listItem) break;
			if (
				!listItem.classList.contains("steps-item") ||
				listItem.classList.contains("disabled")
			) {
				continue;
			}

			const link = listItem.querySelector(".steps-link");
			if (link) return link;
		}

		return null;
	}

	getFocusableStepLinks() {
		return this.listElement?.querySelectorAll(
			"li.steps-item:not(.disabled) .steps-link",
		);
	}

	@action
	focusStepLinkAt(position) {
		const links = this.getFocusableStepLinks();
		if (!links?.length) return;

		const link =
			position === STEP_LINK_FOCUS_POSITION.LAST
				? links[links.length - 1]
				: links[0];
		this.setFocusToMenuitem(link);
	}

	@action
	handleListFocus() {
		!this.readOnly && this.focusStepLinkAt(STEP_LINK_FOCUS_POSITION.FIRST);
	}

	@action
	itemClick(item, index, originalEvent) {
		if (this.isStepDisabled(item, index)) {
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
				const nextItem = this.findAdjacentStepLink(
					originalEvent.target,
					STEP_LINK_DIRECTION.NEXT,
				);
				nextItem && this.setFocusToMenuitem(nextItem);
				originalEvent.preventDefault();
				break;
			}
			case "ArrowLeft": {
				const prevItem = this.findAdjacentStepLink(
					originalEvent.target,
					STEP_LINK_DIRECTION.PREV,
				);
				prevItem && this.setFocusToMenuitem(prevItem);
				originalEvent.preventDefault();
				break;
			}
			case "Home": {
				this.focusStepLinkAt(STEP_LINK_FOCUS_POSITION.FIRST);
				originalEvent.preventDefault();
				break;
			}
			case "End": {
				this.focusStepLinkAt(STEP_LINK_FOCUS_POSITION.LAST);
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
							tabindex={{this.getStepTabIndex item index}}
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
								<span class="steps-icon">
									<UlxIcon @type="font" @iconName={{this.getStepIcon item index}} />
								</span>
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
