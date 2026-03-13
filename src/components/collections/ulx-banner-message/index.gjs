import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fn } from "@ember/helper";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxIcon from "../../elements/ulx-icon/index.gjs";
import UlxButton from "../../elements/ulx-button/index.gjs";

const ENTER_DONE_CLASS = "enter-done";

/**
 * Single-message banner: displays one message with variant, summary, detail,
 * and optional close button. Optional one-time banner: when @dismissStorageKey is set,
 * closing the banner persists the choice so the user won't see it again (localStorage).
 * Uses existing classes from messages.less. Argument-driven: @message and @onRemove.
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
 * @block content - Optional. Yields (message); when provided, replaces default summary/detail with custom content.
 * @block leftItem - Optional. Yields (message); custom left-side content (icon, avatar, image). Icon is shown only when message.icon is set.
 * @block action - Optional. Yields (message); custom right-side action area. Falls back to default close button when not provided.
 */
export default class UlxBannerMessage extends Component {
	@tracked _dismissed = false;

	addEnterDoneAfterRender = modifier((element) => {
		const rafId = requestAnimationFrame(() => {
			element.classList.add(ENTER_DONE_CLASS);
		});
		return () => cancelAnimationFrame(rafId);
	});

	get messagesBaseClass() {
		return getComponentClass("messages");
	}

	get messageBaseClass() {
		return getComponentClass("message");
	}

	get isDismissed() {
		if (this._dismissed) return true;
		const key = this.args.dismissStorageKey;
		if (!key || typeof window === "undefined" || !window.localStorage) return false;
		return !!window.localStorage.getItem(key);
	}

	get messageToShow() {
		if (this.isDismissed) return null;
		const msg = this.args.message;
		return msg != null ? msg : null;
	}

	@action
	getMessageRootClasses(message) {
		const { customClass, size = "m-size" } = this.args;
		const variant = message?.variant ?? "info";
		const parts = [this.messagesBaseClass, variant];
		size && parts.push(size);
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get wrapperClass() {
		return `${this.messageBaseClass}-wrapper`;
	}

	get detailClass() {
		return `${this.messageBaseClass}-detail`;
	}

	get contentClass() {
		return "message-content";
	}

	/** Wrapper for summary + detail (aligns with message.less .message-text) */
	get contentTextClass() {
		return "message-text";
	}

	/** Wrapper for action block or close button */
	get contentActionClass() {
		return "message-actions";
	}

	get summaryClass() {
		return `${this.messageBaseClass}-summary`;
	}

	get iconClass() {
		return `${this.messageBaseClass}-icon`;
	}

	get resolvedIconType() {
		return this.args.iconType ?? "svg";
	}

	get resolvedIconSize() {
		return this.args.iconSize;
	}

	get closeButtonClass() {
		return `${this.messageBaseClass}-close-button`;
	}

	@action
	showClose(message) {
		return !!message?.closable;
	}

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
		{{#if this.messageToShow}}
			<div
				class={{this.getMessageRootClasses this.messageToShow}}
				id={{@id}}
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
				data-qa="ulx-banner-message"
				{{this.addEnterDoneAfterRender}}
				...attributes
			>
				<div class={{this.wrapperClass}} data-qa="ulx-banner-message-wrapper">
					{{#if (has-block "leftItem")}}
						{{yield this.messageToShow to="leftItem"}}
					{{else if this.messageToShow.icon}}
						<span class={{this.iconClass}} aria-hidden="true" data-qa="ulx-banner-message-icon">
							<UlxIcon
								@componentClass="bs-icons1"
								@type={{this.resolvedIconType}}
								@iconName={{this.messageToShow.icon}}
								@size={{this.resolvedIconSize}}
							/>
						</span>
					{{/if}}
					<div class={{this.contentClass}} data-qa="ulx-banner-message-content">
						{{#if (has-block "content")}}
							{{yield this.messageToShow to="content"}}
						{{else}}
							<div class={{this.contentTextClass}}>
								{{#if this.messageToShow.summary}}
									<h5 class={{this.summaryClass}}>{{this.messageToShow.summary}}</h5>
								{{/if}}
								{{#if this.messageToShow.detail}}
									<span class={{this.detailClass}}>{{this.messageToShow.detail}}</span>
								{{/if}}
							</div>
						{{/if}}
						<div class={{this.contentActionClass}} data-qa="ulx-banner-message-actions">
							{{#if (has-block "action")}}
								{{yield this.messageToShow to="action"}}
							{{else if (this.showClose this.messageToShow)}}
								<UlxButton
									@icon="close-stroke-icon"
									@iconComponentClass="bs-icons1"
									@iconSize="s22"
									@text={{true}}
									@variant="secondary"
									@size={{@size}}
									@customClass={{this.closeButtonClass}}
									@onClick={{fn this.handleRemove this.messageToShow}}
									aria-label={{t "lbl.close.notification"}}
									data-qa="ulx-banner-message-close"
								/>
							{{/if}}
						</div>
					</div>
				</div>
			</div>
		{{/if}}
	</template>
}
