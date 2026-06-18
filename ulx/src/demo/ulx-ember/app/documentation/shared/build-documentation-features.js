// ==========================================================================
// AI documentation feature builders
// ==========================================================================

export function buildGuidanceFeatureItem(usages, routeKey, keyParamNames = []) {
  const { routeKey: usagesRouteKey, keyParamNames: usagesKeyParams, ...guidance } =
    usages;

  const resolvedRouteKey = routeKey ?? usagesRouteKey;
  const resolvedKeyParams = keyParamNames.length
    ? keyParamNames
    : usagesKeyParams ?? [];

  return {
    id: 'guidance',
    sectionNav: 'Guidance',
    guidance: {
      summary: guidance.responsibility ?? '',
      usages: guidance,
      routeKey: resolvedRouteKey,
      paramNames: resolvedKeyParams,
    },
  };
}

/** @deprecated Use buildGuidanceFeatureItem */
export function buildUsagesFeatureItem(usages) {
  return buildGuidanceFeatureItem(usages);
}

/** @deprecated Use buildGuidanceFeatureItem */
export function buildKeyArgumentsFeatureItem(routeKey, paramNames) {
  return {
    id: 'key-arguments',
    sectionNav: 'Key arguments',
    keyArguments: { routeKey, paramNames },
  };
}

/**
 * @deprecated Guidance now lives on the GUIDANCE tab (see component-layout + usages.js).
 * Kept for backwards compatibility; returns featureItems unchanged.
 */
export function insertAiDocumentationFeatures(featureItems, options = {}) {
  void options;
  return featureItems;
}

/** @deprecated Use insertAiDocumentationFeatures */
export function prependAiDocumentationFeatures(featureItems, options = {}) {
  return insertAiDocumentationFeatures(featureItems, options);
}
