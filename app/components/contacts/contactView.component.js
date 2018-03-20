/**
 * This component renders details for a single contact
 * 
 * A button messages the contact by linking to `mymessages.compose` state passing the email as a state parameter.
 * Another button edits the contact by linking to `contacts.contact.edit` state.
 */

export const contactView = {
  bindings: {contact: '<'},

  template: `
    <div class="contact">
    
      <contact-detail contact="$ctrl.contact"></contact-detail>
      
    </div>
`};
