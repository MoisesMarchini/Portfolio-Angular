import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';
import { environment } from 'src/app/environments/environment';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInOutAnimation]
})
export class ContactComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  contactLinks: {title: string, link: string, fontawesomeIcon?: string, fontawesomeIconSm?: string}[] = [
    {
      title: 'Whatsapp',
      link: environment.socialMediaLinks.phone,
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square',
      fontawesomeIconSm: 'fa-solid fa-arrow-up-right-from-square'
    },
    {
      title: 'Linkedin',
      link: environment.socialMediaLinks.linkedin,
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square',
      fontawesomeIconSm: 'fa-solid fa-arrow-up-right-from-square'
    },
  ]
  emailLink =
  {
    title: 'E-mail',
    link: '/'+environment.routeSelectors[3],
    fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square',
    fontawesomeIconSm: 'fa-solid fa-arrow-up-right-from-square'
  }
  get pageTitle() { return environment.sectionsTitle[2] }

  constructor() { }

  ngOnInit() {

  }

}
