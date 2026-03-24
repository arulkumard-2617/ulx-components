import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import { guidFor } from "@ember/object/internals";
import { modifier } from "ember-modifier";
import { joinClassNames } from "../../../utils/class-names";
import { getComponentClass } from "../../../utils/component-config";
import { buildDataQa, resolveRootDataQa } from "../../../utils/data-qa";
import { iconParts } from "../../../utils/panelmenu-icon";
import { appendTransitionPhaseClasses } from "../../../utils/panelmenu-transition";
import UlxIcon from "../../elements/ulx-icon/index.gjs";
import UlxPanelmenuSub from "./panelmenu-sub.gjs";

const ENTER_TIMEOUT_MS = 200;
const EXIT_TIMEOUT_MS = 200;

const EXIT_RENDER_PHASES = new Set(["exit", "exit-active", "exit-done"]);

function panelHeightTransition(ms) {
	return `height ${ms}ms ease, transform ${ms}ms ease, opacity ${ms}ms ease`;
}

/**
 * PanelMenu component (ULX).
 *
 * @class UlxPanelmenu
 * @param {Array<Object>} [model=[]] - Menu model (panels with nested items).
 * @param {Object|null} [expandedKeys] - Controlled expansion map: { [key: string]: true }.
 * @param {Function} [onExpandedKeysChange] - Called with next expandedKeys map in controlled mode.
 * @param {Function} [onOpen] - Called when a root panel expands: ({ originalEvent, item }) => void
 * @param {Function} [onClose] - Called when a root panel collapses: ({ originalEvent, item }) => void
 * @param {boolean} [multiple=false] - Allow multiple root panels expanded at once.
 *
 * @param {string} [expandIconName='right-arrow-icon'] - Font icon for collapsed state.
 * @param {string} [collapseIconName='down-arrow-icon'] - Font icon for expanded state.
 * @param {string} [toggleIconSize='s20'] - Size token for submenu expand/collapse icons.
 * @param {string} [itemIconSize='s20'] - Size token for submenu item icons.
 * @param {string} [customClass] - Extra CSS classes.
 * @param {string} [dataQa] - Override root data-qa attribute.
 */
export default class UlxPanelmenu extends Component {
	@tracked _expandedKeys = {};
	@tracked _panelTransitionByKey = {}; // key -> 'enter'|'enter-active'|'enter-done'|'exit'|'exit-active'|'exit-done'|null
	@tracked focusedHeaderKey = null;
	_prevActiveMap = null;
	_expandedKeyByParent = new Map(); // uncontrolled nested sibling-collapse

	rootElement = null;
	setRootRef = modifier((element) => {
		this.rootElement = element;
		// Initialize prev-active map so first user-driven open can animate (unmounted content needs a baseline).
		this._prevActiveMap ??= new Map();
		this.model.forEach((item, index) => {
			const key = this.getPanelKeyFor(item, index);
			if (this._prevActiveMap.has(key)) return;
			this._prevActiveMap.set(key, this.isPanelActive(item, index));
		});
		return () => {
			this.rootElement = null;
		};
	});

	get baseClass() {
		return getComponentClass("panelmenu");
	}

	get rootId() {
		return this.args.id ?? `ulx-panelmenu-${guidFor(this)}`;
	}

	get model() {
		return this.args.model ?? [];
	}

	get isControlled() {
		return this.args.expandedKeys !== undefined && this.args.expandedKeys !== null;
	}

	get expandedKeysState() {
		return this.isControlled ? (this.args.expandedKeys ?? {}) : (this._expandedKeys ?? {});
	}

	get multiple() {
		return Boolean(this.args.multiple);
	}

	get expandIconName() {
		const { expandIconName = "right-arrow-icon" } = this.args;
		return expandIconName;
	}

	get collapseIconName() {
		const { collapseIconName = "down-arrow-icon" } = this.args;
		return collapseIconName;
	}

	get toggleIconSize() {
		const { toggleIconSize = "s20" } = this.args;
		return toggleIconSize;
	}

	get itemIconSize() {
		const { itemIconSize = "s20" } = this.args;
		return itemIconSize;
	}

	@action
	resolveIconSize(meta, fallback) {
		return meta?.size ?? fallback ?? null;
	}

	get rootClasses() {
		const { customClass } = this.args;
		return joinClassNames(this.baseClass, customClass);
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "panelmenu");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	@action
	isItemVisible(item) {
		return item?.visible !== false;
	}

