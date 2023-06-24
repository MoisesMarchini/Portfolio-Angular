import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CursorHelper } from 'src/app/helpers/CursorHelper';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {
  @ViewChild('cursor') cursor!: ElementRef;
  private buttonRect: DOMRect | null = null;
  private defaultCursorSize = '1.5rem';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cursorElement = this.cursor.nativeElement;
    const isPointerCursor = window.getComputedStyle(e.target as Element).cursor === 'pointer';
    const buttonElement = e.target as HTMLElement;
    const buttonClassList = buttonElement.classList;
    const excludedClass = buttonClassList.contains('nav-button');
    const btnNoMarginClass = buttonClassList.contains('cursor-m-0') || buttonClassList.contains('cursor-0');
    const btnNoOpacityClass = buttonClassList.contains('cursor-opa-0') || buttonClassList.contains('cursor-0');

    CursorHelper.x = e.clientY;
    CursorHelper.y = e.clientY;

    const x = (e.clientX - cursorElement.offsetWidth / 2),
          y = e.clientY - cursorElement.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px)`
    }

    if (isPointerCursor && !excludedClass) {
      this.buttonRect = buttonElement.getBoundingClientRect();
      cursorElement.style.width = `${this.buttonRect.width}px`;
      cursorElement.style.height = `${this.buttonRect.height}px`;
      keyframes.transform = `translate(${this.buttonRect.x}px, ${this.buttonRect.y}px)`;
      cursorElement.classList.add('rounded-0');
      if(btnNoMarginClass)
        cursorElement.classList.add('m-0');

      if(btnNoOpacityClass)
        cursorElement.classList.add('opacity-0');
    } else {
      cursorElement.style.width = this.defaultCursorSize;
      cursorElement.style.height = this.defaultCursorSize;
      cursorElement.classList.remove('rounded-0');
      cursorElement.classList.remove('m-0');
      cursorElement.classList.remove('opacity-0');
    }

    cursorElement.animate(keyframes, {
      duration: 800,
      fill: "forwards",
      timingFunction: 'ease-in-out'
    });
  }

}
