import { Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'socials-block',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent extends BlockComponent {
  socialLinks = environment.socialMediaLinks;
  override extendedClassNames: string =
    'col-span-12 hover:scale-100 md:col-span-4 p-0 bg-transparent border-0';
}
