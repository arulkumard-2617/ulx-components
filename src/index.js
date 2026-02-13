// Addon entry point

// ── Components ──────────────────────────────────────────────
export { default as UlxIcon } from './components/ulx-icon.js';
export { default as UlxButton } from './components/ulx-button.js';
export { default as UlxButtonGroup } from './components/ulx-button-group.js';
export { default as UlxSplitButton } from './components/ulx-split-button.js';
export { default as UlxProgressSpinner } from './components/ulx-progressspinner.js';
export { default as UlxProgressBar } from './components/ulx-progressbar.js';
export { default as UlxTieredmenu } from './components/ulx-tieredmenu.js';
export { default as UlxToast } from './components/ulx-toast.js';
export { default as UlxInput } from './components/ulx-input.js';
export { default as UlxTextarea } from './components/ulx-textarea.js';
export { default as UlxIconInput } from './components/ulx-icon-input.js';
export { default as UlxCheckbox } from './components/ulx-checkbox.js';
export { default as UlxRadio } from './components/ulx-radio.js';
export { default as UlxTag } from './components/ulx-tag.js';
export { default as UlxBadge } from './components/ulx-badge.js';
export { default as UlxAvatar } from './components/ulx-avatar.js';
export { default as UlxAvatarGroup } from './components/ulx-avatar-group.js';
export { default as UlxTabmenu } from './components/ulx-tabmenu.js';
export { default as UlxSegment } from './components/ulx-segment.js';
export { default as UlxSegmentsGroup } from './components/ulx-segments-group.js';
export { default as UlxModal } from './components/ulx-modal.js';

// ── i18n utilities ──────────────────────────────────────────
export { t, tSafe, setLocale, getLocale, addTranslations, hasTranslation } from './utils/i18n.js';

// ── i18n template helpers ───────────────────────────────────
export { default as tHelper } from './helpers/t.js';
export { default as tSafeHelper } from './helpers/t-safe.js';

// Export services
export { default as ModalStackService } from './services/modal-stack.js';
