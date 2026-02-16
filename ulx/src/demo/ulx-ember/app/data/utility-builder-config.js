/**
 * Utility builder config: which slugs use position options (dependency),
 * which use box-type preview, and generated spacing class lists for padding/margin.
 * Aligns with ULS utill.less (0–25 spacing scale, negative margin, auto).
 */

const SPACING_INDICES = Array.from({ length: 26 }, (_, i) => i);

const PADDING_PREFIXES = ['pd', 'pdt', 'pdb', 'pdl', 'pdr', 'pdx', 'pdy'];
const MARGIN_PREFIXES = ['mg', 'mgt', 'mgb', 'mgl', 'mgr', 'mgx', 'mgy'];

function buildSpacingOptions(prefixes, styleHint) {
  const options = [];
  for (const prefix of prefixes) {
    for (const i of SPACING_INDICES) {
      const value = `${prefix}${i}`;
      options.push({
        value,
        title: `.${value}`,
        description: styleHint(value),
      });
    }
  }
  return options;
}

export const PADDING_OPTIONS = buildSpacingOptions(
  PADDING_PREFIXES,
  () => 'padding',
);
export const MARGIN_OPTIONS = [
  ...buildSpacingOptions(MARGIN_PREFIXES, () => 'margin'),
  ...Array.from({ length: 25 }, (_, i) => {
    const n = i + 1;
    const value = `mgn${n}`;
    return { value, title: `.${value}`, description: 'negative margin' };
  }),
  ...Array.from({ length: 25 }, (_, i) => {
    const n = i + 1;
    return {
      value: `mgyn${n}`,
      title: `.mgyn${n}`,
      description: 'negative margin y',
    };
  }),
  ...Array.from({ length: 25 }, (_, i) => {
    const n = i + 1;
    return {
      value: `mgxn${n}`,
      title: `.mgxn${n}`,
      description: 'negative margin x',
    };
  }),
  { value: 'mg-auto', title: '.mg-auto', description: 'margin: auto' },
  {
    value: 'mgl-auto',
    title: '.mgl-auto',
    description: 'margin-inline-start: auto',
  },
  {
    value: 'mgr-auto',
    title: '.mgr-auto',
    description: 'margin-inline-end: auto',
  },
  { value: 'mgx-auto', title: '.mgx-auto', description: 'margin-inline: auto' },
  { value: 'mgy-auto', title: '.mgy-auto', description: 'margin-block: auto' },
  { value: 'mgt-auto', title: '.mgt-auto', description: 'margin-top: auto' },
  { value: 'mgb-auto', title: '.mgb-auto', description: 'margin-bottom: auto' },
];

/** Slugs that show a position dropdown (relative, absolute, fixed, sticky) and combine with inset classes. */
export const SLUG_WITH_POSITION_OPTIONS = ['top-right-bottom-left'];

export const POSITION_OPTIONS = [
  { value: 'relative', label: 'Relative' },
  { value: 'absolute', label: 'Absolute' },
  { value: 'fixed', label: 'Fixed' },
  { value: 'sticky', label: 'Sticky' },
];

/** Slugs that use box-type preview (outer container + middle layer with utility + inner content). */
export const BOX_LAYOUT_SLUGS = ['padding', 'margin', 'gap', 'space'];
