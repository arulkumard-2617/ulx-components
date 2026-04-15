import Route from '@ember/routing/route';
import { DateRangePickerFeatureItems } from '../../documentation/components/date-range-picker/features';
import meta from '../../documentation/components/date-range-picker/meta';
import builderSchema from '../../documentation/components/date-range-picker/builder-schema';

export default class ComponentsFormDateRangePickerRoute extends Route {
	model() {
		return {
			features: DateRangePickerFeatureItems,
			meta,
			builderSchema
		};
	}
}
