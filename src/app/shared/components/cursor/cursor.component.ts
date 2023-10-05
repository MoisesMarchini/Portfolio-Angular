import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CursorHelper } from 'src/app/shared/helpers/CursorHelper';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {
  @ViewChild('cursor') cursor!: ElementRef;
  private cursorElement!: HTMLElement;
  private buttonRect: DOMRect | null = null;
  private defaultCursorSize = '1.5rem';
  private animDuration = 800;

  constructor() {}

  ngAfterViewInit() {
    this.cursorElement = this.cursor.nativeElement;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const isPointerCursor = window.getComputedStyle(e.target as Element).cursor === 'pointer';
    const buttonElement = e.target as HTMLElement;
    const buttonClassList = buttonElement.classList;

    const btnNoMarginClass = buttonClassList.contains('cursor-m-0') || buttonClassList.contains('cursor-0');
    const btnNoOpacityClass = buttonClassList.contains('cursor-opa-0') || buttonClassList.contains('cursor-0');
    const btnNoGrowClass = buttonClassList.contains('cursor-grow-0');

    CursorHelper.x = e.clientY;
    CursorHelper.y = e.clientY;

    const x = (e.clientX - this.cursorElement.offsetWidth / 2),
          y = e.clientY - this.cursorElement.offsetHeight / 2;

    const keyframes: {transform: string} = {
      transform: `translate(${x}px, ${y}px)`
    }

    if (isPointerCursor && !buttonClassList.contains('nav-button') && !buttonClassList.contains('no-cursor')) {
      this.buttonRect = buttonElement.getBoundingClientRect();

      if (!btnNoGrowClass) {
        keyframes.transform = `translate(${this.buttonRect.x}px, ${this.buttonRect.y}px)`;
        this.cursorElement.style.width = `${this.buttonRect.width}px`;
        this.cursorElement.style.height = `${this.buttonRect.height}px`;
        this.cursorElement.classList.add('rounded-0');
      }

      if (btnNoMarginClass)
        this.cursorElement.classList.add('m-0');

      if (btnNoOpacityClass)
        this.cursorElement.classList.add('opacity-0');
    } else {
      this.cursorElement.style.width = this.defaultCursorSize;
      this.cursorElement.style.height = this.defaultCursorSize;
      this.cursorElement.classList.remove('rounded-0');
      this.cursorElement.classList.remove('m-0');
      this.cursorElement.classList.remove('opacity-0');
    }

    this.cursorElement.animate(keyframes, {
      duration: this.animDuration,
      fill: "forwards",
      easing: 'ease-in-out'
    });
  }
}
