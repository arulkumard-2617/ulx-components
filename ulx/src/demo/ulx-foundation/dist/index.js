// src/Foundation/Typography/index.jsx
import React11 from "react";

// src/Foundation/Typography/Overview.jsx
import React2 from "react";

// src/components/FoundationSection.jsx
import React from "react";
function isReactText(value) {
  return value == null || typeof value === "string" || typeof value === "number";
}
function FoundationSection({ id, title, subtitle, children }) {
  const safeTitle = isReactText(title) ? title : null;
  const safeSubtitle = isReactText(subtitle) ? subtitle : null;
  return /* @__PURE__ */ React.createElement("section", { id, className: "ulx-foundation-section mgb20" }, safeTitle != null && /* @__PURE__ */ React.createElement("h3", { className: "bold-font mgt0 mgb3" }, safeTitle), /* @__PURE__ */ React.createElement("header", { className: "mgb4" }, safeSubtitle != null && /* @__PURE__ */ React.createElement("p", { className: "ulx-foundation-section__subtitle mgb10 font-regular fg-text-secondary mgr0" }, safeSubtitle)), /* @__PURE__ */ React.createElement("div", { className: "ulx-foundation-section__content w-100p" }, children));
}

// src/Foundation/Typography/Overview.jsx
var keyPrinciples = [
  {
    title: "REM-based scale",
    description: "All font sizes map to REM tokens (@font-size10 - @font-size32) built on a 14px base."
  },
  {
    title: "Semantic naming",
    description: "Headings (h1-h7) and utility classes (.h1, .font-size14) are mapped to design tokens."
  },
  {
    title: "WCAG compliance",
    description: "Minimum 1.5 line-height and accessible color pairings baked into the system."
  }
];
function TypographyOverview() {
  return /* @__PURE__ */ React2.createElement(
    FoundationSection,
    {
      id: "typography-overview",
      title: "Typography System",
      subtitle: "Design tokens, utilities, and semantic mappings for type."
    },
    /* @__PURE__ */ React2.createElement("div", { className: "ulx-messages info m-size mgt10" }, keyPrinciples.map((item) => /* @__PURE__ */ React2.createElement(
      "article",
      {
        key: item.title,
        className: "info ulx-messages s-size enter-done mgy2",
        role: "alert"
      },
      /* @__PURE__ */ React2.createElement("h5", { className: "bold-font mgt0" }, item.title),
      /* @__PURE__ */ React2.createElement("p", { className: "mgb0 fg-secondary font-regular" }, item.description)
    )))
  );
}

// src/Foundation/Typography/FontSizes.jsx
import React4 from "react";

// src/components/ClassPropertyTable.jsx
import React3 from "react";
function formatClassName(value) {
  if (typeof value !== "string") {
    return typeof value === "number" ? String(value) : "";
  }
  return value.replace(/(^|\s)\./g, "$1");
}
function ClassPropertyTable({ rows, columnLabels = ["Class", "Properties"] }) {
  if (!rows?.length) {
    return null;
  }
  const [classLabel, propertyLabel] = Array.isArray(columnLabels) ? columnLabels : ["Class", "Properties"];
  const safeLabel = (v) => typeof v === "string" || typeof v === "number" ? v : "";
  return /* @__PURE__ */ React3.createElement("div", { className: "ulx-datatable s-size", style: { width: "850px" } }, /* @__PURE__ */ React3.createElement("div", { className: "datatable-wrapper" }, /* @__PURE__ */ React3.createElement("table", { className: "datatable-table", style: { tableLayout: "fixed" } }, /* @__PURE__ */ React3.createElement("thead", { className: "datatable-header" }, /* @__PURE__ */ React3.createElement("tr", { className: "datatable-header-row" }, /* @__PURE__ */ React3.createElement("th", { className: "datatable-column-header-cell" }, safeLabel(classLabel)), /* @__PURE__ */ React3.createElement("th", { className: "datatable-column-header-cell" }, safeLabel(propertyLabel)))), /* @__PURE__ */ React3.createElement("tbody", { className: "datatable-tbody" }, rows.map(({ className, property, color }, index) => /* @__PURE__ */ React3.createElement(
    "tr",
    {
      key: typeof className === "string" ? className : `row-${index}`,
      className: "datatable-body-row"
    },
    /* @__PURE__ */ React3.createElement("td", { className: "datatable-column-body-cell" }, /* @__PURE__ */ React3.createElement("div", { className: "fxb fvc gp3" }, color && typeof color === "string" && /* @__PURE__ */ React3.createElement(
      "div",
      {
        className: "rds-circle bd w20 h20 ",
        style: {
          backgroundColor: color,
          borderColor: "var(--ulx-default-border-color, #dee2e6)"
        },
        "aria-hidden": "true"
      }
    ), /* @__PURE__ */ React3.createElement("span", { className: "bold-font fg-primary font-size16" }, formatClassName(className)))),
    /* @__PURE__ */ React3.createElement("td", { className: "datatable-column-body-cell" }, /* @__PURE__ */ React3.createElement("span", { className: "font-size16" }, typeof property === "string" || typeof property === "number" ? property : ""))
  ))))));
}

// src/Foundation/Typography/FontSizes.jsx
var fontSizeUtilities = Array.from({ length: 23 }, (_, index) => {
  const size = index + 10;
  const lineHeight = size <= 12 ? "@line-height-tight" : "@line-height-normal";
  return {
    className: `.font-size${size}`,
    property: `font-size: @font-size${size}; line-height: ${lineHeight};`
  };
});
function FontSizes() {
  return /* @__PURE__ */ React4.createElement(
    FoundationSection,
    {
      id: "typography-font-sizes",
      title: "Font Size Utilities",
      subtitle: "Each class compiles to the tokenized REM scale defined in @typography.less."
    },
    /* @__PURE__ */ React4.createElement(ClassPropertyTable, { rows: fontSizeUtilities, columnLabels: ["Class", "Properties"] })
  );
}

// src/Foundation/Typography/FontWeights.jsx
import React5 from "react";
var weightUtilities = [
  { className: ".font-light", property: "font-family: @font-face-light; font-weight: 300;" },
  { className: ".font-regular", property: "font-family: @font-face-regular; font-weight: 400;" },
  { className: ".font-medium", property: "font-family: @font-face-medium; font-weight: 500;" },
  { className: ".font-semibold", property: "font-family: @font-face-semibold; font-weight: 600;" },
  { className: ".bold-font", property: "font-family: @font-face-bold; font-weight: 700;" }
];
function FontWeights() {
  return /* @__PURE__ */ React5.createElement(
    FoundationSection,
    {
      id: "typography-font-weights",
      title: "Font Weight Utilities",
      subtitle: "Utility classes switch between Puvi font variants while keeping semantic weights."
    },
    /* @__PURE__ */ React5.createElement(ClassPropertyTable, { rows: weightUtilities })
  );
}

// src/Foundation/Typography/Headings.jsx
import React6 from "react";
var headingUtilities = [
  {
    className: "h1, .h1",
    property: "font-size: @h1-size; line-height: @line-height-h1; font-family: @font-family-heading; font-weight: @font-weight-semibold;"
  },
  {
    className: "h2, .h2",
    property: "font-size: @h2-size; line-height: @line-height-h2; font-family: @font-family-heading; font-weight: @font-weight-semibold;"
  },
  {
    className: "h3, .h3",
    property: "font-size: @h3-size; line-height: @line-height-h3; font-family: @font-family-heading; font-weight: @font-weight-semibold;"
  },
  {
    className: "h4, .h4",
    property: "font-size: @h4-size; line-height: @line-height-h4; font-family: @font-family-heading; font-weight: @font-weight-semibold;"
  },
  {
    className: "h5, .h5",
    property: "font-size: @h5-size; line-height: @line-height-h5; font-family: @font-family-heading; font-weight: @font-weight-semibold;"
  },
  {
    className: "h6, .h6",
    property: "font-size: @h6-size; line-height: @line-height-h6; font-family: @font-family-heading; font-weight: @font-weight-semibold;"
  },
  {
    className: ".h7",
    property: "font-size: @h7-size; line-height: @line-height-h7; font-family: @font-family-heading; font-weight: @font-weight-semibold;"
  }
];
function Headings() {
  return /* @__PURE__ */ React6.createElement(
    FoundationSection,
    {
      id: "typography-headings",
      title: "Heading Styles",
      subtitle: "Semantic elements and utility aliases share the same design tokens."
    },
    /* @__PURE__ */ React6.createElement(ClassPropertyTable, { rows: headingUtilities, columnLabels: ["Selector / Class", "Properties"] })
  );
}

// src/Foundation/Typography/LineHeights.jsx
import React7 from "react";
var lineHeightUtilities = [
  { className: ".leading-tight", property: "line-height: @line-height-tight;" },
  { className: ".leading-normal", property: "line-height: @line-height-normal;" },
  { className: ".leading-relaxed", property: "line-height: @line-height-relaxed;" }
];
function LineHeights() {
  return /* @__PURE__ */ React7.createElement(
    FoundationSection,
    {
      id: "typography-line-heights",
      title: "Line Height Utilities",
      subtitle: "Control rhythm or accessibility spacing with semantic helpers."
    },
    /* @__PURE__ */ React7.createElement(ClassPropertyTable, { rows: lineHeightUtilities })
  );
}

// src/Foundation/Typography/FontFamilies.jsx
import React8 from "react";
var fontFamilyUtilities = [
  { className: ".font-base", property: "font-family: @font-family-base !important;" },
  { className: ".font-heading", property: "font-family: @font-family-heading !important;" }
];
function FontFamilies() {
  return /* @__PURE__ */ React8.createElement(
    FoundationSection,
    {
      id: "typography-font-family",
      title: "Font Family Utilities",
      subtitle: "Switch between the base body stack and the heading stack."
    },
    /* @__PURE__ */ React8.createElement(ClassPropertyTable, { rows: fontFamilyUtilities })
  );
}

// src/Foundation/Typography/TextAlignment.jsx
import React9 from "react";
var alignmentUtilities = [
  { className: ".text-left", property: "text-align: start !important;" },
  { className: ".text-center", property: "text-align: center !important;" },
  { className: ".text-right", property: "text-align: end !important;" },
  { className: ".text-justify", property: "text-align: justify !important;" }
];
function TextAlignment() {
  return /* @__PURE__ */ React9.createElement(
    FoundationSection,
    {
      id: "typography-text-alignment",
      title: "Text Alignment Utilities",
      subtitle: "Logical properties ensure LTR/RTL support out of the box."
    },
    /* @__PURE__ */ React9.createElement(ClassPropertyTable, { rows: alignmentUtilities })
  );
}

// src/Foundation/Typography/TextTransforms.jsx
import React10 from "react";
var transformUtilities = [
  { className: ".text-uppercase", property: "text-transform: uppercase !important;" },
  { className: ".text-lowercase", property: "text-transform: lowercase !important;" },
  { className: ".text-capitalize", property: "text-transform: capitalize !important;" },
  { className: ".text-none", property: "text-transform: none !important;" }
];
function TextTransforms() {
  return /* @__PURE__ */ React10.createElement(
    FoundationSection,
    {
      id: "typography-text-transform",
      title: "Text Transform Utilities",
      subtitle: "Apply uppercase, capitalization, or reset transformations quickly."
    },
    /* @__PURE__ */ React10.createElement(ClassPropertyTable, { rows: transformUtilities })
  );
}

// src/Foundation/Typography/index.jsx
function Typography() {
  return /* @__PURE__ */ React11.createElement("div", { className: "ulx-foundation-page" }, /* @__PURE__ */ React11.createElement(FontSizes, null), /* @__PURE__ */ React11.createElement(FontWeights, null), /* @__PURE__ */ React11.createElement(LineHeights, null), /* @__PURE__ */ React11.createElement(FontFamilies, null), /* @__PURE__ */ React11.createElement(TextAlignment, null), /* @__PURE__ */ React11.createElement(TextTransforms, null), /* @__PURE__ */ React11.createElement(Headings, null), /* @__PURE__ */ React11.createElement(TypographyOverview, null));
}

// src/Foundation/Colors/index.jsx
import React15 from "react";

// src/Foundation/Colors/Overview.jsx
import React12 from "react";
function ColorsOverview() {
  return /* @__PURE__ */ React12.createElement(
    FoundationSection,
    {
      id: "colors-overview",
      title: "Color System",
      subtitle: "Layered palette that separates static brand hues from semantic tokens."
    },
    /* @__PURE__ */ React12.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd bg-layer1 mgb12" }, /* @__PURE__ */ React12.createElement("h5", { className: "bold-font mgt0 fg-primary mgb2" }, "Static palette"), /* @__PURE__ */ React12.createElement("p", { className: "fg-secondary" }, "Defined in ", /* @__PURE__ */ React12.createElement("code", null, "static-color-vars.less"), " for brand alignment.")),
    /* @__PURE__ */ React12.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd bg-layer1" }, /* @__PURE__ */ React12.createElement("h5", { className: "bold-font mgt0 fg-primary" }, "Semantic tokens"), /* @__PURE__ */ React12.createElement("p", { className: "fg-secondary" }, "Tokens like ", /* @__PURE__ */ React12.createElement("code", null, "@primary-color"), " and ", /* @__PURE__ */ React12.createElement("code", null, "@success-color"), " reference the palette."))
  );
}

// src/Foundation/Colors/Theming.jsx
import React13 from "react";
var steps = [
  {
    title: "Base variables",
    detail: "Override CSS custom properties via :root or data-theme attributes."
  },
  {
    title: "LESS overrides",
    detail: "Use ulx-overrides to re-map tokens and regenerate CSS bundles."
  },
  {
    title: "Runtime switches",
    detail: "Toggle body classes such as .ulx-dark-mode and .ulx-cardinal-theme."
  }
];
function Theming() {
  return /* @__PURE__ */ React13.createElement(
    FoundationSection,
    {
      id: "colors-theming",
      title: "Theming Workflow",
      subtitle: "Mix runtime custom properties with compile-time LESS overrides."
    },
    /* @__PURE__ */ React13.createElement("ol", { className: "foundation-ordered-list ulx-messages info m-size mgt10" }, steps.map((step) => /* @__PURE__ */ React13.createElement("li", { key: step.title, className: "info ulx-messages s-size enter-done mgy2", role: "alert" }, /* @__PURE__ */ React13.createElement("h4", { className: "mgb1" }, step.title), /* @__PURE__ */ React13.createElement("p", { className: "fg-secondary" }, step.detail))))
  );
}

