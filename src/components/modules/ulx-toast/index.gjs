import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { getComponentClass, NAMESPACE } from "../../../utils/component-config";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

// Toast class prefix: must match the prefix used when uls-v2 toast.less is compiled (e.g. ulx- in ulx demo app)
const TOAST_PREFIX = `${NAMESPACE}-`;

/** Default auto-close delay in ms (20 seconds). Sticky messages are not auto-closed. */
const DEFAULT_LIFE_MS = 2000;

/** Exit animation duration in ms (must match toast.less toast-slide-out). */
const EXIT_ANIMATION_MS = 300;

/** Default variant-to-icon map. Keys: info, success, warn, warning, error, secondary, contrast. */
const DEFAULT_VARIANT_ICONS = {
	info: "info-icon",
	success: "success-stroke-icon",
	warn: "alert-icon-01",
	warning: "alert-icon-01",
	error: "sp-danger-icon",
	secondary: "info-icon",
	contrast: "info-icon"
};

/**
 * Toast module component for displaying overlay messages.
 * Uses existing classes from uls-v2 toast.less. Argument-driven: receives
 * @messages and @onClose; does not own state.
 *
 * ## Position
 * - top-left, top-center, top-right, center, bottom-left, bottom-center, bottom-right
 *
 * ## Variant (per message)
 * - info (default), success, warn, error, secondary, contrast
 *
 * ## Type (per message)
 * - elevated, flat, outlined
 *
 * ## Stacked variant
 * - Pass @stacked={{true}} to display messages in a stacked layout
 *
 * ## Auto-close and manual close (parent-controlled)
 * - **@autoClose** (default true): when false, messages do not auto-close; only manual close (button or ESC) applies. Per-message: set message.autoClose=true or message.life to opt in to auto-close for that message.
 * - **@closable** (default true): when false, close buttons are hidden and ESC does not close; parent must remove messages via @onClose or by updating @messages. Per-message message.closable can still override when @closable is true.
 * - **@life**: when auto-close is enabled, default duration in ms; overridable per message via message.life.
 * - Per-message: message.sticky or message.autoClose=false disables auto-close for that message when @autoClose is true.
 *
 * ## Keyboard support
 * - Press ESC key to close the first (oldest) closable toast (only when @closable is not false).
 *
 * ## WCAG
 * - role="region" and aria-label on container; role="alert" on messages for live announcements.
 * - Close button has aria-label and keyboard support.
 *
 * @class UlxToast
 * @param {Array<{ id: string, variant?: string, summary?: string, detail?: string, closable?: boolean, sticky?: boolean, autoClose?: boolean, life?: number, showIcon?: boolean, type?: string }>} [messages=[]] - List of message objects to display
 * @param {'top-left'|'top-center'|'top-right'|'center'|'bottom-left'|'bottom-center'|'bottom-right'} [position='top-right'] - Position of the toast container
 * @param {function} [onClose] - Callback when a message is closed; receives the message object
 * @param {boolean} [autoClose=true] - When false, no message auto-closes unless the message has autoClose:true or life set
 * @param {boolean} [closable=true] - When false, close buttons are hidden and ESC does not close toasts
 * @param {number} [life=20000] - Default auto-close delay in ms when auto-close is enabled; can be overridden per message via message.life
 * @param {boolean} [stacked=false] - When true, displays messages in a stacked layout
 * @param {string} [iconSize='s18'] - Size class for toast icons (message icon and close button)
 * @param {string} [closeIconName='close-icon-01'] - Icon name for the close button
 * @param {Object} [variantIcons] - Override icon names per variant. Keys: info, success, warn, warning, error, secondary, contrast. Merged with defaults.
 * @param {string} [iconComponentClass='bs-icons1'] - Component class for the message icon (UlxIcon)
 * @block content - Optional. Yields the message object; when provided, replaces default summary/detail with custom content.
 */
export default class UlxToast extends Component {
	get iconSize() {
		return this.args.iconSize ?? "s24";
	}

	get closeIconName() {
		return this.args.closeIconName ?? "close-icon-01";
	}

	get severityIconMap() {
		const overrides = this.args.variantIcons ?? {};
		return { ...DEFAULT_VARIANT_ICONS, ...overrides };
	}

	get iconComponentClass() {
		return this.args.iconComponentClass ?? "bs-icons1";
	}
	/** Message ids currently playing the exit animation (toast-exit class). */
	@tracked exitingIds = new Set();

