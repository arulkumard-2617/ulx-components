import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { getComponentClass } from "../../utils/component-config";
import { t } from "../../utils/i18n";
import GeneralUtil from "../../utils/general-util";
import { getValue } from "../../utils/object-util";
import UlxIcon from "../ulx-icon/index.gjs";
import { on } from "@ember/modifier";

/**
 * Avatar component for displaying user representations using images, icons, or text labels.
 *
 * ## WCAG
 * - **Decorative avatars**: By default, avatars are decorative (`aria-hidden="true"`). For meaningful avatars (e.g., user profile pictures), provide `@ariaLabel` to make them accessible.
 * - **Image avatars**: Provide `@imageAlt` and/or `@ariaLabel`. When the root has an accessible name (`@ariaLabel` / resolved member name), the inner `img` uses `alt=""` so the name is not announced twice.
 * - **Icon avatars**: Icons within avatars inherit accessibility from UlxIcon component. Provide `@ariaLabel` when the icon conveys meaning.
 * - **Text avatars**: Text labels are decorative by default. Provide `@ariaLabel` when the avatar represents a specific person or entity.
 * - **Interactive avatars**: When clickable (`@clickable`, `@onClick`, or `@onShowProfile`), the root is a native `<button type="button">` for keyboard (Enter/Space) and semantics. Provide `@ariaLabel` or meaningful visible content / image `alt` for an accessible name.
 * - **Override via attributes**: You can override accessibility attributes via `...attributes` (e.g., `aria-hidden="false"`, `role="img"`, `aria-label="..."`).
 *
 * @class UlxAvatar
 * @param {string} [type="text"] - Avatar type: "image" | "icon" | "text". Determines how content is rendered.
 * @param {string} [label] - Text label to display when `@type="text"`. Typically initials or short text.
 * @param {string} [image] - Image URL to display when `@type="image"`.
 * @param {string} [imageAlt] - Alt text for the image when `@type="image"`. Falls back to `@ariaLabel` or `@label` if not provided. Use empty string for decorative images.
 * @param {string} [iconName] - Icon name/class to display when `@type="icon"`. Passed to UlxIcon component.
 * @param {string} [variant] - Color variant for avatar background. Options: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "red" | "green" | "blue" | "purple" | "orange" | "gold" | "black" | "grey" | "yellow" | "violet" | "pink" | "brown" | "teal" | "darkturquoise" | "olive" | "nightblue" | "magenta". Defaults to no variant (uses default background).
 * @param {string} [size="m-size"] - Size variant: "xs-size" | "s-size" | "m-size" | "l-size" | "xl-size". Defaults to "m-size".
 * @param {string} [shape="square"] - Shape variant: "circle" | "square". Defaults to "square".
 * @param {string} [ariaLabel] - Accessible name for meaningful avatars. When provided, automatically sets `aria-hidden="false"` and `role="img"`.
 * @param {boolean} [disabled=false] - When true, applies disabled styling and prevents interaction.
 * @param {boolean} [clickable=false] - When true, applies clickable styling with hover/active states. Requires `@ariaLabel` for accessibility.
 * @param {string} [customClass] - Extra CSS classes appended to the root element.
 * @param {string} [componentClass] - Override base component class (defaults to "ulx-avatar").
 * @param {string} [dataQa] - Optional `data-qa` override (defaults to `ulx-avatar`).
 * @param {Function} [onLoad] - Optional image load handler when `@type="image"`. Receives the native load event.
 * @param {Function} [onError] - Optional image error handler when `@type="image"`. Receives the native error event.
 *
 * // Member-aware arguments (optional)
 * @param {object} [memberProfile] - Member profile object containing avatar and name information.
 * @param {string} [fullName] - Explicit full name for the member. Falls back to profile fields when not provided.
 * @param {boolean} [nameOnly=false] - When true, renders initials based on `@name` or `@fullName` without image.
 * @param {string} [name] - Display name used for initials when `@nameOnly` is true.
 * @param {number} [index] - Optional index used to derive pseudo-unique color variants in `nameOnly` mode.
 * @param {string} [avatarSize] - Legacy avatar size. Mapped to `@size` when provided.
 * @param {boolean} [circular=false] - Convenience flag to force circle shape when `@shape` is not provided.
 * @param {boolean} [canShowAvatar] - Optional explicit flag to control whether the image avatar should be shown.
 * @param {string} [noImageSentinel] - Optional sentinel value that represents \"no image\" for the resolved avatar URL.
 * @param {object} [member] - Domain member object forwarded to `@onShowProfile` when the avatar is clicked.
 * @param {Function} [onShowProfile] - Optional callback invoked on click with `(member, members, index)` to approximate legacy `showProfile` action.
 * @param {Array} [members] - Optional members collection forwarded to `@onShowProfile` for parity with legacy API.
 * @param {number} [index] - Optional index forwarded to `@onShowProfile` for parity with legacy API.
 */