// src/Foundation/Colors/Palette.jsx
import React14 from "react";
var paletteGroups = [
  {
    title: "Brand & Actions",
    colors: [
      {
        label: "Primary",
        token: "@primary-color",
        cssVar: "var(--ulx-primary-color)",
        detail: "Primary brand accent & actions"
      },
      {
        label: "Primary Hover",
        token: "@primary-hover-color",
        cssVar: "var(--ulx-primary-hover-color)",
        detail: "Hover/active state"
      },
      {
        label: "Primary FG",
        token: "@primary-fg-color",
        cssVar: "var(--ulx-primary-fg-color)",
        detail: "Text on primary surfaces"
      },
      {
        label: "Primary Border",
        token: "@primary-bdr",
        cssVar: "var(--ulx-primary-border-color)",
        detail: "Primary border color"
      },
      {
        label: "Secondary",
        token: "@secondary-color",
        cssVar: "var(--ulx-secondary-color)",
        detail: "Secondary accent"
      },
      {
        label: "Secondary Hover",
        token: "@secondary-hover-color",
        cssVar: "var(--ulx-secondary-hover-color)",
        detail: "Secondary hover state"
      },
      {
        label: "Secondary FG",
        token: "@secondary-fg-color",
        cssVar: "var(--ulx-secondary-fg-color)",
        detail: "Text on secondary surfaces"
      }
    ]
  },
  {
    title: "Semantic States",
    colors: [
      {
        label: "Success",
        token: "@success-color",
        cssVar: "var(--ulx-success-color)",
        detail: "Affirmative actions"
      },
      {
        label: "Success Hover",
        token: "@success-hover-color",
        cssVar: "var(--ulx-success-hover-color)",
        detail: "Success hover state"
      },
      {
        label: "Success BG",
        token: "@success-bg-color",
        cssVar: "var(--ulx-success-bg-color)",
        detail: "Success background"
      },
      {
        label: "Warning",
        token: "@warning-color",
        cssVar: "var(--ulx-warning-color)",
        detail: "Cautionary notices"
      },
      {
        label: "Warning Hover",
        token: "@warning-hover-color",
        cssVar: "var(--ulx-warning-hover-color)",
        detail: "Warning hover state"
      },
      {
        label: "Warning BG",
        token: "@warning-bg-color",
        cssVar: "var(--ulx-warning-bg-color)",
        detail: "Warning background"
      },
      {
        label: "Danger",
        token: "@danger-color",
        cssVar: "var(--ulx-danger-color)",
        detail: "Errors & destructive actions"
      },
      {
        label: "Danger Hover",
        token: "@danger-hover-color",
        cssVar: "var(--ulx-danger-hover-color)",
        detail: "Danger hover state"
      },
      {
        label: "Danger BG",
        token: "@danger-bg-color",
        cssVar: "var(--ulx-danger-bg-color)",
        detail: "Danger background"
      },
      {
        label: "Info",
        token: "@info-color",
        cssVar: "var(--ulx-info-color)",
        detail: "Informational highlights"
      },
      {
        label: "Info Hover",
        token: "@info-hover-color",
        cssVar: "var(--ulx-info-hover-color)",
        detail: "Info hover state"
      },
      {
        label: "Info BG",
        token: "@info-bg-color",
        cssVar: "var(--ulx-info-bg-color)",
        detail: "Info background"
      }
    ]
  },
  {
    title: "Text Hierarchy",
    colors: [
      {
        label: "Primary text",
        token: "@text-color",
        cssVar: "var(--ulx-text-color)",
        detail: "Default body copy"
      },
      {
        label: "Secondary text",
        token: "@secondary-text-color",
        cssVar: "var(--ulx-secondary-text-color)",
        detail: "De-emphasized copy"
      },
      {
        label: "Tertiary text",
        token: "@tertiary-text-color",
        cssVar: "var(--ulx-tertiary-text-color)",
        detail: "Muted text"
      },
      {
        label: "Light text",
        token: "@light-text-color",
        cssVar: "var(--ulx-light-text-color)",
        detail: "Light text variant"
      },
      {
        label: "Info text",
        token: "@info-text-color",
        cssVar: "var(--ulx-info-text-color)",
        detail: "Informational text"
      },
      {
        label: "Disabled text",
        token: "@disabled-fg-color",
        cssVar: "var(--ulx-disabled-fg-color)",
        detail: "Muted/disabled content"
      },
      {
        label: "Link",
        token: "@link-color",
        cssVar: "var(--ulx-link-color)",
        detail: "Link color"
      },
      {
        label: "Link Hover",
        token: "@link-hover-color",
        cssVar: "var(--ulx-link-hover-color)",
        detail: "Link hover state"
      },
      {
        label: "Placeholder",
        token: "@place-holder-color",
        cssVar: "var(--place-holder-color)",
        detail: "Input placeholder text"
      }
    ]
  },
  {
    title: "Background Colors",
    colors: [
      {
        label: "Body background",
        token: "@body-background",
        cssVar: "var(--ulx-body-bg)",
        detail: "App canvas"
      },
      {
        label: "Default background",
        token: "@default-background",
        cssVar: "var(--ulx-default-bg)",
        detail: "Default surface"
      },
      {
        label: "Secondary background",
        token: "@secondary-background",
        cssVar: "var(--ulx-secondary-bg)",
        detail: "Secondary surface"
      },
      {
        label: "Header background",
        token: "@header-background",
        cssVar: "var(--ulx-header-bg)",
        detail: "Header surface"
      },
      {
        label: "Overlay",
        token: "@overlay-bg",
        cssVar: "var(--ulx-overlay-bg)",
        detail: "Modal overlay"
      },
      {
        label: "Overlay White",
        token: "@overlay-bg-white",
        cssVar: "var(--ulx-overlay-bg-white)",
        detail: "White overlay"
      },
      {
        label: "Dark Overlay",
        token: "@dark-overlay-bg",
        cssVar: "var(--ulx-dark-overlay-bg)",
        detail: "Dark overlay"
      },
      {
        label: "Dimmer",
        token: "@dimmer-background",
        cssVar: "var(--ulx-dimmer-bg)",
        detail: "Dimmer background"
      }
    ]
  },
  {
    title: "Surface Layers",
    colors: [
      {
        label: "Layer 1",
        token: "@bg-layer1",
        cssVar: "var(--layer1-bg)",
        detail: "Cards / elevated surfaces"
      },
      {
        label: "Layer 2",
        token: "@bg-layer2",
        cssVar: "var(--layer2-bg)",
        detail: "Nested surfaces"
      },
      {
        label: "Layer 3",
        token: "@bg-layer3",
        cssVar: "var(--layer3-bg)",
        detail: "Overlays / popovers"
      },
      {
        label: "Layer 4",
        token: "@bg-layer4",
        cssVar: "var(--layer4-bg)",
        detail: "Deep overlays"
      },
      {
        label: "Layer 5",
        token: "@bg-layer5",
        cssVar: "var(--layer5-bg)",
        detail: "Deepest layer"
      },
      {
        label: "Layer 6",
        token: "@bg-layer6",
        cssVar: "var(--layer6-bg)",
        detail: "Maximum depth"
      },
      {
        label: "Blue Layer 1",
        token: "@bg-blueLayer1",
        cssVar: "var(--blue-layer1-bg)",
        detail: "Blue-tinted layer 1"
      },
      {
        label: "Blue Layer 2",
        token: "@bg-blueLayer2",
        cssVar: "var(--blue-layer2-bg)",
        detail: "Blue-tinted layer 2"
      }
    ]
  },
  {
    title: "Border Colors",
    colors: [
      {
        label: "Default border",
        token: "@default-border-color",
        cssVar: "var(--ulx-default-border-color)",
        detail: "Default border"
      },
      {
        label: "Dark border",
        token: "@dark-border-color",
        cssVar: "var(--ulx-dark-border-color)",
        detail: "Dark border variant"
      },
      {
        label: "Light border",
        token: "@light-border-color",
        cssVar: "var(--ulx-light-border-color)",
        detail: "Light border variant"
      },
      {
        label: "Error border",
        token: "@error-border-color",
        cssVar: "var(--ulx-error-border-color)",
        detail: "Error state border"
      },
      {
        label: "Input border",
        token: "@input-border-color",
        cssVar: "var(--ulx-input-border-color)",
        detail: "Input field border"
      }
    ]
  },
  {
    title: "Extended Color Palette - Primary",
    colors: [
      { label: "Red", token: "@red-bg", cssVar: "#CF1322", detail: "Critical indicators" },
      {
        label: "Red Hover",
        token: "@red-hover-color",
        cssVar: "#A8071A",
        detail: "Red hover state"
      },
      { label: "Red Border", token: "@red-bdr", cssVar: "#CF1322", detail: "Red border" },
      { label: "Green", token: "@green-bg", cssVar: "#16A34A", detail: "Success accent" },
      {
        label: "Green Hover",
        token: "@green-hover-color",
        cssVar: "#15803d",
        detail: "Green hover state"
      },
      {
        label: "Green Border",
        token: "@green-bdr",
        cssVar: "#16A34A",
        detail: "Green border"
      },
      {
        label: "Orange",
        token: "@orange-bg",
        cssVar: "#FA8C16",
        detail: "Highlight / warnings"
      },
      {
        label: "Orange Hover",
        token: "@orange-hover-color",
        cssVar: "#D46B08",
        detail: "Orange hover state"
      },
      {
        label: "Orange Border",
        token: "@orange-bdr",
        cssVar: "#FA8C16",
        detail: "Orange border"
      },
      { label: "Blue", token: "@blue-bg", cssVar: "#096DD9", detail: "Navigation & info" },
      {
        label: "Blue Hover",
        token: "@blue-hover-color",
        cssVar: "#0050B3",
        detail: "Blue hover state"
      },
      { label: "Blue Border", token: "@blue-bdr", cssVar: "#096DD9", detail: "Blue border" },
      {
        label: "Purple",
        token: "@purple-bg",
        cssVar: "#6554C0",
        detail: "Decorative accent"
      },
      {
        label: "Purple Hover",
        token: "@purple-hover-color",
        cssVar: "#473C99",
        detail: "Purple hover state"
      },
      {
        label: "Purple Border",
        token: "@purple-bdr",
        cssVar: "#6554C0",
        detail: "Purple border"
      },
      { label: "Gold", token: "@gold-bg", cssVar: "#D48806", detail: "Premium states" },
      {
        label: "Gold Hover",
        token: "@gold-hover-color",
        cssVar: "#D48806",
        detail: "Gold hover state"
      },
      { label: "Gold Border", token: "@gold-bdr", cssVar: "#D48806", detail: "Gold border" },
      { label: "Black", token: "@black-bg", cssVar: "#252F3F", detail: "Dark accent" },
      {
        label: "Black Hover",
        token: "@black-hover-color",
        cssVar: "#000",
        detail: "Black hover state"
      },
      {
        label: "Black Border",
        token: "@black-bdr",
        cssVar: "#252F3F",
        detail: "Black border"
      },
      { label: "Grey", token: "@grey-bg", cssVar: "#E5E5EB", detail: "Neutral grey" }
    ]
  },
  {
    title: "Extended Color Palette - Additional Accents",
    colors: [
      { label: "Yellow", token: "@yellow-bg", cssVar: "#FF9800", detail: "Yellow accent" },
      { label: "Violet", token: "@violet-bg", cssVar: "#5d2dbe", detail: "Violet accent" },
      { label: "Pink", token: "@pink-bg", cssVar: "#E91E63", detail: "Pink accent" },
      { label: "Brown", token: "@brown-bg", cssVar: "#C5804F", detail: "Brown accent" },
      { label: "Teal", token: "@teal-bg", cssVar: "#607D8B", detail: "Teal accent" },
      {
        label: "Darkturquoise",
        token: "@darkturquoise-bg",
        cssVar: "#2FC4C6",
        detail: "Dark turquoise accent"
      },
      { label: "Olive", token: "@olive-bg", cssVar: "#5a97ab", detail: "Olive accent" },
      {
        label: "Nightblue",
        token: "@nightblue-bg",
        cssVar: "#3079ba",
        detail: "Night blue accent"
      },
      { label: "Magenta", token: "@magenta-bg", cssVar: "#C41D7F", detail: "Magenta accent" },
      { label: "Blue1", token: "@blue1-bg", cssVar: "#4089FF", detail: "Blue variant 1" }
    ]
  },
  {
    title: "Color Layers - Red",
    colors: [
      {
        label: "Red Layer 1",
        token: "@bg-redLayer1",
        cssVar: "#FFF1F0",
        detail: "Light red background"
      },
      {
        label: "Red Layer 2",
        token: "@bg-redLayer2",
        cssVar: "#FAD0CC",
        detail: "Medium red background"
      },
      {
        label: "Red Layer 3",
        token: "@bg-redLayer3",
        cssVar: "#FFCCC7",
        detail: "Darker red background"
      }
    ]
  },
  {
    title: "Color Layers - Green",
    colors: [
      {
        label: "Green Layer 1",
        token: "@bg-greenLayer1",
        cssVar: "#DCFCE7",
        detail: "Light green background"
      },
      {
        label: "Green Layer 2",
        token: "@bg-greenLayer2",
        cssVar: "#BBF7D0",
        detail: "Medium green background"
      },
      {
        label: "Green Layer 3",
        token: "@bg-greenLayer3",
        cssVar: "#86efac",
        detail: "Darker green background"
      }
    ]
  },
  {
    title: "Color Layers - Orange",
    colors: [
      {
        label: "Orange Layer 1",
        token: "@bg-orangeLayer1",
        cssVar: "#FFE7BA",
        detail: "Light orange background"
      },
      {
        label: "Orange Layer 2",
        token: "@bg-orangeLayer2",
        cssVar: "#FFD591",
        detail: "Medium orange background"
      },
      {
        label: "Orange Layer 3",
        token: "@bg-orangeLayer3",
        cssVar: "#FFC069",
        detail: "Darker orange background"
      }
    ]
  },
  {
    title: "Color Layers - Blue",
    colors: [
      {
        label: "Blue Layer 1",
        token: "@bg-BlueLayer1",
        cssVar: "#E6F7FF",
        detail: "Light blue background"
      },
      {
        label: "Blue Layer 2",
        token: "@bg-BlueLayer2",
        cssVar: "#BAE7FF",
        detail: "Medium blue background"
      },
      {
        label: "Blue Layer 3",
        token: "@bg-BlueLayer3",
        cssVar: "#91D5FF",
        detail: "Darker blue background"
      }
    ]
  },
  {
    title: "Color Layers - Purple",
    colors: [
      {
        label: "Purple Layer 1",
        token: "@bg-purpleLayer1",
        cssVar: "#f5f0ff",
        detail: "Light purple background"
      },
      {
        label: "Purple Layer 2",
        token: "@bg-purpleLayer2",
        cssVar: "#E8E4F2",
        detail: "Medium purple background"
      },
      {
        label: "Purple Layer 3",
        token: "@bg-purpleLayer3",
        cssVar: "#D8D3E6",
        detail: "Darker purple background"
      },
      {
        label: "Purple Layer 4",
        token: "@bg-purpleLayer4",
        cssVar: "#DED1FB",
        detail: "Deepest purple background"
      }
    ]
  },
  {
    title: "Color Layers - Gold",
    colors: [
      {
        label: "Gold Layer 1",
        token: "@bg-goldLayer1",
        cssVar: "#FFFBE6",
        detail: "Light gold background"
      },
      {
        label: "Gold Layer 2",
        token: "@bg-goldLayer2",
        cssVar: "#FFECAD",
        detail: "Medium gold background"
      },
      {
        label: "Gold Layer 3",
        token: "@bg-goldLayer3",
        cssVar: "#FFDE85",
        detail: "Darker gold background"
      }
    ]
  },
  {
    title: "Color Layers - Black",
    colors: [
      {
        label: "Black Layer 1",
        token: "@bg-blackLayer1",
        cssVar: "#FAFBFC",
        detail: "Light black background"
      },
      {
        label: "Black Layer 2",
        token: "@bg-blackLayer2",
        cssVar: "#F4F5F7",
        detail: "Medium black background"
      },
      {
        label: "Black Layer 3",
        token: "@bg-blackLayer3",
        cssVar: "#E2E7EB",
        detail: "Darker black background"
      },
      {
        label: "Black Layer 4",
        token: "@bg-blackLayer4",
        cssVar: "#2f3c49",
        detail: "Deepest black background"
      }
    ]
  },
  {
    title: "Color Layers - Additional",
    colors: [
      {
        label: "Magenta Layer 2",
        token: "@bg-magentaLayer2",
        cssVar: "#F7C3DB",
        detail: "Magenta layer background"
      },
      {
        label: "Brown Layer 2",
        token: "@bg-brownLayer2",
        cssVar: "#FEDBC2",
        detail: "Brown layer background"
      },
      {
        label: "Teal Layer 3",
        token: "@bg-tealLayer3",
        cssVar: "#8aa2ae",
        detail: "Teal layer background"
      }
    ]
  },
  {
    title: "Input Colors",
    colors: [
      {
        label: "Input BG",
        token: "@input-bg-color",
        cssVar: "var(--ulx-input-bg-color)",
        detail: "Input background"
      },
      {
        label: "Input FG",
        token: "@input-fg-color",
        cssVar: "var(--ulx-input-fg-color)",
        detail: "Input text color"
      },
      {
        label: "Input Disabled BG",
        token: "@input-disable-bg",
        cssVar: "var(--ulx-input-disable-bg)",
        detail: "Disabled input background"
      },
      {
        label: "Input Focus BG",
        token: "@input-focus-bg",
        cssVar: "var(--ulx-input-focus-bg)",
        detail: "Focused input background"
      },
      {
        label: "Input Focus Border",
        token: "@input-focus-bdr",
        cssVar: "var(--ulx-input-focus-bdr)",
        detail: "Focused input border"
      }
    ]
  },
  {
    title: "Navigation Colors",
    colors: [
      {
        label: "Nav BG",
        token: "@nav-bg-color",
        cssVar: "var(--ulx-nav-bg-color)",
        detail: "Main nav background"
      },
      {
        label: "Nav FG",
        token: "@nav-fg-color",
        cssVar: "var(--ulx-nav-fg-color)",
        detail: "Main nav text"
      },
      {
        label: "Nav Link",
        token: "@nav-link-fg-color",
        cssVar: "var(--ulx-navlink-fg-color)",
        detail: "Nav link color"
      },
      {
        label: "Nav Active BG",
        token: "@nav-item-active-bg-color",
        cssVar: "var(--ulx-nav-item-active-bg-color)",
        detail: "Active nav item background"
      },
      {
        label: "VNav BG",
        token: "@vnav-bg-color",
        cssVar: "var(--ulx-vnav-bg-color)",
        detail: "Vertical nav background"
      },
      {
        label: "VNav FG",
        token: "@vnav-fg-color",
        cssVar: "var(--ulx-vnav-fg-color)",
        detail: "Vertical nav text"
      },
      {
        label: "VNav Link",
        token: "@vnav-link-fg-color",
        cssVar: "var(--ulx-vnav-link-fg-color)",
        detail: "Vertical nav link"
      },
      {
        label: "VNav Hover",
        token: "@vnav-link-hover-color",
        cssVar: "var(--ulx-vnav-hover-color)",
        detail: "Vertical nav hover"
      }
    ]
  },
  {
    title: "Inverted Theme Colors",
    colors: [
      {
        label: "Inverted BG",
        token: "@inverted-bg-color",
        cssVar: "var(--ulx-inverted-bg-color)",
        detail: "Inverted background"
      },
      {
        label: "Inverted Hover",
        token: "@inverted-hover-color",
        cssVar: "var(--ulx-inverted-hover-color)",
        detail: "Inverted hover state"
      },
      {
        label: "Inverted FG",
        token: "@inverted-fg-color",
        cssVar: "var(--ulx-inverted-fg-color)",
        detail: "Inverted text color"
      },
      {
        label: "Inverted Border",
        token: "@inverted-border-color",
        cssVar: "var(--ulx-inverted-border-color)",
        detail: "Inverted border"
      },
      {
        label: "Inverted Link",
        token: "@inverted-link-color",
        cssVar: "var(--ulx-inverted-link-color)",
        detail: "Inverted link color"
      }
    ]
  },
  {
    title: "Tooltip Colors",
    colors: [
      {
        label: "Tooltip BG",
        token: "@tooltip-bg",
        cssVar: "var(--ulx-tooltip-bg)",
        detail: "Tooltip background"
      },
      {
        label: "Tooltip FG",
        token: "@tooltip-fg",
        cssVar: "var(--ulx-tooltip-fg)",
        detail: "Tooltip text"
      },
      {
        label: "Tooltip Border",
        token: "@tooltip-border-color",
        cssVar: "var(--ulx-tooltip-border)",
        detail: "Tooltip border"
      },
      {
        label: "Tooltip Inverted BG",
        token: "@tooltip-inverted-bg",
        cssVar: "var(--ulx-tooltip-inverted-bg)",
        detail: "Inverted tooltip background"
      },
      {
        label: "Tooltip Inverted FG",
        token: "@tooltip-inverted-fg",
        cssVar: "var(--ulx-tooltip-inverted-fg)",
        detail: "Inverted tooltip text"
      }
    ]
  },
  {
    title: "Modal & Top Bar",
    colors: [
      {
        label: "Modal BG",
        token: "@modal-bg-color",
        cssVar: "var(--ulx-modal-bg-color)",
        detail: "Modal background"
      },
      {
        label: "Modal FG",
        token: "@modal-fg-color",
        cssVar: "var(--ulx-modal-fg-color)",
        detail: "Modal text"
      },
      {
        label: "Modal Footer BG",
        token: "@modalfooter-bg-color",
        cssVar: "var(--ulx-modalfooter-bg-color)",
        detail: "Modal footer background"
      },
      {
        label: "Topbar BG",
        token: "@topbar-bg-color",
        cssVar: "var(--ulx-topbar-bg-color)",
        detail: "Top bar background"
      },
      {
        label: "Topbar FG",
        token: "@topbar-fg-color",
        cssVar: "var(--ulx-topbar-fg-color)",
        detail: "Top bar text"
      },
      {
        label: "Topbar Link",
        token: "@topbar-link-color",
        cssVar: "var(--ulx-topbar-link-color)",
        detail: "Top bar link"
      }
    ]
  },
  {
    title: "User State Colors",
    colors: [
      {
        label: "User Online",
        token: "@user-online-color",
        cssVar: "var(--ulx-user-online-color)",
        detail: "Online status indicator"
      },
      {
        label: "User Offline",
        token: "@user-offline-color",
        cssVar: "var(--ulx-user-offline-color)",
        detail: "Offline status indicator"
      },
      {
        label: "User Idle",
        token: "@user-idle-color",
        cssVar: "var(--ulx-user-idle-color)",
        detail: "Idle status indicator"
      },
      {
        label: "User In BG",
        token: "@user-in-bg",
        cssVar: "var(--event-checkin-bg)",
        detail: "Check-in background"
      },
      {
        label: "User Out BG",
        token: "@user-out-bg",
        cssVar: "var(--event-checkout-bg)",
        detail: "Check-out background"
      },
      {
        label: "User Yet In BG",
        token: "@user-yet-in-bg",
        cssVar: "var(--event-yet-to-checkin-bg)",
        detail: "Pending check-in background"
      }
    ]
  },
  {
    title: "Static Colors",
    colors: [
      {
        label: "Static White",
        token: "@static-white",
        cssVar: "var(--static-white)",
        detail: "Fixed white color"
      },
      {
        label: "Static Black",
        token: "@static-black",
        cssVar: "var(--static-black)",
        detail: "Fixed black color"
      },
      {
        label: "Light Red",
        token: "@lt-red",
        cssVar: "var(--lt-red-static)",
        detail: "Light red static"
      }
    ]
  },
  {
    title: "Theme Accents",
    colors: [
      {
        label: "Cobalt",
        token: "@cobalt-theme-color",
        cssVar: "var(--cobalt-theme-color)",
        detail: "Cobalt theme accent"
      },
      {
        label: "Cardinal",
        token: "@cardinal-theme-color",
        cssVar: "var(--cardinal-theme-color)",
        detail: "Cardinal theme accent"
      },
      {
        label: "Fern",
        token: "@fern-theme-color",
        cssVar: "var(--fern-theme-color)",
        detail: "Fern theme accent"
      },
      {
        label: "Tangerine",
        token: "@tangerine-theme-color",
        cssVar: "var(--tangerine-theme-color)",
        detail: "Tangerine theme accent"
      }
    ]
  },
  {
    title: "Social Brand Colors",
    colors: [
      {
        label: "Facebook",
        token: "@facebook-color",
        cssVar: "#3B589C",
        detail: "Facebook brand color"
      },
      {
        label: "Twitter",
        token: "@twitter-color",
        cssVar: "#000000",
        detail: "Twitter brand color"
      },
      {
        label: "Google",
        token: "@google-color",
        cssVar: "#e8212d",
        detail: "Google brand color"
      },
      {
        label: "LinkedIn",
        token: "@linkedin-color",
        cssVar: "#007bb6",
        detail: "LinkedIn brand color"
      },
      {
        label: "Showtime",
        token: "@showtime-color",
        cssVar: "#36b875",
        detail: "Showtime brand color"
      },
      {
        label: "Medium",
        token: "@medium-color",
        cssVar: "#000000",
        detail: "Medium brand color"
      },
      {
        label: "Website",
        token: "@websiteColor",
        cssVar: "#6868F1",
        detail: "Website brand color"
      }
    ]
  }
];
function ColorPalette() {
  return /* @__PURE__ */ React14.createElement(
    FoundationSection,
    {
      id: "colors-palette",
      title: "Color Palette",
      subtitle: "Reference swatches mapped to the core LESS tokens and CSS custom properties."
    },
    /* @__PURE__ */ React14.createElement("div", { className: "fxb fcol gp15 w-100p" }, paletteGroups.map((group) => /* @__PURE__ */ React14.createElement("div", { key: group.title, className: "fxcol gp4" }, /* @__PURE__ */ React14.createElement("h5", { className: "mgt0 mgb4 bold-font fg-primary" }, group.title), /* @__PURE__ */ React14.createElement("div", { className: "ulx-grid col-4 gp5" }, group.colors.map((color) => /* @__PURE__ */ React14.createElement(
      "article",
      {
        key: color.token,
        className: "ulx-foundation-card pd6 rds2 bd flex-column md-w-1-3 text-center"
      },
      /* @__PURE__ */ React14.createElement(
        "div",
        {
          className: "rds2 mgb4 bd mg-auto",
          style: {
            width: "70px",
            height: "70px",
            margin: "0 auto 1rem",
            background: color.cssVar
          }
        }
      ),
      /* @__PURE__ */ React14.createElement("p", { className: "mgb1 fg-text-secondary" }, /* @__PURE__ */ React14.createElement("code", null, color.token))
    ))))))
  );
}

