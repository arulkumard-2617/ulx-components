import Component from "@glimmer/component";
import UlxButton from "../ulx-button/index.gjs";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import { getComponentClass } from "../../../utils/component-config";

class IconButtonAffixGraphic extends Component {
	get loadingWrapperClass() {
		const { side = "left" } = this.args;
		return `${getComponentClass("button")}-loading-icon ${side}`;
	}

	<template>
		{{#if @affix.isLoading}}
			<span class={{this.loadingWrapperClass}} aria-hidden="true">
				<UlxProgressSpinner @size={{@affix.buttonSize}} @color="white" aria-hidden="true" />
			</span>
		{{else if @hasCustomIcon}}
			{{yield}}
		{{else}}
			<UlxIcon
				@iconName={{@affix.icon}}
				@type="font"
				@componentClass={{@affix.iconComponentClass}}
				@size={{@affix.iconSize}}
				@customClass={{@affix.iconClass}}
				aria-hidden="true"
			/>
		{{/if}}
	</template>
}

/**
 * Icon button wrapper built on top of UlxButton.
 * Icon/spinner content is passed into UlxButton via its prefix/suffix slots only.
 * Callers use `@icon` and optional `<:icon>`; prefix/suffix blocks are not supported.
 *
 * @class UlxIconButton
 * @param {string} [label] - Button label text
 * @param {string} [icon] - Icon name (font icon class), passed to UlxIcon
 * @param {string} [iconComponentClass] - UlxIcon base class (e.g. "bs-icons1")
 * @param {string} [iconSize] - Icon size class (e.g. s13, s16, s18)
 * @param {'left'|'right'} [iconPos='left'] - Icon position relative to label/content
 * @param {boolean} [loading=false] - Shows explicit spinner state
 * @param {string} [size] - Button size class from parent
 * @param {string} [customClass] - Additional CSS classes for root button
 */
export default class UlxIconButton extends Component {
	get iconPosition() {
		return this.args.iconPos || "left";
	}

	get isLoading() {
		return !!this.args.loading;
	}

	get hasIconContent() {
		return this.isLoading || !!this.args.icon;
	}

	get showIconLeft() {
		return this.hasIconContent && this.iconPosition === "left";
	}

	get showIconRight() {
		return this.hasIconContent && this.iconPosition === "right";
	}

	get buttonSize() {
		return this.args.size || "m-size";
	}

	get isIconOnly() {
		return !this.args.label;
	}

	get iconClass() {
		const parts = ["icon"];
		!this.isIconOnly && parts.push(this.iconPosition);
		return parts.join(" ");
	}

	get buttonCustomClass() {
		const { customClass } = this.args;
		const parts = [];
		this.isIconOnly && parts.push("icon-only");
		customClass && parts.push(customClass);
		return parts.filter(Boolean).join(" ") || undefined;
	}

	get affixGraphicProps() {
		const { icon, iconComponentClass, iconSize } = this.args;
		return {
			isLoading: this.isLoading,
			buttonSize: this.buttonSize,
			icon,
			iconComponentClass,
			iconSize,
			iconClass: this.iconClass
		};
	}

	<template>
		<UlxButton
			@label={{@label}}
			@href={{@href}}
			@variant={{@variant}}
			@raised={{@raised}}
			@rounded={{@rounded}}
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
			@customClass={{this.buttonCustomClass}}
			...attributes
		>
			<:prefix>
				{{#if this.showIconLeft}}
					<IconButtonAffixGraphic
						@affix={{this.affixGraphicProps}}
						@hasCustomIcon={{has-block "icon"}}
						@side="left"
					>
						{{yield to="icon"}}
					</IconButtonAffixGraphic>
				{{/if}}
			</:prefix>

			<:suffix>
				{{#if this.showIconRight}}
					<IconButtonAffixGraphic
						@affix={{this.affixGraphicProps}}
						@hasCustomIcon={{has-block "icon"}}
						@side="right"
					>
						{{yield to="icon"}}
					</IconButtonAffixGraphic>
				{{/if}}
			</:suffix>
		</UlxButton>
	</template>
}
