import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { fn } from "@ember/helper";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

const ENTER_TIMEOUT_MS = 200;
const EXIT_TIMEOUT_MS = 200;

function itemKey(item, fallbackKey) {
	return item?.key ?? fallbackKey;
}

function iconParts(icon) {
	if (!icon || typeof icon !== "string") return { base: null, name: null };
	const parts = icon.trim().split(/\s+/);
	if (parts.length === 0) return { base: null, name: null };

	// Support icon strings that include an optional size token at the end:
	// e.g. "bs-icons1 add-icon-01 s20"
	const sizeToken = parts[parts.length - 1];
	const hasSize =
		/^s\d+$/.test(sizeToken) ||
		/^m\d+$/.test(sizeToken) ||
		/^l\d+$/.test(sizeToken) ||
		/-size$/.test(sizeToken);

	const base = parts.length > 1 ? parts[0] : null;
	const nameIndex = hasSize ? parts.length - 2 : parts.length - 1;
	const name = nameIndex >= 0 ? parts[nameIndex] : null;
	const size = hasSize ? sizeToken : null;

	return { base, name, size };
}

/**
 * Internal recursive sub-menu renderer for `UlxPanelmenu`.
 *
 * @private
 */
export default class UlxPanelmenuSub extends Component {
	@tracked _transitionByKey = {}; // key -> 'enter'|'enter-active'|'enter-done'|'exit'|'exit-active'|'exit-done'|null
	@tracked focusedKey = null;
	_prevExpandedMap = null;

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

	get level() {
		return this.args.level ?? 0;
	}

	get nextLevel() {
		return this.level + 1;
	}

	get ariaLevel() {
		return this.level + 1;
	}

	get items() {
		return this.args.items ?? [];
	}

	get listRole() {
		return this.level === 0 ? "tree" : "group";
	}

