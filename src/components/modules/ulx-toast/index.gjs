import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { on } from "@ember/modifier";
import { getComponentClass, NAMESPACE } from "../../../utils/component-config";
import UlxIcon from "../../elements/ulx-icon/index.gjs";

// Toast class prefix: must match the prefix used when uls-v2 toast.less is compiled (e.g. ulx- in ulx demo app)
const TOAST_PREFIX = `${NAMESPACE}-`;

/** Default auto-close delay in ms (2 seconds). Sticky messages are not auto-closed. */
const DEFAULT_LIFE_MS = 20000;

/** Exit animation duration in ms (must match toast.less toast-slide-out). */
const EXIT_ANIMATION_MS = 300;

/**
 * Toast module component for displaying overlay messages.
 * Uses existing classes from uls-v2 toast.less. Argument-driven: receives
 * @messages and @onClose; does not own state.
 *
 * ## Position
 * - top-left, top-center, top-right, center, bottom-left, bottom-center, bottom-right
 *
 * ## Severity (per message)
 * - info (default), success, warn, error, secondary, contrast
 *
 * ## Message variants (per message)
 * - elevated, flat, outlined
 *
 * ## WCAG
 * - role="region" and aria-label on container; role="alert" on messages for live announcements.
 * - Close button has aria-label.
 *
 * @class UlxToast
 * @param {Array<{ id: string, severity?: string, summary?: string, detail?: string, closable?: boolean, sticky?: boolean, showIcon?: boolean, variant?: string }>} [messages=[]] - List of message objects to display
 * @param {'top-left'|'top-center'|'top-right'|'center'|'bottom-left'|'bottom-center'|'bottom-right'} [position='top-right'] - Position of the toast container
 * @param {function} [onClose] - Callback when a message is closed; receives the message object
 * @param {number} [life=2000] - Auto-close delay in ms; sticky messages are not auto-closed
 * @block content - Optional. Yields the message object; when provided, replaces default summary/detail with custom content.
 */
export default class UlxToast extends Component {
	/** Message ids currently playing the exit animation (toast-exit class). */
	@tracked exitingIds = new Set();

	get baseClass() {
		return getComponentClass("toast");
	}

	get containerClasses() {
		const position = this.args.position || "top-right";
		// uls-toast + position class from toast.less (e.g. top-right, bottom-center)
		return [TOAST_PREFIX + "toast", position].filter(Boolean).join(" ");
	}

	get messages() {
		const list = this.args.messages ?? [];
		// Schedule auto-close for non-sticky messages (no did-insert modifier needed)
		this._scheduleCloseTimers(list);
		return list;
	}

	/** Schedules close timers for messages that don't have one yet. Cleans up timers for removed messages. */
	_scheduleCloseTimers(list) {
		const life = this.args.life ?? DEFAULT_LIFE_MS;
		const currentIds = new Set(list.map((m) => m?.id).filter(Boolean));
		// Clean up timers for messages no longer in the list
		if (this._closeTimeouts) {
			for (const id of Object.keys(this._closeTimeouts)) {
				if (!currentIds.has(id)) {
					clearTimeout(this._closeTimeouts[id]);
					delete this._closeTimeouts[id];
				}
			}
		}
		this._closeTimeouts = this._closeTimeouts || {};
		for (const message of list) {
			if (!message?.id || message.sticky) continue;
			if (this._closeTimeouts[message.id]) continue; // already scheduled
			this._closeTimeouts[message.id] = setTimeout(() => {
				this.startExitThenClose(message);
				if (this._closeTimeouts) delete this._closeTimeouts[message.id];
			}, life);
		}
	}

	getMessageClasses(message) {
		const parts = [TOAST_PREFIX + "toast-message"];
		const severity = message.severity || "info";
		parts.push(severity === "warning" ? "warn" : severity);
		if (message.variant) parts.push(message.variant);
		if (message.closable !== false) parts.push("closable");
		if (message.showIcon === false) parts.push("without-icon");
		if (message.sticky) parts.push("sticky");
		if (message.exit || (message?.id && this?.exitingIds?.has(message.id)))
			parts.push("toast-exit");
		return parts.filter(Boolean).join(" ");
	}

	getIconName(message) {
		const severity = message.severity || "info";
		const map = {
			info: "info-icon",
			success: "success-stroke-icon",
			warn: "pi pi-exclamation-triangle",
			warning: "pi pi-exclamation-triangle",
			error: "sp-danger-icon",
			secondary: "info-icon",
			contrast: "info-icon"
		};
		return map[severity] ?? map.info;
	}

	/** Returns true when the message should show an icon (default true). */
	showMessageIcon(message) {
		return message.showIcon !== false;
	}

	/** Returns true when the message should show a close button (default true). */
	showMessageClose(message) {
		return message.closable !== false;
	}

	/** Starts exit animation, then calls onClose after EXIT_ANIMATION_MS. */
	startExitThenClose(message) {
		if (!message?.id) return;
		if (this.exitingIds.has(message.id)) return;
		// Cancel auto-close timer if user closed before it fired
		if (this._closeTimeouts?.[message.id]) {
			clearTimeout(this._closeTimeouts[message.id]);
			delete this._closeTimeouts[message.id];
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

	<template>
		<div class={{this.containerClasses}} role="region" aria-label="Notifications" ...attributes>
			{{#each this.messages key="id" as |message|}}
				<div class={{this.getMessageClasses message}} role="alert" aria-live="polite">
					<div class="{{TOAST_PREFIX}}toast-content">
						{{#if (this.showMessageIcon message)}}
							<span class="{{TOAST_PREFIX}}toast-icon" aria-hidden="true">
								<UlxIcon
									@iconName={{this.getIconName message}}
									@type="font"
									@size="s18"
									@customClass="bs-icons1"
									aria-hidden="true"
								/>
							</span>
						{{/if}}
						<div class="{{TOAST_PREFIX}}toast-text">
							{{#if (has-block "content")}}
								{{yield message to="content"}}
							{{else}}
								{{#if message.summary}}
									<span class="{{TOAST_PREFIX}}toast-summary">{{message.summary}}</span>
								{{/if}}
								{{#if message.detail}}
									<span class="{{TOAST_PREFIX}}toast-detail">{{message.detail}}</span>
								{{/if}}
							{{/if}}
						</div>
						{{#if (this.showMessageClose message)}}
							<UlxIcon
								@iconName="close-icon-01"
								@type="font"
								@size="s18"
								@customClass="bs-icons1"
								role="button"
								tabindex="0"
								aria-label="Close notification"
								{{on "click" (fn this.closeMessage message)}}
							/>
						{{/if}}
					</div>
				</div>
			{{/each}}
		</div>
	</template>
}
