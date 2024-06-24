import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { DefaultButtonComponent } from './default-button/default-button.component';

@NgModule({
  declarations: [DefaultButtonComponent],
  exports: [DefaultButtonComponent],
  imports: [CommonModule, DirectivesModule, RouterModule],
})
export class ComponentsModule {}
