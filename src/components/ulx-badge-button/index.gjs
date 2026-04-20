import Component from "@glimmer/component";
import UlxButton from "../ulx-button/index.gjs";
import UlxBadge from "../ulx-badge/index.gjs";

/**
 * Badge button wrapper built on top of UlxButton.
 * Renders badge markup through UlxButton suffix slot.
 *
 * @class UlxBadgeButton
 * @param {string|number} [badge] - Badge value/text
 * @param {'primary'|'secondary'|'success'|'info'|'warning'|'danger'} [badgeVariant='primary'] - Badge variant
 * @param {string} [badgeSize] - Badge size class (xs-size, s-size, m-size, l-size, xl-size)
 * @param {'circle'|'dot'|'square'} [badgeType='circle'] - Badge shape/type
 * @param {string} [badgeCustomClass] - Custom badge CSS classes
 */
export default class UlxBadgeButton extends Component {
	get showBadge() {
		return this.args.badge !== undefined && this.args.badge !== null;
	}

	get badgeType() {
		return this.args.badgeType ?? "circle";
	}

	<template>
		<UlxButton
			@label={{@label}}
			@href={{@href}}
			@variant={{@variant}}
			@pilled={{@pilled}}
			@text={{@text}}
			@outlined={{@outlined}}
			@size={{@size}}
			@fluid={{@fluid}}
			@disabled={{@disabled}}
			@dataQa={{@dataQa}}
			@type={{@type}}
			@loading={{@loading}}
			@onClick={{@onClick}}
			@elementRef={{@elementRef}}
			@dropdownTargetRef={{@dropdownTargetRef}}
			@class={{@class}}
			@customClass={{@customClass}}
			...attributes
		>
			<:prefix>{{yield to="prefix"}}</:prefix>
			<:default>{{yield}}</:default>
			<:suffix>
				{{#if this.showBadge}}
					<UlxBadge
						@value={{@badge}}
						@variant={{@badgeVariant}}
						@size={{@badgeSize}}
						@type={{this.badgeType}}
						@customClass={{@badgeCustomClass}}
					/>
				{{/if}}
			</:suffix>
		</UlxButton>
	</template>
}
