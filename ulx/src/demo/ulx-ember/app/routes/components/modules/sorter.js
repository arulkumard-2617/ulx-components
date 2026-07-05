import Route from "@ember/routing/route";
import { SorterFeatureItems } from "../../../documentation/components/modules/sorter/features";
import meta from "../../../documentation/components/modules/sorter/meta";

export default class ComponentsModulesSorterRoute extends Route {
	model() {
		return {
			features: SorterFeatureItems,
			meta
		};
	}
}
