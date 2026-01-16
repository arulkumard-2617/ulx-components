import React from 'react';
import Overview from './Overview';
import Display from './Display';
import Position from './Position';
import Size from './Size';
import NavLinks from './NavLinks';
import UtilitiesNav from './UtilitiesNav';
import Space from './Space';
import Gap from './Gap';
import GridUtilities from './GridUtilities';
import Flex from './Flex';
import Cursor from './Cursor';
import TextAlign from './TextAlign';
import TextTransform from './TextTransform';
import TextDecoration from './TextDecoration';
import VerticalAlign from './VerticalAlign';
import FloatUtilities from './Float';
import ClearUtilities from './Clear';
import WordBreakUtilities from './WordBreak';
import VisibilityUtilities from './Visibility';
import OverflowUtilities from './Overflow';
import ColorUtilities from './ColorUtilities';
import HoverUtilities from './Hover';
import LineClampUtilities from './LineClamp';
import BorderUtilities from './BorderUtilities';
import ShadowUtilities from './Shadow';
import ZIndexUtilities from './ZIndex';
import OpacityUtilities from './Opacity';
import FilterUtilities from './Filter';
import ObjectFitUtilities from './ObjectFit';
import UserSelectUtilities from './UserSelect';
import PointerEventsUtilities from './PointerEvents';
import WhiteSpaceUtilities from './WhiteSpace';

export {
  Overview, Display, Position, Size, NavLinks, UtilitiesNav, 
  Space, Gap, GridUtilities, Flex, Cursor, TextAlign, TextTransform, 
  TextDecoration, VerticalAlign, FloatUtilities, ClearUtilities, 
  WordBreakUtilities, VisibilityUtilities, OverflowUtilities, 
  ColorUtilities, HoverUtilities, LineClampUtilities, BorderUtilities, 
  ShadowUtilities, ZIndexUtilities, OpacityUtilities, 
  FilterUtilities, ObjectFitUtilities, UserSelectUtilities, 
  PointerEventsUtilities, WhiteSpaceUtilities
};

export default function Utilities() {
  return (
    <div className="uls-foundation-page">
      <UtilitiesNav />
      <Space />
      <Gap />
      <GridUtilities />
      <Flex />
      <Cursor />
      <Display />
      <TextAlign />
      <TextTransform />
      <TextDecoration />
      <VerticalAlign />
      <Position />
      <FloatUtilities />
      <ClearUtilities />
      <WordBreakUtilities />
      <VisibilityUtilities />
      <OverflowUtilities />
      <ColorUtilities />
      <HoverUtilities />
      <LineClampUtilities />
      <BorderUtilities />
      <ShadowUtilities />
      <ZIndexUtilities />
      <OpacityUtilities />
      <FilterUtilities />
      <ObjectFitUtilities />
      <UserSelectUtilities />
      <PointerEventsUtilities />
      <WhiteSpaceUtilities />
      <Size />
      <NavLinks />
      <Overview />
    </div>
  );
}
