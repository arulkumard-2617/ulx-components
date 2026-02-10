import React from 'react';
import Overview from './Overview';
import SpacingScale from './SpacingScale';
import Utilities from './Utilities';

export { Overview, SpacingScale, Utilities };

export default function Spacing() {
	return (
		<div className="ulx-foundation-page">
			<Overview />
			<SpacingScale />
			<Utilities />
		</div>
	);
}
