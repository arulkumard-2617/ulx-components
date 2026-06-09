// AUTO-GENERATED FILE. DO NOT EDIT.
// Run `npm run generate:component-usages` from ulx-ember to refresh.

const componentUsagesRegistry = {
  "button": {
    "slug": "button",
    "routeKey": "button",
    "component": "UlxButton",
    "docUrl": "/components/button",
    "header": "Button",
    "summary": "Primary action control — labels, variants, icons, loading, and link mode for forms and dialogs.",
    "subHeader": "Primary action control — labels, variants, icons, loading, and link mode for forms and dialogs.",
    "importMsg": "import { UlxButton } from ",
    "usages": {
      "component": "UlxButton",
      "responsibility": "Primary interactive control for actions: submit, confirm, cancel, and navigation styled as a button.",
      "owns": [
        "Visible label, variants (primary, danger, success, …), sizes, and visual modes (outlined, text, link, pilled)",
        "Optional leading icon via @icon and @iconPos",
        "Disabled and loading states",
        "Rendering as <button> or <a> when @href is set"
      ],
      "doesNotOwn": [
        "Icon-only compact controls — use UlxIconButton",
        "Split primary + menu actions — use UlxSplitButton",
        "Badge-styled toggles — use UlxBadgeButton",
        "Form structure — use UlxForm and UlxField"
      ],
      "whenToUse": [
        "Primary and secondary actions in forms, dialogs, and page headers",
        "Destructive confirm (danger variant) and success completion",
        "External links that should look like buttons (@href)"
      ],
      "whenNotToUse": [
        {
          "instead": "UlxIconButton",
          "when": "Toolbar or table actions that are icon-only or icon-dominant"
        },
        {
          "instead": "UlxSplitButton",
          "when": "One default action plus a dropdown of related actions"
        },
        {
          "instead": "LinkTo",
          "when": "Standard in-app navigation without button affordance"
        }
      ],
      "dos": [
        "Use variant to express intent (primary, danger), not decoration alone",
        "Provide one primary action per action group when possible",
        "Use @loading for async submit instead of only disabling the control",
        "Pass a clear @label for screen reader users"
      ],
      "donts": [
        "Do not nest interactive elements inside UlxButton",
        "Do not use multiple primary buttons competing in the same footer or toolbar",
        "Do not use danger variant for non-destructive actions"
      ],
      "antiPatterns": [
        "Using UlxButton with empty label for icon-only toolbars",
        "Using primary variant for passive navigation to another route"
      ]
    },
    "keyParamNames": [
      "label",
      "variant",
      "disabled",
      "loading",
      "href",
      "icon",
      "iconPos",
      "outlined",
      "size"
    ]
  },
  "icon-button": {
    "slug": "icon-button",
    "routeKey": "icon-button",
    "component": "UlxIconButton",
    "docUrl": "/components/icon-button",
    "header": "IconButton",
    "summary": "Icon-only or icon-with-label actions on UlxButton — toolbars, table rows, and compact controls.",
    "subHeader": "Icon-only or icon-with-label actions on UlxButton — toolbars, table rows, and compact controls.",
    "importMsg": "import { UlxIconButton } from ",
    "usages": {
      "component": "UlxIconButton",
      "responsibility": "Wrapper around UlxButton that places an icon or loading spinner in the prefix/suffix affix slots. Use when every action needs a leading or trailing icon, or when the control is icon-only.",
      "owns": [
        "Icon affix via @iconLeft (prefix) or @iconRight (suffix); if both are set, @iconRight wins",
        "Optional @label; omitting it applies icon-only styling (icon-only class)",
        "Custom affix graphic via the <:icon> named block (font icons use @iconLeft / @iconRight + @iconComponentClass)",
        "@loading — spinner replaces the icon in the affix while the button stays disabled",
        "UlxButton passthrough: @variant, @size, @outlined, @text, @pilled, @href, @fluid, @disabled, @onClick, and ...attributes"
      ],
      "doesNotOwn": [
        "Label-only actions with no icon — use UlxButton",
        "UlxButton @icon / @iconPos — use @iconLeft, @iconRight, or <:icon> on UlxIconButton instead",
        "UlxButton <:prefix> / <:suffix> blocks — not exposed; affix is owned by UlxIconButton",
        "Action menus and split primary + dropdown — use UlxActionMenu or UlxSplitButton",
        "Form labels, validation, and field layout — compose inside UlxField / UlxForm"
      ],
      "whenToUse": [
        "Toolbar, table row, or card header actions where an icon is always present",
        "Icon-only controls when space is tight (set aria-label or use a short @label)",
        "Labeled actions with a leading or trailing icon (save, edit, delete)",
        "Link-styled actions with an icon (@href + link variant)",
        "Async actions that need a spinner in the icon area (@loading)"
      ],
      "whenNotToUse": [
        {
          "instead": "UlxButton",
          "when": "No icon is required, or you only need @icon / @iconPos on a standard button"
        },
        {
          "instead": "UlxSplitButton",
          "when": "One default action plus a menu of related secondary actions"
        },
        {
          "instead": "UlxActionMenu",
          "when": "A single trigger opens a list of actions (overflow / kebab menu)"
        },
        {
          "instead": "LinkTo",
          "when": "In-app route navigation without button or icon-button semantics"
        }
      ],
      "dos": [
        "Provide aria-label via ...attributes when @label is omitted (icon-only)",
        "Pass @iconComponentClass (e.g. bs-icons1) when using font icon names from that family",
        "Use @iconLeft for most actions; use @iconRight only when the icon must trail the label",
        "Use @loading for async work so feedback appears in the icon affix",
        "Use <:icon> when the affix is not a standard UlxIcon font glyph",
        "Match @variant and visual flags (@outlined, @text, @pilled) to the action intent, same as UlxButton"
      ],
      "donts": [
        "Do not ship icon-only buttons without an accessible name (aria-label or visible @label)",
        "Do not set both @iconLeft and @iconRight unless you intend @iconRight to take precedence",
        "Do not nest buttons, links, or inputs inside UlxIconButton",
        "Do not use @fluid icon-only buttons as full-width primary form submits",
        "Do not stack multiple primary-variant icon-only buttons in one action group",
        "Do not use UlxButton @icon or <:prefix> / <:suffix> — they are not wired on this component"
      ],
      "antiPatterns": [
        "Using UlxIconButton without @iconLeft, @iconRight, <:icon>, or @loading (no affix content)",
        "Full-width @fluid icon-only control as the main form submit",
        "Replacing UlxButton only to avoid a visible label when text is required for clarity",
        "Several primary-variant icon-only buttons competing in the same toolbar or footer"
      ]
    },
    "keyParamNames": [
      "label",
      "iconLeft",
      "iconRight",
      "iconComponentClass",
      "iconSize",
      "loading",
      "variant",
      "outlined",
      "text",
      "pilled",
      "size",
      "disabled",
      "href"
    ]
  },
  "popup": {
    "slug": "popup",
    "routeKey": "popup",
    "component": "UlxPopup",
    "docUrl": "/components/popup",
    "header": "Popup",
    "summary": "Anchored overlay for menus and compact panels — positioned near a trigger, not a blocking modal.",
    "subHeader": "Anchored overlay for menus and compact panels — positioned near a trigger, not a blocking modal.",
    "importMsg": "import { Popup } from ",
    "usages": {
      "component": "UlxPopup",
      "responsibility": "Anchored overlay panel positioned relative to a trigger or target. For contextual menus, pickers, and compact panels—not full-page blocking flows.",
      "owns": [
        "Positioning relative to @target or <:trigger> with flip/clamp",
        "Open modes: manual, hover, click, hover-click via @interactionMode",
        "Optional default header/footer with title and action buttons",
        "Dismiss on outside click, resize, and Escape when configured"
      ],
      "doesNotOwn": [
        "Blocking modal dialogs and focus-trapped confirmations — use UlxModal",
        "Large persistent side panels — use UlxSlidePane",
        "Simple hover hints — use UlxTooltip",
        "Full-page routing or form layout"
      ],
      "whenToUse": [
        "Context menus and action panels anchored to a button",
        "Inline pickers and compact filters opened from a control",
        "Hover or click panels that must stay near the trigger"
      ],
      "whenNotToUse": [
        {
          "instead": "UlxModal",
          "when": "Blocking confirmation, destructive approve/deny, or multi-step wizard"
        },
        {
          "instead": "UlxSlidePane",
          "when": "Filters, detail views, or forms that need sustained side space"
        },
        {
          "instead": "UlxTooltip",
          "when": "Short non-interactive hint text only"
        }
      ],
      "dos": [
        "Control visibility with @visible and sync via @onShow / @onHide",
        "Provide <:trigger> when using hover, click, or hover-click interaction modes",
        "Set @ariaLabel when the panel has no visible title",
        "Use @position classes documented in demos for pointer alignment"
      ],
      "donts": [
        "Do not use Popup for full-screen settings or long scrolling forms",
        "Do not stack multiple popups without managing z-index and focus",
        "Do not omit @onShow when using delegated trigger modes (parent must set @visible)",
        "Do not replace Modal for destructive confirmations"
      ],
      "antiPatterns": [
        "Using Popup as a mobile full-screen drawer",
        "Opening Popup without a dismiss path when @dismissable is true"
      ]
    },
    "keyParamNames": [
      "visible",
      "target",
      "position",
      "interactionMode",
      "onShow",
      "onHide",
      "dismissable",
      "ariaLabel"
    ]
  },
  "slidepane": {
    "slug": "slidepane",
    "routeKey": "slidepane",
    "component": "UlxSlidePane",
    "docUrl": "/components/slidepane",
    "header": "Slidepane",
    "summary": "Edge drawer for filters, detail panels, and side workflows — UlxSlidePane with focus trap and footer actions.",
    "subHeader": "Edge drawer for filters, detail panels, and side workflows — UlxSlidePane with focus trap and footer actions.",
    "importMsg": "import { UlxSlidePane } from ",
    "usages": {
      "component": "UlxSlidePane",
      "responsibility": "Edge-mounted drawer overlay for filters, detail panels, and secondary workflows. Slides in from left, right, top, or bottom with focus trap and optional footer actions.",
      "owns": [
        "Open/close lifecycle with @visible, backdrop, and Escape handling",
        "Default header (title, close, back, maximize) and footer (cancel/done)",
        "Named blocks :head, :body, :footer for custom layout",
        "Nested panes via @onBack for drill-down flows"
      ],
      "doesNotOwn": [
        "Small anchored menus near a trigger — use UlxPopup",
        "Centered blocking dialogs — use UlxModal",
        "Non-overlay persistent layout — use page layout or UlxCard",
        "Tooltip-style hints"
      ],
      "whenToUse": [
        "Filter panels and list refinement from a table or toolbar",
        "Record detail or edit flows that need more space than a popup",
        "Multi-step side workflows with back navigation between panes"
      ],
      "whenNotToUse": [
        {
          "instead": "UlxModal",
          "when": "Short blocking confirm/cancel centered on the viewport"
        },
        {
          "instead": "UlxPopup",
          "when": "Compact menu or picker anchored to one button"
        },
        {
          "instead": "UlxTooltip",
          "when": "Non-interactive help text on hover"
        }
      ],
      "dos": [
        "Bind @visible to application state and close via @onHide",
        "Wire trigger with aria-controls pointing to pane id and aria-expanded",
        "Use @onDone with async handlers when submit must finish before close",
        "Use <:body> for scrollable content; customize <:head> / <:footer> when defaults are not enough"
      ],
      "donts": [
        "Do not open multiple slide panes without a clear stacking story",
        "Do not use for simple dropdown option lists — use UlxDropdown or UlxPopup",
        "Do not skip focus management by rendering pane content outside the component",
        "Do not use as a permanent app shell navigation drawer without explicit product requirement"
      ],
      "antiPatterns": [
        "Replacing Modal for yes/no destructive confirm",
        "Embedding an entire app settings area in a shallow popup instead of SlidePane or a route"
      ]
    },
    "keyParamNames": [
      "visible",
      "position",
      "title",
      "size",
      "onHide",
      "onDone",
      "onCancel",
      "overlay",
      "closeOnBackdrop"
    ]
  }
};

export default componentUsagesRegistry;
