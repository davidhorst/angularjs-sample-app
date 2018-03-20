
/**
 * The controller for the `shell` component
 */
class SideNavController {
  constructor(SideNavItemService) {
    this.menuItems = SideNavItemService.menuItems(); 
  }

  toggleSideNav(){
    this.$mdSidenav.toggle();
  }

}

SideNavController.$inject = ['SideNavItemService'];

export const sideNav = {
  controller: SideNavController,

  templateUrl: 'app/common/shell/sideNav/sideNav.html' 
};
