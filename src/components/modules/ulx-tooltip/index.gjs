import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";
import { inject as service } from "@ember/service";
import { modifier } from "ember-modifier";
import { on } from "@ember/modifier";
import { getComponentClass } from "../../../utils/component-config";

const GAP = 8;

const NATIVELY_FOCUSABLE = /^(BUTTON|INPUT|SELECT|TEXTAREA|A|SUMMARY)$/;

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

function ensureFocusableForTooltip(element) {
	if (element.hasAttribute("tabindex")) return false;
	if (isFocusable(element)) return false;
	element.setAttribute("tabindex", "0");
	return true;
}

/**
 * Tooltip module component. Wraps a trigger element and shows a tooltip on hover or focus.
 * Uses existing classes from ULS_V2.0 tooltip.less. Renders tooltip in appendTo (default body).
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
 * @block default - Trigger element. Apply the yielded modifier to your element (e.g. as |attach| then <button {{attach}}>). Tooltip is rendered in appendTo (body by default), not wrapping the trigger.
 * @block trigger - Optional. Use with <:content>; apply the yielded modifier to the trigger element (e.g. as |attach| then {{attach}}).
 * @block content - Optional rich tooltip content. When present, @content is ignored.
 */
export default class UlxTooltip extends Component {
	@service modalStack;

	@tracked visible = false;
	@tracked positionState = "bottom";
	triggerElement = null;
	tooltipElement = null;
	_showTimeout = null;
	_hideTimeout = null;
	_allowHide = true;

	get tooltipId() {
		return `ulx-tooltip-${guidFor(this)}`;
	}

	get baseClass() {
		return getComponentClass("tooltip");
	}