	/** Map to store auto-close timeouts keyed by message id. */
	_closeTimeouts = new Map();

	/** Bound handler for document keydown events. */
	_boundDocumentKeyHandler = null;

	get containerClasses() {
		const position = this.args.position || "top-right";
		const classes = [TOAST_PREFIX + "toast", position];
		if (this.args.stacked) {
			classes.push("stacked");
		}
		return classes.filter(Boolean).join(" ");
	}

	get messages() {
		const list = this.args.messages ?? [];
		// Schedule auto-close for non-sticky messages
		this._scheduleCloseTimers(list);
		// Manage document-level ESC key listener
		this._manageDocumentKeyListener(list);
		return list;
	}

	/**
	 * Manages the document-level keydown listener for ESC key.
	 * Adds listener when there are messages, removes when empty.
	 */
	_manageDocumentKeyListener(messages) {
		const hasMessages = messages.length > 0;

		if (hasMessages && !this._boundDocumentKeyHandler) {
			this._boundDocumentKeyHandler = this._handleDocumentKeyDown.bind(this);
			document.addEventListener("keydown", this._boundDocumentKeyHandler);
		} else if (!hasMessages && this._boundDocumentKeyHandler) {
			document.removeEventListener("keydown", this._boundDocumentKeyHandler);
			this._boundDocumentKeyHandler = null;
		}
	}

	/**
	 * Handles document-level keydown events.
	 * ESC key closes the first (oldest) closable toast. No-op when @closable is false.
	 */
	_handleDocumentKeyDown(event) {
		if (event.key !== "Escape" || this.args.closable === false) return;
		const messages = this.args.messages ?? [];
		for (const message of messages) {
			if (message?.id && message.closable !== false && !this.exitingIds.has(message.id)) {
				this.startExitThenClose(message);
				event.preventDefault();
				break;
			}
		}
	}

	/**
	 * Determines if a message should auto-close.
	 * Parent @autoClose=false disables auto-close globally unless message opts in (autoClose:true or life set).
	 * When @autoClose is true, per-message sticky or autoClose:false disables for that message.
	 */
	_shouldAutoClose(message) {
		const componentAutoClose = this.args.autoClose !== false;
		if (!componentAutoClose) {
			return message.autoClose === true || (typeof message.life === "number" && message.life > 0);
		}
		if (message.sticky) return false;
		if (message.autoClose === false) return false;
		return true;
	}

	/**
	 * Gets the life duration for a message.
	 * Priority: message.life > @life > DEFAULT_LIFE_MS
	 */
	_getMessageLife(message) {
		if (typeof message.life === "number" && message.life > 0) {
			return message.life;
		}
		return this.args.life ?? DEFAULT_LIFE_MS;
	}

	_scheduleCloseTimers(list) {
		const currentIds = new Set(list.map((m) => m?.id).filter(Boolean));

		// Clean up timers for messages no longer in the list
		for (const [id, timerId] of this._closeTimeouts) {
			if (!currentIds.has(id)) {
				clearTimeout(timerId);
				this._closeTimeouts.delete(id);
			}
		}

		// Schedule timers for new messages that should auto-close
		for (const message of list) {
			if (!message?.id) continue;
			if (!this._shouldAutoClose(message)) continue;
			if (this._closeTimeouts.has(message.id)) continue; // already scheduled

			const life = this._getMessageLife(message);
			const timerId = setTimeout(() => {
				this.startExitThenClose(message);
				this._closeTimeouts.delete(message.id);
			}, life);
			this._closeTimeouts.set(message.id, timerId);
		}
	}

	@action
	getMessageClasses(message) {
		const parts = ["toast-message"];
		const variant = message.variant || "info";
		parts.push(variant === "warning" ? "warn" : variant);
		if (message.type) parts.push(message.type);
		if (this.args.closable !== false && message.closable !== false) parts.push("closable");
		if (message.showIcon === false) parts.push("without-icon");
		if (message.sticky) parts.push("toast-sticky");
		if (message.exit || (message?.id && this?.exitingIds?.has(message.id)))
			parts.push("toast-exit");
		return parts.filter(Boolean).join(" ");
	}

	@action
	getIconName(message) {
		const severity = message.variant || "info";
		const map = this.severityIconMap;
		return map[severity] ?? map.info;
	}

	/** Returns true when the message should show an icon (default true). */
	@action
	showMessageIcon(message) {
		return message.showIcon !== false;
	}

