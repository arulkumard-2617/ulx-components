import React from 'react';
import Overview from './Overview';
import Theming from './Theming';
import Palette from './Palette';

export { Overview, Theming, Palette };

export default function Colors() {
	return (
		<div className="ulx-foundation-page">
			<Palette />
			<Overview />
			<Theming />
		</div>
	);
}
