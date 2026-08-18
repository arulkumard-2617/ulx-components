// ==========================================================================
// COLOR CONTEXT DOCUMENTATION SCHEMA
// ==========================================================================
// Mirrors uls-styles/less/colors/ families and modifiers.
// Each swatch row uses w-100 h-100 (100px) for consistent preview sizing.

const swatchBase = 'w-60 h-60 rounded flex items-center justify-center';

const colorFamilies = [
  { family: 'primary', sectionNav: 'Primary', layerCount: 4 },
  { family: 'red', sectionNav: 'Red', layerCount: 3 },
  { family: 'orange', sectionNav: 'Orange', layerCount: 3 },
  { family: 'green', sectionNav: 'Green', layerCount: 3 },
  { family: 'blue', sectionNav: 'Blue', layerCount: 3 },
  { family: 'purple', sectionNav: 'Purple', layerCount: 4 },
  { family: 'gold', sectionNav: 'Gold', layerCount: 3 },
  { family: 'magenta', sectionNav: 'Magenta', layerCount: 3 },
  { family: 'black', sectionNav: 'Black', layerCount: 4 }
];

const semanticColorFamilies = [
  { family: 'success', sectionNav: 'Success', layerCount: 1, unnumberedLayer: true },
  { family: 'warning', sectionNav: 'Warning', layerCount: 1, unnumberedLayer: true },
  { family: 'danger', sectionNav: 'Danger', layerCount: 1, unnumberedLayer: true },
  { family: 'info', sectionNav: 'Info', layerCount: 1, unnumberedLayer: true },
  { family: 'secondary', sectionNav: 'Secondary', layerCount: 1, unnumberedLayer: true }
];

const otherColors = [
  { name: 'salmon-red' },
  { name: 'nebula-blue' },
  { name: 'jungle-green' },
  { name: 'cyber-yellow' },
  { name: 'cerise-pink' },
  { name: 'royal-violet' },
  { name: 'turquoise-green' },
  { name: 'medium-orchid' },
  { name: 'apricot-orange' },
  { name: 'not-blue' },
  { name: 'just-grey', hasLayer: false },
  { name: 'bs-grey' },
  { name: 'grass-green' },
  { name: 'sandal-yellow' },
  { name: 'lomo-blue' },
  { name: 'candy-orange' },
  { name: 'dairy-violet' },
  { name: 'radical-red' }
];

function layerClassName(family, layer, unnumberedLayer = false) {
  if (unnumberedLayer) {
    return `color-${family}-layer`;
  }

  return `color-${family}-layer${layer}`;
}

function layerSwatches(family, layerCount, modifier = '', unnumberedLayer = false) {
  const suffix = modifier ? ` ${modifier}` : '';

  return Array.from({ length: layerCount }, (_, index) => {
    const layer = index + 1;
    const className = `${layerClassName(family, layer, unnumberedLayer)}${suffix}`;

    return {
      label: className,
      classes: `${swatchBase} ${className}`,
      sampleText: 'Aa'
    };
  });
}

function borderStartClass(family) {
  return family === 'primary'
    ? 'primary-border-start'
    : `${family}-border-start`;
}

function outlinedSolidSwatches(family) {
  return [
    {
      label: `color-${family} outlined`,
      classes: `${swatchBase} color-${family} outlined`,
      sampleText: 'Aa'
    },
    {
      label: `color-${family} outlined fg-${family}`,
      classes: `${swatchBase} color-${family} outlined fg-${family}`,
      sampleText: 'Aa'
    }
  ];
}

function colorFamilySection({ family, sectionNav, layerCount, unnumberedLayer = false }) {
  const borderStart = borderStartClass(family);
  const layerTitle = layerCount === 1 && unnumberedLayer ? 'Layer' : 'Layers';

  return {
    id: `color-context-${family}`,
    sectionNav,
    kind: 'swatches',
    subtitle: `Solid ${sectionNav.toLowerCase()} surface, tinted layers, and modifiers for bordered (solid / dashed / dotted), transparent outlined strokes (default text-color; optional fg-*), and inline-start accent stripes.`,
    groups: [
      {
        title: 'Solid',
        rows: [
          {
            label: `color-${family}`,
            classes: `${swatchBase} color-${family}`,
            sampleText: 'Aa'
          }
        ]
      },
      {
        title: layerTitle,
        rows: layerSwatches(family, layerCount, '', unnumberedLayer)
      },
      {
        title: 'Bordered',
        rows: layerSwatches(family, layerCount, 'bordered', unnumberedLayer)
      },
      {
        title: 'Bordered dashed',
        rows: layerSwatches(family, layerCount, 'bordered dashed', unnumberedLayer)
      },
      {
        title: 'Bordered dotted',
        rows: layerSwatches(family, layerCount, 'bordered dotted', unnumberedLayer)
      },
      {
        title: 'Outlined',
        rows: outlinedSolidSwatches(family)
      },
      {
        title: 'Border start',
        rows: layerSwatches(family, layerCount, borderStart, unnumberedLayer)
      }
    ]
  };
}

function otherSolidSwatches() {
  return otherColors.map(({ name }) => ({
    label: `color-${name}`,
    classes: `${swatchBase} color-${name}`,
    sampleText: 'Aa'
  }));
}

