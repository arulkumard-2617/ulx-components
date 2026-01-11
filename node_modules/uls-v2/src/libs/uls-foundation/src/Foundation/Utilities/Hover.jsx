import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const hoverBgUtilities = [
  { className: 'hover:bg-primary', bg: '@primary-color', detail: 'Primary brand fill' },
  { className: 'hover:bg-primary-hover', bg: '@primary-hover-color', detail: 'Primary hover state' },
  { className: 'hover:bg-primary-disabled', bg: '@primary-disabled-color' },
  { className: 'hover:bg-success', bg: '@success-color' },
  { className: 'hover:bg-success-soft', bg: '@success-bg-color' },
  { className: 'hover:bg-danger', bg: '@danger-color' },
  { className: 'hover:bg-danger-soft', bg: '@danger-bg-color' },
  { className: 'hover:bg-info', bg: '@info-color' },
  { className: 'hover:bg-info-soft', bg: '@info-bg-color' },
  { className: 'hover:bg-link', bg: '@link-bg-color' },
  { className: 'hover:bg-link-invert', bg: '@link-invert-bg-color' },
  { className: 'hover:bg-body', bg: '@body-background' },
  { className: 'hover:bg-default', bg: '@default-background' },
  { className: 'hover:bg-secondary', bg: '@secondary-background' },
  { className: 'hover:bg-overlay', bg: '@overlay-bg' },
  { className: 'hover:bg-overlay-white', bg: '@overlay-bg-white' },
  { className: 'hover:bg-overlay-dark', bg: '@dark-overlay-bg' },
  { className: 'hover:bg-overlay-light', bg: '@overlay-light' },
  { className: 'hover:bg-layer1', bg: '@bg-layer1' },
  { className: 'hover:bg-layer2', bg: '@bg-layer2' },
  { className: 'hover:bg-layer3', bg: '@bg-layer3' },
  { className: 'hover:bg-layer4', bg: '@bg-layer4' },
  { className: 'hover:bg-layer5', bg: '@bg-layer5' },
  { className: 'hover:bg-layer6', bg: '@bg-layer6' },
  { className: 'hover:bg-primary-layer1', bg: '@bg-primaryLayer1' },
  { className: 'hover:bg-primary-layer2', bg: '@bg-primaryLayer2' },
  { className: 'hover:bg-primary-layer3', bg: '@bg-primaryLayer3' },
  { className: 'hover:bg-primary-layer4', bg: '@bg-primaryLayer4' },
  { className: 'hover:bg-primary-layerD1', bg: '@bg-primaryLayerD1' },
  { className: 'hover:bg-primary-layerD2', bg: '@bg-primaryLayerD2' },
  { className: 'hover:bg-blue-layer1', bg: '@bg-blueLayer1' },
  { className: 'hover:bg-blue-layer2', bg: '@bg-blueLayer2' },
  { className: 'hover:bg-blue-layer3', bg: '@bg-BlueLayer3' },
  { className: 'hover:bg-red-layer1', bg: '@bg-redLayer1' },
  { className: 'hover:bg-red-layer2', bg: '@bg-redLayer2' },
  { className: 'hover:bg-red-layer3', bg: '@bg-redLayer3' },
  { className: 'hover:bg-green-layer1', bg: '@bg-greenLayer1' },
  { className: 'hover:bg-green-layer2', bg: '@bg-greenLayer2' },
  { className: 'hover:bg-green-layer3', bg: '@bg-greenLayer3' },
  { className: 'hover:bg-orange-layer1', bg: '@bg-orangeLayer1' },
  { className: 'hover:bg-orange-layer2', bg: '@bg-orangeLayer2' },
  { className: 'hover:bg-orange-layer3', bg: '@bg-orangeLayer3' },
  { className: 'hover:bg-purple-layer1', bg: '@bg-purpleLayer1' },
  { className: 'hover:bg-purple-layer2', bg: '@bg-purpleLayer2' },
  { className: 'hover:bg-purple-layer3', bg: '@bg-purpleLayer3' },
  { className: 'hover:bg-purple-layer4', bg: '@bg-purpleLayer4' },
  { className: 'hover:bg-gold-layer1', bg: '@bg-goldLayer1' },
  { className: 'hover:bg-gold-layer2', bg: '@bg-goldLayer2' },
  { className: 'hover:bg-gold-layer3', bg: '@bg-goldLayer3' },
  { className: 'hover:bg-black-layer1', bg: '@bg-blackLayer1' },
  { className: 'hover:bg-black-layer2', bg: '@bg-blackLayer2' },
  { className: 'hover:bg-black-layer3', bg: '@bg-blackLayer3' },
  { className: 'hover:bg-black-layer4', bg: '@bg-blackLayer4' },
  { className: 'hover:bg-magenta-layer2', bg: '@bg-magentaLayer2' },
  { className: 'hover:bg-brown-layer2', bg: '@bg-brownLayer2' },
  { className: 'hover:bg-teal-layer3', bg: '@bg-tealLayer3' },
  { className: 'hover:bg-vnav', bg: '@vnav-bg-color' },
  { className: 'hover:bg-vnav-item-active', bg: '@vnav-item-active-bg-color' },
  { className: 'hover:bg-nav', bg: '@nav-bg-color' },
  { className: 'hover:bg-nav-item-active', bg: '@nav-item-active-bg-color' },
  { className: 'hover:bg-input', bg: '@input-bg-color' },
  { className: 'hover:bg-input-disable', bg: '@input-disable-bg' },
  { className: 'hover:bg-input-focus', bg: '@input-focus-bg' },
  { className: 'hover:bg-inverted', bg: '@inverted-bg-color' },
  { className: 'hover:bg-topbar', bg: '@topbar-bg-color' },
  { className: 'hover:bg-modal', bg: '@modal-bg-color' },
  { className: 'hover:bg-modal-footer', bg: '@modalfooter-bg-color' },
  { className: 'hover:bg-tooltip', bg: '@tooltip-bg' },
  { className: 'hover:bg-tooltip-inverted', bg: '@tooltip-inverted-bg' },
  { className: 'hover:bg-header', bg: '@header-background' },
  { className: 'hover:bg-dimmer', bg: '@dimmer-background' },
  { className: 'hover:bg-table-header', bg: '@table-list-head-bg' },
  { className: 'hover:bg-new-label', bg: '@new-lbl-bg' }
];

const hoverFgUtilities = [
  {
    className: '.fg-hover-default',
    property: 'color: @default-hover-color; pair with hover:bg-hover-default for icon/text tinting.'
  },
  {
    className: '.fg-link-hover',
    property: 'color: @link-hover-color; ensures text links meet contrast requirements on hover/focus.'
  },
  {
    className: '.fg-vnav-link-hover',
    property: 'color: @vnav-link-hover-color; reserved for the vertical nav hover indicator.'
  }
];

export default function HoverUtilities() {
  return (
    <FoundationSection
      id="utilities-hover"
      title="Hover Utilities"
      subtitle="Tailwind-like hover:bg-* helpers backed by the color token system."
    >
      <h4 className="font-semibold mgt0">Hover Backgrounds</h4>
      <ClassPropertyTable
        rows={hoverBgUtilities.map(({ className, bg, detail }) => ({
          className,
          property: `background-color: ${bg};${detail ? ` ${detail}` : ''}`
        }))}
        columnLabels={['Utility', 'Declaration']}
      />
      <h4 className="font-semibold mgt20">Existing Text Hover Helpers</h4>
      <ClassPropertyTable rows={hoverFgUtilities} columnLabels={['Utility', 'Declaration']} />
    </FoundationSection>
  );
}
