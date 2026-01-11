import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const transformUtilities = [
  { className: '.text-uppercase', property: 'text-transform: uppercase !important;' },
  { className: '.text-lowercase', property: 'text-transform: lowercase !important;' },
  { className: '.text-capitalize', property: 'text-transform: capitalize !important;' },
  { className: '.text-none', property: 'text-transform: none !important;' }
];

export default function TextTransforms() {
  return (
    <FoundationSection
      id="typography-text-transform"
      title="Text Transform Utilities"
      subtitle="Apply uppercase, capitalization, or reset transformations quickly."
    >
      <ClassPropertyTable rows={transformUtilities} />
    </FoundationSection>
  );
}
