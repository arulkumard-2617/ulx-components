import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

// Generate padding utilities list (pd0 - pd25)
const paddingAllUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pd${i}`,
  property: `padding: @${i * 2}px; (all sides)`
}));

// Generate padding directional utilities - separated by direction
const paddingTopUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdt${i}`,
  property: `padding-top: @${i * 2}px;`
}));

const paddingBottomUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdb${i}`,
  property: `padding-bottom: @${i * 2}px;`
}));

const paddingLeftUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdl${i}`,
  property: `padding-inline-start: @${i * 2}px;`
}));

const paddingRightUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdr${i}`,
  property: `padding-inline-end: @${i * 2}px;`
}));

// Generate padding logical utilities - separated
const paddingXUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdx${i}`,
  property: `padding-inline-start/end: @${i * 2}px;`
}));

const paddingYUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.pdy${i}`,
  property: `padding-top/bottom: @${i * 2}px;`
}));

// Generate margin utilities list (mg0 - mg25)
const marginAllUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mg${i}`,
  property: `margin: @${i * 2}px; (all sides)`
}));

// Generate margin directional utilities - separated by direction
const marginTopUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgt${i}`,
  property: `margin-top: @${i * 2}px;`
}));

const marginBottomUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgb${i}`,
  property: `margin-bottom: @${i * 2}px;`
}));

const marginLeftUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgl${i}`,
  property: `margin-inline-start: @${i * 2}px;`
}));

const marginRightUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgr${i}`,
  property: `margin-inline-end: @${i * 2}px;`
}));

// Generate margin logical utilities - separated
const marginXUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgx${i}`,
  property: `margin-inline-start/end: @${i * 2}px;`
}));

const marginYUtilities = Array.from({ length: 26 }, (_, i) => ({
  className: `.mgy${i}`,
  property: `margin-top/bottom: @${i * 2}px;`
}));

// Generate negative margin utilities
const negativeMarginUtilities = Array.from({ length: 26 }, (_, i) => i > 0 ? [
  { className: `.mgn${i}`, property: `margin: -@${i * 2}px;` },
  { className: `.mgxn${i}`, property: `margin-inline-start/end: -@${i * 2}px;` },
  { className: `.mgyn${i}`, property: `margin-top/bottom: -@${i * 2}px;` },
  { className: `.mgtn${i}`, property: `margin-top: -@${i * 2}px;` },
  { className: `.mgbn${i}`, property: `margin-bottom: -@${i * 2}px;` },
  { className: `.mgln${i}`, property: `margin-inline-start: -@${i * 2}px;` },
  { className: `.mgrn${i}`, property: `margin-inline-end: -@${i * 2}px;` }
] : []).flat();

// Auto spacing utilities
const autoPaddingUtilities = [
  { className: '.pd-auto', property: 'padding: auto;' },
  { className: '.pdx-auto', property: 'padding-inline-start/end: auto;' },
  { className: '.pdy-auto', property: 'padding-top/bottom: auto;' },
  { className: '.pdl-auto', property: 'padding-inline-start: auto;' },
  { className: '.pdr-auto', property: 'padding-inline-end: auto;' }
];

const autoMarginUtilities = [
  { className: '.mg-auto', property: 'margin: auto;' },
  { className: '.mgx-auto', property: 'margin-inline-start/end: auto;' },
  { className: '.mgy-auto', property: 'margin-top/bottom: auto;' },
  { className: '.mgt-auto', property: 'margin-top: auto;' },
  { className: '.mgb-auto', property: 'margin-bottom: auto;' },
  { className: '.mgl-auto', property: 'margin-inline-start: auto;' },
  { className: '.mgr-auto', property: 'margin-inline-end: auto;' }
];

export default function Space() {
  return (
    <FoundationSection
      id="utilities-space"
    >
      <div className="fxb fcol gp10">
        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - All Sides</h4>
          <ClassPropertyTable rows={paddingAllUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - Top</h4>
          <ClassPropertyTable rows={paddingTopUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - Bottom</h4>
          <ClassPropertyTable rows={paddingBottomUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - Left</h4>
          <ClassPropertyTable rows={paddingLeftUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - Right</h4>
          <ClassPropertyTable rows={paddingRightUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - Horizontal (Inline)</h4>
          <ClassPropertyTable rows={paddingXUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - Vertical (Block)</h4>
          <ClassPropertyTable rows={paddingYUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Padding - Auto</h4>
          <ClassPropertyTable rows={autoPaddingUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - All Sides</h4>
          <ClassPropertyTable rows={marginAllUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Top</h4>
          <ClassPropertyTable rows={marginTopUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Bottom</h4>
          <ClassPropertyTable rows={marginBottomUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Left</h4>
          <ClassPropertyTable rows={marginLeftUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Right</h4>
          <ClassPropertyTable rows={marginRightUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Horizontal (Inline)</h4>
          <ClassPropertyTable rows={marginXUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Vertical (Block)</h4>
          <ClassPropertyTable rows={marginYUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Negative</h4>
          <ClassPropertyTable rows={negativeMarginUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 bold-font">Margin - Auto</h4>
          <ClassPropertyTable rows={autoMarginUtilities} />
        </div>
      </div>
    </FoundationSection>
  );
}
