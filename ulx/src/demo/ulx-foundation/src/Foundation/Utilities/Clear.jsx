import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const clearUtilities = [
  { className: '.clear-left / .clear-right / .clear-both', property: 'clear floats on the specified side(s).' },
  { className: '.clear-none', property: 'clear: none;' },
  { className: '.clear-initial / .clear-inherit / .clear-unset', property: 'Reset clearing behavior.' }
];

export default function ClearUtilities() {
  return (
    <FoundationSection
      id="utilities-clear"
    >
      <ClassPropertyTable rows={clearUtilities} />
    </FoundationSection>
  );
}
