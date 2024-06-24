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
      : 'bg-white border-white text-zinc-900 ';
  }

  defaultClassNames =
    'block bento-grid-block min-h-32 col-span-6 md:col-span-3 border rounded p-6 ' +
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
