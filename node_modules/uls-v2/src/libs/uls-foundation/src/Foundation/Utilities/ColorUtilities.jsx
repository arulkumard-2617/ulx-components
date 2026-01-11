import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

// Helper function to map class names to CSS custom properties
const getColorForClass = (className) => {
  // Remove leading dot if present
  const classKey = className.replace(/^\./, '');
  
  // Map class names to CSS custom properties
  const colorMap = {
    'bg-primary': 'var(--uls-primary-color)',
    'bg-primary-hover': 'var(--uls-primary-hover-color)',
    'bg-primary-disabled': 'var(--uls-primary-disabled-color)',
    'bg-success': 'var(--uls-success-color, #22c55e)',
    'bg-success-soft': 'var(--uls-success-bg-color, #dcfce7)',
    'bg-danger': 'var(--uls-danger-color, #ef4444)',
    'bg-danger-soft': 'var(--uls-danger-bg-color, #fff1f0)',
    'bg-info': 'var(--uls-info-color, #3b82f6)',
    'bg-info-soft': 'var(--uls-info-bg-color, #e6f7ff)',
    'bg-link': 'var(--uls-link-bg-color)',
    'bg-link-invert': 'var(--uls-link-invert-bg-color)',
    'bg-body': 'var(--uls-body-bg)',
    'bg-default': 'var(--uls-default-bg)',
    'bg-secondary': 'var(--uls-secondary-bg)',
    'bg-overlay': 'var(--uls-overlay-bg)',
    'bg-overlay-white': 'var(--uls-overlay-bg-white)',
    'bg-overlay-dark': 'var(--uls-dark-overlay-bg)',
    'bg-overlay-light': 'var(--overlay-light, rgba(0, 0, 0, .1))',
    'bg-header': 'var(--uls-header-bg)',
    'bg-dimmer': 'var(--uls-dimmer-bg, rgba(0, 0, 0, .7))',
    'bg-topbar': 'var(--uls-topbar-bg-color)',
    'bg-layer1': 'color-mix(in srgb, var(--layer1-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-17))',
    'bg-layer2': 'color-mix(in srgb, var(--layer2-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-10))',
    'bg-layer3': 'color-mix(in srgb, var(--layer3-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-10))',
    'bg-layer4': 'color-mix(in srgb, var(--layer4-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-10))',
    'bg-layer5': 'color-mix(in srgb, var(--layer5-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-10))',
    'bg-layer6': 'color-mix(in srgb, var(--layer6-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-10))',
    'bg-primary-layer1': 'color-mix(in srgb, var(--primary-layer1-bg), var(--uls-primary-color) var(--uls-contrast-intensity-17))',
    'bg-primary-layer2': 'color-mix(in srgb, var(--primary-layer2-bg), var(--uls-primary-color) var(--uls-contrast-intensity-17))',
    'bg-primary-layer3': 'color-mix(in srgb, var(--primary-layer3-bg), var(--uls-primary-color) var(--uls-contrast-intensity-10))',
    'bg-primary-layer4': 'color-mix(in srgb, var(--primary-layer4-bg), var(--uls-primary-color) var(--uls-contrast-intensity-10))',
    'bg-primary-layerD1': 'var(--primary-layerD1-bg)',
    'bg-primary-layerD2': 'var(--primary-layerD2-bg)',
    'bg-blue-layer1': 'color-mix(in srgb, var(--blue-layer1-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-10))',
    'bg-blue-layer2': 'color-mix(in srgb, var(--blue-layer2-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-10))',
    'bg-hover-default': 'var(--uls-default-hover-bg)',
    'bg-nav': 'var(--uls-nav-bg-color)',
    'bg-nav-item-active': 'var(--uls-nav-item-active-bg-color)',
    'bg-vnav': 'var(--uls-vnav-bg-color)',
    'bg-vnav-item-active': 'var(--uls-vnav-item-active-bg-color)',
    'bg-input': 'var(--uls-input-bg-color)',
    'bg-input-disable': 'color-mix(in srgb, var(--uls-input-disable-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-25))',
    'bg-input-focus': 'var(--uls-input-focus-bg, var(--uls-input-bg-color))',
    'bg-inverted': 'var(--uls-inverted-bg-color)',
    'bg-modal': 'var(--uls-modal-bg-color)',
    'bg-modal-footer': 'var(--uls-modalfooter-bg-color)',
    'bg-tooltip': 'var(--uls-tooltip-bg, var(--uls-secondary-bg))',
    'bg-tooltip-inverted': 'var(--uls-tooltip-inverted-bg, var(--uls-inverted-bg-color))',
    'bg-table-header': 'var(--uls-table-list-head-bg, color-mix(in srgb, var(--layer1-bg), var(--uls-contrast-color) var(--uls-contrast-intensity-17)))',
    'bg-new-label': 'var(--uls-new-lbl-bg, var(--red-bg-color, #CF1322))',
    'fg-primary': 'var(--uls-primary-text-color, var(--uls-primary-color))',
    'fg-primary-light': 'var(--uls-primary-fg-light-color)',
    'fg-white': 'var(--static-white, #fff)',
    'fg-text': 'var(--uls-text-color)',
    'fg-text-secondary': 'var(--uls-secondary-text-color)',
    'fg-text-tertiary': 'var(--uls-tertiary-text-color)',
    'fg-text-light': 'var(--uls-light-text-color)',
    'fg-link': 'var(--uls-link-color)',
    'fg-link-hover': 'var(--uls-link-hover-color)',
    'fg-disabled': 'var(--uls-disabled-fg-color, var(--uls-light-text-color))',
    'fg-placeholder': 'var(--place-holder-color, #888585)',
    'fg-text-info': 'var(--uls-info-text-color)',
    'fg-green': 'var(--uls-success-fg, #006644)',
    'fg-pointing-menu': 'var(--pointing-menu-fg)',
    'fg-pointing-menu-active': 'var(--pointing-menu-active)',
    'fg-layer1': 'var(--layer1-fg)',
    'fg-blue-layer1': 'var(--blue-layer1-fg)',
    'fg-blue-layer2': 'var(--blue-layer2-fg)',
    'fg-hover-default': 'var(--uls-default-hover-color)',
    'fg-nav': 'var(--uls-nav-fg-color)',
    'fg-nav-link': 'var(--uls-navlink-fg-color)',
    'fg-nav-item-active': 'var(--uls-nav-item-active-fg-color)',
    'fg-vnav': 'var(--uls-vnav-fg-color)',
    'fg-vnav-link': 'var(--uls-vnav-link-fg-color)',
    'fg-vnav-link-hover': 'var(--uls-vnav-hover-color)',
    'fg-vnav-item-active': 'var(--uls-vnav-item-active-fg-color)',
    'fg-input': 'var(--uls-input-fg-color)',
    'fg-inverted': 'var(--uls-inverted-fg-color)',
    'fg-inverted-secondary': 'var(--uls-inverted-secondary-fg-color)',
    'fg-inverted-link': 'var(--uls-inverted-link-color)',
    'fg-topbar': 'var(--uls-topbar-fg-color)',
    'fg-topbar-link': 'var(--uls-topbar-link-color)',
    'fg-modal': 'var(--uls-modal-fg-color)',
    'fg-tooltip': 'var(--uls-tooltip-fg, var(--uls-text-color))',
    'fg-tooltip-inverted': 'var(--uls-tooltip-inverted-fg, var(--uls-inverted-fg-color))',
    'fg-user-online': 'var(--uls-user-online-color, #006644)',
    'fg-user-offline': 'var(--uls-user-offline-color, #8995A0)',
    'fg-user-idle': 'var(--uls-user-idle-color, #FAAD14)',
    'fg-table-header': 'var(--uls-table-list-head-fg, var(--uls-text-color))',
    'fg-cobalt-theme': 'var(--cobalt-theme-color, #2c66dd)',
    'fg-cardinal-theme': 'var(--cardinal-theme-color, #cc3929)',
    'fg-fern-theme': 'var(--fern-theme-color, #0c8844)',
    'fg-tangerine-theme': 'var(--tangerine-theme-color, #ebb625)',
    'fg-new-label': 'var(--uls-new-lbl-fg, var(--static-white, #fff))',
    'fg-focus-default': 'var(--focus-default-color, #cd9747)',
    'border-default': 'color-mix(in srgb, var(--uls-default-border-color), var(--uls-contrast-color) var(--uls-contrast-intensity-40))',
    'border-dark': 'color-mix(in srgb, var(--uls-dark-border-color), var(--uls-contrast-color) var(--uls-contrast-intensity-40))',
    'border-light': 'color-mix(in srgb, var(--uls-light-border-color), var(--uls-contrast-color) var(--uls-contrast-intensity-40))',
    'border-error': 'var(--uls-error-border-color, #FFA39E)',
    'border-input': 'color-mix(in srgb, var(--uls-input-border-color), var(--uls-contrast-color) var(--uls-contrast-intensity-40))'
  };
  
  return colorMap[classKey] || null;
};