	@action
	isItemDisabled(item) {
		return Boolean(item?.disabled);
	}

	@action
	hasChildren(item) {
		return Array.isArray(item?.items) && item.items.length > 0;
	}

	@action
	getPanelKeyFor(item, index) {
		return item?.key ?? `${index}`;
	}

	@action
	getPanelId(item, index) {
		return item?.id ?? `${this.rootId}_${index}`;
	}

	@action
	getHeaderId(item, index) {
		return `${this.getPanelId(item, index)}_header`;
	}

	@action
	getContentId(item, index) {
		return `${this.getPanelId(item, index)}_content`;
	}

	@action
	isPanelActive(item, index) {
		const key = this.getPanelKeyFor(item, index);
		return Boolean(this.expandedKeysState?.[key]);
	}

	getPrevActive(key) {
		return this._prevActiveMap?.get(key);
	}

	@action
	shouldRenderPanelContent(item, index) {
		const key = this.getPanelKeyFor(item, index);
		const active = this.isPanelActive(item, index);
		const phase = this._panelTransitionByKey[key] ?? null;
		const prev = this.getPrevActive(key);

		return active || EXIT_RENDER_PHASES.has(phase) || (prev === true && !active);
	}

	@action
	getPanelHeaderClasses(item, index) {
		const key = this.getPanelKeyFor(item, index);
		const active = this.isPanelActive(item, index) && this.hasChildren(item);
		return joinClassNames(
			"panelmenu-header",
			active && "active",
			this.focusedHeaderKey === key && "focused",
			this.isItemDisabled(item) && "disabled"
		);
	}

	@action
	onHeaderFocus(item, index) {
		this.focusedHeaderKey = this.getPanelKeyFor(item, index);
	}

	@action
	onHeaderBlur(item, index) {
		const key = this.getPanelKeyFor(item, index);
		this.focusedHeaderKey === key && (this.focusedHeaderKey = null);
	}

	@action
	getPanelToggleableContentClasses(item, index) {
		const key = this.getPanelKeyFor(item, index);
		const active = this.isPanelActive(item, index);
		const phaseRaw = this._panelTransitionByKey[key] ?? null;
		const prev = this.getPrevActive(key);

		// If the panel state flipped, ignore the previous stable phase so the correct
		// initial class ("enter"/"exit") can apply on the first render.
		const phase =
			active && typeof phaseRaw === "string" && phaseRaw.startsWith("exit")
				? null
				: !active && typeof phaseRaw === "string" && phaseRaw.startsWith("enter")
					? null
					: phaseRaw;

		const parts = ["panelmenu-toggleable-content"];
		!active && parts.push("panelmenu-toggleable-content-collapsed");

		const effectivePhase =
			phase ??
			(active && prev === false ? "enter" : null) ??
			(!active && prev === true ? "exit" : null);

		appendTransitionPhaseClasses(parts, effectivePhase);

		return joinClassNames(...parts);
	}

	panelContentTransition = modifier((element, [key, active]) => {
		const map = this._prevActiveMap ?? (this._prevActiveMap = new Map());
		const prev = map.get(key);
		let rafId = null;
		let activeTimer = null;
		let doneTimer = null;

		const clearInlineCollapseStyles = () => {
			element.style.height = "";
			element.style.transition = "";
		};

		// No appear animation.
		if (prev === undefined) {
			map.set(key, active);
			return () => {};
		}

		if (active && prev !== true) {
			map.set(key, active);
			// Ensure layout height animates (prevents "jump" when unmounting).
			element.style.height = "0px";
			rafId = requestAnimationFrame(() => {
				rafId = null;
				const targetHeight = element.scrollHeight;
				element.style.transition = panelHeightTransition(ENTER_TIMEOUT_MS);
				element.style.height = `${targetHeight}px`;
				this._panelTransitionByKey = { ...this._panelTransitionByKey, [key]: "enter-active" };
				activeTimer = setTimeout(() => {
					this._panelTransitionByKey = { ...this._panelTransitionByKey, [key]: "enter-done" };
					clearInlineCollapseStyles();
				}, ENTER_TIMEOUT_MS);
			});
			return () => {
				rafId && cancelAnimationFrame(rafId);
				activeTimer && clearTimeout(activeTimer);
				doneTimer && clearTimeout(doneTimer);
				clearInlineCollapseStyles();
			};
		}

		if (!active && prev === true) {
			map.set(key, active);
			// Lock current height so we can animate to 0 while exiting.
			element.style.height = `${element.scrollHeight}px`;
			rafId = requestAnimationFrame(() => {
				rafId = null;
				element.style.transition = panelHeightTransition(EXIT_TIMEOUT_MS);
				element.style.height = "0px";
				this._panelTransitionByKey = { ...this._panelTransitionByKey, [key]: "exit-active" };
				activeTimer = setTimeout(() => {
					this._panelTransitionByKey = { ...this._panelTransitionByKey, [key]: "exit-done" };
					// Unmount on exit after the final state is applied.
					doneTimer = setTimeout(() => {
						this._panelTransitionByKey = { ...this._panelTransitionByKey, [key]: null };
					}, 0);
					clearInlineCollapseStyles();
				}, EXIT_TIMEOUT_MS);
			});
			return () => {
				rafId && cancelAnimationFrame(rafId);
				activeTimer && clearTimeout(activeTimer);
				doneTimer && clearTimeout(doneTimer);
				clearInlineCollapseStyles();
			};
		}

		map.set(key, active);
		clearInlineCollapseStyles();
		return () => {};
	});

