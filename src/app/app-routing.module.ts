import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeaderComponent,
    data: { id: 0 }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { id: 1 }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { id: 2 }
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
