// Centralized namespace prefix for all components
export const NAMESPACE = 'uls';

// Helper function to build component class names
export function getComponentClass(componentName) {
    return `${NAMESPACE}-${componentName}`;
}
