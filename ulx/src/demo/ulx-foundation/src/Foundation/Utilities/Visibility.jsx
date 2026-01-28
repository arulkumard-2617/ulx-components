import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const visibilityUtilities = [
  { className: '.visible / .hidden', property: 'visibility: visible / hidden;' },
  { className: '.collapse', property: 'visibility: collapse; (table rows/columns)' },
  { className: '.visibility-initial / .visibility-inherit / .visibility-unset', property: 'Reset helpers.' }
];

export default function VisibilityUtilities() {
  return (
    <FoundationSection
      id="utilities-visibility"
      title="Visibility Utilities"
      subtitle="Visibility utility classes for controlling element visibility."
    >
      <ClassPropertyTable rows={visibilityUtilities} />
    </FoundationSection>
  );
}
