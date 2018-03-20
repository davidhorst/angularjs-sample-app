import {contactDetail} from "./contactDetail.component";
import {contactList} from "./contactList.component";
import {contacts} from "./contacts.component";
import {contactView} from "./contactView.component";
import {editContact} from "./editContact.component";
import * as angular from "angular";

import {contactsState, editContactState, newContactState, viewContactState} from "./contacts.states";

export const CONTACTS_MODULE = angular.module('contacts', [])

  .component('contactView', contactView)
  .component('contacts', contacts)
  .component('editContact', editContact)
  .component('contactDetail', contactDetail)
  .component('contactList', contactList)

  .config(['$stateRegistryProvider', function($stateRegistry) {
    $stateRegistry.register(contactsState);
    $stateRegistry.register(newContactState);
    $stateRegistry.register(viewContactState);
    $stateRegistry.register(editContactState);
  }]);