const backgroundUtilities = [
  {
    className: '.bg-primary',
    property: 'Primary brand background sourced from @primary-color token.',
    color: getColorForClass('.bg-primary')
  },
  {
    className: '.bg-primary-hover',
    property: 'Primary hover state background.',
    color: getColorForClass('.bg-primary-hover')
  },
  {
    className: '.bg-primary-disabled',
    property: 'Primary disabled state background.',
    color: getColorForClass('.bg-primary-disabled')
  },
  {
    className: '.bg-success',
    property: 'Success status background (solid variant).',
    color: getColorForClass('.bg-success')
  },
  {
    className: '.bg-success-soft',
    property: 'Success status background (soft variant).',
    color: getColorForClass('.bg-success-soft')
  },
  {
    className: '.bg-danger',
    property: 'Danger/error status background (solid variant).',
    color: getColorForClass('.bg-danger')
  },
  {
    className: '.bg-danger-soft',
    property: 'Danger/error status background (soft variant).',
    color: getColorForClass('.bg-danger-soft')
  },
  {
    className: '.bg-info',
    property: 'Info status background (solid variant).',
    color: getColorForClass('.bg-info')
  },
  {
    className: '.bg-info-soft',
    property: 'Info status background (soft variant).',
    color: getColorForClass('.bg-info-soft')
  },
  {
    className: '.bg-link',
    property: 'Link callout background for default surfaces.',
    color: getColorForClass('.bg-link')
  },
  {
    className: '.bg-link-invert',
    property: 'Link callout background for inverted surfaces.',
    color: getColorForClass('.bg-link-invert')
  },
  {
    className: '.bg-body',
    property: 'Global body background.',
    color: getColorForClass('.bg-body')
  },
  {
    className: '.bg-default',
    property: 'Default container background.',
    color: getColorForClass('.bg-default')
  },
  {
    className: '.bg-secondary',
    property: 'Secondary container background.',
    color: getColorForClass('.bg-secondary')
  },
  {
    className: '.bg-overlay',
    property: 'Overlay background for modals and scrims.',
    color: getColorForClass('.bg-overlay')
  },
  {
    className: '.bg-overlay-white',
    property: 'White overlay background.',
    color: getColorForClass('.bg-overlay-white')
  },
  {
    className: '.bg-overlay-dark',
    property: 'Dark overlay background.',
    color: getColorForClass('.bg-overlay-dark')
  },
  {
    className: '.bg-overlay-light',
    property: 'Light overlay background for subtle elevation.',
    color: getColorForClass('.bg-overlay-light')
  },
  {
    className: '.bg-header',
    property: 'Header container background.',
    color: getColorForClass('.bg-header')
  },
  {
    className: '.bg-dimmer',
    property: 'Dimmer overlay background.',
    color: getColorForClass('.bg-dimmer')
  },
  {
    className: '.bg-topbar',
    property: 'Top bar background.',
    color: getColorForClass('.bg-topbar')
  },
  {
    className: '.bg-layer1',
    property: 'Surface layer 1 background.',
    color: getColorForClass('.bg-layer1')
  },
  {
    className: '.bg-layer2',
    property: 'Surface layer 2 background.',
    color: getColorForClass('.bg-layer2')
  },
  {
    className: '.bg-layer3',
    property: 'Surface layer 3 background.',
    color: getColorForClass('.bg-layer3')
  },
  {
    className: '.bg-layer4',
    property: 'Surface layer 4 background.',
    color: getColorForClass('.bg-layer4')
  },
  {
    className: '.bg-layer5',
    property: 'Surface layer 5 background.',
    color: getColorForClass('.bg-layer5')
  },
  {
    className: '.bg-layer6',
    property: 'Surface layer 6 background.',
    color: getColorForClass('.bg-layer6')
  },
  {
    className: '.bg-primary-layer1',
    property: 'Primary-tinted layer 1 background.',
    color: getColorForClass('.bg-primary-layer1')
  },
  {
    className: '.bg-primary-layer2',
    property: 'Primary-tinted layer 2 background.',
    color: getColorForClass('.bg-primary-layer2')
  },
  {
    className: '.bg-primary-layer3',
    property: 'Primary-tinted layer 3 background.',
    color: getColorForClass('.bg-primary-layer3')
  },
  {
    className: '.bg-primary-layer4',
    property: 'Primary-tinted layer 4 background.',
    color: getColorForClass('.bg-primary-layer4')
  },
  {
    className: '.bg-primary-layerD1',
    property: 'Primary-tinted dark layer 1 background.',
    color: getColorForClass('.bg-primary-layerD1')
  },
  {
    className: '.bg-primary-layerD2',
    property: 'Primary-tinted dark layer 2 background.',
    color: getColorForClass('.bg-primary-layerD2')
  },
  {
    className: '.bg-blue-layer1',
    property: 'Blue theme layer 1 background.',
    color: getColorForClass('.bg-blue-layer1')
  },
  {
    className: '.bg-blue-layer2',
    property: 'Blue theme layer 2 background.',
    color: getColorForClass('.bg-blue-layer2')
  },
  {
    className: '.bg-hover-default',
    property: 'Default hover background for neutral components.',
    color: getColorForClass('.bg-hover-default')
  },
  {
    className: '.bg-nav',
    property: 'Horizontal navigation container background.',
    color: getColorForClass('.bg-nav')
  },
  {
    className: '.bg-nav-item-active',
    property: 'Active navigation item background.',
    color: getColorForClass('.bg-nav-item-active')
  },
  {
    className: '.bg-vnav',
    property: 'Vertical navigation container background.',
    color: getColorForClass('.bg-vnav')
  },
  {
    className: '.bg-vnav-item-active',
    property: 'Active vertical navigation item background.',
    color: getColorForClass('.bg-vnav-item-active')
  },
  {
    className: '.bg-input',
    property: 'Form input field background.',
    color: getColorForClass('.bg-input')
  },
  {
    className: '.bg-input-disable',
    property: 'Disabled form input field background.',
    color: getColorForClass('.bg-input-disable')
  },
  {
    className: '.bg-input-focus',
    property: 'Focused form input field background.',
    color: getColorForClass('.bg-input-focus')
  },
  {
    className: '.bg-inverted',
    property: 'Inverted theme surface for dark-on-light contexts.',
    color: getColorForClass('.bg-inverted')
  },
  {
    className: '.bg-modal',
    property: 'Modal dialog container background.',
    color: getColorForClass('.bg-modal')
  },
  {
    className: '.bg-modal-footer',
    property: 'Modal dialog footer background.',
    color: getColorForClass('.bg-modal-footer')
  },
  {
    className: '.bg-tooltip',
    property: 'Tooltip container background.',
    color: getColorForClass('.bg-tooltip')
  },
  {
    className: '.bg-tooltip-inverted',
    property: 'Inverted tooltip container background.',
    color: getColorForClass('.bg-tooltip-inverted')
  },
  {
    className: '.bg-table-header',
    property: 'Table/list header background.',
    color: getColorForClass('.bg-table-header')
  },
  {
    className: '.bg-new-label',
    property: 'Label badge accent background.',
    color: getColorForClass('.bg-new-label')
  }
];

