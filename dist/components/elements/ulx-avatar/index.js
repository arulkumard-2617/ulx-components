import { b as _initializerDefineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { getComponentClass } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import GeneralUtil from '../../../utils/general-util.js';
import UlxIcon from '../ulx-icon/index.js';
import { on } from '@ember/modifier';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _UlxAvatar;
let UlxAvatar = (_class = (_UlxAvatar = class UlxAvatar extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "isImageLoaded", _descriptor, this);
  }
  get baseClass() {
    const {
      componentClass
    } = this.args;
    return componentClass ?? getComponentClass("avatar");
  }
  get rootDataQa() {
    const {
      dataQa
    } = this.args;
    return dataQa ?? "ulx-avatar";
  }
  get memberProfile() {
    const {
      memberProfile
    } = this.args;
    return memberProfile ?? null;
  }
  get hasMemberContext() {
    const {
      member,
      memberProfile,
      nameOnly
    } = this.args;
    return Boolean(member || memberProfile || nameOnly || this.memberProfile);
  }
  get resolvedFullName() {
    const profile = this.memberProfile;
    if (this.isAnonymous) {
      return t("lbl.anonymous.user");
    }
    const {
      fullName
    } = this.args;
    if (fullName) {
      return fullName;
    }
    return profile?.fullName ?? profile?.name ?? profile?.userProfileTranslation?.fullName ?? undefined;
  }
  get ariaLabel() {
    const {
      ariaLabel
    } = this.args;
    return ariaLabel ?? this.resolvedFullName;
  }
  get resolvedImage() {
    const {
      image
    } = this.args;
    const profile = this.memberProfile;
    if (image) {
      return image;
    }
    if (profile?.avatarUrl) {
      return profile.avatarUrl;
    }
    if (profile?.avatar) {
      return profile.avatar;
    }
    return undefined;
  }
  get canShowAvatar() {
    const {
      canShowAvatar
    } = this.args;
    if (typeof canShowAvatar === "boolean") {
      return canShowAvatar;
    }
    const profile = this.memberProfile;
    if (!profile) {
      return false;
    }
    const hasAvatarFlags = profile.hasBsAvatar || profile.hasIAMPhoto || profile.hasImage;
    const rawUrl = profile.avatarUrl || profile.avatar;
    const {
      noImageSentinel
    } = this.args;
    const isNoImage = typeof noImageSentinel === "string" && rawUrl === noImageSentinel;
    return Boolean(rawUrl && !isNoImage && hasAvatarFlags);
  }
  get isAnonymous() {
    return Boolean(this.memberProfile?.isAnnon);
  }
  get resolvedIconName() {
    const {
      iconName
    } = this.args;
    if (typeof iconName === "string" && iconName.length > 0) {
      return iconName;
    }
    if (this.isAnonymous) {
      return "anonymous-icon";
    }
    return undefined;
  }
  get resolvedIconType() {
    const {
      iconType
    } = this.args;
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
    const {
      disabled = false,
      customClass
    } = this.args;
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
    const {
      clickable = false,
      onShowProfile,
      onClick
    } = this.args;
    return Boolean(clickable || typeof onShowProfile === "function" || typeof onClick === "function");
  }
  get size() {
    const {
      size,
      avatarSize
    } = this.args;
    return size ?? avatarSize ?? "m-size";
  }
  get shape() {
    const {
      shape,
      circular = false
    } = this.args;
    if (shape) {
      return shape;
    }
    return circular ? "circle" : "square";
  }
  get resolvedVariant() {
    const {
      variant,
      nameOnly = false,
      index
    } = this.args;
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
      const profile = this.memberProfile;
      if (profile?.colorTheme) {
        return profile.colorTheme;
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
    const {
      nameOnly = false,
      name
    } = this.args;
    if (nameOnly && typeof name === "string" && name.length > 0) {
      return this.buildInitials(name);
    }
    const fullName = this.resolvedFullName;
    if (fullName) {
      return this.buildInitials(fullName);
    }
    const profile = this.memberProfile;
    if (profile?.firstName || profile?.lastName) {
      const combined = [profile.firstName, profile.lastName].filter(Boolean).join(" ");
      return this.buildInitials(combined);
    }
    const fallbackName = profile?.name ?? profile?.email;
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
    return this.args.imageAlt ?? this.ariaLabel ?? this.label ?? t("lbl.image");
  }
  buildInitials(source) {
    if (typeof source !== "string") {
      return undefined;
    }
    const parts = source.split(/\s+/).filter(Boolean).slice(0, 2);
    if (parts.length === 0) {
      return undefined;
    }
    const initials = parts.map(part => part[0]).join("").toUpperCase();
    return initials;
  }
  handleImageLoad(event) {
    const {
      onLoad
    } = this.args;
    this.isImageLoaded = true;
    if (typeof onLoad === "function") {
      onLoad(event);
    }
  }
  handleImageError(event) {
    const {
      onError
    } = this.args;
    this.isImageLoaded = false;
    if (typeof onError === "function") {
      onError(event);
    }
  }
  handleClick(event) {
    const {
      disabled = false,
      onClick,
      onShowProfile,
      member,
      members,
      index
    } = this.args;
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
}, setComponentTemplate(precompileTemplate("\n\t\t\t<span class={{this.rootClasses}} aria-hidden={{this.ariaHidden}} role={{this.role}} aria-label={{this.ariaLabel}} aria-disabled={{if @disabled \"true\"}} data-qa={{this.rootDataQa}} tabindex={{this.tabindex}} {{on \"click\" this.handleClick}} ...attributes>\n\t\t\t\t{{#if this.isImageType}}\n\t\t\t\t\t<img src={{this.resolvedImage}} alt={{this.imageAlt}} class=\"avatar-image\" {{on \"load\" this.handleImageLoad}} {{on \"error\" this.handleImageError}} />\n\t\t\t\t{{else if this.isIconType}}\n\t\t\t\t\t<span class=\"avatar-icon\">\n\t\t\t\t\t\t<UlxIcon @iconName={{this.resolvedIconName}} @type={{this.resolvedIconType}} @componentClass={{@iconComponentClass}} @ariaLabel={{@iconAriaLabel}} />\n\t\t\t\t\t</span>\n\t\t\t\t{{else if this.isTextType}}\n\t\t\t\t\t<span class=\"avatar-label\">\n\t\t\t\t\t\t{{this.label}}\n\t\t\t\t\t</span>\n\t\t\t\t{{/if}}\n\t\t\t</span>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    UlxIcon
  })
}), _UlxAvatar), _UlxAvatar), _descriptor = _applyDecoratedDescriptor(_class.prototype, "isImageLoaded", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "handleImageLoad", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleImageLoad"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleImageError", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleImageError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _class);

export { UlxAvatar as default };
//# sourceMappingURL=index.js.map
