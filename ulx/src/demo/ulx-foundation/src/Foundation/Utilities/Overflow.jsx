import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const overflowUtilities = [
  { className: '.overflow-visible / .overflow-hidden / .overflow-scroll / .overflow-auto', property: 'control overflow on both axes.' },
  { className: '.overflow-initial / .overflow-inherit / .overflow-unset', property: 'Reset overflow behavior.' },
  { className: '.overflow-x-visible / hidden / scroll / auto', property: 'axis-specific control for horizontal overflow.' },
  { className: '.overflow-y-visible / hidden / scroll / auto', property: 'axis-specific control for vertical overflow.' }
];

export default function OverflowUtilities() {
  return (
    <FoundationSection
      id="utilities-overflow"
      title="Overflow Utilities"
      subtitle="Overflow utility classes for controlling element overflow behavior."
    >
      <ClassPropertyTable rows={overflowUtilities} />
    </FoundationSection>
  );
}
