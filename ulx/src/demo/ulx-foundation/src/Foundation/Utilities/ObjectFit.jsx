import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const objectFitUtilities = [
  { className: '.object-contain / .object-cover / .object-fill', property: 'object-fit: contain / cover / fill;' },
  { className: '.object-none / .object-scale-down', property: 'object-fit: none / scale-down;' },
  { className: '.object-top / .object-center / .object-bottom', property: 'object-position: top / center / bottom;' },
  { className: '.object-left / .object-right', property: 'object-position: left / right;' },
  { className: '.object-left-top / .object-right-bottom', property: 'corner-specific positions.' }
];

export default function ObjectFitUtilities() {
  return (
    <FoundationSection
      id="utilities-object-fit"
      title="Object Fit Utilities"
      subtitle="Object fit utility classes for controlling how replaced elements are sized."
    >
      <ClassPropertyTable rows={objectFitUtilities} />
    </FoundationSection>
  );
}
