import {prefs} from "./prefs.component";
import {prefsState} from "./prefs.states";

export const PREFS_MODULE = angular.module('prefs', [])
  .component('prefs', prefs)
  .config(['$stateRegistryProvider', function ($stateRegistry) {
  $stateRegistry.register(prefsState);
  }]);
