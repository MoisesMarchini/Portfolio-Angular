import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  HostBinding,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-default-button',
  styleUrls: ['./default-button.component.scss'],
  template: `
    <a [routerLink]="routerLink" (click)="_onClick()" [class]="classes">
      <ng-content></ng-content>
    </a>
  `,
})
export class DefaultButtonComponent {
  @Input() routerLink?: string;
  @Input() customClasses?: string;
  @Output() onClick = new EventEmitter<any>();

  get classes() {
    return twMerge(
      'rounded-full flex flex-nowrap place-items-baseline transition-colors cursor-pointer bg-green-700 border-green-500 border text-zinc-50 px-3 py-1 hover:bg-green-500',
      this.customClasses
    );
  }

  constructor(private elementRef: ElementRef) {}

  @HostBinding('class') get classNames() {
    return twMerge('grid', this.elementRef.nativeElement.className);
  }

  _onClick() {
    this.onClick.emit();
  }
}
