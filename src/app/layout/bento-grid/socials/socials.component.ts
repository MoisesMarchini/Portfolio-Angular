import { Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent extends BlockComponent {
  override extendedClassNames: string =
    'col-span-12 hover:scale-100 md:col-span-4 p-0 bg-transparent border-0';
}
