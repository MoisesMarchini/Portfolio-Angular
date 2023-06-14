import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImgParallax]'
})
export class ImgParallaxDirective {
  @Input('parallaxScroll') scrollRange: number = 100;
  @Input() maxOffset: number = 80;
  @Input() minOffset: number = 20;

  private verticalScrollPosition: number = 0;
  private parentScroll?: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('document:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.updateObjectPosition();
  }

  private updateObjectPosition() {
    const elementRect = this.elementRef.nativeElement.getBoundingClientRect(),
    elementAtCenterY = elementRect.height / 2 + elementRect.top,
    elementAtCenterX = elementRect.width / 2 + elementRect.left;

    const windowHeight = window.innerHeight,
    windowWidth = this.parentScroll? this.parentScroll.clientWidth : window.innerWidth,
    windowCenterY = (windowHeight / 2),
    windowCenterX = (windowWidth / 2);

    let objectPositionY = 50; // Centro inicial

    const distanceFromCenterY = windowCenterY - elementAtCenterY;
    const maxDistanceY = windowCenterY;
    const percentageY = Math.min(distanceFromCenterY / maxDistanceY, 1);
    objectPositionY = Math.min(Math.max(50 + percentageY * 50, this.minOffset), this.maxOffset);


    let objectPositionX = 50; // Centro inicial

    const distanceFromCenter = windowCenterX - elementAtCenterX;
    const maxDistanceX = windowCenterX;
    const percentageX = Math.min(distanceFromCenter / maxDistanceX, 1);
    objectPositionX = Math.min(Math.max(50 + percentageX * 50, this.minOffset), this.maxOffset);
    console.log(objectPositionX)

    const objectPosition = `${objectPositionX}% ${objectPositionY}%`;

    const keyframes = {
      objectPosition: objectPosition
    }

    this.elementRef.nativeElement.animate(keyframes, {
      duration: 8000,
      fill: "forwards"
    });
  }

}
