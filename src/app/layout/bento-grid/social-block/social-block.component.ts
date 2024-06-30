import { Component, Input } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'social-block',
  templateUrl: './social-block.component.html',
  styleUrls: ['./social-block.component.scss'],
})
export class SocialBlockComponent extends BlockComponent {
  @Input() media: 'linkedin' | 'github' | 'itchIo' | 'email' | 'phone' =
    'itchIo';

  hrefLink = environment.socialMediaLinks[this.media];
  loaded = false;

  get color() {
    switch (this.media) {
      case 'linkedin':
        return 'blue';
      case 'github':
        return 'gray';
      case 'itchIo':
        return 'red';
      case 'phone':
        return 'green';
      case 'email':
        return 'blue';
      default:
        return 'blue';
    }
  }

  getMediaIcon() {
    switch (this.media) {
      case 'linkedin':
        return 'fa-linkedin-in';
      case 'github':
        return 'fa-github';
      case 'itchIo':
        return 'fa-itch-io';
      case 'email':
        return 'fa-gmail';
      case 'phone':
        return 'fa-whatsapp';
      default:
        return 'red';
    }
  }

  override extendedClassNames = `bento-grid-block p-0 text-5xl col-span-1 md:col-span-1 text-white`; //bg-${this.color}-700 border-${this.color}-500 hover:bg-${this.color}-500`;

  ngOnInit() {
    this.extendedClassNames = `bento-grid-block p-0 text-5xl col-span-1 md:col-span-1 text-white bg-${this.color}-700 border-${this.color}-500 hover:bg-${this.color}-500`;
  }
}
