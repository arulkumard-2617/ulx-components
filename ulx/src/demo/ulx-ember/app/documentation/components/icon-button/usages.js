// AI / consumer guidance — single source for Usages section
export default {
  component: 'UlxIconButton',
  routeKey: 'icon-button',
  summary:
    'Icon-only or icon-with-label actions on UlxButton — toolbars, table rows, and compact controls.',
  responsibility:
    'Wrapper around UlxButton that places an icon or loading spinner in the prefix/suffix affix slots. Use when every action needs a leading or trailing icon, or when the control is icon-only.',
  owns: [
    'Icon affix via @iconLeft (prefix) or @iconRight (suffix); if both are set, @iconRight wins',
    'Optional @label; omitting it applies icon-only styling (icon-only class)',
    'Custom affix graphic via the <:icon> named block (font icons use @iconLeft / @iconRight + @iconComponentClass)',
    '@loading — spinner replaces the icon in the affix while the button stays disabled',
    'UlxButton passthrough: @variant, @size, @outlined, @text, @pilled, @href, @fluid, @disabled, @onClick, and ...attributes'
  ],
  doesNotOwn: [
    'Label-only actions with no icon — use UlxButton',
    'UlxButton @icon / @iconPos — use @iconLeft, @iconRight, or <:icon> on UlxIconButton instead',
    'UlxButton <:prefix> / <:suffix> blocks — not exposed; affix is owned by UlxIconButton',
    'Action menus and split primary + dropdown — use UlxActionMenu or UlxSplitButton',
    'Form labels, validation, and field layout — compose inside UlxField / UlxForm'
  ],
  whenToUse: [
    'Toolbar, table row, or card header actions where an icon is always present',
    'Icon-only controls when space is tight (set aria-label or use a short @label)',
    'Labeled actions with a leading or trailing icon (save, edit, delete)',
    'Link-styled actions with an icon (@href + link variant)',
    'Async actions that need a spinner in the icon area (@loading)'
  ],
  whenNotToUse: [
    {
      instead: 'UlxButton',
      when: 'No icon is required, or you only need @icon / @iconPos on a standard button'
    },
    {
      instead: 'UlxSplitButton',
      when: 'One default action plus a menu of related secondary actions'
    },
    {
      instead: 'UlxActionMenu',
      when: 'A single trigger opens a list of actions (overflow / kebab menu)'
    },
    {
      instead: 'LinkTo',
      when: 'In-app route navigation without button or icon-button semantics'
    }
  ],
  dos: [
    'Provide aria-label via ...attributes when @label is omitted (icon-only)',
    'Pass @iconComponentClass (e.g. bs-icons1) when using font icon names from that family',
    'Use @iconLeft for most actions; use @iconRight only when the icon must trail the label',
    'Use @loading for async work so feedback appears in the icon affix',
    'Use <:icon> when the affix is not a standard UlxIcon font glyph',
    'Match @variant and visual flags (@outlined, @text, @pilled) to the action intent, same as UlxButton'
  ],
  donts: [
    'Do not ship icon-only buttons without an accessible name (aria-label or visible @label)',
    'Do not set both @iconLeft and @iconRight unless you intend @iconRight to take precedence',
    'Do not nest buttons, links, or inputs inside UlxIconButton',
    'Do not use @fluid icon-only buttons as full-width primary form submits',
    'Do not stack multiple primary-variant icon-only buttons in one action group',
    'Do not use UlxButton @icon or <:prefix> / <:suffix> — they are not wired on this component'
  ],
  antiPatterns: [
    'Using UlxIconButton without @iconLeft, @iconRight, <:icon>, or @loading (no affix content)',
    'Full-width @fluid icon-only control as the main form submit',
    'Replacing UlxButton only to avoid a visible label when text is required for clarity',
    'Several primary-variant icon-only buttons competing in the same toolbar or footer'
  ],
  keyParamNames: [
    'label',
    'iconLeft',
    'iconRight',
    'iconComponentClass',
    'iconSize',
    'loading',
    'variant',
    'outlined',
    'text',
    'pilled',
    'size',
    'disabled',
    'href'
  ]
};
