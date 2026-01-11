import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const pointerUtilities = [
  { className: '.pointer-events-none', property: 'pointer-events: none;' },
  { className: '.pointer-events-auto', property: 'pointer-events: auto;' }
];

export default function PointerEventsUtilities() {
  return (
    <FoundationSection
      id="utilities-pointer-events"
    >
      <ClassPropertyTable rows={pointerUtilities} />
    </FoundationSection>
  );
}
