// AI / consumer guidance
export default {
  component: 'UlxPopup',
  routeKey: 'popup',
  responsibility:
    'Anchored overlay panel positioned relative to a trigger or target. For contextual menus, pickers, and compact panels—not full-page blocking flows.',
  owns: [
    'Positioning relative to @target or <:trigger> with flip/clamp',
    'Open modes: manual, hover, click, hover-click via @interactionMode',
    'Optional default header/footer with title and action buttons',
    'Dismiss on outside click, resize, and Escape when configured',
  ],
  doesNotOwn: [
    'Blocking modal dialogs and focus-trapped confirmations — use UlxModal',
    'Large persistent side panels — use UlxSlidePane',
    'Simple hover hints — use UlxTooltip',
    'Full-page routing or form layout',
  ],
  whenToUse: [
    'Context menus and action panels anchored to a button',
    'Inline pickers and compact filters opened from a control',
    'Hover or click panels that must stay near the trigger',
  ],
  whenNotToUse: [
    {
      instead: 'UlxModal',
      when: 'Blocking confirmation, destructive approve/deny, or multi-step wizard',
    },
    {
      instead: 'UlxSlidePane',
      when: 'Filters, detail views, or forms that need sustained side space',
    },
    {
      instead: 'UlxTooltip',
      when: 'Short non-interactive hint text only',
    },
  ],
  dos: [
    'Control visibility with @visible and sync via @onShow / @onHide',
    'Provide <:trigger> when using hover, click, or hover-click interaction modes',
    'Set @ariaLabel when the panel has no visible title',
    'Use @position classes documented in demos for pointer alignment',
  ],
  donts: [
    'Do not use Popup for full-screen settings or long scrolling forms',
    'Do not stack multiple popups without managing z-index and focus',
    'Do not omit @onShow when using delegated trigger modes (parent must set @visible)',
    'Do not replace Modal for destructive confirmations',
  ],
  antiPatterns: [
    'Using Popup as a mobile full-screen drawer',
    'Opening Popup without a dismiss path when @dismissable is true',
  ],
  keyParamNames: [
    'visible',
    'target',
    'position',
    'interactionMode',
    'onShow',
    'onHide',
    'dismissable',
    'ariaLabel',
  ],
};
