// Matches react-transition-group CSSTransition semantics:
// enter-active includes both "enter" and "enter-active"; exit-active likewise.
const TRANSITION_PHASE_CLASSES = {
  enter: ['enter'],
  'enter-active': ['enter', 'enter-active'],
  'enter-done': ['enter-done'],
  exit: ['exit'],
  'exit-active': ['exit', 'exit-active'],
  'exit-done': ['exit-done']
};

/**
 * @param {string[]} parts
 * @param {string|null|undefined} effectivePhase
 */
function appendTransitionPhaseClasses(parts, effectivePhase) {
  const extra = effectivePhase ? TRANSITION_PHASE_CLASSES[effectivePhase] : null;
  extra?.forEach(c => parts.push(c));
}

export { appendTransitionPhaseClasses };
//# sourceMappingURL=panelmenu-transition.js.map
