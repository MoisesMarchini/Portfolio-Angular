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
    <ng-container *ngIf="!!routerLink">
      <a
        [routerLink]="routerLink"
        [target]="target ?? '_self'"
        (click)="_onClick()"
        [class]="classes"
      >
        <ng-template [ngTemplateOutlet]="content"></ng-template>
      </a>
    </ng-container>
    <ng-container *ngIf="!!externalLink">
      <a
        [href]="externalLink"
        [target]="target ?? '_blank'"
        (click)="_onClick()"
        [class]="classes"
      >
        <ng-template [ngTemplateOutlet]="content"></ng-template>
      </a>
    </ng-container>
    <ng-container *ngIf="!externalLink && !routerLink">
      <button
        (click)="_onClick()"
        [class]="classes"
      >
        <ng-template [ngTemplateOutlet]="content"></ng-template>
      </button>
    </ng-container>

    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class DefaultButtonComponent {
  @Input() routerLink?: string;
  @Input() externalLink?: string;
  @Input() target?: '_blank' | '_self';
  @Input() customClasses?: string;
  @Output() onClick = new EventEmitter<any>();
  get classes() {
    return twMerge(
      'rounded-full flex flex-nowrap place-items-baseline transition-colors cursor-pointer bg-teal-400 dark:bg-teal-700 border-teal-500 border text-white font-medium px-4 py-2 hover:bg-teal-500',
      this.customClasses
    );
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  @HostBinding('class') get classNames() {
    return twMerge('grid', this.elementRef.nativeElement.className);
  }

  _onClick() {
    this.onClick.emit();
  }
}