	get listClass() {
		return this.level === 0 ? "panelmenu-root-list" : "panelmenu-submenu-list";
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
	isItemSeparator(item) {
		return Boolean(item?.separator);
	}

	@action
	hasChildren(item) {
		return Array.isArray(item?.items) && item.items.length > 0;
	}

	@action
	getKeyFor(item, index) {
		const parentKey = this.args.parentKey ?? "";
		const fallback = parentKey ? `${parentKey}_${index}` : `${index}`;
		return itemKey(item, fallback);
	}

	@action
	isExpanded(item, index) {
		const key = this.getKeyFor(item, index);
		return Boolean(this.args.expandedKeys?.[key]);
	}

	@action
	onItemClick(item, index, originalEvent) {
		if (this.isItemDisabled(item)) {
			originalEvent?.preventDefault?.();
			return;
		}

		const key = this.getKeyFor(item, index);
		const expanded = this.isExpanded(item, index);

		// Ensure first-time expansion animates: the content element mounts only after we toggle,
		// so we need a baseline prev state before the modifier runs.
		const prevMap = this._prevExpandedMap ?? (this._prevExpandedMap = new Map());
		!prevMap.has(key) && prevMap.set(key, expanded);

		if (typeof item?.command === "function") {
			item.command({ originalEvent, item });
		}

		// Only toggle when children exist (matches PanelMenuSub behavior).
		this.hasChildren(item) &&
			this.args.onToggle?.({
				item,
				key,
				expanded: !expanded,
				parentKey: this.args.parentKey ?? ""
			});

		if (!item?.url) {
			originalEvent?.preventDefault?.();
			originalEvent?.stopPropagation?.();
		}
	}

	@action
	onItemKeyDown(item, index, originalEvent) {
		switch (originalEvent.code) {
			case "Enter":
			case "NumpadEnter":
			case "Space":
				this.onItemClick(item, index, originalEvent);
				originalEvent.preventDefault();
				break;
			default:
				break;
		}
	}

	@action
	getItemClasses(item, index) {
		const key = this.getKeyFor(item, index);
		const parts = ["panelmenu-item"];
		this.isExpanded(item, index) && parts.push("active");
		this.focusedKey === key && parts.push("focused");
		this.isItemDisabled(item) && parts.push("disabled");
		return parts.filter(Boolean).join(" ");
	}

	@action
	getItemContentClasses(item, index) {
		const parts = ["panelmenu-item-content"];
		this.isExpanded(item, index) && parts.push("active");
		return parts.filter(Boolean).join(" ");
	}

	@action
	getToggleableContentClasses(item, index) {
		const active = this.isExpanded(item, index);
		const key = this.getKeyFor(item, index);
		const phaseRaw = this._transitionByKey[key] ?? null;
		const prev = this._prevExpandedMap?.get(key);

		// If the expanded state flipped, ignore the previous stable phase so the correct
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

		// Match react-transition-group CSSTransition semantics:
		// - enter-active includes both "enter" and "enter-active"
		// - exit-active includes both "exit" and "exit-active"
		if (effectivePhase === "enter") parts.push("enter");
		if (effectivePhase === "enter-active") parts.push("enter", "enter-active");
		if (effectivePhase === "enter-done") parts.push("enter-done");
		if (effectivePhase === "exit") parts.push("exit");
		if (effectivePhase === "exit-active") parts.push("exit", "exit-active");
		if (effectivePhase === "exit-done") parts.push("exit-done");

		return parts.filter(Boolean).join(" ");
	}

	@action
	shouldRenderSubmenu(item, index) {
		const key = this.getKeyFor(item, index);
		const expanded = this.isExpanded(item, index);
		const phase = this._transitionByKey[key] ?? null;
		const prev = this._prevExpandedMap?.get(key);

		return (
			expanded ||
			phase === "exit" ||
			phase === "exit-active" ||
			phase === "exit-done" ||
			(prev === true && !expanded)
		);
	}

	get expandIconName() {
		return this.args.expandIconName ?? "right-arrow-icon";
	}

	get collapseIconName() {
		return this.args.collapseIconName ?? "down-arrow-icon";
	}

	@action
	getItemIconMeta(item) {
		return iconParts(item?.icon);
	}

	@action
	onLinkFocus(item, index) {
		this.focusedKey = this.getKeyFor(item, index);
	}

	@action
	onLinkBlur(item, index) {
		const key = this.getKeyFor(item, index);
		this.focusedKey === key && (this.focusedKey = null);
	}

	toggleableContentTransition = modifier((element, [key, expanded]) => {
		const map = this._prevExpandedMap ?? (this._prevExpandedMap = new Map());
		const prev = map.get(key);
		let rafId = null;
		let activeTimer = null;
		let doneTimer = null;

		const clearInlineCollapseStyles = () => {
			element.style.height = "";
			element.style.transition = "";
		};

		// No "appear" animation on first render.
		if (prev === undefined) {
			map.set(key, expanded);
			return () => {};
		}

		if (expanded && prev !== true) {
			map.set(key, expanded);
			// Ensure layout height animates (prevents "jump" when unmounting).
			element.style.height = "0px";
			rafId = requestAnimationFrame(() => {
				rafId = null;
				const targetHeight = element.scrollHeight;
				element.style.transition = `height ${ENTER_TIMEOUT_MS}ms ease, transform ${ENTER_TIMEOUT_MS}ms ease, opacity ${ENTER_TIMEOUT_MS}ms ease`;
				element.style.height = `${targetHeight}px`;
				this._transitionByKey = { ...this._transitionByKey, [key]: "enter-active" };
				activeTimer = setTimeout(() => {
					this._transitionByKey = { ...this._transitionByKey, [key]: "enter-done" };
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

		if (!expanded && prev === true) {
			map.set(key, expanded);
			// Lock current height so we can animate to 0 while exiting.
			element.style.height = `${element.scrollHeight}px`;
			rafId = requestAnimationFrame(() => {
				rafId = null;
				element.style.transition = `height ${EXIT_TIMEOUT_MS}ms ease, transform ${EXIT_TIMEOUT_MS}ms ease, opacity ${EXIT_TIMEOUT_MS}ms ease`;
				element.style.height = "0px";
				this._transitionByKey = { ...this._transitionByKey, [key]: "exit-active" };
				activeTimer = setTimeout(() => {
					this._transitionByKey = { ...this._transitionByKey, [key]: "exit-done" };
					// Unmount on exit after the final state is applied.
					doneTimer = setTimeout(() => {
						this._transitionByKey = { ...this._transitionByKey, [key]: null };
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

		map.set(key, expanded);
		clearInlineCollapseStyles();
		return () => {};
	});

	<template>
		<ul class={{this.listClass}} role={{this.listRole}} ...attributes>
			{{#each this.items as |item index|}}
				{{#if (this.isItemVisible item)}}
					{{#if (this.isItemSeparator item)}}
						<li class="panelmenu-separator" role="separator"></li>
					{{else}}
						<li
							id="{{@panelId}}_{{this.getKeyFor item index}}"
							class={{this.getItemClasses item index}}
							role="treeitem"
							aria-label={{item.label}}
							aria-disabled={{if item.disabled "true" "false"}}
							aria-expanded={{if
								(this.hasChildren item)
								(if (this.isExpanded item index) "true" "false")
							}}
							aria-level={{this.ariaLevel}}
						>
							<div class={{this.getItemContentClasses item index}}>
								<a
									href={{if item.url item.url "#"}}
									class="panelmenu-item-link"
									tabindex={{if item.disabled "-1" "0"}}
									{{on "click" (fn this.onItemClick item index)}}
									{{on "keydown" (fn this.onItemKeyDown item index)}}
									{{on "focus" (fn this.onLinkFocus item index)}}
									{{on "blur" (fn this.onLinkBlur item index)}}
								>
									{{#if item.template}}
										{{component
											item.template
											item=item
											active=(this.isExpanded item index)
											hasChildren=(this.hasChildren item)
											onClick=(fn this.onItemClick item index)
										}}
									{{else}}
										{{#if (this.hasChildren item)}}
											<span class="panelmenu-submenu-icon" aria-hidden="true">
												<UlxIcon
													@type="font"
													@iconName={{if
														(this.isExpanded item index)
														this.collapseIconName
														this.expandIconName
													}}
													@componentClass="bs-icons1"
													@size={{this.toggleIconSize}}
												/>
											</span>
										{{/if}}

										{{#if item.icon}}
											{{#let (this.getItemIconMeta item) as |meta|}}
												<span class="panelmenu-item-icon" aria-hidden="true">
													<UlxIcon
														@type="font"
														@iconName={{meta.name}}
														@componentClass={{meta.base}}
														@size={{this.resolveIconSize meta this.itemIconSize}}
													/>
												</span>
											{{/let}}
										{{/if}}

										<span class="panelmenu-item-text">{{item.label}}</span>
									{{/if}}
								</a>
							</div>

							{{#if (this.hasChildren item)}}
								{{#if (this.shouldRenderSubmenu item index)}}
									<div
										class={{this.getToggleableContentClasses item index}}
										{{this.toggleableContentTransition
											(this.getKeyFor item index)
											(this.isExpanded item index)
										}}
									>
										<UlxPanelmenuSub
											@panelId={{@panelId}}
											@items={{item.items}}
											@level={{this.nextLevel}}
											@parentKey={{this.getKeyFor item index}}
											@expandedKeys={{@expandedKeys}}
											@onToggle={{@onToggle}}
											@expandIconName={{@expandIconName}}
											@collapseIconName={{@collapseIconName}}
											@toggleIconSize={{this.toggleIconSize}}
											@itemIconSize={{this.itemIconSize}}
										/>
									</div>
								{{/if}}
							{{/if}}
						</li>
					{{/if}}
				{{/if}}
			{{/each}}
		</ul>
	</template>
}
