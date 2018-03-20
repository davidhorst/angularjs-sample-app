import {AppConfig} from "./appConfig.service";
import {AuthService} from "./auth.service";
import {Contacts, Folders, Messages} from "./dataSources.service";
import {DialogService} from "./dialog.service";
import {LoadingIndicatorService} from "./loadingIndicator.service";
import {authHookRunBlock} from "./requiresAuth.hook";
import {loadingIndicatorHookRunBlock} from "./loadingIndicator.hook";
import { shell } from "./shell/shell.component";
import { sideNav } from "./shell/sideNav/sideNav.component";
import { topNav } from "./shell/topNav/topNav.component";
import { shellState } from "./shell/shell.state";
import { SideNavItemService } from "./shell/sideNav/menu.service";

export const CommonModule = angular.module('common', [])
  .service('AppConfig', AppConfig)
  .service('AuthService', AuthService)
  .service('Contacts', Contacts)
  .service('Folders', Folders)
  .service('Messages', Messages)
  .service('DialogService', DialogService)
  .service('LoadingIndicatorService', LoadingIndicatorService)
  .service('SideNavItemService', SideNavItemService)
  .component('shell', shell)
  .component('sideNav', sideNav)
  .component('topNav', topNav)
  .config(['$uiRouterProvider', function($uiRouter) {
    const $stateRegistry = $uiRouter.stateRegistry;
    $stateRegistry.register(shellState);
  }])
  .run(authHookRunBlock)
  .run(loadingIndicatorHookRunBlock)
  .name;
