// Centralized namespace prefix for all components
const NAMESPACE = 'uls';

// Helper function to build component class names
function getComponentClass(componentName) {
  return `${NAMESPACE}-${componentName}`;
}

export { NAMESPACE, getComponentClass };
//# sourceMappingURL=component-config.js.map