	get rootClasses() {
		const { autoHide = true, customClass } = this.args;

		const parts = [this.baseClass];
		parts.push(`position-${this.positionState}`);
		!autoHide && parts.push("interactive");
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get appendTarget() {
		if (typeof document === "undefined") return null;
		const to = this.args.appendTo;
		if (to === undefined || to === null) return document.body;
		if (typeof to === "string") return document.querySelector(to) ?? document.body;
		return to ?? document.body;
	}

	get tooltipPosition() {
		return this.args.position ?? "bottom";
	}

	get shouldCloseOnEscape() {
		return this.visible && this.args.closeOnEscape;
	}

	get shouldRenderTooltip() {
		return this.visible && this.appendTarget;
	}

	get tooltipZIndex() {
		const { zIndex } = this.args;

		if (typeof zIndex === "number") {
			return zIndex;
		}

		const topOverlay = this.modalStack?.topModal;
		return topOverlay ? this.modalStack.getZIndex(topOverlay) + 1 : null;
	}

	_shouldShowForEvent(eventType) {
		const event = this.args.event ?? "both";
		if (event === "hover") return eventType === "mouseenter";
		if (event === "focus") return eventType === "focus" || eventType === "focusin";
		return eventType === "mouseenter" || eventType === "focus" || eventType === "focusin";
	}

	_shouldHideForEvent(eventType) {
		const event = this.args.event ?? "both";
		if (event === "hover") return eventType === "mouseleave";
		if (event === "focus") return eventType === "blur" || eventType === "focusout";
		return eventType === "mouseleave" || eventType === "blur" || eventType === "focusout";
	}

	@action
	show(event) {
		if (event?.type && !this._shouldShowForEvent(event.type)) return;

		const { disabled = false, showOnDisabled = false } = this.args;
		const target = event?.currentTarget;

		if (target && this._isTriggerDisabled(target) && !showOnDisabled) return;
		if (disabled) return;

		const onBeforeShow = this.args.onBeforeShow;
		if (
			typeof onBeforeShow === "function" &&
			onBeforeShow({ originalEvent: event, target }) === false
		)
			return;

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
		this.positionState = this.args.position ?? "bottom";
		this.visible = true;
		this._allowHide = true;
		this.args.onShow?.({ originalEvent: event, target: this.triggerElement });
	}

	@action
	hide(event) {
		if (event?.type && !this._shouldHideForEvent(event.type)) return;

		if (
			this.args.autoHide === false &&
			event?.type === "mouseleave" &&
			event?.currentTarget === this.triggerElement
		) {
			return;
		}

		this._clearTimeouts();

		const onBeforeHide = this.args.onBeforeHide;
		if (
			typeof onBeforeHide === "function" &&
			onBeforeHide({ originalEvent: event, target: this.triggerElement }) === false
		)
			return;

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
		const target = this.triggerElement;
		this._setTriggerAriaDescribedBy(null);
		this.visible = false;
		this.triggerElement = null;
		this.args.onHide?.({ originalEvent: event, target });
	}

	_isTriggerDisabled(element) {
		if (!element) return false;
		return element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
	}

	_clearTimeouts() {
		if (this._showTimeout) {
			clearTimeout(this._showTimeout);
			this._showTimeout = null;
		}
		if (this._hideTimeout) {
			clearTimeout(this._hideTimeout);
			this._hideTimeout = null;
		}
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

	@action
	handleEscapeKey(event) {
		if (event.key === "Escape" && this.args.closeOnEscape) {
			event.preventDefault();
			event.stopImmediatePropagation();
			this.hide(event);
		}
	}

	attach = modifier((element) => {
		this.triggerElement = element;
		const event = this.args.event ?? "both";
		const addedTabindex =
			event === "both" || event === "focus" ? ensureFocusableForTooltip(element) : false;
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

	positionTooltip = modifier((element, [visible, trigger, position]) => {
		this.tooltipElement = element;

		if (!visible || !trigger) return;

		const run = () => {
			const rect = trigger.getBoundingClientRect();
			const tooltipRect = element.getBoundingClientRect();
			const w = tooltipRect.width || element.offsetWidth || 1;
			const h = tooltipRect.height || element.offsetHeight || 1;
			const scrollX = window.pageXOffset ?? window.scrollX ?? 0;
			const scrollY = window.pageYOffset ?? window.scrollY ?? 0;

			let top = 0;
			let left = 0;

			switch (position) {
				case "top":
					top = rect.top - h - GAP;
					left = rect.left + (rect.width - w) / 2;
					break;
				case "bottom":
					top = rect.bottom + GAP;
					left = rect.left + (rect.width - w) / 2;
					break;
				case "left":
					top = rect.top + (rect.height - h) / 2;
					left = rect.left - w - GAP;
					break;
				case "right":
				default:
					top = rect.top + (rect.height - h) / 2;
					left = rect.right + GAP;
					break;
			}

			element.style.position = "absolute";
			element.style.top = `${top + scrollY}px`;
			element.style.left = `${left + scrollX}px`;
			element.style.right = "auto";
			element.style.bottom = "auto";
			element.style.margin = "0";
			this.tooltipZIndex != null && (element.style.zIndex = `${this.tooltipZIndex}`);
		};

		requestAnimationFrame(() => {
			run();
			this._setTriggerAriaDescribedBy(this.tooltipId);
		});

		return () => {
			if (this.tooltipElement === element) this.tooltipElement = null;
		};
	});

	closeOnEscape = modifier((_element, [when]) => {
		if (!when) return;

		const handler = (e) => this.handleEscapeKey(e);
		document.addEventListener("keydown", handler);

		return () => document.removeEventListener("keydown", handler);
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
					aria-hidden="false"
					{{this.positionTooltip this.visible this.triggerElement this.tooltipPosition}}
					{{this.closeOnEscape this.shouldCloseOnEscape}}
					{{on "mouseenter" this.tooltipMouseEnter}}
					{{on "mouseleave" this.tooltipMouseLeave}}
				>
					<div class="tooltip-arrow" aria-hidden="true"></div>
					<div class="tooltip-text">
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
