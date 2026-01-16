import Route from '@ember/routing/route';

export default class UtilitiesIndexRoute extends Route {
  async model() {
    // Import React Utilities component from uls-foundation using webpack alias
    let ReactUtilities;
    try {
      const utilitiesModule = await import('uls-foundation/Foundation/Utilities');
      ReactUtilities = utilitiesModule.default ?? utilitiesModule.Utilities;
    } catch (error) {
      console.error('Could not load React Utilities component:', error);
      if (error.message) {
        console.error('Error message:', error.message);
      }
      if (error.stack) {
        console.error('Error stack:', error.stack);
      }
    }

    return {
      useReactComponents: !!ReactUtilities,
      ReactUtilities
    };
  }
}

