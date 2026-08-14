import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import { modifier } from "ember-modifier";
import { guidFor } from "@ember/object/internals";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import UlxIcon from "../ulx-icon/index.gjs";

const ENTER_TIMEOUT_MS = 1000;
const EXIT_TIMEOUT_MS = 450;

/** Extra classes for each CSS transition phase on `.accordion-toggleable-content`. */
const TOGGLEABLE_PHASE_CLASSES = {
	enter: ["enter"],
	"enter-active": ["enter", "enter-active"],
	"enter-done": ["enter-done"],
	exit: ["exit"],
	"exit-active": ["exit", "exit-active"],
	"exit-done": ["exit-done"]
};

/**
 * Accordion collection component. Groups content in expandable tabs.
 * Matches ULS markup/classes from accordion.less.
 *
 * @class UlxAccordion
 * @param {Array<Object>} [items=[]] - Tabs. Each item: { header (string), disabled? (boolean), content? (string) }
 * @param {number|number[]|null} [activeIndex=null] - Controlled open index (single) or array (multiple)
 * @param {boolean} [multiple=false] - Allow multiple tabs open
 * @param {Function} [onTabOpen] - Called when a tab opens: ({ originalEvent, index }) => void
 * @param {Function} [onTabClose] - Called when a tab closes: ({ originalEvent, index }) => void
 * @param {Function} [onTabChange] - Called when open state changes: ({ originalEvent, index }) => void; index is number or number[]
 * @param {string} [size='s-size'] - Size: xs-size, s-size, m-size, l-size, xl-size
 * @param {string} [variant] - Visual: filled, elevated, flat, link-header
 * @param {string} [spacing] - compact, spacious
 * @param {string} [rounded] - rounded, square
 * @param {string} [customClass] - Extra CSS classes on the root accordion element
 * @param {string} [headerClass] - Extra CSS classes applied to every accordion-header element
 * @param {string} [contentClass] - Extra CSS classes applied to every accordion-content element
 * @param {string} [expandIconName='down-stroke-icon-new'] - Font icon when tab is collapsed
 * @param {string} [collapseIconName='down-stroke-icon-new'] - Font icon when tab is expanded
 * @param {'left'|'right'} [toggleIconPosition='left'] - Position of the expand/collapse icon.
 * @param {string} [ariaLabel] - Accessible label for accordion
 * @param {string} [dataQa] - Optional override for root `data-qa` (default `ulx-accordion`).
 *
 * @block header - Optional. Yields (item, index, meta) to replace the default title; meta: { active, disabled }
 * @block content - Optional. Yields (item, index, meta) for tab body; meta: { active, disabled }
 */
export default class UlxAccordion extends Component {
	get baseClass() {
		return getComponentClass("accordion");
	}

	get items() {
		return this.args.items ?? [];
	}

	get multiple() {
		return Boolean(this.args.multiple);
	}

	get rootId() {
		return this.args.id ?? `ulx-accordion-${guidFor(this)}`;
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "accordion");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	@tracked _activeIndex = null;
	/** Per-panel transition phase for enter/exit animation (mirrors accordion.less). */
	@tracked _contentTransition = {};
	_prevSelectedMap = null;

	get activeIndexState() {
		const raw = this.args.activeIndex ?? this._activeIndex;
		if (raw === undefined || raw === null) return this.multiple ? [] : null;
		if (this.multiple && !Array.isArray(raw)) return [Number(raw)];
		return raw;
	}

	get isControlled() {
		return this.args.activeIndex !== undefined && this.args.activeIndex !== null;
	}

	get expandIconName() {
		return this.args.expandIconName ?? "down-stroke-icon-new";
	}

	get collapseIconName() {
		return this.args.collapseIconName ?? "down-stroke-icon-new";
	}

	get toggleIconPosition() {
		return this.args.toggleIconPosition ?? "left";
	}

	get isToggleIconRight() {
		return this.toggleIconPosition === "right";
	}

	get headerActionClasses() {
		const parts = ["accordion-header-action"];
		this.isToggleIconRight && parts.push("toggle-icon-right");
		return joinClassNames(...parts);
	}

