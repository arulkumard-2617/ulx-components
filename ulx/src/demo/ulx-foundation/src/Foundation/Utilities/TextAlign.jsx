import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const textAlignUtilities = [
  { className: '.text-start / .text-left', property: 'text-align: start / left;' },
  { className: '.text-center', property: 'text-align: center;' },
  { className: '.text-end / .text-right', property: 'text-align: end / right;' },
  { className: '.text-justify', property: 'text-align: justify;' },
  { className: '.text-initial / .text-inherit / .text-unset', property: 'Reset alignment to initial/inherit/unset.' }
];

export default function TextAlignUtilities() {
  return (
    <FoundationSection
      id="utilities-text-align"
      title="Text Align Utilities"
      subtitle="Text alignment utility classes."
    >
      <ClassPropertyTable rows={textAlignUtilities} />
    </FoundationSection>
  );
}