function otherLightSwatches(getModifier = () => '') {
  return otherColors
    .filter(({ hasLayer = true }) => hasLayer)
    .map(({ name }) => {
      const modifier = getModifier(name);
      const suffix = modifier ? ` ${modifier}` : '';
      const className = `color-light-${name}${suffix}`;

      return {
        label: className,
        classes: `${swatchBase} ${className}`,
        sampleText: 'Aa'
      };
    });
}

function statusSwatches(names, prefix = 'color') {
  return names.map((name) => {
    const className = `${prefix}-${name}`;

    return {
      label: className,
      classes: `${swatchBase} ${className}`,
      sampleText: 'Aa'
    };
  });
}

const statusGroups = [
  {
    title: 'Session status',
    names: ['running', 'completed', 'published', 'draft', 'cancelled']
  },
  {
    title: 'User check-in',
    names: ['user-in', 'user-out', 'user-yet-in', 'user-attended']
  },
  {
    title: 'Event type',
    names: ['offline', 'hybrid', 'online']
  },
  {
    title: 'Generic',
    names: ['session-track', 'shortcut-key']
  }
];

function statusSemanticForegroundSwatches(names) {
  return names.map((name) => ({
    label: `color-${name} fg-${name}`,
    classes: `${swatchBase} color-${name} fg-${name}`,
    sampleText: 'Aa'
  }));
}

function statusOutlinedSwatches(names) {
  return names.flatMap((name) => [
    {
      label: `color-${name} outlined`,
      classes: `${swatchBase} color-${name} outlined`,
      sampleText: 'Aa'
    },
    {
      label: `color-${name} outlined fg-${name}`,
      classes: `${swatchBase} color-${name} outlined fg-${name}`,
      sampleText: 'Aa'
    }
  ]);
}

const sessionStatusNames = [
  'running',
  'completed',
  'published',
  'draft',
  'cancelled'
];

function statusSection() {
  return {
    id: 'color-context-status',
    sectionNav: 'Status',
    kind: 'swatches',
    subtitle:
      'Status surfaces with default foreground (static-black for running, published, completed, draft; text-color for others). Pair fg-* with color-* for semantic text. Outlined uses text-color by default; add fg-* for chromatic text.',
    groups: [
      ...statusGroups.map(({ title, names }) => ({
        title: `Surface — ${title}`,
        rows: statusSwatches(names, 'color')
      })),
      {
        title: 'Semantic foreground — Session status',
        rows: statusSemanticForegroundSwatches(sessionStatusNames)
      },
      {
        title: 'Outlined — Session status',
        rows: statusOutlinedSwatches(sessionStatusNames)
      }
    ]
  };
}

function otherOutlinedSwatches() {
  return otherColors.flatMap(({ name }) => [
    {
      label: `color-${name} outlined`,
      classes: `${swatchBase} color-${name} outlined`,
      sampleText: 'Aa'
    },
    {
      label: `color-${name} outlined fg-${name}`,
      classes: `${swatchBase} color-${name} outlined fg-${name}`,
      sampleText: 'Aa'
    }
  ]);
}

function othersSection() {
  return {
    id: 'color-context-others',
    sectionNav: 'Others',
    kind: 'swatches',
    subtitle:
      'Decorative accent colors with a solid surface and a light variant. Pair fg-* with color-* or color-light-* for semantic foreground. Outlined uses text-color by default; add fg-* for chromatic text. Bordered (solid / dashed / dotted) and border-start modifiers apply to light surfaces only.',
    groups: [
      {
        title: 'Solid',
        rows: otherSolidSwatches()
      },
      {
        title: 'Light',
        rows: otherLightSwatches()
      },
      {
        title: 'Foreground',
        rows: otherColors
          .filter(({ hasLayer = true }) => hasLayer)
          .map(({ name }) => ({
            label: `color-light-${name} fg-${name}`,
            classes: `${swatchBase} color-light-${name} fg-${name}`,
            sampleText: 'Aa'
          }))
      },
      {
        title: 'Outlined',
        rows: otherOutlinedSwatches()
      },
      {
        title: 'Bordered',
        rows: otherLightSwatches(() => 'bordered')
      },
      {
        title: 'Bordered dashed',
        rows: otherLightSwatches(() => 'bordered dashed')
      },
      {
        title: 'Bordered dotted',
        rows: otherLightSwatches(() => 'bordered dotted')
      },
      {
        title: 'Border start',
        rows: otherLightSwatches((name) => `${name}-border-start`)
      }
    ]
  };
}

export const colorContextSchema = {
  title: 'Color context',
  description:
    'Composable surface classes from uls-styles/less/colors. Each class binds surface role tokens (--surface-bg, --surface-fg, --surface-border, --surface-border-accent) for coordinated backgrounds, text, and borders. color-* outlined uses text-color by default; add fg-* for chromatic text. Pair bordered with dashed or dotted for border-style (e.g. color-blue-layer1 bordered dashed).',

  sections: [
    ...colorFamilies.map(colorFamilySection),
    ...semanticColorFamilies.map(colorFamilySection),
    statusSection(),
    othersSection()
  ]
};

export default colorContextSchema;
