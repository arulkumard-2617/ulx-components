import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const textTransformUtilities = [
  { className: '.text-uppercase', property: 'text-transform: uppercase;' },
  { className: '.text-lowercase', property: 'text-transform: lowercase;' },
  { className: '.text-capitalize', property: 'text-transform: capitalize;' },
  { className: '.text-sentence-case', property: 'text-transform: lowercase + ::first-letter uppercase;' },
  { className: '.text-none', property: 'text-transform: none;' },
  { className: '.text-full-width / .text-full-size-kana', property: 'Localized transforms for East Asian scripts.' }
];

export default function TextTransformUtilities() {
  return (
    <FoundationSection
      id="utilities-text-transform"
    >
      <ClassPropertyTable rows={textTransformUtilities} />
    </FoundationSection>
  );
}
