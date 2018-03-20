import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';
import {appState} from "./app.states";


export const materialConfigBlock = ['$mdThemingProvider', ($mdThemingProvider) => { 
  
  const newBlueGreyMap = $mdThemingProvider.extendPalette('blue-grey', {
    black: '#000000'
  });

  $mdThemingProvider.definePalette('newBlueGrey', newBlueGreyMap);

  $mdThemingProvider.theme('default')
    .primaryPalette('newBlueGrey', {
      default: '500', // by default use shade 500 from the blue-grey palette for primary intentions
      'hue-1': '700', // use shade 700 for the <code>md-hue-1</code> class
      'hue-2': '800', // use shade 800 for the <code>md-hue-2</code> class
      'hue-3': 'A200' // use shade A200 for the <code>md-hue-3</code> class
    })
    .accentPalette('light-blue', {
      default: '700' // use shade 200 for default, and keep all other shades the same
    });

}];

export const uiRouterConfigBlock = ['$uiRouterProvider', '$locationProvider', ($uiRouter, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $uiRouter.plugin(StickyStatesPlugin); // related to tabbed interface
  $uiRouter.plugin(DSRPlugin); // related to tabbed interface
  // Show the UI-Router Visualizer
  // import("@uirouter/visualizer").then(module => $uiRouter.plugin(module.Visualizer));
}];

// export const baseStateConfigBlock = ['$uiRouterProvider', function($uiRouter) {
//   const $stateRegistry = $uiRouter.stateRegistry;
//   $stateRegistry.register(appState);
// }];

export const otherwiseConfigBlock = ['$uiRouterProvider', function($uiRouter) {
  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({ state: 'welcome' });
}];