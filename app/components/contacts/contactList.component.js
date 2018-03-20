/**
 * This component renders a list of contacts.
 * 
 * At the top is a "new contact" button.
 * Each list item is a clickable link to the `contacts.contact` details substate
 */
export const contactList = {
  bindings: { contacts: '<' },
  templateUrl: 'app/components/contacts/contactList.tmpl.html'
};
