import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const whiteSpaceUtilities = [
  { className: '.whitespace-normal', property: 'white-space: normal;' },
  { className: '.whitespace-nowrap', property: 'white-space: nowrap;' },
  { className: '.whitespace-pre / .whitespace-pre-line / .whitespace-pre-wrap', property: 'Preformatted text behaviors.' },
  { className: '.whitespace-break-spaces', property: 'Preserve spaces and wrap where necessary.' }
];

export default function WhiteSpaceUtilities() {
  return (
    <FoundationSection
      id="utilities-white-space"
      title="White Space Utilities"
      subtitle="White space utility classes for controlling how whitespace is handled."
    >
      <ClassPropertyTable rows={whiteSpaceUtilities} />
    </FoundationSection>
  );
}