	get rootClasses() {
		const { size = "s-size", variant, spacing, rounded, customClass } = this.args;
		const parts = [this.baseClass, size];
		this.multiple && parts.push("multiple");
		!this.multiple && parts.push("single");
		variant && parts.push(variant);
		spacing && parts.push(spacing);
		rounded && parts.push(rounded);
		customClass && parts.push(customClass);
		return joinClassNames(...parts);
	}

	@action
	isTabSelected(index) {
		const state = this.activeIndexState;
		if (this.multiple && Array.isArray(state)) return state.includes(Number(index));
		return state === Number(index);
	}

	@action
	getHeaderId(index) {
		return `${this.rootId}_header_${index}`;
	}

	@action
	getContentId(index) {
		return `${this.rootId}_content_${index}`;
	}

	@action
	getTabClasses(item, index) {
		const parts = [`${this.baseClass}-tab`];
		index === 0 && parts.push("first");
		index === this.items.length - 1 && parts.push("last");
		item?.disabled && parts.push("disabled");
		return joinClassNames(...parts);
	}

	@action
	getHeaderClasses(item, index) {
		const parts = ["accordion-header"];
		this.isTabSelected(index) && parts.push("active");
		item?.disabled && parts.push("disabled");
		this.args.headerClass && parts.push(this.args.headerClass);
		item?.headerClass && parts.push(item.headerClass);
		return joinClassNames(...parts);
	}

	@action
	getHeaderIconSize(item) {
		return item?.iconSize ?? "s18";
	}

	getContentTransitionState(index) {
		return this._contentTransition[index] ?? null;
	}

	getPrevSelected(index) {
		return this._prevSelectedMap?.get(index);
	}

	/**
	 * Keep panel mounted while open, during exit animation, or right after close (unmount-on-exit).
	 */
	@action
	shouldRenderToggleableContent(index) {
		const selected = this.isTabSelected(index);
		const phase = this.getContentTransitionState(index);
		const prev = this.getPrevSelected(index);

		return (
			selected ||
			phase === "exit" ||
			phase === "exit-active" ||
			phase === "exit-done" ||
			(prev === true && !selected)
		);
	}

	@action
	getToggleableContentClasses(index) {
		const selected = this.isTabSelected(index);
		const phase = this.getContentTransitionState(index);
		const parts = ["accordion-toggleable-content"];

		// A panel is "initially expanded" when it is open on first render (no user interaction
		// has started a transition yet) — identified by the modifier never having recorded this
		// index (prevSelectedMap entry is absent) AND no transition phase being active.
		const isInitiallyExpanded =
			selected && !phase && this._prevSelectedMap?.get(index) === undefined;
		isInitiallyExpanded && parts.push("initially-expanded");

		if (!isInitiallyExpanded) {
			const phaseExtras = phase ? TOGGLEABLE_PHASE_CLASSES[phase] : null;
			phaseExtras && parts.push(...phaseExtras);
			!phase && selected && parts.push("expanded");
		}

		return joinClassNames(...parts);
	}