	/** Returns true when the message should show a close button. Respects @closable and per-message closable. */
	@action
	showMessageClose(message) {
		if (this.args.closable === false) return false;
		return message.closable !== false;
	}

	startExitThenClose(message) {
		if (!message?.id) return;
		if (this.exitingIds.has(message.id)) return;

		// Clear any pending auto-close timer for this message
		if (this._closeTimeouts.has(message.id)) {
			clearTimeout(this._closeTimeouts.get(message.id));
			this._closeTimeouts.delete(message.id);
		}

		this.exitingIds = new Set([...this.exitingIds, message.id]);
		setTimeout(() => {
			this.args.onClose?.(message);
			this.exitingIds = new Set([...this.exitingIds].filter((id) => id !== message.id));
		}, EXIT_ANIMATION_MS);
	}

	@action
	closeMessage(message) {
		this.startExitThenClose(message);
	}

	/**
	 * Handles keyboard events on the close button.
	 * Enter and Space keys trigger close action.
	 */
	@action
	handleCloseKeyDown(message, event) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.startExitThenClose(message);
		}
	}

	<template>
		<div class={{this.containerClasses}} role="region" aria-label="Notification" ...attributes>
			{{#each this.messages key="id" as |message|}}
				<div class={{this.getMessageClasses message}} role="alert" aria-live="polite">
					<div class="toast-content">
						{{#if (this.showMessageIcon message)}}
							<span class="toast-icon" aria-hidden="true">
								<UlxIcon
									@iconName={{this.getIconName message}}
									@type="font"
									@size={{this.iconSize}}
									@componentClass={{this.iconComponentClass}}
									aria-hidden="true"
								/>
							</span>
						{{/if}}
						<div class="toast-text">
							{{#if (has-block "content")}}
								{{yield message to="content"}}
							{{else}}
								{{#if message.summary}}
									<span class="toast-summary">{{message.summary}}</span>
								{{/if}}
								{{#if message.detail}}
									<span class="toast-detail">{{message.detail}}</span>
								{{/if}}
							{{/if}}
						</div>
						{{#if (this.showMessageClose message)}}
							<UlxIcon
								@iconName={{this.closeIconName}}
								@type="font"
								@size="s18"
								@componentClass="bs-icons1"
								@customClass="pointer"
								role="button"
								tabindex="0"
								aria-label="Close notification"
								{{on "click" (fn this.closeMessage message)}}
								{{on "keydown" (fn this.handleCloseKeyDown message)}}
							/>
						{{/if}}
					</div>
				</div>
			{{/each}}
		</div>
	</template>
}

/*
 * UlxToast – possible usages
 * ==========================
 *
 * 1. Minimal (position + messages + onClose)
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} />
 *
 * 2. Position
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="top-left" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="top-center" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="top-right" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="center" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="bottom-left" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="bottom-center" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @position="bottom-right" />
 *
 * 3. Stacked layout
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @stacked={{true}} />
 *
 * 4. Auto-close and life
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @autoClose={{false}} />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @life={{5000}} />
 *
 * 5. Closable
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @closable={{false}} />
 *
 * 6. Icon options
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @iconSize="s16" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @closeIconName="my-close-icon" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @iconComponentClass="my-icon-font" />
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}} @variantIcons={{hash error="custom-error-icon" success="custom-success-icon"}} />
 *
 * 7. Message object shape (per message)
 *    { id, variant?, summary?, detail?, closable?, sticky?, autoClose?, life?, showIcon?, type? }
 *    variant: "info" | "success" | "warn" | "warning" | "error" | "secondary" | "contrast"
 *    type: "elevated" | "flat" | "outlined"
 *
 * 8. Custom content block (replaces default summary/detail)
 *    <UlxToast @messages={{this.messages}} @onClose={{this.handleClose}}>
 *      <:content as |message|>
 *        <strong>{{message.summary}}</strong>
 *        <p>{{message.detail}}</p>
 *      </:content>
 *    </UlxToast>
 *
 * 9. Full example with multiple options
 *    <UlxToast
 *      @messages={{this.messages}}
 *      @onClose={{this.handleClose}}
 *      @position="bottom-right"
 *      @stacked={{true}}
 *      @autoClose={{true}}
 *      @life={{3000}}
 *      @closable={{true}}
 *      @iconSize="s18"
 *      @closeIconName="close-icon-01"
 *      @iconComponentClass="bs-icons1"
 *      @variantIcons={{this.customVariantIcons}}
 *    />
 */
