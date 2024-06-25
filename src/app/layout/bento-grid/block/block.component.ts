import { Component, ElementRef, HostBinding } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'block',
  styleUrls: ['./block.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class BlockComponent {
  get blockColor() {
    return environment.darkMode
      ? 'bg-zinc-800 border-zinc-700 text-white '
      : 'bg-white border-0 text-zinc-900 ';
  }

  defaultClassNames =
    'block hover:scale-105 hover:z-10 bento-grid-block col-span-6 md:col-span-2 border rounded-lg p-6 ' +
    this.blockColor;
  extendedClassNames = '';
  constructor(public elementRef: ElementRef) {}

  @HostBinding('class') get classNames() {
    return twMerge(
      this.defaultClassNames,
      this.extendedClassNames,
      this.elementRef.nativeElement.className
    );
  }
}