	/**
	 * Advances transition phases after the DOM has painted.
	 * `changeActiveIndex` sets the initial phase ("enter" / "exit") before the render;
	 * this modifier advances it to "enter-active" / "exit-active" on the next frame.
	 *
	 * First paint for a pre-opened panel (activeIndex set before render) produces
	 * `prev === undefined` — no animation runs and the panel is marked initially-expanded.
	 */
	accordionContentTransition = modifier((element, [index, selected]) => {
		const map = this._prevSelectedMap ?? (this._prevSelectedMap = new Map());
		const prev = map.get(index);
		let enterActiveTimer = null;
		let exitActiveTimer = null;
		let doneTimer = null;
		let rafId = null;

		if (prev === undefined) {
			map.set(index, selected);
			// Panel is mounting for the first time. If `changeActiveIndex` already set a
			// transition phase (user just opened it), advance that phase. Otherwise this
			// is a pre-opened panel on initial render — leave the phase empty so
			// `getToggleableContentClasses` applies "initially-expanded" instead.
			const existingPhase = this._contentTransition[index] ?? null;
			if (existingPhase === "enter") {
				rafId = requestAnimationFrame(() => {
					rafId = null;
					this._contentTransition = { ...this._contentTransition, [index]: "enter-active" };
					enterActiveTimer = setTimeout(() => {
						this._contentTransition = { ...this._contentTransition, [index]: "enter-done" };
					}, ENTER_TIMEOUT_MS);
				});
				return () => {
					rafId && cancelAnimationFrame(rafId);
					enterActiveTimer && clearTimeout(enterActiveTimer);
				};
			}
			return () => {};
		}

		if (selected && prev !== true) {
			map.set(index, selected);
			// Advance "enter" → "enter-active" after paint.
			rafId = requestAnimationFrame(() => {
				rafId = null;
				this._contentTransition = { ...this._contentTransition, [index]: "enter-active" };
				enterActiveTimer = setTimeout(() => {
					this._contentTransition = { ...this._contentTransition, [index]: "enter-done" };
				}, ENTER_TIMEOUT_MS);
			});
			return () => {
				rafId && cancelAnimationFrame(rafId);
				enterActiveTimer && clearTimeout(enterActiveTimer);
			};
		}

		if (!selected && prev === true) {
			map.set(index, selected);
			// Advance "exit" → "exit-active" after paint.
			rafId = requestAnimationFrame(() => {
				rafId = null;
				this._contentTransition = { ...this._contentTransition, [index]: "exit-active" };
				exitActiveTimer = setTimeout(() => {
					this._contentTransition = { ...this._contentTransition, [index]: "exit-done" };
					doneTimer = setTimeout(() => {
						this._contentTransition = { ...this._contentTransition, [index]: null };
					}, 0);
				}, EXIT_TIMEOUT_MS);
			});
			return () => {
				rafId && cancelAnimationFrame(rafId);
				exitActiveTimer && clearTimeout(exitActiveTimer);
				doneTimer && clearTimeout(doneTimer);
			};
		}

		map.set(index, selected);
		return () => {};
	});

	rootElement = null;

	/** Root `div` ref for roving `focusHeader` / `#id` queries. */
	setRootRef = modifier((element) => {
		this.rootElement = element;
		return () => {
			this.rootElement = null;
		};
	});

	@action
	changeActiveIndex(item, index, originalEvent) {
		if (item?.disabled) {
			originalEvent?.preventDefault?.();
			return;
		}
		const selected = this.isTabSelected(index);
		if (selected) {
			this.args.onTabClose?.({ originalEvent, index });
		} else {
			this.args.onTabOpen?.({ originalEvent, index });
		}
		let newIndex;
		if (this.multiple) {
			const current = Array.isArray(this.activeIndexState) ? [...this.activeIndexState] : [];
			newIndex = selected
				? current.filter((i) => i !== Number(index))
				: [...current, Number(index)].sort((a, b) => a - b);
		} else {
			newIndex = selected ? null : Number(index);
		}
		this.args.onTabChange?.({ originalEvent, index: newIndex });

		// Kick off transition phases before the state change re-renders so the
		// content element mounts/unmounts with the correct class already set.
		if (!selected) {
			// Opening: set "enter" now; modifier will advance to "enter-active" after paint.
			this._contentTransition = { ...this._contentTransition, [index]: "enter" };
		} else {
			// Closing: set "exit" now so shouldRenderToggleableContent keeps content mounted.
			this._contentTransition = { ...this._contentTransition, [index]: "exit" };
		}

		if (!this.isControlled) {
			this._activeIndex = newIndex;
		}
		originalEvent?.preventDefault?.();
		originalEvent?.stopPropagation?.();
	}

	@action
	onHeaderKeyDown(item, index, originalEvent) {
		switch (originalEvent.code) {
			case "ArrowDown": {
				const next = this.findNextHeader(index);
				next != null && this.focusHeader(next);
				originalEvent.preventDefault();
				break;
			}
			case "ArrowUp": {
				const prev = this.findPrevHeader(index);
				prev != null && this.focusHeader(prev);
				originalEvent.preventDefault();
				break;
			}
			case "Home": {
				this.focusHeader(0);
				originalEvent.preventDefault();
				break;
			}
			case "End": {
				this.focusHeader(this.items.length - 1);
				originalEvent.preventDefault();
				break;
			}
			case "Enter":
			case "NumpadEnter":
			case "Space":
				this.changeActiveIndex(item, index, originalEvent);
				originalEvent.preventDefault();
				break;
			default:
				break;
		}
	}

