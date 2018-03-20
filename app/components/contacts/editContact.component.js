/**
 * The controller for the editContact component
 *
 * This component is used by both `contacts.contact.edit` and `contacts.new` states.
 *
 * The component makes a copy of the contqct data for editing.
 * The new copy and original (pristine) copy are used to determine if the contact is "dirty" or not.
 * If the user navigates to some other state while the contact is "dirty", the `uiCanExit` component
 * hook asks the user to confirm navigation away, losing any edits.
 *
 * The Delete Contact button is wired to the `remove` method, which:
 * - asks for confirmation from the user
 * - deletes the resource from REST API
 * - navigates back to the contacts grandparent state using relative addressing `^.^`
 *   the `reload: true` option re-fetches the contacts list from the server
 *
 * The Save Contact button is wired to the `save` method which:
 * - saves the REST resource (PUT or POST, depending)
 * - navigates back to the parent state using relative addressing `^`.
 *   when editing an existing contact, this returns to the `contacts.contact` "view contact" state
 *   when creating a new contact, this returns to the `contacts` list.
 *   the `reload: true` option re-fetches the contacts resolve data from the server
 */
class EditContactController {
  constructor($state, DialogService, Contacts) {
    this.$state = $state;
    this.DialogService = DialogService;
    this.Contacts = Contacts;
  }

  $onInit() {
    // Make an editable copy of the pristineContact
    this.contact = angular.copy(this.pristineContact);
  }

  uiCanExit(event) {
    if (this.canExit || angular.equals(this.contact, this.pristineContact)) {
      return true;
    }

    const message = 'You have unsaved changes to this contact.';
    const question = 'Navigate away and lose changes?';
    return this.DialogService.confirm(event, message, question);
  }

  /** Ask for confirmation, then delete the contact, then go to the grandparent state ('contacts') */
  remove(contact) {
    this.DialogService.confirm(`Delete contact: ${contact.name.first} ${contact.name.last}`)
      .then(() => this.Contacts.remove(contact))
      .then(() => this.canExit = true)
      .then(() => this.$state.go("contacts", {}, { reload: true }));
  }

  /** Save the contact, then go to the grandparent state ('contacts') */
  save(contact) {
    this.Contacts.save(contact)
      .then(() => this.canExit = true)
      .then(() => {
        this.$state.go("^");
      });
  }
}
EditContactController.$inject = ['$state', 'DialogService', 'Contacts'];

/**
 * This component edits a single contact.
 *
 * Editable fields are bound to the contact.
 * A button cancels editing and returns to the contact view by linking to the parent state using `^` relative addressing.
 * Another button saves the contact.
 * A third button deletes the bcontact.
 */
export const editContact =  {
  bindings: { pristineContact: '<' },

  controller: EditContactController,
  templateUrl: 'app/components/contacts/editContact.tmpl.html'
};
