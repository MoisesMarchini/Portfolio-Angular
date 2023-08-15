import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactLinks: {title: string, link: string, fontawesomeIcon?: string}[] = [
    {
      title: 'Whatsapp',
      link: environment.socialMediaLinks.phone,
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square'
    },
    {
      title: 'E-mail',
      link: environment.socialMediaLinks.email,
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square'
    },
    {
      title: 'Linkedin',
      link: environment.socialMediaLinks.linkedin,
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square'
    },
  ]

  constructor() { }

  ngOnInit() {

  }

}
