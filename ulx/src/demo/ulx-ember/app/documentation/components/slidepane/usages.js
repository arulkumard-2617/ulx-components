// AI / consumer guidance
export default {
  component: 'UlxSlidePane',
  routeKey: 'slidepane',
  guidanceSubtitle:
    'Best practices, when to use, and accessibility considerations.',
  responsibility:
    'Edge-mounted drawer overlay for filters, detail panels, and secondary workflows. Slides in from left, right, top, or bottom with focus trap and optional footer actions.',
  owns: [
    'Open/close lifecycle with @visible, backdrop, and Escape handling',
    'Default header (title, close, back, maximize) and footer (cancel/done)',
    'Named blocks :head, :body, :footer for custom layout',
    'Nested panes via @onBack for drill-down flows',
  ],
  doesNotOwn: [
    'Small anchored menus near a trigger — use UlxPopup',
    'Centered blocking dialogs — use UlxModal',
    'Non-overlay persistent layout — use page layout or UlxCard',
    'Tooltip-style hints',
  ],
  whenToUse: [
    'Filter panels and list refinement from a table or toolbar',
    'Record detail or edit flows that need more space than a popup',
    'Multi-step side workflows with back navigation between panes',
  ],
  whenNotToUse: [
    {
      instead: 'UlxModal',
      when: 'Short blocking confirm/cancel centered on the viewport',
    },
    {
      instead: 'UlxPopup',
      when: 'Compact menu or picker anchored to one button',
    },
    {
      instead: 'UlxTooltip',
      when: 'Non-interactive help text on hover',
    },
  ],
  dos: [
    'Bind @visible to application state and close via @onHide',
    'Wire trigger with aria-controls pointing to pane id and aria-expanded',
    'Use @onDone with async handlers when submit must finish before close',
    'Use <:body> for scrollable content; customize <:head> / <:footer> when defaults are not enough',
  ],
  donts: [
    'Do not open multiple slide panes without a clear stacking story',
    'Do not use for simple dropdown option lists — use UlxDropdown or UlxPopup',
    'Do not skip focus management by rendering pane content outside the component',
    'Do not use as a permanent app shell navigation drawer without explicit product requirement',
  ],
  antiPatterns: [
    'Replacing Modal for yes/no destructive confirm',
    'Embedding an entire app settings area in a shallow popup instead of SlidePane or a route',
  ],
  keyParamNames: [
    'visible',
    'position',
    'title',
    'size',
    'onHide',
    'onDone',
    'onCancel',
    'overlay',
    'closeOnBackdrop',
  ],
};
