import { Component, OnInit } from '@angular/core';
import { ContactsModule } from "app/contacts/contacts.module";
import { ContactsModel } from "app/models/contacts.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  get contacts(): ContactsModel[]{
    return [
      new ContactsModel("aaa@aaa.com.br","","AAAA","8888"),
      new ContactsModel("aaa@aaa.com.br","","AAAA","8888"),
      new ContactsModel("bb@aaa.com.br","","AAAA","8888"),
      new ContactsModel("ccc@aaa.com.br","","AAAA","8888"),
      new ContactsModel("ddd@aaa.com.br","","AAAA","8888"),
      new ContactsModel("ggg@aaa.com.br","","AAAA","8888"),
      new ContactsModel("fff@aaa.com.br","","AAAA","8888"),
      new ContactsModel("aaa@aaa.com.br","","AAAA","8888")
    ]
  }

}
