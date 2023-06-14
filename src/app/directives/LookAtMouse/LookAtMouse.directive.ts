import { Directive, ElementRef, HostListener, Renderer2, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLookAtMouse]'
})
export class LookAtMouseDirective implements OnInit, OnChanges{
  @Input() showGradient = true;
  @Input() enabled = true;
  @Input() maxAngle = 10;

  private mouseY: number = 0;
          mouseX: number = 0;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const element = this.elRef.nativeElement;

    if (!this.showGradient)
      return;
    if(!element.classList.contains('look-at-mouse')){
      this.renderer.addClass(element, 'look-at-mouse');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['enabled']) {
      this.resetTransform();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    if (!this.enabled || window.innerWidth <= 500){
      this.resetTransform();
      return;
    }

    this.doTransform();
  }

  resetTransform() {
    if (this.enabled && window.innerWidth > 500) {
      this.doTransform();
      return;
    }

    const element = this.elRef.nativeElement;

    const transformValue =
      `perspective(90vmax) rotateX(0) rotateY(0) rotateZ(0)`;

    const keyframes = {
      transform: transformValue
    }

    element.animate(keyframes, {
      duration: 800,
      fill: "forwards"
    });

  }

  doTransform() {
    const element = this.elRef.nativeElement;
    const rect = element.getBoundingClientRect();

    const elementAtCenterY = rect.height + rect.top,
      elementAtCenterX = rect.width + rect.left;

    const windowVisibleAreaY = window.innerHeight + window.screenTop,
      windowVisibleAreaX = window.innerWidth + window.screenLeft;

    const offSetX = 500;

    const isNotAtVisibleArea =
      elementAtCenterY < window.screenTop || rect.top > windowVisibleAreaY ||
      elementAtCenterX - offSetX < window.screenLeft || rect.left + offSetX > windowVisibleAreaX


    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angleX = Math.min(Math.max((this.mouseY - centerY) * -0.05, -this.maxAngle), this.maxAngle);
    const angleY = Math.min(Math.max((this.mouseX - centerX) * 0.05, -this.maxAngle), this.maxAngle);

    if (isNotAtVisibleArea) {

    }

    const perspective = '90vmax';
    const rotationZ = '0.002deg';

    const transformValue = `perspective(${perspective}) rotateX(${angleX}deg) rotateY(${angleY}deg) rotateZ(${rotationZ})`;


    const keyframes = {
      transform: transformValue
    }

    element.animate(keyframes, {
      duration: 8000,
      fill: "forwards"
    });
  }
}
