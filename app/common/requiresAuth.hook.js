/**
 * This run block registers a Transition Hook which protects
 * routes that requires authentication.
 *
 * This hook redirects to /login when both:
 * - The user is not authenticated
 * - The user is navigating to a state that requires authentication
 */
authHookRunBlock.$inject = ['$transitions', 'AuthService'];
export function authHookRunBlock($transitions, AuthService) {
  // Matches if the destination state's data property has a truthy 'requiresAuth' property
  const requiresAuthCriteria = {
    to: (state) => state.data && state.data.requiresAuth
  };

  // Function that returns a redirect for the current transition to the login state
  // if the user is not currently authenticated (according to the AuthService)

  const redirectToLogin = (transition) => {
    const AuthService = transition.injector().get('AuthService');
    const $state = transition.router.stateService;
    if (!AuthService.isAuthenticated()) {
      return $state.target('login', undefined, { location: false });
    }
  };

  // Register the "requires auth" hook with the TransitionsService
  $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10});
}