import {welcome} from "./main/welcome.component";
import {login} from "./login/login.component";
import {loginState} from "./login/login.states";
import { welcomeState } from "./main/main.states";
import { contactsFutureState, prefsFutureState, mymessagesFutureState } from "./future.states";

export const ComponentsModule = angular.module('components', [])
  .config(['$uiRouterProvider', function($uiRouter) {
    // Enable tracing of each TRANSITION... (check the javascript console)
    // This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
    // Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
    $uiRouter.trace.enable(1);

    // If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
    const $urlService = $uiRouter.urlService;
    $urlService.rules.otherwise({ state: 'welcome' });

    const $stateRegistry = $uiRouter.stateRegistry;
    $stateRegistry.register(loginState);
    $stateRegistry.register(welcomeState);

    $stateRegistry.register(contactsFutureState);
    $stateRegistry.register(prefsFutureState);
    $stateRegistry.register(mymessagesFutureState);
  }])

  .component('welcome', welcome)
  .component('login', login)
  .name;

  