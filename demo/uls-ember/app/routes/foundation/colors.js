import Route from '@ember/routing/route';

export default class FoundationColorsRoute extends Route {
  model() {
    // Simplified palette groups - matching the PrimeReact structure
    const paletteGroups = [
      {
        title: 'Brand & Actions',
        colors: [
          { label: 'Primary', token: '@primary-color', cssVar: 'var(--uls-primary-color)', detail: 'Primary brand accent & actions' },
          { label: 'Primary Hover', token: '@primary-hover-color', cssVar: 'var(--uls-primary-hover-color)', detail: 'Hover/active state' },
          { label: 'Primary FG', token: '@primary-fg-color', cssVar: 'var(--uls-primary-fg-color)', detail: 'Text on primary surfaces' },
          { label: 'Primary Border', token: '@primary-bdr', cssVar: 'var(--uls-primary-border-color)', detail: 'Primary border color' },
          { label: 'Secondary', token: '@secondary-color', cssVar: 'var(--uls-secondary-color)', detail: 'Secondary accent' },
          { label: 'Secondary Hover', token: '@secondary-hover-color', cssVar: 'var(--uls-secondary-hover-color)', detail: 'Secondary hover state' },
          { label: 'Secondary FG', token: '@secondary-fg-color', cssVar: 'var(--uls-secondary-fg-color)', detail: 'Text on secondary surfaces' }
        ]
      },
      {
        title: 'Semantic States',
        colors: [
          { label: 'Success', token: '@success-color', cssVar: 'var(--uls-success-color)', detail: 'Affirmative actions' },
          { label: 'Success Hover', token: '@success-hover-color', cssVar: 'var(--uls-success-hover-color)', detail: 'Success hover state' },
          { label: 'Success BG', token: '@success-bg-color', cssVar: 'var(--uls-success-bg-color)', detail: 'Success background' },
          { label: 'Warning', token: '@warning-color', cssVar: 'var(--uls-warning-color)', detail: 'Cautionary notices' },
          { label: 'Warning Hover', token: '@warning-hover-color', cssVar: 'var(--uls-warning-hover-color)', detail: 'Warning hover state' },
          { label: 'Warning BG', token: '@warning-bg-color', cssVar: 'var(--uls-warning-bg-color)', detail: 'Warning background' },
          { label: 'Danger', token: '@danger-color', cssVar: 'var(--uls-danger-color)', detail: 'Errors & destructive actions' },
          { label: 'Danger Hover', token: '@danger-hover-color', cssVar: 'var(--uls-danger-hover-color)', detail: 'Danger hover state' },
          { label: 'Danger BG', token: '@danger-bg-color', cssVar: 'var(--uls-danger-bg-color)', detail: 'Danger background' },
          { label: 'Info', token: '@info-color', cssVar: 'var(--uls-info-color)', detail: 'Informational highlights' },
          { label: 'Info Hover', token: '@info-hover-color', cssVar: 'var(--uls-info-hover-color)', detail: 'Info hover state' },
          { label: 'Info BG', token: '@info-bg-color', cssVar: 'var(--uls-info-bg-color)', detail: 'Info background' }
        ]
      },
      {
        title: 'Text Hierarchy',
        colors: [
          { label: 'Primary text', token: '@text-color', cssVar: 'var(--uls-text-color)', detail: 'Default body copy' },
          { label: 'Secondary text', token: '@secondary-text-color', cssVar: 'var(--uls-secondary-text-color)', detail: 'De-emphasized copy' },
          { label: 'Tertiary text', token: '@tertiary-text-color', cssVar: 'var(--uls-tertiary-text-color)', detail: 'Muted text' },
          { label: 'Light text', token: '@light-text-color', cssVar: 'var(--uls-light-text-color)', detail: 'Light text variant' },
          { label: 'Info text', token: '@info-text-color', cssVar: 'var(--uls-info-text-color)', detail: 'Informational text' },
          { label: 'Disabled text', token: '@disabled-fg-color', cssVar: 'var(--uls-disabled-fg-color)', detail: 'Muted/disabled content' }
        ]
      },
      {
        title: 'Background Colors',
        colors: [
          { label: 'Body background', token: '@body-background', cssVar: 'var(--uls-body-bg)', detail: 'App canvas' },
          { label: 'Default background', token: '@default-background', cssVar: 'var(--uls-default-bg)', detail: 'Default surface' },
          { label: 'Secondary background', token: '@secondary-background', cssVar: 'var(--uls-secondary-bg)', detail: 'Secondary surface' },
          { label: 'Header background', token: '@header-background', cssVar: 'var(--uls-header-bg)', detail: 'Header surface' },
          { label: 'Overlay', token: '@overlay-bg', cssVar: 'var(--uls-overlay-bg)', detail: 'Modal overlay' }
        ]
      },
      {
        title: 'Surface Layers',
        colors: [
          { label: 'Layer 1', token: '@bg-layer1', cssVar: 'var(--layer1-bg)', detail: 'Cards / elevated surfaces' },
          { label: 'Layer 2', token: '@bg-layer2', cssVar: 'var(--layer2-bg)', detail: 'Nested surfaces' },
          { label: 'Layer 3', token: '@bg-layer3', cssVar: 'var(--layer3-bg)', detail: 'Overlays / popovers' },
          { label: 'Layer 4', token: '@bg-layer4', cssVar: 'var(--layer4-bg)', detail: 'Deep overlays' }
        ]
      },
      {
        title: 'Border Colors',
        colors: [
          { label: 'Default border', token: '@default-border-color', cssVar: 'var(--uls-default-border-color)', detail: 'Default border' },
          { label: 'Dark border', token: '@dark-border-color', cssVar: 'var(--uls-dark-border-color)', detail: 'Dark border variant' },
          { label: 'Light border', token: '@light-border-color', cssVar: 'var(--uls-light-border-color)', detail: 'Light border variant' },
          { label: 'Error border', token: '@error-border-color', cssVar: 'var(--uls-error-border-color)', detail: 'Error state border' }
        ]
      }
    ];

    return { paletteGroups };
  }
}
