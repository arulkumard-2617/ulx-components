import Route from '@ember/routing/route';
import { DatePickerFeatureItems } from '../../documentation/components/date-picker/features';
import meta from '../../documentation/components/date-picker/meta';

export default class ComponentsFormDatePickerRoute extends Route {
	model() {
		return {
			features: DatePickerFeatureItems,
			meta
		};
	}
}
