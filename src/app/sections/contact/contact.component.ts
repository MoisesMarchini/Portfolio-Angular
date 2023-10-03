import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/animations/fade-in-out.animation';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInOutAnimation]
})
export class ContactComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

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
