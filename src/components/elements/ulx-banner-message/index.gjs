import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import { modifier } from "ember-modifier";
import { getComponentClass } from "../../../utils/component-config";
import { t } from "../../../utils/i18n";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxButton from "../ulx-button/index.gjs";

const ENTER_DONE_CLASS = "enter-done";

const DEFAULT_ICON_BY_VARIANT = {
	info: "info-circle-icon",
	success: "check-circle-icon",
	warn: "exclamation-triangle-icon",
	error: "x-circle-icon"
};

const DEFAULT_LIFE_MS = 3000;

/**
 * Messages container: displays a list of messages with variant, summary, detail,
 * optional close button, and optional auto-close (life) or sticky behavior.
 * Uses existing classes from messages.less. Argument-driven: @messages and @onRemove.
 *
 * @class UlxBannerMessage
 * @param {Array<{ id: string, variant?: string, summary?: string, detail?: string, closable?: boolean, sticky?: boolean, life?: number, icon?: string }>} [messages=[]] - List of message objects
 * @param {function} [onRemove] - Callback when a message is removed; receives the message object
 * @param {string} [customClass] - Extra CSS classes for the root container
 * @param {string} [id] - Id for the root element
 * @param {string} [size="m-size"] - Size class for container and each message (e.g. xs-size, s-size, m-size, l-size, xl-size)
 * @block content - Optional. Yields (message); when provided, replaces default summary/detail with custom content.
 * @block leftItem - Optional. Yields (message); custom left-side content per message (icon, avatar, image). Falls back to default icon when not provided.
 * @block action - Optional. Yields (message); custom right-side action area per message. Falls back to default close button when not provided.
 */
export default class UlxBannerMessage extends Component {
	@tracked _closeTimeouts = new Map();

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

	get rootClasses() {
		const { customClass, size = "m-size" } = this.args;
		const parts = [this.messagesBaseClass];
		size && parts.push(size);
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get messages() {
		const list = this.args.messages ?? [];
		this._scheduleCloseTimers(list);
		return list;
	}

	_shouldAutoClose(message) {
		if (message?.sticky) return false;
		return typeof message?.life === "number" && message.life > 0;
	}

	_scheduleCloseTimers(list) {
		const currentIds = new Set(list.map((m) => m?.id).filter(Boolean));
		for (const [id, timerId] of this._closeTimeouts) {
			if (!currentIds.has(id)) {
				clearTimeout(timerId);
				this._closeTimeouts.delete(id);
			}
		}
		for (const message of list) {
			if (!message?.id || !this._shouldAutoClose(message)) continue;
			if (this._closeTimeouts.has(message.id)) continue;
			const life = message.life ?? DEFAULT_LIFE_MS;
			const timerId = setTimeout(() => {
				this.args.onRemove?.(message);
				this._closeTimeouts.delete(message.id);
			}, life);
			this._closeTimeouts.set(message.id, timerId);
		}
	}

	@action
	getMessageRootClasses(message) {
		const { size = "m-size" } = this.args;
		const variant = message?.variant ?? "info";
		const parts = [this.messagesBaseClass, variant];
		size && parts.push(size);
		return parts.filter(Boolean).join(" ");
	}

	get wrapperClass() {
		return `${this.messageBaseClass}-wrapper`;
	}

	get detailClass() {
		return `${this.messageBaseClass}-detail`;
	}

	get summaryClass() {
		return `${this.messageBaseClass}-summary`;
	}

	get iconClass() {
		return `${this.messageBaseClass}-icon`;
	}

	get closeButtonClass() {
		return `${this.messageBaseClass}-close-button`;
	}

	@action
	getMessageIcon(message) {
		return message?.icon;
	}

	@action
	showClose(message) {
		return !!message?.closable;
	}

	@action
	handleRemove(message) {
		if (message?.id && this._closeTimeouts.has(message.id)) {
			clearTimeout(this._closeTimeouts.get(message.id));
			this._closeTimeouts.delete(message.id);
		}
		this.args.onRemove?.(message);
	}

	<template>
		<div class={{this.rootClasses}} id={{@id}} ...attributes>
			<div>
				{{#each this.messages key="id" as |message|}}
					<div
						class={{this.getMessageRootClasses message}}
						role="alert"
						aria-live="assertive"
						aria-atomic="true"
						{{this.addEnterDoneAfterRender}}
					>
						<div class={{this.wrapperClass}}>
							{{#if (has-block "content")}}
								{{yield message to="content"}}
							{{else}}
								{{#if (has-block "leftItem")}}
									{{yield message to="leftItem"}}
								{{else if message.icon}}
									<span class={{this.iconClass}} aria-hidden="true">
										<UlxIcon
											@componentClass="bs-icons1"
											@type="font"
											@iconName={{message.icon}}
											@size="s18"
										/>
									</span>
								{{/if}}
								{{#if message.summary}}
									<span class={{this.summaryClass}}>{{message.summary}}</span>
								{{/if}}
								{{#if message.detail}}
									<span class={{this.detailClass}}>{{message.detail}}</span>
								{{/if}}
							{{/if}}
							{{#if (has-block "action")}}
								{{yield message to="action"}}
							{{else if (this.showClose message)}}
								<UlxButton
									@icon="close-stroke-icon"
									@iconComponentClass="bs-icons1"
									@iconSize="s18"
									@text={{true}}
									@variant="secondary"
									@size={{@size}}
									@customClass={{this.closeButtonClass}}
									@onClick={{fn this.handleRemove message}}
									aria-label={{t "lbl.close.notification"}}
								/>
							{{/if}}
						</div>
					</div>
				{{/each}}
			</div>
		</div>
	</template>
}
