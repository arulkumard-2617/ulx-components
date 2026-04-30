import Component from "@glimmer/component";
import { eq } from "ember-truth-helpers";
import UlxIconButton from "../ulx-icon-button/index.gjs";
import { t } from "../../utils/i18n";

/**
 * Default first / prev / next / last icon buttons for UlxPaginator.
 *
 * @param {"first"|"prev"|"next"|"last"} kind
 * @param {{ icon: string; onClick: Function; disabled: boolean; className: string; ariaLabel: string }} config
 * @param {string} rootDataQa
 */
export default class PaginatorDefaultNavButton extends Component {
	get kind() {
		return this.args.kind;
	}

	get config() {
		return this.args.config;
	}

	get rootDataQa() {
		return this.args.rootDataQa;
	}

	<template>
		{{#if (eq this.kind "first")}}
			<UlxIconButton
				@text={{true}}
				@variant="secondary"
				@iconLeft={{this.config.icon}}
				@customClass={{this.config.className}}
				@disabled={{this.config.disabled}}
				@onClick={{this.config.onClick}}
				aria-label={{this.config.ariaLabel}}
				data-qa="{{this.rootDataQa}}-first"
			/>
		{{else if (eq this.kind "prev")}}
			<UlxIconButton
				@variant="basic"
				@label={{t "label.previous"}}
				@iconLeft={{this.config.icon}}
				@customClass={{this.config.className}}
				@disabled={{this.config.disabled}}
				@onClick={{this.config.onClick}}
				aria-label={{this.config.ariaLabel}}
				data-qa="{{this.rootDataQa}}-prev"
			/>
		{{else if (eq this.kind "next")}}
			<UlxIconButton
				@variant="basic"
				@label={{t "label.next"}}
				@iconRight={{this.config.icon}}
				@customClass={{this.config.className}}
				@disabled={{this.config.disabled}}
				@onClick={{this.config.onClick}}
				aria-label={{this.config.ariaLabel}}
				data-qa="{{this.rootDataQa}}-next"
			/>
		{{else if (eq this.kind "last")}}
			<UlxIconButton
				@text={{true}}
				@variant="secondary"
				@iconLeft={{this.config.icon}}
				@customClass={{this.config.className}}
				@disabled={{this.config.disabled}}
				@onClick={{this.config.onClick}}
				aria-label={{this.config.ariaLabel}}
				data-qa="{{this.rootDataQa}}-last"
			/>
		{{/if}}
	</template>
}
