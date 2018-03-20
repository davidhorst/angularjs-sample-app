
/**
 * The controller for the `shell` component
 */

class ShellController {
  constructor($mdSidenav, $state) {
    this.$state = $state;
  }
  toggleSideNav() {
    $mdSidenav.toggle();
  }

  isActive(glob) {
    return this.$state.includes(glob);
  }

}

ShellController.$inject = ['$mdSidenav','$state'];

export const shell = {
  controller: ShellController,

  templateUrl: 'app/common/shell/shell.html' 
};
