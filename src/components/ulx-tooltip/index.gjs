import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { inject as service } from "@ember/service";
import { modifier } from "ember-modifier";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import overlayDismiss from "../../modifiers/overlay-dismiss";
import {
	applyBodyAbsoluteFromViewport,
	getOverlayZIndexAboveMask
} from "../../utils/overlay-helpers";

/** Pixel gap between trigger and tooltip (matches tooltip arrow offset in styles). */
const GAP = 8;

/** When the trigger sits inside a floating overlay, stack above modals/slidepanes. */
const TOOLTIP_STACKING_ANCESTOR_SELECTOR =
	".ulx-dialog, .ulx-slidepane, .ulx-popup, .ulx-tieredmenu, .dropdown-panel, .ulx-multiselect-panel, .ulx-datatable-filter-overlay-wrapper";

const DEFAULT_POSITION = "bottom";

/**
 * Viewport-space top/left for the tooltip panel; unknown `position` uses the same geometry as `right`.
 * @param {DOMRect} triggerRect - Trigger bounding rect
 * @param {number} tooltipWidth
 * @param {number} tooltipHeight
 * @param {string} position
 */
function computeTooltipPlacement(triggerRect, tooltipWidth, tooltipHeight, position) {
	const {
		top: triggerTop,
		bottom: triggerBottom,
		left: triggerLeft,
		right: triggerRight,
		width: triggerWidth,
		height: triggerHeight
	} = triggerRect;
	const placements = {
		top: () => ({
			top: triggerTop - tooltipHeight - GAP,
			left: triggerLeft + (triggerWidth - tooltipWidth) / 2
		}),
		bottom: () => ({
			top: triggerBottom + GAP,
			left: triggerLeft + (triggerWidth - tooltipWidth) / 2
		}),
		left: () => ({
			top: triggerTop + (triggerHeight - tooltipHeight) / 2,
			left: triggerLeft - tooltipWidth - GAP
		}),
		right: () => ({
			top: triggerTop + (triggerHeight - tooltipHeight) / 2,
			left: triggerRight + GAP
		})
	};
	return (placements[position] ?? placements.right)();
}

const NATIVELY_FOCUSABLE = /^(BUTTON|INPUT|SELECT|TEXTAREA|A|SUMMARY)$/;

/** True if the element can receive focus (native controls or tabindex >= 0). */
function isFocusable(el) {
	if (!el || typeof el.tabIndex !== "number") return false;
	if (el.tabIndex >= 0) return true;
	const tag = el.tagName;
	if (NATIVELY_FOCUSABLE.test(tag)) {
		if (tag === "A") return el.hasAttribute("href");
		return !el.disabled;
	}
	return false;
}

/** Adds tabindex="0" so focus/both modes can open the tooltip from the keyboard. */
function ensureFocusableForTooltip(element) {
	if (element.hasAttribute("tabindex")) return false;
	if (isFocusable(element)) return false;
	element.setAttribute("tabindex", "0");
	return true;
}

/**
 * Tooltip module component. Wraps a trigger element and shows a tooltip on hover or focus.
 * Uses design-system tooltip classes. Renders the tooltip in `appendTo` (default `document.body`).
 *
 * ## WCAG
 * - Trigger receives aria-describedby when tooltip is visible, pointing to the tooltip id.
 * - Tooltip has role="tooltip" and a stable id.
 * - Escape closes the tooltip when @closeOnEscape is true.
 * - For event "focus" or "both", non-focusable triggers (e.g. div, icon) get tabindex="0" automatically for WCAG.
 *
 * @class UlxTooltip
 * @param {string} [content] - Tooltip text. Ignored when using <:content> block.
 * @param {string} [position='bottom'] - Position: 'top' | 'right' | 'bottom' | 'left'
 * @param {string} [event='both'] - When to show: 'hover' | 'focus' | 'both'. Default 'both' for WCAG (tooltip on keyboard focus).
 * @param {number} [showDelay=0] - Delay in ms before showing
 * @param {number} [hideDelay=0] - Delay in ms before hiding
 * @param {boolean} [closeOnEscape=false] - When true, Escape key closes the tooltip
 * @param {boolean} [disabled=false] - When true, tooltip never shows
 * @param {boolean} [showOnDisabled=false] - When true, show tooltip even when trigger is disabled (wraps trigger)
 * @param {boolean} [autoHide=true] - When true, tooltip hides when pointer leaves trigger. When false, tooltip is interactive (can hover over it)
 * @param {string} [customClass] - Additional CSS class on the tooltip root
 * @param {HTMLElement|string} [appendTo] - Where to mount the tooltip (default document.body)
 * @param {number} [zIndex] - Overlay z-index. Defaults above the topmost modal/slidepane when one is open.
 * @param {Function} [onShow] - Callback when tooltip is shown
 * @param {Function} [onHide] - Callback when tooltip is hidden
 * @param {Function} [onBeforeShow] - Callback before show; return false to prevent show
 * @param {Function} [onBeforeHide] - Callback before hide; return false to prevent hide
 * @param {string} [dataQa] - Override root data-qa attribute
 * @block default - Trigger element. Apply the yielded modifier to your element (e.g. as |attach| then <button {{attach}}>). Tooltip is rendered in appendTo (body by default), not wrapping the trigger.
 * @block trigger - Optional. Use with <:content>; apply the yielded modifier to the trigger element (e.g. as |attach| then {{attach}}).
 * @block content - Optional rich tooltip content. When present, @content is ignored.
 *
 * The portaled tooltip root accepts `...attributes` (e.g. extra `aria-*` or `data-*` from the caller).
 */
