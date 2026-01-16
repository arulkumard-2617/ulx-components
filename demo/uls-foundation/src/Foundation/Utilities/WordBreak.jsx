import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const wordBreakUtilities = [
  { className: '.word-break-normal', property: 'word-break: normal;' },
  { className: '.word-break-break-all / .word-break-keep-all', property: 'Break anywhere vs. keep words intact.' },
  { className: '.word-break-break-word', property: 'Legacy support for break-word.' },
  { className: '.word-break-initial / .word-break-inherit / .word-break-unset', property: 'Reset behavior.' }
];

export default function WordBreakUtilities() {
  return (
    <FoundationSection
      id="utilities-word-break"
    >
      <ClassPropertyTable rows={wordBreakUtilities} />
    </FoundationSection>
  );
}