	@action
	updateExpandedKeys(next) {
		if (this.isControlled) {
			this.args.onExpandedKeysChange?.(next);
		} else {
			this._expandedKeys = next;
		}
	}

	@action
	onToggle({ key, expanded, parentKey }) {
		// Nested toggles: when uncontrolled, collapse siblings under same parent.
		let next = { ...this.expandedKeysState };

		if (expanded) {
			if (!this.isControlled && parentKey) {
				const prevKey = this._expandedKeyByParent.get(parentKey);
				if (prevKey && prevKey !== key) {
					delete next[prevKey];
				}
				this._expandedKeyByParent.set(parentKey, key);
			}
			next[key] = true;
		} else {
			delete next[key];
			if (!this.isControlled && parentKey) {
				const prevKey = this._expandedKeyByParent.get(parentKey);
				prevKey === key && this._expandedKeyByParent.delete(parentKey);
			}
		}

		this.updateExpandedKeys(next);
	}

	@action
	toggleRootPanel(item, index, originalEvent) {
		const key = this.getPanelKeyFor(item, index);
		const active = this.isPanelActive(item, index);
		const willExpand = !active;
		let next = { ...this.expandedKeysState };

		// Single expansion at root: close other root panels; nested keys stay in `next` for reopen.
		if (!this.multiple) {
			const rootKeys = new Set(this.model.map((rootItem, i) => this.getPanelKeyFor(rootItem, i)));
			for (const rootKey of rootKeys) {
				rootKey !== key && delete next[rootKey];
			}
		}

		willExpand ? (next[key] = true) : delete next[key];

		this.updateExpandedKeys(next);
		willExpand
			? this.args.onOpen?.({ originalEvent, item })
			: this.args.onClose?.({ originalEvent, item });
	}

	@action
	onHeaderClick(item, index, originalEvent) {
		if (this.isItemDisabled(item)) {
			originalEvent?.preventDefault?.();
			return;
		}

		if (typeof item?.command === "function") {
			item.command({ originalEvent, item });
		}

		this.hasChildren(item) && this.toggleRootPanel(item, index, originalEvent);

		if (!item?.url) {
			originalEvent?.preventDefault?.();
			originalEvent?.stopPropagation?.();
		}
	}

	@action
	onHeaderKeyDown(item, index, originalEvent) {
		switch (originalEvent.code) {
			case "ArrowDown":
				this.focusNextHeader(index);
				originalEvent.preventDefault();
				break;
			case "ArrowUp":
				this.focusPrevHeader(index);
				originalEvent.preventDefault();
				break;
			case "Home":
				this.focusHeader(0);
				originalEvent.preventDefault();
				break;
			case "End":
				this.focusHeader(this.model.length - 1);
				originalEvent.preventDefault();
				break;
			case "Enter":
			case "NumpadEnter":
			case "Space":
				this.onHeaderClick(item, index, originalEvent);
				originalEvent.preventDefault();
				break;
			default:
				break;
		}
	}

	@action
	focusHeader(index) {
		const item = this.model[index];
		if (!item || this.isItemDisabled(item) || !this.isItemVisible(item)) return;
		const id = this.getHeaderId(item, index);
		const el = this.rootElement?.querySelector?.(`#${id}`);
		el?.focus?.();
	}

