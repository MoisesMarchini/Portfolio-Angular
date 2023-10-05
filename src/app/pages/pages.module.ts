import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { EmailFormComponent } from './email-form/email-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ProjectsComponent,
    HeaderComponent,
    ContactComponent,
    EmailFormComponent,
  ]
})
export class PagesModule { }
