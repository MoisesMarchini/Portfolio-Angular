import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookAtMouseDirective } from './LookAtMouse/LookAtMouse.directive';
import { ImgParallaxDirective } from './ImgParallax/img-parallax.directive';



@NgModule({
  declarations: [
    LookAtMouseDirective,
    ImgParallaxDirective
  ],
  exports: [
    LookAtMouseDirective,
    ImgParallaxDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class DirectivesModule { }
