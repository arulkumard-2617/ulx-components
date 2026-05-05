import { modifier } from 'ember-modifier';
import { getComponentClass } from '../utils/component-config';
import { applyBodyAbsoluteFromViewport } from '../utils/overlay-helpers';

const GAP = 8;
let idCounter = 0;

const NATIVELY_FOCUSABLE = /^(BUTTON|INPUT|SELECT|TEXTAREA|A|SUMMARY)$/;

function isFocusable(el) {
	if (!el || typeof el.tabIndex !== 'number') return false;
	if (el.tabIndex >= 0) return true;
	const tag = el.tagName;
	if (NATIVELY_FOCUSABLE.test(tag)) {
		if (tag === 'A') return el.hasAttribute('href');
		return !el.disabled;
	}
	return false;
}

function ensureFocusableForTooltip(element) {
	if (element.hasAttribute('tabindex')) return false;
	if (isFocusable(element)) return false;
	element.setAttribute('tabindex', '0');
	return true;
}

function positionElement(tooltipEl, triggerEl, position) {
	const rect = triggerEl.getBoundingClientRect();
	const tooltipRect = tooltipEl.getBoundingClientRect();
	const w = tooltipRect.width || tooltipEl.offsetWidth || 1;
	const h = tooltipRect.height || tooltipEl.offsetHeight || 1;
	let top = 0;
	let left = 0;
	switch (position) {
		case 'top':
			top = rect.top - h - GAP;
			left = rect.left + (rect.width - w) / 2;
			break;
		case 'bottom':
			top = rect.bottom + GAP;
			left = rect.left + (rect.width - w) / 2;
			break;
		case 'left':
			top = rect.top + (rect.height - h) / 2;
			left = rect.left - w - GAP;
			break;
		case 'right':
		default:
			top = rect.top + (rect.height - h) / 2;
			left = rect.right + GAP;
			break;
	}
	applyBodyAbsoluteFromViewport(tooltipEl, top, left);
}

/**
 * Tooltip modifier. Attach to any element to show a tooltip on hover/focus.
 * Tooltip is rendered in document.body (like PrimeReact).
 *
 * Usage:
 *   <div {{tooltip "Update name"}} />
 *   <button {{tooltip "Save" position="top" showDelay=1000 hideDelay=300}} />
 *   <span {{tooltip this.message options=this.tooltipOptions}} />
 *
 * @param {Element} element - The trigger element
 * @param {[string, object]} positional - [content]. Optional second item: options object (overrides named options).
 * @param {object} named - Options: position ('top'|'right'|'bottom'|'left'), event ('hover'|'focus'|'both'),
 *   showDelay, hideDelay (ms), disabled, appendTo (element or selector), closeOnEscape.
 *   Or pass a single `options` object with the same keys (e.g. tooltipOptions={{ position: 'top', event: 'both' }}).
 *   Default event is 'both' (hover and focus) for WCAG: tooltip shows on keyboard focus.
 */
