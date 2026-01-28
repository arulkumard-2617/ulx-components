import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const opacityUtilities = [
  { className: '.opacity-0', property: 'opacity: 0;' },
  { className: '.opacity-25', property: 'opacity: 0.25;' },
  { className: '.opacity-50', property: 'opacity: 0.5;' },
  { className: '.opacity-75', property: 'opacity: 0.75;' },
  { className: '.opacity-100', property: 'opacity: 1;' }
];

export default function OpacityUtilities() {
  return (
    <FoundationSection
      id="utilities-opacity"
      title="Opacity Utilities"
      subtitle="Opacity utility classes for controlling element transparency."
    >
      <ClassPropertyTable rows={opacityUtilities} />
    </FoundationSection>
  );
}
