import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  titleVal = 'Contact Form';
  contactMethods = [
    {
      id: 1,
      name: 'Email'
    },
    {
      id: 2,
      name: 'Phone'
    },
    {
      id: 3,
      name: 'SMS'
    },
    {
      id: 4,
      name: 'Postal'
    },
    {
      id: 5,
      name: 'Fax'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  firstNameValue(firstName: NgModel): void {
    console.log(firstName);
  }
  contactFormSubmit(contactForm: NgForm): void {
    console.log(contactForm.value);
  }

}
