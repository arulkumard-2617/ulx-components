// AUTO-GENERATED FILE. DO NOT EDIT.
// Run `npm run generate:component-api` from `ulx/` to refresh.

const componentApiRegistry = {
  "accordion": {
    "componentName": "UlxAccordion",
    "componentDirectory": "ulx-accordion",
    "sourcePath": "src/components/ulx-accordion/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Tabs. Each item: { header (string), disabled? (boolean), content? (string) }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number|number[]|null",
        "required": false,
        "defaultValue": "null",
        "hasDefaultValue": true,
        "description": "Controlled open index (single) or array (multiple)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple tabs open",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabOpen",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a tab opens: ({ originalEvent, index }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabClose",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a tab closes: ({ originalEvent, index }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when open state changes: ({ originalEvent, index }) => void; index is number or number[]",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'s-size'",
        "hasDefaultValue": true,
        "description": "Size: xs-size, s-size, m-size, l-size, xl-size",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual: filled, elevated, flat",
        "section": null,
        "scope": "component"
      },
      {
        "name": "spacing",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "compact, spacious",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "rounded, square",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-stroke-icon-new'",
        "hasDefaultValue": true,
        "description": "Font icon when tab is collapsed",
        "section": null,
        "scope": "component"
      },
      {
        "name": "collapseIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-stroke-icon-new'",
        "hasDefaultValue": true,
        "description": "Font icon when tab is expanded",
        "section": null,
        "scope": "component"
      },
      {
        "name": "toggleIconPosition",
        "type": "'left'|'right'",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Position of the expand/collapse icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for accordion",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-accordion`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "avatar": {
    "componentName": "UlxAvatar",
    "componentDirectory": "ulx-avatar",
    "sourcePath": "src/components/ulx-avatar/index.gjs",
    "params": [
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "Avatar type: \"image\" | \"icon\" | \"text\". Determines how content is rendered.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Text label to display when `@type=\"text\"`. Typically initials or short text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "image",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL to display when `@type=\"image\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "imageAlt",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alt text for the image when `@type=\"image\"`. Falls back to `@ariaLabel` or `@label` if not provided. Use empty string for decorative images.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name/class to display when `@type=\"icon\"`. Passed to UlxIcon component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Color variant for avatar background. Options: \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"danger\" | \"red\" | \"green\" | \"blue\" | \"purple\" | \"orange\" | \"gold\" | \"black\" | \"grey\" | \"yellow\" | \"violet\" | \"pink\" | \"brown\" | \"teal\" | \"darkturquoise\" | \"olive\" | \"nightblue\" | \"magenta\". Defaults to no variant (uses default background).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\". Defaults to \"m-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": "\"square\"",
        "hasDefaultValue": true,
        "description": "Shape variant: \"circle\" | \"square\". Defaults to \"square\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful avatars. When provided, automatically sets `aria-hidden=\"false\"` and `role=\"img\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies disabled styling and prevents interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies clickable styling with hover/active states. Requires `@ariaLabel` for accessibility.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-avatar\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-qa` override (defaults to `ulx-avatar`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onLoad",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional image load handler when `@type=\"image\"`. Receives the native load event.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional image error handler when `@type=\"image\"`. Receives the native error event.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "member",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Domain member object. When provided, `member.userProfile` is used as a fallback for profile data.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "memberProfile",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Member profile object containing avatar and name information.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fullName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Explicit full name for the member. Falls back to profile fields when not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "nameOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, renders initials based on `@name` or `@fullName` without image.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Display name used for initials when `@nameOnly` is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "index",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional index used to derive pseudo-unique color variants in `nameOnly` mode.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "avatarSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Legacy avatar size. Mapped to `@size` when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "circular",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Convenience flag to force circle shape when `@shape` is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "canShowAvatar",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional explicit flag to control whether the image avatar should be shown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "noImageSentinel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional sentinel value that represents \\\"no image\\\" for the resolved avatar URL.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShowProfile",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional callback invoked on click with `(member, members, index)` to approximate legacy `showProfile` action.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "members",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional members collection forwarded to `@onShowProfile` for parity with legacy API.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "avatar-group": {
    "componentName": "UlxAvatarGroup",
    "componentDirectory": "ulx-avatar-group",
    "sourcePath": "src/components/ulx-avatar-group/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of avatar items to display. Each item supports all UlxAvatar props.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stacked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies stacked/overlapping layout where avatars overlap each other.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maxVisible",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Maximum number of avatars to display. Remaining count is shown as overflow indicator (e.g., \"+2\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default size for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default shape for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size for the overflow UlxPopup. Defaults to UlxPopup default when not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, the root uses `role=\"group\"` and this `aria-label` for the collection.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-avatar-group\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-qa` on the root (defaults to `ulx-avatar-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "avatargroup": {
    "componentName": "UlxAvatarGroup",
    "componentDirectory": "ulx-avatar-group",
    "sourcePath": "src/components/ulx-avatar-group/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of avatar items to display. Each item supports all UlxAvatar props.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stacked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies stacked/overlapping layout where avatars overlap each other.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maxVisible",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Maximum number of avatars to display. Remaining count is shown as overflow indicator (e.g., \"+2\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default size for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default shape for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size for the overflow UlxPopup. Defaults to UlxPopup default when not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, the root uses `role=\"group\"` and this `aria-label` for the collection.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-avatar-group\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-qa` on the root (defaults to `ulx-avatar-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "badge": {
    "componentName": "UlxBadge",
    "componentDirectory": "ulx-badge",
    "sourcePath": "src/components/ulx-badge/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Content to display inside the badge. If not provided, children will be rendered.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Color variant: \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"danger\" | \"contrast\" | \"light-grey\". Defaults to \"primary\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size variant: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\". Defaults to \"s-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge type: \"circle\" | \"dot\" | \"square\" (default). \"dot\" renders as a dot indicator without text content; use `@ariaLabel` for a meaningful dot. \"circle\" applies fully rounded shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful badges. When provided, automatically sets `aria-hidden=\"false\"` and `role=\"status\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies disabled styling and prevents interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies clickable styling with hover/active states and focus (`tabindex=\"0\"`). Requires `@ariaLabel` for accessibility.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-badge\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "badge-button": {
    "componentName": "UlxBadgeButton",
    "componentDirectory": "ulx-badge-button",
    "sourcePath": "src/components/ulx-badge-button/index.gjs",
    "params": [
      {
        "name": "badge",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge value/text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeVariant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Badge variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge size class (xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeType",
        "type": "'circle'|'dot'|'square'",
        "required": false,
        "defaultValue": "'circle'",
        "hasDefaultValue": true,
        "description": "Badge shape/type",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeCustomClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom badge CSS classes",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "badgebutton": {
    "componentName": "UlxBadgeButton",
    "componentDirectory": "ulx-badge-button",
    "sourcePath": "src/components/ulx-badge-button/index.gjs",
    "params": [
      {
        "name": "badge",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge value/text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeVariant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Badge variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge size class (xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeType",
        "type": "'circle'|'dot'|'square'",
        "required": false,
        "defaultValue": "'circle'",
        "hasDefaultValue": true,
        "description": "Badge shape/type",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeCustomClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom badge CSS classes",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "banner-message": {
    "componentName": "UlxBannerMessage",
    "componentDirectory": "ulx-banner-message",
    "sourcePath": "src/components/ulx-banner-message/index.gjs",
    "params": [
      {
        "name": "message",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single message object: { id?: string, variant?: string, summary?: string, detail?: string, closable?: boolean, icon?: string }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onRemove",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when the message is removed; receives the message object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dismissStorageKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, banner is one-time: after close we persist this key in localStorage and do not show again until key is cleared",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes for the root container",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class for container and message (e.g. xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": "\"svg\"",
        "hasDefaultValue": true,
        "description": "Icon type for message icon (e.g. \"svg\", \"font\"). Default \"svg\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for message icon (e.g. s18). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-banner-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "bannermessage": {
    "componentName": "UlxBannerMessage",
    "componentDirectory": "ulx-banner-message",
    "sourcePath": "src/components/ulx-banner-message/index.gjs",
    "params": [
      {
        "name": "message",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single message object: { id?: string, variant?: string, summary?: string, detail?: string, closable?: boolean, icon?: string }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onRemove",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when the message is removed; receives the message object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dismissStorageKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, banner is one-time: after close we persist this key in localStorage and do not show again until key is cleared",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes for the root container",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class for container and message (e.g. xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": "\"svg\"",
        "hasDefaultValue": true,
        "description": "Icon type for message icon (e.g. \"svg\", \"font\"). Default \"svg\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for message icon (e.g. s18). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-banner-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "button": {
    "componentName": "UlxButton",
    "componentDirectory": "ulx-button",
    "sourcePath": "src/components/ulx-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button label text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "href",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, renders as <a href=\"{{href}}\">; otherwise <button>",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'|'white'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Button variant/type (`help` is accepted as an alias for `help-button`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pilled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Pill-shaped border radius (adds `pilled` class)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant (transparent background)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant (transparent background with border)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Omit for m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Full width button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-button\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'button'|'submit'|'reset'",
        "required": false,
        "defaultValue": "'button'",
        "hasDefaultValue": true,
        "description": "Button type attribute",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, button shows loading spinner and is disabled. Use for always-on loading state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClick",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Click handler; may return a Promise to show loading until it settles",
        "section": null,
        "scope": "component"
      },
      {
        "name": "elementRef",
        "type": "Modifier",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional modifier (or element-ref callback) applied to the root element for parent ref capture (e.g. dropdown target)",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "button-group": {
    "componentName": "UlxButtonGroup",
    "componentDirectory": "ulx-button-group",
    "sourcePath": "src/components/ulx-button-group/index.gjs",
    "params": [
      {
        "name": "orientation",
        "type": "'horizontal'|'vertical'",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "Layout direction",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Equal-width buttons (grid)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "severity",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Severity for active state styling",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "raised",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Raised variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-button-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "buttongroup": {
    "componentName": "UlxButtonGroup",
    "componentDirectory": "ulx-button-group",
    "sourcePath": "src/components/ulx-button-group/index.gjs",
    "params": [
      {
        "name": "orientation",
        "type": "'horizontal'|'vertical'",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "Layout direction",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Equal-width buttons (grid)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "severity",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Severity for active state styling",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "raised",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Raised variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-button-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "card": {
    "componentName": "UlxCard",
    "componentDirectory": "ulx-card",
    "sourcePath": "src/components/ulx-card/index.gjs",
    "params": [
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Card title text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "subTitle",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional subtitle text under the title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "header",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional header content; when provided, rendered inside header section above title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footer",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional footer content; rendered inside footer section.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appearance",
        "type": "'outlined'|'elevated'|'flat'",
        "required": false,
        "defaultValue": "'outlined'",
        "hasDefaultValue": true,
        "description": "Visual style variant from card.less.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'contrast'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tone variant for outlined cards.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size modifier from card.less.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "density",
        "type": "'compact'|'spacious'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Content density modifier.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"rounded\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "square",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"square\" class (overrides rounded).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"interactive\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alias for interactive; also adds \"interactive\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hoverable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"hoverable\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes applied to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class; defaults to getComponentClass('card').",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "'ulx-card'",
        "hasDefaultValue": true,
        "description": "Root data-qa identifier; internal element identifiers are derived from this value.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "checkbox": {
    "componentName": "UlxCheckbox",
    "componentDirectory": "ulx-checkbox",
    "sourcePath": "src/components/ulx-checkbox/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID for the checkbox input. Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional list of checkbox items. When provided, the component renders a group. Each item supports: `{ label, checked, indeterminate, disabled, customClass, id }`. Provide a string `id` per item when the list can reorder or grow; otherwise ids are derived from index (stable across checked toggles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@items` is provided: (item, checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Whether the checkbox is checked (controlled) (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the checkbox is in indeterminate state (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Name attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single checkbox label rendered next to the checkbox (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object for constraints (old component pattern): { required: true }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the checkbox is disabled (single mode) or disables all items (group mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the field is in invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether to use filled variant styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"s-size\", \"m-size\", \"l-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the items wrapper (appended to base `ulx-checkbox-group`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the checkbox wrapper (single mode or per-item).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-describedby` for the checkbox input (used by group rendering).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-errormessage` for the checkbox input (used by group rendering).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on change event (single/bare): (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next checked value (single/bare): (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-checkbox\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "chip": {
    "componentName": "UlxChip",
    "componentDirectory": "ulx-chip",
    "sourcePath": "src/components/ulx-chip/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main text shown in the chip.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name/class for UlxIcon (e.g. font class); renders before label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "image",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL; when set, renders before label (avatar-style).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "imageAlt",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alt text for the image; defaults to t(\"lbl.image\") when omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "removable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, shows remove control and wires click/keyboard.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "removeIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for remove button; defaults to close icon from bs-icons1.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onRemove",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback (event, value) when remove is triggered; value is label, image, or icon context.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onImageError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when image fails to load.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class (e.g. \"s-size\", \"m-size\"); applied to root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "\"ulx-chip\"",
        "hasDefaultValue": true,
        "description": "data-qa value for root element, useful for automation tests.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "chip-input": {
    "componentName": "UlxChipInput",
    "componentDirectory": "ulx-chip-input",
    "sourcePath": "src/components/ulx-chip-input/index.gjs",
    "params": [
      {
        "name": "chips",
        "type": "string[]",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Controlled list of current chip values.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChipsChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with the updated chips array when chips are added or removed.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder text for the text field.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "separator",
        "type": "string|string[]",
        "required": false,
        "defaultValue": "[\"Enter\", \",\"]",
        "hasDefaultValue": true,
        "description": "Key(s) that commit the typed value as a chip. `\"Enter\"` on keydown; single printable characters on input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Maximum number of chips allowed. Adding beyond this is ignored.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the entire control.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies invalid visual state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class applied to the root wrapper.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes for the root wrapper.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "inputAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "aria-label for the inner text field.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the root role=\"group\" when the control needs a group label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "data-view": {
    "componentName": "UlxDataView",
    "componentDirectory": "ulx-data-view",
    "sourcePath": "src/components/ulx-data-view/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "\"list\"",
        "hasDefaultValue": true,
        "description": "Layout variant: \"list\" or \"grid\". Adds layout-list or layout-grid class to root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "gridRole",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional ARIA role for the main content container (e.g. \"list\" for list semantics).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS class for root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` override (defaults to `ulx-dataview`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "dataview": {
    "componentName": "UlxDataView",
    "componentDirectory": "ulx-data-view",
    "sourcePath": "src/components/ulx-data-view/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "\"list\"",
        "hasDefaultValue": true,
        "description": "Layout variant: \"list\" or \"grid\". Adds layout-list or layout-grid class to root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "gridRole",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional ARIA role for the main content container (e.g. \"list\" for list semantics).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS class for root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` override (defaults to `ulx-dataview`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "divider": {
    "componentName": "UlxDivider",
    "componentDirectory": "ulx-divider",
    "sourcePath": "src/components/ulx-divider/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "'horizontal'|'vertical'",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "Divider layout (affects orientation + base class).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "align",
        "type": "'left'|'center'|'right'|'top'|'bottom'|null",
        "required": false,
        "defaultValue": "null",
        "hasDefaultValue": true,
        "description": "Content alignment. When omitted, align classes are only applied when content is present.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'solid'|'dashed'|'dotted'",
        "required": false,
        "defaultValue": "'solid'",
        "hasDefaultValue": true,
        "description": "Divider line style.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'s-size'",
        "hasDefaultValue": true,
        "description": "ULS size class: xs-size | s-size | m-size | l-size | xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thickness",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS thickness class: size-2 | size-3.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS color/variant class: primary | dark | secondary.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base `ulx-divider` class (rare).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "dropdown": {
    "componentName": "UlxDropdown",
    "componentDirectory": "ulx-dropdown",
    "sourcePath": "src/components/ulx-dropdown/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "any",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Selected value (controlled).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options (objects or scalars). Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name or path for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name or path for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionImageUrl",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Property name or path for option image URL (e.g. for value/item templates). When set, yielded hash includes imageUrl.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, options are groups; this is the group label key.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupChildren",
        "type": "string",
        "required": false,
        "defaultValue": "'items'",
        "hasDefaultValue": true,
        "description": "When optionGroupLabel is set, key for group children.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder when nothing selected.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the dropdown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows progress spinner instead of dropdown icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show filter input in panel.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClear",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show clear icon when value is set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checkmark",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show checkmark on selected item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder for filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when options list is empty.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyFilterMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when filter has no results.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": "'232px'",
        "hasDefaultValue": true,
        "description": "Max height of option list (CSS value).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'self'",
        "hasDefaultValue": true,
        "description": "Where the overlay panel is created. - `\"self\"` keeps the panel in-place after the dropdown markup (default). - `\"body\"` appends the panel to `<body>`. - `HTMLElement`: append to that element. - `Function`: called to resolve the destination element. - `string`: a CSS selector resolved with `document.querySelector()`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that closes the overlay immediately.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` override for automation (default `ulx-dropdown`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the trigger (for label `for` / ARIA).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the trigger id (e.g. `@key={{field.key}}` with `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` ids (e.g. from `UlxField` control hash).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` id (e.g. `field.errorId`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "`aria-required` on the combobox.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(value) => void when selection changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFocus",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Focus callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBlur",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Blur callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void when filter input changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay opens.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(option) => boolean or property key to disable options.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay panel z-index (e.g. when rendered above other overlays).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "empty-state": {
    "componentName": "UlxEmptyState",
    "componentDirectory": "ulx-empty-state",
    "sourcePath": "src/components/ulx-empty-state/index.gjs",
    "params": [
      {
        "name": "headerText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Title (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "subHeaderText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Subtitle (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon for UlxIcon (font or symbol name).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for icon (default s48).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "containerClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on inner container.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "marginClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Margin class for the actions area (default mt-6).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-empty-state\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "emptystate": {
    "componentName": "UlxEmptyState",
    "componentDirectory": "ulx-empty-state",
    "sourcePath": "src/components/ulx-empty-state/index.gjs",
    "params": [
      {
        "name": "headerText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Title (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "subHeaderText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Subtitle (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon for UlxIcon (font or symbol name).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for icon (default s48).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "containerClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on inner container.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "marginClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Margin class for the actions area (default mt-6).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-empty-state\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "field": {
    "componentName": "UlxField",
    "componentDirectory": "ulx-field",
    "sourcePath": "src/components/ulx-field/index.gjs",
    "params": [
      {
        "name": "fieldClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root `.field` wrapper.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fieldId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable id for the control, help, and error nodes. Auto-generated when omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Plain-text label (or use the `label` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "helpText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Help copy rendered below the control (linked via `aria-describedby`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error copy; when set, invalid region is shown and linked via `aria-errormessage`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional info icon tooltip next to the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`{ required: true }` or editor-style `{ required: t('…'), format: { with, allowBlank, msg }, maxLength: { value?, msg } }`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "field-set": {
    "componentName": "UlxFieldSet",
    "componentDirectory": "ulx-fieldset",
    "sourcePath": "src/components/ulx-fieldset/index.gjs",
    "params": [
      {
        "name": "legend",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Legend text (or use the `legend` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional description (or use the `description` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "'grid'|'stack'",
        "required": false,
        "defaultValue": "'grid'",
        "hasDefaultValue": true,
        "description": "Content layout inside the fieldset wrapper region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Disables all nested controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset **content wrapper** (e.g. `gap-6`, `col-2`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "actionsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset actions region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` (default `ulx-fieldset`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "fieldset": {
    "componentName": "UlxFieldSet",
    "componentDirectory": "ulx-fieldset",
    "sourcePath": "src/components/ulx-fieldset/index.gjs",
    "params": [
      {
        "name": "legend",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Legend text (or use the `legend` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional description (or use the `description` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "'grid'|'stack'",
        "required": false,
        "defaultValue": "'grid'",
        "hasDefaultValue": true,
        "description": "Content layout inside the fieldset wrapper region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Disables all nested controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset **content wrapper** (e.g. `gap-6`, `col-2`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "actionsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset actions region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` (default `ulx-fieldset`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "form": {
    "componentName": "UlxForm",
    "componentDirectory": "ulx-form",
    "sourcePath": "src/components/ulx-form/index.gjs",
    "params": [
      {
        "name": "onSubmit",
        "type": "(event: SubmitEvent) => void",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Submit handler; prevents default navigation when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onReset",
        "type": "(event: Event) => void",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Reset handler.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'m-size'|'l-size'|'xl-size'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size variant (default s-size has no class).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes on the form root. Avoid `ulx-grid` here; use `UlxFieldSet` `@layout=\"grid\"` (and `@customClass` on the fieldset wrapper) for field groups.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "actionsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the actions wrapper (base `ulx-form-actions`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` (default `ulx-form`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "icon": {
    "componentName": "UlxIcon",
    "componentDirectory": "ulx-icon",
    "sourcePath": "src/components/ulx-icon/index.gjs",
    "params": [
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Symbol id or font class. Not used when a custom block is provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful icons. When set, aria-hidden becomes \"false\" and role=\"img\" is applied so screen readers announce it (e.g. close icon in modal).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class (e.g. \"s18\", \"m-size\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional class for icon styling (e.g. \"bs-icons1\" for font icons).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "\"svg\" = symbol reference; \"font\" = font icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "\"ulx-icon\"",
        "hasDefaultValue": true,
        "description": "Root test selector override.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "icon-button": {
    "componentName": "UlxIconButton",
    "componentDirectory": "ulx-icon-button",
    "sourcePath": "src/components/ulx-icon-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button label text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconLeft",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the prefix (left of label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the suffix (right of label). If both are set, `iconRight` wins.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "UlxIcon base class (e.g. \"bs-icons1\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon size class (e.g. s13, s16, s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows explicit spinner state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button size class from parent",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for root button",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "icon-input": {
    "componentName": "UlxIconInput",
    "componentDirectory": "ulx-icon-input",
    "sourcePath": "src/components/ulx-icon-input/index.gjs",
    "params": [
      {
        "name": "iconLeft",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the left, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the right, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when using a string `iconLeft` / `iconRight`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on `UlxIcon` (`@customClass`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Meaningful name for the preset icon; sets wrapper visibility for AT.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon field size class (default `m-size`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Adds `disabled` on the icon-field root; mirror the inner control.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconFieldClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the icon-field root.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "iconbutton": {
    "componentName": "UlxIconButton",
    "componentDirectory": "ulx-icon-button",
    "sourcePath": "src/components/ulx-icon-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button label text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconLeft",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the prefix (left of label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the suffix (right of label). If both are set, `iconRight` wins.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "UlxIcon base class (e.g. \"bs-icons1\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon size class (e.g. s13, s16, s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows explicit spinner state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button size class from parent",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for root button",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "iconinput": {
    "componentName": "UlxIconInput",
    "componentDirectory": "ulx-icon-input",
    "sourcePath": "src/components/ulx-icon-input/index.gjs",
    "params": [
      {
        "name": "iconLeft",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the left, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the right, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when using a string `iconLeft` / `iconRight`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on `UlxIcon` (`@customClass`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Meaningful name for the preset icon; sets wrapper visibility for AT.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon field size class (default `m-size`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Adds `disabled` on the icon-field root; mirror the inner control.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconFieldClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the icon-field root.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "image": {
    "componentName": "UlxImage",
    "componentDirectory": "ulx-image",
    "sourcePath": "src/components/ulx-image/index.gjs",
    "params": [
      {
        "name": "src",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "alt",
        "type": "string",
        "required": false,
        "defaultValue": "\"\"",
        "hasDefaultValue": true,
        "description": "`alt` for the inner `<img>`; empty string for decorative images.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "'square'|'rounded'|'circle'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`rounded` / `circle` map to ULS modifiers. `square` adds the `square` crop modifier; pair with `@size` so ULS applies fixed square dimensions.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'|'xxl-size'|'xxxl-size'|'img-size-100'|'img-size-75'|'img-size-50'|'img-size-25'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS `image.less` on the root: fixed scale tokens (`xs-size`–`xxxl-size`, pair with `shape=\"square\"` for square crop) or fluid width utilities (`img-size-*` percentages).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "objectFit",
        "type": "'cover'|'contain'|'fill'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`object-*` modifier on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "aspectRatio",
        "type": "'square'|'video'|'portrait'|'four-three'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`img-aspect-*` fluid aspect box on the root (pair with parent width constraints and/or `@size` such as `img-size-100`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thumbLandscape",
        "type": "'xs'|'s'|'m'|'l'|'xl'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Fixed 16:9 thumbnail: `thumb-landscape-*` (ULS section 4).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thumbPortrait",
        "type": "'xs'|'s'|'m'|'l'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Fixed 9:16 thumbnail: `thumb-portrait-*`. Do not set both `thumbLandscape` and `thumbPortrait` on the same instance.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`width` attribute on `<img>` (layout hint / CLS).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "height",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`height` attribute on `<img>` (layout hint / CLS).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "'lazy'|'eager'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `loading` hint.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "decoding",
        "type": "'auto'|'sync'|'async'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `decoding`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "crossorigin",
        "type": "'anonymous'|'use-credentials'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `crossorigin`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base class (defaults to `getComponentClass('image')`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`data-qa` on the root (defaults to `ulx-image`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "input": {
    "componentName": "UlxInput",
    "componentDirectory": "ulx-input",
    "sourcePath": "src/components/ulx-input/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key or id; overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.describedBy`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.errorId`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "message": {
    "componentName": "UlxMessage",
    "componentDirectory": "ulx-message",
    "sourcePath": "src/components/ulx-message/index.gjs",
    "params": [
      {
        "name": "text",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Shown when no block is passed; ignored when a block is provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'info'|'success'|'warn'|'error'",
        "required": false,
        "defaultValue": "'info'",
        "hasDefaultValue": true,
        "description": "Visual variant (demos: \"Variant\", not \"Severity\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Renders `UlxIcon` when set; icon wrapper is `aria-hidden`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when `icon` is set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size token (e.g. xs-size … xl-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root id (via `...attributes`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` override (default `ulx-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "messages": {
    "componentName": "UlxMessage",
    "componentDirectory": "ulx-message",
    "sourcePath": "src/components/ulx-message/index.gjs",
    "params": [
      {
        "name": "text",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Shown when no block is passed; ignored when a block is provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'info'|'success'|'warn'|'error'",
        "required": false,
        "defaultValue": "'info'",
        "hasDefaultValue": true,
        "description": "Visual variant (demos: \"Variant\", not \"Severity\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Renders `UlxIcon` when set; icon wrapper is `aria-hidden`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when `icon` is set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size token (e.g. xs-size … xl-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root id (via `...attributes`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` override (default `ulx-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "modal": {
    "componentName": "UlxModal",
    "componentDirectory": "ulx-modal",
    "sourcePath": "src/components/ulx-modal/index.gjs",
    "params": [
      {
        "name": "visible",
        "type": "boolean",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controls modal visibility",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Modal title (used when no :head block provided)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Modal width (CSS value, e.g. \"500px\", \"50%\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "\"center\"",
        "hasDefaultValue": true,
        "description": "Modal position: \"center\", \"top\", \"bottom\", \"left\", \"right\", \"top-left\", \"top-right\", \"bottom-left\", \"bottom-right\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Modal size: \"xs-size\", \"s-size\", \"m-size\", \"l-size\", \"xl-size\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Enable scrollable content area",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnBackdrop",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Close modal when backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close modal when Escape key is pressed",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showCloseButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show close button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"close-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"expand-icon\"",
        "hasDefaultValue": true,
        "description": "Icon name for maximize button (when not maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "minimizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"collapse-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for minimize/restore button (when maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "animationType",
        "type": "string",
        "required": false,
        "defaultValue": "\"fade\"",
        "hasDefaultValue": true,
        "description": "Animation type: \"fade\", \"zoom\", \"slide\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: \"elevated\", \"flat\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "draggable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enable dragging dialog by header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "resizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enable resizing dialog",
        "section": null,
        "scope": "component"
      },
      {
        "name": "overlay",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, no overlay/backdrop; dialog is non-blocking (non-modal mask styling)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "blockScroll",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Block body scroll when modal is visible",
        "section": null,
        "scope": "component"
      },
      {
        "name": "keepInViewport",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Keep dialog within viewport bounds",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show maximize/minimize button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximized",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Display dialog in maximized state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "breakpoints",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Responsive width breakpoints, e.g. {\"960px\": \"75vw\", \"640px\": \"90vw\"}",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maskClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS class for mask/backdrop",
        "section": null,
        "scope": "component"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for content area (dialog-content)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for header (dialog-header)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for footer (dialog-footer)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when modal is hidden/closed (close button, escape key, backdrop click)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when cancel button is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when done/confirm button is clicked. If returns a Promise, modal waits for completion before auto-closing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when modal is shown",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaskClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when mask/backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaximize",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when maximize state changes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when onDone/onCancel promise rejects (receives error as argument)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnDone",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Auto-close modal after onDone promise resolves successfully",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnCancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Auto-close modal after onCancel completes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Cancel label (defaults to i18n cancel)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Confirm label (defaults to i18n confirm)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "submittingLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label for done button during submission (defaults to doneButtonLabel)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no :footer block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide the header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndexBase",
        "type": "number",
        "required": false,
        "defaultValue": "1000",
        "hasDefaultValue": true,
        "description": "Base z-index for modal stacking",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` on the mask (defaults to `ulx-modal`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "multi-select": {
    "componentName": "UlxMultiSelect",
    "componentDirectory": "ulx-multi-select",
    "sourcePath": "src/components/ulx-multi-select/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Selected values array (controlled).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options. Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name or path for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name or path for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, options are groups; this is the group label key.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupChildren",
        "type": "string",
        "required": false,
        "defaultValue": "'items'",
        "hasDefaultValue": true,
        "description": "When optionGroupLabel is set, key for group children.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder when nothing selected.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "display",
        "type": "string",
        "required": false,
        "defaultValue": "'comma'",
        "hasDefaultValue": true,
        "description": "'comma' | 'chip' for selected display.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectionLimit",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Max number of selections (optional).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows progress spinner in trigger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Show filter input in panel. When not provided, filter auto-enables for larger option lists (more than 10).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClose",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show close (X) button in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClear",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show a Clear action in the panel footer when value has items. Pass `false` to disable.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAll",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show select-all checkbox in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAllLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label for select-all checkbox. When empty string, checkbox is shown without text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder for filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when options list is empty.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyFilterMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when filter has no results.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": "'232px'",
        "hasDefaultValue": true,
        "description": "Max height of option list (CSS value).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": "1100",
        "hasDefaultValue": true,
        "description": "Overlay z-index (useful when the panel must stack above nearby overlays).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'self'",
        "hasDefaultValue": true,
        "description": "Where to render the overlay panel. - `\"self\"`: keep the panel in-place after the component markup (default). - `\"body\"`: append overlay to `<body>`. - `HTMLElement`: append to that element. - `Function`: called to resolve the container element. - `string`: a CSS selector resolved via `document.querySelector()`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "renderContainer",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that closes the overlay immediately.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "resetFilterOnHide",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Reset filter when overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the trigger (or use `@key` with UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable id when `@id` is omitted (e.g. `field.key` from UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` ids (e.g. from UlxField control hash).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` id (e.g. `field.errorId`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Required field.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(value) => void when selection changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFocus",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Focus callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBlur",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Blur callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void when filter input changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "allowAddition",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, show an Add button in the panel header tied to the filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onAddItem",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void | Promise<void>; when the Add button is clicked; only invoked if the trimmed filter does not match an existing option label or value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay opens.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelectAll",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional (event, checked) => void; when provided overrides default select-all.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(option) => boolean or property key to disable options.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "virtualScrollerOptions",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set with <code>itemSize</code> (number, px), the list is virtualized for large datasets. Not used when <code>@optionGroupLabel</code> is set.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "multiselect": {
    "componentName": "UlxMultiSelect",
    "componentDirectory": "ulx-multi-select",
    "sourcePath": "src/components/ulx-multi-select/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Selected values array (controlled).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options. Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name or path for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name or path for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, options are groups; this is the group label key.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupChildren",
        "type": "string",
        "required": false,
        "defaultValue": "'items'",
        "hasDefaultValue": true,
        "description": "When optionGroupLabel is set, key for group children.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder when nothing selected.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "display",
        "type": "string",
        "required": false,
        "defaultValue": "'comma'",
        "hasDefaultValue": true,
        "description": "'comma' | 'chip' for selected display.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectionLimit",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Max number of selections (optional).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows progress spinner in trigger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Show filter input in panel. When not provided, filter auto-enables for larger option lists (more than 10).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClose",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show close (X) button in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClear",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show a Clear action in the panel footer when value has items. Pass `false` to disable.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAll",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show select-all checkbox in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAllLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label for select-all checkbox. When empty string, checkbox is shown without text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder for filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when options list is empty.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyFilterMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when filter has no results.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": "'232px'",
        "hasDefaultValue": true,
        "description": "Max height of option list (CSS value).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": "1100",
        "hasDefaultValue": true,
        "description": "Overlay z-index (useful when the panel must stack above nearby overlays).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'self'",
        "hasDefaultValue": true,
        "description": "Where to render the overlay panel. - `\"self\"`: keep the panel in-place after the component markup (default). - `\"body\"`: append overlay to `<body>`. - `HTMLElement`: append to that element. - `Function`: called to resolve the container element. - `string`: a CSS selector resolved via `document.querySelector()`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "renderContainer",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that closes the overlay immediately.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "resetFilterOnHide",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Reset filter when overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the trigger (or use `@key` with UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable id when `@id` is omitted (e.g. `field.key` from UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` ids (e.g. from UlxField control hash).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` id (e.g. `field.errorId`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Required field.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(value) => void when selection changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFocus",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Focus callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBlur",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Blur callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void when filter input changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "allowAddition",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, show an Add button in the panel header tied to the filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onAddItem",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void | Promise<void>; when the Add button is clicked; only invoked if the trimmed filter does not match an existing option label or value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay opens.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelectAll",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional (event, checked) => void; when provided overrides default select-all.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(option) => boolean or property key to disable options.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "virtualScrollerOptions",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set with <code>itemSize</code> (number, px), the list is virtualized for large datasets. Not used when <code>@optionGroupLabel</code> is set.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "option-segment": {
    "componentName": "UlxOptionSegment",
    "componentDirectory": "ulx-option-segment",
    "sourcePath": "src/components/ulx-option-segment/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "\"stacked\"|\"tile\"",
        "required": false,
        "defaultValue": "\"stacked\"",
        "hasDefaultValue": true,
        "description": "`stacked` lists vertically; `tile` lays out items in a row with wrap (`layout-tile` on the group)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selection",
        "type": "\"control\"|\"center\"|\"corner\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Selection affordance (root class `selection-<value>` for styling). Omit for `@type=\"color-swatch\"` (no `selection-*` class). - **control** — default when using built-in radio/checkbox/tristate; emphasize the `.option-control` column. - **corner** — default when `@type=\"basic\"` or a custom `<:control>` block; corner tick/check treatment via CSS. - **center** — always opt-in (`@selection=\"center\"`); full-card selection (tint, ring, or `::after` layer). No separate Ember behavior—target `.ulx-option-segments.selection-center` in styles.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "List of option items. When provided, the component renders a group: - Each item can include: - {string} value - {boolean} [selected] - {boolean} [disabled] - {boolean} [compact] - {string} [title] - {string} [description] - {Array<object>} [nestedItems] - {string} [itemClass] - Extra classes for this row only (after group `@itemClass`) - {string} [optionColorCode] - Color for **color-swatch** groups (`@type=\"color-swatch\"`); sets `--ulx-option-color-code` on the card. - {string} [colorCode] - Alias of **optionColorCode**. - {string} [id] - Unique id for the embedded control when items can reorder; otherwise ids use index (stable when toggling selection).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selected",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Single-item selected state (when `@items` is not used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disable interaction when true (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "compact",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Use the compact visual variant (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value passed back to `@onSelect` (single-item mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelect",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked on click / key activation: `(selected, value, event) => void`",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary label text when no `title` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Helper text when no `description` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "CSS class applied to every `.option-item` root (before each item's own `itemClass`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for embedded controls and title/description ids (first list item). Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, stable key for auto-generated ids (e.g. `@key={{field.key}}` with `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom ARIA role for the root element (overrides `@type`-based role)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "optionsegment": {
    "componentName": "UlxOptionSegment",
    "componentDirectory": "ulx-option-segment",
    "sourcePath": "src/components/ulx-option-segment/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "\"stacked\"|\"tile\"",
        "required": false,
        "defaultValue": "\"stacked\"",
        "hasDefaultValue": true,
        "description": "`stacked` lists vertically; `tile` lays out items in a row with wrap (`layout-tile` on the group)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selection",
        "type": "\"control\"|\"center\"|\"corner\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Selection affordance (root class `selection-<value>` for styling). Omit for `@type=\"color-swatch\"` (no `selection-*` class). - **control** — default when using built-in radio/checkbox/tristate; emphasize the `.option-control` column. - **corner** — default when `@type=\"basic\"` or a custom `<:control>` block; corner tick/check treatment via CSS. - **center** — always opt-in (`@selection=\"center\"`); full-card selection (tint, ring, or `::after` layer). No separate Ember behavior—target `.ulx-option-segments.selection-center` in styles.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "List of option items. When provided, the component renders a group: - Each item can include: - {string} value - {boolean} [selected] - {boolean} [disabled] - {boolean} [compact] - {string} [title] - {string} [description] - {Array<object>} [nestedItems] - {string} [itemClass] - Extra classes for this row only (after group `@itemClass`) - {string} [optionColorCode] - Color for **color-swatch** groups (`@type=\"color-swatch\"`); sets `--ulx-option-color-code` on the card. - {string} [colorCode] - Alias of **optionColorCode**. - {string} [id] - Unique id for the embedded control when items can reorder; otherwise ids use index (stable when toggling selection).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selected",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Single-item selected state (when `@items` is not used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disable interaction when true (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "compact",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Use the compact visual variant (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value passed back to `@onSelect` (single-item mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelect",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked on click / key activation: `(selected, value, event) => void`",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary label text when no `title` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Helper text when no `description` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "CSS class applied to every `.option-item` root (before each item's own `itemClass`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for embedded controls and title/description ids (first list item). Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, stable key for auto-generated ids (e.g. `@key={{field.key}}` with `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom ARIA role for the root element (overrides `@type`-based role)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "paginator": {
    "componentName": "UlxPaginator",
    "componentDirectory": "ulx-paginator",
    "sourcePath": "src/components/ulx-paginator/index.gjs",
    "params": [
      {
        "name": "totalRecords",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Total number of records",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rows",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Rows per page",
        "section": null,
        "scope": "component"
      },
      {
        "name": "first",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Zero-based index of first row to display",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pageLinkSize",
        "type": "number",
        "required": false,
        "defaultValue": "5",
        "hasDefaultValue": true,
        "description": "Number of page links to show",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rowsPerPageOptions",
        "type": "number[]",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Options for rows-per-page dropdown (e.g. [10, 20, 30])",
        "section": null,
        "scope": "component"
      },
      {
        "name": "alwaysShow",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show paginator even when only one page",
        "section": null,
        "scope": "component"
      },
      {
        "name": "template",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Layout string, e.g. \"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "currentPageReportTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Report template; placeholders: {currentPage}, {totalPages}, {first}, {last}, {rows}, {totalRecords}",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onPageChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback (event) => void; event: { first, rows, page, totalPages }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "firstPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for first page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "prevPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for previous page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "nextPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for next page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "lastPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for last page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS class for root",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-paginator\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "panel-menu": {
    "componentName": "UlxPanelmenu",
    "componentDirectory": "ulx-panelmenu",
    "sourcePath": "src/components/ulx-panelmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Menu items (panels with nested items).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandedKeys",
        "type": "Object|null",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled expansion map: { [key: string]: true }.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onExpandedKeysChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next expandedKeys map in controlled mode.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onOpen",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel expands: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClose",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel collapses: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple root panels expanded at once.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'right-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for collapsed state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "collapseIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for expanded state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "toggleIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu expand/collapse icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu item icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "flat",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Borderless flat layout (`flat` on root; pairs with ULS `.flat` panelmenu styles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "panelmenu": {
    "componentName": "UlxPanelmenu",
    "componentDirectory": "ulx-panelmenu",
    "sourcePath": "src/components/ulx-panelmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Menu items (panels with nested items).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandedKeys",
        "type": "Object|null",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled expansion map: { [key: string]: true }.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onExpandedKeysChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next expandedKeys map in controlled mode.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onOpen",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel expands: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClose",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel collapses: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple root panels expanded at once.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'right-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for collapsed state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "collapseIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for expanded state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "toggleIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu expand/collapse icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu item icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "flat",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Borderless flat layout (`flat` on root; pairs with ULS `.flat` panelmenu styles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "popup": {
    "componentName": "UlxPopup",
    "componentDirectory": "ulx-popup",
    "sourcePath": "src/components/ulx-popup/index.gjs",
    "params": [
      {
        "name": "basePosition",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "targetRect",
        "type": "DOMRect",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupWidth",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupHeight",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "verticalGap",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "horizontalGap",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "visible",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Controls visibility of the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "target",
        "type": "HTMLElement|Event",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Target element or event for popup positioning.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'body'",
        "hasDefaultValue": true,
        "description": "Where to render the popup overlay.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "renderContainer",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appendTo",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that repositions the popup while open.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "'position-bottom'",
        "hasDefaultValue": true,
        "description": "Positioning class for pointer and offset.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size class: xs-size | s-size | m-size | l-size | xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: elevated | flat | outlined.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay z-index override.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dismissable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true, clicking outside or resizing closes the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, shows a close button in the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true (default), Escape closes the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes applied to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the popup; maps to `aria-label` on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked when popup is shown (parent should set @visible).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked after exit animation completes and popup is fully hidden.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "registerRef",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked with the component instance when the popup is mounted (for calling show/hide/toggle), and with null on teardown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for the header wrapper (when header is shown).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for the footer wrapper (when footer is shown).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default header title. When set and no <:head> block, shows default header with this title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer cancel label (falls back to i18n cancel).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer confirm label (falls back to i18n confirm).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer cancel button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer done button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no <:footer> block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideTertiaryButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "In default footer, hide the tertiary (left) button. Set false with tertiaryButtonLabel to show.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer tertiary button label (e.g. \"Reset\"). Shown when hideTertiaryButton is false.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryButtonIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for default footer tertiary button (passed to UlxButton @icon).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryIconPos",
        "type": "'left'|'right'",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Icon position for tertiary button.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTertiary",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer tertiary button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideCancelButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "In default footer, hide the cancel button.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideDoneButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "In default footer, hide the done button.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "progress-bar": {
    "componentName": "UlxProgressBar",
    "componentDirectory": "ulx-progress-bar",
    "sourcePath": "src/components/ulx-progress-bar/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Progress 0–100. Omit or null for indeterminate.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "mode",
        "type": "'determinate'|'indeterminate'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override: 'indeterminate' forces indeterminate; otherwise inferred from value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showValue",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show percentage label (determinate only). Use hide-value / show-value classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showControls",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, render [ - ] [ bar ] [ + ] [ value% ] layout.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when user clicks + or - with the new value. Required when showControls is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "step",
        "type": "number",
        "required": false,
        "defaultValue": "1",
        "hasDefaultValue": true,
        "description": "Increment/decrement amount for controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "min",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Minimum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": "100",
        "hasDefaultValue": true,
        "description": "Maximum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"xxxs-size\"",
        "hasDefaultValue": true,
        "description": "Size class (e.g. xxxs-size, xs-size, s-size, m-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for control buttons (e.g. s12). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Bar color variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default from getComponentClass('progressbar'))",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressbar\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "progress-spinner": {
    "componentName": "UlxProgressSpinner",
    "componentDirectory": "ulx-progressspinner",
    "sourcePath": "src/components/ulx-progressspinner/index.gjs",
    "params": [
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size). Omit for default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "color",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stroke color (any valid CSS color). Sets uls-v2 progressspinner CSS variables so the spinner uses this color; omit for theme default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes (applied only to parent element)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default: ulx-progressspinner)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name when spinner is the main loading indicator (e.g. \"Loading\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for UlxIcon component. Used when the custom icon block is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for the icon (e.g. \"s18\", \"m-size\"). Defaults to spinner size if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "Icon type for UlxIcon component. \"svg\" = symbol reference; \"font\" = font icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressspinner\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "progressbar": {
    "componentName": "UlxProgressBar",
    "componentDirectory": "ulx-progress-bar",
    "sourcePath": "src/components/ulx-progress-bar/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Progress 0–100. Omit or null for indeterminate.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "mode",
        "type": "'determinate'|'indeterminate'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override: 'indeterminate' forces indeterminate; otherwise inferred from value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showValue",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show percentage label (determinate only). Use hide-value / show-value classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showControls",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, render [ - ] [ bar ] [ + ] [ value% ] layout.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when user clicks + or - with the new value. Required when showControls is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "step",
        "type": "number",
        "required": false,
        "defaultValue": "1",
        "hasDefaultValue": true,
        "description": "Increment/decrement amount for controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "min",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Minimum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": "100",
        "hasDefaultValue": true,
        "description": "Maximum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"xxxs-size\"",
        "hasDefaultValue": true,
        "description": "Size class (e.g. xxxs-size, xs-size, s-size, m-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for control buttons (e.g. s12). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Bar color variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default from getComponentClass('progressbar'))",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressbar\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "progressspinner": {
    "componentName": "UlxProgressSpinner",
    "componentDirectory": "ulx-progressspinner",
    "sourcePath": "src/components/ulx-progressspinner/index.gjs",
    "params": [
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size). Omit for default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "color",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stroke color (any valid CSS color). Sets uls-v2 progressspinner CSS variables so the spinner uses this color; omit for theme default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes (applied only to parent element)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default: ulx-progressspinner)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name when spinner is the main loading indicator (e.g. \"Loading\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for UlxIcon component. Used when the custom icon block is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for the icon (e.g. \"s18\", \"m-size\"). Defaults to spinner size if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "Icon type for UlxIcon component. \"svg\" = symbol reference; \"font\" = font icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressspinner\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "radio": {
    "componentName": "UlxRadio",
    "componentDirectory": "ulx-radio",
    "sourcePath": "src/components/ulx-radio/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID base for the radio(s). Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional list of radio items. When provided, the component renders a group. Each item supports: `{ label, value, checked, disabled, customClass, id }`. Pass string `id` when the list can reorder; otherwise ids use the item index (stable when toggling selection).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@items` is provided: (item, checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Whether the radio is checked (controlled) (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single radio label rendered next to the radio (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object for constraints (old component pattern): { required: true }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error message string for invalid-state calculation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the radio is disabled (single mode) or disables all items (group mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the field is in invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether to use filled variant styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: s-size, m-size, l-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the items wrapper (appended to base `ulx-radio-group`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the radio wrapper (single mode or per-item).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-describedby` for the group/inputs.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-errormessage` for the inputs.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on change event (single/bare): (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next checked value (single/bare): (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-radio\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "rating": {
    "componentName": "UlxRating",
    "componentDirectory": "ulx-rating",
    "sourcePath": "src/components/ulx-rating/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Current rating (0 to stars).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with new value: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stars",
        "type": "number",
        "required": false,
        "defaultValue": "5",
        "hasDefaultValue": true,
        "description": "Number of stars to display.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Whether to show the cancel (reset) icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, value cannot be changed.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"xxs-size\"",
        "hasDefaultValue": true,
        "description": "Size: xxxs-size, xxs-size, xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional: \"filled\" or \"elevated\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the rating group (default from i18n).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-rating\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "segment": {
    "componentName": "UlxSegment",
    "componentDirectory": "ulx-segment",
    "sourcePath": "src/components/ulx-segment/index.gjs",
    "params": [
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Segment type: \"placeholder\", \"vertical\", \"basic\", \"circular\", \"clearing\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: \"red\", \"orange\", \"yellow\", \"olive\", \"green\", \"teal\", \"blue\", \"violet\", \"purple\", \"pink\", \"brown\", \"grey\", \"black\", \"primary\", \"secondary\", \"tertiary\", or with \"-invert\" suffix for inverted colors (e.g., \"blue-invert\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderColor",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Border color variant: \"red\", \"orange\", \"yellow\", \"olive\", \"green\", \"teal\", \"blue\", \"violet\", \"purple\", \"pink\", \"brown\", \"grey\", \"black\", \"primary\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderSide",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Border side for colored border: \"top\", \"bottom\", \"left\", \"right\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "attached",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Attached position: \"top\", \"bottom\", or \"attached\" for middle",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the segment is disabled",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the segment is in loading state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "inline",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether placeholder type should be inline (for placeholder type only)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ARIA role for the segment (defaults to \"region\" for semantic sections, or \"none\" for decorative)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "segments-group": {
    "componentName": "UlxSegmentsGroup",
    "componentDirectory": "ulx-segments-group",
    "sourcePath": "src/components/ulx-segments-group/index.gjs",
    "params": [
      {
        "name": "horizontal",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, displays segments horizontally instead of vertically",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ARIA role for the segments group (defaults to \"group\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "segmentsgroup": {
    "componentName": "UlxSegmentsGroup",
    "componentDirectory": "ulx-segments-group",
    "sourcePath": "src/components/ulx-segments-group/index.gjs",
    "params": [
      {
        "name": "horizontal",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, displays segments horizontally instead of vertically",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ARIA role for the segments group (defaults to \"group\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "select-button": {
    "componentName": "UlxSelectButton",
    "componentDirectory": "ulx-select-button",
    "sourcePath": "src/components/ulx-select-button/index.gjs",
    "params": [
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options (objects or primitives). Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "*",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Current selection. Single value or array when multiple is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on selection change: (value, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "string|Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Property name or function(option) => boolean to disable an option.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple selections; value must be an array.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the whole component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid/error state for validation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stretch",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Buttons stretch to fill width.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size class: xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant: primary, secondary, success, info, warning, help, danger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "styleVariant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual style: filled, text, raised, rounded.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the group (recommended when no visible label).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-selectbutton\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "selectbutton": {
    "componentName": "UlxSelectButton",
    "componentDirectory": "ulx-select-button",
    "sourcePath": "src/components/ulx-select-button/index.gjs",
    "params": [
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options (objects or primitives). Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "*",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Current selection. Single value or array when multiple is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on selection change: (value, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "string|Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Property name or function(option) => boolean to disable an option.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple selections; value must be an array.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the whole component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid/error state for validation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stretch",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Buttons stretch to fill width.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size class: xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant: primary, secondary, success, info, warning, help, danger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "styleVariant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual style: filled, text, raised, rounded.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the group (recommended when no visible label).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-selectbutton\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "skeleton": {
    "componentName": "UlxSkeleton",
    "componentDirectory": "ulx-skeleton",
    "sourcePath": "src/components/ulx-skeleton/index.gjs",
    "params": [
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": "\"rectangle\"",
        "hasDefaultValue": true,
        "description": "Shape of the skeleton: \"rectangle\" | \"circle\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Shorthand for equal width and height (e.g. \"4rem\"). Overrides width/height when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string",
        "required": false,
        "defaultValue": "\"100%\"",
        "hasDefaultValue": true,
        "description": "Width of the skeleton element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "height",
        "type": "string",
        "required": false,
        "defaultValue": "\"1rem\"",
        "hasDefaultValue": true,
        "description": "Height of the skeleton element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderRadius",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom border radius override.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "animation",
        "type": "string",
        "required": false,
        "defaultValue": "\"wave\"",
        "hasDefaultValue": true,
        "description": "Animation type: \"wave\" (default) | \"none\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-skeleton\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-skeleton\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "slide-pane": {
    "componentName": "UlxSlidePane",
    "componentDirectory": "ulx-slide-pane",
    "sourcePath": "src/components/ulx-slide-pane/index.gjs",
    "params": [
      {
        "name": "visible",
        "type": "boolean",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controls pane visibility",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "\"right\"",
        "hasDefaultValue": true,
        "description": "Position: \"left\", \"right\", \"top\", \"bottom\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Pane title (used when no :head block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Preset size: \"s-size\", \"m-size\", \"l-size\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnBackdrop",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close when backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close on Escape key",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showCloseButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show close button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBack",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when header Back is clicked (e.g. for nested panes). When set, Back control is shown in default header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Back\"",
        "hasDefaultValue": true,
        "description": "Accessible label for Back button (aria-label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showBackInHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When onBack is set, show Back in default header (ignored when :head block is used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"left-arrow-icon\"",
        "hasDefaultValue": true,
        "description": "Icon name for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "overlay",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, mask does not block pointer events (clicks pass through to content behind)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "blockScroll",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Block body scroll when open",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Scrollable content area",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary action; if it returns a Promise, pane waits before closing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Cancel action; if returns Promise, optional wait before close",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when onDone/onCancel promise rejects",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnDone",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close pane after onDone promise resolves",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnCancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Close pane after onCancel completes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Cancel\"",
        "hasDefaultValue": true,
        "description": "Default cancel button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Confirm\"",
        "hasDefaultValue": true,
        "description": "Default done button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "submittingLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Done button label during async submit",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no :footer block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide the header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maskClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for mask/backdrop",
        "section": null,
        "scope": "component"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for content area (slidepane-content)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for header (slidepane-header)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for footer (slidepane-footer)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndexBase",
        "type": "number",
        "required": false,
        "defaultValue": "1000",
        "hasDefaultValue": true,
        "description": "Base z-index for stacking",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show maximize/restore button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximized",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Display pane in maximized state (full width)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaximize",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when maximize state changes; receives { maximized }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"close-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"expand-icon\"",
        "hasDefaultValue": true,
        "description": "Icon for maximize button (when not maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "minimizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"collapse-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon for restore button (when maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "slidepane": {
    "componentName": "UlxSlidePane",
    "componentDirectory": "ulx-slide-pane",
    "sourcePath": "src/components/ulx-slide-pane/index.gjs",
    "params": [
      {
        "name": "visible",
        "type": "boolean",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controls pane visibility",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "\"right\"",
        "hasDefaultValue": true,
        "description": "Position: \"left\", \"right\", \"top\", \"bottom\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Pane title (used when no :head block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Preset size: \"s-size\", \"m-size\", \"l-size\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnBackdrop",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close when backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close on Escape key",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showCloseButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show close button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBack",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when header Back is clicked (e.g. for nested panes). When set, Back control is shown in default header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Back\"",
        "hasDefaultValue": true,
        "description": "Accessible label for Back button (aria-label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showBackInHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When onBack is set, show Back in default header (ignored when :head block is used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"left-arrow-icon\"",
        "hasDefaultValue": true,
        "description": "Icon name for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "overlay",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, mask does not block pointer events (clicks pass through to content behind)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "blockScroll",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Block body scroll when open",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Scrollable content area",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary action; if it returns a Promise, pane waits before closing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Cancel action; if returns Promise, optional wait before close",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when onDone/onCancel promise rejects",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnDone",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close pane after onDone promise resolves",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnCancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Close pane after onCancel completes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Cancel\"",
        "hasDefaultValue": true,
        "description": "Default cancel button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Confirm\"",
        "hasDefaultValue": true,
        "description": "Default done button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "submittingLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Done button label during async submit",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no :footer block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide the header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maskClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for mask/backdrop",
        "section": null,
        "scope": "component"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for content area (slidepane-content)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for header (slidepane-header)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for footer (slidepane-footer)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndexBase",
        "type": "number",
        "required": false,
        "defaultValue": "1000",
        "hasDefaultValue": true,
        "description": "Base z-index for stacking",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show maximize/restore button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximized",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Display pane in maximized state (full width)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaximize",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when maximize state changes; receives { maximized }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"close-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"expand-icon\"",
        "hasDefaultValue": true,
        "description": "Icon for maximize button (when not maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "minimizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"collapse-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon for restore button (when maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "slider": {
    "componentName": "UlxSlider",
    "componentDirectory": "ulx-slider",
    "sourcePath": "src/components/ulx-slider/index.gjs",
    "params": [
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID for the hidden input element. Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key used for auto-generated IDs (when `@id` is not provided).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "number|number[]",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled value. Single: number. Range: [minValue, maxValue].",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next value on change: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSlideEnd",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when sliding ends: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "min",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Minimum value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": "100",
        "hasDefaultValue": true,
        "description": "Maximum value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "step",
        "type": "number",
        "required": false,
        "defaultValue": "1",
        "hasDefaultValue": true,
        "description": "Step increment.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "range",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enables range selection (two handles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "orientation",
        "type": "\"horizontal\"|\"vertical\"",
        "required": false,
        "defaultValue": "\"horizontal\"",
        "hasDefaultValue": true,
        "description": "Slider orientation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"s-size\"",
        "hasDefaultValue": true,
        "description": "Size: xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "\"filled\"|\"elevated\"|\"flat\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "withSteps",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies `with-steps` tick styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Prevents changes but keeps the component visible.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional root classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name override (defaults to i18n).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-slider\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "sorter": {
    "componentName": "UlxSorter",
    "componentDirectory": "ulx-sorter",
    "sourcePath": "src/components/ulx-sorter/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Items to render; each becomes one `.sorter-item`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "SortableJS options (may include onEnd, onAdd, onRemove, …).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "SortableJS `filter` selector (merged into options).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "\"list\"",
        "hasDefaultValue": true,
        "description": "`list` | `grid` | `shared` — adds `sorter-{layout}`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "columnsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra layout classes on `.sorter-container` when `@layout=\"grid\"` only; any tokens you use with `ulx-grid` (default `col-5` when omitted).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root `.ulx-sorter` element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes per row, or `(item, index) => string` merged with `sorter-item`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemKey",
        "type": "string",
        "required": false,
        "defaultValue": "\"@identity\"",
        "hasDefaultValue": true,
        "description": "`{{#each}}` key used for row stability (`\"id\"` for object items is recommended in nested lists).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rootId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`id` / `data-id` on `.sorter-container` (Sortable root).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "listKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`data-list` on `.sorter-container`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "sortLevel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-sort-level` on `.sorter-container` (e.g. nested demos + `onMove` guards).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-label` on the listbox container.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "containerClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on `.sorter-container`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` prefix (default `ulx-sorter`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "split-button": {
    "componentName": "UlxSplitButton",
    "componentDirectory": "ulx-split-button",
    "sourcePath": "src/components/ulx-split-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button icon name (font icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "object[]",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Menu items for dropdown (MenuModel API: label, icon, command, disabled, separator, items, etc.)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClick",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button click handler",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon (default down-arrow-icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon size (default s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables both buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant/type (`help` is accepted as an alias for `help-button`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pilled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Pill shape on inner buttons and root wrapper class",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class (e.g. s-size, m-size, l-size). Omit for m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root element id (for aria-controls)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-splitbutton\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "splitbutton": {
    "componentName": "UlxSplitButton",
    "componentDirectory": "ulx-split-button",
    "sourcePath": "src/components/ulx-split-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button icon name (font icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "object[]",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Menu items for dropdown (MenuModel API: label, icon, command, disabled, separator, items, etc.)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClick",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button click handler",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon (default down-arrow-icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon size (default s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables both buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant/type (`help` is accepted as an alias for `help-button`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pilled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Pill shape on inner buttons and root wrapper class",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class (e.g. s-size, m-size, l-size). Omit for m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root element id (for aria-controls)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-splitbutton\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "steps": {
    "componentName": "UlxSteps",
    "componentDirectory": "ulx-steps",
    "sourcePath": "src/components/ulx-steps/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Steps array. Each item may include: - `label` (string) - `icon` (string) - Font icon class for UlxIcon (type=\"font\") - `disabled` (boolean) - `command` (Function) - Called on select: ({ originalEvent, index, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled active step index (0-based)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, steps are interactive",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelect",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a step is selected: ({ originalEvent, index, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the nav element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the nav element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "tab-menu": {
    "componentName": "UlxTabmenu",
    "componentDirectory": "ulx-tabmenu",
    "sourcePath": "src/components/ulx-tabmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of menu item objects. Each item can have: - `label` (string): Display text for the tab (only rendered automatically when NOT using `:item` named block) - `icon` (string): Icon name/class for the tab (only rendered automatically when NOT using `:item` named block) - `iconType` (string): Icon type for UlxIcon (e.g., \"font\", \"svg\") - `iconComponentClass` (string): Custom component class for UlxIcon - `iconSize` (string): Size for UlxIcon - `command` (Function): Callback function when tab is activated: (event, item) => void - `disabled` (boolean): Whether the tab is disabled - `route` (string): Ember route name for LinkTo navigation (takes precedence over `url`) - `models` (Array|Object): Route models for LinkTo (e.g., [id] or { id: 1 }) - `query` (Object): Query parameters for LinkTo (e.g., { page: 1 }) - `url` (string): URL for navigation (used when `route` is not provided) - `target` (string): Target attribute for links (e.g., \"_blank\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled active tab index (0-based). When provided, component is controlled.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired when active tab changes: (event) => void. Event has `index` and `originalEvent` properties.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant (for future use).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the menubar. Use `aria-labelledby` if referencing an existing label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the menubar.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tabId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for generated tab item ids. The final id is `${tabId}-item-${index}`. Pass a unique value per TabMenu instance to avoid duplicate ids when multiple menus are rendered on the same page.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "table": {
    "componentName": "UlxTable",
    "componentDirectory": "ulx-table",
    "sourcePath": "src/components/ulx-table/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "Array",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "data array",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "dataKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "unique row identifier field (dot notation OK)",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show loading overlay",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "text when no rows; or use <:emptyMessage> block",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "columns",
        "type": "Array",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "column definition array (see above). Use manageable: false on a column to make it mandatory (always visible, cannot be disabled in manage columns).",
        "section": "Columns",
        "scope": "component"
      },
      {
        "name": "showManageColumns",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show manage-columns button (shown even when only one column is enabled)",
        "section": "Columns",
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'xs-size' | 's-size' | 'm-size' | 'l-size' | 'xl-size'",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "stripedRows",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "alternating row backgrounds",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "showGridlines",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "borders on all cells",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable overflow scroll with sticky header",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "CSS height for scroll container (e.g. '400px')",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "extra classes on root element",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "'horizontal' (default) | 'vertical'. In vertical layout, each row represents a column/property and each column represents a data record (transposed table).",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "verticalLabelField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field name from each data record to use as column headers in vertical layout (e.g. 'name' shows row.name as header)",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "sortMode",
        "type": "string",
        "required": false,
        "defaultValue": "'single'",
        "hasDefaultValue": true,
        "description": "'single' | 'multiple'",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort field",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortOrder",
        "type": "1|-1",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort order (1=asc, -1=desc)",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "multiSortMeta",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled multi-sort: [{field, order}]",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "removableSort",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "third click removes sort",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "onSort",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({field, order, multiSortMeta}) => void (lazy)",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortOptions",
        "type": "Array<{key: string, lbl: string}>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "options for sort criterion dropdown",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort string \"key:asc\" | \"key:desc\"",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "onSortByChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(sortByString) => void when user changes sort from toolbar",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "filterDisplay",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'row' | 'menu'",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "filters",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled filter state",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "showGlobalFilter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "show built-in global search input above the table",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "globalFilterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "placeholder text for the global search input",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "globalFilterFields",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "fields searched by global filter; defaults to all data fields",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({filters}) => void (lazy)",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "col.filter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable filter for this column",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterType",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'text' (default) | 'multiselect' 'multiselect' renders UlxMultiSelect and uses 'in' match mode",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "options for filterType='multiselect': [{label, value}]",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field used for filtering (defaults to col.field)",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "placeholder text for filter input",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterMatchModeOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "custom match mode options; false to hide match mode selector",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterElement",
        "type": "Component",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "fully custom filter component; receives @field @value @onChange",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "filterGroups",
        "type": "Array<{key: string, heading: string, options: Array<{value: any, label: string}>}>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "groups for filter pane",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "onFilterApply",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(selectedMap) => void when user applies filter pane (key -> selected value[])",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "paginator",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable pagination",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "rows",
        "type": "number",
        "required": false,
        "defaultValue": "10",
        "hasDefaultValue": true,
        "description": "rows per page",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "first",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "zero-based first row index",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "totalRecords",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "total records (lazy mode)",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "rowsPerPageOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "e.g. [10, 25, 50]",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "paginatorTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "paginator layout string",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "currentPageReportTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "paginatorPosition",
        "type": "string",
        "required": false,
        "defaultValue": "'bottom'",
        "hasDefaultValue": true,
        "description": "'top' | 'bottom' | 'both'",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "onPage",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({first, rows, page}) => void",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "selectionMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'single' | 'multiple' | 'checkbox' | 'radio' | 'cell'",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "selection",
        "type": "any",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled selection (row, row[], or {row, field})",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "onSelectionChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(selection) => void",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "expandedRows",
        "type": "Array|Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled expanded rows",
        "section": "Row expansion",
        "scope": "component"
      },
      {
        "name": "onRowToggle",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({data}) => void",
        "section": "Row expansion",
        "scope": "component"
      },
      {
        "name": "editMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'cell' | 'row'",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "editingRows",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled row edit state",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditInit",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditSave",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onCellEditInit",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, field}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onCellEditComplete",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, field, value}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "resizableColumns",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable column resize handles",
        "section": "Column resize",
        "scope": "component"
      },
      {
        "name": "columnResizeMode",
        "type": "string",
        "required": false,
        "defaultValue": "'fit'",
        "hasDefaultValue": true,
        "description": "'fit' | 'expand'",
        "section": "Column resize",
        "scope": "component"
      },
      {
        "name": "onRowReorder",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({dragIndex, dropIndex, value}) => void",
        "section": "Row reorder",
        "scope": "component"
      },
      {
        "name": "lazy",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "skip client-side sort/filter/paginate",
        "section": "Lazy",
        "scope": "component"
      },
      {
        "name": "onRowClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "onRowDoubleClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "onContextMenu",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "rowClassName",
        "type": "string|Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "extra class string or fn(row)=>string",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "stateKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "localStorage/sessionStorage key",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "moduleName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "BSTable-compatible alias for stateKey. When used without stateStorage, state is persisted in localStorage.",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "stateStorage",
        "type": "string",
        "required": false,
        "defaultValue": "'session'",
        "hasDefaultValue": true,
        "description": "'local' | 'session'",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "frozenValue",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "rows always shown at top",
        "section": "Frozen rows",
        "scope": "component"
      },
      {
        "name": "rowGroupMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'subheader' | 'rowspan'",
        "section": "Row groups",
        "scope": "component"
      },
      {
        "name": "groupRowsBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field to group by",
        "section": "Row groups",
        "scope": "component"
      },
      {
        "name": "showToggleViews",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show view toggle when at least one of <:detailed> or <:card> is passed. Buttons shown are derived from named blocks: table always; detailed/card only when block is present.",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      },
      {
        "name": "defaultView",
        "type": "string",
        "required": false,
        "defaultValue": "'table'",
        "hasDefaultValue": true,
        "description": "initial view: 'table' | 'detailed' | 'card'",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      },
      {
        "name": "cardViewColumns",
        "type": "number",
        "required": false,
        "defaultValue": "3",
        "hasDefaultValue": true,
        "description": "number of columns in card view grid (passed from outside; used with ulx-grid col span)",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      }
    ]
  },
  "tabmenu": {
    "componentName": "UlxTabmenu",
    "componentDirectory": "ulx-tabmenu",
    "sourcePath": "src/components/ulx-tabmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of menu item objects. Each item can have: - `label` (string): Display text for the tab (only rendered automatically when NOT using `:item` named block) - `icon` (string): Icon name/class for the tab (only rendered automatically when NOT using `:item` named block) - `iconType` (string): Icon type for UlxIcon (e.g., \"font\", \"svg\") - `iconComponentClass` (string): Custom component class for UlxIcon - `iconSize` (string): Size for UlxIcon - `command` (Function): Callback function when tab is activated: (event, item) => void - `disabled` (boolean): Whether the tab is disabled - `route` (string): Ember route name for LinkTo navigation (takes precedence over `url`) - `models` (Array|Object): Route models for LinkTo (e.g., [id] or { id: 1 }) - `query` (Object): Query parameters for LinkTo (e.g., { page: 1 }) - `url` (string): URL for navigation (used when `route` is not provided) - `target` (string): Target attribute for links (e.g., \"_blank\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled active tab index (0-based). When provided, component is controlled.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired when active tab changes: (event) => void. Event has `index` and `originalEvent` properties.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant (for future use).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the menubar. Use `aria-labelledby` if referencing an existing label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the menubar.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tabId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for generated tab item ids. The final id is `${tabId}-item-${index}`. Pass a unique value per TabMenu instance to avoid duplicate ids when multiple menus are rendered on the same page.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "tag": {
    "componentName": "UlxTag",
    "componentDirectory": "ulx-tag",
    "sourcePath": "src/components/ulx-tag/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label text shown inside the tag.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tag color variant class (e.g. \"primary\", \"success\", \"light-salmon-red\", \"lt-green\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies fully rounded tag styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name passed to `UlxIcon` as `@iconName`. Renders before the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` as `@componentClass` (e.g. \"bs-icons1\" for font icons).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` as `@size` (e.g. \"s18\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invert",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "ULX extension. When true, applies the existing `.outlined` class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies `.disabled` styling (visual + pointer-events none).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual type class: \"outlined\" | \"elevated\" | \"flat\" | \"pill\" | \"rounded\" (alias: \"outline\" => \"outlined\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconPosition",
        "type": "string",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Icon position: \"left\" | \"right\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "Passed to `UlxIcon` when `@icon` is used.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful icons (passed to `UlxIcon`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-tag`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "textarea": {
    "componentName": "UlxTextarea",
    "componentDirectory": "ulx-textarea",
    "sourcePath": "src/components/ulx-textarea/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key or id; overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.describedBy`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.errorId`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "tieredmenu": {
    "componentName": "UlxTieredmenu",
    "componentDirectory": "ulx-tieredmenu",
    "sourcePath": "src/components/ulx-tieredmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Array of menu item objects",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popup",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, menu operates in popup mode (hidden by default)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "visible",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Visibility state for popup mode",
        "section": null,
        "scope": "component"
      },
      {
        "name": "breakpoint",
        "type": "string",
        "required": false,
        "defaultValue": "'767px'",
        "hasDefaultValue": true,
        "description": "Breakpoint for responsive behavior (mobile/tablet)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemSelect",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when an item is selected; receives the item object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when menu should be hidden (popup mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when menu is shown (popup mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "target",
        "type": "HTMLElement",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Target element for popup positioning (button that triggers menu)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "registerRef",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked with the component instance (e.g. for calling hide() from parent)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-tieredmenu`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "timeline": {
    "componentName": "UlxTimeline",
    "componentDirectory": "ulx-timeline",
    "sourcePath": "src/components/ulx-timeline/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<any>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Events array (preferred ULX arg). If not provided, falls back to `value`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "Array<any>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Events array (PrimeReact parity).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "\"vertical\"|\"horizontal\"",
        "required": false,
        "defaultValue": "\"vertical\"",
        "hasDefaultValue": true,
        "description": "Timeline orientation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "align",
        "type": "\"left\"|\"right\"|\"top\"|\"bottom\"|\"alternate\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alignment (default depends on layout).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Field name (supports dot paths) that uniquely identifies an item for stable rendering.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "toast": {
    "componentName": "UlxToast",
    "componentDirectory": "ulx-toast",
    "sourcePath": "src/components/ulx-toast/index.gjs",
    "params": [
      {
        "name": "messages",
        "type": "Array<{ id: string, variant?: string, summary?: string, detail?: string, closable?: boolean, sticky?: boolean, autoClose?: boolean, life?: number, showIcon?: boolean, type?: string }>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of message objects to display. Set message.showIcon to true to show a variant icon; default is no icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "'top-left'|'top-center'|'top-right'|'center'|'bottom-left'|'bottom-center'|'bottom-right'",
        "required": false,
        "defaultValue": "'top-center'",
        "hasDefaultValue": true,
        "description": "Position of the toast container",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClose",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when a message is closed; receives the message object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoClose",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, no message auto-closes unless the message has autoClose:true or life set",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, close buttons are hidden and ESC does not close toasts",
        "section": null,
        "scope": "component"
      },
      {
        "name": "life",
        "type": "number",
        "required": false,
        "defaultValue": "2000",
        "hasDefaultValue": true,
        "description": "Default auto-close delay in ms when auto-close is enabled; can be overridden per message via message.life",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stacked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, displays messages in a stacked layout",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s24'",
        "hasDefaultValue": true,
        "description": "Size class for the variant message icon (UlxIcon); close control stays `s18`",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'close-icon-01'",
        "hasDefaultValue": true,
        "description": "Icon name for the close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variantIcons",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override icon names per variant. Keys: info, success, warn, warning, error, secondary, contrast. Merged with defaults.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "'bs-icons1'",
        "hasDefaultValue": true,
        "description": "Component class for the message icon (UlxIcon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "toggle": {
    "componentName": "UlxToggle",
    "componentDirectory": "ulx-toggle",
    "sourcePath": "src/components/ulx-toggle/index.gjs",
    "params": [
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Controlled on/off state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called on native change: (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next value and event: (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables and prevents focus.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Error/invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error message or flag; sets invalid state when present (with @invalid).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "inputId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the hidden input; use with <label for=\"\"> for a11y.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `inputId` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated id.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size: s-size, m-size, l-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": "\"primary\"",
        "hasDefaultValue": true,
        "description": "Color variant class (e.g. \"primary\", \"green\", etc.).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-toggle\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "toolbar": {
    "componentName": "UlxToolbar",
    "componentDirectory": "ulx-toolbar",
    "sourcePath": "src/components/ulx-toolbar/index.gjs",
    "params": [
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-toolbar\". Used for testing and automation.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "tooltip": {
    "componentName": "UlxTooltip",
    "componentDirectory": "ulx-tooltip",
    "sourcePath": "src/components/ulx-tooltip/index.gjs",
    "params": [
      {
        "name": "triggerRect",
        "type": "DOMRect",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Trigger bounding rect",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipWidth",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipHeight",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "content",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tooltip text. Ignored when using <:content> block.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "'bottom'",
        "hasDefaultValue": true,
        "description": "Position: 'top' | 'right' | 'bottom' | 'left'",
        "section": null,
        "scope": "component"
      },
      {
        "name": "event",
        "type": "string",
        "required": false,
        "defaultValue": "'both'",
        "hasDefaultValue": true,
        "description": "When to show: 'hover' | 'focus' | 'both'. Default 'both' for WCAG (tooltip on keyboard focus).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showDelay",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Delay in ms before showing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideDelay",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Delay in ms before hiding",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, Escape key closes the tooltip",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, tooltip never shows",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showOnDisabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, show tooltip even when trigger is disabled (wraps trigger)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoHide",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true, tooltip hides when pointer leaves trigger. When false, tooltip is interactive (can hover over it)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS class on the tooltip root",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appendTo",
        "type": "HTMLElement|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Where to mount the tooltip (default document.body)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay z-index. Defaults above the topmost modal/slidepane when one is open.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when tooltip is shown",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when tooltip is hidden",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBeforeShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback before show; return false to prevent show",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBeforeHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback before hide; return false to prevent hide",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "tristate-checkbox": {
    "componentName": "UlxTristateCheckbox",
    "componentDirectory": "ulx-tristate-checkbox",
    "sourcePath": "src/components/ulx-tristate-checkbox/index.gjs",
    "params": [
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique id for the input and label `for`. Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key used for auto-generated ids when `@id` is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "boolean|null",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Current value: `true` (checked), `false` (unchecked), `null` (indeterminate).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onValueChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next value on toggle: (nextValue, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object (aligned with `UlxCheckbox`): `{ required: true }` sets required on the input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disabled state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state (aria + styling).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, field is treated as invalid (same pattern as `UlxCheckbox` / `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Filled visual variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"xxxs-size\", \"xs-size\", \"s-size\", \"m-size\", \"l-size\", \"xl-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes applied in addition to `ulx-tristatecheckbox ulx-checkbox`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Right-side label text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Adds `required` / `aria-required` to the input (in addition to `rules.required`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showRequiredStar",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Appends `*` to the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "uncheckIconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, unchecked state shows filled box + this icon (e.g. \"close-icon\"). When unset, unchecked is normal empty box (nothing selected).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideLabel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, do not render the right-side label (used for control-only usage).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-tristatecheckbox\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Name attribute for form submissions.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "tristatecheckbox": {
    "componentName": "UlxTristateCheckbox",
    "componentDirectory": "ulx-tristate-checkbox",
    "sourcePath": "src/components/ulx-tristate-checkbox/index.gjs",
    "params": [
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique id for the input and label `for`. Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key used for auto-generated ids when `@id` is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "boolean|null",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Current value: `true` (checked), `false` (unchecked), `null` (indeterminate).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onValueChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next value on toggle: (nextValue, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object (aligned with `UlxCheckbox`): `{ required: true }` sets required on the input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disabled state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state (aria + styling).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, field is treated as invalid (same pattern as `UlxCheckbox` / `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Filled visual variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"xxxs-size\", \"xs-size\", \"s-size\", \"m-size\", \"l-size\", \"xl-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes applied in addition to `ulx-tristatecheckbox ulx-checkbox`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Right-side label text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Adds `required` / `aria-required` to the input (in addition to `rules.required`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showRequiredStar",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Appends `*` to the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "uncheckIconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, unchecked state shows filled box + this icon (e.g. \"close-icon\"). When unset, unchecked is normal empty box (nothing selected).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideLabel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, do not render the right-side label (used for control-only usage).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-tristatecheckbox\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Name attribute for form submissions.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-accordion": {
    "componentName": "UlxAccordion",
    "componentDirectory": "ulx-accordion",
    "sourcePath": "src/components/ulx-accordion/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Tabs. Each item: { header (string), disabled? (boolean), content? (string) }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number|number[]|null",
        "required": false,
        "defaultValue": "null",
        "hasDefaultValue": true,
        "description": "Controlled open index (single) or array (multiple)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple tabs open",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabOpen",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a tab opens: ({ originalEvent, index }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabClose",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a tab closes: ({ originalEvent, index }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when open state changes: ({ originalEvent, index }) => void; index is number or number[]",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'s-size'",
        "hasDefaultValue": true,
        "description": "Size: xs-size, s-size, m-size, l-size, xl-size",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual: filled, elevated, flat",
        "section": null,
        "scope": "component"
      },
      {
        "name": "spacing",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "compact, spacious",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "rounded, square",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-stroke-icon-new'",
        "hasDefaultValue": true,
        "description": "Font icon when tab is collapsed",
        "section": null,
        "scope": "component"
      },
      {
        "name": "collapseIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-stroke-icon-new'",
        "hasDefaultValue": true,
        "description": "Font icon when tab is expanded",
        "section": null,
        "scope": "component"
      },
      {
        "name": "toggleIconPosition",
        "type": "'left'|'right'",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Position of the expand/collapse icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for accordion",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-accordion`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-avatar": {
    "componentName": "UlxAvatar",
    "componentDirectory": "ulx-avatar",
    "sourcePath": "src/components/ulx-avatar/index.gjs",
    "params": [
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "Avatar type: \"image\" | \"icon\" | \"text\". Determines how content is rendered.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Text label to display when `@type=\"text\"`. Typically initials or short text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "image",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL to display when `@type=\"image\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "imageAlt",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alt text for the image when `@type=\"image\"`. Falls back to `@ariaLabel` or `@label` if not provided. Use empty string for decorative images.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name/class to display when `@type=\"icon\"`. Passed to UlxIcon component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Color variant for avatar background. Options: \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"danger\" | \"red\" | \"green\" | \"blue\" | \"purple\" | \"orange\" | \"gold\" | \"black\" | \"grey\" | \"yellow\" | \"violet\" | \"pink\" | \"brown\" | \"teal\" | \"darkturquoise\" | \"olive\" | \"nightblue\" | \"magenta\". Defaults to no variant (uses default background).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\". Defaults to \"m-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": "\"square\"",
        "hasDefaultValue": true,
        "description": "Shape variant: \"circle\" | \"square\". Defaults to \"square\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful avatars. When provided, automatically sets `aria-hidden=\"false\"` and `role=\"img\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies disabled styling and prevents interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies clickable styling with hover/active states. Requires `@ariaLabel` for accessibility.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-avatar\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-qa` override (defaults to `ulx-avatar`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onLoad",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional image load handler when `@type=\"image\"`. Receives the native load event.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional image error handler when `@type=\"image\"`. Receives the native error event.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "member",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Domain member object. When provided, `member.userProfile` is used as a fallback for profile data.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "memberProfile",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Member profile object containing avatar and name information.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fullName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Explicit full name for the member. Falls back to profile fields when not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "nameOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, renders initials based on `@name` or `@fullName` without image.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Display name used for initials when `@nameOnly` is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "index",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional index used to derive pseudo-unique color variants in `nameOnly` mode.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "avatarSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Legacy avatar size. Mapped to `@size` when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "circular",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Convenience flag to force circle shape when `@shape` is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "canShowAvatar",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional explicit flag to control whether the image avatar should be shown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "noImageSentinel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional sentinel value that represents \\\"no image\\\" for the resolved avatar URL.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShowProfile",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional callback invoked on click with `(member, members, index)` to approximate legacy `showProfile` action.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "members",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional members collection forwarded to `@onShowProfile` for parity with legacy API.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-avatar-group": {
    "componentName": "UlxAvatarGroup",
    "componentDirectory": "ulx-avatar-group",
    "sourcePath": "src/components/ulx-avatar-group/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of avatar items to display. Each item supports all UlxAvatar props.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stacked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies stacked/overlapping layout where avatars overlap each other.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maxVisible",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Maximum number of avatars to display. Remaining count is shown as overflow indicator (e.g., \"+2\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default size for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default shape for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size for the overflow UlxPopup. Defaults to UlxPopup default when not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, the root uses `role=\"group\"` and this `aria-label` for the collection.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-avatar-group\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-qa` on the root (defaults to `ulx-avatar-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-badge": {
    "componentName": "UlxBadge",
    "componentDirectory": "ulx-badge",
    "sourcePath": "src/components/ulx-badge/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Content to display inside the badge. If not provided, children will be rendered.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Color variant: \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"danger\" | \"contrast\" | \"light-grey\". Defaults to \"primary\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size variant: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\". Defaults to \"s-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge type: \"circle\" | \"dot\" | \"square\" (default). \"dot\" renders as a dot indicator without text content; use `@ariaLabel` for a meaningful dot. \"circle\" applies fully rounded shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful badges. When provided, automatically sets `aria-hidden=\"false\"` and `role=\"status\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies disabled styling and prevents interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies clickable styling with hover/active states and focus (`tabindex=\"0\"`). Requires `@ariaLabel` for accessibility.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-badge\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-badge-button": {
    "componentName": "UlxBadgeButton",
    "componentDirectory": "ulx-badge-button",
    "sourcePath": "src/components/ulx-badge-button/index.gjs",
    "params": [
      {
        "name": "badge",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge value/text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeVariant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Badge variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge size class (xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeType",
        "type": "'circle'|'dot'|'square'",
        "required": false,
        "defaultValue": "'circle'",
        "hasDefaultValue": true,
        "description": "Badge shape/type",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeCustomClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom badge CSS classes",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-banner-message": {
    "componentName": "UlxBannerMessage",
    "componentDirectory": "ulx-banner-message",
    "sourcePath": "src/components/ulx-banner-message/index.gjs",
    "params": [
      {
        "name": "message",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single message object: { id?: string, variant?: string, summary?: string, detail?: string, closable?: boolean, icon?: string }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onRemove",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when the message is removed; receives the message object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dismissStorageKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, banner is one-time: after close we persist this key in localStorage and do not show again until key is cleared",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes for the root container",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class for container and message (e.g. xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": "\"svg\"",
        "hasDefaultValue": true,
        "description": "Icon type for message icon (e.g. \"svg\", \"font\"). Default \"svg\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for message icon (e.g. s18). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-banner-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-button": {
    "componentName": "UlxButton",
    "componentDirectory": "ulx-button",
    "sourcePath": "src/components/ulx-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button label text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "href",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, renders as <a href=\"{{href}}\">; otherwise <button>",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'|'white'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Button variant/type (`help` is accepted as an alias for `help-button`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pilled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Pill-shaped border radius (adds `pilled` class)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant (transparent background)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant (transparent background with border)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Omit for m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Full width button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-button\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'button'|'submit'|'reset'",
        "required": false,
        "defaultValue": "'button'",
        "hasDefaultValue": true,
        "description": "Button type attribute",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, button shows loading spinner and is disabled. Use for always-on loading state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClick",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Click handler; may return a Promise to show loading until it settles",
        "section": null,
        "scope": "component"
      },
      {
        "name": "elementRef",
        "type": "Modifier",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional modifier (or element-ref callback) applied to the root element for parent ref capture (e.g. dropdown target)",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-button-group": {
    "componentName": "UlxButtonGroup",
    "componentDirectory": "ulx-button-group",
    "sourcePath": "src/components/ulx-button-group/index.gjs",
    "params": [
      {
        "name": "orientation",
        "type": "'horizontal'|'vertical'",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "Layout direction",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Equal-width buttons (grid)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "severity",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Severity for active state styling",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "raised",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Raised variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-button-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-card": {
    "componentName": "UlxCard",
    "componentDirectory": "ulx-card",
    "sourcePath": "src/components/ulx-card/index.gjs",
    "params": [
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Card title text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "subTitle",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional subtitle text under the title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "header",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional header content; when provided, rendered inside header section above title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footer",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional footer content; rendered inside footer section.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appearance",
        "type": "'outlined'|'elevated'|'flat'",
        "required": false,
        "defaultValue": "'outlined'",
        "hasDefaultValue": true,
        "description": "Visual style variant from card.less.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'contrast'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tone variant for outlined cards.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size modifier from card.less.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "density",
        "type": "'compact'|'spacious'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Content density modifier.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"rounded\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "square",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"square\" class (overrides rounded).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"interactive\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alias for interactive; also adds \"interactive\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hoverable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"hoverable\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes applied to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class; defaults to getComponentClass('card').",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "'ulx-card'",
        "hasDefaultValue": true,
        "description": "Root data-qa identifier; internal element identifiers are derived from this value.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-checkbox": {
    "componentName": "UlxCheckbox",
    "componentDirectory": "ulx-checkbox",
    "sourcePath": "src/components/ulx-checkbox/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID for the checkbox input. Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional list of checkbox items. When provided, the component renders a group. Each item supports: `{ label, checked, indeterminate, disabled, customClass, id }`. Provide a string `id` per item when the list can reorder or grow; otherwise ids are derived from index (stable across checked toggles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@items` is provided: (item, checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Whether the checkbox is checked (controlled) (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the checkbox is in indeterminate state (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Name attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single checkbox label rendered next to the checkbox (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object for constraints (old component pattern): { required: true }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the checkbox is disabled (single mode) or disables all items (group mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the field is in invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether to use filled variant styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"s-size\", \"m-size\", \"l-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the items wrapper (appended to base `ulx-checkbox-group`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the checkbox wrapper (single mode or per-item).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-describedby` for the checkbox input (used by group rendering).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-errormessage` for the checkbox input (used by group rendering).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on change event (single/bare): (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next checked value (single/bare): (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-checkbox\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-chip": {
    "componentName": "UlxChip",
    "componentDirectory": "ulx-chip",
    "sourcePath": "src/components/ulx-chip/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main text shown in the chip.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name/class for UlxIcon (e.g. font class); renders before label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "image",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL; when set, renders before label (avatar-style).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "imageAlt",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alt text for the image; defaults to t(\"lbl.image\") when omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "removable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, shows remove control and wires click/keyboard.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "removeIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for remove button; defaults to close icon from bs-icons1.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onRemove",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback (event, value) when remove is triggered; value is label, image, or icon context.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onImageError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when image fails to load.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class (e.g. \"s-size\", \"m-size\"); applied to root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "\"ulx-chip\"",
        "hasDefaultValue": true,
        "description": "data-qa value for root element, useful for automation tests.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-data-view": {
    "componentName": "UlxDataView",
    "componentDirectory": "ulx-data-view",
    "sourcePath": "src/components/ulx-data-view/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "\"list\"",
        "hasDefaultValue": true,
        "description": "Layout variant: \"list\" or \"grid\". Adds layout-list or layout-grid class to root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "gridRole",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional ARIA role for the main content container (e.g. \"list\" for list semantics).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS class for root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` override (defaults to `ulx-dataview`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-divider": {
    "componentName": "UlxDivider",
    "componentDirectory": "ulx-divider",
    "sourcePath": "src/components/ulx-divider/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "'horizontal'|'vertical'",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "Divider layout (affects orientation + base class).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "align",
        "type": "'left'|'center'|'right'|'top'|'bottom'|null",
        "required": false,
        "defaultValue": "null",
        "hasDefaultValue": true,
        "description": "Content alignment. When omitted, align classes are only applied when content is present.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'solid'|'dashed'|'dotted'",
        "required": false,
        "defaultValue": "'solid'",
        "hasDefaultValue": true,
        "description": "Divider line style.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'s-size'",
        "hasDefaultValue": true,
        "description": "ULS size class: xs-size | s-size | m-size | l-size | xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thickness",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS thickness class: size-2 | size-3.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS color/variant class: primary | dark | secondary.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base `ulx-divider` class (rare).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-dropdown": {
    "componentName": "UlxDropdown",
    "componentDirectory": "ulx-dropdown",
    "sourcePath": "src/components/ulx-dropdown/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "any",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Selected value (controlled).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options (objects or scalars). Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name or path for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name or path for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionImageUrl",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Property name or path for option image URL (e.g. for value/item templates). When set, yielded hash includes imageUrl.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, options are groups; this is the group label key.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupChildren",
        "type": "string",
        "required": false,
        "defaultValue": "'items'",
        "hasDefaultValue": true,
        "description": "When optionGroupLabel is set, key for group children.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder when nothing selected.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the dropdown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows progress spinner instead of dropdown icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show filter input in panel.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClear",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show clear icon when value is set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checkmark",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show checkmark on selected item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder for filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when options list is empty.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyFilterMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when filter has no results.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": "'232px'",
        "hasDefaultValue": true,
        "description": "Max height of option list (CSS value).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'self'",
        "hasDefaultValue": true,
        "description": "Where the overlay panel is created. - `\"self\"` keeps the panel in-place after the dropdown markup (default). - `\"body\"` appends the panel to `<body>`. - `HTMLElement`: append to that element. - `Function`: called to resolve the destination element. - `string`: a CSS selector resolved with `document.querySelector()`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that closes the overlay immediately.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` override for automation (default `ulx-dropdown`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the trigger (for label `for` / ARIA).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the trigger id (e.g. `@key={{field.key}}` with `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` ids (e.g. from `UlxField` control hash).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` id (e.g. `field.errorId`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "`aria-required` on the combobox.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(value) => void when selection changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFocus",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Focus callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBlur",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Blur callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void when filter input changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay opens.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(option) => boolean or property key to disable options.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay panel z-index (e.g. when rendered above other overlays).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-empty-state": {
    "componentName": "UlxEmptyState",
    "componentDirectory": "ulx-empty-state",
    "sourcePath": "src/components/ulx-empty-state/index.gjs",
    "params": [
      {
        "name": "headerText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Title (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "subHeaderText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Subtitle (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon for UlxIcon (font or symbol name).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for icon (default s48).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "containerClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on inner container.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "marginClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Margin class for the actions area (default mt-6).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-empty-state\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-field": {
    "componentName": "UlxField",
    "componentDirectory": "ulx-field",
    "sourcePath": "src/components/ulx-field/index.gjs",
    "params": [
      {
        "name": "fieldClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root `.field` wrapper.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fieldId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable id for the control, help, and error nodes. Auto-generated when omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Plain-text label (or use the `label` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "helpText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Help copy rendered below the control (linked via `aria-describedby`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error copy; when set, invalid region is shown and linked via `aria-errormessage`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional info icon tooltip next to the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`{ required: true }` or editor-style `{ required: t('…'), format: { with, allowBlank, msg }, maxLength: { value?, msg } }`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-fieldset": {
    "componentName": "UlxFieldSet",
    "componentDirectory": "ulx-fieldset",
    "sourcePath": "src/components/ulx-fieldset/index.gjs",
    "params": [
      {
        "name": "legend",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Legend text (or use the `legend` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional description (or use the `description` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "'grid'|'stack'",
        "required": false,
        "defaultValue": "'grid'",
        "hasDefaultValue": true,
        "description": "Content layout inside the fieldset wrapper region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Disables all nested controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset **content wrapper** (e.g. `gap-6`, `col-2`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "actionsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset actions region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` (default `ulx-fieldset`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-form": {
    "componentName": "UlxForm",
    "componentDirectory": "ulx-form",
    "sourcePath": "src/components/ulx-form/index.gjs",
    "params": [
      {
        "name": "onSubmit",
        "type": "(event: SubmitEvent) => void",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Submit handler; prevents default navigation when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onReset",
        "type": "(event: Event) => void",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Reset handler.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'m-size'|'l-size'|'xl-size'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size variant (default s-size has no class).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes on the form root. Avoid `ulx-grid` here; use `UlxFieldSet` `@layout=\"grid\"` (and `@customClass` on the fieldset wrapper) for field groups.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "actionsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the actions wrapper (base `ulx-form-actions`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` (default `ulx-form`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-icon": {
    "componentName": "UlxIcon",
    "componentDirectory": "ulx-icon",
    "sourcePath": "src/components/ulx-icon/index.gjs",
    "params": [
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Symbol id or font class. Not used when a custom block is provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful icons. When set, aria-hidden becomes \"false\" and role=\"img\" is applied so screen readers announce it (e.g. close icon in modal).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class (e.g. \"s18\", \"m-size\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional class for icon styling (e.g. \"bs-icons1\" for font icons).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "\"svg\" = symbol reference; \"font\" = font icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "\"ulx-icon\"",
        "hasDefaultValue": true,
        "description": "Root test selector override.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-icon-button": {
    "componentName": "UlxIconButton",
    "componentDirectory": "ulx-icon-button",
    "sourcePath": "src/components/ulx-icon-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button label text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconLeft",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the prefix (left of label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the suffix (right of label). If both are set, `iconRight` wins.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "UlxIcon base class (e.g. \"bs-icons1\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon size class (e.g. s13, s16, s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows explicit spinner state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button size class from parent",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for root button",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-icon-input": {
    "componentName": "UlxIconInput",
    "componentDirectory": "ulx-icon-input",
    "sourcePath": "src/components/ulx-icon-input/index.gjs",
    "params": [
      {
        "name": "iconLeft",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the left, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the right, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when using a string `iconLeft` / `iconRight`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on `UlxIcon` (`@customClass`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Meaningful name for the preset icon; sets wrapper visibility for AT.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon field size class (default `m-size`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Adds `disabled` on the icon-field root; mirror the inner control.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconFieldClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the icon-field root.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-image": {
    "componentName": "UlxImage",
    "componentDirectory": "ulx-image",
    "sourcePath": "src/components/ulx-image/index.gjs",
    "params": [
      {
        "name": "src",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "alt",
        "type": "string",
        "required": false,
        "defaultValue": "\"\"",
        "hasDefaultValue": true,
        "description": "`alt` for the inner `<img>`; empty string for decorative images.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "'square'|'rounded'|'circle'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`rounded` / `circle` map to ULS modifiers. `square` adds the `square` crop modifier; pair with `@size` so ULS applies fixed square dimensions.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'|'xxl-size'|'xxxl-size'|'img-size-100'|'img-size-75'|'img-size-50'|'img-size-25'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS `image.less` on the root: fixed scale tokens (`xs-size`–`xxxl-size`, pair with `shape=\"square\"` for square crop) or fluid width utilities (`img-size-*` percentages).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "objectFit",
        "type": "'cover'|'contain'|'fill'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`object-*` modifier on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "aspectRatio",
        "type": "'square'|'video'|'portrait'|'four-three'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`img-aspect-*` fluid aspect box on the root (pair with parent width constraints and/or `@size` such as `img-size-100`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thumbLandscape",
        "type": "'xs'|'s'|'m'|'l'|'xl'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Fixed 16:9 thumbnail: `thumb-landscape-*` (ULS section 4).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thumbPortrait",
        "type": "'xs'|'s'|'m'|'l'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Fixed 9:16 thumbnail: `thumb-portrait-*`. Do not set both `thumbLandscape` and `thumbPortrait` on the same instance.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`width` attribute on `<img>` (layout hint / CLS).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "height",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`height` attribute on `<img>` (layout hint / CLS).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "'lazy'|'eager'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `loading` hint.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "decoding",
        "type": "'auto'|'sync'|'async'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `decoding`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "crossorigin",
        "type": "'anonymous'|'use-credentials'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `crossorigin`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base class (defaults to `getComponentClass('image')`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`data-qa` on the root (defaults to `ulx-image`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-input": {
    "componentName": "UlxInput",
    "componentDirectory": "ulx-input",
    "sourcePath": "src/components/ulx-input/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key or id; overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.describedBy`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.errorId`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-message": {
    "componentName": "UlxMessage",
    "componentDirectory": "ulx-message",
    "sourcePath": "src/components/ulx-message/index.gjs",
    "params": [
      {
        "name": "text",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Shown when no block is passed; ignored when a block is provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'info'|'success'|'warn'|'error'",
        "required": false,
        "defaultValue": "'info'",
        "hasDefaultValue": true,
        "description": "Visual variant (demos: \"Variant\", not \"Severity\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Renders `UlxIcon` when set; icon wrapper is `aria-hidden`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when `icon` is set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size token (e.g. xs-size … xl-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root id (via `...attributes`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` override (default `ulx-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-modal": {
    "componentName": "UlxModal",
    "componentDirectory": "ulx-modal",
    "sourcePath": "src/components/ulx-modal/index.gjs",
    "params": [
      {
        "name": "visible",
        "type": "boolean",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controls modal visibility",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Modal title (used when no :head block provided)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Modal width (CSS value, e.g. \"500px\", \"50%\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "\"center\"",
        "hasDefaultValue": true,
        "description": "Modal position: \"center\", \"top\", \"bottom\", \"left\", \"right\", \"top-left\", \"top-right\", \"bottom-left\", \"bottom-right\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Modal size: \"xs-size\", \"s-size\", \"m-size\", \"l-size\", \"xl-size\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Enable scrollable content area",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnBackdrop",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Close modal when backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close modal when Escape key is pressed",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showCloseButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show close button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"close-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"expand-icon\"",
        "hasDefaultValue": true,
        "description": "Icon name for maximize button (when not maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "minimizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"collapse-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for minimize/restore button (when maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "animationType",
        "type": "string",
        "required": false,
        "defaultValue": "\"fade\"",
        "hasDefaultValue": true,
        "description": "Animation type: \"fade\", \"zoom\", \"slide\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: \"elevated\", \"flat\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "draggable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enable dragging dialog by header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "resizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enable resizing dialog",
        "section": null,
        "scope": "component"
      },
      {
        "name": "overlay",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, no overlay/backdrop; dialog is non-blocking (non-modal mask styling)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "blockScroll",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Block body scroll when modal is visible",
        "section": null,
        "scope": "component"
      },
      {
        "name": "keepInViewport",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Keep dialog within viewport bounds",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show maximize/minimize button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximized",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Display dialog in maximized state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "breakpoints",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Responsive width breakpoints, e.g. {\"960px\": \"75vw\", \"640px\": \"90vw\"}",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maskClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS class for mask/backdrop",
        "section": null,
        "scope": "component"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for content area (dialog-content)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for header (dialog-header)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for footer (dialog-footer)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when modal is hidden/closed (close button, escape key, backdrop click)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when cancel button is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when done/confirm button is clicked. If returns a Promise, modal waits for completion before auto-closing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when modal is shown",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaskClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when mask/backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaximize",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when maximize state changes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when onDone/onCancel promise rejects (receives error as argument)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnDone",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Auto-close modal after onDone promise resolves successfully",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnCancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Auto-close modal after onCancel completes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Cancel label (defaults to i18n cancel)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Confirm label (defaults to i18n confirm)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "submittingLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label for done button during submission (defaults to doneButtonLabel)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no :footer block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide the header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndexBase",
        "type": "number",
        "required": false,
        "defaultValue": "1000",
        "hasDefaultValue": true,
        "description": "Base z-index for modal stacking",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` on the mask (defaults to `ulx-modal`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-multi-select": {
    "componentName": "UlxMultiSelect",
    "componentDirectory": "ulx-multi-select",
    "sourcePath": "src/components/ulx-multi-select/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Selected values array (controlled).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options. Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name or path for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name or path for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, options are groups; this is the group label key.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupChildren",
        "type": "string",
        "required": false,
        "defaultValue": "'items'",
        "hasDefaultValue": true,
        "description": "When optionGroupLabel is set, key for group children.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder when nothing selected.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "display",
        "type": "string",
        "required": false,
        "defaultValue": "'comma'",
        "hasDefaultValue": true,
        "description": "'comma' | 'chip' for selected display.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectionLimit",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Max number of selections (optional).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows progress spinner in trigger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Show filter input in panel. When not provided, filter auto-enables for larger option lists (more than 10).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClose",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show close (X) button in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClear",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show a Clear action in the panel footer when value has items. Pass `false` to disable.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAll",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show select-all checkbox in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAllLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label for select-all checkbox. When empty string, checkbox is shown without text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder for filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when options list is empty.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyFilterMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when filter has no results.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": "'232px'",
        "hasDefaultValue": true,
        "description": "Max height of option list (CSS value).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": "1100",
        "hasDefaultValue": true,
        "description": "Overlay z-index (useful when the panel must stack above nearby overlays).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'self'",
        "hasDefaultValue": true,
        "description": "Where to render the overlay panel. - `\"self\"`: keep the panel in-place after the component markup (default). - `\"body\"`: append overlay to `<body>`. - `HTMLElement`: append to that element. - `Function`: called to resolve the container element. - `string`: a CSS selector resolved via `document.querySelector()`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "renderContainer",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that closes the overlay immediately.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "resetFilterOnHide",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Reset filter when overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the trigger (or use `@key` with UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable id when `@id` is omitted (e.g. `field.key` from UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` ids (e.g. from UlxField control hash).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` id (e.g. `field.errorId`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Required field.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(value) => void when selection changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFocus",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Focus callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBlur",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Blur callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void when filter input changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "allowAddition",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, show an Add button in the panel header tied to the filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onAddItem",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void | Promise<void>; when the Add button is clicked; only invoked if the trimmed filter does not match an existing option label or value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay opens.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelectAll",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional (event, checked) => void; when provided overrides default select-all.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(option) => boolean or property key to disable options.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "virtualScrollerOptions",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set with <code>itemSize</code> (number, px), the list is virtualized for large datasets. Not used when <code>@optionGroupLabel</code> is set.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-option-segment": {
    "componentName": "UlxOptionSegment",
    "componentDirectory": "ulx-option-segment",
    "sourcePath": "src/components/ulx-option-segment/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "\"stacked\"|\"tile\"",
        "required": false,
        "defaultValue": "\"stacked\"",
        "hasDefaultValue": true,
        "description": "`stacked` lists vertically; `tile` lays out items in a row with wrap (`layout-tile` on the group)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selection",
        "type": "\"control\"|\"center\"|\"corner\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Selection affordance (root class `selection-<value>` for styling). Omit for `@type=\"color-swatch\"` (no `selection-*` class). - **control** — default when using built-in radio/checkbox/tristate; emphasize the `.option-control` column. - **corner** — default when `@type=\"basic\"` or a custom `<:control>` block; corner tick/check treatment via CSS. - **center** — always opt-in (`@selection=\"center\"`); full-card selection (tint, ring, or `::after` layer). No separate Ember behavior—target `.ulx-option-segments.selection-center` in styles.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "List of option items. When provided, the component renders a group: - Each item can include: - {string} value - {boolean} [selected] - {boolean} [disabled] - {boolean} [compact] - {string} [title] - {string} [description] - {Array<object>} [nestedItems] - {string} [itemClass] - Extra classes for this row only (after group `@itemClass`) - {string} [optionColorCode] - Color for **color-swatch** groups (`@type=\"color-swatch\"`); sets `--ulx-option-color-code` on the card. - {string} [colorCode] - Alias of **optionColorCode**. - {string} [id] - Unique id for the embedded control when items can reorder; otherwise ids use index (stable when toggling selection).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selected",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Single-item selected state (when `@items` is not used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disable interaction when true (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "compact",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Use the compact visual variant (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value passed back to `@onSelect` (single-item mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelect",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked on click / key activation: `(selected, value, event) => void`",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary label text when no `title` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Helper text when no `description` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "CSS class applied to every `.option-item` root (before each item's own `itemClass`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for embedded controls and title/description ids (first list item). Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, stable key for auto-generated ids (e.g. `@key={{field.key}}` with `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom ARIA role for the root element (overrides `@type`-based role)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-paginator": {
    "componentName": "UlxPaginator",
    "componentDirectory": "ulx-paginator",
    "sourcePath": "src/components/ulx-paginator/index.gjs",
    "params": [
      {
        "name": "totalRecords",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Total number of records",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rows",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Rows per page",
        "section": null,
        "scope": "component"
      },
      {
        "name": "first",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Zero-based index of first row to display",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pageLinkSize",
        "type": "number",
        "required": false,
        "defaultValue": "5",
        "hasDefaultValue": true,
        "description": "Number of page links to show",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rowsPerPageOptions",
        "type": "number[]",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Options for rows-per-page dropdown (e.g. [10, 20, 30])",
        "section": null,
        "scope": "component"
      },
      {
        "name": "alwaysShow",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show paginator even when only one page",
        "section": null,
        "scope": "component"
      },
      {
        "name": "template",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Layout string, e.g. \"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "currentPageReportTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Report template; placeholders: {currentPage}, {totalPages}, {first}, {last}, {rows}, {totalRecords}",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onPageChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback (event) => void; event: { first, rows, page, totalPages }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "firstPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for first page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "prevPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for previous page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "nextPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for next page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "lastPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for last page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS class for root",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-paginator\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-panelmenu": {
    "componentName": "UlxPanelmenu",
    "componentDirectory": "ulx-panelmenu",
    "sourcePath": "src/components/ulx-panelmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Menu items (panels with nested items).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandedKeys",
        "type": "Object|null",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled expansion map: { [key: string]: true }.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onExpandedKeysChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next expandedKeys map in controlled mode.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onOpen",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel expands: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClose",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel collapses: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple root panels expanded at once.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'right-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for collapsed state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "collapseIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for expanded state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "toggleIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu expand/collapse icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu item icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "flat",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Borderless flat layout (`flat` on root; pairs with ULS `.flat` panelmenu styles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-popup": {
    "componentName": "UlxPopup",
    "componentDirectory": "ulx-popup",
    "sourcePath": "src/components/ulx-popup/index.gjs",
    "params": [
      {
        "name": "basePosition",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "targetRect",
        "type": "DOMRect",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupWidth",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupHeight",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "verticalGap",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "horizontalGap",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "visible",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Controls visibility of the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "target",
        "type": "HTMLElement|Event",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Target element or event for popup positioning.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'body'",
        "hasDefaultValue": true,
        "description": "Where to render the popup overlay.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "renderContainer",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appendTo",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that repositions the popup while open.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "'position-bottom'",
        "hasDefaultValue": true,
        "description": "Positioning class for pointer and offset.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size class: xs-size | s-size | m-size | l-size | xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: elevated | flat | outlined.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay z-index override.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dismissable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true, clicking outside or resizing closes the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, shows a close button in the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true (default), Escape closes the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes applied to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the popup; maps to `aria-label` on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked when popup is shown (parent should set @visible).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked after exit animation completes and popup is fully hidden.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "registerRef",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked with the component instance when the popup is mounted (for calling show/hide/toggle), and with null on teardown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for the header wrapper (when header is shown).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for the footer wrapper (when footer is shown).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default header title. When set and no <:head> block, shows default header with this title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer cancel label (falls back to i18n cancel).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer confirm label (falls back to i18n confirm).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer cancel button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer done button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no <:footer> block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideTertiaryButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "In default footer, hide the tertiary (left) button. Set false with tertiaryButtonLabel to show.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer tertiary button label (e.g. \"Reset\"). Shown when hideTertiaryButton is false.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryButtonIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for default footer tertiary button (passed to UlxButton @icon).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryIconPos",
        "type": "'left'|'right'",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Icon position for tertiary button.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTertiary",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer tertiary button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideCancelButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "In default footer, hide the cancel button.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideDoneButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "In default footer, hide the done button.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-progress-bar": {
    "componentName": "UlxProgressBar",
    "componentDirectory": "ulx-progress-bar",
    "sourcePath": "src/components/ulx-progress-bar/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Progress 0–100. Omit or null for indeterminate.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "mode",
        "type": "'determinate'|'indeterminate'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override: 'indeterminate' forces indeterminate; otherwise inferred from value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showValue",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show percentage label (determinate only). Use hide-value / show-value classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showControls",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, render [ - ] [ bar ] [ + ] [ value% ] layout.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when user clicks + or - with the new value. Required when showControls is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "step",
        "type": "number",
        "required": false,
        "defaultValue": "1",
        "hasDefaultValue": true,
        "description": "Increment/decrement amount for controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "min",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Minimum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": "100",
        "hasDefaultValue": true,
        "description": "Maximum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"xxxs-size\"",
        "hasDefaultValue": true,
        "description": "Size class (e.g. xxxs-size, xs-size, s-size, m-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for control buttons (e.g. s12). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Bar color variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default from getComponentClass('progressbar'))",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressbar\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-progressspinner": {
    "componentName": "UlxProgressSpinner",
    "componentDirectory": "ulx-progressspinner",
    "sourcePath": "src/components/ulx-progressspinner/index.gjs",
    "params": [
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size). Omit for default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "color",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stroke color (any valid CSS color). Sets uls-v2 progressspinner CSS variables so the spinner uses this color; omit for theme default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes (applied only to parent element)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default: ulx-progressspinner)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name when spinner is the main loading indicator (e.g. \"Loading\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for UlxIcon component. Used when the custom icon block is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for the icon (e.g. \"s18\", \"m-size\"). Defaults to spinner size if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "Icon type for UlxIcon component. \"svg\" = symbol reference; \"font\" = font icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressspinner\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-radio": {
    "componentName": "UlxRadio",
    "componentDirectory": "ulx-radio",
    "sourcePath": "src/components/ulx-radio/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID base for the radio(s). Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional list of radio items. When provided, the component renders a group. Each item supports: `{ label, value, checked, disabled, customClass, id }`. Pass string `id` when the list can reorder; otherwise ids use the item index (stable when toggling selection).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@items` is provided: (item, checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Whether the radio is checked (controlled) (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single radio label rendered next to the radio (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object for constraints (old component pattern): { required: true }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error message string for invalid-state calculation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the radio is disabled (single mode) or disables all items (group mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the field is in invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether to use filled variant styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: s-size, m-size, l-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the items wrapper (appended to base `ulx-radio-group`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the radio wrapper (single mode or per-item).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-describedby` for the group/inputs.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-errormessage` for the inputs.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on change event (single/bare): (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next checked value (single/bare): (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-radio\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-rating": {
    "componentName": "UlxRating",
    "componentDirectory": "ulx-rating",
    "sourcePath": "src/components/ulx-rating/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Current rating (0 to stars).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with new value: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stars",
        "type": "number",
        "required": false,
        "defaultValue": "5",
        "hasDefaultValue": true,
        "description": "Number of stars to display.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Whether to show the cancel (reset) icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, value cannot be changed.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"xxs-size\"",
        "hasDefaultValue": true,
        "description": "Size: xxxs-size, xxs-size, xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional: \"filled\" or \"elevated\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the rating group (default from i18n).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-rating\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-segment": {
    "componentName": "UlxSegment",
    "componentDirectory": "ulx-segment",
    "sourcePath": "src/components/ulx-segment/index.gjs",
    "params": [
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Segment type: \"placeholder\", \"vertical\", \"basic\", \"circular\", \"clearing\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: \"red\", \"orange\", \"yellow\", \"olive\", \"green\", \"teal\", \"blue\", \"violet\", \"purple\", \"pink\", \"brown\", \"grey\", \"black\", \"primary\", \"secondary\", \"tertiary\", or with \"-invert\" suffix for inverted colors (e.g., \"blue-invert\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderColor",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Border color variant: \"red\", \"orange\", \"yellow\", \"olive\", \"green\", \"teal\", \"blue\", \"violet\", \"purple\", \"pink\", \"brown\", \"grey\", \"black\", \"primary\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderSide",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Border side for colored border: \"top\", \"bottom\", \"left\", \"right\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "attached",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Attached position: \"top\", \"bottom\", or \"attached\" for middle",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the segment is disabled",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the segment is in loading state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "inline",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether placeholder type should be inline (for placeholder type only)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ARIA role for the segment (defaults to \"region\" for semantic sections, or \"none\" for decorative)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-segments-group": {
    "componentName": "UlxSegmentsGroup",
    "componentDirectory": "ulx-segments-group",
    "sourcePath": "src/components/ulx-segments-group/index.gjs",
    "params": [
      {
        "name": "horizontal",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, displays segments horizontally instead of vertically",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ARIA role for the segments group (defaults to \"group\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-select-button": {
    "componentName": "UlxSelectButton",
    "componentDirectory": "ulx-select-button",
    "sourcePath": "src/components/ulx-select-button/index.gjs",
    "params": [
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options (objects or primitives). Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "*",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Current selection. Single value or array when multiple is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on selection change: (value, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "string|Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Property name or function(option) => boolean to disable an option.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple selections; value must be an array.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the whole component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid/error state for validation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stretch",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Buttons stretch to fill width.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size class: xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant: primary, secondary, success, info, warning, help, danger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "styleVariant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual style: filled, text, raised, rounded.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the group (recommended when no visible label).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-selectbutton\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-skeleton": {
    "componentName": "UlxSkeleton",
    "componentDirectory": "ulx-skeleton",
    "sourcePath": "src/components/ulx-skeleton/index.gjs",
    "params": [
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": "\"rectangle\"",
        "hasDefaultValue": true,
        "description": "Shape of the skeleton: \"rectangle\" | \"circle\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Shorthand for equal width and height (e.g. \"4rem\"). Overrides width/height when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string",
        "required": false,
        "defaultValue": "\"100%\"",
        "hasDefaultValue": true,
        "description": "Width of the skeleton element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "height",
        "type": "string",
        "required": false,
        "defaultValue": "\"1rem\"",
        "hasDefaultValue": true,
        "description": "Height of the skeleton element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderRadius",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom border radius override.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "animation",
        "type": "string",
        "required": false,
        "defaultValue": "\"wave\"",
        "hasDefaultValue": true,
        "description": "Animation type: \"wave\" (default) | \"none\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-skeleton\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-skeleton\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-slide-pane": {
    "componentName": "UlxSlidePane",
    "componentDirectory": "ulx-slide-pane",
    "sourcePath": "src/components/ulx-slide-pane/index.gjs",
    "params": [
      {
        "name": "visible",
        "type": "boolean",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controls pane visibility",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "\"right\"",
        "hasDefaultValue": true,
        "description": "Position: \"left\", \"right\", \"top\", \"bottom\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Pane title (used when no :head block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Preset size: \"s-size\", \"m-size\", \"l-size\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnBackdrop",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close when backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close on Escape key",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showCloseButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show close button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBack",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when header Back is clicked (e.g. for nested panes). When set, Back control is shown in default header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Back\"",
        "hasDefaultValue": true,
        "description": "Accessible label for Back button (aria-label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showBackInHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When onBack is set, show Back in default header (ignored when :head block is used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"left-arrow-icon\"",
        "hasDefaultValue": true,
        "description": "Icon name for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "overlay",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, mask does not block pointer events (clicks pass through to content behind)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "blockScroll",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Block body scroll when open",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Scrollable content area",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary action; if it returns a Promise, pane waits before closing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Cancel action; if returns Promise, optional wait before close",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when onDone/onCancel promise rejects",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnDone",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close pane after onDone promise resolves",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnCancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Close pane after onCancel completes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Cancel\"",
        "hasDefaultValue": true,
        "description": "Default cancel button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Confirm\"",
        "hasDefaultValue": true,
        "description": "Default done button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "submittingLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Done button label during async submit",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no :footer block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide the header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maskClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for mask/backdrop",
        "section": null,
        "scope": "component"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for content area (slidepane-content)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for header (slidepane-header)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for footer (slidepane-footer)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndexBase",
        "type": "number",
        "required": false,
        "defaultValue": "1000",
        "hasDefaultValue": true,
        "description": "Base z-index for stacking",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show maximize/restore button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximized",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Display pane in maximized state (full width)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaximize",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when maximize state changes; receives { maximized }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"close-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"expand-icon\"",
        "hasDefaultValue": true,
        "description": "Icon for maximize button (when not maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "minimizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"collapse-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon for restore button (when maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-slider": {
    "componentName": "UlxSlider",
    "componentDirectory": "ulx-slider",
    "sourcePath": "src/components/ulx-slider/index.gjs",
    "params": [
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID for the hidden input element. Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key used for auto-generated IDs (when `@id` is not provided).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "number|number[]",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled value. Single: number. Range: [minValue, maxValue].",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next value on change: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSlideEnd",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when sliding ends: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "min",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Minimum value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": "100",
        "hasDefaultValue": true,
        "description": "Maximum value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "step",
        "type": "number",
        "required": false,
        "defaultValue": "1",
        "hasDefaultValue": true,
        "description": "Step increment.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "range",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enables range selection (two handles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "orientation",
        "type": "\"horizontal\"|\"vertical\"",
        "required": false,
        "defaultValue": "\"horizontal\"",
        "hasDefaultValue": true,
        "description": "Slider orientation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"s-size\"",
        "hasDefaultValue": true,
        "description": "Size: xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "\"filled\"|\"elevated\"|\"flat\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "withSteps",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies `with-steps` tick styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Prevents changes but keeps the component visible.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional root classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name override (defaults to i18n).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-slider\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-sorter": {
    "componentName": "UlxSorter",
    "componentDirectory": "ulx-sorter",
    "sourcePath": "src/components/ulx-sorter/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Items to render; each becomes one `.sorter-item`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "SortableJS options (may include onEnd, onAdd, onRemove, …).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "SortableJS `filter` selector (merged into options).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "\"list\"",
        "hasDefaultValue": true,
        "description": "`list` | `grid` | `shared` — adds `sorter-{layout}`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "columnsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra layout classes on `.sorter-container` when `@layout=\"grid\"` only; any tokens you use with `ulx-grid` (default `col-5` when omitted).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root `.ulx-sorter` element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes per row, or `(item, index) => string` merged with `sorter-item`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemKey",
        "type": "string",
        "required": false,
        "defaultValue": "\"@identity\"",
        "hasDefaultValue": true,
        "description": "`{{#each}}` key used for row stability (`\"id\"` for object items is recommended in nested lists).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rootId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`id` / `data-id` on `.sorter-container` (Sortable root).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "listKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`data-list` on `.sorter-container`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "sortLevel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-sort-level` on `.sorter-container` (e.g. nested demos + `onMove` guards).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-label` on the listbox container.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "containerClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on `.sorter-container`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` prefix (default `ulx-sorter`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-split-button": {
    "componentName": "UlxSplitButton",
    "componentDirectory": "ulx-split-button",
    "sourcePath": "src/components/ulx-split-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button icon name (font icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "object[]",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Menu items for dropdown (MenuModel API: label, icon, command, disabled, separator, items, etc.)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClick",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button click handler",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon (default down-arrow-icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon size (default s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables both buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant/type (`help` is accepted as an alias for `help-button`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pilled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Pill shape on inner buttons and root wrapper class",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class (e.g. s-size, m-size, l-size). Omit for m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root element id (for aria-controls)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-splitbutton\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-steps": {
    "componentName": "UlxSteps",
    "componentDirectory": "ulx-steps",
    "sourcePath": "src/components/ulx-steps/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Steps array. Each item may include: - `label` (string) - `icon` (string) - Font icon class for UlxIcon (type=\"font\") - `disabled` (boolean) - `command` (Function) - Called on select: ({ originalEvent, index, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled active step index (0-based)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, steps are interactive",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelect",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a step is selected: ({ originalEvent, index, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the nav element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the nav element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-table": {
    "componentName": "UlxTable",
    "componentDirectory": "ulx-table",
    "sourcePath": "src/components/ulx-table/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "Array",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "data array",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "dataKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "unique row identifier field (dot notation OK)",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show loading overlay",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "text when no rows; or use <:emptyMessage> block",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "columns",
        "type": "Array",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "column definition array (see above). Use manageable: false on a column to make it mandatory (always visible, cannot be disabled in manage columns).",
        "section": "Columns",
        "scope": "component"
      },
      {
        "name": "showManageColumns",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show manage-columns button (shown even when only one column is enabled)",
        "section": "Columns",
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'xs-size' | 's-size' | 'm-size' | 'l-size' | 'xl-size'",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "stripedRows",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "alternating row backgrounds",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "showGridlines",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "borders on all cells",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable overflow scroll with sticky header",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "CSS height for scroll container (e.g. '400px')",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "extra classes on root element",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "'horizontal' (default) | 'vertical'. In vertical layout, each row represents a column/property and each column represents a data record (transposed table).",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "verticalLabelField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field name from each data record to use as column headers in vertical layout (e.g. 'name' shows row.name as header)",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "sortMode",
        "type": "string",
        "required": false,
        "defaultValue": "'single'",
        "hasDefaultValue": true,
        "description": "'single' | 'multiple'",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort field",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortOrder",
        "type": "1|-1",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort order (1=asc, -1=desc)",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "multiSortMeta",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled multi-sort: [{field, order}]",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "removableSort",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "third click removes sort",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "onSort",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({field, order, multiSortMeta}) => void (lazy)",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortOptions",
        "type": "Array<{key: string, lbl: string}>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "options for sort criterion dropdown",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort string \"key:asc\" | \"key:desc\"",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "onSortByChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(sortByString) => void when user changes sort from toolbar",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "filterDisplay",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'row' | 'menu'",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "filters",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled filter state",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "showGlobalFilter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "show built-in global search input above the table",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "globalFilterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "placeholder text for the global search input",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "globalFilterFields",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "fields searched by global filter; defaults to all data fields",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({filters}) => void (lazy)",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "col.filter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable filter for this column",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterType",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'text' (default) | 'multiselect' 'multiselect' renders UlxMultiSelect and uses 'in' match mode",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "options for filterType='multiselect': [{label, value}]",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field used for filtering (defaults to col.field)",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "placeholder text for filter input",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterMatchModeOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "custom match mode options; false to hide match mode selector",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterElement",
        "type": "Component",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "fully custom filter component; receives @field @value @onChange",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "filterGroups",
        "type": "Array<{key: string, heading: string, options: Array<{value: any, label: string}>}>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "groups for filter pane",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "onFilterApply",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(selectedMap) => void when user applies filter pane (key -> selected value[])",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "paginator",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable pagination",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "rows",
        "type": "number",
        "required": false,
        "defaultValue": "10",
        "hasDefaultValue": true,
        "description": "rows per page",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "first",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "zero-based first row index",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "totalRecords",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "total records (lazy mode)",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "rowsPerPageOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "e.g. [10, 25, 50]",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "paginatorTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "paginator layout string",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "currentPageReportTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "paginatorPosition",
        "type": "string",
        "required": false,
        "defaultValue": "'bottom'",
        "hasDefaultValue": true,
        "description": "'top' | 'bottom' | 'both'",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "onPage",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({first, rows, page}) => void",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "selectionMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'single' | 'multiple' | 'checkbox' | 'radio' | 'cell'",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "selection",
        "type": "any",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled selection (row, row[], or {row, field})",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "onSelectionChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(selection) => void",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "expandedRows",
        "type": "Array|Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled expanded rows",
        "section": "Row expansion",
        "scope": "component"
      },
      {
        "name": "onRowToggle",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({data}) => void",
        "section": "Row expansion",
        "scope": "component"
      },
      {
        "name": "editMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'cell' | 'row'",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "editingRows",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled row edit state",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditInit",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditSave",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onCellEditInit",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, field}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onCellEditComplete",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, field, value}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "resizableColumns",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable column resize handles",
        "section": "Column resize",
        "scope": "component"
      },
      {
        "name": "columnResizeMode",
        "type": "string",
        "required": false,
        "defaultValue": "'fit'",
        "hasDefaultValue": true,
        "description": "'fit' | 'expand'",
        "section": "Column resize",
        "scope": "component"
      },
      {
        "name": "onRowReorder",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({dragIndex, dropIndex, value}) => void",
        "section": "Row reorder",
        "scope": "component"
      },
      {
        "name": "lazy",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "skip client-side sort/filter/paginate",
        "section": "Lazy",
        "scope": "component"
      },
      {
        "name": "onRowClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "onRowDoubleClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "onContextMenu",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "rowClassName",
        "type": "string|Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "extra class string or fn(row)=>string",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "stateKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "localStorage/sessionStorage key",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "moduleName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "BSTable-compatible alias for stateKey. When used without stateStorage, state is persisted in localStorage.",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "stateStorage",
        "type": "string",
        "required": false,
        "defaultValue": "'session'",
        "hasDefaultValue": true,
        "description": "'local' | 'session'",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "frozenValue",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "rows always shown at top",
        "section": "Frozen rows",
        "scope": "component"
      },
      {
        "name": "rowGroupMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'subheader' | 'rowspan'",
        "section": "Row groups",
        "scope": "component"
      },
      {
        "name": "groupRowsBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field to group by",
        "section": "Row groups",
        "scope": "component"
      },
      {
        "name": "showToggleViews",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show view toggle when at least one of <:detailed> or <:card> is passed. Buttons shown are derived from named blocks: table always; detailed/card only when block is present.",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      },
      {
        "name": "defaultView",
        "type": "string",
        "required": false,
        "defaultValue": "'table'",
        "hasDefaultValue": true,
        "description": "initial view: 'table' | 'detailed' | 'card'",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      },
      {
        "name": "cardViewColumns",
        "type": "number",
        "required": false,
        "defaultValue": "3",
        "hasDefaultValue": true,
        "description": "number of columns in card view grid (passed from outside; used with ulx-grid col span)",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      }
    ]
  },
  "ulx-tabmenu": {
    "componentName": "UlxTabmenu",
    "componentDirectory": "ulx-tabmenu",
    "sourcePath": "src/components/ulx-tabmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of menu item objects. Each item can have: - `label` (string): Display text for the tab (only rendered automatically when NOT using `:item` named block) - `icon` (string): Icon name/class for the tab (only rendered automatically when NOT using `:item` named block) - `iconType` (string): Icon type for UlxIcon (e.g., \"font\", \"svg\") - `iconComponentClass` (string): Custom component class for UlxIcon - `iconSize` (string): Size for UlxIcon - `command` (Function): Callback function when tab is activated: (event, item) => void - `disabled` (boolean): Whether the tab is disabled - `route` (string): Ember route name for LinkTo navigation (takes precedence over `url`) - `models` (Array|Object): Route models for LinkTo (e.g., [id] or { id: 1 }) - `query` (Object): Query parameters for LinkTo (e.g., { page: 1 }) - `url` (string): URL for navigation (used when `route` is not provided) - `target` (string): Target attribute for links (e.g., \"_blank\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled active tab index (0-based). When provided, component is controlled.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired when active tab changes: (event) => void. Event has `index` and `originalEvent` properties.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant (for future use).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the menubar. Use `aria-labelledby` if referencing an existing label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the menubar.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tabId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for generated tab item ids. The final id is `${tabId}-item-${index}`. Pass a unique value per TabMenu instance to avoid duplicate ids when multiple menus are rendered on the same page.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-tag": {
    "componentName": "UlxTag",
    "componentDirectory": "ulx-tag",
    "sourcePath": "src/components/ulx-tag/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label text shown inside the tag.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tag color variant class (e.g. \"primary\", \"success\", \"light-salmon-red\", \"lt-green\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies fully rounded tag styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name passed to `UlxIcon` as `@iconName`. Renders before the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` as `@componentClass` (e.g. \"bs-icons1\" for font icons).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` as `@size` (e.g. \"s18\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invert",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "ULX extension. When true, applies the existing `.outlined` class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies `.disabled` styling (visual + pointer-events none).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual type class: \"outlined\" | \"elevated\" | \"flat\" | \"pill\" | \"rounded\" (alias: \"outline\" => \"outlined\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconPosition",
        "type": "string",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Icon position: \"left\" | \"right\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "Passed to `UlxIcon` when `@icon` is used.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful icons (passed to `UlxIcon`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-tag`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-textarea": {
    "componentName": "UlxTextarea",
    "componentDirectory": "ulx-textarea",
    "sourcePath": "src/components/ulx-textarea/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key or id; overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.describedBy`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.errorId`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-tieredmenu": {
    "componentName": "UlxTieredmenu",
    "componentDirectory": "ulx-tieredmenu",
    "sourcePath": "src/components/ulx-tieredmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Array of menu item objects",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popup",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, menu operates in popup mode (hidden by default)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "visible",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Visibility state for popup mode",
        "section": null,
        "scope": "component"
      },
      {
        "name": "breakpoint",
        "type": "string",
        "required": false,
        "defaultValue": "'767px'",
        "hasDefaultValue": true,
        "description": "Breakpoint for responsive behavior (mobile/tablet)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemSelect",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when an item is selected; receives the item object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when menu should be hidden (popup mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when menu is shown (popup mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "target",
        "type": "HTMLElement",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Target element for popup positioning (button that triggers menu)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "registerRef",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked with the component instance (e.g. for calling hide() from parent)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-tieredmenu`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-timeline": {
    "componentName": "UlxTimeline",
    "componentDirectory": "ulx-timeline",
    "sourcePath": "src/components/ulx-timeline/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<any>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Events array (preferred ULX arg). If not provided, falls back to `value`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "Array<any>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Events array (PrimeReact parity).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "\"vertical\"|\"horizontal\"",
        "required": false,
        "defaultValue": "\"vertical\"",
        "hasDefaultValue": true,
        "description": "Timeline orientation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "align",
        "type": "\"left\"|\"right\"|\"top\"|\"bottom\"|\"alternate\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alignment (default depends on layout).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Field name (supports dot paths) that uniquely identifies an item for stable rendering.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-toast": {
    "componentName": "UlxToast",
    "componentDirectory": "ulx-toast",
    "sourcePath": "src/components/ulx-toast/index.gjs",
    "params": [
      {
        "name": "messages",
        "type": "Array<{ id: string, variant?: string, summary?: string, detail?: string, closable?: boolean, sticky?: boolean, autoClose?: boolean, life?: number, showIcon?: boolean, type?: string }>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of message objects to display. Set message.showIcon to true to show a variant icon; default is no icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "'top-left'|'top-center'|'top-right'|'center'|'bottom-left'|'bottom-center'|'bottom-right'",
        "required": false,
        "defaultValue": "'top-center'",
        "hasDefaultValue": true,
        "description": "Position of the toast container",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClose",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when a message is closed; receives the message object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoClose",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, no message auto-closes unless the message has autoClose:true or life set",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, close buttons are hidden and ESC does not close toasts",
        "section": null,
        "scope": "component"
      },
      {
        "name": "life",
        "type": "number",
        "required": false,
        "defaultValue": "2000",
        "hasDefaultValue": true,
        "description": "Default auto-close delay in ms when auto-close is enabled; can be overridden per message via message.life",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stacked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, displays messages in a stacked layout",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s24'",
        "hasDefaultValue": true,
        "description": "Size class for the variant message icon (UlxIcon); close control stays `s18`",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'close-icon-01'",
        "hasDefaultValue": true,
        "description": "Icon name for the close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variantIcons",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override icon names per variant. Keys: info, success, warn, warning, error, secondary, contrast. Merged with defaults.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "'bs-icons1'",
        "hasDefaultValue": true,
        "description": "Component class for the message icon (UlxIcon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-toggle": {
    "componentName": "UlxToggle",
    "componentDirectory": "ulx-toggle",
    "sourcePath": "src/components/ulx-toggle/index.gjs",
    "params": [
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Controlled on/off state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called on native change: (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next value and event: (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables and prevents focus.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Error/invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error message or flag; sets invalid state when present (with @invalid).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "inputId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the hidden input; use with <label for=\"\"> for a11y.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `inputId` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated id.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size: s-size, m-size, l-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": "\"primary\"",
        "hasDefaultValue": true,
        "description": "Color variant class (e.g. \"primary\", \"green\", etc.).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-toggle\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-toolbar": {
    "componentName": "UlxToolbar",
    "componentDirectory": "ulx-toolbar",
    "sourcePath": "src/components/ulx-toolbar/index.gjs",
    "params": [
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-toolbar\". Used for testing and automation.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-tooltip": {
    "componentName": "UlxTooltip",
    "componentDirectory": "ulx-tooltip",
    "sourcePath": "src/components/ulx-tooltip/index.gjs",
    "params": [
      {
        "name": "triggerRect",
        "type": "DOMRect",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Trigger bounding rect",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipWidth",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipHeight",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "content",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tooltip text. Ignored when using <:content> block.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "'bottom'",
        "hasDefaultValue": true,
        "description": "Position: 'top' | 'right' | 'bottom' | 'left'",
        "section": null,
        "scope": "component"
      },
      {
        "name": "event",
        "type": "string",
        "required": false,
        "defaultValue": "'both'",
        "hasDefaultValue": true,
        "description": "When to show: 'hover' | 'focus' | 'both'. Default 'both' for WCAG (tooltip on keyboard focus).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showDelay",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Delay in ms before showing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideDelay",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Delay in ms before hiding",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, Escape key closes the tooltip",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, tooltip never shows",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showOnDisabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, show tooltip even when trigger is disabled (wraps trigger)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoHide",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true, tooltip hides when pointer leaves trigger. When false, tooltip is interactive (can hover over it)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS class on the tooltip root",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appendTo",
        "type": "HTMLElement|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Where to mount the tooltip (default document.body)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay z-index. Defaults above the topmost modal/slidepane when one is open.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when tooltip is shown",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when tooltip is hidden",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBeforeShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback before show; return false to prevent show",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBeforeHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback before hide; return false to prevent hide",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulx-tristate-checkbox": {
    "componentName": "UlxTristateCheckbox",
    "componentDirectory": "ulx-tristate-checkbox",
    "sourcePath": "src/components/ulx-tristate-checkbox/index.gjs",
    "params": [
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique id for the input and label `for`. Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key used for auto-generated ids when `@id` is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "boolean|null",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Current value: `true` (checked), `false` (unchecked), `null` (indeterminate).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onValueChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next value on toggle: (nextValue, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object (aligned with `UlxCheckbox`): `{ required: true }` sets required on the input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disabled state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state (aria + styling).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, field is treated as invalid (same pattern as `UlxCheckbox` / `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Filled visual variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"xxxs-size\", \"xs-size\", \"s-size\", \"m-size\", \"l-size\", \"xl-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes applied in addition to `ulx-tristatecheckbox ulx-checkbox`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Right-side label text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Adds `required` / `aria-required` to the input (in addition to `rules.required`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showRequiredStar",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Appends `*` to the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "uncheckIconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, unchecked state shows filled box + this icon (e.g. \"close-icon\"). When unset, unchecked is normal empty box (nothing selected).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideLabel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, do not render the right-side label (used for control-only usage).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-tristatecheckbox\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Name attribute for form submissions.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxaccordion": {
    "componentName": "UlxAccordion",
    "componentDirectory": "ulx-accordion",
    "sourcePath": "src/components/ulx-accordion/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Tabs. Each item: { header (string), disabled? (boolean), content? (string) }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number|number[]|null",
        "required": false,
        "defaultValue": "null",
        "hasDefaultValue": true,
        "description": "Controlled open index (single) or array (multiple)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple tabs open",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabOpen",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a tab opens: ({ originalEvent, index }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabClose",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a tab closes: ({ originalEvent, index }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when open state changes: ({ originalEvent, index }) => void; index is number or number[]",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'s-size'",
        "hasDefaultValue": true,
        "description": "Size: xs-size, s-size, m-size, l-size, xl-size",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual: filled, elevated, flat",
        "section": null,
        "scope": "component"
      },
      {
        "name": "spacing",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "compact, spacious",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "rounded, square",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-stroke-icon-new'",
        "hasDefaultValue": true,
        "description": "Font icon when tab is collapsed",
        "section": null,
        "scope": "component"
      },
      {
        "name": "collapseIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-stroke-icon-new'",
        "hasDefaultValue": true,
        "description": "Font icon when tab is expanded",
        "section": null,
        "scope": "component"
      },
      {
        "name": "toggleIconPosition",
        "type": "'left'|'right'",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Position of the expand/collapse icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for accordion",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-accordion`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxavatar": {
    "componentName": "UlxAvatar",
    "componentDirectory": "ulx-avatar",
    "sourcePath": "src/components/ulx-avatar/index.gjs",
    "params": [
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "Avatar type: \"image\" | \"icon\" | \"text\". Determines how content is rendered.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Text label to display when `@type=\"text\"`. Typically initials or short text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "image",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL to display when `@type=\"image\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "imageAlt",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alt text for the image when `@type=\"image\"`. Falls back to `@ariaLabel` or `@label` if not provided. Use empty string for decorative images.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name/class to display when `@type=\"icon\"`. Passed to UlxIcon component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Color variant for avatar background. Options: \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"danger\" | \"red\" | \"green\" | \"blue\" | \"purple\" | \"orange\" | \"gold\" | \"black\" | \"grey\" | \"yellow\" | \"violet\" | \"pink\" | \"brown\" | \"teal\" | \"darkturquoise\" | \"olive\" | \"nightblue\" | \"magenta\". Defaults to no variant (uses default background).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\". Defaults to \"m-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": "\"square\"",
        "hasDefaultValue": true,
        "description": "Shape variant: \"circle\" | \"square\". Defaults to \"square\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful avatars. When provided, automatically sets `aria-hidden=\"false\"` and `role=\"img\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies disabled styling and prevents interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies clickable styling with hover/active states. Requires `@ariaLabel` for accessibility.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-avatar\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-qa` override (defaults to `ulx-avatar`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onLoad",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional image load handler when `@type=\"image\"`. Receives the native load event.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional image error handler when `@type=\"image\"`. Receives the native error event.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "member",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Domain member object. When provided, `member.userProfile` is used as a fallback for profile data.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "memberProfile",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Member profile object containing avatar and name information.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fullName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Explicit full name for the member. Falls back to profile fields when not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "nameOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, renders initials based on `@name` or `@fullName` without image.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Display name used for initials when `@nameOnly` is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "index",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional index used to derive pseudo-unique color variants in `nameOnly` mode.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "avatarSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Legacy avatar size. Mapped to `@size` when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "circular",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Convenience flag to force circle shape when `@shape` is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "canShowAvatar",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional explicit flag to control whether the image avatar should be shown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "noImageSentinel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional sentinel value that represents \\\"no image\\\" for the resolved avatar URL.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShowProfile",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional callback invoked on click with `(member, members, index)` to approximate legacy `showProfile` action.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "members",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional members collection forwarded to `@onShowProfile` for parity with legacy API.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxavatargroup": {
    "componentName": "UlxAvatarGroup",
    "componentDirectory": "ulx-avatar-group",
    "sourcePath": "src/components/ulx-avatar-group/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of avatar items to display. Each item supports all UlxAvatar props.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stacked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies stacked/overlapping layout where avatars overlap each other.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maxVisible",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Maximum number of avatars to display. Remaining count is shown as overflow indicator (e.g., \"+2\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default size for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default shape for all avatars in the group. Can be overridden per item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size for the overflow UlxPopup. Defaults to UlxPopup default when not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, the root uses `role=\"group\"` and this `aria-label` for the collection.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-avatar-group\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-qa` on the root (defaults to `ulx-avatar-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxbadge": {
    "componentName": "UlxBadge",
    "componentDirectory": "ulx-badge",
    "sourcePath": "src/components/ulx-badge/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Content to display inside the badge. If not provided, children will be rendered.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Color variant: \"primary\" | \"secondary\" | \"success\" | \"info\" | \"warning\" | \"danger\" | \"contrast\" | \"light-grey\". Defaults to \"primary\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size variant: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\". Defaults to \"s-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge type: \"circle\" | \"dot\" | \"square\" (default). \"dot\" renders as a dot indicator without text content; use `@ariaLabel` for a meaningful dot. \"circle\" applies fully rounded shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful badges. When provided, automatically sets `aria-hidden=\"false\"` and `role=\"status\"`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies disabled styling and prevents interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, applies clickable styling with hover/active states and focus (`tabindex=\"0\"`). Requires `@ariaLabel` for accessibility.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-badge\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxbadgebutton": {
    "componentName": "UlxBadgeButton",
    "componentDirectory": "ulx-badge-button",
    "sourcePath": "src/components/ulx-badge-button/index.gjs",
    "params": [
      {
        "name": "badge",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge value/text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeVariant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Badge variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Badge size class (xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeType",
        "type": "'circle'|'dot'|'square'",
        "required": false,
        "defaultValue": "'circle'",
        "hasDefaultValue": true,
        "description": "Badge shape/type",
        "section": null,
        "scope": "component"
      },
      {
        "name": "badgeCustomClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom badge CSS classes",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxbannermessage": {
    "componentName": "UlxBannerMessage",
    "componentDirectory": "ulx-banner-message",
    "sourcePath": "src/components/ulx-banner-message/index.gjs",
    "params": [
      {
        "name": "message",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single message object: { id?: string, variant?: string, summary?: string, detail?: string, closable?: boolean, icon?: string }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onRemove",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when the message is removed; receives the message object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dismissStorageKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, banner is one-time: after close we persist this key in localStorage and do not show again until key is cleared",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes for the root container",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class for container and message (e.g. xs-size, s-size, m-size, l-size, xl-size)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": "\"svg\"",
        "hasDefaultValue": true,
        "description": "Icon type for message icon (e.g. \"svg\", \"font\"). Default \"svg\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for message icon (e.g. s18). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-banner-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxbutton": {
    "componentName": "UlxButton",
    "componentDirectory": "ulx-button",
    "sourcePath": "src/components/ulx-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button label text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "href",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, renders as <a href=\"{{href}}\">; otherwise <button>",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'|'white'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Button variant/type (`help` is accepted as an alias for `help-button`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pilled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Pill-shaped border radius (adds `pilled` class)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant (transparent background)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant (transparent background with border)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Omit for m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Full width button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-button\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'button'|'submit'|'reset'",
        "required": false,
        "defaultValue": "'button'",
        "hasDefaultValue": true,
        "description": "Button type attribute",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, button shows loading spinner and is disabled. Use for always-on loading state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClick",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Click handler; may return a Promise to show loading until it settles",
        "section": null,
        "scope": "component"
      },
      {
        "name": "elementRef",
        "type": "Modifier",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional modifier (or element-ref callback) applied to the root element for parent ref capture (e.g. dropdown target)",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxbuttongroup": {
    "componentName": "UlxButtonGroup",
    "componentDirectory": "ulx-button-group",
    "sourcePath": "src/components/ulx-button-group/index.gjs",
    "params": [
      {
        "name": "orientation",
        "type": "'horizontal'|'vertical'",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "Layout direction",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size, l-size, xl-size). Default m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fluid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Equal-width buttons (grid)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "severity",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Severity for active state styling",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "raised",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Raised variant on group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-button-group`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxcard": {
    "componentName": "UlxCard",
    "componentDirectory": "ulx-card",
    "sourcePath": "src/components/ulx-card/index.gjs",
    "params": [
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Card title text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "subTitle",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional subtitle text under the title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "header",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional header content; when provided, rendered inside header section above title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footer",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional footer content; rendered inside footer section.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appearance",
        "type": "'outlined'|'elevated'|'flat'",
        "required": false,
        "defaultValue": "'outlined'",
        "hasDefaultValue": true,
        "description": "Visual style variant from card.less.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'contrast'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tone variant for outlined cards.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size modifier from card.less.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "density",
        "type": "'compact'|'spacious'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Content density modifier.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"rounded\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "square",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"square\" class (overrides rounded).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "interactive",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"interactive\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "clickable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alias for interactive; also adds \"interactive\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hoverable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When true, adds \"hoverable\" class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes applied to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class; defaults to getComponentClass('card').",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "'ulx-card'",
        "hasDefaultValue": true,
        "description": "Root data-qa identifier; internal element identifiers are derived from this value.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxcheckbox": {
    "componentName": "UlxCheckbox",
    "componentDirectory": "ulx-checkbox",
    "sourcePath": "src/components/ulx-checkbox/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID for the checkbox input. Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional list of checkbox items. When provided, the component renders a group. Each item supports: `{ label, checked, indeterminate, disabled, customClass, id }`. Provide a string `id` per item when the list can reorder or grow; otherwise ids are derived from index (stable across checked toggles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@items` is provided: (item, checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Whether the checkbox is checked (controlled) (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "indeterminate",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the checkbox is in indeterminate state (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Name attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single checkbox label rendered next to the checkbox (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object for constraints (old component pattern): { required: true }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the checkbox is disabled (single mode) or disables all items (group mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the field is in invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether to use filled variant styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"s-size\", \"m-size\", \"l-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the items wrapper (appended to base `ulx-checkbox-group`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the checkbox wrapper (single mode or per-item).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-describedby` for the checkbox input (used by group rendering).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-errormessage` for the checkbox input (used by group rendering).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on change event (single/bare): (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next checked value (single/bare): (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-checkbox\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxchip": {
    "componentName": "UlxChip",
    "componentDirectory": "ulx-chip",
    "sourcePath": "src/components/ulx-chip/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main text shown in the chip.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name/class for UlxIcon (e.g. font class); renders before label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "image",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL; when set, renders before label (avatar-style).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "imageAlt",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alt text for the image; defaults to t(\"lbl.image\") when omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "removable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, shows remove control and wires click/keyboard.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "removeIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for remove button; defaults to close icon from bs-icons1.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onRemove",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback (event, value) when remove is triggered; value is label, image, or icon context.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onImageError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when image fails to load.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size class (e.g. \"s-size\", \"m-size\"); applied to root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "\"ulx-chip\"",
        "hasDefaultValue": true,
        "description": "data-qa value for root element, useful for automation tests.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxdataview": {
    "componentName": "UlxDataView",
    "componentDirectory": "ulx-data-view",
    "sourcePath": "src/components/ulx-data-view/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "\"list\"",
        "hasDefaultValue": true,
        "description": "Layout variant: \"list\" or \"grid\". Adds layout-list or layout-grid class to root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "gridRole",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional ARIA role for the main content container (e.g. \"list\" for list semantics).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS class for root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` override (defaults to `ulx-dataview`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxdivider": {
    "componentName": "UlxDivider",
    "componentDirectory": "ulx-divider",
    "sourcePath": "src/components/ulx-divider/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "'horizontal'|'vertical'",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "Divider layout (affects orientation + base class).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "align",
        "type": "'left'|'center'|'right'|'top'|'bottom'|null",
        "required": false,
        "defaultValue": "null",
        "hasDefaultValue": true,
        "description": "Content alignment. When omitted, align classes are only applied when content is present.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'solid'|'dashed'|'dotted'",
        "required": false,
        "defaultValue": "'solid'",
        "hasDefaultValue": true,
        "description": "Divider line style.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'s-size'",
        "hasDefaultValue": true,
        "description": "ULS size class: xs-size | s-size | m-size | l-size | xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thickness",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS thickness class: size-2 | size-3.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS color/variant class: primary | dark | secondary.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base `ulx-divider` class (rare).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxdropdown": {
    "componentName": "UlxDropdown",
    "componentDirectory": "ulx-dropdown",
    "sourcePath": "src/components/ulx-dropdown/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "any",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Selected value (controlled).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options (objects or scalars). Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name or path for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name or path for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionImageUrl",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Property name or path for option image URL (e.g. for value/item templates). When set, yielded hash includes imageUrl.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, options are groups; this is the group label key.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupChildren",
        "type": "string",
        "required": false,
        "defaultValue": "'items'",
        "hasDefaultValue": true,
        "description": "When optionGroupLabel is set, key for group children.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder when nothing selected.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the dropdown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows progress spinner instead of dropdown icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show filter input in panel.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClear",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show clear icon when value is set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checkmark",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show checkmark on selected item.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder for filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when options list is empty.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyFilterMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when filter has no results.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": "'232px'",
        "hasDefaultValue": true,
        "description": "Max height of option list (CSS value).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'self'",
        "hasDefaultValue": true,
        "description": "Where the overlay panel is created. - `\"self\"` keeps the panel in-place after the dropdown markup (default). - `\"body\"` appends the panel to `<body>`. - `HTMLElement`: append to that element. - `Function`: called to resolve the destination element. - `string`: a CSS selector resolved with `document.querySelector()`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that closes the overlay immediately.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` override for automation (default `ulx-dropdown`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the trigger (for label `for` / ARIA).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the trigger id (e.g. `@key={{field.key}}` with `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` ids (e.g. from `UlxField` control hash).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` id (e.g. `field.errorId`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "`aria-required` on the combobox.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(value) => void when selection changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFocus",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Focus callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBlur",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Blur callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void when filter input changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay opens.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(option) => boolean or property key to disable options.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay panel z-index (e.g. when rendered above other overlays).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxemptystate": {
    "componentName": "UlxEmptyState",
    "componentDirectory": "ulx-empty-state",
    "sourcePath": "src/components/ulx-empty-state/index.gjs",
    "params": [
      {
        "name": "headerText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Title (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "subHeaderText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Subtitle (i18n key or display text); rendered via t().",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon for UlxIcon (font or symbol name).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for icon (default s48).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "containerClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on inner container.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "marginClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Margin class for the actions area (default mt-6).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-empty-state\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxfield": {
    "componentName": "UlxField",
    "componentDirectory": "ulx-field",
    "sourcePath": "src/components/ulx-field/index.gjs",
    "params": [
      {
        "name": "fieldClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root `.field` wrapper.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "fieldId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable id for the control, help, and error nodes. Auto-generated when omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Plain-text label (or use the `label` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "helpText",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Help copy rendered below the control (linked via `aria-describedby`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error copy; when set, invalid region is shown and linked via `aria-errormessage`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional info icon tooltip next to the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`{ required: true }` or editor-style `{ required: t('…'), format: { with, allowBlank, msg }, maxLength: { value?, msg } }`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxfieldset": {
    "componentName": "UlxFieldSet",
    "componentDirectory": "ulx-fieldset",
    "sourcePath": "src/components/ulx-fieldset/index.gjs",
    "params": [
      {
        "name": "legend",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Legend text (or use the `legend` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional description (or use the `description` block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "'grid'|'stack'",
        "required": false,
        "defaultValue": "'grid'",
        "hasDefaultValue": true,
        "description": "Content layout inside the fieldset wrapper region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Disables all nested controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset **content wrapper** (e.g. `gap-6`, `col-2`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "actionsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the fieldset actions region.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` (default `ulx-fieldset`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxform": {
    "componentName": "UlxForm",
    "componentDirectory": "ulx-form",
    "sourcePath": "src/components/ulx-form/index.gjs",
    "params": [
      {
        "name": "onSubmit",
        "type": "(event: SubmitEvent) => void",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Submit handler; prevents default navigation when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onReset",
        "type": "(event: Event) => void",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Reset handler.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'m-size'|'l-size'|'xl-size'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size variant (default s-size has no class).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes on the form root. Avoid `ulx-grid` here; use `UlxFieldSet` `@layout=\"grid\"` (and `@customClass` on the fieldset wrapper) for field groups.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "actionsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the actions wrapper (base `ulx-form-actions`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` (default `ulx-form`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxicon": {
    "componentName": "UlxIcon",
    "componentDirectory": "ulx-icon",
    "sourcePath": "src/components/ulx-icon/index.gjs",
    "params": [
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Symbol id or font class. Not used when a custom block is provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful icons. When set, aria-hidden becomes \"false\" and role=\"img\" is applied so screen readers announce it (e.g. close icon in modal).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class (e.g. \"s18\", \"m-size\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional class for icon styling (e.g. \"bs-icons1\" for font icons).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "\"svg\" = symbol reference; \"font\" = font icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": "\"ulx-icon\"",
        "hasDefaultValue": true,
        "description": "Root test selector override.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxiconbutton": {
    "componentName": "UlxIconButton",
    "componentDirectory": "ulx-icon-button",
    "sourcePath": "src/components/ulx-icon-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button label text",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconLeft",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the prefix (left of label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name; renders in the suffix (right of label). If both are set, `iconRight` wins.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "UlxIcon base class (e.g. \"bs-icons1\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon size class (e.g. s13, s16, s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows explicit spinner state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Button size class from parent",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for root button",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxiconinput": {
    "componentName": "UlxIconInput",
    "componentDirectory": "ulx-icon-input",
    "sourcePath": "src/components/ulx-icon-input/index.gjs",
    "params": [
      {
        "name": "iconLeft",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the left, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconRight",
        "type": "string|boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Font/symbol icon name on the right, or `true` with `<:icon>`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when using a string `iconLeft` / `iconRight`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on `UlxIcon` (`@customClass`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Meaningful name for the preset icon; sets wrapper visibility for AT.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon field size class (default `m-size`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Adds `disabled` on the icon-field root; mirror the inner control.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconFieldClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the icon-field root.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulximage": {
    "componentName": "UlxImage",
    "componentDirectory": "ulx-image",
    "sourcePath": "src/components/ulx-image/index.gjs",
    "params": [
      {
        "name": "src",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Image URL.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "alt",
        "type": "string",
        "required": false,
        "defaultValue": "\"\"",
        "hasDefaultValue": true,
        "description": "`alt` for the inner `<img>`; empty string for decorative images.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "shape",
        "type": "'square'|'rounded'|'circle'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`rounded` / `circle` map to ULS modifiers. `square` adds the `square` crop modifier; pair with `@size` so ULS applies fixed square dimensions.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "'xs-size'|'s-size'|'m-size'|'l-size'|'xl-size'|'xxl-size'|'xxxl-size'|'img-size-100'|'img-size-75'|'img-size-50'|'img-size-25'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ULS `image.less` on the root: fixed scale tokens (`xs-size`–`xxxl-size`, pair with `shape=\"square\"` for square crop) or fluid width utilities (`img-size-*` percentages).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "objectFit",
        "type": "'cover'|'contain'|'fill'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`object-*` modifier on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "aspectRatio",
        "type": "'square'|'video'|'portrait'|'four-three'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`img-aspect-*` fluid aspect box on the root (pair with parent width constraints and/or `@size` such as `img-size-100`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thumbLandscape",
        "type": "'xs'|'s'|'m'|'l'|'xl'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Fixed 16:9 thumbnail: `thumb-landscape-*` (ULS section 4).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "thumbPortrait",
        "type": "'xs'|'s'|'m'|'l'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Fixed 9:16 thumbnail: `thumb-portrait-*`. Do not set both `thumbLandscape` and `thumbPortrait` on the same instance.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`width` attribute on `<img>` (layout hint / CLS).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "height",
        "type": "string|number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`height` attribute on `<img>` (layout hint / CLS).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "'lazy'|'eager'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `loading` hint.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "decoding",
        "type": "'auto'|'sync'|'async'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `decoding`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "crossorigin",
        "type": "'anonymous'|'use-credentials'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Native `crossorigin`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base class (defaults to `getComponentClass('image')`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`data-qa` on the root (defaults to `ulx-image`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxinput": {
    "componentName": "UlxInput",
    "componentDirectory": "ulx-input",
    "sourcePath": "src/components/ulx-input/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key or id; overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.describedBy`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.errorId`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxmessage": {
    "componentName": "UlxMessage",
    "componentDirectory": "ulx-message",
    "sourcePath": "src/components/ulx-message/index.gjs",
    "params": [
      {
        "name": "text",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Shown when no block is passed; ignored when a block is provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'info'|'success'|'warn'|'error'",
        "required": false,
        "defaultValue": "'info'",
        "hasDefaultValue": true,
        "description": "Visual variant (demos: \"Variant\", not \"Severity\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Renders `UlxIcon` when set; icon wrapper is `aria-hidden`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` when `icon` is set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size token (e.g. xs-size … xl-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root id (via `...attributes`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` override (default `ulx-message`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxmodal": {
    "componentName": "UlxModal",
    "componentDirectory": "ulx-modal",
    "sourcePath": "src/components/ulx-modal/index.gjs",
    "params": [
      {
        "name": "visible",
        "type": "boolean",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controls modal visibility",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Modal title (used when no :head block provided)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Modal width (CSS value, e.g. \"500px\", \"50%\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "\"center\"",
        "hasDefaultValue": true,
        "description": "Modal position: \"center\", \"top\", \"bottom\", \"left\", \"right\", \"top-left\", \"top-right\", \"bottom-left\", \"bottom-right\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Modal size: \"xs-size\", \"s-size\", \"m-size\", \"l-size\", \"xl-size\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Enable scrollable content area",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnBackdrop",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Close modal when backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close modal when Escape key is pressed",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showCloseButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show close button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"close-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"expand-icon\"",
        "hasDefaultValue": true,
        "description": "Icon name for maximize button (when not maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "minimizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"collapse-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for minimize/restore button (when maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "animationType",
        "type": "string",
        "required": false,
        "defaultValue": "\"fade\"",
        "hasDefaultValue": true,
        "description": "Animation type: \"fade\", \"zoom\", \"slide\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: \"elevated\", \"flat\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "draggable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enable dragging dialog by header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "resizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enable resizing dialog",
        "section": null,
        "scope": "component"
      },
      {
        "name": "overlay",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, no overlay/backdrop; dialog is non-blocking (non-modal mask styling)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "blockScroll",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Block body scroll when modal is visible",
        "section": null,
        "scope": "component"
      },
      {
        "name": "keepInViewport",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Keep dialog within viewport bounds",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show maximize/minimize button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximized",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Display dialog in maximized state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "breakpoints",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Responsive width breakpoints, e.g. {\"960px\": \"75vw\", \"640px\": \"90vw\"}",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maskClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS class for mask/backdrop",
        "section": null,
        "scope": "component"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for content area (dialog-content)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for header (dialog-header)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for footer (dialog-footer)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when modal is hidden/closed (close button, escape key, backdrop click)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when cancel button is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when done/confirm button is clicked. If returns a Promise, modal waits for completion before auto-closing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when modal is shown",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaskClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when mask/backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaximize",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when maximize state changes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when onDone/onCancel promise rejects (receives error as argument)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnDone",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Auto-close modal after onDone promise resolves successfully",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnCancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Auto-close modal after onCancel completes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Cancel label (defaults to i18n cancel)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Confirm label (defaults to i18n confirm)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "submittingLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label for done button during submission (defaults to doneButtonLabel)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no :footer block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide the header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndexBase",
        "type": "number",
        "required": false,
        "defaultValue": "1000",
        "hasDefaultValue": true,
        "description": "Base z-index for modal stacking",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root `data-qa` on the mask (defaults to `ulx-modal`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxmultiselect": {
    "componentName": "UlxMultiSelect",
    "componentDirectory": "ulx-multi-select",
    "sourcePath": "src/components/ulx-multi-select/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Selected values array (controlled).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options. Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name or path for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name or path for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, options are groups; this is the group label key.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionGroupChildren",
        "type": "string",
        "required": false,
        "defaultValue": "'items'",
        "hasDefaultValue": true,
        "description": "When optionGroupLabel is set, key for group children.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "placeholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder when nothing selected.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "display",
        "type": "string",
        "required": false,
        "defaultValue": "'comma'",
        "hasDefaultValue": true,
        "description": "'comma' | 'chip' for selected display.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectionLimit",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Max number of selections (optional).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Shows progress spinner in trigger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "unknown",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Show filter input in panel. When not provided, filter auto-enables for larger option lists (more than 10).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClose",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show close (X) button in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showClear",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show a Clear action in the panel footer when value has items. Pass `false` to disable.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAll",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show select-all checkbox in panel header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selectAllLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label for select-all checkbox. When empty string, checkbox is shown without text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Placeholder for filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when options list is empty.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "emptyFilterMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Message when filter has no results.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": "'232px'",
        "hasDefaultValue": true,
        "description": "Max height of option list (CSS value).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": "1100",
        "hasDefaultValue": true,
        "description": "Overlay z-index (useful when the panel must stack above nearby overlays).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'self'",
        "hasDefaultValue": true,
        "description": "Where to render the overlay panel. - `\"self\"`: keep the panel in-place after the component markup (default). - `\"body\"`: append overlay to `<body>`. - `HTMLElement`: append to that element. - `Function`: called to resolve the container element. - `string`: a CSS selector resolved via `document.querySelector()`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "renderContainer",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that closes the overlay immediately.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "resetFilterOnHide",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Reset filter when overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the trigger (or use `@key` with UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable id when `@id` is omitted (e.g. `field.key` from UlxField).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` ids (e.g. from UlxField control hash).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` id (e.g. `field.errorId`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Required field.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(value) => void when selection changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFocus",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Focus callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBlur",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Blur callback.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void when filter input changes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "allowAddition",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, show an Add button in the panel header tied to the filter input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onAddItem",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(filterValue) => void | Promise<void>; when the Add button is clicked; only invoked if the trimmed filter does not match an existing option label or value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay opens.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When overlay closes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelectAll",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional (event, checked) => void; when provided overrides default select-all.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(option) => boolean or property key to disable options.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "virtualScrollerOptions",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set with <code>itemSize</code> (number, px), the list is virtualized for large datasets. Not used when <code>@optionGroupLabel</code> is set.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxoptionsegment": {
    "componentName": "UlxOptionSegment",
    "componentDirectory": "ulx-option-segment",
    "sourcePath": "src/components/ulx-option-segment/index.gjs",
    "params": [
      {
        "name": "layout",
        "type": "\"stacked\"|\"tile\"",
        "required": false,
        "defaultValue": "\"stacked\"",
        "hasDefaultValue": true,
        "description": "`stacked` lists vertically; `tile` lays out items in a row with wrap (`layout-tile` on the group)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selection",
        "type": "\"control\"|\"center\"|\"corner\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Selection affordance (root class `selection-<value>` for styling). Omit for `@type=\"color-swatch\"` (no `selection-*` class). - **control** — default when using built-in radio/checkbox/tristate; emphasize the `.option-control` column. - **corner** — default when `@type=\"basic\"` or a custom `<:control>` block; corner tick/check treatment via CSS. - **center** — always opt-in (`@selection=\"center\"`); full-card selection (tint, ring, or `::after` layer). No separate Ember behavior—target `.ulx-option-segments.selection-center` in styles.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "List of option items. When provided, the component renders a group: - Each item can include: - {string} value - {boolean} [selected] - {boolean} [disabled] - {boolean} [compact] - {string} [title] - {string} [description] - {Array<object>} [nestedItems] - {string} [itemClass] - Extra classes for this row only (after group `@itemClass`) - {string} [optionColorCode] - Color for **color-swatch** groups (`@type=\"color-swatch\"`); sets `--ulx-option-color-code` on the card. - {string} [colorCode] - Alias of **optionColorCode**. - {string} [id] - Unique id for the embedded control when items can reorder; otherwise ids use index (stable when toggling selection).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "selected",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Single-item selected state (when `@items` is not used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disable interaction when true (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "compact",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Use the compact visual variant (group-level)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value passed back to `@onSelect` (single-item mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelect",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked on click / key activation: `(selected, value, event) => void`",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary label text when no `title` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Helper text when no `description` block is provided",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "CSS class applied to every `.option-item` root (before each item's own `itemClass`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for embedded controls and title/description ids (first list item). Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, stable key for auto-generated ids (e.g. `@key={{field.key}}` with `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom ARIA role for the root element (overrides `@type`-based role)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the option",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxpaginator": {
    "componentName": "UlxPaginator",
    "componentDirectory": "ulx-paginator",
    "sourcePath": "src/components/ulx-paginator/index.gjs",
    "params": [
      {
        "name": "totalRecords",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Total number of records",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rows",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Rows per page",
        "section": null,
        "scope": "component"
      },
      {
        "name": "first",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Zero-based index of first row to display",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pageLinkSize",
        "type": "number",
        "required": false,
        "defaultValue": "5",
        "hasDefaultValue": true,
        "description": "Number of page links to show",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rowsPerPageOptions",
        "type": "number[]",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Options for rows-per-page dropdown (e.g. [10, 20, 30])",
        "section": null,
        "scope": "component"
      },
      {
        "name": "alwaysShow",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show paginator even when only one page",
        "section": null,
        "scope": "component"
      },
      {
        "name": "template",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Layout string, e.g. \"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "currentPageReportTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Report template; placeholders: {currentPage}, {totalPages}, {first}, {last}, {rows}, {totalRecords}",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onPageChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback (event) => void; event: { first, rows, page, totalPages }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "firstPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for first page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "prevPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for previous page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "nextPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for next page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "lastPageLinkIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for last page button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS class for root",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-paginator\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxpanelmenu": {
    "componentName": "UlxPanelmenu",
    "componentDirectory": "ulx-panelmenu",
    "sourcePath": "src/components/ulx-panelmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Menu items (panels with nested items).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandedKeys",
        "type": "Object|null",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled expansion map: { [key: string]: true }.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onExpandedKeysChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next expandedKeys map in controlled mode.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onOpen",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel expands: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClose",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a root panel collapses: ({ originalEvent, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple root panels expanded at once.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "expandIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'right-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for collapsed state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "collapseIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'down-arrow-icon'",
        "hasDefaultValue": true,
        "description": "Font icon for expanded state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "toggleIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu expand/collapse icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s20'",
        "hasDefaultValue": true,
        "description": "Size token for submenu item icons.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "flat",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Borderless flat layout (`flat` on root; pairs with ULS `.flat` panelmenu styles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxpopup": {
    "componentName": "UlxPopup",
    "componentDirectory": "ulx-popup",
    "sourcePath": "src/components/ulx-popup/index.gjs",
    "params": [
      {
        "name": "basePosition",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "targetRect",
        "type": "DOMRect",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupWidth",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popupHeight",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "verticalGap",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "horizontalGap",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "visible",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Controls visibility of the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "target",
        "type": "HTMLElement|Event",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Target element or event for popup positioning.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "context",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'body'",
        "hasDefaultValue": true,
        "description": "Where to render the popup overlay.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "renderContainer",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appendTo",
        "type": "'self'|'body'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Backward-compatible alias for `@context`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "boundary",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Boundary used for flip/clamp calculations.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollContext",
        "type": "'window'|HTMLElement|Function|string",
        "required": false,
        "defaultValue": "'window'",
        "hasDefaultValue": true,
        "description": "Scroll target that repositions the popup while open.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "'position-bottom'",
        "hasDefaultValue": true,
        "description": "Positioning class for pointer and offset.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size class: xs-size | s-size | m-size | l-size | xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: elevated | flat | outlined.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay z-index override.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dismissable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true, clicking outside or resizing closes the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, shows a close button in the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true (default), Escape closes the popup.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes applied to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the popup; maps to `aria-label` on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked when popup is shown (parent should set @visible).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked after exit animation completes and popup is fully hidden.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "registerRef",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked with the component instance when the popup is mounted (for calling show/hide/toggle), and with null on teardown.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for the header wrapper (when header is shown).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for the footer wrapper (when footer is shown).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default header title. When set and no <:head> block, shows default header with this title.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer cancel label (falls back to i18n cancel).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer confirm label (falls back to i18n confirm).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer cancel button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer done button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no <:footer> block).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideTertiaryButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "In default footer, hide the tertiary (left) button. Set false with tertiaryButtonLabel to show.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Default footer tertiary button label (e.g. \"Reset\"). Shown when hideTertiaryButton is false.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryButtonIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for default footer tertiary button (passed to UlxButton @icon).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tertiaryIconPos",
        "type": "'left'|'right'",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Icon position for tertiary button.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTertiary",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when default footer tertiary button is clicked.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideCancelButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "In default footer, hide the cancel button.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideDoneButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "In default footer, hide the done button.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxprogressbar": {
    "componentName": "UlxProgressBar",
    "componentDirectory": "ulx-progress-bar",
    "sourcePath": "src/components/ulx-progress-bar/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Progress 0–100. Omit or null for indeterminate.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "mode",
        "type": "'determinate'|'indeterminate'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override: 'indeterminate' forces indeterminate; otherwise inferred from value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showValue",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show percentage label (determinate only). Use hide-value / show-value classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showControls",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, render [ - ] [ bar ] [ + ] [ value% ] layout.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when user clicks + or - with the new value. Required when showControls is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "step",
        "type": "number",
        "required": false,
        "defaultValue": "1",
        "hasDefaultValue": true,
        "description": "Increment/decrement amount for controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "min",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Minimum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": "100",
        "hasDefaultValue": true,
        "description": "Maximum value when using controls.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"xxxs-size\"",
        "hasDefaultValue": true,
        "description": "Size class (e.g. xxxs-size, xs-size, s-size, m-size).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional icon size for control buttons (e.g. s12). No default; only applied when provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'secondary'|'success'|'info'|'warning'|'danger'",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Bar color variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default from getComponentClass('progressbar'))",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressbar\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxprogressspinner": {
    "componentName": "UlxProgressSpinner",
    "componentDirectory": "ulx-progressspinner",
    "sourcePath": "src/components/ulx-progressspinner/index.gjs",
    "params": [
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class from parent (e.g. xs-size, s-size, m-size). Omit for default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "color",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stroke color (any valid CSS color). Sets uls-v2 progressspinner CSS variables so the spinner uses this color; omit for theme default.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes (applied only to parent element)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (default: ulx-progressspinner)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name when spinner is the main loading indicator (e.g. \"Loading\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name for UlxIcon component. Used when the custom icon block is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class for the icon (e.g. \"s18\", \"m-size\"). Defaults to spinner size if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "Icon type for UlxIcon component. \"svg\" = symbol reference; \"font\" = font icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-progressspinner\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxradio": {
    "componentName": "UlxRadio",
    "componentDirectory": "ulx-radio",
    "sourcePath": "src/components/ulx-radio/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID base for the radio(s). Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@id` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated ids. Overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "Array<object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional list of radio items. When provided, the component renders a group. Each item supports: `{ label, value, checked, disabled, customClass, id }`. Pass string `id` when the list can reorder; otherwise ids use the item index (stable when toggling selection).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `@items` is provided: (item, checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Whether the radio is checked (controlled) (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Value attribute for form submissions (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Single radio label rendered next to the radio (single mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object for constraints (old component pattern): { required: true }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error message string for invalid-state calculation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the radio is disabled (single mode) or disables all items (group mode).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the field is in invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether to use filled variant styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: s-size, m-size, l-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "groupClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the items wrapper (appended to base `ulx-radio-group`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes for the radio wrapper (single mode or per-item).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-describedby` for the group/inputs.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override `aria-errormessage` for the inputs.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on change event (single/bare): (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next checked value (single/bare): (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-radio\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxrating": {
    "componentName": "UlxRating",
    "componentDirectory": "ulx-rating",
    "sourcePath": "src/components/ulx-rating/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Current rating (0 to stars).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with new value: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stars",
        "type": "number",
        "required": false,
        "defaultValue": "5",
        "hasDefaultValue": true,
        "description": "Number of stars to display.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Whether to show the cancel (reset) icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, value cannot be changed.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"xxs-size\"",
        "hasDefaultValue": true,
        "description": "Size: xxxs-size, xxs-size, xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional: \"filled\" or \"elevated\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the rating group (default from i18n).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-rating\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxsegment": {
    "componentName": "UlxSegment",
    "componentDirectory": "ulx-segment",
    "sourcePath": "src/components/ulx-segment/index.gjs",
    "params": [
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Segment type: \"placeholder\", \"vertical\", \"basic\", \"circular\", \"clearing\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant: \"red\", \"orange\", \"yellow\", \"olive\", \"green\", \"teal\", \"blue\", \"violet\", \"purple\", \"pink\", \"brown\", \"grey\", \"black\", \"primary\", \"secondary\", \"tertiary\", or with \"-invert\" suffix for inverted colors (e.g., \"blue-invert\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderColor",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Border color variant: \"red\", \"orange\", \"yellow\", \"olive\", \"green\", \"teal\", \"blue\", \"violet\", \"purple\", \"pink\", \"brown\", \"grey\", \"black\", \"primary\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderSide",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Border side for colored border: \"top\", \"bottom\", \"left\", \"right\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "attached",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Attached position: \"top\", \"bottom\", or \"attached\" for middle",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the segment is disabled",
        "section": null,
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether the segment is in loading state",
        "section": null,
        "scope": "component"
      },
      {
        "name": "inline",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Whether placeholder type should be inline (for placeholder type only)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ARIA role for the segment (defaults to \"region\" for semantic sections, or \"none\" for decorative)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the segment",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxsegmentsgroup": {
    "componentName": "UlxSegmentsGroup",
    "componentDirectory": "ulx-segments-group",
    "sourcePath": "src/components/ulx-segments-group/index.gjs",
    "params": [
      {
        "name": "horizontal",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, displays segments horizontally instead of vertically",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "role",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ARIA role for the segments group (defaults to \"group\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that describes the segments group",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxselectbutton": {
    "componentName": "UlxSelectButton",
    "componentDirectory": "ulx-select-button",
    "sourcePath": "src/components/ulx-select-button/index.gjs",
    "params": [
      {
        "name": "options",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of options (objects or primitives). Use optionLabel/optionValue for object shape.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "*",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Current selection. Single value or array when multiple is true.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired on selection change: (value, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionLabel",
        "type": "string",
        "required": false,
        "defaultValue": "'label'",
        "hasDefaultValue": true,
        "description": "Property name for option display text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionValue",
        "type": "string",
        "required": false,
        "defaultValue": "'value'",
        "hasDefaultValue": true,
        "description": "Property name for option value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "optionDisabled",
        "type": "string|Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Property name or function(option) => boolean to disable an option.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "multiple",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Allow multiple selections; value must be an array.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables the whole component.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid/error state for validation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stretch",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Buttons stretch to fill width.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "'m-size'",
        "hasDefaultValue": true,
        "description": "Size class: xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant: primary, secondary, success, info, warning, help, danger.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "styleVariant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual style: filled, text, raised, rounded.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for the group (recommended when no visible label).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-selectbutton\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxskeleton": {
    "componentName": "UlxSkeleton",
    "componentDirectory": "ulx-skeleton",
    "sourcePath": "src/components/ulx-skeleton/index.gjs",
    "params": [
      {
        "name": "shape",
        "type": "string",
        "required": false,
        "defaultValue": "\"rectangle\"",
        "hasDefaultValue": true,
        "description": "Shape of the skeleton: \"rectangle\" | \"circle\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Shorthand for equal width and height (e.g. \"4rem\"). Overrides width/height when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "width",
        "type": "string",
        "required": false,
        "defaultValue": "\"100%\"",
        "hasDefaultValue": true,
        "description": "Width of the skeleton element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "height",
        "type": "string",
        "required": false,
        "defaultValue": "\"1rem\"",
        "hasDefaultValue": true,
        "description": "Height of the skeleton element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "borderRadius",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Custom border radius override.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "animation",
        "type": "string",
        "required": false,
        "defaultValue": "\"wave\"",
        "hasDefaultValue": true,
        "description": "Animation type: \"wave\" (default) | \"none\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class (defaults to \"ulx-skeleton\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-skeleton\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxslidepane": {
    "componentName": "UlxSlidePane",
    "componentDirectory": "ulx-slide-pane",
    "sourcePath": "src/components/ulx-slide-pane/index.gjs",
    "params": [
      {
        "name": "visible",
        "type": "boolean",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controls pane visibility",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "\"right\"",
        "hasDefaultValue": true,
        "description": "Position: \"left\", \"right\", \"top\", \"bottom\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "title",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Pane title (used when no :head block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Preset size: \"s-size\", \"m-size\", \"l-size\"",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnBackdrop",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close when backdrop is clicked",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close on Escape key",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showCloseButton",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Show close button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBack",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when header Back is clicked (e.g. for nested panes). When set, Back control is shown in default header.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Back\"",
        "hasDefaultValue": true,
        "description": "Accessible label for Back button (aria-label)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showBackInHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When onBack is set, show Back in default header (ignored when :head block is used)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"left-arrow-icon\"",
        "hasDefaultValue": true,
        "description": "Icon name for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backButtonVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "backIconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for Back button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "overlay",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, mask does not block pointer events (clicks pass through to content behind)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "blockScroll",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Block body scroll when open",
        "section": null,
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Scrollable content area",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when pane opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onDone",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Primary action; if it returns a Promise, pane waits before closing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Cancel action; if returns Promise, optional wait before close",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onError",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when onDone/onCancel promise rejects",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnDone",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "Close pane after onDone promise resolves",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoCloseOnCancel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Close pane after onCancel completes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "cancelButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Cancel\"",
        "hasDefaultValue": true,
        "description": "Default cancel button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "doneButtonLabel",
        "type": "string",
        "required": false,
        "defaultValue": "\"Confirm\"",
        "hasDefaultValue": true,
        "description": "Default done button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "submittingLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Done button label during async submit",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideFooter",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide default footer (when no :footer block)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideHeader",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, hide the header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maskClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for mask/backdrop",
        "section": null,
        "scope": "component"
      },
      {
        "name": "contentClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for content area (slidepane-content)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "headerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for header (slidepane-header)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "footerClassName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra class for footer (slidepane-footer)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndexBase",
        "type": "number",
        "required": false,
        "defaultValue": "1000",
        "hasDefaultValue": true,
        "description": "Base z-index for stacking",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizable",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Show maximize/restore button in header",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximized",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Display pane in maximized state (full width)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onMaximize",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when maximize state changes; receives { maximized }",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"close-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon name for close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "\"bs-icons1\"",
        "hasDefaultValue": true,
        "description": "Icon component class for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconVariant",
        "type": "string",
        "required": false,
        "defaultValue": "\"text\"",
        "hasDefaultValue": true,
        "description": "UlxButton variant for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "\"s18\"",
        "hasDefaultValue": true,
        "description": "Icon size for header icon buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "maximizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"expand-icon\"",
        "hasDefaultValue": true,
        "description": "Icon for maximize button (when not maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "minimizeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "\"collapse-icon-01\"",
        "hasDefaultValue": true,
        "description": "Icon for restore button (when maximized)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxslider": {
    "componentName": "UlxSlider",
    "componentDirectory": "ulx-slider",
    "sourcePath": "src/components/ulx-slider/index.gjs",
    "params": [
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique ID for the hidden input element. Auto-generated if not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key used for auto-generated IDs (when `@id` is not provided).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "number|number[]",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled value. Single: number. Range: [minValue, maxValue].",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next value on change: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSlideEnd",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when sliding ends: (value) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "min",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Minimum value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "max",
        "type": "number",
        "required": false,
        "defaultValue": "100",
        "hasDefaultValue": true,
        "description": "Maximum value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "step",
        "type": "number",
        "required": false,
        "defaultValue": "1",
        "hasDefaultValue": true,
        "description": "Step increment.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "range",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Enables range selection (two handles).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "orientation",
        "type": "\"horizontal\"|\"vertical\"",
        "required": false,
        "defaultValue": "\"horizontal\"",
        "hasDefaultValue": true,
        "description": "Slider orientation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"s-size\"",
        "hasDefaultValue": true,
        "description": "Size: xs-size, s-size, m-size, l-size, xl-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "\"filled\"|\"elevated\"|\"flat\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "withSteps",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies `with-steps` tick styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables interaction.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readonly",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Prevents changes but keeps the component visible.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional root classes.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name override (defaults to i18n).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-slider\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxsorter": {
    "componentName": "UlxSorter",
    "componentDirectory": "ulx-sorter",
    "sourcePath": "src/components/ulx-sorter/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Items to render; each becomes one `.sorter-item`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "options",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "SortableJS options (may include onEnd, onAdd, onRemove, …).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filter",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "SortableJS `filter` selector (merged into options).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "\"list\"",
        "hasDefaultValue": true,
        "description": "`list` | `grid` | `shared` — adds `sorter-{layout}`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "columnsClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra layout classes on `.sorter-container` when `@layout=\"grid\"` only; any tokens you use with `ulx-grid` (default `col-5` when omitted).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on the root `.ulx-sorter` element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes per row, or `(item, index) => string` merged with `sorter-item`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemKey",
        "type": "string",
        "required": false,
        "defaultValue": "\"@identity\"",
        "hasDefaultValue": true,
        "description": "`{{#each}}` key used for row stability (`\"id\"` for object items is recommended in nested lists).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rootId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`id` / `data-id` on `.sorter-container` (Sortable root).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "listKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`data-list` on `.sorter-container`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "sortLevel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional `data-sort-level` on `.sorter-container` (e.g. nested demos + `onMove` guards).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-label` on the listbox container.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "containerClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on `.sorter-container`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root `data-qa` prefix (default `ulx-sorter`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxsplitbutton": {
    "componentName": "UlxSplitButton",
    "componentDirectory": "ulx-split-button",
    "sourcePath": "src/components/ulx-split-button/index.gjs",
    "params": [
      {
        "name": "label",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button label",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button icon name (font icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "items",
        "type": "object[]",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Menu items for dropdown (MenuModel API: label, icon, command, disabled, separator, items, etc.)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClick",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Main button click handler",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown opens",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when dropdown closes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIcon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon (default down-arrow-icon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dropdownIconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Dropdown trigger icon size (default s18)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables both buttons",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "'primary'|'secondary'|'success'|'info'|'warning'|'help-button'|'danger'",
        "required": false,
        "defaultValue": "'primary'",
        "hasDefaultValue": true,
        "description": "Variant/type (`help` is accepted as an alias for `help-button`)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "pilled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Pill shape on inner buttons and root wrapper class",
        "section": null,
        "scope": "component"
      },
      {
        "name": "text",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Text variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "outlined",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Outlined variant",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class (e.g. s-size, m-size, l-size). Omit for m-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Root element id (for aria-controls)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-splitbutton\".",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxsteps": {
    "componentName": "UlxSteps",
    "componentDirectory": "ulx-steps",
    "sourcePath": "src/components/ulx-steps/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Steps array. Each item may include: - `label` (string) - `icon` (string) - Font icon class for UlxIcon (type=\"font\") - `disabled` (boolean) - `command` (Function) - Called on select: ({ originalEvent, index, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled active step index (0-based)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "readOnly",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, steps are interactive",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onSelect",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called when a step is selected: ({ originalEvent, index, item }) => void",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the nav element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the nav element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtable": {
    "componentName": "UlxTable",
    "componentDirectory": "ulx-table",
    "sourcePath": "src/components/ulx-table/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "Array",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "data array",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "dataKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "unique row identifier field (dot notation OK)",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "loading",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show loading overlay",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "emptyMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "text when no rows; or use <:emptyMessage> block",
        "section": "Data",
        "scope": "component"
      },
      {
        "name": "columns",
        "type": "Array",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "column definition array (see above). Use manageable: false on a column to make it mandatory (always visible, cannot be disabled in manage columns).",
        "section": "Columns",
        "scope": "component"
      },
      {
        "name": "showManageColumns",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show manage-columns button (shown even when only one column is enabled)",
        "section": "Columns",
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'xs-size' | 's-size' | 'm-size' | 'l-size' | 'xl-size'",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "stripedRows",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "alternating row backgrounds",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "showGridlines",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "borders on all cells",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable overflow scroll with sticky header",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "scrollHeight",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "CSS height for scroll container (e.g. '400px')",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "extra classes on root element",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "string",
        "required": false,
        "defaultValue": "'horizontal'",
        "hasDefaultValue": true,
        "description": "'horizontal' (default) | 'vertical'. In vertical layout, each row represents a column/property and each column represents a data record (transposed table).",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "verticalLabelField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field name from each data record to use as column headers in vertical layout (e.g. 'name' shows row.name as header)",
        "section": "Layout",
        "scope": "component"
      },
      {
        "name": "sortMode",
        "type": "string",
        "required": false,
        "defaultValue": "'single'",
        "hasDefaultValue": true,
        "description": "'single' | 'multiple'",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort field",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortOrder",
        "type": "1|-1",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort order (1=asc, -1=desc)",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "multiSortMeta",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled multi-sort: [{field, order}]",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "removableSort",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "third click removes sort",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "onSort",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({field, order, multiSortMeta}) => void (lazy)",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortOptions",
        "type": "Array<{key: string, lbl: string}>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "options for sort criterion dropdown",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "sortBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled sort string \"key:asc\" | \"key:desc\"",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "onSortByChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(sortByString) => void when user changes sort from toolbar",
        "section": "Sort",
        "scope": "component"
      },
      {
        "name": "filterDisplay",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'row' | 'menu'",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "filters",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled filter state",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "showGlobalFilter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "show built-in global search input above the table",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "globalFilterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "placeholder text for the global search input",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "globalFilterFields",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "fields searched by global filter; defaults to all data fields",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "onFilter",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({filters}) => void (lazy)",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "col.filter",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable filter for this column",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterType",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'text' (default) | 'multiselect' 'multiselect' renders UlxMultiSelect and uses 'in' match mode",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "options for filterType='multiselect': [{label, value}]",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterField",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field used for filtering (defaults to col.field)",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterPlaceholder",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "placeholder text for filter input",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterMatchModeOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "custom match mode options; false to hide match mode selector",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "col.filterElement",
        "type": "Component",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "fully custom filter component; receives @field @value @onChange",
        "section": "Filter",
        "scope": "column"
      },
      {
        "name": "filterGroups",
        "type": "Array<{key: string, heading: string, options: Array<{value: any, label: string}>}>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "groups for filter pane",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "onFilterApply",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(selectedMap) => void when user applies filter pane (key -> selected value[])",
        "section": "Filter",
        "scope": "component"
      },
      {
        "name": "paginator",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable pagination",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "rows",
        "type": "number",
        "required": false,
        "defaultValue": "10",
        "hasDefaultValue": true,
        "description": "rows per page",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "first",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "zero-based first row index",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "totalRecords",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "total records (lazy mode)",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "rowsPerPageOptions",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "e.g. [10, 25, 50]",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "paginatorTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "paginator layout string",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "currentPageReportTemplate",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "paginatorPosition",
        "type": "string",
        "required": false,
        "defaultValue": "'bottom'",
        "hasDefaultValue": true,
        "description": "'top' | 'bottom' | 'both'",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "onPage",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({first, rows, page}) => void",
        "section": "Pagination",
        "scope": "component"
      },
      {
        "name": "selectionMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'single' | 'multiple' | 'checkbox' | 'radio' | 'cell'",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "selection",
        "type": "any",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled selection (row, row[], or {row, field})",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "onSelectionChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "(selection) => void",
        "section": "Selection",
        "scope": "component"
      },
      {
        "name": "expandedRows",
        "type": "Array|Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled expanded rows",
        "section": "Row expansion",
        "scope": "component"
      },
      {
        "name": "onRowToggle",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({data}) => void",
        "section": "Row expansion",
        "scope": "component"
      },
      {
        "name": "editMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'cell' | 'row'",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "editingRows",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "controlled row edit state",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditInit",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditSave",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onRowEditCancel",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onCellEditInit",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, field}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "onCellEditComplete",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, field, value}) => void",
        "section": "Editing",
        "scope": "component"
      },
      {
        "name": "resizableColumns",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "enable column resize handles",
        "section": "Column resize",
        "scope": "component"
      },
      {
        "name": "columnResizeMode",
        "type": "string",
        "required": false,
        "defaultValue": "'fit'",
        "hasDefaultValue": true,
        "description": "'fit' | 'expand'",
        "section": "Column resize",
        "scope": "component"
      },
      {
        "name": "onRowReorder",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({dragIndex, dropIndex, value}) => void",
        "section": "Row reorder",
        "scope": "component"
      },
      {
        "name": "lazy",
        "type": "boolean",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "skip client-side sort/filter/paginate",
        "section": "Lazy",
        "scope": "component"
      },
      {
        "name": "onRowClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "onRowDoubleClick",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "onContextMenu",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "({row, index, originalEvent}) => void",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "rowClassName",
        "type": "string|Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "extra class string or fn(row)=>string",
        "section": "Row events",
        "scope": "component"
      },
      {
        "name": "stateKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "localStorage/sessionStorage key",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "moduleName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "BSTable-compatible alias for stateKey. When used without stateStorage, state is persisted in localStorage.",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "stateStorage",
        "type": "string",
        "required": false,
        "defaultValue": "'session'",
        "hasDefaultValue": true,
        "description": "'local' | 'session'",
        "section": "State persistence",
        "scope": "component"
      },
      {
        "name": "frozenValue",
        "type": "Array",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "rows always shown at top",
        "section": "Frozen rows",
        "scope": "component"
      },
      {
        "name": "rowGroupMode",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "'subheader' | 'rowspan'",
        "section": "Row groups",
        "scope": "component"
      },
      {
        "name": "groupRowsBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "field to group by",
        "section": "Row groups",
        "scope": "component"
      },
      {
        "name": "showToggleViews",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "show view toggle when at least one of <:detailed> or <:card> is passed. Buttons shown are derived from named blocks: table always; detailed/card only when block is present.",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      },
      {
        "name": "defaultView",
        "type": "string",
        "required": false,
        "defaultValue": "'table'",
        "hasDefaultValue": true,
        "description": "initial view: 'table' | 'detailed' | 'card'",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      },
      {
        "name": "cardViewColumns",
        "type": "number",
        "required": false,
        "defaultValue": "3",
        "hasDefaultValue": true,
        "description": "number of columns in card view grid (passed from outside; used with ulx-grid col span)",
        "section": "View toggle (table / detailed / card)",
        "scope": "component"
      }
    ]
  },
  "ulxtabmenu": {
    "componentName": "UlxTabmenu",
    "componentDirectory": "ulx-tabmenu",
    "sourcePath": "src/components/ulx-tabmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Array of menu item objects. Each item can have: - `label` (string): Display text for the tab (only rendered automatically when NOT using `:item` named block) - `icon` (string): Icon name/class for the tab (only rendered automatically when NOT using `:item` named block) - `iconType` (string): Icon type for UlxIcon (e.g., \"font\", \"svg\") - `iconComponentClass` (string): Custom component class for UlxIcon - `iconSize` (string): Size for UlxIcon - `command` (Function): Callback function when tab is activated: (event, item) => void - `disabled` (boolean): Whether the tab is disabled - `route` (string): Ember route name for LinkTo navigation (takes precedence over `url`) - `models` (Array|Object): Route models for LinkTo (e.g., [id] or { id: 1 }) - `query` (Object): Query parameters for LinkTo (e.g., { page: 1 }) - `url` (string): URL for navigation (used when `route` is not provided) - `target` (string): Target attribute for links (e.g., \"_blank\")",
        "section": null,
        "scope": "component"
      },
      {
        "name": "activeIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Controlled active tab index (0-based). When provided, component is controlled.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onTabChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired when active tab changes: (event) => void. Event has `index` and `originalEvent` properties.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual variant (for future use).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible label for the menubar. Use `aria-labelledby` if referencing an existing label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "ID of element that labels the menubar.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tabId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Base id for generated tab item ids. The final id is `${tabId}-item-${index}`. Pass a unique value per TabMenu instance to avoid duplicate ids when multiple menus are rendered on the same page.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtag": {
    "componentName": "UlxTag",
    "componentDirectory": "ulx-tag",
    "sourcePath": "src/components/ulx-tag/index.gjs",
    "params": [
      {
        "name": "value",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Label text shown inside the tag.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tag color variant class (e.g. \"primary\", \"success\", \"light-salmon-red\", \"lt-green\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rounded",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies fully rounded tag styling.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "icon",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Icon name passed to `UlxIcon` as `@iconName`. Renders before the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` as `@componentClass` (e.g. \"bs-icons1\" for font icons).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Passed to `UlxIcon` as `@size` (e.g. \"s18\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invert",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "ULX extension. When true, applies the existing `.outlined` class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Applies `.disabled` styling (visual + pointer-events none).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Size class: \"xs-size\" | \"s-size\" | \"m-size\" | \"l-size\" | \"xl-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "type",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Visual type class: \"outlined\" | \"elevated\" | \"flat\" | \"pill\" | \"rounded\" (alias: \"outline\" => \"outlined\").",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconPosition",
        "type": "string",
        "required": false,
        "defaultValue": "'left'",
        "hasDefaultValue": true,
        "description": "Icon position: \"left\" | \"right\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconType",
        "type": "'svg'|'font'",
        "required": false,
        "defaultValue": "'svg'",
        "hasDefaultValue": true,
        "description": "Passed to `UlxIcon` when `@icon` is used.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconAriaLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Accessible name for meaningful icons (passed to `UlxIcon`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "componentClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override base component class.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-tag`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtextarea": {
    "componentName": "UlxTextarea",
    "componentDirectory": "ulx-textarea",
    "sourcePath": "src/components/ulx-textarea/index.gjs",
    "params": [
      {
        "name": "field",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@rules`, `@error`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key or id; overrides `field.key` when set.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.describedBy`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overrides `field.errorId`.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtieredmenu": {
    "componentName": "UlxTieredmenu",
    "componentDirectory": "ulx-tieredmenu",
    "sourcePath": "src/components/ulx-tieredmenu/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<Object>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Array of menu item objects",
        "section": null,
        "scope": "component"
      },
      {
        "name": "popup",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, menu operates in popup mode (hidden by default)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "visible",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Visibility state for popup mode",
        "section": null,
        "scope": "component"
      },
      {
        "name": "breakpoint",
        "type": "string",
        "required": false,
        "defaultValue": "'767px'",
        "hasDefaultValue": true,
        "description": "Breakpoint for responsive behavior (mobile/tablet)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onItemSelect",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when an item is selected; receives the item object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when menu should be hidden (popup mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when menu is shown (popup mode)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "target",
        "type": "HTMLElement",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Target element for popup positioning (button that triggers menu)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes",
        "section": null,
        "scope": "component"
      },
      {
        "name": "registerRef",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback invoked with the component instance (e.g. for calling hide() from parent)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional override for root `data-qa` (default `ulx-tieredmenu`).",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtimeline": {
    "componentName": "UlxTimeline",
    "componentDirectory": "ulx-timeline",
    "sourcePath": "src/components/ulx-timeline/index.gjs",
    "params": [
      {
        "name": "items",
        "type": "Array<any>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Events array (preferred ULX arg). If not provided, falls back to `value`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "Array<any>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "Events array (PrimeReact parity).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "layout",
        "type": "\"vertical\"|\"horizontal\"",
        "required": false,
        "defaultValue": "\"vertical\"",
        "hasDefaultValue": true,
        "description": "Timeline orientation.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "align",
        "type": "\"left\"|\"right\"|\"top\"|\"bottom\"|\"alternate\"",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Alignment (default depends on layout).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataKey",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Field name (supports dot paths) that uniquely identifies an item for stable rendering.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra CSS classes appended to the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtoast": {
    "componentName": "UlxToast",
    "componentDirectory": "ulx-toast",
    "sourcePath": "src/components/ulx-toast/index.gjs",
    "params": [
      {
        "name": "messages",
        "type": "Array<{ id: string, variant?: string, summary?: string, detail?: string, closable?: boolean, sticky?: boolean, autoClose?: boolean, life?: number, showIcon?: boolean, type?: string }>",
        "required": false,
        "defaultValue": "[]",
        "hasDefaultValue": true,
        "description": "List of message objects to display. Set message.showIcon to true to show a variant icon; default is no icon.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "'top-left'|'top-center'|'top-right'|'center'|'bottom-left'|'bottom-center'|'bottom-right'",
        "required": false,
        "defaultValue": "'top-center'",
        "hasDefaultValue": true,
        "description": "Position of the toast container",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onClose",
        "type": "function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when a message is closed; receives the message object",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoClose",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, no message auto-closes unless the message has autoClose:true or life set",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closable",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When false, close buttons are hidden and ESC does not close toasts",
        "section": null,
        "scope": "component"
      },
      {
        "name": "life",
        "type": "number",
        "required": false,
        "defaultValue": "2000",
        "hasDefaultValue": true,
        "description": "Default auto-close delay in ms when auto-close is enabled; can be overridden per message via message.life",
        "section": null,
        "scope": "component"
      },
      {
        "name": "stacked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, displays messages in a stacked layout",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconSize",
        "type": "string",
        "required": false,
        "defaultValue": "'s24'",
        "hasDefaultValue": true,
        "description": "Size class for the variant message icon (UlxIcon); close control stays `s18`",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeIconName",
        "type": "string",
        "required": false,
        "defaultValue": "'close-icon-01'",
        "hasDefaultValue": true,
        "description": "Icon name for the close button",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variantIcons",
        "type": "Object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override icon names per variant. Keys: info, success, warn, warning, error, secondary, contrast. Merged with defaults.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "iconComponentClass",
        "type": "string",
        "required": false,
        "defaultValue": "'bs-icons1'",
        "hasDefaultValue": true,
        "description": "Component class for the message icon (UlxIcon)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtoggle": {
    "componentName": "UlxToggle",
    "componentDirectory": "ulx-toggle",
    "sourcePath": "src/components/ulx-toggle/index.gjs",
    "params": [
      {
        "name": "checked",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Controlled on/off state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called on native change: (event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onCheckedChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Called with next value and event: (checked, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disables and prevents focus.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Error/invalid state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Error message or flag; sets invalid state when present (with @invalid).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "inputId",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Id for the hidden input; use with <label for=\"\"> for a11y.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When `inputId` is omitted, used as the input id (e.g. `@key={{field.key}}` with `UlxField`); otherwise stable key for auto-generated id.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size: s-size, m-size, l-size.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "variant",
        "type": "string",
        "required": false,
        "defaultValue": "\"primary\"",
        "hasDefaultValue": true,
        "description": "Color variant class (e.g. \"primary\", \"green\", etc.).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes on root.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override for root element data-qa (default: \"ulx-toggle\").",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtoolbar": {
    "componentName": "UlxToolbar",
    "componentDirectory": "ulx-toolbar",
    "sourcePath": "src/components/ulx-toolbar/index.gjs",
    "params": [
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS classes for the root element.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-toolbar\". Used for testing and automation.",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtooltip": {
    "componentName": "UlxTooltip",
    "componentDirectory": "ulx-tooltip",
    "sourcePath": "src/components/ulx-tooltip/index.gjs",
    "params": [
      {
        "name": "triggerRect",
        "type": "DOMRect",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Trigger bounding rect",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipWidth",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "tooltipHeight",
        "type": "number",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": true,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "",
        "section": null,
        "scope": "component"
      },
      {
        "name": "content",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Tooltip text. Ignored when using <:content> block.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "position",
        "type": "string",
        "required": false,
        "defaultValue": "'bottom'",
        "hasDefaultValue": true,
        "description": "Position: 'top' | 'right' | 'bottom' | 'left'",
        "section": null,
        "scope": "component"
      },
      {
        "name": "event",
        "type": "string",
        "required": false,
        "defaultValue": "'both'",
        "hasDefaultValue": true,
        "description": "When to show: 'hover' | 'focus' | 'both'. Default 'both' for WCAG (tooltip on keyboard focus).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showDelay",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Delay in ms before showing",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideDelay",
        "type": "number",
        "required": false,
        "defaultValue": "0",
        "hasDefaultValue": true,
        "description": "Delay in ms before hiding",
        "section": null,
        "scope": "component"
      },
      {
        "name": "closeOnEscape",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, Escape key closes the tooltip",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, tooltip never shows",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showOnDisabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, show tooltip even when trigger is disabled (wraps trigger)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "autoHide",
        "type": "boolean",
        "required": false,
        "defaultValue": "true",
        "hasDefaultValue": true,
        "description": "When true, tooltip hides when pointer leaves trigger. When false, tooltip is interactive (can hover over it)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Additional CSS class on the tooltip root",
        "section": null,
        "scope": "component"
      },
      {
        "name": "appendTo",
        "type": "HTMLElement|string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Where to mount the tooltip (default document.body)",
        "section": null,
        "scope": "component"
      },
      {
        "name": "zIndex",
        "type": "number",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Overlay z-index. Defaults above the topmost modal/slidepane when one is open.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when tooltip is shown",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback when tooltip is hidden",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBeforeShow",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback before show; return false to prevent show",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onBeforeHide",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback before hide; return false to prevent hide",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Override root data-qa attribute",
        "section": null,
        "scope": "component"
      }
    ]
  },
  "ulxtristatecheckbox": {
    "componentName": "UlxTristateCheckbox",
    "componentDirectory": "ulx-tristate-checkbox",
    "sourcePath": "src/components/ulx-tristate-checkbox/index.gjs",
    "params": [
      {
        "name": "id",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Unique id for the input and label `for`. Auto-generated if omitted.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "key",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Stable key used for auto-generated ids when `@id` is not provided.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "value",
        "type": "boolean|null",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Current value: `true` (checked), `false` (unchecked), `null` (indeterminate).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "onValueChange",
        "type": "Function",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Callback fired with next value on toggle: (nextValue, event) => void.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "rules",
        "type": "object",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Rules object (aligned with `UlxCheckbox`): `{ required: true }` sets required on the input.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Disabled state.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "invalid",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Invalid state (aria + styling).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "error",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, field is treated as invalid (same pattern as `UlxCheckbox` / `UlxField`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "filled",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Filled visual variant.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "size",
        "type": "string",
        "required": false,
        "defaultValue": "\"m-size\"",
        "hasDefaultValue": true,
        "description": "Size variant: \"xxxs-size\", \"xs-size\", \"s-size\", \"m-size\", \"l-size\", \"xl-size\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "customClass",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Extra classes applied in addition to `ulx-tristatecheckbox ulx-checkbox`.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "itemLabel",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Right-side label text.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "required",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Adds `required` / `aria-required` to the input (in addition to `rules.required`).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "showRequiredStar",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "Appends `*` to the label.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaDescribedBy",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-describedby` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "ariaErrorMessage",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "`aria-errormessage` value.",
        "section": null,
        "scope": "component"
      },
      {
        "name": "uncheckIconName",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "When set, unchecked state shows filled box + this icon (e.g. \"close-icon\"). When unset, unchecked is normal empty box (nothing selected).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "hideLabel",
        "type": "boolean",
        "required": false,
        "defaultValue": "false",
        "hasDefaultValue": true,
        "description": "When true, do not render the right-side label (used for control-only usage).",
        "section": null,
        "scope": "component"
      },
      {
        "name": "dataQa",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Optional root data-qa override. Defaults to \"ulx-tristatecheckbox\".",
        "section": null,
        "scope": "component"
      },
      {
        "name": "name",
        "type": "string",
        "required": false,
        "defaultValue": null,
        "hasDefaultValue": false,
        "description": "Name attribute for form submissions.",
        "section": null,
        "scope": "component"
      }
    ]
  }
};

export default componentApiRegistry;
