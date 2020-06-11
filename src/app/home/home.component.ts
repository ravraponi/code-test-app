import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contactList: Contact[] = [];
  tableColumns  :  string[] =  ['name', 'company', 'email', 'phone', 'address'];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.showContacts();
  }

  showContacts() {
    this.contactService.getContactList()
      .subscribe((data: any[]) => {
        console.log(data);
        this.contactList = data;
      })
  }

}
