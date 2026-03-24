export function resolveRootDataQa(dataQaArg, componentName) {
	return dataQaArg ?? `ulx-${componentName}`;
}

export function buildDataQa(rootDataQa, part) {
	if (!part) {
		return rootDataQa;
	}

	return `${rootDataQa}-${part}`;
}