// src/Foundation/Colors/index.jsx
function Colors() {
  return /* @__PURE__ */ React15.createElement("div", { className: "ulx-foundation-page" }, /* @__PURE__ */ React15.createElement(ColorPalette, null), /* @__PURE__ */ React15.createElement(ColorsOverview, null), /* @__PURE__ */ React15.createElement(Theming, null));
}

// src/Foundation/Spacing/index.jsx
import React19 from "react";

// src/Foundation/Spacing/Overview.jsx
import React16 from "react";
function SpacingOverview() {
  return /* @__PURE__ */ React16.createElement(
    FoundationSection,
    {
      id: "spacing-overview",
      title: "Spacing System",
      subtitle: "Quarter-rem base unit with semantic aliases (spacing-sm, spacing-lg, etc.)."
    },
    /* @__PURE__ */ React16.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd" }, /* @__PURE__ */ React16.createElement("h3", { className: "mgt0" }, "Design tokens"), /* @__PURE__ */ React16.createElement("p", { className: "fg-secondary" }, "@4px through @150px cover component padding, gaps, and layout spacing.")),
    /* @__PURE__ */ React16.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd" }, /* @__PURE__ */ React16.createElement("h3", { className: "mgt0" }, "Utility classes"), /* @__PURE__ */ React16.createElement("p", { className: "fg-secondary" }, ".pd1 - .pd15, .mgx1 - .mgx15, .gp1 - .gp15 mirror the token scale."))
  );
}

// src/Foundation/Spacing/SpacingScale.jsx
import React17 from "react";
var scale = [
  { token: "@4px", rem: "0.285rem", usage: "Tight gaps" },
  { token: "@8px", rem: "0.57rem", usage: "Compact padding" },
  { token: "@12px", rem: "0.86rem", usage: "Default vertical rhythm" },
  { token: "@16px", rem: "1.14rem", usage: "Card padding" },
  { token: "@24px", rem: "1.71rem", usage: "Section spacing" },
  { token: "@32px", rem: "2.28rem", usage: "Page gutters" }
];
function SpacingScale() {
  return /* @__PURE__ */ React17.createElement(
    FoundationSection,
    {
      id: "spacing-scale",
      title: "Token Scale",
      subtitle: "Every spacing utility maps to these canonical tokens."
    },
    /* @__PURE__ */ React17.createElement("table", { className: "ulx-foundation-table w-100p" }, /* @__PURE__ */ React17.createElement("thead", null, /* @__PURE__ */ React17.createElement("tr", null, /* @__PURE__ */ React17.createElement("th", null, "Token"), /* @__PURE__ */ React17.createElement("th", null, "REM value"), /* @__PURE__ */ React17.createElement("th", null, "Usage"))), /* @__PURE__ */ React17.createElement("tbody", null, scale.map((row) => /* @__PURE__ */ React17.createElement("tr", { key: row.token }, /* @__PURE__ */ React17.createElement("td", null, /* @__PURE__ */ React17.createElement("code", null, row.token)), /* @__PURE__ */ React17.createElement("td", null, row.rem), /* @__PURE__ */ React17.createElement("td", null, row.usage)))))
  );
}

// src/Foundation/Spacing/Utilities.jsx
import React18 from "react";
var utilityGroups = [
  {
    name: "Padding",
    classes: ".pd1 - .pd15, .pdx1 - .pdx15, .pdy1 - .pdy15"
  },
  {
    name: "Margin",
    classes: ".mg1 - .mg15, .mgx1 - .mgx15, .mgy1 - .mgy15"
  },
  {
    name: "Gap",
    classes: ".gp1 - .gp15, .hgap1 - .hgap15, .vgap1 - .vgap15"
  }
];
function SpacingUtilities() {
  return /* @__PURE__ */ React18.createElement(
    FoundationSection,
    {
      id: "spacing-utilities",
      title: "Utilities",
      subtitle: "Utilities mirror the base token scale, making the spacing system predictable."
    },
    utilityGroups.map((group) => /* @__PURE__ */ React18.createElement("article", { key: group.name, className: "ulx-foundation-card w-30p pd6 rds2 bd" }, /* @__PURE__ */ React18.createElement("h3", { className: "mgt0" }, group.name), /* @__PURE__ */ React18.createElement("p", { className: "fg-secondary" }, group.classes)))
  );
}

// src/Foundation/Spacing/index.jsx
function Spacing() {
  return /* @__PURE__ */ React19.createElement("div", { className: "ulx-foundation-page" }, /* @__PURE__ */ React19.createElement(SpacingOverview, null), /* @__PURE__ */ React19.createElement(SpacingScale, null), /* @__PURE__ */ React19.createElement(SpacingUtilities, null));
}

// src/Foundation/Grid/index.jsx
import React23 from "react";

// src/Foundation/Grid/Overview.jsx
import React20 from "react";
function GridOverview() {
  return /* @__PURE__ */ React20.createElement(
    FoundationSection,
    {
      id: "grid-overview",
      title: "Grid System",
      subtitle: "Unified API for CSS Grid and flex layouts."
    },
    /* @__PURE__ */ React20.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd" }, /* @__PURE__ */ React20.createElement("h3", { className: "mgt0" }, "CSS Grid"), /* @__PURE__ */ React20.createElement("p", { className: "fg-secondary" }, "`.ulx-grid` handles columns, gaps, responsive breakpoints.")),
    /* @__PURE__ */ React20.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd" }, /* @__PURE__ */ React20.createElement("h3", { className: "mgt0" }, "Flexbox"), /* @__PURE__ */ React20.createElement("p", { className: "fg-secondary" }, "`.ulx-column` applies flex utilities for stacks, alignment, and spacing."))
  );
}

// src/Foundation/Grid/CSSGrid.jsx
import React21 from "react";
var modifiers = [
  { className: ".ulx-grid.cols-1 ... cols-12", detail: "Explicit column templates" },
  { className: ".ulx-grid.gap-1 ... gap-15", detail: "Shared spacing scale for grid gaps" },
  { className: ".ulx-grid.compact", detail: "Reduced gap preset for dense layouts" },
  { className: ".ulx-grid.masonry", detail: "Auto-placement pattern for cards" }
];
function CSSGridDocs() {
  return /* @__PURE__ */ React21.createElement(
    FoundationSection,
    {
      id: "grid-css",
      title: "CSS Grid Utilities",
      subtitle: "Responsive modifiers follow the same breakpoint variables as the container system."
    },
    /* @__PURE__ */ React21.createElement("table", { className: "ulx-foundation-table w-100p" }, /* @__PURE__ */ React21.createElement("thead", null, /* @__PURE__ */ React21.createElement("tr", null, /* @__PURE__ */ React21.createElement("th", null, "Class"), /* @__PURE__ */ React21.createElement("th", null, "Description"))), /* @__PURE__ */ React21.createElement("tbody", null, modifiers.map((item) => /* @__PURE__ */ React21.createElement("tr", { key: item.className }, /* @__PURE__ */ React21.createElement("td", null, /* @__PURE__ */ React21.createElement("code", null, item.className)), /* @__PURE__ */ React21.createElement("td", null, item.detail)))))
  );
}

// src/Foundation/Grid/Flexbox.jsx
import React22 from "react";
var flexUtilities = [
  { className: ".ulx-column", desc: "Base flex container with column direction" },
  { className: ".ulx-column.row", desc: "Switch to row direction" },
  { className: ".ulx-column.centered", desc: "Centers both axis" },
  { className: ".justify-between / .align-center", desc: "Standalone alignment helpers" }
];
function FlexboxDocs() {
  return /* @__PURE__ */ React22.createElement(
    FoundationSection,
    {
      id: "grid-flex",
      title: "Flex Utilities",
      subtitle: "Composable helpers for one-dimensional layouts."
    },
    flexUtilities.map((utility) => /* @__PURE__ */ React22.createElement("article", { key: utility.className, className: "ulx-foundation-card w-45p pd6 rds2 bd" }, /* @__PURE__ */ React22.createElement("h3", { className: "mgt0" }, /* @__PURE__ */ React22.createElement("code", null, utility.className)), /* @__PURE__ */ React22.createElement("p", { className: "fg-secondary" }, utility.desc)))
  );
}

// src/Foundation/Grid/index.jsx
function Grid() {
  return /* @__PURE__ */ React23.createElement("div", { className: "ulx-foundation-page" }, /* @__PURE__ */ React23.createElement(GridOverview, null), /* @__PURE__ */ React23.createElement(CSSGridDocs, null), /* @__PURE__ */ React23.createElement(FlexboxDocs, null));
}

// src/Foundation/Utilities/index.jsx
import React56 from "react";

// src/Foundation/Utilities/Overview.jsx
import React24 from "react";
function UtilitiesOverview() {
  return /* @__PURE__ */ React24.createElement(
    FoundationSection,
    {
      id: "utilities-overview",
      title: "Utilities Overview",
      subtitle: "Utility classes for spacing, layout, typography, and more."
    },
    /* @__PURE__ */ React24.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd" }, /* @__PURE__ */ React24.createElement("h3", { className: "mgt0" }, "Predictable naming"), /* @__PURE__ */ React24.createElement("p", { className: "fg-secondary" }, "Display (.block, .inline, .flex), spacing (.pd-, .mg-), typography (.text-).")),
    /* @__PURE__ */ React24.createElement("article", { className: "ulx-foundation-card w-45p pd6 rds2 bd" }, /* @__PURE__ */ React24.createElement("h3", { className: "mgt0" }, "Responsive variants"), /* @__PURE__ */ React24.createElement("p", { className: "fg-secondary" }, "Use prefixes such as .md-w-100 or .lg-flex for breakpoint-specific adjustments."))
  );
}

// src/Foundation/Utilities/Display.jsx
import React25 from "react";
var displayUtilities = [
  { className: ".block", property: "display: block;" },
  { className: ".inline", property: "display: inline;" },
  { className: ".inline-block", property: "display: inline-block;" },
  { className: ".table", property: "display: table;" },
  { className: ".table-cell", property: "display: table-cell;" },
  { className: ".table-row", property: "display: table-row;" },
  { className: ".table-column", property: "display: table-column;" },
  { className: ".table-column-group", property: "display: table-column-group;" },
  { className: ".table-header-group", property: "display: table-header-group;" },
  { className: ".table-footer-group", property: "display: table-footer-group;" },
  { className: ".table-row-group", property: "display: table-row-group;" },
  { className: ".table-caption", property: "display: table-caption;" },
  { className: ".list-item", property: "display: list-item;" },
  { className: ".run-in", property: "display: run-in;" },
  { className: ".compact", property: "display: compact;" },
  { className: ".marker", property: "display: marker;" },
  { className: ".ruby", property: "display: ruby;" },
  { className: ".ruby-base", property: "display: ruby-base;" },
  { className: ".ruby-text", property: "display: ruby-text;" },
  { className: ".ruby-base-container", property: "display: ruby-base-container;" },
  { className: ".ruby-text-container", property: "display: ruby-text-container;" },
  { className: ".contents", property: "display: contents;" },
  { className: ".none", property: "display: none;" },
  { className: ".initial", property: "display: initial;" },
  { className: ".inherit", property: "display: inherit;" },
  { className: ".unset", property: "display: unset;" }
];
function DisplayUtilities() {
  return /* @__PURE__ */ React25.createElement(
    FoundationSection,
    {
      id: "utilities-display",
      title: "Display Utilities",
      subtitle: "Display utility classes for controlling element display type."
    },
    /* @__PURE__ */ React25.createElement(ClassPropertyTable, { rows: displayUtilities })
  );
}