export default class UlxTooltip extends Component {
	@service modalStack;

	@tracked visible = false;
	@tracked positionState = "bottom";
	triggerElement = null;
	tooltipElement = null;
	_showTimeout = null;
	_hideTimeout = null;
	/** When `autoHide` is false, moving onto the tooltip sets this false so trigger `mouseleave` does not hide prematurely. */
	_allowHide = true;

	get tooltipId() {
		return `ulx-tooltip-${guidFor(this)}`;
	}

	get baseClass() {
		return getComponentClass("tooltip");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "tooltip");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	get rootClasses() {
		const { autoHide = true, customClass } = this.args;

		const parts = [this.baseClass, `position-${this.positionState}`];
		!autoHide && parts.push("interactive");
		customClass && parts.push(customClass);

		return joinClassNames(...parts);
	}

	get appendTarget() {
		if (typeof document === "undefined") return null;
		const to = this.args.appendTo;
		if (to === undefined || to === null) return document.body;
		if (typeof to === "string") return document.querySelector(to) ?? document.body;
		return to ?? document.body;
	}

	get tooltipPosition() {
		return this.args.position ?? DEFAULT_POSITION;
	}

	get eventMode() {
		return this.args.event ?? "both";
	}

	get shouldCloseOnEscape() {
		return this.visible && this.args.closeOnEscape;
	}

	get shouldRenderTooltip() {
		return this.visible && this.appendTarget;
	}

	/** Explicit `@zIndex`, else above modal stack when trigger is in an overlay or a modal is open, else design default. */
	get tooltipZIndex() {
		const { zIndex } = this.args;

		if (typeof zIndex === "number") {
			return zIndex;
		}

		const ownerOverlay = this.triggerElement?.closest(TOOLTIP_STACKING_ANCESTOR_SELECTOR);
		if (ownerOverlay || this.modalStack?.topModal) {
			return getOverlayZIndexAboveMask(this.modalStack);
		}

		return 1090;
	}

	_shouldShowForEvent(eventType) {
		const mode = this.eventMode;
		const byMode = {
			hover: () => eventType === "mouseenter",
			focus: () => eventType === "focus" || eventType === "focusin",
			both: () => eventType === "mouseenter" || eventType === "focus" || eventType === "focusin"
		};
		return (byMode[mode] ?? byMode.both)();
	}

	_shouldHideForEvent(eventType) {
		const mode = this.eventMode;
		const byMode = {
			hover: () => eventType === "mouseleave",
			focus: () => eventType === "blur" || eventType === "focusout",
			both: () => eventType === "mouseleave" || eventType === "blur" || eventType === "focusout"
		};
		return (byMode[mode] ?? byMode.both)();
	}

	@action
	show(event) {
		if (event?.type && !this._shouldShowForEvent(event.type)) return;

		const { disabled = false, showOnDisabled = false } = this.args;
		const target = event?.currentTarget;

		if (target && this._isTriggerDisabled(target) && !showOnDisabled) return;
		if (disabled) return;

		const onBeforeShow = this.args.onBeforeShow;
		if (typeof onBeforeShow === "function") {
			if (onBeforeShow({ originalEvent: event, target }) === false) return;
		}

		this.triggerElement = target ?? this.triggerElement;

		const showDelay = this.args.showDelay ?? 0;
		this._clearTimeouts();

		if (showDelay > 0) {
			this._showTimeout = setTimeout(() => {
				this._showTimeout = null;
				this._doShow(event);
			}, showDelay);
		} else {
			this._doShow(event);
		}
	}

	_doShow(event) {
		this.positionState = this.args.position ?? DEFAULT_POSITION;
		this.visible = true;
		this._allowHide = true;
		this.args.onShow?.({ originalEvent: event, target: this.triggerElement });
	}

	@action
	hide(event) {
		if (event?.type && !this._shouldHideForEvent(event.type)) return;

		/* Interactive tooltip: leaving the trigger alone must not hide until the panel is left (`_allowHide`). */
		if (
			this.args.autoHide === false &&
			event?.type === "mouseleave" &&
			event?.currentTarget === this.triggerElement
		) {
			return;
		}

		this._clearTimeouts();

		const onBeforeHide = this.args.onBeforeHide;
		if (typeof onBeforeHide === "function") {
			if (onBeforeHide({ originalEvent: event, target: this.triggerElement }) === false) return;
		}

		const hideDelay = this.args.hideDelay ?? 0;

		if (hideDelay > 0 && this.visible) {
			this._hideTimeout = setTimeout(() => {
				this._hideTimeout = null;
				if (this.args.autoHide !== false || this._allowHide) {
					this._doHide(event);
				}
			}, hideDelay);
		} else if (this.visible && (this.args.autoHide !== false || this._allowHide)) {
			this._doHide(event);
		}
	}

