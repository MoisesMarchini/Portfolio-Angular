import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CursorHelper } from 'src/app/helpers/CursorHelper';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent {
  @ViewChild('cursor') cursor!: ElementRef;
  @ViewChild('cursorTop') cursorTop!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cursorElement = this.cursor.nativeElement;
    const cursorTopElement = this.cursorTop.nativeElement;

    CursorHelper.x = e.clientY;
    CursorHelper.y = e.clientY;

    const rng1 = Math.random();
    const rng1Rounded = Math.round(Math.random());

    const rng2 = Math.random();
    const rng2Rounded = Math.round(Math.random());

    const offsetMultiplier = rng1Rounded > 0 ? 1 : -1;
    const offsetMultiplier2 = rng2Rounded > 0 ? 1 : -1;

    const x = (e.clientX - cursorElement.offsetWidth / 2) + rng1 * 100 * offsetMultiplier,
          y = e.clientY - cursorElement.offsetHeight / 2 + rng2 * 100 * offsetMultiplier2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px)`
    }

    cursorElement.animate(keyframes, {
      duration: 8000,
      fill: "forwards"
    });
    cursorTopElement.animate(keyframes, {
      duration: 8000,
      fill: "forwards"
    });
  }

}
