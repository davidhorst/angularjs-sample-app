
/**
 * The controller for the `shell` component
 */
class TopNavController {
  constructor($mdSidenav, AppConfig, AuthService, $state, $transitions, LoadingIndicatorService) {
    
    this.AuthService = AuthService;
    this.$state = $state;
    this.$mdSidenav = $mdSidenav;
    this.emailAddress = AppConfig.emailAddress;
    this.isAuthenticated = AuthService.isAuthenticated();

  }
  
  toggleSideNav(){
    this.$mdSidenav('sidenav').toggle();
  }
  
  logout() {
    const {AuthService, $state} = this;
    AuthService.logout();
    
    // Reload states after authentication change
    return $state.go('welcome', {}, { reload: true });
  }
}


TopNavController.$inject = [
  '$mdSidenav',
  'AppConfig',
  'AuthService', 
  '$state', 
  '$transitions', 
  'LoadingIndicatorService' 
];

export const topNav = {
  controller: TopNavController,

  templateUrl: 'app/common/shell/topNav/topNav.html' 
};