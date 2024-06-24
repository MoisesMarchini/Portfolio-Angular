import { Component, ElementRef, HostBinding } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'bento-grid',
  template: ` <ng-content></ng-content> `,
})
export class BentoGridComponent {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class') get classNames() {
    return twMerge(
      'grid grid-cols-12 gap-4 mx-auto w-full grid-flow-dense',
      this.elementRef.nativeElement.className ?? ''
    );
  }
}
