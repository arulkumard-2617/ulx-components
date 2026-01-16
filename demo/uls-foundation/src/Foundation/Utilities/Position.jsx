import React from 'react';
import FoundationSection from '../../components/FoundationSection';
import ClassPropertyTable from '../../components/ClassPropertyTable';

const positionTypeUtilities = [
  { className: '.static', property: 'position: static;' },
  { className: '.relative', property: 'position: relative;' },
  { className: '.absolute', property: 'position: absolute;' },
  { className: '.fixed', property: 'position: fixed;' },
  { className: '.sticky', property: 'position: sticky;' },
  { className: '.position-initial', property: 'position: initial;' },
  { className: '.position-inherit', property: 'position: inherit;' },
  { className: '.position-unset', property: 'position: unset;' }
];

const topUtilities = [
  { className: '.tp-auto', property: 'top: auto;' },
  { className: '.tp0', property: 'top: 0;' },
  { className: '.tp1', property: 'top: 0.125rem; (2px)' },
  { className: '.tp2', property: 'top: 0.25rem; (4px)' },
  { className: '.tp3', property: 'top: 0.375rem; (6px)' },
  { className: '.tp4', property: 'top: 0.5rem; (8px)' },
  { className: '.tp5', property: 'top: 0.625rem; (10px)' },
  { className: '.tp6', property: 'top: 0.75rem; (12px)' },
  { className: '.tp8', property: 'top: 1rem; (16px)' },
  { className: '.tp10', property: 'top: 1.25rem; (20px)' },
  { className: '.tp12', property: 'top: 1.5rem; (24px)' },
  { className: '.tp16', property: 'top: 2rem; (32px)' },
  { className: '.tp20', property: 'top: 2.5rem; (40px)' },
  { className: '.tp24', property: 'top: 3rem; (48px)' },
  { className: '.tp32', property: 'top: 4rem; (64px)' },
  { className: '.tp40', property: 'top: 5rem; (80px)' },
  { className: '.tp48', property: 'top: 6rem; (96px)' },
  { className: '.tp56', property: 'top: 7rem; (112px)' },
  { className: '.tp64', property: 'top: 8rem; (128px)' },
  { className: '.tp-full', property: 'top: 100%;' },
  { className: '.tp-half', property: 'top: 50%;' }
];

const rightUtilities = [
  { className: '.rt-auto', property: 'right: auto;' },
  { className: '.rt0', property: 'right: 0;' },
  { className: '.rt1', property: 'right: 0.125rem; (2px)' },
  { className: '.rt2', property: 'right: 0.25rem; (4px)' },
  { className: '.rt3', property: 'right: 0.375rem; (6px)' },
  { className: '.rt4', property: 'right: 0.5rem; (8px)' },
  { className: '.rt5', property: 'right: 0.625rem; (10px)' },
  { className: '.rt6', property: 'right: 0.75rem; (12px)' },
  { className: '.rt8', property: 'right: 1rem; (16px)' },
  { className: '.rt10', property: 'right: 1.25rem; (20px)' },
  { className: '.rt12', property: 'right: 1.5rem; (24px)' },
  { className: '.rt16', property: 'right: 2rem; (32px)' },
  { className: '.rt20', property: 'right: 2.5rem; (40px)' },
  { className: '.rt24', property: 'right: 3rem; (48px)' },
  { className: '.rt32', property: 'right: 4rem; (64px)' },
  { className: '.rt40', property: 'right: 5rem; (80px)' },
  { className: '.rt48', property: 'right: 6rem; (96px)' },
  { className: '.rt56', property: 'right: 7rem; (112px)' },
  { className: '.rt64', property: 'right: 8rem; (128px)' },
  { className: '.rt-full', property: 'right: 100%;' },
  { className: '.rt-half', property: 'right: 50%;' }
];

const bottomUtilities = [
  { className: '.bt-auto', property: 'bottom: auto;' },
  { className: '.bt0', property: 'bottom: 0;' },
  { className: '.bt1', property: 'bottom: 0.125rem; (2px)' },
  { className: '.bt2', property: 'bottom: 0.25rem; (4px)' },
  { className: '.bt3', property: 'bottom: 0.375rem; (6px)' },
  { className: '.bt4', property: 'bottom: 0.5rem; (8px)' },
  { className: '.bt5', property: 'bottom: 0.625rem; (10px)' },
  { className: '.bt6', property: 'bottom: 0.75rem; (12px)' },
  { className: '.bt8', property: 'bottom: 1rem; (16px)' },
  { className: '.bt10', property: 'bottom: 1.25rem; (20px)' },
  { className: '.bt12', property: 'bottom: 1.5rem; (24px)' },
  { className: '.bt16', property: 'bottom: 2rem; (32px)' },
  { className: '.bt20', property: 'bottom: 2.5rem; (40px)' },
  { className: '.bt24', property: 'bottom: 3rem; (48px)' },
  { className: '.bt32', property: 'bottom: 4rem; (64px)' },
  { className: '.bt40', property: 'bottom: 5rem; (80px)' },
  { className: '.bt48', property: 'bottom: 6rem; (96px)' },
  { className: '.bt56', property: 'bottom: 7rem; (112px)' },
  { className: '.bt64', property: 'bottom: 8rem; (128px)' },
  { className: '.bt-full', property: 'bottom: 100%;' },
  { className: '.bt-half', property: 'bottom: 50%;' }
];

const leftUtilities = [
  { className: '.lt-auto', property: 'left: auto;' },
  { className: '.lt0', property: 'left: 0;' },
  { className: '.lt1', property: 'left: 0.125rem; (2px)' },
  { className: '.lt2', property: 'left: 0.25rem; (4px)' },
  { className: '.lt3', property: 'left: 0.375rem; (6px)' },
  { className: '.lt4', property: 'left: 0.5rem; (8px)' },
  { className: '.lt5', property: 'left: 0.625rem; (10px)' },
  { className: '.lt6', property: 'left: 0.75rem; (12px)' },
  { className: '.lt8', property: 'left: 1rem; (16px)' },
  { className: '.lt10', property: 'left: 1.25rem; (20px)' },
  { className: '.lt12', property: 'left: 1.5rem; (24px)' },
  { className: '.lt16', property: 'left: 2rem; (32px)' },
  { className: '.lt20', property: 'left: 2.5rem; (40px)' },
  { className: '.lt24', property: 'left: 3rem; (48px)' },
  { className: '.lt32', property: 'left: 4rem; (64px)' },
  { className: '.lt40', property: 'left: 5rem; (80px)' },
  { className: '.lt48', property: 'left: 6rem; (96px)' },
  { className: '.lt56', property: 'left: 7rem; (112px)' },
  { className: '.lt64', property: 'left: 8rem; (128px)' },
  { className: '.lt-full', property: 'left: 100%;' },
  { className: '.lt-half', property: 'left: 50%;' }
];

export default function PositionUtilities() {
  return (
    <FoundationSection
      id="utilities-position"
      
    >
      <div className="fxb fcol gp10">
        <div>
          <h4 className="mgt0 mgb4 font-bold">Position Types</h4>
          <ClassPropertyTable rows={positionTypeUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 font-bold">Top Position</h4>
          <ClassPropertyTable rows={topUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 font-bold">Right Position</h4>
          <ClassPropertyTable rows={rightUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 font-bold">Bottom Position</h4>
          <ClassPropertyTable rows={bottomUtilities} />
        </div>

        <div>
          <h4 className="mgt0 mgb4 font-bold">Left Position</h4>
          <ClassPropertyTable rows={leftUtilities} />
        </div>
      </div>
    </FoundationSection>
  );
}