	findNextHeader(fromIndex) {
		for (let i = fromIndex + 1; i < this.items.length; i++) {
			if (!this.items[i]?.disabled) return i;
		}
		return null;
	}

	findPrevHeader(fromIndex) {
		for (let i = fromIndex - 1; i >= 0; i--) {
			if (!this.items[i]?.disabled) return i;
		}
		return null;
	}

	@action
	focusHeader(index) {
		const id = this.getHeaderId(index);
		const el = this.rootElement?.querySelector?.(`#${id}`);
		el?.focus?.();
	}

	@action
	getContentClasses(item) {
		const parts = ["accordion-content"];
		this.args.contentClass && parts.push(this.args.contentClass);
		item?.contentClass && parts.push(item.contentClass);
		return joinClassNames(...parts);
	}

	@action
	getContentMeta(item, index) {
		return {
			active: this.isTabSelected(index),
			disabled: Boolean(item?.disabled)
		};
	}

	<template>
		<div
			id={{this.rootId}}
			class={{this.rootClasses}}
			role="region"
			aria-label={{@ariaLabel}}
			data-qa={{this.rootDataQa}}
			{{this.setRootRef}}
			...attributes
		>
			{{#each this.items as |item index|}}
				<div class={{this.getTabClasses item index}}>
					<div class={{this.getHeaderClasses item index}}>
						<a
							id={{this.getHeaderId index}}
							href="#{{this.getContentId index}}"
							class={{this.headerActionClasses}}
							role="button"
							tabindex={{if item.disabled "-1" "0"}}
							aria-expanded={{this.isTabSelected index}}
							aria-controls={{this.getContentId index}}
							aria-disabled={{if item.disabled "true" "false"}}
							data-qa={{this.getDataQa "trigger"}}
							{{on "click" (fn this.changeActiveIndex item index)}}
							{{on "keydown" (fn this.onHeaderKeyDown item index)}}
						>
							{{#unless this.isToggleIconRight}}
								<span
									class="accordion-header-icon
										{{if (this.isTabSelected index) 'expanded' 'collapsed'}}"
									aria-hidden="true"
								>
									<UlxIcon
										@type="font"
										@size="s18"
										@iconName={{if
											(this.isTabSelected index)
											this.collapseIconName
											this.expandIconName
										}}
										@componentClass="bs-icons1"
									/>
								</span>
							{{/unless}}
							{{#if item.iconName}}
								<span class="{{this.baseClass}}-header-indicator" aria-hidden="true">
									<UlxIcon
										@type="font"
										@iconName={{item.iconName}}
										@componentClass="bs-icons1"
										@size={{this.getHeaderIconSize item}}
									/>
								</span>
							{{/if}}
							{{#if (has-block "header")}}
								<div class="accordion-header-title">
									{{yield item index (this.getContentMeta item index) to="header"}}
								</div>
							{{else}}
								<span class="accordion-header-title">{{item.header}}</span>
							{{/if}}
							{{#if this.isToggleIconRight}}
								<span
									class="accordion-header-icon right
										{{if (this.isTabSelected index) 'expanded' 'collapsed'}}"
									aria-hidden="true"
								>
									<UlxIcon
										@type="font"
										@size="s18"
										@iconName={{if
											(this.isTabSelected index)
											this.collapseIconName
											this.expandIconName
										}}
										@componentClass="bs-icons1"
									/>
								</span>
							{{/if}}
						</a>
					</div>
					{{#if (this.shouldRenderToggleableContent index)}}
						<div
							id={{this.getContentId index}}
							class={{this.getToggleableContentClasses index}}
							role="region"
							aria-labelledby={{this.getHeaderId index}}
							data-qa={{this.getDataQa "content"}}
							{{this.accordionContentTransition index (this.isTabSelected index)}}
						>
							<div class={{this.getContentClasses item}}>
								{{#if (has-block "content")}}
									{{yield item index (this.getContentMeta item index) to="content"}}
								{{else}}
									{{item.content}}
								{{/if}}
							</div>
						</div>
					{{/if}}
				</div>
			{{/each}}
		</div>
	</template>
}