const foregroundUtilities = [
  {
    className: '.fg-primary',
    property: 'Primary text color for brand elements.',
    color: getColorForClass('.fg-primary')
  },
  {
    className: '.fg-primary-light',
    property: 'Light primary text color.',
    color: getColorForClass('.fg-primary-light')
  },
  {
    className: '.fg-white',
    property: 'Static white text color.',
    color: getColorForClass('.fg-white')
  },
  {
    className: '.fg-text',
    property: 'Default body text color.',
    color: getColorForClass('.fg-text')
  },
  {
    className: '.fg-text-secondary',
    property: 'Secondary text color for de-emphasis.',
    color: getColorForClass('.fg-text-secondary')
  },
  {
    className: '.fg-text-tertiary',
    property: 'Tertiary text color for muted content.',
    color: getColorForClass('.fg-text-tertiary')
  },
  {
    className: '.fg-text-light',
    property: 'Light text color for subtle content.',
    color: getColorForClass('.fg-text-light')
  },
  {
    className: '.fg-link',
    property: 'Default link text color.',
    color: getColorForClass('.fg-link')
  },
  {
    className: '.fg-link-hover',
    property: 'Link hover state text color.',
    color: getColorForClass('.fg-link-hover')
  },
  {
    className: '.fg-disabled',
    property: 'Disabled element text color.',
    color: getColorForClass('.fg-disabled')
  },
  {
    className: '.fg-placeholder',
    property: 'Placeholder text color for form inputs.',
    color: getColorForClass('.fg-placeholder')
  },
  {
    className: '.fg-text-info',
    property: 'Info text color for informational messages.',
    color: getColorForClass('.fg-text-info')
  },
  {
    className: '.fg-green',
    property: 'Green/success text color.',
    color: getColorForClass('.fg-green')
  },
  {
    className: '.fg-pointing-menu',
    property: 'Pointing menu text color.',
    color: getColorForClass('.fg-pointing-menu')
  },
  {
    className: '.fg-pointing-menu-active',
    property: 'Active pointing menu text color.',
    color: getColorForClass('.fg-pointing-menu-active')
  },
  {
    className: '.fg-layer1',
    property: 'Layer 1 foreground text color.',
    color: getColorForClass('.fg-layer1')
  },
  {
    className: '.fg-blue-layer1',
    property: 'Blue layer 1 foreground text color.',
    color: getColorForClass('.fg-blue-layer1')
  },
  {
    className: '.fg-blue-layer2',
    property: 'Blue layer 2 foreground text color.',
    color: getColorForClass('.fg-blue-layer2')
  },
  {
    className: '.fg-hover-default',
    property: 'Default hover text color.',
    color: getColorForClass('.fg-hover-default')
  },
  {
    className: '.fg-nav',
    property: 'Navigation container text color.',
    color: getColorForClass('.fg-nav')
  },
  {
    className: '.fg-nav-link',
    property: 'Navigation link text color.',
    color: getColorForClass('.fg-nav-link')
  },
  {
    className: '.fg-nav-item-active',
    property: 'Active navigation item text color.',
    color: getColorForClass('.fg-nav-item-active')
  },
  {
    className: '.fg-vnav',
    property: 'Vertical navigation container text color.',
    color: getColorForClass('.fg-vnav')
  },
  {
    className: '.fg-vnav-link',
    property: 'Vertical navigation link text color.',
    color: getColorForClass('.fg-vnav-link')
  },
  {
    className: '.fg-vnav-link-hover',
    property: 'Vertical navigation link hover text color.',
    color: getColorForClass('.fg-vnav-link-hover')
  },
  {
    className: '.fg-vnav-item-active',
    property: 'Active vertical navigation item text color.',
    color: getColorForClass('.fg-vnav-item-active')
  },
  {
    className: '.fg-input',
    property: 'Form input field text color.',
    color: getColorForClass('.fg-input')
  },
  {
    className: '.fg-inverted',
    property: 'Inverted theme text color.',
    color: getColorForClass('.fg-inverted')
  },
  {
    className: '.fg-inverted-secondary',
    property: 'Inverted theme secondary text color.',
    color: getColorForClass('.fg-inverted-secondary')
  },
  {
    className: '.fg-inverted-link',
    property: 'Inverted theme link text color.',
    color: getColorForClass('.fg-inverted-link')
  },
  {
    className: '.fg-topbar',
    property: 'Top bar text color.',
    color: getColorForClass('.fg-topbar')
  },
  {
    className: '.fg-topbar-link',
    property: 'Top bar link text color.',
    color: getColorForClass('.fg-topbar-link')
  },
  {
    className: '.fg-modal',
    property: 'Modal dialog text color.',
    color: getColorForClass('.fg-modal')
  },
  {
    className: '.fg-tooltip',
    property: 'Tooltip text color.',
    color: getColorForClass('.fg-tooltip')
  },
  {
    className: '.fg-tooltip-inverted',
    property: 'Inverted tooltip text color.',
    color: getColorForClass('.fg-tooltip-inverted')
  },
  {
    className: '.fg-user-online',
    property: 'User online status indicator color.',
    color: getColorForClass('.fg-user-online')
  },
  {
    className: '.fg-user-offline',
    property: 'User offline status indicator color.',
    color: getColorForClass('.fg-user-offline')
  },
  {
    className: '.fg-user-idle',
    property: 'User idle status indicator color.',
    color: getColorForClass('.fg-user-idle')
  },
  {
    className: '.fg-table-header',
    property: 'Table/list header text color.',
    color: getColorForClass('.fg-table-header')
  },
  {
    className: '.fg-cobalt-theme',
    property: 'Cobalt theme accent text color.',
    color: getColorForClass('.fg-cobalt-theme')
  },
  {
    className: '.fg-cardinal-theme',
    property: 'Cardinal theme accent text color.',
    color: getColorForClass('.fg-cardinal-theme')
  },
  {
    className: '.fg-fern-theme',
    property: 'Fern theme accent text color.',
    color: getColorForClass('.fg-fern-theme')
  },
  {
    className: '.fg-tangerine-theme',
    property: 'Tangerine theme accent text color.',
    color: getColorForClass('.fg-tangerine-theme')
  },
  {
    className: '.fg-new-label',
    property: 'New label badge text color.',
    color: getColorForClass('.fg-new-label')
  },
  {
    className: '.fg-focus-default',
    property: 'Default focus ring color.',
    color: getColorForClass('.fg-focus-default')
  }
];

