import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  @HostBinding('class') get classNames() {
    return 'col-span-12 md:col-span-6';
  }
}
