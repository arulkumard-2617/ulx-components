/**
 * Dispatches a real MouseEvent click (unlike @ember/test-helpers `click`,
 * which skips disabled elements and does not return the event).
 *
 * Use when you need client coordinates, `defaultPrevented`, or to exercise
 * handlers on disabled / non-interactive elements.
 *
 * @param {Element} element
 * @param {MouseEventInit} [options]
 * @returns {MouseEvent}
 */
export function dispatchClick(element, options = {}) {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    clientX: 24,
    clientY: 16,
    ...options,
  });

  element.dispatchEvent(event);
  return event;
}
