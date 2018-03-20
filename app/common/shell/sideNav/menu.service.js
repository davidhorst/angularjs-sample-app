
export class SideNavItemService {
  constructor() {
    this.items = [
      {title: "Messages", state: "mymessages"},
      {title: "Contacts", state: "contacts"},
      {title: "Preferences", state: "prefs"}
    ];
  }

  menuItems(){
    return this.items;
  }
};

SideNavItemService.$inject = [];
