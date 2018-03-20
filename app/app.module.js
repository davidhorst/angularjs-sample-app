/* Angular Framework */
import * as angular from "angular";

/* Angular Material and Supporting Libs  */
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

/* Angular UI Router */
import uiRouter from "@uirouter/angularjs";

/* Other External Libs  */
import ocLazyLoad from "oclazyload";

/* Internal Goodies */
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';
import { materialConfigBlock, uiRouterConfigBlock, otherwiseConfigBlock } from './app.config';

export const App = angular.module("app", [
  'ngMaterial',
  uiRouter,
  ocLazyLoad,
  ComponentsModule,
  CommonModule
  
  // remaining modules are lazy loaded via future states in components.states.js
])
  .config(materialConfigBlock)
  .config(uiRouterConfigBlock)
  .config(otherwiseConfigBlock);

