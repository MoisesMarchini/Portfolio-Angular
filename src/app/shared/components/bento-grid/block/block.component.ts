import { Component, ElementRef, HostBinding } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'block',
  styleUrls: ['./block.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class BlockComponent {
  constructor(public elementRef: ElementRef) {}

  @HostBinding('class') get classNames() {
    return twMerge(
      'block col-span-4 bg-zinc-800 border-zinc-700 border rounded p-4 text-white',
      this.elementRef.nativeElement.className
    );
  }
}
