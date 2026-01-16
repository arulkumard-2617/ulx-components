import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const shadowUtilities = [
  { className: '.shadow-none', property: 'box-shadow: none;' },
  { className: '.shadow-sm', property: '0 1px 2px 0 rgba(0,0,0,0.05);' },
  { className: '.shadow', property: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);' },
  { className: '.shadow-md', property: '0 0 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);' },
  { className: '.shadow-lg', property: '0 0 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);' },
  { className: '.shadow-xl', property: '0 0 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);' },
  { className: '.shadow-2xl', property: '0 0 50px -12px rgba(0,0,0,0.25);' },
  { className: '.shadow-inner', property: 'inset 0 2px 4px 0 rgba(0,0,0,0.06);' }
];

export default function ShadowUtilities() {
  return (
    <FoundationSection
      id="utilities-shadow"
    >
      <ClassPropertyTable rows={shadowUtilities} />
    </FoundationSection>
  );
}
