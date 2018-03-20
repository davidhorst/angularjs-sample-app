/**
 * The controller for the `login` component
 *
 * The `login` method validates the credentials.
 * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
 */
class LoginController {
  constructor(AppConfig, AuthService, $state) {
    this.usernames = AuthService.usernames;

    this.credentials = {
      username: AppConfig.emailAddress,
      password: 'password'
    };

    this.login = (credentials) => {
      this.authenticating = true;

      const returnToOriginalState = () => {
        const state = this.returnTo.state();
        const params = this.returnTo.params();
        const options = Object.assign({}, this.returnTo.options(), { reload: true });
        $state.go(state, params, options);
      };

      const showError = (errorMessage) =>
        this.errorMessage = errorMessage;

      AuthService.authenticate(credentials.username, credentials.password)
        .then(returnToOriginalState)
        .catch(showError)
        .finally(() => this.authenticating = false);
    };
  }
}
LoginController.$inject = ['AppConfig', 'AuthService', '$state'];

/**
 * This component renders a faux authentication UI
 *
 * It prompts for the username/password (and gives hints with bouncy arrows)
 * It shows errors if the authentication failed for any reason.
 */
export const login = {
  bindings: { returnTo: '<' },

  controller: LoginController,
  templateUrl: 'app/components/login/login.tmpl.html'
};