// src/Foundation/Utilities/Position.jsx
import React26 from "react";
var positionTypeUtilities = [
  { className: ".static", property: "position: static;" },
  { className: ".relative", property: "position: relative;" },
  { className: ".absolute", property: "position: absolute;" },
  { className: ".fixed", property: "position: fixed;" },
  { className: ".sticky", property: "position: sticky;" },
  { className: ".position-initial", property: "position: initial;" },
  { className: ".position-inherit", property: "position: inherit;" },
  { className: ".position-unset", property: "position: unset;" }
];
var topUtilities = [
  { className: ".tp-auto", property: "top: auto;" },
  { className: ".tp0", property: "top: 0;" },
  { className: ".tp1", property: "top: 0.125rem; (2px)" },
  { className: ".tp2", property: "top: 0.25rem; (4px)" },
  { className: ".tp3", property: "top: 0.375rem; (6px)" },
  { className: ".tp4", property: "top: 0.5rem; (8px)" },
  { className: ".tp5", property: "top: 0.625rem; (10px)" },
  { className: ".tp6", property: "top: 0.75rem; (12px)" },
  { className: ".tp8", property: "top: 1rem; (16px)" },
  { className: ".tp10", property: "top: 1.25rem; (20px)" },
  { className: ".tp12", property: "top: 1.5rem; (24px)" },
  { className: ".tp16", property: "top: 2rem; (32px)" },
  { className: ".tp20", property: "top: 2.5rem; (40px)" },
  { className: ".tp24", property: "top: 3rem; (48px)" },
  { className: ".tp32", property: "top: 4rem; (64px)" },
  { className: ".tp40", property: "top: 5rem; (80px)" },
  { className: ".tp48", property: "top: 6rem; (96px)" },
  { className: ".tp56", property: "top: 7rem; (112px)" },
  { className: ".tp64", property: "top: 8rem; (128px)" },
  { className: ".tp-full", property: "top: 100%;" },
  { className: ".tp-half", property: "top: 50%;" }
];
var rightUtilities = [
  { className: ".rt-auto", property: "right: auto;" },
  { className: ".rt0", property: "right: 0;" },
  { className: ".rt1", property: "right: 0.125rem; (2px)" },
  { className: ".rt2", property: "right: 0.25rem; (4px)" },
  { className: ".rt3", property: "right: 0.375rem; (6px)" },
  { className: ".rt4", property: "right: 0.5rem; (8px)" },
  { className: ".rt5", property: "right: 0.625rem; (10px)" },
  { className: ".rt6", property: "right: 0.75rem; (12px)" },
  { className: ".rt8", property: "right: 1rem; (16px)" },
  { className: ".rt10", property: "right: 1.25rem; (20px)" },
  { className: ".rt12", property: "right: 1.5rem; (24px)" },
  { className: ".rt16", property: "right: 2rem; (32px)" },
  { className: ".rt20", property: "right: 2.5rem; (40px)" },
  { className: ".rt24", property: "right: 3rem; (48px)" },
  { className: ".rt32", property: "right: 4rem; (64px)" },
  { className: ".rt40", property: "right: 5rem; (80px)" },
  { className: ".rt48", property: "right: 6rem; (96px)" },
  { className: ".rt56", property: "right: 7rem; (112px)" },
  { className: ".rt64", property: "right: 8rem; (128px)" },
  { className: ".rt-full", property: "right: 100%;" },
  { className: ".rt-half", property: "right: 50%;" }
];
var bottomUtilities = [
  { className: ".bt-auto", property: "bottom: auto;" },
  { className: ".bt0", property: "bottom: 0;" },
  { className: ".bt1", property: "bottom: 0.125rem; (2px)" },
  { className: ".bt2", property: "bottom: 0.25rem; (4px)" },
  { className: ".bt3", property: "bottom: 0.375rem; (6px)" },
  { className: ".bt4", property: "bottom: 0.5rem; (8px)" },
  { className: ".bt5", property: "bottom: 0.625rem; (10px)" },
  { className: ".bt6", property: "bottom: 0.75rem; (12px)" },
  { className: ".bt8", property: "bottom: 1rem; (16px)" },
  { className: ".bt10", property: "bottom: 1.25rem; (20px)" },
  { className: ".bt12", property: "bottom: 1.5rem; (24px)" },
  { className: ".bt16", property: "bottom: 2rem; (32px)" },
  { className: ".bt20", property: "bottom: 2.5rem; (40px)" },
  { className: ".bt24", property: "bottom: 3rem; (48px)" },
  { className: ".bt32", property: "bottom: 4rem; (64px)" },
  { className: ".bt40", property: "bottom: 5rem; (80px)" },
  { className: ".bt48", property: "bottom: 6rem; (96px)" },
  { className: ".bt56", property: "bottom: 7rem; (112px)" },
  { className: ".bt64", property: "bottom: 8rem; (128px)" },
  { className: ".bt-full", property: "bottom: 100%;" },
  { className: ".bt-half", property: "bottom: 50%;" }
];
var leftUtilities = [
  { className: ".lt-auto", property: "left: auto;" },
  { className: ".lt0", property: "left: 0;" },
  { className: ".lt1", property: "left: 0.125rem; (2px)" },
  { className: ".lt2", property: "left: 0.25rem; (4px)" },
  { className: ".lt3", property: "left: 0.375rem; (6px)" },
  { className: ".lt4", property: "left: 0.5rem; (8px)" },
  { className: ".lt5", property: "left: 0.625rem; (10px)" },
  { className: ".lt6", property: "left: 0.75rem; (12px)" },
  { className: ".lt8", property: "left: 1rem; (16px)" },
  { className: ".lt10", property: "left: 1.25rem; (20px)" },
  { className: ".lt12", property: "left: 1.5rem; (24px)" },
  { className: ".lt16", property: "left: 2rem; (32px)" },
  { className: ".lt20", property: "left: 2.5rem; (40px)" },
  { className: ".lt24", property: "left: 3rem; (48px)" },
  { className: ".lt32", property: "left: 4rem; (64px)" },
  { className: ".lt40", property: "left: 5rem; (80px)" },
  { className: ".lt48", property: "left: 6rem; (96px)" },
  { className: ".lt56", property: "left: 7rem; (112px)" },
  { className: ".lt64", property: "left: 8rem; (128px)" },
  { className: ".lt-full", property: "left: 100%;" },
  { className: ".lt-half", property: "left: 50%;" }
];
function PositionUtilities() {
  return /* @__PURE__ */ React26.createElement(
    FoundationSection,
    {
      id: "utilities-position",
      title: "Position Utilities",
      subtitle: "Position utility classes for controlling element positioning."
    },
    /* @__PURE__ */ React26.createElement("div", { className: "fxb fcol gp10" }, /* @__PURE__ */ React26.createElement("div", null, /* @__PURE__ */ React26.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Position Types"), /* @__PURE__ */ React26.createElement(ClassPropertyTable, { rows: positionTypeUtilities })), /* @__PURE__ */ React26.createElement("div", null, /* @__PURE__ */ React26.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Top Position"), /* @__PURE__ */ React26.createElement(ClassPropertyTable, { rows: topUtilities })), /* @__PURE__ */ React26.createElement("div", null, /* @__PURE__ */ React26.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Right Position"), /* @__PURE__ */ React26.createElement(ClassPropertyTable, { rows: rightUtilities })), /* @__PURE__ */ React26.createElement("div", null, /* @__PURE__ */ React26.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Bottom Position"), /* @__PURE__ */ React26.createElement(ClassPropertyTable, { rows: bottomUtilities })), /* @__PURE__ */ React26.createElement("div", null, /* @__PURE__ */ React26.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Left Position"), /* @__PURE__ */ React26.createElement(ClassPropertyTable, { rows: leftUtilities })))
  );
}

// src/Foundation/Utilities/Size.jsx
import React27 from "react";
var evenPxValues = Array.from({ length: 75 }, (_, index) => (index + 1) * 2);
var extendedPxValues = Array.from({ length: 30 }, (_, index) => 155 + index * 5);
var formatClassList = (prefix, values) => values.map((value) => `.${prefix}${value}`).join(", ");
var widthRows = [
  { className: ".w-100p", property: "width: 100%;" },
  { className: ".w-1-2", property: "width: 50%;" },
  { className: ".w-1-3", property: "width: 33.333%;" },
  { className: ".w-2-3", property: "width: 66.666%;" }
];
var minWidthRows = [
  { className: ".min-w-100p", property: "min-width: 100%;" }
];
var maxWidthRows = [
  { className: ".max-w-100p", property: "max-width: 100%;" }
];
var heightRows = [
  { className: ".h-100p", property: "height: 100%;" }
];
var minHeightRows = [
  { className: ".min-h-100p", property: "min-height: 100%;" }
];
var maxHeightRows = [
  { className: ".max-h-100p", property: "max-height: 100%;" }
];
var responsiveWidthRows = [
  {
    className: ".xs-w-100p",
    property: "Mobile breakpoint (\u2264 @largest-mobile-screen): width: 100%."
  },
  {
    className: ".sm-w-100p, .sm-w-1-2, .sm-w-1-3, .sm-w-2-3",
    property: "Tablet breakpoint (\u2265 @tablet-breakpoint): preset fractional widths."
  },
  {
    className: ".sm-max-w-512",
    property: "Tablet breakpoint: max-width limited to 512px."
  },
  {
    className: ".md-w-1-2, .md-w-1-3, .md-w-2-3",
    property: "Desktop breakpoint (\u2265 @computer-breakpoint): fractional widths."
  },
  {
    className: ".md-max-w-640",
    property: "Desktop breakpoint: max-width limited to 640px."
  },
  {
    className: ".lg-w-1-2, .lg-w-1-3, .lg-w-2-3",
    property: "Wide-screen breakpoint (\u2265 @wide-screen-breakpoint): fractional widths."
  }
];
var widthTokenRows = [
  {
    className: formatClassList("w", evenPxValues),
    property: "width tokens (2px \u2192 150px, 2px increments)."
  },
  {
    className: formatClassList("w", extendedPxValues),
    property: "width tokens (155px \u2192 300px, 5px increments)."
  }
];
var minWidthTokenRows = [
  {
    className: formatClassList("min-w", evenPxValues),
    property: "min-width tokens (2px \u2192 150px, 2px increments)."
  },
  {
    className: formatClassList("min-w", extendedPxValues),
    property: "min-width tokens (155px \u2192 300px, 5px increments)."
  }
];
var maxWidthTokenRows = [
  {
    className: formatClassList("max-w", evenPxValues),
    property: "max-width tokens (2px \u2192 150px, 2px increments)."
  },
  {
    className: formatClassList("max-w", extendedPxValues),
    property: "max-width tokens (155px \u2192 300px, 5px increments)."
  }
];
var heightTokenRows = [
  {
    className: formatClassList("h", evenPxValues),
    property: "height tokens (2px \u2192 150px, 2px increments)."
  },
  {
    className: formatClassList("h", extendedPxValues),
    property: "height tokens (155px \u2192 300px, 5px increments)."
  }
];
var minHeightTokenRows = [
  {
    className: formatClassList("min-h", evenPxValues),
    property: "min-height tokens (2px \u2192 150px, 2px increments)."
  },
  {
    className: formatClassList("min-h", extendedPxValues),
    property: "min-height tokens (155px \u2192 300px, 5px increments)."
  }
];
var maxHeightTokenRows = [
  {
    className: formatClassList("max-h", evenPxValues),
    property: "max-height tokens (2px \u2192 150px, 2px increments)."
  },
  {
    className: formatClassList("max-h", extendedPxValues),
    property: "max-height tokens (155px \u2192 300px, 5px increments)."
  }
];
function SizeUtilities() {
  return /* @__PURE__ */ React27.createElement(
    FoundationSection,
    {
      id: "utilities-size",
      title: "Size Utilities",
      subtitle: "Size utility classes for controlling element dimensions."
    },
    /* @__PURE__ */ React27.createElement("div", { className: "fxb wrap gp6" }, /* @__PURE__ */ React27.createElement("div", { className: "fxauto w-100p md-w-1-2" }, /* @__PURE__ */ React27.createElement("h3", { className: "h5 mgt0 mgb3" }, "Width utilities"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: widthRows, columnLabels: ["Class", "Width"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h5 mgt20 mgb3" }, "Min width"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: minWidthRows, columnLabels: ["Class", "Min width"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h5 mgt20 mgb3" }, "Max width"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: maxWidthRows, columnLabels: ["Class", "Max width"] })), /* @__PURE__ */ React27.createElement("div", { className: "fxauto w-100p md-w-1-2" }, /* @__PURE__ */ React27.createElement("h3", { className: "h5 mgt0 mgb3" }, "Height utilities"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: heightRows, columnLabels: ["Class", "Height"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h5 mgt20 mgb3" }, "Min height"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: minHeightRows, columnLabels: ["Class", "Min height"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h5 mgt20 mgb3" }, "Max height"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: maxHeightRows, columnLabels: ["Class", "Max height"] }))),
    /* @__PURE__ */ React27.createElement("div", { className: "mgt8" }, /* @__PURE__ */ React27.createElement("h3", { className: "h5 mgt0 mgb3" }, "Responsive width helpers"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: responsiveWidthRows, columnLabels: ["Class", "Breakpoint rule"] })),
    /* @__PURE__ */ React27.createElement("div", { className: "mgt8" }, /* @__PURE__ */ React27.createElement("h3", { className: "h5 mgt0 mgb3" }, "Width tokens (px based)"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: widthTokenRows, columnLabels: ["Classes", "Description"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h6 mgt6 mgb2" }, "Min-width tokens"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: minWidthTokenRows, columnLabels: ["Classes", "Description"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h6 mgt6 mgb2" }, "Max-width tokens"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: maxWidthTokenRows, columnLabels: ["Classes", "Description"] })),
    /* @__PURE__ */ React27.createElement("div", { className: "mgt8" }, /* @__PURE__ */ React27.createElement("h3", { className: "h5 mgt0 mgb3" }, "Height tokens (px based)"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: heightTokenRows, columnLabels: ["Classes", "Description"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h5 mgt20 mgb3" }, "Min-height tokens"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: minHeightTokenRows, columnLabels: ["Classes", "Description"] }), /* @__PURE__ */ React27.createElement("h4", { className: "h5 mgt20 mgb3" }, "Max-height tokens"), /* @__PURE__ */ React27.createElement(ClassPropertyTable, { rows: maxHeightTokenRows, columnLabels: ["Classes", "Description"] }))
  );
}

// src/Foundation/Utilities/NavLinks.jsx
import React28 from "react";
var navLinkUtilities = [
  {
    className: ".ulx-toggle-link",
    description: "Resets button styles for accordion/toggle links and applies inline-flex alignment with focus-visible outlines."
  },
  {
    className: ".ulx-toggle-chevron",
    description: "32px square chevron button with border, centered icon, and rotation animation when `.is-open` is applied."
  },
  {
    className: ".ulx-toggle-content",
    description: "Wrapper that animates `max-height` for collapsible sections (used with sidebar navigation)."
  }
];
function NavLinks() {
  return /* @__PURE__ */ React28.createElement(
    FoundationSection,
    {
      id: "utilities-nav-links",
      title: "Nav Links",
      subtitle: "Navigation link and toggle utility classes."
    },
    /* @__PURE__ */ React28.createElement("div", { className: "fxb wrap gap-lg" }, navLinkUtilities.map((item) => /* @__PURE__ */ React28.createElement("article", { key: item.className, className: "ulx-foundation-card pd6 rds4 bd w-100p md-w-1-3" }, /* @__PURE__ */ React28.createElement("p", { className: "font-semibold mgb2" }, /* @__PURE__ */ React28.createElement("code", null, item.className)), /* @__PURE__ */ React28.createElement("p", { className: "fg-text-secondary mgb0" }, item.description))))
  );
}

// src/Foundation/Utilities/UtilitiesNav.jsx
import React29 from "react";
var navItems = [
  { label: "Space", href: "#utilities-space" },
  { label: "Padding", href: "#utilities-padding" },
  { label: "Gap", href: "#utilities-gap" },
  { label: "Grid", href: "#utilities-grid" },
  { label: "Flex", href: "#utilities-flex" }
];
function UtilitiesNav() {
  return /* @__PURE__ */ React29.createElement(
    "div",
    {
      className: "fxb fcol gp3 mgb12",
      style: { borderLeft: "1px solid var(--ulx-default-border-color)", paddingLeft: "1.5rem" }
    },
    /* @__PURE__ */ React29.createElement("div", { className: "fxb fvc gp3" }, /* @__PURE__ */ React29.createElement("span", { className: "rds4 w36 h36 fxb fvc center-all bg-layer2" }, /* @__PURE__ */ React29.createElement("i", { className: "pi pi-sliders-h", "aria-hidden": true })), /* @__PURE__ */ React29.createElement("div", { className: "fxcol" }, /* @__PURE__ */ React29.createElement("p", { className: "text-uppercase font-semibold fg-text-secondary mgb0" }, "Foundation"), /* @__PURE__ */ React29.createElement("h3", { className: "mgt0 mgb0" }, "Utilities")), /* @__PURE__ */ React29.createElement("i", { className: "pi pi-angle-up fg-text-secondary mgl-auto" })),
    /* @__PURE__ */ React29.createElement("nav", { className: "fxcol gp2" }, navItems.map((item) => /* @__PURE__ */ React29.createElement(
      "a",
      {
        key: item.label,
        href: item.href,
        className: "fg-primary text-decoration-none font-semibold"
      },
      item.label
    )))
  );
}

// src/Foundation/Utilities/Space.jsx
import React30 from "react";
var paddingAllUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pd${i}`,
  property: `padding: @${i * 2}px; (all sides)`
}));
var paddingTopUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdt${i}`,
  property: `padding-top: @${i * 2}px;`
}));
var paddingBottomUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdb${i}`,
  property: `padding-bottom: @${i * 2}px;`
}));
var paddingLeftUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdl${i}`,
  property: `padding-inline-start: @${i * 2}px;`
}));
var paddingRightUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdr${i}`,
  property: `padding-inline-end: @${i * 2}px;`
}));
var paddingXUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdx${i}`,
  property: `padding-inline-start/end: @${i * 2}px;`
}));
var paddingYUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdy${i}`,
  property: `padding-top/bottom: @${i * 2}px;`
}));
var marginAllUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mg${i}`,
  property: `margin: @${i * 2}px; (all sides)`
}));
var marginTopUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgt${i}`,
  property: `margin-top: @${i * 2}px;`
}));
var marginBottomUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgb${i}`,
  property: `margin-bottom: @${i * 2}px;`
}));
var marginLeftUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgl${i}`,
  property: `margin-inline-start: @${i * 2}px;`
}));
var marginRightUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgr${i}`,
  property: `margin-inline-end: @${i * 2}px;`
}));
var marginXUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgx${i}`,
  property: `margin-inline-start/end: @${i * 2}px;`
}));
var marginYUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgy${i}`,
  property: `margin-top/bottom: @${i * 2}px;`
}));
var negativeMarginUtilities = Array.from({ length: 26 }, (_, i) => i > 0 ? [
  { className: `.mgn${i}`, property: `margin: -@${i * 2}px;` },
  { className: `.mgxn${i}`, property: `margin-inline-start/end: -@${i * 2}px;` },
  { className: `.mgyn${i}`, property: `margin-top/bottom: -@${i * 2}px;` },
  { className: `.mgtn${i}`, property: `margin-top: -@${i * 2}px;` },
  { className: `.mgbn${i}`, property: `margin-bottom: -@${i * 2}px;` },
  { className: `.mgln${i}`, property: `margin-inline-start: -@${i * 2}px;` },
  { className: `.mgrn${i}`, property: `margin-inline-end: -@${i * 2}px;` }
] : []).flat();
var autoPaddingUtilities = [
  { className: ".pd-auto", property: "padding: auto;" },
  { className: ".pdx-auto", property: "padding-inline-start/end: auto;" },
  { className: ".pdy-auto", property: "padding-top/bottom: auto;" },
  { className: ".pdl-auto", property: "padding-inline-start: auto;" },
  { className: ".pdr-auto", property: "padding-inline-end: auto;" }
];
var autoMarginUtilities = [
  { className: ".mg-auto", property: "margin: auto;" },
  { className: ".mgx-auto", property: "margin-inline-start/end: auto;" },
  { className: ".mgy-auto", property: "margin-top/bottom: auto;" },
  { className: ".mgt-auto", property: "margin-top: auto;" },
  { className: ".mgb-auto", property: "margin-bottom: auto;" },
  { className: ".mgl-auto", property: "margin-inline-start: auto;" },
  { className: ".mgr-auto", property: "margin-inline-end: auto;" }
];
function Space() {
  return /* @__PURE__ */ React30.createElement(
    FoundationSection,
    {
      id: "utilities-space",
      title: "Space Utilities",
      subtitle: "Padding and margin utility classes."
    },
    /* @__PURE__ */ React30.createElement("div", { className: "fxb fcol gp10" }, /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - All Sides"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: paddingAllUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - Top"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: paddingTopUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - Bottom"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: paddingBottomUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - Left"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: paddingLeftUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - Right"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: paddingRightUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - Horizontal (Inline)"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: paddingXUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - Vertical (Block)"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: paddingYUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Padding - Auto"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: autoPaddingUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - All Sides"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: marginAllUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Top"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: marginTopUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Bottom"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: marginBottomUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Left"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: marginLeftUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Right"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: marginRightUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Horizontal (Inline)"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: marginXUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Vertical (Block)"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: marginYUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Negative"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: negativeMarginUtilities })), /* @__PURE__ */ React30.createElement("div", null, /* @__PURE__ */ React30.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Margin - Auto"), /* @__PURE__ */ React30.createElement(ClassPropertyTable, { rows: autoMarginUtilities })))
  );
}

