import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const lineClampUtilities = [
  { className: '.l-clamp-1', property: 'Clamp text to 1 line using -webkit-line-clamp.' },
  { className: '.l-clamp-2', property: 'Clamp text to 2 lines.' },
  { className: '.l-clamp-3', property: 'Clamp text to 3 lines.' },
  { className: '.l-clamp-4', property: 'Clamp text to 4 lines.' },
  { className: '.l-clamp-5', property: 'Clamp text to 5 lines.' },
  { className: '.l-clamp-6', property: 'Clamp text to 6 lines.' }
];

export default function LineClampUtilities() {
  return (
    <FoundationSection
      id="utilities-line-clamp"
    >
      <ClassPropertyTable rows={lineClampUtilities} />
    </FoundationSection>
  );
}
