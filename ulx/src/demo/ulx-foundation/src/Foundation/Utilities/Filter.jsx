import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const filterUtilities = [
  { className: '.filter-none', property: 'filter: none;' },
  { className: '.filter-blur-sm / .filter-blur / .filter-blur-lg', property: 'blur filters at different radii.' },
  { className: '.brightness-50 / .brightness-75 / .brightness-150 / .brightness-200', property: 'Control color brightness.' },
  { className: '.contrast-50 / .contrast-100 / .contrast-200', property: 'Adjust contrast.' },
  { className: '.grayscale / .sepia / .invert / .hue-rotate-90', property: 'Special effect filters.' },
  { className: '.saturate-50 / .saturate-150 / .saturate-200', property: 'Increase or decrease saturation.' }
];

export default function FilterUtilities() {
  return (
    <FoundationSection
      id="utilities-filter"
      title="Filter Utilities"
      subtitle="Filter utility classes for applying CSS filters."
    >
      <ClassPropertyTable rows={filterUtilities} />
    </FoundationSection>
  );
}
