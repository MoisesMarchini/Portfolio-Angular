import { Component, ElementRef, HostBinding } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'default-container, .default-container, [default-container]',
  template: '<ng-content></ng-content>',
})
export class DefaultContainerComponent {
  private defaultClasses = 'p-4 ring-1 shadow-lg text-zinc-800 bg-white/90 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 rounded';
  private hostClasses = '';
  private lastClasses = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.hostClasses = this.elementRef.nativeElement.className;
  }

  @HostBinding('class') get classNames() {
    const newClassNames = twMerge(this.defaultClasses, this.hostClasses);
    if (newClassNames != this.lastClasses) {
      this.lastClasses = newClassNames;
    }

    return this.lastClasses;
  }
}