	@action
	focusNextHeader(fromIndex) {
		for (let i = fromIndex + 1; i < this.model.length; i++) {
			const item = this.model[i];
			if (item && this.isItemVisible(item) && !this.isItemDisabled(item)) {
				return this.focusHeader(i);
			}
		}
		return this.focusHeader(0);
	}

	@action
	focusPrevHeader(fromIndex) {
		for (let i = fromIndex - 1; i >= 0; i--) {
			const item = this.model[i];
			if (item && this.isItemVisible(item) && !this.isItemDisabled(item)) {
				return this.focusHeader(i);
			}
		}
		return this.focusHeader(this.model.length - 1);
	}

	@action
	getHeaderIconMeta(item) {
		return iconParts(item?.icon);
	}

	<template>
		<div
			id={{this.rootId}}
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			{{this.setRootRef}}
			...attributes
		>
			{{#each this.model as |item index|}}
				{{#if (this.isItemVisible item)}}
					<div
						id={{this.getPanelId item index}}
						class="panelmenu-panel"
						data-qa={{this.getDataQa "panel"}}
					>
						<div
							id={{this.getHeaderId item index}}
							class={{this.getPanelHeaderClasses item index}}
							data-qa={{this.getDataQa "header"}}
							role="button"
							aria-label={{item.label}}
							aria-expanded={{if (this.isPanelActive item index) "true" "false"}}
							aria-disabled={{if item.disabled "true" "false"}}
							aria-controls={{this.getContentId item index}}
							tabindex={{if item.disabled "-1" "0"}}
							{{on "click" (fn this.onHeaderClick item index)}}
							{{on "keydown" (fn this.onHeaderKeyDown item index)}}
							{{on "focusin" (fn this.onHeaderFocus item index)}}
							{{on "focusout" (fn this.onHeaderBlur item index)}}
						>
							<div class="panelmenu-header-content" data-qa={{this.getDataQa "header-content"}}>
								<a href={{if item.url item.url "#"}} tabindex="-1" class="panelmenu-header-action">
									{{#if item.template}}
										{{component
											item.template
											item=item
											active=(this.isPanelActive item index)
											hasChildren=(this.hasChildren item)
											onClick=(fn this.onHeaderClick item index)
										}}
									{{else}}
										{{#if (this.hasChildren item)}}
											<span class="panelmenu-header-toggle-icon" aria-hidden="true">
												<UlxIcon
													@type="font"
													@iconName={{if
														(this.isPanelActive item index)
														this.collapseIconName
														this.expandIconName
													}}
													@componentClass="bs-icons1"
													@size={{this.toggleIconSize}}
												/>
											</span>
										{{/if}}

										{{#if item.icon}}
											{{#let (this.getHeaderIconMeta item) as |meta|}}
												<span class="panelmenu-header-icon" aria-hidden="true">
													<UlxIcon
														@type="font"
														@iconName={{meta.name}}
														@componentClass={{meta.base}}
														@size={{this.resolveIconSize meta this.itemIconSize}}
													/>
												</span>
											{{/let}}
										{{/if}}

										<span class="panelmenu-header-label">{{item.label}}</span>
									{{/if}}
								</a>
							</div>
						</div>

						{{#if (this.hasChildren item)}}
							{{#if (this.shouldRenderPanelContent item index)}}
								<div
									id={{this.getContentId item index}}
									class={{this.getPanelToggleableContentClasses item index}}
									data-qa={{this.getDataQa "content"}}
									role="region"
									aria-labelledby={{this.getHeaderId item index}}
									{{this.panelContentTransition
										(this.getPanelKeyFor item index)
										(this.isPanelActive item index)
									}}
								>
									<div class="panelmenu-content">
										<UlxPanelmenuSub
											@panelId={{this.getPanelId item index}}
											@items={{item.items}}
											@level={{0}}
											@expandedKeys={{this.expandedKeysState}}
											@onToggle={{this.onToggle}}
											@expandIconName={{this.expandIconName}}
											@collapseIconName={{this.collapseIconName}}
											@toggleIconSize={{this.toggleIconSize}}
											@itemIconSize={{this.itemIconSize}}
										/>
									</div>
								</div>
							{{/if}}
						{{/if}}
					</div>
				{{/if}}
			{{/each}}
		</div>
	</template>
}
