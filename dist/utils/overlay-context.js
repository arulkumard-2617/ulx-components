import { applyBodyAbsoluteFromViewport } from './overlay-helpers.js';

function isBrowserWindow(value) {
  return typeof window !== 'undefined' && value === window;
}
function isElement(value) {
  return typeof HTMLElement !== 'undefined' && value instanceof HTMLElement;
}
function resolveTarget(value, options = {}) {
  const {
    defaultValue = null,
    allowWindow = false,
    allowSelf = false,
    emptyStringValue = defaultValue
  } = options;
  if (value === undefined || value === null) return defaultValue;
  if (allowSelf && value === 'self') return null;
  if (value === 'body') return typeof document !== 'undefined' ? document.body : null;
  if (allowWindow && value === 'window') return typeof window !== 'undefined' ? window : null;
  if (typeof value === 'function') {
    try {
      const resolved = value();
      return resolveTarget(resolved, options);
    } catch {
      return defaultValue;
    }
  }
  if (typeof value === 'string') {
    const selector = value.trim();
    if (!selector.length) return emptyStringValue;
    if (typeof document === 'undefined') return defaultValue;
    return document.querySelector(selector) ?? defaultValue;
  }
  if (allowWindow && isBrowserWindow(value)) return value;
  return isElement(value) ? value : defaultValue;
}
function resolveOverlayContext(value) {
  return resolveTarget(value, {
    defaultValue: null,
    allowSelf: true,
    emptyStringValue: null
  });
}
function resolveOverlayBoundary(value) {
  return resolveTarget(value, {
    defaultValue: typeof window !== 'undefined' ? window : null,
    allowWindow: true
  });
}
function resolveOverlayScrollContext(value) {
  return resolveTarget(value, {
    defaultValue: typeof window !== 'undefined' ? window : null,
    allowWindow: true
  });
}
function buildOverlayCoordinateApi(contextElement, positioningElement = null) {
  const isBody = typeof document !== 'undefined' && contextElement === document.body;
  const isSelf = !contextElement;
  const selfOffsetParent = isSelf ? positioningElement?.offsetParent ?? null : null;
  const containerElement = !isSelf && !isBody ? contextElement : selfOffsetParent;
  const containerRect = containerElement?.getBoundingClientRect?.() ?? null;
  const usesDocumentCoordinates = isBody || isSelf && (!containerElement || containerElement === document.body || containerElement === document.documentElement);
  const toOverlayPoint = (left, top) => {
    if (usesDocumentCoordinates || !containerElement || !containerRect) return {
      left,
      top
    };
    return {
      left: left - containerRect.left + containerElement.scrollLeft,
      top: top - containerRect.top + containerElement.scrollTop
    };
  };
  const fromViewportRect = rect => {
    const topLeft = toOverlayPoint(rect.left, rect.top);
    const bottomRight = toOverlayPoint(rect.right, rect.bottom);
    return {
      top: topLeft.top,
      left: topLeft.left,
      right: bottomRight.left,
      bottom: bottomRight.top,
      width: rect.width,
      height: rect.height
    };
  };
  const applyPosition = (element, top, left) => {
    if (!element) return;
    if (usesDocumentCoordinates) {
      applyBodyAbsoluteFromViewport(element, top, left);
      return;
    }
    element.style.position = 'absolute';
    element.style.top = `${top}px`;
    element.style.left = `${left}px`;
    element.style.right = 'auto';
    element.style.bottom = 'auto';
    element.style.margin = '0';
  };
  return {
    isBody,
    isSelf,
    containerElement,
    usesDocumentCoordinates,
    toOverlayPoint,
    fromViewportRect,
    applyPosition
  };
}
function getBoundaryRectInOverlaySpace(boundaryTarget, coordinateApi) {
  if (!coordinateApi) return null;
  if (isBrowserWindow(boundaryTarget) || !boundaryTarget) {
    return coordinateApi.fromViewportRect({
      top: 0,
      left: 0,
      right: typeof window !== 'undefined' ? window.innerWidth : 0,
      bottom: typeof window !== 'undefined' ? window.innerHeight : 0,
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
    });
  }
  if (!isElement(boundaryTarget)) return null;
  return coordinateApi.fromViewportRect(boundaryTarget.getBoundingClientRect());
}
function clampOverlayValue(value, min, max) {
  if (!Number.isFinite(value)) return min;
  if (!Number.isFinite(min) || !Number.isFinite(max)) return value;
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

export { buildOverlayCoordinateApi, clampOverlayValue, getBoundaryRectInOverlaySpace, resolveOverlayBoundary, resolveOverlayContext, resolveOverlayScrollContext };
//# sourceMappingURL=overlay-context.js.map
