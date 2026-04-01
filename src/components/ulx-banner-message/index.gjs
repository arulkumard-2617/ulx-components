import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../utils/component-config";
import { joinClassNames } from "../../utils/class-names";
import { buildDataQa, resolveRootDataQa } from "../../utils/data-qa";
import { t } from "../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxIconButton from "../ulx-icon-button/index.gjs";

/** Applied after first paint so CSS enter transition can run (see banner-message.less). */
const ENTER_DONE_CLASS = "enter-done";

const DEFAULT_ICON_BY_VARIANT = {
	info: "info-stroked-icon",
	primary: "info-circle-icon",
	success: "check-circle-icon",
	warn: "exclamation-triangle-icon",
	error: "x-circle-icon"
};

/**
 * Single-message banner: displays one message with variant, summary, detail,
 * and optional close button. Optional one-time banner: when @dismissStorageKey is set,
 * closing the banner persists the choice so the user won't see it again (localStorage).
 * Uses existing classes from banner-message.less. Argument-driven: @message and @onRemove.
 *
 * @class UlxBannerMessage
 * @param {Object} [message] - Single message object: { id?: string, variant?: string, summary?: string, detail?: string, closable?: boolean, icon?: string }
 * @param {function} [onRemove] - Callback when the message is removed; receives the message object
 * @param {string} [dismissStorageKey] - When set, banner is one-time: after close we persist this key in localStorage and do not show again until key is cleared
 * @param {string} [customClass] - Extra CSS classes for the root container
 * @param {string} [id] - Id for the root element
 * @param {string} [size="m-size"] - Size class for container and message (e.g. xs-size, s-size, m-size, l-size, xl-size)
 * @param {string} [iconType="svg"] - Icon type for message icon (e.g. "svg", "font"). Default "svg".
 * @param {string} [iconSize] - Optional icon size for message icon (e.g. s18). No default; only applied when provided.
 * @param {string} [dataQa] - Optional override for root `data-qa` (default `ulx-banner-message`).
 * @block content - Optional. Yields (message); when provided, replaces default summary/detail with custom content.
 * @block leftItem - Optional. Yields (message); custom left-side content (icon, avatar, image). When not provided, shows message.icon or default icon by variant.
 * @block action - Optional. Yields (message); custom right-side action area. Falls back to default close button when not provided.
 */
export default class UlxBannerMessage extends Component {
	@tracked _dismissed = false;

	/** One rAF: add `enter-done` after layout so transition from initial state is visible. */
	addEnterDoneAfterRender = modifier((element) => {
		const rafId = requestAnimationFrame(() => {
			element.classList.add(ENTER_DONE_CLASS);
		});
		return () => cancelAnimationFrame(rafId);
	});

	get messageBaseClass() {
		return getComponentClass("banner-message");
	}

	get rootDataQa() {
		return resolveRootDataQa(this.args.dataQa, "banner-message");
	}

	@action
	getDataQa(part) {
		return buildDataQa(this.rootDataQa, part);
	}

	/** In-session flag or localStorage hit for `@dismissStorageKey`. */
	get isDismissed() {
		if (this._dismissed) return true;
		const key = this.args.dismissStorageKey;
		if (!key || typeof window === "undefined" || !window.localStorage) return false;
		return Boolean(window.localStorage.getItem(key));
	}

	get displayMessage() {
		if (this.isDismissed) return null;
		const msg = this.args.message;
		return msg != null ? msg : null;
	}

	get displayMessageIconName() {
		const msg = this.displayMessage;
		if (!msg) return null;
		if (msg.icon) return msg.icon;
		const variant = msg.variant ?? "info";
		return DEFAULT_ICON_BY_VARIANT[variant] ?? DEFAULT_ICON_BY_VARIANT.info;
	}

	@action
	getMessageRootClasses(message) {
		const { customClass, size = "m-size" } = this.args;
		const variant = message?.variant ?? "info";
		const parts = [this.messageBaseClass, variant];
		size && parts.push(size);
		customClass && parts.push(customClass);
		return joinClassNames(...parts);
	}

	get wrapperClass() {
		return "message-wrapper";
	}

	get detailClass() {
		return "message-detail";
	}

	get contentClass() {
		return "message-content";
	}

	/** Summary + detail stack (`banner-message.less` `.message-text`). */
	get contentTextClass() {
		return "message-text";
	}

	/** Custom action block or default close affordance. */
	get contentActionClass() {
		return "message-actions";
	}

	get summaryClass() {
		return "message-summary";
	}

	get iconClass() {
		return "message-icon";
	}

	get resolvedIconType() {
		return this.args.iconType ?? "svg";
	}

	get resolvedIconSize() {
		return this.args.iconSize;
	}

	get closeButtonClass() {
		return "message-close-button";
	}

	@action
	showClose(message) {
		return Boolean(message?.closable);
	}

	/** Persists `@dismissStorageKey` when set, then delegates to `@onRemove`. */
	@action
	handleRemove(message) {
		const key = this.args.dismissStorageKey;
		if (key && typeof window !== "undefined" && window.localStorage) {
			window.localStorage.setItem(key, "true");
			this._dismissed = true;
		}
		this.args.onRemove?.(message);
	}

	<template>
		{{#if this.displayMessage}}
			<div
				class={{this.getMessageRootClasses this.displayMessage}}
				id={{@id}}
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
				data-qa={{this.rootDataQa}}
				{{this.addEnterDoneAfterRender}}
				...attributes
			>
				<div class="message-item">
					<div class={{this.wrapperClass}} data-qa={{this.getDataQa "wrapper"}}>
					{{#if (has-block "leftItem")}}
						{{yield this.displayMessage to="leftItem"}}
					{{else if this.displayMessageIconName}}
						<span class={{this.iconClass}} aria-hidden="true" data-qa={{this.getDataQa "icon"}}>
							<UlxIcon
								@componentClass="bs-icons1"
								@type={{this.resolvedIconType}}
								@iconName={{this.displayMessageIconName}}
								@size={{this.resolvedIconSize}}
							/>
						</span>
					{{/if}}
					<div class={{this.contentClass}} data-qa={{this.getDataQa "content"}}>
						{{#if (has-block "content")}}
							{{yield this.displayMessage to="content"}}
						{{else}}
							<div class={{this.contentTextClass}}>
								{{#if this.displayMessage.summary}}
									<h5 class={{this.summaryClass}}>{{this.displayMessage.summary}}</h5>
								{{/if}}
								{{#if this.displayMessage.detail}}
									<span class={{this.detailClass}}>{{this.displayMessage.detail}}</span>
								{{/if}}
							</div>
						{{/if}}
						<div class={{this.contentActionClass}} data-qa={{this.getDataQa "actions"}}>
							{{#if (has-block "action")}}
								{{yield this.displayMessage to="action"}}
							{{else if (this.showClose this.displayMessage)}}
								<UlxIconButton
									@iconLeft="close-stroke-icon"
									@iconComponentClass="bs-icons1"
									@iconSize="s22"
									@text={{true}}
									@variant="secondary"
									@size={{@size}}
									@customClass={{this.closeButtonClass}}
									@onClick={{fn this.handleRemove this.displayMessage}}
									aria-label={{t "lbl.close.notification"}}
									data-qa={{this.getDataQa "close"}}
								/>
							{{/if}}
						</div>
					</div>
					</div>
				</div>
			</div>
		{{/if}}
	</template>
}
