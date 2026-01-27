import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const floatUtilities = [
  { className: '.float-left / .float-right', property: 'float: left / right;' },
  { className: '.float-none', property: 'float: none;' },
  { className: '.float-initial / .float-inherit / .float-unset', property: 'Reset floating behavior.' }
];

export default function FloatUtilities() {
  return (
    <FoundationSection
      id="utilities-float"
    >
      <ClassPropertyTable rows={floatUtilities} />
    </FoundationSection>
  );
}
