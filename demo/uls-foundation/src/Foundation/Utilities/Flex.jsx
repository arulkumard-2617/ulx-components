import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const columnBaseUtilities = [
  { className: '.uls-column', property: 'Base flex grid container (display:flex; flex-flow:row wrap; gap:@16px).' },
  { className: '.uls-column.compact', property: 'Compact spacing preset (gap:@8px).' },
  { className: '.uls-column.comfortable', property: 'Comfortable spacing preset (gap:@24px).' },
  { className: '.uls-column.gap-none', property: 'Removes spacing between children (gap:0).' },
  { className: '.uls-column.gap-xs', property: 'Gap equals spacing XS token.' },
  { className: '.uls-column.gap-sm', property: 'Gap equals spacing SM token.' },
  { className: '.uls-column.gap-md', property: 'Gap equals spacing MD token.' },
  { className: '.uls-column.gap-lg', property: 'Gap equals spacing LG token.' },
  { className: '.uls-column.gap-xl', property: 'Gap equals spacing XL token.' },
  { className: '.uls-column.centered', property: 'Centers children horizontally (justify-content:center).' },
  { className: '.uls-column.no-wrap', property: 'Keeps children on a single row (flex-wrap:nowrap).' },
  { className: '.col-fluid', property: 'Child helper that expands fluidly inside .uls-column (flex:auto; max-width:100%).' }
];

const columnDirectionUtilities = [
  { className: '.uls-column.row', property: 'Forces row direction (default orientation).' },
  { className: '.uls-column.row-reverse', property: 'Reverses row ordering of children.' },
  { className: '.uls-column.column', property: 'Stacks children vertically (flex-direction:column).' },
  { className: '.uls-column.column-reverse', property: 'Column layout with reversed order.' }
];

const columnDistributionUtilities = [
  { className: '.uls-column.space-around', property: 'Applies justify-content:space-around.' },
  { className: '.uls-column.space-between', property: 'Applies justify-content:space-between.' },
  { className: '.uls-column.space-evenly', property: 'Applies justify-content:space-evenly.' }
];

const columnGrowthUtilities = [
  { className: '.uls-column.grow', property: 'Every direct child flex-grows equally (flex-grow:1).' },
  { className: '.uls-column.no-grow', property: 'Prevent children from growing (flex-grow:0).' },
  { className: '.uls-column.no-shrink', property: 'Locks child width by disabling shrink.' },
  { className: '.uls-column.equal-width', property: 'Children share equal widths (flex-basis:0 + flex-grow:1).' },
  { className: '.uls-column.auto-width', property: 'Children size to their content (flex:0 0 auto).' },
  { className: '.uls-column.reverse-order', property: 'Switches row ordering to row-reverse.' }
];

const columnAlignmentUtilities = [
  { className: '.uls-column.baseline', property: 'Aligns children on typographic baseline.' },
  { className: '.uls-column.stretch', property: 'Stretches children vertically to fill the row height.' },
  { className: '.uls-column.content-start', property: 'align-content:flex-start for wrapped rows.' },
  { className: '.uls-column.content-end', property: 'align-content:flex-end for wrapped rows.' },
  { className: '.uls-column.content-center', property: 'align-content:center for wrapped rows.' },
  { className: '.uls-column.content-between', property: 'align-content:space-between for wrapped rows.' },
  { className: '.uls-column.content-around', property: 'align-content:space-around for wrapped rows.' }
];

const fxbUtilities = [
  { className: '.fxb', property: 'Quick flex helper (display:flex) for inline layouts.' },
  { className: '.fxb.grow', property: 'Container flex-grow:1 for proportional sizing.' },
  { className: '.fxb.shrink', property: 'Allows flexbox container to shrink when needed.' },
  { className: '.fxb.no-shrink', property: 'Locks container width by disabling shrink.' },
  { className: '.fxb.auto', property: 'Sets flex:1 1 auto on the helper container.' },
  { className: '.fxb.none', property: 'Sets flex:none (fixed size helper container).' },
  { className: '.fxb.column', property: 'Stacks children vertically (flex-direction:column).' },
  { className: '.fxb.row', property: 'Keeps default horizontal row layout.' },
  { className: '.fxb.row-reverse', property: 'Row layout with reversed order.' },
  { className: '.fxb.column-reverse', property: 'Column layout with reversed order.' }
];

const sharedWrapUtilities = [
  { className: '.wrap', property: 'Enables wrapping on .uls-column / .uls-grid / .fxb containers.' },
  { className: '.no-wrap', property: 'Disables wrapping (flex-wrap:nowrap).' },
  { className: '.wrap-reverse', property: 'Wraps content in reverse order.' }
];

