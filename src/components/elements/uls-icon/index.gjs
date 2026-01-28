import Component from "@glimmer/component";
import { getComponentClass } from "../../../utils/component-config";

/**
 * Icon element component.
 * @class UlsIcon
 */
export default class UlsIcon extends Component {
	get iconClass() {
		return getComponentClass("icon");
	}

	<template>
		<span class={{this.iconClass}} ...attributes>asdadasd</span>
	</template>
}
