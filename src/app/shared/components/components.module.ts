import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { CursorComponent } from './cursor/cursor.component';

@NgModule({
  declarations: [
    DefaultButtonComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    CursorComponent,
  ],
  exports: [
    DefaultButtonComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    CursorComponent,
  ],
  imports: [CommonModule, DirectivesModule, RouterModule],
})
export class ComponentsModule {}
