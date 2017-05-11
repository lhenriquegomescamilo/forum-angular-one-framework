import { ContactsModel } from './contacts.model';

export class ContactSession {
    authToken: string 
    currentContact: ContactsModel

    constructor(authToken: string, contact: ContactsModel) {
        this.authToken = authToken;
        this.currentContact = contact;
        
    }
}