export default class UlxAvatar extends Component {
	@tracked isImageLoaded = false;

	get baseClass() {
		const { componentClass } = this.args;
		return componentClass ?? getComponentClass("avatar");
	}

	get rootDataQa() {
		const { dataQa } = this.args;
		return dataQa ?? "ulx-avatar";
	}

	get memberProfile() {
		const { memberProfile } = this.args;
		return memberProfile ?? null;
	}

	get hasMemberContext() {
		const { memberProfile, nameOnly } = this.args;
		return Boolean(memberProfile || nameOnly || this.memberProfile);
	}

	get resolvedFullName() {
		if (this.isAnonymous) {
			return t("label.anonymous");
		}

		const { fullName } = this.args;

		if (fullName) {
			return fullName;
		}

		const profile = this.memberProfile;

		return (
			getValue(profile, "fullName") ??
			getValue(profile, "name") ??
			getValue(profile, "userProfileTranslation.fullName") ??
			undefined
		);
	}

	get ariaLabel() {
		const { ariaLabel } = this.args;
		return ariaLabel ?? this.resolvedFullName;
	}

	get resolvedImage() {
		const { image } = this.args;
		const profile = this.memberProfile;

		if (image) {
			return image;
		}

		const avatarUrl = getValue(profile, "avatarUrl");
		if (avatarUrl) {
			return avatarUrl;
		}

		const avatar = getValue(profile, "avatar");
		if (avatar) {
			return avatar;
		}

		return undefined;
	}

	get canShowAvatar() {
		const { canShowAvatar } = this.args;

		if (typeof canShowAvatar === "boolean") {
			return canShowAvatar;
		}

		const profile = this.memberProfile;

		if (!profile) {
			return false;
		}

		const hasAvatarFlags =
			getValue(profile, "hasBsAvatar") ||
			getValue(profile, "hasIAMPhoto") ||
			getValue(profile, "hasImage");

		const rawUrl = getValue(profile, "avatarUrl") || getValue(profile, "avatar");
		const { noImageSentinel } = this.args;
		const isNoImage = typeof noImageSentinel === "string" && rawUrl === noImageSentinel;

		return Boolean(rawUrl && !isNoImage && hasAvatarFlags);
	}

	get isAnonymous() {
		return Boolean(getValue(this.memberProfile, "isAnnon"));
	}

	get resolvedIconName() {
		const { iconName } = this.args;

		if (typeof iconName === "string" && iconName.length > 0) {
			return iconName;
		}

		if (this.isAnonymous) {
			return "anonymous-icon";
		}

		return undefined;
	}

	get resolvedIconType() {
		const { iconType } = this.args;

		if (typeof iconType === "string" && iconType.length > 0) {
			return iconType;
		}

		if (this.isAnonymous) {
			return "font";
		}

		return "svg";
	}

	get avatarType() {
		// Explicit type always wins for generic usage.
		if (this.args.type) {
			return this.args.type;
		}

		// Member-aware: use avatar URL or icon; fall back to text only when neither is available.
		if (this.hasMemberContext) {
			const hasImage = this.canShowAvatar && this.resolvedImage;
			const hasIcon = this.resolvedIconName;

			if (hasImage) {
				return "image";
			}

			if (hasIcon) {
				return "icon";
			}

			return "text";
		}

		// Default for plain usage.
		return "text";
	}

