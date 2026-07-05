import Route from '@ember/routing/route';
import { TimePickerFeatureItems } from '../../documentation/components/time-picker/features';
import meta from '../../documentation/components/time-picker/meta';

export default class ComponentsFormTimePickerRoute extends Route {
	model() {
		return {
			features: TimePickerFeatureItems,
			meta
		};
	}
}
