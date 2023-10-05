import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';
import { environment } from 'src/app/environments/environment';

const TEXT1 = ['FRONT-END', 'BACK-END', 'GAME'];
const TEXT2 = 'DEVELOPER';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeInOutAnimation]
})
export class HeaderComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  line1 = 'Moisés Marchini';
  private intervalSubscription?: Subscription;
  private currentText = 0;
  get animatedText1(){ return TEXT1[this.currentText]};
  animatedText = TEXT1;
  animatedText2 = TEXT2;

  socialMediaLinks = [
    {
      fontawesomeIcon: 'fa-brands fa-linkedin-in',
      link: environment.socialMediaLinks.linkedin
    },
    {
      fontawesomeIcon: 'fa-brands fa-github',
      link: environment.socialMediaLinks.github
    },
    {
      fontawesomeIcon: 'fa-brands fa-itch-io',
      link: environment.socialMediaLinks.itchIo
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.startIntervalTask();
    environment.boxMargin
  }

  startIntervalTask() {
    this.intervalSubscription = interval(4000).subscribe(() => {
      if (environment.currentActiveSection === 0)
        this.currentText = (this.currentText + 1) % TEXT1.length;
    });
  }
}