	get rootClasses() {
		const { disabled = false, customClass } = this.args;
		const {
			resolvedVariant: variant,
			size,
			shape,
			resolvedImage: image,
			isClickable: clickable
		} = this;

		const parts = [this.baseClass];

		// Variant (color)
		variant && parts.push(variant);

		// Size
		parts.push(size);

		// Shape
		shape === "circle" && parts.push("circle");
		shape === "square" && parts.push("square");

		// Image class
		image && parts.push("image");

		// States
		disabled && parts.push("disabled");
		clickable && parts.push("clickable");

		// Custom classes
		customClass && parts.push(customClass);

		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isImageType() {
		return this.avatarType === "image";
	}

	get isIconType() {
		return this.avatarType === "icon";
	}

	get isTextType() {
		return this.avatarType === "text";
	}

	get hasAriaLabel() {
		return typeof this.ariaLabel === "string" && this.ariaLabel.length > 0;
	}

	get ariaHidden() {
		return this.hasAriaLabel ? "false" : "true";
	}

	get role() {
		return this.hasAriaLabel ? "img" : undefined;
	}

	get isClickable() {
		const { clickable = false, onShowProfile, onClick } = this.args;

		return Boolean(
			clickable || typeof onShowProfile === "function" || typeof onClick === "function"
		);
	}

	get size() {
		const { size, avatarSize } = this.args;
		return size ?? avatarSize ?? "m-size";
	}

	get shape() {
		const { shape, circular = false } = this.args;

		if (shape) {
			return shape;
		}

		return circular ? "circle" : "square";
	}

	get resolvedVariant() {
		const { variant, nameOnly = false, index } = this.args;

		if (variant) {
			return variant;
		}

		if (!this.isImageLoaded || !this.canShowAvatar) {
			if (this.isAnonymous) {
				return "grey";
			}

			if (nameOnly) {
				return GeneralUtil.getPseudoUniqueColorClass(index);
			}

			const colorTheme = getValue(this.memberProfile, "colorTheme");
			if (colorTheme) {
				return colorTheme;
			}
		}

		return undefined;
	}

	get label() {
		// Explicit label from args always wins.
		if (typeof this.args.label === "string" && this.args.label.length > 0) {
			return this.args.label;
		}

		if (this.avatarType === "icon") {
			return undefined;
		}

		const { nameOnly = false, name } = this.args;

		if (nameOnly && typeof name === "string" && name.length > 0) {
			return this.buildInitials(name);
		}

		const fullName = this.resolvedFullName;

		if (fullName) {
			return this.buildInitials(fullName);
		}

		const profile = this.memberProfile;
		const firstName = getValue(profile, "firstName");
		const lastName = getValue(profile, "lastName");

		if (firstName || lastName) {
			const combined = [firstName, lastName].filter(Boolean).join(" ");

			return this.buildInitials(combined);
		}

		const fallbackName = getValue(profile, "name") ?? getValue(profile, "email");

		if (fallbackName) {
			return this.buildInitials(fallbackName);
		}

		return undefined;
	}

	get tabindex() {
		if (this.isClickable) {
			return this.args.disabled ? "-1" : "0";
		}
		return undefined;
	}

	get imageAlt() {
		return this.args.imageAlt ?? this.ariaLabel ?? this.label ?? t("label.image");
	}

	buildInitials(source) {
		if (typeof source !== "string") {
			return undefined;
		}

		const trimmed = source.trim();

		if (!trimmed) {
			return undefined;
		}

		const namesArray = trimmed.split(" ");

		let initials;

		if (namesArray.length > 1) {
			initials = namesArray
				.flatMap((item) => (Boolean(item) ? item[0].toUpperCase() : []))
				.slice(0, 2)
				.join("");
		} else {
			initials = namesArray
				.flatMap((item) => (Boolean(item) ? item.slice(0, 2).toUpperCase() : []))
				.join("");
		}

		return initials || undefined;
	}

	@action
	handleImageLoad(event) {
		const { onLoad } = this.args;

		this.isImageLoaded = true;

		if (typeof onLoad === "function") {
			onLoad(event);
		}
	}

	@action
	handleImageError(event) {
		const { onError } = this.args;

		this.isImageLoaded = false;

		if (typeof onError === "function") {
			onError(event);
		}
	}

	@action
	handleClick(event) {
		const { disabled = false, onClick, onShowProfile, member, members, index } = this.args;

		if (disabled) {
			return;
		}

		if (typeof onClick === "function") {
			onClick(event);
		}

		if (typeof onShowProfile === "function") {
			onShowProfile(member, members, index);
		}
	}

	<template>
		<span
			class={{this.rootClasses}}
			aria-hidden={{this.ariaHidden}}
			role={{this.role}}
			aria-label={{this.ariaLabel}}
			aria-disabled={{if @disabled "true"}}
			data-qa={{this.rootDataQa}}
			tabindex={{this.tabindex}}
			{{on "click" this.handleClick}}
			...attributes
		>
			{{#if this.isImageType}}
				<img
					src={{this.resolvedImage}}
					alt={{this.imageAlt}}
					class="avatar-image"
					{{on "load" this.handleImageLoad}}
					{{on "error" this.handleImageError}}
				/>
			{{else if this.isIconType}}
				<span class="avatar-icon">
					<UlxIcon
						@iconName={{this.resolvedIconName}}
						@type={{this.resolvedIconType}}
						@componentClass={{@iconComponentClass}}
						@ariaLabel={{@iconAriaLabel}}
					/>
				</span>
			{{else if this.isTextType}}
				<span class="avatar-label">
					{{this.label}}
				</span>
			{{/if}}
		</span>
	</template>
}
