import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const zIndexUtilities = [
  { className: '.z-0 / .z-10 / .z-20 / .z-30 / .z-40 / .z-50', property: 'Common stacking contexts.' },
  { className: '.z-100 / .z-1000 / .z-9999', property: 'High priority layers for overlays and portals.' },
  { className: '.z-auto', property: 'z-index: auto;' }
];

export default function ZIndexUtilities() {
  return (
    <FoundationSection
      id="utilities-zindex"
    >
      <ClassPropertyTable rows={zIndexUtilities} />
    </FoundationSection>
  );
}
