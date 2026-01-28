import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const cursorUtilities = [
  { className: '.pointer', property: 'cursor: pointer;' },
  { className: '.text', property: 'cursor: text;' },
  { className: '.move', property: 'cursor: move;' },
  { className: '.grab / .grabbing', property: 'cursor: grab / grabbing;' },
  { className: '.zoom-in / .zoom-out', property: 'cursor: zoom-in / zoom-out;' },
  { className: '.not-allowed / .no-drop', property: 'cursor: not-allowed;' },
  { className: '.resize-n / .resize-s / …', property: 'cursor: n-resize, s-resize, e-resize, w-resize, ne-resize, etc.' },
  { className: '.col-resize / .row-resize', property: 'cursor: col-resize; cursor: row-resize;' }
];

export default function CursorUtilities() {
  return (
    <FoundationSection
      id="utilities-cursor"
      title="Cursor Utilities"
      subtitle="Cursor utility classes for controlling mouse cursor appearance."
    >
      <ClassPropertyTable rows={cursorUtilities} />
    </FoundationSection>
  );
}
