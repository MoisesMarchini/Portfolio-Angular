import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactLinks: {title: string, link: string, fontawesomeIcon?: string}[] = [
    {
      title: 'Whatsapp',
      link: '#',
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square'
    },
    {
      title: 'E-mail',
      link: '#',
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square'
    },
    {
      title: 'Linkedin',
      link: '#',
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square'
    },
  ]

  constructor() { }

  ngOnInit() {

  }

}
