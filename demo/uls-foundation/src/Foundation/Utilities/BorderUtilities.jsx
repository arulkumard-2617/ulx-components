import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const borderUtilities = [
  { className: '.bdr, .bdr-2 … .bdr-5', property: 'Apply 1px–5px borders using the default border color.' },
  { className: '.bdr-t / .bdr-b / .bdr-l / .bdr-r / .bdr-x / .bdr-y', property: 'Side-specific border helpers.' },
  { className: 'Color modifiers', property: '.bdr-primary, .bdr-dark, .bdr-error, etc. swap @default-border-color with semantic tokens.' },
  { className: 'Style modifiers', property: '.bdr-dashed, .bdr-dotted, .bdr-double.' },
  { className: 'Logical sides', property: '.bdr-s, .bdr-e respect writing-mode (LTR/RTL).' },
  { className: 'Reset helpers', property: '.bdr-none, .bdr-t-none, .bdr-x-none, etc.' }
];

const radiusUtilities = [
  { className: '.rds0 - .rds15', property: 'Border radius scale mapped to spacing tokens.' },
  { className: '.rds-circle', property: 'border-radius: 50%;' },
  { className: '.rds-pill', property: 'border-radius: 9999px;' }
];

export default function BorderUtilities() {
  return (
    <FoundationSection
      id="utilities-border"
    >
      <ClassPropertyTable rows={borderUtilities} columnLabels={['Utility', 'Description']} />
      <h4 className="font-bold mgb5 mgt20">Border Radius</h4>
      <ClassPropertyTable rows={radiusUtilities} />
    </FoundationSection>
  );
}