// src/Foundation/Utilities/Gap.jsx
import React31 from "react";
var gapAllUtilities = [
  { className: ".gp1", property: "gap: @4px;" },
  { className: ".gp2", property: "gap: @8px;" },
  { className: ".gp3", property: "gap: @12px;" },
  { className: ".gp4", property: "gap: @16px;" },
  { className: ".gp5", property: "gap: @20px;" },
  { className: ".gp6", property: "gap: @24px;" },
  { className: ".gp7", property: "gap: @28px;" },
  { className: ".gp8", property: "gap: @32px;" },
  { className: ".gp9", property: "gap: @36px;" },
  { className: ".gp10", property: "gap: @40px;" },
  { className: ".gp11", property: "gap: @44px;" },
  { className: ".gp12", property: "gap: @48px;" },
  { className: ".gp13", property: "gap: @52px;" },
  { className: ".gp14", property: "gap: @56px;" },
  { className: ".gp15", property: "gap: @60px;" }
];
var horizontalGapUtilities = [
  { className: ".hgap1", property: "column-gap: @4px;" },
  { className: ".hgap2", property: "column-gap: @8px;" },
  { className: ".hgap3", property: "column-gap: @12px;" },
  { className: ".hgap4", property: "column-gap: @16px;" },
  { className: ".hgap5", property: "column-gap: @20px;" },
  { className: ".hgap6", property: "column-gap: @24px;" },
  { className: ".hgap7", property: "column-gap: @28px;" },
  { className: ".hgap8", property: "column-gap: @32px;" },
  { className: ".hgap9", property: "column-gap: @36px;" },
  { className: ".hgap10", property: "column-gap: @40px;" },
  { className: ".hgap11", property: "column-gap: @44px;" },
  { className: ".hgap12", property: "column-gap: @48px;" },
  { className: ".hgap13", property: "column-gap: @52px;" },
  { className: ".hgap14", property: "column-gap: @56px;" },
  { className: ".hgap15", property: "column-gap: @60px;" }
];
var verticalGapUtilities = [
  { className: ".vgap1", property: "row-gap: @4px;" },
  { className: ".vgap2", property: "row-gap: @8px;" },
  { className: ".vgap3", property: "row-gap: @12px;" },
  { className: ".vgap4", property: "row-gap: @16px;" },
  { className: ".vgap5", property: "row-gap: @20px;" },
  { className: ".vgap6", property: "row-gap: @24px;" },
  { className: ".vgap7", property: "row-gap: @28px;" },
  { className: ".vgap8", property: "row-gap: @32px;" },
  { className: ".vgap9", property: "row-gap: @36px;" },
  { className: ".vgap10", property: "row-gap: @40px;" },
  { className: ".vgap11", property: "row-gap: @44px;" },
  { className: ".vgap12", property: "row-gap: @48px;" },
  { className: ".vgap13", property: "row-gap: @52px;" },
  { className: ".vgap14", property: "row-gap: @56px;" },
  { className: ".vgap15", property: "row-gap: @60px;" }
];
function Gap() {
  return /* @__PURE__ */ React31.createElement(
    FoundationSection,
    {
      id: "utilities-gap",
      title: "Gap Utilities",
      subtitle: "Gap utility classes for flexbox and grid layouts."
    },
    /* @__PURE__ */ React31.createElement("div", { className: "fxb fcol gp10" }, /* @__PURE__ */ React31.createElement("div", null, /* @__PURE__ */ React31.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Gap (All)"), /* @__PURE__ */ React31.createElement(ClassPropertyTable, { rows: gapAllUtilities })), /* @__PURE__ */ React31.createElement("div", null, /* @__PURE__ */ React31.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Horizontal Gap (Column)"), /* @__PURE__ */ React31.createElement(ClassPropertyTable, { rows: horizontalGapUtilities })), /* @__PURE__ */ React31.createElement("div", null, /* @__PURE__ */ React31.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Vertical Gap (Row)"), /* @__PURE__ */ React31.createElement(ClassPropertyTable, { rows: verticalGapUtilities })))
  );
}

// src/Foundation/Utilities/GridUtilities.jsx
import React32 from "react";
var gridUtilities = [
  {
    className: ".ulx-grid",
    property: "display: grid; 12-column template with gap: @16px and `min-width: 0`."
  },
  { className: ".ulx-grid.compact / .comfortable", property: "gap presets (`@8px` and `@24px`)." },
  {
    className: ".ulx-grid.auto-fit / .auto-fill",
    property: "responsive `repeat(auto-fit|auto-fill, minmax(250px, 1fr))` templates."
  },
  {
    className: ".ulx-grid.masonry / .gallery / .dashboard",
    property: "pre-built layout patterns for specific use cases."
  },
  {
    className: "col-1, col-2, ... col-12",
    property: "Direct span helpers for children within `.ulx-grid`."
  },
  {
    className: "col-lg-1, col-lg-2, ... col-lg-12",
    property: "Desktop overrides (\u2265 @computer-breakpoint)."
  },
  {
    className: "col-md-1, col-md-2, ... col-md-12",
    property: "Small computer overrides (\u2264 @largest-small-computer-screen)."
  },
  {
    className: "col-sm-1, col-sm-2, ... col-sm-12",
    property: "Tablet overrides (\u2264 @largest-tablet-screen)."
  },
  {
    className: "col-xs-1, col-xs-2, ... col-xs-12",
    property: "Mobile overrides (\u2264 @largest-mobile-screen)."
  },
  {
    className: ".ulx-grid.gap-none / gap-xs / gap-sm / \u2026",
    property: "Gap modifiers from @8px through @32px, plus column/row gap utilities."
  }
];
function GridUtilities() {
  return /* @__PURE__ */ React32.createElement(
    FoundationSection,
    {
      id: "utilities-grid",
      title: "Grid Utilities",
      subtitle: "Grid utility classes for layout."
    },
    /* @__PURE__ */ React32.createElement(ClassPropertyTable, { rows: gridUtilities, columnLabels: ["Selector / Class", "Description"] })
  );
}

// src/Foundation/Utilities/Flex.jsx
import React33 from "react";
var columnBaseUtilities = [
  {
    className: ".ulx-column",
    property: "Base flex grid container (display:flex; flex-flow:row wrap; gap:@16px)."
  },
  { className: ".ulx-column.compact", property: "Compact spacing preset (gap:@8px)." },
  { className: ".ulx-column.comfortable", property: "Comfortable spacing preset (gap:@24px)." },
  { className: ".ulx-column.gap-none", property: "Removes spacing between children (gap:0)." },
  { className: ".ulx-column.gap-xs", property: "Gap equals spacing XS token." },
  { className: ".ulx-column.gap-sm", property: "Gap equals spacing SM token." },
  { className: ".ulx-column.gap-md", property: "Gap equals spacing MD token." },
  { className: ".ulx-column.gap-lg", property: "Gap equals spacing LG token." },
  { className: ".ulx-column.gap-xl", property: "Gap equals spacing XL token." },
  {
    className: ".ulx-column.centered",
    property: "Centers children horizontally (justify-content:center)."
  },
  {
    className: ".ulx-column.no-wrap",
    property: "Keeps children on a single row (flex-wrap:nowrap)."
  },
  {
    className: ".col-fluid",
    property: "Child helper that expands fluidly inside .ulx-column (flex:auto; max-width:100%)."
  }
];
var columnDirectionUtilities = [
  { className: ".ulx-column.row", property: "Forces row direction (default orientation)." },
  { className: ".ulx-column.row-reverse", property: "Reverses row ordering of children." },
  {
    className: ".ulx-column.column",
    property: "Stacks children vertically (flex-direction:column)."
  },
  { className: ".ulx-column.column-reverse", property: "Column layout with reversed order." }
];
var columnDistributionUtilities = [
  { className: ".ulx-column.space-around", property: "Applies justify-content:space-around." },
  { className: ".ulx-column.space-between", property: "Applies justify-content:space-between." },
  { className: ".ulx-column.space-evenly", property: "Applies justify-content:space-evenly." }
];
var columnGrowthUtilities = [
  {
    className: ".ulx-column.grow",
    property: "Every direct child flex-grows equally (flex-grow:1)."
  },
  { className: ".ulx-column.no-grow", property: "Prevent children from growing (flex-grow:0)." },
  { className: ".ulx-column.no-shrink", property: "Locks child width by disabling shrink." },
  {
    className: ".ulx-column.equal-width",
    property: "Children share equal widths (flex-basis:0 + flex-grow:1)."
  },
  {
    className: ".ulx-column.auto-width",
    property: "Children size to their content (flex:0 0 auto)."
  },
  { className: ".ulx-column.reverse-order", property: "Switches row ordering to row-reverse." }
];
var columnAlignmentUtilities = [
  { className: ".ulx-column.baseline", property: "Aligns children on typographic baseline." },
  {
    className: ".ulx-column.stretch",
    property: "Stretches children vertically to fill the row height."
  },
  {
    className: ".ulx-column.content-start",
    property: "align-content:flex-start for wrapped rows."
  },
  { className: ".ulx-column.content-end", property: "align-content:flex-end for wrapped rows." },
  { className: ".ulx-column.content-center", property: "align-content:center for wrapped rows." },
  {
    className: ".ulx-column.content-between",
    property: "align-content:space-between for wrapped rows."
  },
  {
    className: ".ulx-column.content-around",
    property: "align-content:space-around for wrapped rows."
  }
];
var fxbUtilities = [
  { className: ".fxb", property: "Quick flex helper (display:flex) for inline layouts." },
  { className: ".fxb.grow", property: "Container flex-grow:1 for proportional sizing." },
  { className: ".fxb.shrink", property: "Allows flexbox container to shrink when needed." },
  { className: ".fxb.no-shrink", property: "Locks container width by disabling shrink." },
  { className: ".fxb.auto", property: "Sets flex:1 1 auto on the helper container." },
  { className: ".fxb.none", property: "Sets flex:none (fixed size helper container)." },
  { className: ".fxb.column", property: "Stacks children vertically (flex-direction:column)." },
  { className: ".fxb.row", property: "Keeps default horizontal row layout." },
  { className: ".fxb.row-reverse", property: "Row layout with reversed order." },
  { className: ".fxb.column-reverse", property: "Column layout with reversed order." }
];
var sharedWrapUtilities = [
  {
    className: ".wrap",
    property: "Enables wrapping on .ulx-column / .ulx-grid / .fxb containers."
  },
  { className: ".no-wrap", property: "Disables wrapping (flex-wrap:nowrap)." },
  { className: ".wrap-reverse", property: "Wraps content in reverse order." }
];
var sharedAlignmentUtilities = [
  { className: ".fvs", property: "align-items:flex-start on .ulx-grid / .ulx-column / .fxb." },
  { className: ".fvc", property: "align-items:center helper." },
  { className: ".fvh", property: "align-items:flex-end helper." },
  { className: ".align-stretch", property: "align-items:stretch helper." },
  { className: ".fve", property: "align-items:baseline helper." },
  { className: ".fhs", property: "justify-content:flex-start helper." },
  { className: ".fhc", property: "justify-content:center helper." },
  { className: ".fhe", property: "justify-content:flex-end helper." },
  { className: ".fsb", property: "justify-content:space-between helper." },
  { className: ".justify-around", property: "justify-content:space-around helper." },
  { className: ".justify-evenly", property: "justify-content:space-evenly helper." },
  { className: ".center-all", property: "Centers both axes (align-items + justify-content)." }
];
var sharedAlignmentMobileUtilities = [
  {
    className: ".fvs-mv",
    property: "Mobile-only align-items:flex-start at the @mobile-screen breakpoint."
  },
  { className: ".fvc-mv", property: "Mobile-only align-items:center helper." },
  { className: ".fvh-mv", property: "Mobile-only align-items:flex-end helper." },
  { className: ".align-stretch-mv", property: "Mobile-only align-items:stretch helper." },
  { className: ".fve-mv", property: "Mobile-only align-items:baseline helper." },
  { className: ".fhs-mv", property: "Mobile-only justify-content:flex-start helper." },
  { className: ".fhc-mv", property: "Mobile-only justify-content:center helper." },
  { className: ".fhe-mv", property: "Mobile-only justify-content:flex-end helper." },
  { className: ".fsb-mv", property: "Mobile-only justify-content:space-between helper." },
  { className: ".justify-around-mv", property: "Mobile-only justify-content:space-around helper." },
  { className: ".justify-evenly-mv", property: "Mobile-only justify-content:space-evenly helper." },
  { className: ".center-all-mv", property: "Mobile-only center helper for both axes." }
];
var fxbMobileUtilities = [
  { className: ".fxb.grow-mv", property: "Mobile-only flex-grow:1 helper." },
  { className: ".fxb.shrink-mv", property: "Mobile-only flex-shrink:1 helper." },
  { className: ".fxb.no-shrink-mv", property: "Mobile-only flex-shrink:0 helper." },
  { className: ".fxb.auto-mv", property: "Mobile-only flex:1 1 auto helper." },
  { className: ".fxb.none-mv", property: "Mobile-only flex:none helper." },
  { className: ".fxb.column-mv", property: "Mobile-only column direction." },
  { className: ".fxb.row-mv", property: "Mobile-only row direction." },
  { className: ".fxb.row-reverse-mv", property: "Mobile-only row-reverse direction." },
  { className: ".fxb.column-reverse-mv", property: "Mobile-only column-reverse direction." }
];
var itemUtilities = [
  { className: ".fx-item.self-start", property: "Aligns a single flex child to flex-start." },
  { className: ".fx-item.self-center", property: "Aligns a single flex child to the center." },
  { className: ".fx-item.self-end", property: "Aligns a single flex child to flex-end." },
  {
    className: ".fx-item.self-stretch",
    property: "Stretches a single flex child to fill the column height."
  },
  {
    className: ".fx-item.self-baseline",
    property: "Aligns a single flex child to the text baseline."
  }
];
var inlineUtilities = [
  {
    className: ".fxauto",
    property: "Utility class that sets flex:1 1 auto; ideal for fluid panels."
  },
  { className: ".ifxb", property: "Inline flex helper (display:inline-flex !important)." }
];
var columnUtilities = [
  ...columnBaseUtilities,
  ...columnDirectionUtilities,
  ...columnDistributionUtilities,
  ...columnGrowthUtilities,
  ...columnAlignmentUtilities
];
var fxbAllUtilities = [...fxbUtilities];
var sharedAndItemUtilities = [
  ...sharedWrapUtilities,
  ...sharedAlignmentUtilities,
  ...itemUtilities,
  ...inlineUtilities
];
var mobileMvUtilities = [...sharedAlignmentMobileUtilities, ...fxbMobileUtilities];
function Flex() {
  return /* @__PURE__ */ React33.createElement(
    FoundationSection,
    {
      id: "utilities-flex",
      title: "Flex Utilities",
      subtitle: "Flexbox utility classes for layout."
    },
    /* @__PURE__ */ React33.createElement("div", { className: "fxb fcol gp10" }, /* @__PURE__ */ React33.createElement("div", null, /* @__PURE__ */ React33.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Column Layout (.ulx-column)"), /* @__PURE__ */ React33.createElement(ClassPropertyTable, { rows: columnUtilities })), /* @__PURE__ */ React33.createElement("div", null, /* @__PURE__ */ React33.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Flex Helper (.fxb)"), /* @__PURE__ */ React33.createElement(ClassPropertyTable, { rows: fxbAllUtilities })), /* @__PURE__ */ React33.createElement("div", null, /* @__PURE__ */ React33.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Shared & Item Utilities"), /* @__PURE__ */ React33.createElement(ClassPropertyTable, { rows: sharedAndItemUtilities })), /* @__PURE__ */ React33.createElement("div", null, /* @__PURE__ */ React33.createElement("h4", { className: "mgt0 mgb4 bold-font" }, "Mobile (mv) Variants"), /* @__PURE__ */ React33.createElement(ClassPropertyTable, { rows: mobileMvUtilities })))
  );
}

// src/Foundation/Utilities/Cursor.jsx
import React34 from "react";
var cursorUtilities = [
  { className: ".pointer", property: "cursor: pointer;" },
  { className: ".text", property: "cursor: text;" },
  { className: ".move", property: "cursor: move;" },
  { className: ".grab / .grabbing", property: "cursor: grab / grabbing;" },
  { className: ".zoom-in / .zoom-out", property: "cursor: zoom-in / zoom-out;" },
  { className: ".not-allowed / .no-drop", property: "cursor: not-allowed;" },
  { className: ".resize-n / .resize-s / \u2026", property: "cursor: n-resize, s-resize, e-resize, w-resize, ne-resize, etc." },
  { className: ".col-resize / .row-resize", property: "cursor: col-resize; cursor: row-resize;" }
];
function CursorUtilities() {
  return /* @__PURE__ */ React34.createElement(
    FoundationSection,
    {
      id: "utilities-cursor",
      title: "Cursor Utilities",
      subtitle: "Cursor utility classes for controlling mouse cursor appearance."
    },
    /* @__PURE__ */ React34.createElement(ClassPropertyTable, { rows: cursorUtilities })
  );
}

// src/Foundation/Utilities/TextAlign.jsx
import React35 from "react";
var textAlignUtilities = [
  { className: ".text-start / .text-left", property: "text-align: start / left;" },
  { className: ".text-center", property: "text-align: center;" },
  { className: ".text-end / .text-right", property: "text-align: end / right;" },
  { className: ".text-justify", property: "text-align: justify;" },
  { className: ".text-initial / .text-inherit / .text-unset", property: "Reset alignment to initial/inherit/unset." }
];
function TextAlignUtilities() {
  return /* @__PURE__ */ React35.createElement(
    FoundationSection,
    {
      id: "utilities-text-align",
      title: "Text Align Utilities",
      subtitle: "Text alignment utility classes."
    },
    /* @__PURE__ */ React35.createElement(ClassPropertyTable, { rows: textAlignUtilities })
  );
}

// src/Foundation/Utilities/TextTransform.jsx
import React36 from "react";
var textTransformUtilities = [
  { className: ".text-uppercase", property: "text-transform: uppercase;" },
  { className: ".text-lowercase", property: "text-transform: lowercase;" },
  { className: ".text-capitalize", property: "text-transform: capitalize;" },
  { className: ".text-sentence-case", property: "text-transform: lowercase + ::first-letter uppercase;" },
  { className: ".text-none", property: "text-transform: none;" },
  { className: ".text-full-width / .text-full-size-kana", property: "Localized transforms for East Asian scripts." }
];
function TextTransformUtilities() {
  return /* @__PURE__ */ React36.createElement(
    FoundationSection,
    {
      id: "utilities-text-transform",
      title: "Text Transform Utilities",
      subtitle: "Text transformation utility classes."
    },
    /* @__PURE__ */ React36.createElement(ClassPropertyTable, { rows: textTransformUtilities })
  );
}

// src/Foundation/Utilities/TextDecoration.jsx
import React37 from "react";
var textDecorationUtilities = [
  { className: ".text-decoration-none", property: "text-decoration: none;" },
  { className: ".text-underline / .text-overline / .text-line-through", property: "underline, overline, or line-through respectively." },
  { className: ".text-underline-overline / .text-underline-line-through", property: "Combine multiple decorations." },
  { className: ".text-decoration-initial / .text-decoration-inherit / .text-decoration-unset", property: "Reset decoration behavior." }
];
function TextDecorationUtilities() {
  return /* @__PURE__ */ React37.createElement(
    FoundationSection,
    {
      id: "utilities-text-decoration",
      title: "Text Decoration Utilities",
      subtitle: "Text decoration utility classes."
    },
    /* @__PURE__ */ React37.createElement(ClassPropertyTable, { rows: textDecorationUtilities })
  );
}

// src/Foundation/Utilities/VerticalAlign.jsx
import React38 from "react";
var verticalAlignUtilities = [
  { className: ".align-baseline", property: "vertical-align: baseline;" },
  { className: ".align-top / .align-text-top", property: "vertical-align: top / text-top;" },
  { className: ".align-middle", property: "vertical-align: middle;" },
  { className: ".align-bottom / .align-text-bottom", property: "vertical-align: bottom / text-bottom;" },
  { className: ".align-sub / .align-super", property: "vertical-align: sub / super;" }
];
function VerticalAlignUtilities() {
  return /* @__PURE__ */ React38.createElement(
    FoundationSection,
    {
      id: "utilities-vertical-align",
      title: "Vertical Align Utilities",
      subtitle: "Vertical alignment utility classes."
    },
    /* @__PURE__ */ React38.createElement(ClassPropertyTable, { rows: verticalAlignUtilities })
  );
}

// src/Foundation/Utilities/Float.jsx
import React39 from "react";
var floatUtilities = [
  { className: ".float-left / .float-right", property: "float: left / right;" },
  { className: ".float-none", property: "float: none;" },
  { className: ".float-initial / .float-inherit / .float-unset", property: "Reset floating behavior." }
];
function FloatUtilities() {
  return /* @__PURE__ */ React39.createElement(
    FoundationSection,
    {
      id: "utilities-float",
      title: "Float Utilities",
      subtitle: "Float utility classes for controlling element float behavior."
    },
    /* @__PURE__ */ React39.createElement(ClassPropertyTable, { rows: floatUtilities })
  );
}

// src/Foundation/Utilities/Clear.jsx
import React40 from "react";
var clearUtilities = [
  { className: ".clear-left / .clear-right / .clear-both", property: "clear floats on the specified side(s)." },
  { className: ".clear-none", property: "clear: none;" },
  { className: ".clear-initial / .clear-inherit / .clear-unset", property: "Reset clearing behavior." }
];
function ClearUtilities() {
  return /* @__PURE__ */ React40.createElement(
    FoundationSection,
    {
      id: "utilities-clear",
      title: "Clear Utilities",
      subtitle: "Clear utility classes for controlling element clear behavior."
    },
    /* @__PURE__ */ React40.createElement(ClassPropertyTable, { rows: clearUtilities })
  );
}

// src/Foundation/Utilities/WordBreak.jsx
import React41 from "react";
var wordBreakUtilities = [
  { className: ".word-break-normal", property: "word-break: normal;" },
  { className: ".word-break-break-all / .word-break-keep-all", property: "Break anywhere vs. keep words intact." },
  { className: ".word-break-break-word", property: "Legacy support for break-word." },
  { className: ".word-break-initial / .word-break-inherit / .word-break-unset", property: "Reset behavior." }
];
function WordBreakUtilities() {
  return /* @__PURE__ */ React41.createElement(
    FoundationSection,
    {
      id: "utilities-word-break",
      title: "Word Break Utilities",
      subtitle: "Word break utility classes for controlling text wrapping."
    },
    /* @__PURE__ */ React41.createElement(ClassPropertyTable, { rows: wordBreakUtilities })
  );
}

// src/Foundation/Utilities/Visibility.jsx
import React42 from "react";
var visibilityUtilities = [
  { className: ".visible / .hidden", property: "visibility: visible / hidden;" },
  { className: ".collapse", property: "visibility: collapse; (table rows/columns)" },
  { className: ".visibility-initial / .visibility-inherit / .visibility-unset", property: "Reset helpers." }
];
function VisibilityUtilities() {
  return /* @__PURE__ */ React42.createElement(
    FoundationSection,
    {
      id: "utilities-visibility",
      title: "Visibility Utilities",
      subtitle: "Visibility utility classes for controlling element visibility."
    },
    /* @__PURE__ */ React42.createElement(ClassPropertyTable, { rows: visibilityUtilities })
  );
}

// src/Foundation/Utilities/Overflow.jsx
import React43 from "react";
var overflowUtilities = [
  { className: ".overflow-visible / .overflow-hidden / .overflow-scroll / .overflow-auto", property: "control overflow on both axes." },
  { className: ".overflow-initial / .overflow-inherit / .overflow-unset", property: "Reset overflow behavior." },
  { className: ".overflow-x-visible / hidden / scroll / auto", property: "axis-specific control for horizontal overflow." },
  { className: ".overflow-y-visible / hidden / scroll / auto", property: "axis-specific control for vertical overflow." }
];
function OverflowUtilities() {
  return /* @__PURE__ */ React43.createElement(
    FoundationSection,
    {
      id: "utilities-overflow",
      title: "Overflow Utilities",
      subtitle: "Overflow utility classes for controlling element overflow behavior."
    },
    /* @__PURE__ */ React43.createElement(ClassPropertyTable, { rows: overflowUtilities })
  );
}

// src/Foundation/Utilities/ColorUtilities.jsx
import React44 from "react";
var getColorForClass = (className) => {
  const classKey = className.replace(/^\./, "");
  const colorMap = {
    "bg-primary": "var(--ulx-primary-color)",
    "bg-primary-hover": "var(--ulx-primary-hover-color)",
    "bg-primary-disabled": "var(--ulx-primary-disabled-color)",
    "bg-success": "var(--ulx-success-color, #22c55e)",
    "bg-success-soft": "var(--ulx-success-bg-color, #dcfce7)",
    "bg-danger": "var(--ulx-danger-color, #ef4444)",
    "bg-danger-soft": "var(--ulx-danger-bg-color, #fff1f0)",
    "bg-info": "var(--ulx-info-color, #3b82f6)",
    "bg-info-soft": "var(--ulx-info-bg-color, #e6f7ff)",
    "bg-link": "var(--ulx-link-bg-color)",
    "bg-link-invert": "var(--ulx-link-invert-bg-color)",
    "bg-body": "var(--ulx-body-bg)",
    "bg-default": "var(--ulx-default-bg)",
    "bg-secondary": "var(--ulx-secondary-bg)",
    "bg-overlay": "var(--ulx-overlay-bg)",
    "bg-overlay-white": "var(--ulx-overlay-bg-white)",
    "bg-overlay-dark": "var(--ulx-dark-overlay-bg)",
    "bg-overlay-light": "var(--overlay-light, rgba(0, 0, 0, .1))",
    "bg-header": "var(--ulx-header-bg)",
    "bg-dimmer": "var(--ulx-dimmer-bg, rgba(0, 0, 0, .7))",
    "bg-topbar": "var(--ulx-topbar-bg-color)",
    "bg-layer1": "color-mix(in srgb, var(--layer1-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-17))",
    "bg-layer2": "color-mix(in srgb, var(--layer2-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-10))",
    "bg-layer3": "color-mix(in srgb, var(--layer3-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-10))",
    "bg-layer4": "color-mix(in srgb, var(--layer4-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-10))",
    "bg-layer5": "color-mix(in srgb, var(--layer5-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-10))",
    "bg-layer6": "color-mix(in srgb, var(--layer6-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-10))",
    "bg-primary-layer1": "color-mix(in srgb, var(--primary-layer1-bg), var(--ulx-primary-color) var(--ulx-contrast-intensity-17))",
    "bg-primary-layer2": "color-mix(in srgb, var(--primary-layer2-bg), var(--ulx-primary-color) var(--ulx-contrast-intensity-17))",
    "bg-primary-layer3": "color-mix(in srgb, var(--primary-layer3-bg), var(--ulx-primary-color) var(--ulx-contrast-intensity-10))",
    "bg-primary-layer4": "color-mix(in srgb, var(--primary-layer4-bg), var(--ulx-primary-color) var(--ulx-contrast-intensity-10))",
    "bg-primary-layerD1": "var(--primary-layerD1-bg)",
    "bg-primary-layerD2": "var(--primary-layerD2-bg)",
    "bg-blue-layer1": "color-mix(in srgb, var(--blue-layer1-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-10))",
    "bg-blue-layer2": "color-mix(in srgb, var(--blue-layer2-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-10))",
    "bg-hover-default": "var(--ulx-default-hover-bg)",
    "bg-nav": "var(--ulx-nav-bg-color)",
    "bg-nav-item-active": "var(--ulx-nav-item-active-bg-color)",
    "bg-vnav": "var(--ulx-vnav-bg-color)",
    "bg-vnav-item-active": "var(--ulx-vnav-item-active-bg-color)",
    "bg-input": "var(--ulx-input-bg-color)",
    "bg-input-disable": "color-mix(in srgb, var(--ulx-input-disable-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-25))",
    "bg-input-focus": "var(--ulx-input-focus-bg, var(--ulx-input-bg-color))",
    "bg-inverted": "var(--ulx-inverted-bg-color)",
    "bg-modal": "var(--ulx-modal-bg-color)",
    "bg-modal-footer": "var(--ulx-modalfooter-bg-color)",
    "bg-tooltip": "var(--ulx-tooltip-bg, var(--ulx-secondary-bg))",
    "bg-tooltip-inverted": "var(--ulx-tooltip-inverted-bg, var(--ulx-inverted-bg-color))",
    "bg-table-header": "var(--ulx-table-list-head-bg, color-mix(in srgb, var(--layer1-bg), var(--ulx-contrast-color) var(--ulx-contrast-intensity-17)))",
    "bg-new-label": "var(--ulx-new-lbl-bg, var(--red-bg-color, #CF1322))",
    "fg-primary": "var(--ulx-primary-text-color, var(--ulx-primary-color))",
    "fg-primary-light": "var(--ulx-primary-fg-light-color)",
    "fg-white": "var(--static-white, #fff)",
    "fg-text": "var(--ulx-text-color)",
    "fg-text-secondary": "var(--ulx-secondary-text-color)",
    "fg-text-tertiary": "var(--ulx-tertiary-text-color)",
    "fg-text-light": "var(--ulx-light-text-color)",
    "fg-link": "var(--ulx-link-color)",
    "fg-link-hover": "var(--ulx-link-hover-color)",
    "fg-disabled": "var(--ulx-disabled-fg-color, var(--ulx-light-text-color))",
    "fg-placeholder": "var(--place-holder-color, #888585)",
    "fg-text-info": "var(--ulx-info-text-color)",
    "fg-green": "var(--ulx-success-fg, #006644)",
    "fg-pointing-menu": "var(--pointing-menu-fg)",
    "fg-pointing-menu-active": "var(--pointing-menu-active)",
    "fg-layer1": "var(--layer1-fg)",
    "fg-blue-layer1": "var(--blue-layer1-fg)",
    "fg-blue-layer2": "var(--blue-layer2-fg)",
    "fg-hover-default": "var(--ulx-default-hover-color)",
    "fg-nav": "var(--ulx-nav-fg-color)",
    "fg-nav-link": "var(--ulx-navlink-fg-color)",
    "fg-nav-item-active": "var(--ulx-nav-item-active-fg-color)",
    "fg-vnav": "var(--ulx-vnav-fg-color)",
    "fg-vnav-link": "var(--ulx-vnav-link-fg-color)",
    "fg-vnav-link-hover": "var(--ulx-vnav-hover-color)",
    "fg-vnav-item-active": "var(--ulx-vnav-item-active-fg-color)",
    "fg-input": "var(--ulx-input-fg-color)",
    "fg-inverted": "var(--ulx-inverted-fg-color)",
    "fg-inverted-secondary": "var(--ulx-inverted-secondary-fg-color)",
    "fg-inverted-link": "var(--ulx-inverted-link-color)",
    "fg-topbar": "var(--ulx-topbar-fg-color)",
    "fg-topbar-link": "var(--ulx-topbar-link-color)",
    "fg-modal": "var(--ulx-modal-fg-color)",
    "fg-tooltip": "var(--ulx-tooltip-fg, var(--ulx-text-color))",
    "fg-tooltip-inverted": "var(--ulx-tooltip-inverted-fg, var(--ulx-inverted-fg-color))",
    "fg-user-online": "var(--ulx-user-online-color, #006644)",
    "fg-user-offline": "var(--ulx-user-offline-color, #8995A0)",
    "fg-user-idle": "var(--ulx-user-idle-color, #FAAD14)",
    "fg-table-header": "var(--ulx-table-list-head-fg, var(--ulx-text-color))",
    "fg-cobalt-theme": "var(--cobalt-theme-color, #2c66dd)",
    "fg-cardinal-theme": "var(--cardinal-theme-color, #cc3929)",
    "fg-fern-theme": "var(--fern-theme-color, #0c8844)",
    "fg-tangerine-theme": "var(--tangerine-theme-color, #ebb625)",
    "fg-new-label": "var(--ulx-new-lbl-fg, var(--static-white, #fff))",
    "fg-focus-default": "var(--focus-default-color, #cd9747)",
    "border-default": "color-mix(in srgb, var(--ulx-default-border-color), var(--ulx-contrast-color) var(--ulx-contrast-intensity-40))",
    "border-dark": "color-mix(in srgb, var(--ulx-dark-border-color), var(--ulx-contrast-color) var(--ulx-contrast-intensity-40))",
    "border-light": "color-mix(in srgb, var(--ulx-light-border-color), var(--ulx-contrast-color) var(--ulx-contrast-intensity-40))",
    "border-error": "var(--ulx-error-border-color, #FFA39E)",
    "border-input": "color-mix(in srgb, var(--ulx-input-border-color), var(--ulx-contrast-color) var(--ulx-contrast-intensity-40))"
  };
  return colorMap[classKey] || null;
};
var backgroundUtilities = [
  {
    className: ".bg-primary",
    property: "Primary brand background sourced from @primary-color token.",
    color: getColorForClass(".bg-primary")
  },
  {
    className: ".bg-primary-hover",
    property: "Primary hover state background.",
    color: getColorForClass(".bg-primary-hover")
  },
  {
    className: ".bg-primary-disabled",
    property: "Primary disabled state background.",
    color: getColorForClass(".bg-primary-disabled")
  },
  {
    className: ".bg-success",
    property: "Success status background (solid variant).",
    color: getColorForClass(".bg-success")
  },
  {
    className: ".bg-success-soft",
    property: "Success status background (soft variant).",
    color: getColorForClass(".bg-success-soft")
  },
  {
    className: ".bg-danger",
    property: "Danger/error status background (solid variant).",
    color: getColorForClass(".bg-danger")
  },
  {
    className: ".bg-danger-soft",
    property: "Danger/error status background (soft variant).",
    color: getColorForClass(".bg-danger-soft")
  },
  {
    className: ".bg-info",
    property: "Info status background (solid variant).",
    color: getColorForClass(".bg-info")
  },
  {
    className: ".bg-info-soft",
    property: "Info status background (soft variant).",
    color: getColorForClass(".bg-info-soft")
  },
  {
    className: ".bg-link",
    property: "Link callout background for default surfaces.",
    color: getColorForClass(".bg-link")
  },
  {
    className: ".bg-link-invert",
    property: "Link callout background for inverted surfaces.",
    color: getColorForClass(".bg-link-invert")
  },
  {
    className: ".bg-body",
    property: "Global body background.",
    color: getColorForClass(".bg-body")
  },
  {
    className: ".bg-default",
    property: "Default container background.",
    color: getColorForClass(".bg-default")
  },
  {
    className: ".bg-secondary",
    property: "Secondary container background.",
    color: getColorForClass(".bg-secondary")
  },
  {
    className: ".bg-overlay",
    property: "Overlay background for modals and scrims.",
    color: getColorForClass(".bg-overlay")
  },
  {
    className: ".bg-overlay-white",
    property: "White overlay background.",
    color: getColorForClass(".bg-overlay-white")
  },
  {
    className: ".bg-overlay-dark",
    property: "Dark overlay background.",
    color: getColorForClass(".bg-overlay-dark")
  },
  {
    className: ".bg-overlay-light",
    property: "Light overlay background for subtle elevation.",
    color: getColorForClass(".bg-overlay-light")
  },
  {
    className: ".bg-header",
    property: "Header container background.",
    color: getColorForClass(".bg-header")
  },
  {
    className: ".bg-dimmer",
    property: "Dimmer overlay background.",
    color: getColorForClass(".bg-dimmer")
  },
  {
    className: ".bg-topbar",
    property: "Top bar background.",
    color: getColorForClass(".bg-topbar")
  },
  {
    className: ".bg-layer1",
    property: "Surface layer 1 background.",
    color: getColorForClass(".bg-layer1")
  },
  {
    className: ".bg-layer2",
    property: "Surface layer 2 background.",
    color: getColorForClass(".bg-layer2")
  },
  {
    className: ".bg-layer3",
    property: "Surface layer 3 background.",
    color: getColorForClass(".bg-layer3")
  },
  {
    className: ".bg-layer4",
    property: "Surface layer 4 background.",
    color: getColorForClass(".bg-layer4")
  },
  {
    className: ".bg-layer5",
    property: "Surface layer 5 background.",
    color: getColorForClass(".bg-layer5")
  },
  {
    className: ".bg-layer6",
    property: "Surface layer 6 background.",
    color: getColorForClass(".bg-layer6")
  },
  {
    className: ".bg-primary-layer1",
    property: "Primary-tinted layer 1 background.",
    color: getColorForClass(".bg-primary-layer1")
  },
  {
    className: ".bg-primary-layer2",
    property: "Primary-tinted layer 2 background.",
    color: getColorForClass(".bg-primary-layer2")
  },
  {
    className: ".bg-primary-layer3",
    property: "Primary-tinted layer 3 background.",
    color: getColorForClass(".bg-primary-layer3")
  },
  {
    className: ".bg-primary-layer4",
    property: "Primary-tinted layer 4 background.",
    color: getColorForClass(".bg-primary-layer4")
  },
  {
    className: ".bg-primary-layerD1",
    property: "Primary-tinted dark layer 1 background.",
    color: getColorForClass(".bg-primary-layerD1")
  },
  {
    className: ".bg-primary-layerD2",
    property: "Primary-tinted dark layer 2 background.",
    color: getColorForClass(".bg-primary-layerD2")
  },
  {
    className: ".bg-blue-layer1",
    property: "Blue theme layer 1 background.",
    color: getColorForClass(".bg-blue-layer1")
  },
  {
    className: ".bg-blue-layer2",
    property: "Blue theme layer 2 background.",
    color: getColorForClass(".bg-blue-layer2")
  },
  {
    className: ".bg-hover-default",
    property: "Default hover background for neutral components.",
    color: getColorForClass(".bg-hover-default")
  },
  {
    className: ".bg-nav",
    property: "Horizontal navigation container background.",
    color: getColorForClass(".bg-nav")
  },
  {
    className: ".bg-nav-item-active",
    property: "Active navigation item background.",
    color: getColorForClass(".bg-nav-item-active")
  },
  {
    className: ".bg-vnav",
    property: "Vertical navigation container background.",
    color: getColorForClass(".bg-vnav")
  },
  {
    className: ".bg-vnav-item-active",
    property: "Active vertical navigation item background.",
    color: getColorForClass(".bg-vnav-item-active")
  },
  {
    className: ".bg-input",
    property: "Form input field background.",
    color: getColorForClass(".bg-input")
  },
  {
    className: ".bg-input-disable",
    property: "Disabled form input field background.",
    color: getColorForClass(".bg-input-disable")
  },
  {
    className: ".bg-input-focus",
    property: "Focused form input field background.",
    color: getColorForClass(".bg-input-focus")
  },
  {
    className: ".bg-inverted",
    property: "Inverted theme surface for dark-on-light contexts.",
    color: getColorForClass(".bg-inverted")
  },
  {
    className: ".bg-modal",
    property: "Modal dialog container background.",
    color: getColorForClass(".bg-modal")
  },
  {
    className: ".bg-modal-footer",
    property: "Modal dialog footer background.",
    color: getColorForClass(".bg-modal-footer")
  },
  {
    className: ".bg-tooltip",
    property: "Tooltip container background.",
    color: getColorForClass(".bg-tooltip")
  },
  {
    className: ".bg-tooltip-inverted",
    property: "Inverted tooltip container background.",
    color: getColorForClass(".bg-tooltip-inverted")
  },
  {
    className: ".bg-table-header",
    property: "Table/list header background.",
    color: getColorForClass(".bg-table-header")
  },
  {
    className: ".bg-new-label",
    property: "Label badge accent background.",
    color: getColorForClass(".bg-new-label")
  }
];
var foregroundUtilities = [
  {
    className: ".fg-primary",
    property: "Primary text color for brand elements.",
    color: getColorForClass(".fg-primary")
  },
  {
    className: ".fg-primary-light",
    property: "Light primary text color.",
    color: getColorForClass(".fg-primary-light")
  },
  {
    className: ".fg-white",
    property: "Static white text color.",
    color: getColorForClass(".fg-white")
  },
  {
    className: ".fg-text",
    property: "Default body text color.",
    color: getColorForClass(".fg-text")
  },
  {
    className: ".fg-text-secondary",
    property: "Secondary text color for de-emphasis.",
    color: getColorForClass(".fg-text-secondary")
  },
  {
    className: ".fg-text-tertiary",
    property: "Tertiary text color for muted content.",
    color: getColorForClass(".fg-text-tertiary")
  },
  {
    className: ".fg-text-light",
    property: "Light text color for subtle content.",
    color: getColorForClass(".fg-text-light")
  },
  {
    className: ".fg-link",
    property: "Default link text color.",
    color: getColorForClass(".fg-link")
  },
  {
    className: ".fg-link-hover",
    property: "Link hover state text color.",
    color: getColorForClass(".fg-link-hover")
  },
  {
    className: ".fg-disabled",
    property: "Disabled element text color.",
    color: getColorForClass(".fg-disabled")
  },
  {
    className: ".fg-placeholder",
    property: "Placeholder text color for form inputs.",
    color: getColorForClass(".fg-placeholder")
  },
  {
    className: ".fg-text-info",
    property: "Info text color for informational messages.",
    color: getColorForClass(".fg-text-info")
  },
  {
    className: ".fg-green",
    property: "Green/success text color.",
    color: getColorForClass(".fg-green")
  },
  {
    className: ".fg-pointing-menu",
    property: "Pointing menu text color.",
    color: getColorForClass(".fg-pointing-menu")
  },
  {
    className: ".fg-pointing-menu-active",
    property: "Active pointing menu text color.",
    color: getColorForClass(".fg-pointing-menu-active")
  },
  {
    className: ".fg-layer1",
    property: "Layer 1 foreground text color.",
    color: getColorForClass(".fg-layer1")
  },
  {
    className: ".fg-blue-layer1",
    property: "Blue layer 1 foreground text color.",
    color: getColorForClass(".fg-blue-layer1")
  },
  {
    className: ".fg-blue-layer2",
    property: "Blue layer 2 foreground text color.",
    color: getColorForClass(".fg-blue-layer2")
  },
  {
    className: ".fg-hover-default",
    property: "Default hover text color.",
    color: getColorForClass(".fg-hover-default")
  },
  {
    className: ".fg-nav",
    property: "Navigation container text color.",
    color: getColorForClass(".fg-nav")
  },
  {
    className: ".fg-nav-link",
    property: "Navigation link text color.",
    color: getColorForClass(".fg-nav-link")
  },
  {
    className: ".fg-nav-item-active",
    property: "Active navigation item text color.",
    color: getColorForClass(".fg-nav-item-active")
  },
  {
    className: ".fg-vnav",
    property: "Vertical navigation container text color.",
    color: getColorForClass(".fg-vnav")
  },
  {
    className: ".fg-vnav-link",
    property: "Vertical navigation link text color.",
    color: getColorForClass(".fg-vnav-link")
  },
  {
    className: ".fg-vnav-link-hover",
    property: "Vertical navigation link hover text color.",
    color: getColorForClass(".fg-vnav-link-hover")
  },
  {
    className: ".fg-vnav-item-active",
    property: "Active vertical navigation item text color.",
    color: getColorForClass(".fg-vnav-item-active")
  },
  {
    className: ".fg-input",
    property: "Form input field text color.",
    color: getColorForClass(".fg-input")
  },
  {
    className: ".fg-inverted",
    property: "Inverted theme text color.",
    color: getColorForClass(".fg-inverted")
  },
  {
    className: ".fg-inverted-secondary",
    property: "Inverted theme secondary text color.",
    color: getColorForClass(".fg-inverted-secondary")
  },
  {
    className: ".fg-inverted-link",
    property: "Inverted theme link text color.",
    color: getColorForClass(".fg-inverted-link")
  },
  {
    className: ".fg-topbar",
    property: "Top bar text color.",
    color: getColorForClass(".fg-topbar")
  },
  {
    className: ".fg-topbar-link",
    property: "Top bar link text color.",
    color: getColorForClass(".fg-topbar-link")
  },
  {
    className: ".fg-modal",
    property: "Modal dialog text color.",
    color: getColorForClass(".fg-modal")
  },
  {
    className: ".fg-tooltip",
    property: "Tooltip text color.",
    color: getColorForClass(".fg-tooltip")
  },
  {
    className: ".fg-tooltip-inverted",
    property: "Inverted tooltip text color.",
    color: getColorForClass(".fg-tooltip-inverted")
  },
  {
    className: ".fg-user-online",
    property: "User online status indicator color.",
    color: getColorForClass(".fg-user-online")
  },
  {
    className: ".fg-user-offline",
    property: "User offline status indicator color.",
    color: getColorForClass(".fg-user-offline")
  },
  {
    className: ".fg-user-idle",
    property: "User idle status indicator color.",
    color: getColorForClass(".fg-user-idle")
  },
  {
    className: ".fg-table-header",
    property: "Table/list header text color.",
    color: getColorForClass(".fg-table-header")
  },
  {
    className: ".fg-cobalt-theme",
    property: "Cobalt theme accent text color.",
    color: getColorForClass(".fg-cobalt-theme")
  },
  {
    className: ".fg-cardinal-theme",
    property: "Cardinal theme accent text color.",
    color: getColorForClass(".fg-cardinal-theme")
  },
  {
    className: ".fg-fern-theme",
    property: "Fern theme accent text color.",
    color: getColorForClass(".fg-fern-theme")
  },
  {
    className: ".fg-tangerine-theme",
    property: "Tangerine theme accent text color.",
    color: getColorForClass(".fg-tangerine-theme")
  },
  {
    className: ".fg-new-label",
    property: "New label badge text color.",
    color: getColorForClass(".fg-new-label")
  },
  {
    className: ".fg-focus-default",
    property: "Default focus ring color.",
    color: getColorForClass(".fg-focus-default")
  }
];
var borderUtilities = [
  {
    className: ".border-default",
    property: "Default border color.",
    color: getColorForClass(".border-default")
  },
  {
    className: ".border-dark",
    property: "Dark border color.",
    color: getColorForClass(".border-dark")
  },
  {
    className: ".border-light",
    property: "Light border color.",
    color: getColorForClass(".border-light")
  },
  {
    className: ".border-error",
    property: "Error state border color.",
    color: getColorForClass(".border-error")
  },
  {
    className: ".border-input",
    property: "Form input border color.",
    color: getColorForClass(".border-input")
  }
];
function ColorUtilities() {
  return /* @__PURE__ */ React44.createElement(
    FoundationSection,
    {
      id: "utilities-color",
      title: "Color Utilities",
      subtitle: "Color utility classes for text and background colors."
    },
    /* @__PURE__ */ React44.createElement("div", { className: "fxb wrap gp10" }, /* @__PURE__ */ React44.createElement("div", null, /* @__PURE__ */ React44.createElement("h4", { className: "mgt0 mgb4 bold-font fg-primary" }, "Background Colors"), /* @__PURE__ */ React44.createElement(
      ClassPropertyTable,
      {
        rows: backgroundUtilities,
        columnLabels: ["Utility Class", "Description"]
      }
    )), /* @__PURE__ */ React44.createElement("div", null, /* @__PURE__ */ React44.createElement("h4", { className: "mgt0 mgb4 bold-font fg-primary" }, "Foreground Colors"), /* @__PURE__ */ React44.createElement(
      ClassPropertyTable,
      {
        rows: foregroundUtilities,
        columnLabels: ["Utility Class", "Description"]
      }
    )), /* @__PURE__ */ React44.createElement("div", null, /* @__PURE__ */ React44.createElement("h4", { className: "mgt0 mgb4 bold-font fg-primary" }, "Border Colors"), /* @__PURE__ */ React44.createElement(
      ClassPropertyTable,
      {
        rows: borderUtilities,
        columnLabels: ["Utility Class", "Description"]
      }
    )))
  );
}

// src/Foundation/Utilities/Hover.jsx
import React45 from "react";
var hoverBgUtilities = [
  { className: "hover:bg-primary", bg: "@primary-color", detail: "Primary brand fill" },
  { className: "hover:bg-primary-hover", bg: "@primary-hover-color", detail: "Primary hover state" },
  { className: "hover:bg-primary-disabled", bg: "@primary-disabled-color" },
  { className: "hover:bg-success", bg: "@success-color" },
  { className: "hover:bg-success-soft", bg: "@success-bg-color" },
  { className: "hover:bg-danger", bg: "@danger-color" },
  { className: "hover:bg-danger-soft", bg: "@danger-bg-color" },
  { className: "hover:bg-info", bg: "@info-color" },
  { className: "hover:bg-info-soft", bg: "@info-bg-color" },
  { className: "hover:bg-link", bg: "@link-bg-color" },
  { className: "hover:bg-link-invert", bg: "@link-invert-bg-color" },
  { className: "hover:bg-body", bg: "@body-background" },
  { className: "hover:bg-default", bg: "@default-background" },
  { className: "hover:bg-secondary", bg: "@secondary-background" },
  { className: "hover:bg-overlay", bg: "@overlay-bg" },
  { className: "hover:bg-overlay-white", bg: "@overlay-bg-white" },
  { className: "hover:bg-overlay-dark", bg: "@dark-overlay-bg" },
  { className: "hover:bg-overlay-light", bg: "@overlay-light" },
  { className: "hover:bg-layer1", bg: "@bg-layer1" },
  { className: "hover:bg-layer2", bg: "@bg-layer2" },
  { className: "hover:bg-layer3", bg: "@bg-layer3" },
  { className: "hover:bg-layer4", bg: "@bg-layer4" },
  { className: "hover:bg-layer5", bg: "@bg-layer5" },
  { className: "hover:bg-layer6", bg: "@bg-layer6" },
  { className: "hover:bg-primary-layer1", bg: "@bg-primaryLayer1" },
  { className: "hover:bg-primary-layer2", bg: "@bg-primaryLayer2" },
  { className: "hover:bg-primary-layer3", bg: "@bg-primaryLayer3" },
  { className: "hover:bg-primary-layer4", bg: "@bg-primaryLayer4" },
  { className: "hover:bg-primary-layerD1", bg: "@bg-primaryLayerD1" },
  { className: "hover:bg-primary-layerD2", bg: "@bg-primaryLayerD2" },
  { className: "hover:bg-blue-layer1", bg: "@bg-blueLayer1" },
  { className: "hover:bg-blue-layer2", bg: "@bg-blueLayer2" },
  { className: "hover:bg-blue-layer3", bg: "@bg-BlueLayer3" },
  { className: "hover:bg-red-layer1", bg: "@bg-redLayer1" },
  { className: "hover:bg-red-layer2", bg: "@bg-redLayer2" },
  { className: "hover:bg-red-layer3", bg: "@bg-redLayer3" },
  { className: "hover:bg-green-layer1", bg: "@bg-greenLayer1" },
  { className: "hover:bg-green-layer2", bg: "@bg-greenLayer2" },
  { className: "hover:bg-green-layer3", bg: "@bg-greenLayer3" },
  { className: "hover:bg-orange-layer1", bg: "@bg-orangeLayer1" },
  { className: "hover:bg-orange-layer2", bg: "@bg-orangeLayer2" },
  { className: "hover:bg-orange-layer3", bg: "@bg-orangeLayer3" },
  { className: "hover:bg-purple-layer1", bg: "@bg-purpleLayer1" },
  { className: "hover:bg-purple-layer2", bg: "@bg-purpleLayer2" },
  { className: "hover:bg-purple-layer3", bg: "@bg-purpleLayer3" },
  { className: "hover:bg-purple-layer4", bg: "@bg-purpleLayer4" },
  { className: "hover:bg-gold-layer1", bg: "@bg-goldLayer1" },
  { className: "hover:bg-gold-layer2", bg: "@bg-goldLayer2" },
  { className: "hover:bg-gold-layer3", bg: "@bg-goldLayer3" },
  { className: "hover:bg-black-layer1", bg: "@bg-blackLayer1" },
  { className: "hover:bg-black-layer2", bg: "@bg-blackLayer2" },
  { className: "hover:bg-black-layer3", bg: "@bg-blackLayer3" },
  { className: "hover:bg-black-layer4", bg: "@bg-blackLayer4" },
  { className: "hover:bg-magenta-layer2", bg: "@bg-magentaLayer2" },
  { className: "hover:bg-brown-layer2", bg: "@bg-brownLayer2" },
  { className: "hover:bg-teal-layer3", bg: "@bg-tealLayer3" },
  { className: "hover:bg-vnav", bg: "@vnav-bg-color" },
  { className: "hover:bg-vnav-item-active", bg: "@vnav-item-active-bg-color" },
  { className: "hover:bg-nav", bg: "@nav-bg-color" },
  { className: "hover:bg-nav-item-active", bg: "@nav-item-active-bg-color" },
  { className: "hover:bg-input", bg: "@input-bg-color" },
  { className: "hover:bg-input-disable", bg: "@input-disable-bg" },
  { className: "hover:bg-input-focus", bg: "@input-focus-bg" },
  { className: "hover:bg-inverted", bg: "@inverted-bg-color" },
  { className: "hover:bg-topbar", bg: "@topbar-bg-color" },
  { className: "hover:bg-modal", bg: "@modal-bg-color" },
  { className: "hover:bg-modal-footer", bg: "@modalfooter-bg-color" },
  { className: "hover:bg-tooltip", bg: "@tooltip-bg" },
  { className: "hover:bg-tooltip-inverted", bg: "@tooltip-inverted-bg" },
  { className: "hover:bg-header", bg: "@header-background" },
  { className: "hover:bg-dimmer", bg: "@dimmer-background" },
  { className: "hover:bg-table-header", bg: "@table-list-head-bg" },
  { className: "hover:bg-new-label", bg: "@new-lbl-bg" }
];
var hoverFgUtilities = [
  {
    className: ".fg-hover-default",
    property: "color: @default-hover-color; pair with hover:bg-hover-default for icon/text tinting."
  },
  {
    className: ".fg-link-hover",
    property: "color: @link-hover-color; ensures text links meet contrast requirements on hover/focus."
  },
  {
    className: ".fg-vnav-link-hover",
    property: "color: @vnav-link-hover-color; reserved for the vertical nav hover indicator."
  }
];
function HoverUtilities() {
  return /* @__PURE__ */ React45.createElement(
    FoundationSection,
    {
      id: "utilities-hover",
      title: "Hover Utilities",
      subtitle: "Tailwind-like hover:bg-* helpers backed by the color token system."
    },
    /* @__PURE__ */ React45.createElement("h4", { className: "font-semibold mgt0" }, "Hover Backgrounds"),
    /* @__PURE__ */ React45.createElement(
      ClassPropertyTable,
      {
        rows: hoverBgUtilities.map(({ className, bg, detail }) => ({
          className,
          property: `background-color: ${bg};${detail ? ` ${detail}` : ""}`
        })),
        columnLabels: ["Utility", "Declaration"]
      }
    ),
    /* @__PURE__ */ React45.createElement("h4", { className: "font-semibold mgt20" }, "Existing Text Hover Helpers"),
    /* @__PURE__ */ React45.createElement(ClassPropertyTable, { rows: hoverFgUtilities, columnLabels: ["Utility", "Declaration"] })
  );
}

// src/Foundation/Utilities/LineClamp.jsx
import React46 from "react";
var lineClampUtilities = [
  { className: ".l-clamp-1", property: "Clamp text to 1 line using -webkit-line-clamp." },
  { className: ".l-clamp-2", property: "Clamp text to 2 lines." },
  { className: ".l-clamp-3", property: "Clamp text to 3 lines." },
  { className: ".l-clamp-4", property: "Clamp text to 4 lines." },
  { className: ".l-clamp-5", property: "Clamp text to 5 lines." },
  { className: ".l-clamp-6", property: "Clamp text to 6 lines." }
];
function LineClampUtilities() {
  return /* @__PURE__ */ React46.createElement(
    FoundationSection,
    {
      id: "utilities-line-clamp",
      title: "Line Clamp Utilities",
      subtitle: "Line clamp utility classes for truncating text to specific line counts."
    },
    /* @__PURE__ */ React46.createElement(ClassPropertyTable, { rows: lineClampUtilities })
  );
}

// src/Foundation/Utilities/BorderUtilities.jsx
import React47 from "react";
var borderUtilities2 = [
  { className: ".bd, .bd-2 \u2026 .bd-5", property: "Apply 1px\u20135px borders using the default border color." },
  { className: ".bd-t / .bd-b / .bd-l / .bd-r / .bd-x / .bd-y", property: "Side-specific border helpers." },
  { className: "Color modifiers", property: ".bd-primary, .bd-dark, .bd-error, etc. swap @default-border-color with semantic tokens." },
  { className: "Style modifiers", property: ".bd-dashed, .bd-dotted, .bd-double." },
  { className: "Logical sides", property: ".bd-s, .bd-e respect writing-mode (LTR/RTL)." },
  { className: "Reset helpers", property: ".bd-none, .bd-t-none, .bd-x-none, etc." }
];
var radiusUtilities = [
  { className: ".rds0 - .rds15", property: "Border radius scale mapped to spacing tokens." },
  { className: ".rds-circle", property: "border-radius: 50%;" },
  { className: ".rds-pill", property: "border-radius: 9999px;" }
];
function BorderUtilities() {
  return /* @__PURE__ */ React47.createElement(
    FoundationSection,
    {
      id: "utilities-border",
      title: "Border Utilities",
      subtitle: "Border utility classes for controlling element borders."
    },
    /* @__PURE__ */ React47.createElement(ClassPropertyTable, { rows: borderUtilities2, columnLabels: ["Utility", "Description"] }),
    /* @__PURE__ */ React47.createElement("h4", { className: "bold-font mgb5 mgt20" }, "Border Radius"),
    /* @__PURE__ */ React47.createElement(ClassPropertyTable, { rows: radiusUtilities, columnLabels: ["Utility", "Description"] })
  );
}

// src/Foundation/Utilities/Shadow.jsx
import React48 from "react";
var shadowUtilities = [
  { className: ".shadow-none", property: "box-shadow: none;" },
  { className: ".shadow-sm", property: "0 1px 2px 0 rgba(0,0,0,0.05);" },
  { className: ".shadow", property: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);" },
  { className: ".shadow-md", property: "0 0 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);" },
  { className: ".shadow-lg", property: "0 0 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);" },
  { className: ".shadow-xl", property: "0 0 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);" },
  { className: ".shadow-2xl", property: "0 0 50px -12px rgba(0,0,0,0.25);" },
  { className: ".shadow-inner", property: "inset 0 2px 4px 0 rgba(0,0,0,0.06);" }
];
function ShadowUtilities() {
  return /* @__PURE__ */ React48.createElement(
    FoundationSection,
    {
      id: "utilities-shadow",
      title: "Shadow Utilities",
      subtitle: "Shadow utility classes for controlling element shadows."
    },
    /* @__PURE__ */ React48.createElement(ClassPropertyTable, { rows: shadowUtilities })
  );
}

// src/Foundation/Utilities/ZIndex.jsx
import React49 from "react";
var zIndexUtilities = [
  { className: ".z-0 / .z-10 / .z-20 / .z-30 / .z-40 / .z-50", property: "Common stacking contexts." },
  { className: ".z-100 / .z-1000 / .z-9999", property: "High priority layers for overlays and portals." },
  { className: ".z-auto", property: "z-index: auto;" }
];
function ZIndexUtilities() {
  return /* @__PURE__ */ React49.createElement(
    FoundationSection,
    {
      id: "utilities-zindex",
      title: "Z-Index Utilities",
      subtitle: "Z-index utility classes for controlling element stacking order."
    },
    /* @__PURE__ */ React49.createElement(ClassPropertyTable, { rows: zIndexUtilities })
  );
}

// src/Foundation/Utilities/Opacity.jsx
import React50 from "react";
var opacityUtilities = [
  { className: ".opacity-0", property: "opacity: 0;" },
  { className: ".opacity-25", property: "opacity: 0.25;" },
  { className: ".opacity-50", property: "opacity: 0.5;" },
  { className: ".opacity-75", property: "opacity: 0.75;" },
  { className: ".opacity-100", property: "opacity: 1;" }
];
function OpacityUtilities() {
  return /* @__PURE__ */ React50.createElement(
    FoundationSection,
    {
      id: "utilities-opacity",
      title: "Opacity Utilities",
      subtitle: "Opacity utility classes for controlling element transparency."
    },
    /* @__PURE__ */ React50.createElement(ClassPropertyTable, { rows: opacityUtilities })
  );
}

// src/Foundation/Utilities/Filter.jsx
import React51 from "react";
var filterUtilities = [
  { className: ".filter-none", property: "filter: none;" },
  { className: ".filter-blur-sm / .filter-blur / .filter-blur-lg", property: "blur filters at different radii." },
  { className: ".brightness-50 / .brightness-75 / .brightness-150 / .brightness-200", property: "Control color brightness." },
  { className: ".contrast-50 / .contrast-100 / .contrast-200", property: "Adjust contrast." },
  { className: ".grayscale / .sepia / .invert / .hue-rotate-90", property: "Special effect filters." },
  { className: ".saturate-50 / .saturate-150 / .saturate-200", property: "Increase or decrease saturation." }
];
function FilterUtilities() {
  return /* @__PURE__ */ React51.createElement(
    FoundationSection,
    {
      id: "utilities-filter",
      title: "Filter Utilities",
      subtitle: "Filter utility classes for applying CSS filters."
    },
    /* @__PURE__ */ React51.createElement(ClassPropertyTable, { rows: filterUtilities })
  );
}

// src/Foundation/Utilities/ObjectFit.jsx
import React52 from "react";
var objectFitUtilities = [
  { className: ".object-contain / .object-cover / .object-fill", property: "object-fit: contain / cover / fill;" },
  { className: ".object-none / .object-scale-down", property: "object-fit: none / scale-down;" },
  { className: ".object-top / .object-center / .object-bottom", property: "object-position: top / center / bottom;" },
  { className: ".object-left / .object-right", property: "object-position: left / right;" },
  { className: ".object-left-top / .object-right-bottom", property: "corner-specific positions." }
];
function ObjectFitUtilities() {
  return /* @__PURE__ */ React52.createElement(
    FoundationSection,
    {
      id: "utilities-object-fit",
      title: "Object Fit Utilities",
      subtitle: "Object fit utility classes for controlling how replaced elements are sized."
    },
    /* @__PURE__ */ React52.createElement(ClassPropertyTable, { rows: objectFitUtilities })
  );
}

// src/Foundation/Utilities/UserSelect.jsx
import React53 from "react";
var userSelectUtilities = [
  { className: ".select-none", property: "user-select: none;" },
  { className: ".select-text", property: "user-select: text;" },
  { className: ".select-all", property: "user-select: all;" },
  { className: ".select-auto", property: "user-select: auto;" }
];
function UserSelectUtilities() {
  return /* @__PURE__ */ React53.createElement(
    FoundationSection,
    {
      id: "utilities-user-select",
      title: "User Select Utilities",
      subtitle: "User select utility classes for controlling text selection behavior."
    },
    /* @__PURE__ */ React53.createElement(ClassPropertyTable, { rows: userSelectUtilities })
  );
}

// src/Foundation/Utilities/PointerEvents.jsx
import React54 from "react";
var pointerUtilities = [
  { className: ".pointer-events-none", property: "pointer-events: none;" },
  { className: ".pointer-events-auto", property: "pointer-events: auto;" }
];
function PointerEventsUtilities() {
  return /* @__PURE__ */ React54.createElement(
    FoundationSection,
    {
      id: "utilities-pointer-events",
      title: "Pointer Events Utilities",
      subtitle: "Pointer events utility classes for controlling pointer event handling."
    },
    /* @__PURE__ */ React54.createElement(ClassPropertyTable, { rows: pointerUtilities })
  );
}

// src/Foundation/Utilities/WhiteSpace.jsx
import React55 from "react";
var whiteSpaceUtilities = [
  { className: ".whitespace-normal", property: "white-space: normal;" },
  { className: ".whitespace-nowrap", property: "white-space: nowrap;" },
  { className: ".whitespace-pre / .whitespace-pre-line / .whitespace-pre-wrap", property: "Preformatted text behaviors." },
  { className: ".whitespace-break-spaces", property: "Preserve spaces and wrap where necessary." }
];
function WhiteSpaceUtilities() {
  return /* @__PURE__ */ React55.createElement(
    FoundationSection,
    {
      id: "utilities-white-space",
      title: "White Space Utilities",
      subtitle: "White space utility classes for controlling how whitespace is handled."
    },
    /* @__PURE__ */ React55.createElement(ClassPropertyTable, { rows: whiteSpaceUtilities })
  );
}

// src/Foundation/Utilities/index.jsx
function Utilities() {
  return /* @__PURE__ */ React56.createElement("div", { className: "ulx-foundation-page" }, /* @__PURE__ */ React56.createElement(UtilitiesNav, null), /* @__PURE__ */ React56.createElement(Space, null), /* @__PURE__ */ React56.createElement(Gap, null), /* @__PURE__ */ React56.createElement(GridUtilities, null), /* @__PURE__ */ React56.createElement(Flex, null), /* @__PURE__ */ React56.createElement(CursorUtilities, null), /* @__PURE__ */ React56.createElement(DisplayUtilities, null), /* @__PURE__ */ React56.createElement(TextAlignUtilities, null), /* @__PURE__ */ React56.createElement(TextTransformUtilities, null), /* @__PURE__ */ React56.createElement(TextDecorationUtilities, null), /* @__PURE__ */ React56.createElement(VerticalAlignUtilities, null), /* @__PURE__ */ React56.createElement(PositionUtilities, null), /* @__PURE__ */ React56.createElement(FloatUtilities, null), /* @__PURE__ */ React56.createElement(ClearUtilities, null), /* @__PURE__ */ React56.createElement(WordBreakUtilities, null), /* @__PURE__ */ React56.createElement(VisibilityUtilities, null), /* @__PURE__ */ React56.createElement(OverflowUtilities, null), /* @__PURE__ */ React56.createElement(ColorUtilities, null), /* @__PURE__ */ React56.createElement(HoverUtilities, null), /* @__PURE__ */ React56.createElement(LineClampUtilities, null), /* @__PURE__ */ React56.createElement(BorderUtilities, null), /* @__PURE__ */ React56.createElement(ShadowUtilities, null), /* @__PURE__ */ React56.createElement(ZIndexUtilities, null), /* @__PURE__ */ React56.createElement(OpacityUtilities, null), /* @__PURE__ */ React56.createElement(FilterUtilities, null), /* @__PURE__ */ React56.createElement(ObjectFitUtilities, null), /* @__PURE__ */ React56.createElement(UserSelectUtilities, null), /* @__PURE__ */ React56.createElement(PointerEventsUtilities, null), /* @__PURE__ */ React56.createElement(WhiteSpaceUtilities, null), /* @__PURE__ */ React56.createElement(SizeUtilities, null), /* @__PURE__ */ React56.createElement(NavLinks, null), /* @__PURE__ */ React56.createElement(UtilitiesOverview, null));
}
export {
  BorderUtilities,
  CSSGridDocs as CSSGrid,
  ClearUtilities,
  ColorUtilities,
  Colors,
  CursorUtilities as Cursor,
  DisplayUtilities as Display,
  FilterUtilities,
  Flex,
  FlexboxDocs as Flexbox,
  FloatUtilities,
  FontFamilies,
  FontSizes,
  FontWeights,
  Gap,
  Grid,
  GridUtilities,
  Headings,
  HoverUtilities,
  LineClampUtilities,
  LineHeights,
  NavLinks,
  ObjectFitUtilities,
  OpacityUtilities,
  OverflowUtilities,
  ColorPalette as Palette,
  PointerEventsUtilities,
  PositionUtilities as Position,
  ShadowUtilities,
  SizeUtilities as Size,
  Space,
  Spacing,
  SpacingScale,
  TextAlignUtilities as TextAlign,
  TextAlignment,
  TextDecorationUtilities as TextDecoration,
  TextTransformUtilities as TextTransform,
  TextTransforms,
  Theming,
  Typography,
  UserSelectUtilities,
  Utilities,
  UtilitiesNav,
  VerticalAlignUtilities as VerticalAlign,
  VisibilityUtilities,
  WhiteSpaceUtilities,
  WordBreakUtilities,
  ZIndexUtilities
};
