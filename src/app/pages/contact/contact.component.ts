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

  emailLink =
    {
      title: 'E-mail',
      // link: '/'+environment.routeSelectors[3],
      link: 'mailto:moisesmarchinipereira@gmail.com',
      fontawesomeIcon: 'fa-solid fa-arrow-up-right-from-square',
      fontawesomeIconSm: 'fa-solid fa-arrow-up-right-from-square'
    }

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
    this.emailLink
  ]
  get pageTitle() { return environment.sectionsTitle[2] }

  constructor() { }

  ngOnInit() {

  }

}
