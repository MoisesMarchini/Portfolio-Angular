import { ChangeDetectorRef, Component, ElementRef, HostBinding } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'bento-grid',
  template: ` <ng-content></ng-content> `,
})
export class BentoGridComponent {
  private hostClasses = '';
  private lastMergedClasses = '';
  private defaultClasses = 'grid grid-cols-12 gap-4 mx-auto w-full grid-flow-dense';

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.hostClasses = this.elementRef.nativeElement.className;
  }

  @HostBinding('class') get classNames() {
    const currentClasses = twMerge(this.defaultClasses, this.hostClasses);
    if (currentClasses !== this.lastMergedClasses) {
      this.lastMergedClasses = currentClasses;
    }
    return this.lastMergedClasses;
  }
}