const borderUtilities = [
  {
    className: '.border-default',
    property: 'Default border color.',
    color: getColorForClass('.border-default')
  },
  {
    className: '.border-dark',
    property: 'Dark border color.',
    color: getColorForClass('.border-dark')
  },
  {
    className: '.border-light',
    property: 'Light border color.',
    color: getColorForClass('.border-light')
  },
  {
    className: '.border-error',
    property: 'Error state border color.',
    color: getColorForClass('.border-error')
  },
  {
    className: '.border-input',
    property: 'Form input border color.',
    color: getColorForClass('.border-input')
  }
];

export default function ColorUtilities() {
  return (
    <FoundationSection
      id="utilities-color"
    >
      <div className="fxb wrap gp10">
        <div>
          <h4 className="mgt0 mgb4 font-bold fg-primary">Background Colors</h4>
          <ClassPropertyTable rows={backgroundUtilities} columnLabels={['Utility Class', 'Description']} />
        </div>
        <div>
          <h4 className="mgt0 mgb4 font-bold fg-primary">Foreground Colors</h4>
          <ClassPropertyTable rows={foregroundUtilities} columnLabels={['Utility Class', 'Description']} />
        </div>
        <div>
          <h4 className="mgt0 mgb4 font-bold fg-primary">Border Colors</h4>
          <ClassPropertyTable rows={borderUtilities} columnLabels={['Utility Class', 'Description']} />
        </div>
      </div>
    </FoundationSection>
  );
}
