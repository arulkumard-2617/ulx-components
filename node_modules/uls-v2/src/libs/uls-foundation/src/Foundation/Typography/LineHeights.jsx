import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const lineHeightUtilities = [
  { className: '.leading-tight', property: 'line-height: @line-height-tight;' },
  { className: '.leading-normal', property: 'line-height: @line-height-normal;' },
  { className: '.leading-relaxed', property: 'line-height: @line-height-relaxed;' }
];

export default function LineHeights() {
  return (
    <FoundationSection
      id="typography-line-heights"
      title="Line Height Utilities"
      subtitle="Control rhythm or accessibility spacing with semantic helpers."
    >
      <ClassPropertyTable rows={lineHeightUtilities} />
    </FoundationSection>
  );
}
