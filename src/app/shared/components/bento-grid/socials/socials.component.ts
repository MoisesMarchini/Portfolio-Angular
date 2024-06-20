import { Component, HostBinding } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent extends BlockComponent {
  @HostBinding('class') override get classNames() {
    return twMerge(
      'col-span-12 md:col-span-6',
      this.elementRef.nativeElement.className
    );
  }
}
