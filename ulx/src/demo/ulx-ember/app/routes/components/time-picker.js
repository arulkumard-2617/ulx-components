import Route from '@ember/routing/route';
import { TimePickerFeatureItems } from '../../documentation/components/time-picker/features';
import meta from '../../documentation/components/time-picker/meta';
import builderSchema from '../../documentation/components/time-picker/builder-schema';

export default class ComponentsFormTimePickerRoute extends Route {
	model() {
		return {
			features: TimePickerFeatureItems,
			meta,
			builderSchema
		};
	}
}
