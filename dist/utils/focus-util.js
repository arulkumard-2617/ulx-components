const DEFAULT_FOCUSABLE_SELECTOR = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function getFocusableElements(rootElement, selector = DEFAULT_FOCUSABLE_SELECTOR) {
  if (!rootElement) return [];
  return Array.from(rootElement.querySelectorAll(selector)).filter(element => {
    if (element.getAttribute("aria-hidden") === "true") return false;
    if (element.tabIndex < 0) return false;
    return element.offsetParent !== null;
  });
}
function focusInCollection(elements, {
  forward = true,
  currentTarget = null
} = {}) {
  if (!elements?.length) return;
  if (!currentTarget) {
    (forward ? elements[0] : elements[elements.length - 1]).focus();
    return;
  }
  const currentIndex = elements.indexOf(currentTarget);
  if (currentIndex < 0) {
    (forward ? elements[0] : elements[elements.length - 1]).focus();
    return;
  }
  const nextIndex = forward ? (currentIndex + 1) % elements.length : (currentIndex - 1 + elements.length) % elements.length;
  elements[nextIndex].focus();
}

export { focusInCollection, getFocusableElements };
//# sourceMappingURL=focus-util.js.map