	_doHide(event) {
		this._setTriggerAriaDescribedBy(null);
		this.visible = false;
		const target = this.triggerElement;
		this.triggerElement = null;
		this.args.onHide?.({ originalEvent: event, target });
	}

	_isTriggerDisabled(element) {
		if (!element) return false;
		return element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
	}

	_clearTimeouts() {
		if (this._showTimeout) clearTimeout(this._showTimeout);
		if (this._hideTimeout) clearTimeout(this._hideTimeout);
		this._showTimeout = null;
		this._hideTimeout = null;
	}

	_setTriggerAriaDescribedBy(id) {
		const el = this.triggerElement;
		if (!el) return;
		if (id) {
			el.setAttribute("aria-describedby", id);
		} else {
			el.removeAttribute("aria-describedby");
		}
	}

	@action
	tooltipMouseEnter() {
		if (this.args.autoHide === false) {
			this._allowHide = false;
		}
	}

	@action
	tooltipMouseLeave(event) {
		if (this.args.autoHide === false) {
			this._allowHide = true;
			this.hide(event);
		}
	}

	/** Used by `overlayDismiss` when `@closeOnEscape` is true. */
	@action
	dismissTooltipFromOverlay(event) {
		this._doHide(event);
	}

	/**
	 * Binds pointer + focus events per `@event`; always registers all four listeners so `show`/`hide`
	 * can no-op by event type. May inject `tabindex="0"` for focus/both on non-focusable triggers.
	 */
	attach = modifier((element) => {
		this.triggerElement = element;
		const mode = this.eventMode;
		const addedTabindex =
			mode === "both" || mode === "focus" ? ensureFocusableForTooltip(element) : false;
		const show = (e) => this.show(e);
		const hide = (e) => this.hide(e);
		element.addEventListener("mouseenter", show);
		element.addEventListener("mouseleave", hide);
		element.addEventListener("focusin", show);
		element.addEventListener("focusout", hide);
		return () => {
			element.removeEventListener("mouseenter", show);
			element.removeEventListener("mouseleave", hide);
			element.removeEventListener("focusin", show);
			element.removeEventListener("focusout", hide);
			if (addedTabindex) element.removeAttribute("tabindex");
			if (this.triggerElement === element) {
				this._clearTimeouts();
				this._setTriggerAriaDescribedBy(null);
				this.triggerElement = null;
			}
		};
	});

	/** Positions the portaled panel from the trigger rect; runs each time visibility/position/trigger updates. */
	positionTooltip = modifier((element, [visible, trigger, position]) => {
		this.tooltipElement = element;

		if (!visible || !trigger) return;

		const run = () => {
			const triggerBoundingRect = trigger.getBoundingClientRect();
			const tooltipBoundingRect = element.getBoundingClientRect();
			const tooltipWidth = tooltipBoundingRect.width || element.offsetWidth || 1;
			const tooltipHeight = tooltipBoundingRect.height || element.offsetHeight || 1;
			const { top, left } = computeTooltipPlacement(
				triggerBoundingRect,
				tooltipWidth,
				tooltipHeight,
				position
			);

			applyBodyAbsoluteFromViewport(element, top, left);
			element.style.zIndex = String(this.tooltipZIndex);
		};

		/* One rAF: measure after first paint; then link trigger `aria-describedby` to tooltip id. */
		requestAnimationFrame(() => {
			run();
			this._setTriggerAriaDescribedBy(this.tooltipId);
		});

		return () => {
			if (this.tooltipElement === element) this.tooltipElement = null;
		};
	});

	<template>
		{{#if (has-block "trigger")}}
			{{yield this.attach to="trigger"}}
		{{else}}
			{{yield this.attach}}
		{{/if}}

		{{#if this.shouldRenderTooltip}}
			{{#in-element this.appendTarget insertBefore=null}}
				<div
					id={{this.tooltipId}}
					role="tooltip"
					class={{this.rootClasses}}
					data-qa={{this.rootDataQa}}
					aria-hidden="false"
					...attributes
					{{this.positionTooltip this.visible this.triggerElement this.tooltipPosition}}
					{{overlayDismiss
						this.shouldCloseOnEscape
						whenClick=false
						closeOnClickOutside=false
						onClose=this.dismissTooltipFromOverlay
						escapeEventMode="tooltip"
						escapeUseCapture=false
						strictEscapeKey=true
					}}
					{{on "mouseenter" this.tooltipMouseEnter}}
					{{on "mouseleave" this.tooltipMouseLeave}}
				>
					<div class="tooltip-arrow" data-qa={{this.getDataQa "arrow"}} aria-hidden="true"></div>
					<div class="tooltip-text" data-qa={{this.getDataQa "content"}}>
						{{#if (has-block "content")}}
							{{yield to="content"}}
						{{else}}
							{{@content}}
						{{/if}}
					</div>
				</div>
			{{/in-element}}
		{{/if}}
	</template>
}
