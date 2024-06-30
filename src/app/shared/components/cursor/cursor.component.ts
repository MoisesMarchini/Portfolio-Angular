import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-cursor',
  styleUrls: ['./cursor.component.scss'],
  template: `
    <div
      class="cursor-wrapper"
      *ngIf="!disabled()"
      [style]="
        '--_left: ' +
        mouseX +
        'px; --_top: ' +
        mouseY +
        'px; --_cursor-color: ' +
        cursorColor()
      "
    >
      <div class="cursor cursor-back"></div>
      <div class="cursor cursor-front" style="z-index: 1"></div>
    </div>
  `,
})
export class CursorComponent {
  mouseX = 0;
  mouseY = 0;
  targetX = 0;
  targetY = 0;
  animationFrameId: number | undefined;
  cursorColor = () => (environment.darkMode ? 'rgb(63 63 70)' : 'white');

  disabled = () => window.innerWidth < 1024;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.animateFollower();
  }

  @HostBinding('class') get classNames() {
    return twMerge('hidden lg:block', this.elementRef.nativeElement.classList);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  animateFollower() {
    const deltaX = this.targetX - this.mouseX;
    const deltaY = this.targetY - this.mouseY;

    this.mouseX += deltaX * 0.05;
    this.mouseY += deltaY * 0.05;

    this.animationFrameId = requestAnimationFrame(() => this.animateFollower());
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
