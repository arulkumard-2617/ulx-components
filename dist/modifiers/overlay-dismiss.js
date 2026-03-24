import { modifier } from 'ember-modifier';
import { isTopModalInstance, isEscapeKey, isPointerOutsideRootAndPanel, isPointerOutsideAnchoredOverlay, isPointerOutsideElement } from '../utils/overlay-helpers.js';

/**
 * Document-level outside click and Escape dismissal for anchored overlays (popup, dropdown, etc.).
 *
 * @param {HTMLElement} element - Root element to test for outside clicks (e.g. trigger wrapper or overlay root)
 * @param {Array} [positional] - [when] master flag; overridden by whenClick / whenEscape when passed
 * @param {Object} [named]
 * @param {boolean} [named.whenClick] - When true, outside-click listener is active
 * @param {boolean} [named.whenEscape] - When true, Escape listener is active
 * @param {Function} named.onClose - Callback (event?) when dismissing
 * @param {HTMLElement | null} [named.panel] - Portaled panel (dropdown / multiselect)
 * @param {HTMLElement | null} [named.target] - Anchor target (popup / tieredmenu)
 * @param {'rootPanel'|'anchored'|'rootOnly'} [named.dismissVariant='anchored'] - Outside-click geometry
 * @param {boolean} [named.defer=false] - When deferClick/deferEscape omitted, defers both (open-click race)
 * @param {boolean} [named.deferClick] - Override click deferral (split-button: true with deferEscape false)
 * @param {boolean} [named.deferEscape] - Override Escape deferral
 * @param {boolean} [named.closeOnClickOutside=true]
 * @param {boolean} [named.closeOnEscape=true]
 * @param {'popup'|'tooltip'|'minimal'} [named.escapeEventMode='popup'] - How Escape mutates the event (popup default; tooltip/minimal match prior components)
 * @param {boolean} [named.escapeUseCapture=true] - Use capture phase for keydown (popup); false matches tooltip / split-button
 * @param {boolean} [named.strictEscapeKey=false] - When true, only KeyboardEvent.key === 'Escape' (tooltip / split-button)
 * @param {boolean} [named.useTopModalGuard=false] - Respect modal stack top instance
 * @param {object} [named.componentForStack] - Component instance with modalStack (when useTopModalGuard)
 */
var overlayDismiss = modifier((element, [when], named = {}) => {
  const {
    whenClick,
    whenEscape,
    onClose,
    panel = null,
    target = null,
    dismissVariant = 'anchored',
    defer = false,
    deferClick,
    deferEscape,
    closeOnClickOutside = true,
    closeOnEscape = true,
    escapeEventMode = 'popup',
    escapeUseCapture = true,
    strictEscapeKey = false,
    useTopModalGuard = false,
    componentForStack = null
  } = named;
  const effClick = whenClick ?? when;
  const effEscape = whenEscape ?? when;
  const wantsClick = closeOnClickOutside && Boolean(effClick);
  const wantsEscape = closeOnEscape && Boolean(effEscape);
  if (!wantsClick && !wantsEscape || typeof onClose !== 'function') {
    return () => {};
  }
  const deferClickFinal = deferClick !== undefined ? deferClick : defer;
  const deferEscapeFinal = deferEscape !== undefined ? deferEscape : defer;
  let clickListener = null;
  let keyListener = null;
  let clickAttachTimer = null;
  let escapeAttachTimer = null;
  const isOutsideForClick = event => {
    if (dismissVariant === 'rootPanel') {
      return isPointerOutsideRootAndPanel(element, event, panel);
    }
    if (dismissVariant === 'anchored') {
      return isPointerOutsideAnchoredOverlay(element, target, event);
    }
    return isPointerOutsideElement(element, event);
  };
  const addClickListener = () => {
    if (!wantsClick || clickListener) return;
    clickListener = event => {
      if (useTopModalGuard && componentForStack && !isTopModalInstance(componentForStack)) {
        return;
      }
      if (!isOutsideForClick(event)) return;
      onClose(event);
    };
    document.addEventListener('click', clickListener, true);
  };
  const addEscapeListener = () => {
    if (!wantsEscape || keyListener) return;
    keyListener = event => {
      const isEsc = strictEscapeKey ? event.key === 'Escape' : isEscapeKey(event.key);
      if (!isEsc) return;
      if (useTopModalGuard && componentForStack && !isTopModalInstance(componentForStack)) {
        return;
      }
      if (escapeEventMode === 'tooltip') {
        event.preventDefault();
        event.stopImmediatePropagation();
      } else if (escapeEventMode === 'minimal') {
        event.preventDefault();
      } else {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
      onClose(event);
    };
    document.addEventListener('keydown', keyListener, escapeUseCapture);
  };
  if (wantsClick) {
    if (deferClickFinal) {
      clickAttachTimer = setTimeout(() => {
        clickAttachTimer = null;
        addClickListener();
      }, 0);
    } else {
      addClickListener();
    }
  }
  if (wantsEscape) {
    if (deferEscapeFinal) {
      escapeAttachTimer = setTimeout(() => {
        escapeAttachTimer = null;
        addEscapeListener();
      }, 0);
    } else {
      addEscapeListener();
    }
  }
  return () => {
    if (clickAttachTimer != null) {
      clearTimeout(clickAttachTimer);
    }
    if (escapeAttachTimer != null) {
      clearTimeout(escapeAttachTimer);
    }
    if (clickListener) {
      document.removeEventListener('click', clickListener, true);
    }
    if (keyListener) {
      document.removeEventListener('keydown', keyListener, escapeUseCapture);
    }
  };
});

export { overlayDismiss as default };
//# sourceMappingURL=overlay-dismiss.js.map
