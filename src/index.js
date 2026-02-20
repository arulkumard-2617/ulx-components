// Addon entry point

// ── Components ──
// Elements
export { default as UlxIcon } from './components/elements/ulx-icon/index.gjs';
export { default as UlxButton } from './components/elements/ulx-button/index.gjs';
export { default as UlxInput } from './components/elements/ulx-input/index.gjs';
export { default as UlxTextarea } from './components/elements/ulx-textarea/index.gjs';
export { default as UlxIconInput } from './components/elements/ulx-icon-input/index.gjs';
export { default as UlxCheckbox } from './components/elements/ulx-checkbox/index.gjs';
export { default as UlxRadio } from './components/elements/ulx-radio/index.gjs';
export { default as UlxTag } from './components/elements/ulx-tag/index.gjs';
export { default as UlxBadge } from './components/elements/ulx-badge/index.gjs';
export { default as UlxAvatar } from './components/elements/ulx-avatar/index.gjs';
export { default as UlxAvatarGroup } from './components/elements/ulx-avatar-group/index.gjs';
export { default as UlxProgressSpinner } from './components/elements/ulx-progressspinner/index.gjs';
export { default as UlxProgressBar } from './components/elements/ulx-progress-bar/index.gjs';
export { default as UlxSplitButton } from './components/elements/ulx-split-button/index.gjs';
export { default as UlxTristateCheckbox } from './components/elements/ulx-tristate-checkbox/index.gjs';
export { default as UlxDropdown } from './components/elements/ulx-dropdown/index.gjs';
// Collections
export { default as UlxButtonGroup } from './components/collections/ulx-button-group/index.gjs';
export { default as UlxForm } from './components/collections/ulx-form/index.gjs';
export { default as UlxTabmenu } from './components/collections/ulx-tabmenu/index.gjs';
export { default as UlxSegment } from './components/collections/ulx-segment/index.gjs';
export { default as UlxSegmentsGroup } from './components/collections/ulx-segments-group/index.gjs';
export { default as UlxOptionSegment } from './components/collections/ulx-option-segment/index.gjs';
// Modules
export { default as UlxModal } from './components/modules/ulx-modal/index.gjs';
export { default as UlxSlidePane } from './components/modules/ulx-slide-pane/index.gjs';
export { default as UlxPopup } from './components/modules/ulx-popup/index.gjs';
export { default as UlxTooltip } from './components/modules/ulx-tooltip/index.gjs';
export { default as UlxTieredmenu } from './components/modules/ulx-tieredmenu/index.gjs';
export { default as UlxToast } from './components/modules/ulx-toast/index.gjs';

// ── i18n utilities ──────────────────────────────────────────
export { t, tSafe, setLocale, getLocale, addTranslations, hasTranslation } from './utils/i18n.js';

// ── i18n template helpers ───────────────────────────────────
export { default as tHelper } from './helpers/t.js';
export { default as tSafeHelper } from './helpers/t-safe.js';

// Export services
export { default as ModalStackService } from './services/modal-stack.js';

// Modifiers
export { default as tooltip } from './modifiers/tooltip.js';
