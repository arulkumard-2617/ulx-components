import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const userSelectUtilities = [
  { className: '.select-none', property: 'user-select: none;' },
  { className: '.select-text', property: 'user-select: text;' },
  { className: '.select-all', property: 'user-select: all;' },
  { className: '.select-auto', property: 'user-select: auto;' }
];

export default function UserSelectUtilities() {
  return (
    <FoundationSection
      id="utilities-user-select"
      title="User Select Utilities"
      subtitle="User select utility classes for controlling text selection behavior."
    >
      <ClassPropertyTable rows={userSelectUtilities} />
    </FoundationSection>
  );
}