export default modifier(function tooltip(
	element,
	[content, optionsArg],
	{
		position = 'right',
		event = 'both',
		showDelay = 0,
		hideDelay = 0,
		disabled = false,
		appendTo = undefined,
		closeOnEscape = false,
		options: namedOptions
	}
) {
	const opts = optionsArg ?? namedOptions ?? {};
	const text = (typeof content === 'string' ? content : null) ?? opts.content ?? opts.tooltip ?? '';
	const pos = opts.position ?? position;
	const evt = opts.event ?? event;
	const showDelayMs = opts.showDelay ?? showDelay ?? 0;
	const hideDelayMs = opts.hideDelay ?? hideDelay ?? 0;
	const isDisabled = opts.disabled ?? disabled ?? false;
	const appendTarget =
		opts.appendTo ?? appendTo ?? (typeof document !== 'undefined' ? document.body : null);
	const escapeClose = opts.closeOnEscape ?? closeOnEscape ?? false;

	if (typeof document === 'undefined' || !appendTarget) return;

	const tooltipId = `ulx-tooltip-mod-${++idCounter}`;
	const baseClass = getComponentClass('tooltip');
	let tooltipEl = null;
	let showTimeout = null;
	let hideTimeout = null;
	const addedTabindex =
		evt === 'both' || evt === 'focus' ? ensureFocusableForTooltip(element) : false;

	// When this modifier is set up after being disabled (popup just closed), focus returns
	// to the trigger element causing an immediate focusin. We suppress that focus-return
	// tooltip by marking the element during teardown-while-disabled, and clearing the mark
	// once we've handled (or skipped) the first focusin after re-enable.
	const FOCUS_RETURN_ATTR = 'data-tooltip-suppress-focus';
	let suppressFocusShow = !isDisabled && element.hasAttribute(FOCUS_RETURN_ATTR);
	if (suppressFocusShow) {
		element.removeAttribute(FOCUS_RETURN_ATTR);
	}

	function getAppendTarget() {
		if (appendTarget === document.body) return document.body;
		if (typeof appendTarget === 'string') {
			return document.querySelector(appendTarget) ?? document.body;
		}
		return appendTarget;
	}

	function shouldShowForEvent(eventType) {
		if (evt === 'hover') return eventType === 'mouseenter';
		if (evt === 'focus') return eventType === 'focus' || eventType === 'focusin';
		return eventType === 'mouseenter' || eventType === 'focus' || eventType === 'focusin';
	}

	function shouldHideForEvent(eventType) {
		if (evt === 'hover') return eventType === 'mouseleave';
		if (evt === 'focus') return eventType === 'blur' || eventType === 'focusout';
		return eventType === 'mouseleave' || eventType === 'blur' || eventType === 'focusout';
	}

	function clearTimeouts() {
		if (showTimeout) {
			clearTimeout(showTimeout);
			showTimeout = null;
		}
		if (hideTimeout) {
			clearTimeout(hideTimeout);
			hideTimeout = null;
		}
	}

	function createTooltip() {
		if (tooltipEl) return tooltipEl;
		const target = getAppendTarget();
		tooltipEl = document.createElement('div');
		tooltipEl.id = tooltipId;
		tooltipEl.setAttribute('role', 'tooltip');
		tooltipEl.setAttribute('aria-hidden', 'true');
		tooltipEl.className = `${baseClass} position-${pos}`;
		tooltipEl.innerHTML = `<div class="tooltip-arrow" aria-hidden="true"></div><div class="tooltip-text">${escapeHtml(text)}</div>`;
		tooltipEl.style.pointerEvents = 'none';
		tooltipEl.style.display = 'none';
		target.appendChild(tooltipEl);
		return tooltipEl;
	}

	function escapeHtml(s) {
		const div = document.createElement('div');
		div.textContent = s;
		return div.innerHTML;
	}

	function show() {
		if (isDisabled || !text) return;
		clearTimeouts();
		if (showDelayMs > 0) {
			showTimeout = setTimeout(doShow, showDelayMs);
		} else {
			doShow();
		}
	}

	function doShow() {
		showTimeout = null;
		const el = createTooltip();
		el.setAttribute('aria-hidden', 'false');
		el.className = `${baseClass} position-${pos}`;
		const textNode = el.querySelector('.tooltip-text');
		if (textNode) textNode.textContent = text;
		el.style.display = '';
		element.setAttribute('aria-describedby', tooltipId);
		requestAnimationFrame(() => positionElement(el, element, pos));
	}

	function hide() {
		clearTimeouts();
		if (hideDelayMs > 0 && tooltipEl && tooltipEl.getAttribute('aria-hidden') !== 'true') {
			hideTimeout = setTimeout(doHide, hideDelayMs);
		} else {
			doHide();
		}
	}

	function doHide() {
		hideTimeout = null;
		element.removeAttribute('aria-describedby');
		if (tooltipEl && tooltipEl.parentNode) {
			tooltipEl.parentNode.removeChild(tooltipEl);
			tooltipEl = null;
		}
	}

	function onShow(e) {
		if (e && !shouldShowForEvent(e.type)) return;
		if (suppressFocusShow && (e?.type === 'focusin' || e?.type === 'focus')) {
			suppressFocusShow = false;
			return;
		}
		show();
	}

	function onHide(e) {
		if (e && !shouldHideForEvent(e.type)) return;
		hide();
	}

	function onEscape(e) {
		if (
			e.key === 'Escape' &&
			escapeClose &&
			tooltipEl &&
			tooltipEl.getAttribute('aria-hidden') !== 'true'
		) {
			e.preventDefault();
			doHide();
		}
	}

	element.addEventListener('mouseenter', onShow);
	element.addEventListener('mouseleave', onHide);
	element.addEventListener('focusin', onShow);
	element.addEventListener('focusout', onHide);
	if (escapeClose) document.addEventListener('keydown', onEscape);

	return () => {
		// Mark element so the next modifier run (re-enabled) can suppress the focus-return focusin.
		if (isDisabled) {
			element.setAttribute(FOCUS_RETURN_ATTR, '');
		}
		clearTimeouts();
		element.removeEventListener('mouseenter', onShow);
		element.removeEventListener('mouseleave', onHide);
		element.removeEventListener('focusin', onShow);
		element.removeEventListener('focusout', onHide);
		if (escapeClose) document.removeEventListener('keydown', onEscape);
		element.removeAttribute('aria-describedby');
		if (addedTabindex) element.removeAttribute('tabindex');
		if (tooltipEl && tooltipEl.parentNode) tooltipEl.parentNode.removeChild(tooltipEl);
		tooltipEl = null;
	};
});