const sharedAlignmentUtilities = [
  { className: '.fvs', property: 'align-items:flex-start on .uls-grid / .uls-column / .fxb.' },
  { className: '.fvc', property: 'align-items:center helper.' },
  { className: '.fvh', property: 'align-items:flex-end helper.' },
  { className: '.align-stretch', property: 'align-items:stretch helper.' },
  { className: '.fve', property: 'align-items:baseline helper.' },
  { className: '.fhs', property: 'justify-content:flex-start helper.' },
  { className: '.fhc', property: 'justify-content:center helper.' },
  { className: '.fhe', property: 'justify-content:flex-end helper.' },
  { className: '.fsb', property: 'justify-content:space-between helper.' },
  { className: '.justify-around', property: 'justify-content:space-around helper.' },
  { className: '.justify-evenly', property: 'justify-content:space-evenly helper.' },
  { className: '.center-all', property: 'Centers both axes (align-items + justify-content).' }
];

const sharedAlignmentMobileUtilities = [
  { className: '.fvs-mv', property: 'Mobile-only align-items:flex-start at the @mobile-screen breakpoint.' },
  { className: '.fvc-mv', property: 'Mobile-only align-items:center helper.' },
  { className: '.fvh-mv', property: 'Mobile-only align-items:flex-end helper.' },
  { className: '.align-stretch-mv', property: 'Mobile-only align-items:stretch helper.' },
  { className: '.fve-mv', property: 'Mobile-only align-items:baseline helper.' },
  { className: '.fhs-mv', property: 'Mobile-only justify-content:flex-start helper.' },
  { className: '.fhc-mv', property: 'Mobile-only justify-content:center helper.' },
  { className: '.fhe-mv', property: 'Mobile-only justify-content:flex-end helper.' },
  { className: '.fsb-mv', property: 'Mobile-only justify-content:space-between helper.' },
  { className: '.justify-around-mv', property: 'Mobile-only justify-content:space-around helper.' },
  { className: '.justify-evenly-mv', property: 'Mobile-only justify-content:space-evenly helper.' },
  { className: '.center-all-mv', property: 'Mobile-only center helper for both axes.' }
];

const fxbMobileUtilities = [
  { className: '.fxb.grow-mv', property: 'Mobile-only flex-grow:1 helper.' },
  { className: '.fxb.shrink-mv', property: 'Mobile-only flex-shrink:1 helper.' },
  { className: '.fxb.no-shrink-mv', property: 'Mobile-only flex-shrink:0 helper.' },
  { className: '.fxb.auto-mv', property: 'Mobile-only flex:1 1 auto helper.' },
  { className: '.fxb.none-mv', property: 'Mobile-only flex:none helper.' },
  { className: '.fxb.column-mv', property: 'Mobile-only column direction.' },
  { className: '.fxb.row-mv', property: 'Mobile-only row direction.' },
  { className: '.fxb.row-reverse-mv', property: 'Mobile-only row-reverse direction.' },
  { className: '.fxb.column-reverse-mv', property: 'Mobile-only column-reverse direction.' }
];

const itemUtilities = [
  { className: '.fx-item.self-start', property: 'Aligns a single flex child to flex-start.' },
  { className: '.fx-item.self-center', property: 'Aligns a single flex child to the center.' },
  { className: '.fx-item.self-end', property: 'Aligns a single flex child to flex-end.' },
  { className: '.fx-item.self-stretch', property: 'Stretches a single flex child to fill the column height.' },
  { className: '.fx-item.self-baseline', property: 'Aligns a single flex child to the text baseline.' }
];

const inlineUtilities = [
  { className: '.fxauto', property: 'Utility class that sets flex:1 1 auto; ideal for fluid panels.' },
  { className: '.ifxb', property: 'Inline flex helper (display:inline-flex !important).' }
];

const columnUtilities = [
  ...columnBaseUtilities,
  ...columnDirectionUtilities,
  ...columnDistributionUtilities,
  ...columnGrowthUtilities,
  ...columnAlignmentUtilities
];

const fxbAllUtilities = [...fxbUtilities];

const sharedAndItemUtilities = [
  ...sharedWrapUtilities,
  ...sharedAlignmentUtilities,
  ...itemUtilities,
  ...inlineUtilities
];

const mobileMvUtilities = [
  ...sharedAlignmentMobileUtilities,
  ...fxbMobileUtilities
];

export default function Flex() {
  return (
    <FoundationSection
      id="utilities-flex"
    >
      <div className="fxb fcol gp10">
        <div>
          <h4 className="mgt0 mgb4 font-bold">Column Layout (.uls-column)</h4>
          <ClassPropertyTable rows={columnUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 font-bold">Flex Helper (.fxb)</h4>
          <ClassPropertyTable rows={fxbAllUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 font-bold">Shared & Item Utilities</h4>
          <ClassPropertyTable rows={sharedAndItemUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 font-bold">Mobile (mv) Variants</h4>
          <ClassPropertyTable rows={mobileMvUtilities} />
        </div>
      </div>
    </FoundationSection>
  );
}
