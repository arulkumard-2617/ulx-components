import React from 'react';
import Overview from './Overview';
import FontSizes from './FontSizes';
import FontWeights from './FontWeights';
import Headings from './Headings';
import LineHeights from './LineHeights';
import FontFamilies from './FontFamilies';
import TextAlignment from './TextAlignment';
import TextTransforms from './TextTransforms';

export {
	Overview,
	FontSizes,
	FontWeights,
	Headings,
	LineHeights,
	FontFamilies,
	TextAlignment,
	TextTransforms
};

export default function Typography() {
	return (
		<div className="ulx-foundation-page">
			<FontSizes />
			<FontWeights />
			<LineHeights />
			<FontFamilies />
			<TextAlignment />
			<TextTransforms />
			<Headings />
			<Overview />
		</div>
	);
}
